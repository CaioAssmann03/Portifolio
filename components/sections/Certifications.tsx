import { Award, ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { certifications, certificationsMeta } from "@/data/certifications";
import { pad2 } from "@/utils/helpers";

export function Certifications() {
  return (
    <section id="certificacoes" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          index="05"
          title="Certificações"
          description={`${certificationsMeta.totalHours} de estudo aplicado na Alura, entre ${certificationsMeta.period}.`}
        />

        <div className="divide-y divide-paper/10 border-y border-paper/10">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 0.06}>
              <div className="flex flex-wrap items-center justify-between gap-4 py-5">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[12px] text-haze">{pad2(i + 1)}</span>
                  <Award size={16} className="hidden text-signal sm:block" />
                  <div>
                    <p className="text-[15px] font-medium text-paper">{cert.name}</p>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-haze">
                      {cert.issuer} · {cert.date}
                    </p>
                  </div>
                </div>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 font-mono text-[12px] text-signal transition-opacity hover:opacity-70"
                >
                  Ver credencial <ArrowUpRight size={13} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-8 flex justify-center">
          <Link
            href="/certificados"
            className="flex items-center gap-2 rounded-full border border-paper/20 px-6 py-3 font-mono text-[13px] text-paper transition-colors hover:border-paper hover:bg-paper hover:text-ink"
          >
            Ver todos os certificados <ArrowRight size={14} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
