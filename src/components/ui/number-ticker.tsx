"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

export default function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
}: {
  value: number;
  direction?: "up" | "down";
  className?: string;
  delay?: number; // delay in s
  decimalPlaces?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const targetValue = direction === "down" ? 0 : value;
            const startValue = direction === "down" ? value : 0;

            const updateValue = (latest: number) => {
              if (ref.current) {
                ref.current.textContent = Intl.NumberFormat("en-US", {
                  minimumFractionDigits: decimalPlaces,
                  maximumFractionDigits: decimalPlaces,
                }).format(Number(latest.toFixed(decimalPlaces)));
              }
            };

            const tween = gsap.to(
              { value: startValue },
              {
                value: targetValue,
                duration: 2,
                delay,
                ease: "power2.inOut",
                onUpdate: function () {
                  updateValue(this.targets()[0].value);
                },
              }
            );

            return () => {
              tween.kill();
            };
          }
        });
      },
      {
        threshold: 0.1, // Start when 10% of the element is visible
      }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [value, direction, delay, decimalPlaces]);

  return (
    <span
      className={cn(
        "inline-block tabular-nums text-black dark:text-white tracking-wider",
        className
      )}
      ref={ref}
    />
  );
}