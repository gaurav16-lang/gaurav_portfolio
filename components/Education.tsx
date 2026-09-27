import { Section } from '@/components/Section';
import { Reveal } from '@/components/Reveal';
import type { PortfolioContent } from '@/types/content';

export function Education({ education }: { education: NonNullable<PortfolioContent['education']> }) {
  return (
    <Section id="education" eyebrow="Education" title="Academic background">
      <div className="space-y-6">
        {education.items.map((item, index) => (
          <Reveal key={index} delayMs={index * 100}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <div>
                <h3 className="text-base font-semibold text-(--color-foreground)">{item.degree}</h3>
                <p className="text-sm text-(--color-muted)">{item.school}</p>
              </div>
              <span className="font-mono text-sm text-(--color-muted)">{item.period}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
