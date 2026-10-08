"use client";

import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { journey } from "@/data/experience";
import { gsap, ScrollTrigger, useGSAP, NO_MOTION_PREF } from "@/lib/gsap";

export function Journey() {
  const timeline = useRef<HTMLDivElement>(null);

  // The vertical line draws itself as you scroll, and each dot lights up when the line reaches it.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(NO_MOTION_PREF, () => {
        const root = timeline.current;
        if (!root) return;

        gsap.fromTo(
          "[data-line-fill]",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: { trigger: root, start: "top 65%", end: "bottom 65%", scrub: 0.4 },
          }
        );

        gsap.utils.toArray<HTMLElement>("[data-dot]").forEach((dot) => {
          dot.dataset.pending = "true";
          ScrollTrigger.create({
            trigger: dot,
            start: "top 65%",
            onToggle: (self) => {
              dot.dataset.pending = self.isActive || self.progress > 0 ? "false" : "true";
            },
          });
        });
      });
    },
    { scope: timeline }
  );

  return (
    <section id="trajetoria" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          index="02"
          title="Trajetória"
          description="Experiência prática e formação acadêmica, lado a lado."
        />

        <div
          ref={timeline}
          className="relative space-y-10 border-l border-paper/10 pl-8 md:pl-10"
        >
          <span
            aria-hidden
            data-line-fill
            className="absolute -left-px top-0 h-full w-px origin-top bg-signal"
          />
          {journey.map((item, i) => {
            const Icon = item.type === "work" ? Briefcase : GraduationCap;
            return (
              <Reveal key={`${item.org}-${i}`} delay={i * 0.1} className="relative">
                <span
                  data-dot
                  className="absolute -left-[calc(2rem+5px)] top-1 flex h-2.5 w-2.5 -translate-x-1/2 items-center justify-center rounded-full bg-signal ring-4 ring-ink transition-colors duration-300 data-[pending=true]:bg-paper/25 md:-left-[calc(2.5rem+5px)]"
                />
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <Icon size={16} className="text-signal" />
                  <h3 className="text-lg font-semibold text-paper">{item.org}</h3>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-haze">
                    {item.period}
                  </span>
                </div>
                <p className="mb-3 text-[15px] text-paper/80">{item.role}</p>
                <ul className="space-y-1.5">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2 text-[14px] text-haze">
                      <span className="text-signal">—</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
