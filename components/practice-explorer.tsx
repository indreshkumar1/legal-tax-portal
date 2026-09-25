'use client';
import { useState } from 'react';
import Link from 'next/link';
import { practiceAreas, practiceCategories, type PracticeArea } from '@/lib/services';
import { ArrowRightIcon, CheckIcon, practiceIcons } from './icons';

function PracticeDetail({ area }: { area: PracticeArea }) {
  const Icon = practiceIcons[area.icon];
  return (
    <div key={area.number} className="animate-fade-in">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-bg text-accent">
          <Icon className="h-5 w-5" />
        </span>
        <p className="text-xs text-fg-subtle">
          {area.category} <span className="px-1">·</span> <span className="font-mono">Pillar {area.number}</span>
        </p>
      </div>
      <h3 className="mt-5 text-xl font-semibold tracking-tight">{area.title}</h3>
      <p className="mt-1.5 text-sm text-fg-muted">{area.subtitle}</p>

      <p className="mt-7 text-xs font-medium text-fg-subtle">Scope of work</p>
      <ul className="mt-3 space-y-2.5">
        {area.details.map((detail) => (
          <li key={detail} className="flex gap-3 text-sm leading-relaxed text-fg-muted">
            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Link
          href="/#contact"
          className="inline-flex h-9 items-center gap-2 rounded-md bg-fg px-4 text-sm font-medium text-bg transition-opacity hover:opacity-85 active:scale-[0.98]"
        >
          Discuss this matter <ArrowRightIcon className="h-4 w-4" />
        </Link>
        <Link href="/services" className="text-sm text-fg-muted underline-offset-4 hover:text-fg hover:underline">
          Detailed practice notes
        </Link>
      </div>
    </div>
  );
}

export default function PracticeExplorer() {
  const [category, setCategory] = useState<(typeof practiceCategories)[number]>('All');
  const [selectedNumber, setSelectedNumber] = useState<string | null>(null);

  const filtered = category === 'All' ? practiceAreas : practiceAreas.filter((a) => a.category === category);
  const selected = filtered.find((a) => a.number === selectedNumber) ?? filtered[0];

  const onSelect = (number: string) => {
    // Desktop always shows a selection in the side panel; on mobile rows expand and collapse in place.
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
    setSelectedNumber(!isDesktop && selectedNumber === number ? null : number);
  };

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-bg shadow-card">
      <div role="tablist" aria-label="Practice categories" className="no-scrollbar flex gap-1 overflow-x-auto border-b border-line p-2">
        {practiceCategories.map((cat) => {
          const count = cat === 'All' ? practiceAreas.length : practiceAreas.filter((a) => a.category === cat).length;
          const active = category === cat;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={active}
              onClick={() => { setCategory(cat); setSelectedNumber(null); }}
              className={`flex shrink-0 items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors duration-200 ${
                active ? 'bg-muted text-fg' : 'text-fg-muted hover:bg-muted/60 hover:text-fg'
              }`}
            >
              {cat}
              <span className="font-mono text-[11px] text-fg-subtle">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
        <ul className="divide-y divide-line lg:max-h-[560px] lg:overflow-y-auto lg:border-r lg:border-line">
          {filtered.map((area) => {
            const Icon = practiceIcons[area.icon];
            const isSelected = selected.number === area.number;
            const isExpanded = selectedNumber === area.number;
            return (
              <li key={area.number}>
                <button
                  type="button"
                  onClick={() => onSelect(area.number)}
                  aria-expanded={isExpanded}
                  className={`group flex w-full items-center gap-4 px-4 py-3.5 text-left transition-colors duration-150 sm:px-5 ${
                    isSelected ? 'lg:bg-muted' : ''
                  } ${isExpanded ? 'bg-muted' : 'hover:bg-subtle'}`}
                >
                  <span className="w-6 font-mono text-xs text-fg-subtle">{area.number}</span>
                  <Icon className={`h-[18px] w-[18px] shrink-0 ${isSelected ? 'lg:text-accent' : ''} text-fg-subtle transition-colors group-hover:text-fg`} />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium">{area.title}</span>
                    <span className="block truncate text-xs text-fg-subtle">{area.subtitle}</span>
                  </span>
                  <ArrowRightIcon
                    className={`h-4 w-4 shrink-0 text-fg-subtle transition-transform duration-200 ${
                      isExpanded ? 'rotate-90 lg:rotate-0' : ''
                    } ${isSelected ? 'lg:translate-x-0.5 lg:text-fg' : ''}`}
                  />
                </button>
                {isExpanded && (
                  <div className="border-t border-line bg-subtle px-5 py-6 lg:hidden">
                    <PracticeDetail area={area} />
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <div className="hidden bg-subtle p-8 lg:block">
          <div className="sticky top-24">
            <PracticeDetail area={selected} />
          </div>
        </div>
      </div>
    </div>
  );
}
