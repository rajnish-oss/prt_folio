"use client";

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      smooth: 1,
      effects: true,
    });

    return () => {
      smoother.kill();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
