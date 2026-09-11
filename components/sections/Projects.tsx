import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects, FEATURED_PROJECTS_COUNT } from "@/data/projects";

export function Projects() {
  const featured = projects.slice(0, FEATURED_PROJECTS_COUNT);
  const hasMore = projects.length > featured.length;

  return (
    <section id="projetos" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          index="04"
          title="Projetos"
          description="De APIs a dashboards: Python, SQL, backend e Power BI em cenários reais."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.06}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>

        {hasMore ? (
          <Reveal delay={featured.length * 0.06} className="mt-8 flex justify-center">
            <Link
              href="/projetos"
              className="flex items-center gap-2 rounded-full border border-paper/20 px-6 py-3 font-mono text-[13px] text-paper transition-colors hover:border-paper hover:bg-paper hover:text-ink"
            >
              Ver todos os projetos <ArrowRight size={14} />
            </Link>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
