'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from './icons';

const SLIDE_MS = 6000;

const slides = [
  {
    title: 'Corporate Law & NCLT Litigation',
    subtitle: 'Strategic structuring, mergers, amalgamations, and minority shareholder protection.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop',
    alt: 'Professional in a suit adjusting his cufflinks',
    tag: 'Pillars 01 – 04',
    href: '/services#restructuring',
  },
  {
    title: 'SEBI & Capital Market Compliance',
    subtitle: 'Continuous LODR compliance, ICDR capital issuances, takeover codes, and insider trading frameworks.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    alt: 'Glass office towers seen from street level',
    tag: 'Pillars 09 – 13',
    href: '/services#sebi',
  },
  {
    title: 'Taxation & FEMA Advisory',
    subtitle: 'Direct/indirect tax architecture, representation, foreign remittances, and RBI/FDI structuring.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
    alt: 'Advisors reviewing financial charts at a desk',
    tag: 'Pillars 05 & 08',
    href: '/services#fema',
  },
  {
    title: 'Secretarial Audits & Due Diligence',
    subtitle: 'Comprehensive corporate governance health checks, statutory register upkeep, and risk mitigation.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop',
    alt: 'Documents, calculator and pen on a desk during an audit',
    tag: 'Pillars 14 – 17',
    href: '/services#secretarial',
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const regionRef = useRef<HTMLDivElement>(null);

  const go = useCallback((delta: number) => setCurrent((i) => (i + delta + slides.length) % slides.length), []);

  // Auto-advance is driven by the progress bar's animationend, so pausing the bar pauses the carousel.
  const onProgressEnd = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    go(1);
  };

  useEffect(() => {
    const el = regionRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    el.addEventListener('keydown', onKey);
    return () => el.removeEventListener('keydown', onKey);
  }, [go]);

  const slide = slides[current];

  return (
    <div className="relative">
      <div className="absolute -inset-x-6 -inset-y-8 -z-10 rounded-[28px] bg-[radial-gradient(60%_60%_at_60%_40%,var(--accent-soft),transparent_70%)]" />

      <div
        ref={regionRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Practice highlights"
        tabIndex={0}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        className="group relative overflow-hidden rounded-xl border border-line bg-muted shadow-card"
      >
        <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] xl:aspect-[5/5.2]">
          {slides.map((s, i) => {
            const active = i === current;
            return (
              <div
                key={s.image}
                aria-hidden={!active}
                className={`absolute inset-0 [transition:opacity_1.1s_ease] ${active ? 'z-10 opacity-100' : 'z-0 opacity-0'}`}
              >
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  priority={i === 0}
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className={`object-cover [transition:transform_7s_cubic-bezier(0.16,1,0.3,1)] ${active ? 'scale-100' : 'scale-[1.08]'}`}
                />
              </div>
            );
          })}

          {/* Legibility scrim: always dark, since it sits on photography in both themes */}
          <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(to_top,rgba(5,5,5,0.92)_0%,rgba(5,5,5,0.55)_38%,rgba(5,5,5,0.05)_70%)]" />

          {/* Progress segments */}
          <div className="absolute inset-x-5 top-5 z-30 flex gap-1.5">
            {slides.map((s, i) => (
              <button
                key={s.title}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Show slide ${i + 1}: ${s.title}`}
                aria-current={i === current}
                className="relative h-6 flex-1 cursor-pointer"
              >
                <span className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 overflow-hidden rounded-full bg-white/25">
                  {i < current && <span className="absolute inset-0 bg-white/80" />}
                  {i === current && (
                    <span
                      key={current}
                      onAnimationEnd={onProgressEnd}
                      className="absolute inset-0 origin-left animate-progress bg-white"
                      style={{ animationDuration: `${SLIDE_MS}ms`, animationPlayState: paused ? 'paused' : 'running' }}
                    />
                  )}
                </span>
              </button>
            ))}
          </div>

          <div className="absolute inset-x-0 bottom-0 z-30 p-6 text-white sm:p-8">
            {/* Slide copy, re-mounted per slide so it staggers in */}
            <div key={current}>
              <p className="animate-fade-up font-mono text-[11px] uppercase tracking-[0.16em] text-white/70">
                <span className="mr-2 tabular-nums text-white">{String(current + 1).padStart(2, '0')}</span>
                {slide.tag}
              </p>
              <h2 className="mt-3 animate-fade-up text-2xl font-semibold leading-tight tracking-[-0.02em] [animation-delay:90ms] sm:text-[1.7rem]">
                {slide.title}
              </h2>
              <p className="mt-2.5 max-w-md animate-fade-up text-sm leading-relaxed text-white/75 [animation-delay:180ms]">
                {slide.subtitle}
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <Link
                key={current}
                href={slide.href}
                className="inline-flex animate-fade-up items-center gap-1.5 text-sm font-medium text-white underline-offset-4 [animation-delay:270ms] hover:underline"
              >
                View practice <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <div className="flex gap-1.5">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous slide"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 active:scale-95"
                >
                  <ArrowRightIcon className="h-4 w-4 rotate-180" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next slide"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 active:scale-95"
                >
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
