import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects, moreProjectsNote } from "@/data/projects";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Projetos",
  description: `Todos os projetos de ${site.name}: dados, backend e full-stack em cenários reais.`,
  alternates: { canonical: `${site.url}/projetos` },
};

export default function ProjetosPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-32 pt-32 lg:px-8 md:pt-40">
      <Reveal>
        <Link
          href="/#projetos"
          className="mb-10 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-wider text-haze transition-colors hover:text-paper"
        >
          <ArrowLeft size={14} /> Voltar ao portfólio
        </Link>

        <h1 className="text-4xl font-bold tracking-tight text-paper md:text-5xl">Projetos</h1>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-haze">
          Todos os {projects.length} projetos do portfólio, do primeiro (SQL puro) até o mais
          recente. {moreProjectsNote}
        </p>
      </Reveal>

      <div className="mt-16 grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.04}>
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
