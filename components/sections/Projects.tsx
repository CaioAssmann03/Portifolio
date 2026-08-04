import { Code2, ExternalLink, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { TiltCard } from "@/components/ui/TiltCard";
import { projectIcons } from "@/components/ui/IconMap";
import { projects, moreProjectsNote } from "@/data/projects";
import { site } from "@/data/site";
import { pad2 } from "@/utils/helpers";

export function Projects() {
  return (
    <section id="projetos" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          index="04"
          title="Projetos"
          description="Do dado bruto ao insight — Python, SQL e Power BI em cenários reais."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => {
            const Icon = projectIcons[project.icon];
            return (
              <Reveal key={project.slug} delay={i * 0.06}>
                <TiltCard>
                  <GlassPanel className="group flex h-full flex-col overflow-hidden transition-colors hover:border-paper/25">
                    <div className="relative flex h-36 items-center justify-center overflow-hidden border-b border-paper/10 bg-gradient-to-br from-signal/20 via-transparent to-transparent">
                      <span className="font-mono text-[11px] text-haze/70 absolute left-4 top-4">
                        P.{pad2(i + 1)}
                      </span>
                      <Icon size={40} className="text-paper/25 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="mb-2 text-lg font-semibold text-paper">{project.name}</h3>
                      <p className="mb-4 flex-1 text-[14px] leading-relaxed text-haze">
                        {project.description}
                      </p>
                      <div className="mb-5 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-paper/10 px-2.5 py-1 font-mono text-[10.5px] text-haze"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-5 font-mono text-[12px]">
                        <a
                          href={project.repoUrl}
                          className="flex items-center gap-1.5 text-paper/80 transition-colors hover:text-signal"
                        >
                          <Code2 size={13} /> Repositório
                        </a>
                        {project.demoUrl ? (
                          <a
                            href={project.demoUrl}
                            className="flex items-center gap-1.5 text-paper/80 transition-colors hover:text-signal"
                          >
                            <ExternalLink size={13} /> Demo
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </GlassPanel>
                </TiltCard>
              </Reveal>
            );
          })}

          <Reveal delay={projects.length * 0.06}>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="flex h-full min-h-[19rem] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-paper/15 p-6 text-center transition-colors hover:border-signal/50"
            >
              <Sparkles size={28} className="text-signal" />
              <p className="max-w-[16rem] text-[14px] text-haze">{moreProjectsNote}</p>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
