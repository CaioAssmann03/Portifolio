import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Award } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { certificationTracks, certificationsMeta } from "@/data/certifications";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Certificados",
  description: `Todos os certificados de ${site.name} — ${certificationsMeta.totalHours} de estudo na Alura.`,
};

export default function CertificadosPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pb-32 pt-32 lg:px-8 md:pt-40">
      <Reveal>
        <Link
          href="/#certificacoes"
          className="mb-10 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-wider text-haze transition-colors hover:text-paper"
        >
          <ArrowLeft size={14} /> Voltar ao portfólio
        </Link>

        <h1 className="text-4xl font-bold tracking-tight text-paper md:text-5xl">
          Certificados
        </h1>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-haze">
          Todos os cursos concluídos na Alura, agrupados por trilha —{" "}
          {certificationsMeta.totalHours} de estudo entre {certificationsMeta.period}.
          Certificado consolidado verificável no link abaixo.
        </p>

        <a
          href={certificationsMeta.url}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-paper/20 px-5 py-2.5 font-mono text-[12px] text-paper transition-colors hover:border-paper hover:bg-paper hover:text-ink"
        >
          Verificar certificado consolidado <ArrowUpRight size={13} />
        </a>
      </Reveal>

      <div className="mt-16 space-y-14">
        {certificationTracks.map((track, ti) => (
          <Reveal key={track.title} delay={ti * 0.05}>
            <div className="mb-5 flex items-baseline gap-3">
              <Award size={16} className="text-signal" />
              <h2 className="text-xl font-semibold text-paper">{track.title}</h2>
              <span className="font-mono text-[11px] uppercase tracking-wider text-haze">
                {track.hours}
              </span>
            </div>

            <GlassPanel className="divide-y divide-paper/10">
              {track.courses.map((course) => (
                <div
                  key={course.name}
                  className="flex flex-wrap items-center justify-between gap-3 px-5 py-4"
                >
                  <p className="text-[14px] text-paper/90">{course.name}</p>
                  <div className="flex items-center gap-3 font-mono text-[11px] text-haze">
                    <span>{course.period}</span>
                    <span className="text-signal">{course.hours}</span>
                  </div>
                </div>
              ))}
            </GlassPanel>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
