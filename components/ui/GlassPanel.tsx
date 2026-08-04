import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export function GlassPanel({ children, className, as: Component = "div" }: GlassPanelProps) {
  return (
    <Component
      className={cn(
        "rounded-2xl border border-paper/10 bg-paper/[0.04] backdrop-blur-xl",
        className
      )}
    >
      {children}
    </Component>
  );
}
