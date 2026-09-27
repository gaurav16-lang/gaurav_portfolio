import type { PortfolioContent } from '@/types/content';

export function Hero({ hero }: { hero: PortfolioContent['hero'] }) {
  return (
    <header className="relative mx-auto flex w-full max-w-3xl flex-col items-start gap-6 overflow-hidden px-6 py-24 sm:px-8">
      <div
        aria-hidden
        className="animate-blob pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-(--color-primary)/20 blur-3xl"
      />
      <div
        aria-hidden
        style={{ animationDelay: '4s' }}
        className="animate-blob pointer-events-none absolute top-24 -right-16 h-64 w-64 rounded-full bg-(--color-primary)/10 blur-3xl"
      />

      {hero.avatarUrl ? (
        <div className="animate-fade-in-up relative h-28 w-28">
          <span className="animate-pulse-ring absolute inset-0 rounded-full" aria-hidden />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={hero.avatarUrl}
            alt={hero.name}
            className="relative h-28 w-28 rounded-full border-2 border-(--color-primary)/40 object-cover shadow-lg shadow-(--color-primary)/10 transition-transform duration-300 hover:scale-105"
          />
        </div>
      ) : null}

      <div>
        <h1
          className="animate-fade-in-up text-4xl font-bold tracking-tight text-(--color-foreground) sm:text-5xl"
          style={{ animationDelay: '100ms' }}
        >
          {hero.name}
        </h1>
        <p
          className="animate-fade-in-up mt-2 font-mono text-lg text-(--color-primary)"
          style={{ animationDelay: '220ms' }}
        >
          {hero.title}
        </p>
        <p
          className="animate-fade-in-up mt-4 max-w-xl text-base text-(--color-muted) sm:text-lg"
          style={{ animationDelay: '340ms' }}
        >
          {hero.tagline}
        </p>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="animate-bounce-slow absolute bottom-2 left-1/2 -translate-x-1/2 text-(--color-muted) transition-colors hover:text-(--color-primary)"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </header>
  );
}
