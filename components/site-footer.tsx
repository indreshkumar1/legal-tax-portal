import Link from 'next/link';
import { navLinks, site } from '@/lib/site';
import { BrandMark } from './site-header';

export default function SiteFooter() {
  return (
    <footer className="border-t border-line bg-subtle">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <BrandMark />
            <span className="text-[15px] font-semibold tracking-tight">{site.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-fg-muted">
            Legal, secretarial and taxation advisory for boards, listed entities and growing companies.
          </p>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-fg-subtle">{site.tagline}</p>
        </div>

        <div>
          <h2 className="text-sm font-medium">Firm</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-fg-muted">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-fg">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-medium">Office</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-fg-muted">
            <li><a href={`tel:${site.phone}`} className="transition-colors hover:text-fg">{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`} className="transition-colors hover:text-fg">{site.email}</a></li>
            <li className="leading-relaxed">{site.address}</li>
            <li>{site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-fg-subtle sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Strict client confidentiality and professional standards.</p>
        </div>
      </div>
    </footer>
  );
}
