'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks, site } from '@/lib/site';
import ThemeToggle from './theme-toggle';
import { CloseIcon, MenuIcon } from './icons';

export function BrandMark({ size = 28 }: { size?: number }) {
  return (
    <span
      className="flex shrink-0 items-center justify-center rounded-md bg-white ring-1 ring-black/5 dark:ring-white/10"
      style={{ width: size, height: size }}
    >
      {/* logo.png is 214×234; keep its aspect ratio so next/image doesn't warn */}
      <Image src="/logo.png" alt="" width={Math.round(((size - 6) * 214) / 234)} height={size - 6} priority />
    </span>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) => !href.includes('#') && pathname === href;

  return (
    <header
      className={`sticky top-0 z-40 border-b backdrop-blur-md transition-colors duration-200 ${
        scrolled || menuOpen ? 'border-line bg-bg/80' : 'border-transparent bg-bg/0'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
          <BrandMark />
          <span className="text-[15px] font-semibold tracking-tight">{site.name}</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={`rounded-md px-3 py-1.5 text-sm transition-colors duration-200 ${
                isActive(link.href) ? 'text-fg' : 'text-fg-muted hover:bg-muted hover:text-fg'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
          <Link
            href="/#contact"
            className="hidden h-8 items-center rounded-md bg-fg px-3.5 text-sm font-medium text-bg transition-opacity duration-200 hover:opacity-85 active:scale-[0.98] md:flex"
          >
            Book a consultation
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="flex h-9 w-9 items-center justify-center rounded-md text-fg-muted hover:bg-muted hover:text-fg md:hidden"
          >
            {menuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="animate-fade-in border-t border-line px-5 pb-5 pt-2 md:hidden">
          <nav aria-label="Mobile" className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-line py-3 text-[15px] text-fg-muted hover:text-fg"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex items-center justify-between">
            <ThemeToggle />
            <Link
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="flex h-9 items-center rounded-md bg-fg px-4 text-sm font-medium text-bg"
            >
              Book a consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
