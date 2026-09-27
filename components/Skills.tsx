import { Section } from '@/components/Section';
import { Reveal } from '@/components/Reveal';
import type { PortfolioContent } from '@/types/content';

export function Skills({ skills }: { skills: PortfolioContent['skills'] }) {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I work with">
      <div className="flex flex-wrap gap-2">
        {skills.items.map((skill, index) => (
          <Reveal key={skill} delayMs={index * 40}>
            <span className="inline-block rounded-md border border-(--color-border) px-3 py-1.5 text-sm text-(--color-foreground) transition-all duration-200 hover:-translate-y-0.5 hover:border-(--color-primary) hover:text-(--color-primary)">
              {skill}
            </span>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
