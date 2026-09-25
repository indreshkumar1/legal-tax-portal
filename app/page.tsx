import Link from 'next/link';
import { site } from '@/lib/site';
import { practiceAreas, practiceCategories } from '@/lib/services';
import PracticeExplorer from '@/components/practice-explorer';
import ContactForm from '@/components/contact-form';
import HeroCarousel from '@/components/hero-carousel';
import { Eyebrow, SectionHeader } from '@/components/section';
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  practiceIcons,
} from '@/components/icons';

const regulators = ['MCA', 'ROC', 'NCLT', 'SEBI', 'RBI', 'BSE & NSE', 'Income Tax', 'GST'];

const principles = [
  {
    icon: practiceIcons.scale,
    title: 'Precision in every filing',
    body: 'Meticulous drafting, review and filing that removes procedural defaults before they become regulatory exposure.',
  },
  {
    icon: ClockIcon,
    title: 'Statutory timelines, kept',
    body: 'A calendar-first practice. Board events, returns and disclosures are tracked well ahead of their due dates.',
  },
  {
    icon: practiceIcons.eyeOff,
    title: 'Absolute confidentiality',
    body: 'Strict data privacy protocols and NDAs on request. Sensitive corporate information stays with the engagement team.',
  },
  {
    icon: practiceIcons.link,
    title: 'End-to-end liaisoning',
    body: 'Direct coordination with ROC, RD, MCA, NCLT, SEBI, stock exchanges and RBI, from first filing to final approval.',
  },
];

const milestones = [
  { phase: 'Phase I', title: 'Foundation of rigor', desc: 'Established with an uncompromising focus on meticulous corporate governance and company law compliance.' },
  { phase: 'Phase II', title: 'Scaling capital markets', desc: 'Expanded specialized practice tiers to cover listed entity regulations, NCLT restructuring, and SEBI frameworks.' },
  { phase: 'Present', title: 'Multi-disciplinary counsel', desc: 'Trusted institutional counsel representing diverse enterprises and boards before regulatory and appellate authorities.' },
];

export default function Home() {
  const contactRows = [
    { icon: MapPinIcon, label: 'Head office', value: site.address, href: site.mapsUrl, action: 'Open in Maps', external: true },
    { icon: PhoneIcon, label: 'Direct line', value: site.phone, href: `tel:${site.phone}`, action: 'Call' },
    { icon: MailIcon, label: 'Email', value: site.email, href: `mailto:${site.email}`, action: 'Write to us' },
  ];

  return (
    <main>
      {/* Hero */}
      <section id="home" className="relative overflow-hidden border-b border-line">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 pb-24 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.05fr_1fr]">
          <div className="animate-fade-up">
            <Eyebrow>{site.tagline}</Eyebrow>
            <h1 className="mt-6 text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.04em] sm:text-6xl">
              Regulatory precision and <span className="text-fg-subtle">strategic counsel.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-fg-muted">
              Corporate law, secretarial and taxation advisory for boards, listed entities and growing enterprises, from NCLT
              proceedings to SEBI disclosures.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="#contact"
                className="inline-flex h-11 items-center gap-2 rounded-md bg-fg px-5 text-sm font-medium text-bg transition-opacity hover:opacity-85 active:scale-[0.98]"
              >
                Book a consultation <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="#services"
                className="inline-flex h-11 items-center rounded-md border border-line bg-bg px-5 text-sm font-medium transition-colors hover:border-line-strong hover:bg-subtle active:scale-[0.98]"
              >
                Explore {practiceAreas.length} practice areas
              </Link>
            </div>
            <p className="mt-8 flex items-center gap-2 text-sm text-fg-subtle">
              <ClockIcon className="h-4 w-4" /> {site.hours}
            </p>
          </div>

          <div className="animate-fade-up [animation-delay:120ms]">
            <HeroCarousel />
          </div>
        </div>

        <div className="relative border-t border-line bg-subtle/60">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-6 sm:px-8 md:flex-row md:items-center md:gap-10">
            <p className="shrink-0 text-sm text-fg-subtle">Filings and representation before</p>
            <ul className="flex flex-wrap gap-x-8 gap-y-2">
              {regulators.map((r) => (
                <li key={r} className="font-mono text-sm font-medium tracking-wide text-fg-muted">{r}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <Eyebrow>About the firm</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Governance is a strategic asset, not a compliance burden.
            </h2>
            <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-fg-muted">
              <p>
                {site.name} is a multi-disciplinary legal, secretarial and taxation advisory firm guiding enterprises through
                complex regulatory landscapes. Our practice pairs meticulous statutory compliance with strategic advocacy.
              </p>
              <p>
                Whether it is NCLT proceedings, SEBI listing requirements, cross-border FEMA structures or routine board
                governance, our professionals deliver solutions built around institutional and high-growth objectives.
              </p>
            </div>
            <Link href="/about" className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium hover:text-accent">
              More about our practice <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex flex-col justify-between gap-10">
            <figure className="rounded-xl border border-line bg-subtle p-8">
              <blockquote className="text-xl leading-relaxed tracking-[-0.01em]">
                &ldquo;Robust corporate governance shields enterprises and unlocks long-term value.&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm text-fg-subtle">Core philosophy · {site.name}</figcaption>
            </figure>
            <dl className="grid grid-cols-3 divide-x divide-line rounded-xl border border-line">
              {[
                { value: practiceAreas.length, label: 'Practice areas' },
                { value: practiceCategories.length - 1, label: 'Practice groups' },
                { value: regulators.length, label: 'Regulators' },
              ].map((stat) => (
                <div key={stat.label} className="px-5 py-5">
                  <dt className="text-xs text-fg-subtle">{stat.label}</dt>
                  <dd className="mt-1 font-mono text-2xl font-medium tabular-nums">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Practice areas */}
      <section id="services" className="border-y border-line bg-subtle">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
          <SectionHeader
            eyebrow="Practice areas"
            title={`${practiceAreas.length} specialised domains of expertise`}
            description="Filter by practice group and select an area to see the scope of work we take on."
            action={
              <Link href="/services" className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-fg-muted hover:text-fg">
                Detailed practice notes <ArrowUpRightIcon className="h-4 w-4" />
              </Link>
            }
          />
          <div className="mt-12">
            <PracticeExplorer />
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
        <SectionHeader
          eyebrow="Why TriWise"
          title="How we work with boards and leadership teams"
          description="Four commitments that shape every engagement, whether it is a single filing or a multi-year restructuring."
        />
        <div className="mt-12 grid overflow-hidden rounded-xl border border-line sm:grid-cols-2">
          {principles.map((p, i) => (
            <div
              key={p.title}
              className={`group p-8 transition-colors hover:bg-subtle ${i % 2 === 0 ? 'sm:border-r sm:border-line' : ''} ${
                i < 2 ? 'border-b border-line' : i === 2 ? 'border-b border-line sm:border-b-0' : ''
              }`}
            >
              <p.icon className="h-5 w-5 text-fg-subtle transition-colors group-hover:text-accent" />
              <h3 className="mt-6 text-base font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-fg-muted">{p.body}</p>
            </div>
          ))}
        </div>

        <div id="heritage" className="mt-24 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>Our heritage</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">The evolution of {site.name}</h2>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-fg-muted">
              Founded on ethical practice, deep regulatory insight and unwavering client advocacy.
            </p>
          </div>
          <ol className="relative border-l border-line">
            {milestones.map((m, i) => (
              <li key={m.phase} className={`relative pl-8 ${i < milestones.length - 1 ? 'pb-12' : ''}`}>
                <span
                  className={`absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full border-2 border-bg ${
                    i === milestones.length - 1 ? 'bg-accent' : 'bg-line-strong'
                  }`}
                />
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-fg-subtle">{m.phase}</p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight">{m.title}</h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-fg-muted">{m.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-line bg-subtle">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 sm:px-8 sm:py-28 lg:grid-cols-[1fr_1.35fr]">
          <div>
            <Eyebrow>Get in touch</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">Speak with our advisory team</h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-fg-muted">
              Reach our head office directly, or share your requirement and we will come back to you.
            </p>
            <ul className="mt-10 divide-y divide-line border-y border-line">
              {contactRows.map((row) => (
                <li key={row.label} className="flex items-start gap-4 py-5">
                  <row.icon className="mt-0.5 h-5 w-5 shrink-0 text-fg-subtle" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-fg-subtle">{row.label}</p>
                    <p className="mt-1 text-sm leading-relaxed">{row.value}</p>
                  </div>
                  <a
                    href={row.href}
                    {...(row.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="shrink-0 text-sm text-fg-muted underline-offset-4 hover:text-fg hover:underline"
                  >
                    {row.action}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-line bg-bg p-6 shadow-card sm:p-8">
            <h3 className="text-lg font-semibold tracking-tight">Confidential inquiry</h3>
            <p className="mt-1 mb-7 text-sm text-fg-muted">We typically respond within one business day.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
