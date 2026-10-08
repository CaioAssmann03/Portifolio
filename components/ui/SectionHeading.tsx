import { Reveal } from "@/components/ui/Reveal";
import { SplitTitle } from "@/components/ui/SplitTitle";

interface SectionHeadingProps {
  index: string;
  title: string;
  description?: string;
}

export function SectionHeading({ index, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-sm text-signal">{index}</span>
        <SplitTitle className="text-3xl font-bold leading-[1.2] tracking-tight text-paper md:text-4xl">
          {title}
        </SplitTitle>
      </div>
      {description ? (
        <Reveal delay={0.15}>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-haze">{description}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
