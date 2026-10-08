import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TechMarquee } from "@/components/ui/TechMarquee";
import { skillCategories, alsoUse } from "@/data/skills";
import { projects } from "@/data/projects";
import type { Skill } from "@/types";

// "Onde usei": projects whose tags prove the skill; falls back to the skill's own note.
function whereUsed(skill: Skill): string {
  const match = skill.match;
  const names = match
    ? projects
        .filter((p) => p.tags.some((tag) => match.includes(tag.toLowerCase())))
        .map((p) => p.name)
    : [];
  return names.length ? names.join(", ") : (skill.note ?? "");
}

const allSkills = skillCategories.flatMap((category) => category.skills);
const half = Math.ceil(allSkills.length / 2);
const rowA = allSkills.slice(0, half);
const rowB = allSkills.slice(half);

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          index="03"
          title="Stack técnica"
          description="As tecnologias que uso nos projetos do portfólio, de dados a backend e front-end."
        />
      </div>

      {/* Full-bleed strips: two rows sliding in opposite directions. */}
      <Reveal className="space-y-3">
        <TechMarquee skills={rowA} duration={50} />
        <TechMarquee skills={rowB} reverse duration={42} />
      </Reveal>

      {/* Screen readers (and the animation-free view) get the real information: where each was used. */}
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ul className="sr-only">
          {allSkills.map((skill) => (
            <li key={skill.name}>
              {skill.name}: {whereUsed(skill)}
            </li>
          ))}
        </ul>

        <Reveal className="mt-10">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-haze">
            Também uso
          </p>
          <ul className="flex flex-wrap gap-2">
            {alsoUse.map((name) => (
              <li
                key={name}
                className="rounded-full border border-paper/10 px-3 py-1 text-[12.5px] text-paper/90"
              >
                {name}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
