import type { Metadata } from 'next';
import Link from 'next/link';
import { Eyebrow } from '@/components/section';
import { ArrowRightIcon, CheckIcon, practiceIcons, type PracticeIconName } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Practice areas | TriWise Partners',
  description: 'Detailed scope of our corporate law, secretarial, securities, FEMA and taxation practice.',
};

const detailedServices: {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  scope: string[];
  icon: PracticeIconName;
}[] = [
  {
    id: 'structuring',
    number: "01",
    title: "Business Structuring & Registration",
    category: "Corporate Setup",
    description: "End-to-end assistance in establishing legal entities with strict adherence to Indian corporate laws and regulatory frameworks.",
    scope: [
      "Incorporation of Private Limited Companies, Public Limited Companies, LLPs, Partnerships, Trusts, and Societies in India",
      "Advisory on optimal entity structuring, co-founder agreements, and cap table management",
      "Initial regulatory approvals, name reservations, and digital signature (DSC) procurement",
      "FEMA compliance advisory for foreign investments and cross-border setups"
    ],
    icon: "building"
  },
  {
    id: 'secretarial',
    number: "02",
    title: "Corporate Secretarial & Legal Support",
    category: "Governance & Compliance",
    description: "Comprehensive day-to-day secretarial governance and robust legal contract drafting to safeguard corporate operations.",
    scope: [
      "Secretarial support for Board Meetings, Committee Meetings, and General Meetings (AGM/EGM)",
      "Preparation, drafting, and vetting of shareholder agreements, employment contracts, and commercial vendor agreements",
      "Maintenance of statutory registers, minutes books, and statutory records under the Companies Act, 2013",
      "Filing of annual returns, financial statements, and event-based forms (MGT-7, AOC-4, DIR-12, etc.) with the MCA / ROC",
      "Corporate Social Responsibility (CSR) compliance and reporting under Section 135"
    ],
    icon: "scale"
  },
  {
    id: 'restructuring',
    number: "03",
    title: "Corporate Restructuring — Mergers, Demergers & Amalgamations",
    category: "Strategic Growth",
    description: "Sophisticated legal structuring and NCLT coordination for corporate consolidation, business transfers, and capital reorganizations.",
    scope: [
      "Structuring and end-to-end execution of schemes of arrangement, mergers, demergers, and amalgamations (Sec. 230–232)",
      "Coordination of NCLT scheme approvals, convening creditor/shareholder meetings, and statutory notices",
      "Reduction of share capital, buyback advisory, and fast-track corporate restructuring for group entities"
    ],
    icon: "merge"
  },
  {
    id: 'disputes',
    number: "04",
    title: "Oppression & Mismanagement (O&M) & Dispute Resolution",
    category: "Litigation & Advisory",
    description: "Strategic defense and representation in shareholder disputes, minority protection matters, and corporate tribunal proceedings.",
    scope: [
      "Representation and drafting in petitions under Sections 241–242 of the Companies Act, 2013 before the NCLT",
      "Strategic advisory in boardroom deadlocks, minority shareholder grievances, and prevention of asset diversion",
      "Pre-litigation negotiation, settlement structuring, and arbitration support"
    ],
    icon: "shield"
  },
  {
    id: 'sebi',
    number: "05",
    title: "SEBI (LODR & ICDR) Regulations — Capital Markets",
    category: "Securities Law",
    description: "Specialized compliance and advisory for listed entities, stock exchange disclosures, and public capital issuances.",
    scope: [
      "Continuous compliance for listed entities under SEBI (LODR) Regulations: financial disclosures, governance reports, and stock exchange filings",
      "Advisory on public offerings (IPOs, rights issues, preferential allotments, and QIPs) under SEBI (ICDR) Regulations",
      "Takeover code advisory (SEBI SAST Regulations), open offers, and substantial acquisition disclosures",
      "Insider trading compliance (SEBI PIT Regulations), code of conduct, and Structured Digital Database (SDD) maintenance"
    ],
    icon: "chart"
  },
  {
    id: 'fema',
    number: "06",
    title: "FEMA, RBI & Cross-Border Compliance",
    category: "Foreign Exchange",
    description: "Navigating foreign direct investments, overseas direct investments, and Reserve Bank of India regulatory filings.",
    scope: [
      "FDI structuring, inbound/outbound investment advisory, and foreign remittance compliance",
      "RBI filings, FIRMS portal reporting, and FC-GPR / FC-TRS filings",
      "External Commercial Borrowings (ECB) advisory and compounding of contraventions under FEMA"
    ],
    icon: "globe"
  },
  {
    id: 'tax-labour',
    number: "07",
    title: "Tax Advisory & Labour Law Compliance",
    category: "Taxation & Workforce",
    description: "Integrated direct/indirect tax planning and full-spectrum employment law compliance for corporate workforces.",
    scope: [
      "Income Tax and GST advisory, tax planning, and corporate return filings",
      "Representation before tax authorities, appellate tribunals, and scrutiny support",
      "PF, ESI, Shops & Establishment Act compliance, and comprehensive HR documentation audits"
    ],
    icon: "receipt"
  }
];

export default function ServicesPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-line">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24">
          <Eyebrow>Practice domains</Eyebrow>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl">
            Corporate and legal solutions, in detail.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted">
            A breakdown of our core practice areas, built to navigate complex regulatory frameworks, reduce risk and support
            business growth.
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
        <aside className="hidden lg:block">
          <nav aria-label="On this page" className="sticky top-28">
            <p className="mb-3 text-xs font-medium text-fg-subtle">On this page</p>
            <ul className="space-y-1 border-l border-line">
              {detailedServices.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm leading-snug text-fg-muted transition-colors hover:border-fg hover:text-fg"
                  >
                    {s.title.split(' — ')[0]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="divide-y divide-line">
          {detailedServices.map((service) => {
            const Icon = practiceIcons[service.icon];
            return (
              <article key={service.id} id={service.id} className="scroll-mt-24 py-12 first:pt-0 last:pb-0">
                <div className="flex items-start gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-line bg-subtle text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs text-fg-subtle">
                      <span className="font-mono">{service.number}</span> <span className="px-1">·</span> {service.category}
                    </p>
                    <h2 className="mt-1.5 text-2xl font-semibold tracking-[-0.02em]">{service.title}</h2>
                  </div>
                </div>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-fg-muted">{service.description}</p>

                <h3 className="mt-8 text-sm font-medium">Key scope of services</h3>
                <ul className="mt-4 grid gap-x-8 gap-y-3 md:grid-cols-2">
                  {service.scope.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-fg-muted">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/#contact"
                  className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium hover:text-accent"
                >
                  Inquire about this service
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-xl border border-line bg-subtle p-8 sm:p-10 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-[-0.02em]">Need custom advisory for your enterprise?</h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-fg-muted">
              Speak directly with our practice leads about your specific compliance or restructuring requirements.
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex h-10 shrink-0 items-center gap-2 rounded-md bg-fg px-5 text-sm font-medium text-bg transition-opacity hover:opacity-85 active:scale-[0.98]"
          >
            Schedule a consultation <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
