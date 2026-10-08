"use client";

import { Children, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface ProjectGridProps {
  children: ReactNode;
  className?: string;
}

// Scroll effect for the project cards, driven by GSAP + ScrollTrigger:
//  1. entry: cards rise and fade in, staggered per batch that enters the viewport;
//  2. parallax: on 2-column layouts the right column drifts slightly slower, scrubbed to scroll.
// Entry moves the outer wrapper, parallax moves the inner one, so the two never fight over
// the same transform (and neither touches TiltCard's own Framer Motion transform).
export function ProjectGrid({ children, className }: ProjectGridProps) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const cards = gsap.utils.toArray<HTMLElement>("[data-project-card]");
        gsap.set(cards, { opacity: 0, y: 64, scale: 0.96 });

        ScrollTrigger.batch(cards, {
          start: "top 88%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.12,
              overwrite: true,
            }),
        });
      });

      mm.add("(prefers-reduced-motion: no-preference) and (min-width: 640px)", () => {
        gsap.utils.toArray<HTMLElement>("[data-project-parallax]").forEach((el, i) => {
          if (i % 2 === 0) return;
          gsap.to(el, {
            yPercent: -5,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          });
        });
      });
    },
    { scope: root }
  );

  return (
    <div ref={root} className={cn(className)}>
      {Children.map(children, (child) => (
        <div data-project-card>
          <div data-project-parallax className="h-full">
            {child}
          </div>
        </div>
      ))}
    </div>
  );
}
