"use client";

import type { ElementType, MouseEvent, ReactNode } from "react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  spotlight?: boolean;
}

export function GlassPanel({
  children,
  className,
  as: Component = "div",
  spotlight = true,
}: GlassPanelProps) {
  const ref = useRef<HTMLElement>(null);

  function handleMouseMove(event: MouseEvent<HTMLElement>) {
    if (!spotlight || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    ref.current.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  }

  return (
    <Component
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        // backdrop-blur is one of the most expensive properties for mobile GPUs to
        // composite, and this component renders 10+ times on the home page (every
        // skill/project card). Keep it off below md: where it caused real jank on
        // phones, full frosted-glass look stays on tablet/desktop.
        "group/panel relative isolate overflow-hidden rounded-2xl border border-paper/10 bg-paper/[0.06] md:bg-paper/[0.04] md:backdrop-blur-xl",
        className
      )}
    >
      {spotlight ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover/panel:opacity-[0.14]"
          style={{
            background:
              "radial-gradient(320px circle at var(--spot-x, 50%) var(--spot-y, 50%), var(--color-signal), transparent 70%)",
          }}
        />
      ) : null}
      {children}
    </Component>
  );
}
