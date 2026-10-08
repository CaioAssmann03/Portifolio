"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { TypingText } from "@/components/ui/TypingText";
import { ProfilePhoto } from "@/components/ui/ProfilePhoto";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { scrollToSection } from "@/utils/helpers";
import { gsap, useGSAP, NO_MOTION_PREF } from "@/lib/gsap";

export function Hero() {
  const section = useRef<HTMLElement>(null);

  // Scroll parallax: the layers drift at different speeds as the hero leaves the viewport.
  // Targets are plain wrappers, so they never share a transform with the Framer Motion children.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(NO_MOTION_PREF, () => {
        const scrollTrigger = {
          trigger: section.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        };
        gsap.to("[data-parallax='wordmark']", { y: 140, ease: "none", scrollTrigger });
        gsap.to("[data-parallax='sparkline']", { y: -60, ease: "none", scrollTrigger });
        gsap.to("[data-parallax='text']", { y: -50, opacity: 0.25, ease: "none", scrollTrigger });
        gsap.to("[data-parallax='photo']", { y: 90, ease: "none", scrollTrigger });
      });
    },
    { scope: section }
  );

  return (
    <section
      ref={section}
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20"
    >
      <AuroraBackground />

      {/* Ambient giant outlined wordmark */}
      <div
        aria-hidden
        data-parallax="wordmark"
        className="pointer-events-none absolute inset-0 flex select-none flex-col items-center justify-center gap-0 overflow-hidden opacity-[var(--wordmark-opacity)]"
      >
        <span className="whitespace-nowrap text-[22vw] font-black leading-[0.8] tracking-tighter text-transparent [-webkit-text-stroke:1.5px_var(--color-paper)] md:text-[16vw]">
          CAIO
        </span>
        <span className="whitespace-nowrap text-[22vw] font-black leading-[0.8] tracking-tighter text-transparent [-webkit-text-stroke:1.5px_var(--color-paper)] md:text-[16vw]">
          ASSMANN
        </span>
      </div>

      {/* Ambient sparkline */}
      <svg
        aria-hidden
        data-parallax="sparkline"
        viewBox="0 0 600 200"
        className="pointer-events-none absolute -right-24 bottom-10 h-64 w-[36rem] opacity-30 md:opacity-40"
        fill="none"
      >
        <motion.polyline
          points="0,150 60,130 120,140 180,90 240,110 300,50 360,70 420,20 480,45 540,10 600,30"
          stroke="var(--color-signal)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.4 }}
        />
      </svg>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div data-parallax="text">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-paper/15 px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider text-haze"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
            </span>
            Aberto a vagas júnior em Dados e Backend
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-paper sm:text-6xl md:text-7xl"
          >
            {site.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5 font-mono text-lg text-signal md:text-xl"
          >
            <TypingText lines={[...site.roles]} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 max-w-lg text-[17px] leading-relaxed text-haze"
          >
            {site.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button variant="primary" onClick={() => scrollToSection("#projetos")}>
              Ver projetos
            </Button>
            <Button variant="outline" href={site.curriculoUrl} download icon={<Download size={14} />}>
              Download CV
            </Button>
          </motion.div>
        </div>

        <div data-parallax="photo">
          <ProfilePhoto className="lg:ml-auto" />
        </div>
      </div>

      <motion.button
        aria-label="Rolar para baixo"
        onClick={() => scrollToSection("#sobre")}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-haze transition-colors hover:text-paper"
      >
        <ArrowDown size={18} />
      </motion.button>
    </section>
  );
}
