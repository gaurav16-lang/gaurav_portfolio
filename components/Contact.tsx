import type { PortfolioContent } from '@/types/content';
import { Reveal } from '@/components/Reveal';

export function Contact({
  contact,
  email,
}: {
  contact: PortfolioContent['contact'];
  email: string;
}) {
  return (
    <footer className="mx-auto w-full max-w-3xl px-6 py-24 sm:px-8">
      <Reveal>
        <h2 className="text-2xl font-semibold text-(--color-foreground) sm:text-3xl">{contact.heading}</h2>
        <p className="mt-4 max-w-xl text-base text-(--color-muted)">{contact.message}</p>
        <a
          href={`mailto:${email}`}
          className="mt-8 inline-block rounded-md border border-(--color-primary) px-5 py-2.5 font-mono text-sm text-(--color-primary) transition-all duration-300 hover:scale-105 hover:bg-(--color-primary) hover:text-(--color-background)"
        >
          {email}
        </a>
      </Reveal>
    </footer>
  );
}
