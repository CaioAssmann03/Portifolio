import { TechIcon } from "@/components/ui/TechIcon";
import { cn } from "@/lib/utils";
import type { Skill } from "@/types";

interface TechMarqueeProps {
  skills: Skill[];
  reverse?: boolean;
  duration?: number; // seconds for one full loop
}

// Endless horizontal strip. The track holds two identical groups and slides by exactly
// one group (-50%), so the loop is seamless. CSS-only: runs on the compositor thread,
// pauses on hover, and is static (scrollable) with reduced motion — see .marquee in globals.css.
export function TechMarquee({ skills, reverse = false, duration = 45 }: TechMarqueeProps) {
  // Repeat inside a group so the strip is wider than large screens.
  const group = [...skills, ...skills];

  return (
    <div className="marquee">
      <div
        className={cn("marquee-track", reverse && "marquee-reverse")}
        style={{ animationDuration: `${duration}s` }}
      >
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0" aria-hidden={copy === 1 ? true : undefined}>
            {group.map((skill, i) => (
              <li
                key={`${skill.name}-${i}`}
                className="mr-3 flex shrink-0 items-center gap-3 rounded-full border border-paper/10 bg-paper/[0.04] py-2.5 pl-3.5 pr-5"
              >
                <TechIcon name={skill.icon} size={22} />
                <span className="whitespace-nowrap text-[14px] font-medium text-paper">
                  {skill.name}
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
