"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface TypingTextProps {
  lines: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  holdMs?: number;
}

export function TypingText({
  lines,
  className,
  typingSpeed = 55,
  deletingSpeed = 30,
  holdMs = 1400,
}: TypingTextProps) {
  const reduced = useReducedMotion();
  const [lineIndex, setLineIndex] = useState(0);
  const [text, setText] = useState(reduced ? lines[0] : "");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">("typing");

  useEffect(() => {
    if (reduced) return;
    const current = lines[lineIndex % lines.length];

    if (phase === "typing") {
      if (text.length < current.length) {
        const t = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("holding"), holdMs);
      return () => clearTimeout(t);
    }

    if (phase === "holding") {
      const t = setTimeout(() => setPhase("deleting"), holdMs);
      return () => clearTimeout(t);
    }

    if (phase === "deleting") {
      if (text.length > 0) {
        const t = setTimeout(() => setText(current.slice(0, text.length - 1)), deletingSpeed);
        return () => clearTimeout(t);
      }
      // eslint-disable-next-line react-hooks/set-state-in-effect -- internal animation state-machine transition, not a sync with an external system
      setLineIndex((i) => (i + 1) % lines.length);
      setPhase("typing");
    }
  }, [text, phase, lineIndex, lines, reduced, typingSpeed, deletingSpeed, holdMs]);

  return (
    <span className={className}>
      {text}
      <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-signal align-middle" style={{ height: "1em" }} />
    </span>
  );
}
