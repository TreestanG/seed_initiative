"use client"

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface FadeInOnScrollProps {
  children: React.ReactNode;
  className?: string;
}

export default function FadeInOnScroll({ children, className }: FadeInOnScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.from(containerRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    }
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
} 