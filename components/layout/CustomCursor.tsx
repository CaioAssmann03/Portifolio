"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const INTERACTIVE_SELECTOR = "a, button, input, textarea, [role='button'], [data-cursor-hover]";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
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
    function handleOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      setHovering(Boolean(target.closest?.(INTERACTIVE_SELECTOR)));
    }
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      document.documentElement.classList.remove("custom-cursor");
    };
  }, [reduced, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-signal"
        animate={{ opacity: hovering ? 0 : 1 }}
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className={`pointer-events-none fixed left-0 top-0 z-[100] rounded-full border transition-colors duration-300 ${
          hovering ? "border-signal bg-signal/15" : "border-paper/40 bg-transparent"
        }`}
        animate={{ width: hovering ? 52 : 28, height: hovering ? 52 : 28 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
}
