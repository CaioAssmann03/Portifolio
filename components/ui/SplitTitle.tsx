"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP, SplitText, NO_MOTION_PREF } from "@/lib/gsap";
import { cn } from "@/lib/utils";

// Section titles: each word slides up out of a mask when the heading scrolls into view.
// With reduced motion the text is left untouched.
export function SplitTitle({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add(NO_MOTION_PREF, () => {
        SplitText.create(el, {
          type: "words",
          mask: "words",
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.words, {
              yPercent: 115,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.07,
              scrollTrigger: { trigger: el, start: "top 88%", once: true },
            }),
        });
      });
    },
    { scope: ref }
  );

  return (
    <h2 ref={ref} className={cn(className)}>
      {children}
    </h2>
  );
}
