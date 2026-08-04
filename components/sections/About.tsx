import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { projects } from "@/data/projects";
import { certificationTracks } from "@/data/certifications";
import { skillCategories } from "@/data/skills";

const totalSkills = skillCategories.reduce((sum, c) => sum + c.skills.length, 0);
const totalCertifications = certificationTracks.reduce((sum, t) => sum + t.courses.length, 0);

const stats = [
  { label: "Projetos no portfólio", value: projects.length },
  { label: "Certificações", value: totalCertifications },
  { label: "Ferramentas em uso", value: totalSkills },
];

export function About() {
  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          index="01"
          title="Sobre mim"
          description="De processos administrativos a pipelines de dados — a mesma obsessão por organização, aplicada em escala."
        />

        <div className="grid gap-16 md:grid-cols-[1.4fr_1fr]">
          <Reveal delay={0.1} className="space-y-5 text-[15.5px] leading-relaxed text-haze">
            <p>
              Sou <span className="text-paper">Caio Assmann</span>, estudante de Análise e
              Desenvolvimento de Sistemas no Senac, com foco em dados, Python e backend. Comecei
              como estagiário na Secretaria da Saúde de Porto Alegre, com apoio administrativo e
              lançamento de dados internos, e hoje atuo na Eve Imóveis com administração
              condominial, locações e organização de informações de imóveis — uma vivência
              prática que me deu um olhar apurado para dados bagunçados e processos que precisam
              de estrutura.
            </p>
            <p>
              Estou aplicando esse olhar para transformar dados brutos em decisões, dashboards e
              sistemas em produção. Construo, projeto após projeto, uma base sólida em SQL,
              Python, Power BI e APIs, sempre documentando o processo e compartilhando o
              aprendizado.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col divide-y divide-paper/10 border-y border-paper/10">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-baseline justify-between py-5">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-haze">
                    {stat.label}
                  </span>
                  <span className="font-mono text-2xl font-semibold text-signal">
                    <AnimatedCounter value={stat.value} suffix="+" />
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
