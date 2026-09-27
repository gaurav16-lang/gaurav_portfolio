import { Section } from '@/components/Section';
import { Reveal } from '@/components/Reveal';
import type { PortfolioContent } from '@/types/content';

export function Experience({ experience }: { experience: NonNullable<PortfolioContent['experience']> }) {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <div className="space-y-10">
        {experience.items.map((item, index) => (
          <Reveal key={index} delayMs={index * 100}>
            <div className="border-l border-(--color-border) pl-6 transition-colors duration-300 hover:border-(--color-primary)">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-(--color-foreground)">
                  {item.role} · {item.company}
                </h3>
                <span className="font-mono text-sm text-(--color-muted)">{item.period}</span>
              </div>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-(--color-muted)">
                {item.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
