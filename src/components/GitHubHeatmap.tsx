"use client";

import { useEffect, useState } from "react";

interface HeatmapDay {
  date: string;
  count: number;
  day: string;
}

interface ContributionDay {
  date: string;
  contributionCount: number;
}

interface GraphQLError {
  message: string;
  extensions?: {
    type?: string;
  };
}

interface GraphQLResponse {
  data?: any;
  errors?: GraphQLError[];
}

class GitHubAPIError extends Error {
  constructor(
    message: string,
    public type: "NETWORK" | "AUTH" | "GRAPHQL" | "PARSE" | "UNKNOWN" = "UNKNOWN"
  ) {
    super(message);
    this.name = "GitHubAPIError";
  }
}

const GitHubHeatmap = () => {
  const [heatmapData, setHeatmapData] = useState<HeatmapDay[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  const handleRetry = () => {
    setRetryCount((prev) => prev + 1);
  };

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        setError(null);

        const username = "rajnish-oss";
        const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

        // Validate token exists
        if (!token) {
          throw new GitHubAPIError(
            "GitHub token not configured. Please set NEXT_PUBLIC_GITHUB_TOKEN in .env.local",
            "AUTH"
          );
        }

        // Calculate date range (last year)
        const to = new Date();
        const from = new Date();
        from.setFullYear(from.getFullYear() - 1);

        const fromISO = from.toISOString();
        const toISO = to.toISOString();

        // Corrected GraphQL query with proper variable syntax
        const query = `
          query($username: String!, $from: DateTime!, $to: DateTime!) {
            user(login: $username) {
              contributionsCollection(from: $from, to: $to) {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      date
                      contributionCount
                    }
                  }
                }
              }
            }
          }
        `;

        // Validate query format
        if (!query.includes("$username") || !query.includes("$from") || !query.includes("$to")) {
          throw new GitHubAPIError(
            "GraphQL query validation failed",
            "PARSE"
          );
        }

        let response: Response;
        try {
          response = await fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              query,
              variables: {
                username,
                from: fromISO,
                to: toISO,
              },
            }),
          });
        } catch (networkErr) {
          throw new GitHubAPIError(
            `Network error: ${networkErr instanceof Error ? networkErr.message : "Failed to connect to GitHub API"}`,
            "NETWORK"
          );
        }

        // Handle HTTP errors
        if (!response.ok) {
          const statusText = response.statusText || `HTTP ${response.status}`;
          throw new GitHubAPIError(
            `GitHub API returned ${response.status}: ${statusText}`,
            "NETWORK"
          );
        }

        let result: GraphQLResponse;
        try {
          result = await response.json();
        } catch (parseErr) {
          throw new GitHubAPIError(
            "Failed to parse GitHub API response",
            "PARSE"
          );
        }

        // Handle GraphQL errors
        if (result.errors && result.errors.length > 0) {
          const errorMsg = result.errors
            .map((err) => err.message)
            .join("; ");
          
          const isAuthError = result.errors.some(
            (err) => err.extensions?.type === "UNAUTHENTICATED" || err.message.includes("authorize")
          );

          throw new GitHubAPIError(
            `GitHub API error: ${errorMsg}`,
            isAuthError ? "AUTH" : "GRAPHQL"
          );
        }

        // Validate response structure
        const weeks =
          result.data?.user?.contributionsCollection?.contributionCalendar
            ?.weeks;

        if (!weeks || !Array.isArray(weeks)) {
          throw new GitHubAPIError(
            "Invalid response structure from GitHub API: missing contribution data",
            "PARSE"
          );
        }

        // Parse the contribution data
        const data: HeatmapDay[] = [];
        const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        weeks.forEach((week: any) => {
          if (!Array.isArray(week.contributionDays)) {
            console.warn("Invalid week structure", week);
            return;
          }

          week.contributionDays.forEach((day: ContributionDay) => {
            try {
              const date = new Date(day.date);
              data.push({
                date: day.date,
                count: day.contributionCount || 0,
                day: dayNames[date.getDay()],
              });
            } catch (dayErr) {
              console.warn(`Failed to parse day: ${day.date}`, dayErr);
            }
          });
        });

        if (data.length === 0) {
          console.warn("No contribution data found in response");
        }

        setHeatmapData(data);
        setError(null);
        setRetryCount(0);
      } catch (err) {
        let errorMessage: string;
        let errorType: string;

        if (err instanceof GitHubAPIError) {
          errorMessage = err.message;
          errorType = err.type;
        } else if (err instanceof Error) {
          errorMessage = err.message;
          errorType = "UNKNOWN";
        } else {
          errorMessage = "An unexpected error occurred";
          errorType = "UNKNOWN";
        }

        // Log error with context
        console.error(`[GitHubHeatmap ${errorType}]`, {
          message: errorMessage,
          timestamp: new Date().toISOString(),
          retryCount,
        });

        setError(errorMessage);
        // Fallback to mock data
        generateMockData();
      } finally {
        setLoading(false);
      }
    };

    const generateMockData = () => {
      const data: HeatmapDay[] = [];
      const today = new Date();
      const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

      for (let i = 0; i < 365; i++) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const count = Math.floor(Math.random() * 11);
        const dateStr = date.toISOString().split("T")[0];
        const dayName = dayNames[date.getDay()];

        data.push({
          date: dateStr,
          count,
          day: dayName,
        });
      }

      setHeatmapData(data.reverse());
    };

    fetchGitHubData();
  }, [retryCount]);

  // Get color intensity for heatmap cells
  const getColor = (count: number, isBlack: boolean) => {
    if (isBlack) {
      // Black theme - white shades
      if (count === 0) return "bg-gray-800";
      if (count <= 2) return "bg-gray-700";
      if (count <= 4) return "bg-gray-600";
      if (count <= 6) return "bg-gray-500";
      if (count <= 8) return "bg-gray-400";
      return "bg-white";
    } else {
      // White theme - dark shades
      if (count === 0) return "bg-gray-100";
      if (count <= 2) return "bg-gray-200";
      if (count <= 4) return "bg-gray-300";
      if (count <= 6) return "bg-gray-400";
      if (count <= 8) return "bg-gray-500";
      return "bg-black";
    }
  };

  // Organize data into weeks
  const weeks: HeatmapDay[][] = [];
  for (let i = 0; i < heatmapData.length; i += 7) {
    weeks.push(heatmapData.slice(i, i + 7));
  }

  return (
    <>
      {/* Image on top */}
      <div className="relative flex justify-center -mb-40 -top-34 z-50">
        <img
          src="/lyinggiblit.png"
          alt="GitHub Heatmap"
          className="w-80 md:w-96 lg:w-25 h-auto object-cover rounded-b-lg "
        />
      </div>

      <section className="relative py-16 bg-black overflow-hidden z-0">
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-12 px-6 pt-32">
          <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-2 text-xs font-medium text-white mb-4">
            <div className="w-2 h-2 bg-white rounded-full" />
            <span>{loading ? "Loading..." : "Contribution Activity"}</span>
          </div>

          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            GitHub{" "}
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Heatmap
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            {error
              ? "Live data unavailable - showing demo"
              : "A year of coding contributions and consistent development"}
          </p>

          {error && (
            <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg max-w-2xl mx-auto">
              <p className="text-red-400 text-sm font-medium mb-2">⚠️ Error Loading Live Data</p>
              <p className="text-red-300/80 text-xs mb-3">{error}</p>
              <button
                onClick={handleRetry}
                disabled={loading}
                className="px-3 py-1 text-xs bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 rounded text-red-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? "Retrying..." : "Retry"}
              </button>
            </div>
          )}
        </div>

        {/* Heatmap Grid */}
        <div className="max-w-8xl mx-auto px-6 md:px-8">
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white mb-4"></div>
                <p className="text-gray-400">Fetching your GitHub data...</p>
              </div>
            </div>
          ) : (
            <div className="inline-flex gap-1 flex-wrap justify-center w-full">
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1">
                  {week.map((day, dayIndex) => (
                    <div
                      key={`${weekIndex}-${dayIndex}`}
                      className={`w-4 h-4 md:w-5 md:h-5 rounded-sm cursor-pointer transition-all duration-200 hover:ring-2 hover:ring-white/50 ${getColor(
                        day.count,
                        true
                      )}`}
                      title={`${day.date}: ${day.count} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* Legend */}
          <div className="flex items-center justify-center gap-4 mt-12 flex-wrap">
            <span className="text-gray-400 text-sm">Less</span>
            <div className="flex gap-1">
              {[0, 2, 4, 6, 8, 10].map((level) => (
                <div
                  key={level}
                  className={`w-3 h-3 rounded-sm ${getColor(level, true)}`}
                  title={`${level} contributions`}
                />
              ))}
            </div>
            <span className="text-gray-400 text-sm">More</span>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default GitHubHeatmap;
