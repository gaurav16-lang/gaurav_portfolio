import { Section } from '@/components/Section';
import { Reveal } from '@/components/Reveal';
import type { PortfolioContent } from '@/types/content';

export function Projects({ projects }: { projects: PortfolioContent['projects'] }) {
  return (
    <Section id="projects" eyebrow="Projects" title="What I've built">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.items.map((project, index) => {
          const card = (
            <div className="h-full rounded-lg border border-(--color-border) p-5 transition-all duration-300 hover:-translate-y-1 hover:border-(--color-primary) hover:shadow-lg hover:shadow-(--color-primary)/10">
              <h3 className="text-base font-semibold text-(--color-foreground)">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-(--color-muted)">{project.description}</p>
              {project.tags.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-(--color-border) px-2.5 py-0.5 font-mono text-xs text-(--color-muted)"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          );

          return (
            <Reveal key={index} delayMs={index * 80}>
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {card}
                </a>
              ) : (
                card
              )}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
