"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li";
}

export function Reveal({ children, delay = 0, y = 24, className, as = "div" }: RevealProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement & HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  const [forced, setForced] = useState(false);
  const Component = motion[as];

  // Safety net only for browsers without IntersectionObserver: without it the
  // in-view trigger can never fire and the content would stay hidden forever.
  // (A blanket timer would reveal everything after ~1s, defeating scroll reveal.)
  useEffect(() => {
    if (typeof IntersectionObserver !== "undefined") return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- feature-detection fallback
    setForced(true);
  }, []);

  const visible = reduced || inView || forced;

  return (
    <Component
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
