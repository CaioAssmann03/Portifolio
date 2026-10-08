import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
// Numbers taken from the project descriptions in data/projects.ts; update both together.
const stats = [
  { label: "Rotinas automatizadas na Eve Imóveis", value: 4 },
  { label: "Vagas de Dados analisadas", value: 312 },
  { label: "Funcionários na análise de turnover", value: 1470 },
  { label: "Testes automatizados na API de Documentos", value: 22 },
];

export function About() {
  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          index="01"
          title="Sobre mim"
          description="Quem convive com processo bagunçado aprende a ver onde ele quebra. Eu uso isso para construir o que resolve."
        />

        <div className="grid gap-16 md:grid-cols-[1.4fr_1fr]">
          <Reveal delay={0.1} className="space-y-5 text-[15.5px] leading-relaxed text-haze">
            <p>
              Trabalho na <span className="text-paper">Eve Imóveis</span> desde 2022, no
              administrativo de locações, vendas e condomínios. Foi ali que vi o que acontece
              quando a informação vive espalhada em PDFs e planilhas: retrabalho, erro e hora
              perdida. Então comecei a automatizar. Hoje, 4 rotinas em Python leem os relatórios
              do sistema, conferem os próprios números e entregam recibos e listas prontos para
              imprimir.{" "}
              <span className="text-paper">O que levava horas por mês sai em segundos.</span>
            </p>
            <p>
              Estudo Análise e Desenvolvimento de Sistemas no Senac e construo projetos do começo
              ao fim: APIs com autenticação e testes, dashboards em Power BI, um SaaS
              multi-tenant e análises com dados reais. Gosto de problemas em que dado bagunçado
              vira decisão, e de explicar por que cada escolha técnica foi feita.
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
                    <AnimatedCounter value={stat.value} />
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
