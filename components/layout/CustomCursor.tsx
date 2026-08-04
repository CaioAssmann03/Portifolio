"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const reduced = useReducedMotion();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 300, damping: 30 });
  const ringY = useSpring(y, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch || reduced) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time device check on mount, not an external subscription
    setEnabled(true);
    document.documentElement.classList.add("custom-cursor");

    function handleMove(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
    }
    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.classList.remove("custom-cursor");
    };
  }, [reduced, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-signal"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-7 w-7 rounded-full border border-paper/40"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
}
