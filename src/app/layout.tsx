import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rajnish | Portfolio",
  description: "Portfolio website of Rajnish",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
