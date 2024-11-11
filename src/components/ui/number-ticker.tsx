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

  useEffect(() => {
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
        ease: "expo.out",
        onUpdate: function () {
          updateValue(this.targets()[0].value);
        },
      }
    );

    return () => {
      tween.kill();
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