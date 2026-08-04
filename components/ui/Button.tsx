"use client";

import { motion } from "framer-motion";
import type { MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
}

interface AsButton extends CommonProps {
  href?: undefined;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

interface AsLink extends CommonProps {
  href: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
}

type ButtonProps = AsButton | AsLink;

const variants: Record<Variant, string> = {
  primary:
    "bg-paper text-ink border border-paper hover:bg-transparent hover:text-paper",
  outline:
    "bg-transparent text-paper border border-paper/40 hover:border-paper hover:bg-paper hover:text-ink",
  ghost:
    "bg-transparent text-haze border border-transparent hover:text-paper underline-offset-4 hover:underline",
};

export function Button(props: ButtonProps) {
  const { children, variant = "primary", className, icon } = props;

  const classes = cn(
    "inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-[13px] font-medium tracking-wide transition-colors duration-200",
    variants[variant],
    className
  );

  if ("href" in props && props.href) {
    return (
      <motion.a
        href={props.href}
        target={props.target}
        rel={props.rel}
        download={props.download}
        className={classes}
        whileTap={{ scale: 0.96 }}
      >
        {children}
        {icon}
      </motion.a>
    );
  }

  const { type = "button", disabled, onClick } = props as AsButton;

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
      whileTap={{ scale: 0.96 }}
    >
      {children}
      {icon}
    </motion.button>
  );
}
