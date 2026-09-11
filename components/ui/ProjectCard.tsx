import { Code2, ExternalLink } from "lucide-react";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { TiltCard } from "@/components/ui/TiltCard";
import { projectIcons } from "@/components/ui/IconMap";
import { pad2 } from "@/utils/helpers";
import type { Project } from "@/types";

const accents = [
  { wash: "from-signal/20", icon: "text-signal/40" },
  { wash: "from-signal-2/20", icon: "text-signal-2/40" },
  { wash: "from-signal-3/20", icon: "text-signal-3/40" },
];

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const Icon = projectIcons[project.icon];
  const accent = accents[index % accents.length];

  return (
    <TiltCard>
      <GlassPanel className="group flex h-full flex-col overflow-hidden transition-colors hover:border-paper/25">
        <div
          className={`relative flex h-36 items-center justify-center overflow-hidden border-b border-paper/10 bg-gradient-to-br ${accent.wash} via-transparent to-transparent`}
        >
          <span className="font-mono text-[11px] text-haze/70 absolute left-4 top-4">
            P.{pad2(index + 1)}
          </span>
          <Icon
            size={40}
            className={`${accent.icon} transition-transform duration-300 group-hover:scale-110`}
          />
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
  );
}
