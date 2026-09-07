"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/** Slow-drifting blurred color blobs used as ambient depth behind hero content. */
export function AuroraBackground({ className }: { className?: string }) {
  const reduced = useReducedMotion();

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 -z-20 overflow-hidden ${className ?? ""}`}>
      <motion.div
        className="absolute -left-1/4 top-[-15%] h-[36rem] w-[36rem] rounded-full bg-signal/25 blur-[110px]"
        animate={reduced ? undefined : { x: [0, 40, -20, 0], y: [0, 30, -10, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-15%] top-[5%] h-[30rem] w-[30rem] rounded-full bg-signal-2/20 blur-[110px]"
        animate={reduced ? undefined : { x: [0, -30, 20, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
