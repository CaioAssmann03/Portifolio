"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export function TiltCard({ children, className }: TiltCardProps) {
  const reduced = useReducedMotion();
  const isTouch = useIsTouchDevice();
  // onMouseMove never fires on touch, so the tilt itself is already inert there.
  // But `will-change: transform` still forces the browser to allocate a
  // dedicated compositing layer per card, and mouse listeners are hooked up
  // for nothing. With 7 of these on the Projects grid, skip all of it up
  // front on touch devices instead of paying for a layer that never animates.
  const skip = reduced || isTouch;

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(springY, [0, 1], [6, -6]);
  const rotateY = useTransform(springX, [0, 1], [-6, 6]);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width);
    y.set((event.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <motion.div
      onMouseMove={skip ? undefined : handleMouseMove}
      onMouseLeave={skip ? undefined : handleMouseLeave}
      style={skip ? undefined : { rotateX, rotateY, transformPerspective: 800 }}
      className={cn(!skip && "will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
