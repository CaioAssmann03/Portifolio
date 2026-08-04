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

  // Safety net: if the IntersectionObserver-based trigger never fires for any
  // reason (browser quirk, dev Strict Mode double-effect, etc.), force the
  // content visible after a short delay instead of leaving it hidden forever.
  useEffect(() => {
    const timeout = setTimeout(() => setForced(true), 900);
    return () => clearTimeout(timeout);
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
