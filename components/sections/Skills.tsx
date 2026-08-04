import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { skillCategoryIcons } from "@/components/ui/IconMap";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          index="03"
          title="Stack técnica"
          description="Organizada por etapa do pipeline — de dados brutos até serviço em produção."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => {
            const Icon = skillCategoryIcons[category.icon];
            return (
              <Reveal key={category.id} delay={i * 0.08}>
                <GlassPanel className="h-full p-6 transition-colors hover:border-paper/25">
                  <div className="mb-6 flex items-center gap-2.5">
                    <Icon size={16} className="text-signal" />
                    <h3 className="font-mono text-[11px] uppercase tracking-wider text-paper">
                      {category.title}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <ProgressBar key={skill.name} label={skill.name} level={skill.level} />
                    ))}
                  </div>
                </GlassPanel>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
