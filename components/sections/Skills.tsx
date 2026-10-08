import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { skillCategoryIcons } from "@/components/ui/IconMap";
import { skillCategories } from "@/data/skills";

// Grouped by tier instead of a percentage: self-rated numbers say little to a reader.
// Thresholds read the existing `level` values in data/skills.ts.
const tiers = [
  { label: "Uso frequente", min: 70 },
  { label: "Já usei em projetos", min: 60 },
  { label: "Em estudo", min: 0 },
];

function groupByTier(skills: { name: string; level: number }[]) {
  return tiers
    .map((tier, i) => ({
      label: tier.label,
      items: skills.filter(
        (s) => s.level >= tier.min && (i === 0 || s.level < tiers[i - 1].min)
      ),
    }))
    .filter((group) => group.items.length > 0);
}

const accents = [
  { icon: "text-signal", edge: "from-signal" },
  { icon: "text-signal-2", edge: "from-signal-2" },
  { icon: "text-signal-3", edge: "from-signal-3" },
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
                    {groupByTier(category.skills).map((group) => (
                      <div key={group.label}>
                        <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-haze">
                          {group.label}
                        </p>
                        <ul className="flex flex-wrap gap-2">
                          {group.items.map((skill) => (
                            <li
                              key={skill.name}
                              className="rounded-full border border-paper/10 px-2.5 py-1 text-[12.5px] text-paper/90"
                            >
                              {skill.name}
                            </li>
                          ))}
                        </ul>
                      </div>
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
