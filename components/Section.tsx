import type { ReactNode } from 'react';
import { Reveal } from '@/components/Reveal';

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-8">
      <Reveal>
        <p className="mb-2 font-mono text-sm uppercase tracking-widest text-(--color-primary)">{eyebrow}</p>
        <h2 className="mb-8 text-2xl font-semibold text-(--color-foreground) sm:text-3xl">{title}</h2>
        {children}
      </Reveal>
    </section>
  );
}
