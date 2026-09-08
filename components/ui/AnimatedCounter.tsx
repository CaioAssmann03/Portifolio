"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
}

export function AnimatedCounter({ value, duration = 1200, suffix = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(reduced ? value : 0);
  const [forced, setForced] = useState(false);

  // Safety net: this component nests its own useInView inside sections that are
  // already gated by <Reveal>'s own useInView. That double observer occasionally
  // never reports true (same class of bug Reveal.tsx guards against), leaving the
  // counter stuck at 0 forever. Force it to run after a short delay regardless.
  useEffect(() => {
    const timeout = setTimeout(() => setForced(true), 900);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (reduced || !(inView || forced)) return;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    }

    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, forced, value, duration, reduced]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
