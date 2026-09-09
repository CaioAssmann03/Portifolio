"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const initials = site.name
  .split(" ")
  .map((word) => word[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

export function ProfilePhoto({ className }: { className?: string }) {
  const [failed, setFailed] = useState(false);
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={cn("relative mx-auto w-full max-w-[22rem]", className)}
    >
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-signal/40 via-signal-2/25 to-signal-3/20 opacity-70 blur-3xl"
      />
      <motion.div
        animate={reduced ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] border border-paper/10 bg-panel shadow-2xl shadow-black/40"
      >
        {!failed ? (
          <Image
            src={site.photoUrl}
            alt={site.name}
            fill
            priority
            sizes="(min-width: 1024px) 380px, 70vw"
            onError={() => setFailed(true)}
            className="object-cover grayscale transition-all duration-700 ease-out hover:grayscale-0"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center">
            <span className="font-mono text-7xl font-bold text-paper/10">{initials}</span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-haze/70">
              Adicione public/profile.jpg
            </span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-signal via-signal-2 to-signal-3" />
      </motion.div>
    </motion.div>
  );
}
