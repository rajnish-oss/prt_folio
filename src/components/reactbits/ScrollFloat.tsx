"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";

// Device detection
const detectDeviceCapabilities = () => {
  if (typeof window === 'undefined') return { isMobile: false, isLowEnd: false, preferReducedMotion: false };
  
  const isMobile = window.innerWidth <= 768;
  const preferReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cores = typeof navigator !== 'undefined' && (navigator as any).hardwareConcurrency ? (navigator as any).hardwareConcurrency : 4;
  const isLowEnd = cores <= 2 || (isMobile && cores <= 4);
  
  return { isMobile, isLowEnd, preferReducedMotion };
};

const ScrollFloat = ({ 
  children, 
  animationDuration = 1.2, 
  stagger = 0.04, 
  ease = "back.out(1.7)" 
}: {
  children: string;
  animationDuration?: number;
  stagger?: number;
  ease?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const { isMobile, isLowEnd, preferReducedMotion } = detectDeviceCapabilities();
  
  // Optimize animation for low-end devices
  const shouldDisableAnimation = preferReducedMotion || isLowEnd;
  const optimizedDuration = isMobile ? animationDuration * 0.8 : animationDuration;
  const optimizedStagger = isMobile ? stagger * 1.5 : stagger;

  const animate = () => {
    if (ref.current && !shouldDisableAnimation) {
      const letters = ref.current.children;
      gsap.fromTo(letters, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: optimizedDuration, 
          stagger: optimizedStagger, 
          ease: ease,
          delay: 0.2
        }
      );
    }
  };

  useEffect(() => {
    if (isInView && !shouldDisableAnimation) {
      animate();
    }
  }, [isInView]);

  return (
    <span ref={ref} className={`inline-block ${shouldDisableAnimation ? 'opacity-100' : ''}`}>
      {children.split("").map((letter, index) => (
        <span 
          key={index} 
          className={`inline-block ${shouldDisableAnimation ? 'opacity-100 transform-none' : 'opacity-0'}`}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </span>
  );
};

export default ScrollFloat;
