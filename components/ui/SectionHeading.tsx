import { Reveal } from "@/components/ui/Reveal";

interface SectionHeadingProps {
  index: string;
  title: string;
  description?: string;
}

export function SectionHeading({ index, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-sm text-signal">{index}</span>
        <h2 className="text-3xl font-bold tracking-tight text-paper md:text-4xl">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-haze">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
