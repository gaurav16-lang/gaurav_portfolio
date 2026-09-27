import { Section } from '@/components/Section';
import type { PortfolioContent } from '@/types/content';

export function About({ about }: { about: PortfolioContent['about'] }) {
  const paragraphs = about.bio.split('\n\n').filter(Boolean);

  return (
    <Section id="about" eyebrow="About" title="Who I am">
      <div className="space-y-4 text-base leading-relaxed text-(--color-muted)">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-(--color-muted)">
        <span>{about.location}</span>
        <a href={`mailto:${about.email}`} className="text-(--color-primary) hover:underline">
          {about.email}
        </a>
        {about.socialLinks.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-(--color-primary) hover:underline"
          >
            {link.label}
          </a>
        ))}
      </div>
    </Section>
  );
}
