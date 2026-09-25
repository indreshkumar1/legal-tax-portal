import type { Metadata } from 'next';
import Link from 'next/link';
import { Eyebrow, SectionHeader } from '@/components/section';
import { ArrowRightIcon, ClockIcon, practiceIcons } from '@/components/icons';

export const metadata: Metadata = {
  title: 'About | TriWise Partners',
  description: 'Precision, confidentiality and strategic foresight in corporate law, secretarial governance and taxation.',
};

const pillars = [
  {
    title: 'Rigorous compliance',
    body: 'Proactive identification of regulatory shifts under the Companies Act, SEBI, and tax authorities.',
  },
  {
    title: 'Absolute confidentiality',
    body: 'Strict data privacy protocols and professional ethics protecting sensitive corporate data.',
  },
  {
    title: 'Strategic execution',
    body: 'End-to-end liaisoning and coordination with regulatory bodies including MCA, NCLT, and RBI.',
  },
];

const principles = [
  {
    icon: practiceIcons.search,
    title: 'Precision & accuracy',
    body: 'Meticulous drafting, review, and filing to eliminate procedural defaults and legal vulnerabilities.',
  },
  {
    icon: ClockIcon,
    title: 'Agility & timeliness',
    body: 'Strict adherence to statutory timelines and responsive communication for time-sensitive corporate events.',
  },
  {
    icon: practiceIcons.users,
    title: 'Client-centric partnership',
    body: 'Long-term professional relationships rooted in trust, transparency, and deep industry insight.',
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-line">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24">
          <Eyebrow>About our practice</Eyebrow>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl">
            Trusted counsel for complex regulatory landscapes.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted">
            Precision, uncompromising confidentiality and strategic foresight in corporate law, secretarial governance and
            taxation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div className="max-w-xl space-y-5 text-base leading-relaxed text-fg-muted">
            <p className="text-xl leading-relaxed tracking-[-0.01em] text-fg">
              In an evolving corporate and regulatory environment, businesses need more than compliance. They need advisory
              that safeguards operations and fuels growth.
            </p>
            <p>
              Our firm brings together multi-disciplinary expertise across company law, SEBI regulations, direct and indirect
              taxation, and cross-border FEMA frameworks to deliver holistic solutions for startups, enterprises and listed
              entities.
            </p>
          </div>
          <ul className="divide-y divide-line rounded-xl border border-line">
            {pillars.map((p, i) => (
              <li key={p.title} className="flex gap-5 p-6">
                <span className="font-mono text-xs text-fg-subtle">0{i + 1}</span>
                <div>
                  <h2 className="text-base font-semibold tracking-tight">{p.title}</h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-line bg-subtle">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
          <SectionHeader eyebrow="Principles" title="What guides every engagement" />
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-3">
            {principles.map((p) => (
              <div key={p.title} className="group bg-bg p-8 transition-colors hover:bg-subtle">
                <p.icon className="h-5 w-5 text-fg-subtle transition-colors group-hover:text-accent" />
                <h3 className="mt-6 text-base font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.03em]">Ready to secure your corporate compliance?</h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-fg-muted">
              Consult our professionals for guidance on your legal, tax and secretarial requirements.
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex h-11 shrink-0 items-center gap-2 rounded-md bg-fg px-5 text-sm font-medium text-bg transition-opacity hover:opacity-85 active:scale-[0.98]"
          >
            Schedule a consultation <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
