import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { skillCategoryIcons } from "@/components/ui/IconMap";
import { skillCategories } from "@/data/skills";

const accents = [
  { icon: "text-signal", bar: "bg-signal", edge: "from-signal" },
  { icon: "text-signal-2", bar: "bg-signal-2", edge: "from-signal-2" },
  { icon: "text-signal-3", bar: "bg-signal-3", edge: "from-signal-3" },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          index="03"
          title="Stack técnica"
          description="Organizada por camada do desenvolvimento: dados, backend, front-end e as ferramentas do dia a dia."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => {
            const Icon = skillCategoryIcons[category.icon];
            const accent = accents[i % accents.length];
            return (
              <Reveal key={category.id} delay={i * 0.08}>
                <GlassPanel className="h-full p-6 transition-colors hover:border-paper/25">
                  <div
                    aria-hidden
                    className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${accent.edge} to-transparent`}
                  />
                  <div className="mb-6 flex items-center gap-2.5">
                    <Icon size={16} className={accent.icon} />
                    <h3 className="font-mono text-[11px] uppercase tracking-wider text-paper">
                      {category.title}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <ProgressBar
                        key={skill.name}
                        label={skill.name}
                        level={skill.level}
                        barClassName={accent.bar}
                      />
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
