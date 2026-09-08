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
        "group/panel relative isolate overflow-hidden rounded-2xl border border-paper/10 bg-paper/[0.04] backdrop-blur-xl",
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
