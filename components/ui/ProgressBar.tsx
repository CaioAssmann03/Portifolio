"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  label: string;
  level: number;
}

export function ProgressBar({ label, level }: ProgressBarProps) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-[13px] text-paper/90">{label}</span>
        <span className="font-mono text-[11px] text-haze">{level}%</span>
      </div>
      <div className="h-1 w-full overflow-hidden rounded-full bg-paper/10">
        <motion.div
          className="h-full rounded-full bg-signal"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
