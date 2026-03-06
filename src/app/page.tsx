"use client"
import { Suspense, lazy } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LiquidEther from '@/components/reactbits/either';
import LoadingSkeleton from "@/components/LoadingSkeleton";
import { useState } from "react";
import { is } from "@react-three/fiber/dist/declarations/src/core/utils";

// Lazy load heavy components
const Skills = dynamic(() => import("@/components/Skills"), {
  loading: () => <LoadingSkeleton height="h-[600px]" />,
  ssr: false,
});

const Experience = dynamic(() => import("@/components/Experience"), {
  loading: () => <LoadingSkeleton height="h-80" />,
  ssr: false,
});

const GitHubHeatmap = dynamic(() => import("@/components/GitHubHeatmap"), {
  loading: () => <LoadingSkeleton height="h-96" />,
  ssr: false,
});

const Journey = dynamic(() => import("@/components/Journey"), {
  loading: () => <LoadingSkeleton height="h-[500px]" />,
  ssr: false,
});

const WorkProcess = dynamic(() => import("@/components/WorkProcess"), {
  loading: () => <LoadingSkeleton height="h-[600px]" />,
  ssr: false,
});

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <LoadingSkeleton height="h-96" />,
  ssr: false,
});

const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <LoadingSkeleton height="h-[500px]" />,
  ssr: false,
});

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Global Background Fluid Effect */}
      <div className="fixed inset-0 z-5 pointer-events-none">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={15}
          cursorSize={80}
          isViscous={false}
          iterationsViscous={14}
          iterationsPoisson={14}
          resolution={0.3}
          isBounce={false}
          autoDemo
          autoSpeed={0.4}
          autoIntensity={1.8}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

        <main className="min-h-screen bg-white">
          <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
          {/* White Sections (z-0 background, z-10 content, LiquidEther at z-5 is between them) */}
          <div id="home" className="relative z-0">
            <Hero isSidebarOpen={isSidebarOpen} />
          </div>
          
          {/* Black Sections (z-20 covers LiquidEther) */}
          <div id="skills" className="relative z-20">
            <Suspense fallback={<LoadingSkeleton height="h-[600px]" />}>
              <Skills />
            </Suspense>
          </div>
          
          <div id="experience" className="relative z-0">
            <Suspense fallback={<LoadingSkeleton height="h-80" />}>
              <Experience />
            </Suspense>
          </div>
          
          <div className="relative z-20">
            <Suspense fallback={<LoadingSkeleton height="h-96" />}>
              <GitHubHeatmap />
            </Suspense>
          </div>
          
          <div id="journey" className="relative z-0">
            <Suspense fallback={<LoadingSkeleton height="h-[500px]" />}>
              <Journey />
            </Suspense>
          </div>
          
          <div className="relative z-20">
            <Suspense fallback={<LoadingSkeleton height="h-[600px]" />}>
              <WorkProcess />
            </Suspense>
          </div>
          
          <div className="relative z-0">
            <Suspense fallback={<LoadingSkeleton height="h-96" />}>
              <Testimonials />
            </Suspense>
          </div>
          
          <div id="projects" className="relative z-20">
            <Suspense fallback={<LoadingSkeleton height="h-[500px]" />}>
              <Projects />
            </Suspense>
          </div>
          
          {/* Footer */}
          <footer className="relative z-0 py-10 text-center text-sm text-black/40 bg-white">
            <div className="relative z-10 space-y-3">
              <div>© 2026 Rajnish Pandey - All Rights Reserved</div>
              <div className="flex justify-center gap-6 text-black/50 text-xs">
                <a href="mailto:rajnishpandey844@gmail.com" className="hover:text-black transition-colors">rajnishpandey844@gmail.com</a>
                <span>•</span>
                <a href="tel:+916306837469" className="hover:text-black transition-colors">+91 6306837469</a>
              </div>
            </div>
          </footer>
        </main>
    </>
  );
}
