'use client';
import { useEffect, useSyncExternalStore } from 'react';
import { resolveTheme, THEME_STORAGE_KEY, type ThemePreference } from '@/lib/theme';
import { MonitorIcon, MoonIcon, SunIcon } from './icons';

const listeners = new Set<() => void>();

function readPreference(): ThemePreference {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return stored === 'light' || stored === 'dark' ? stored : 'system';
  } catch {
    return 'system';
  }
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function setPreference(preference: ThemePreference) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, preference);
  } catch {}
  document.documentElement.setAttribute('data-theme', resolveTheme(preference));
  listeners.forEach((l) => l());
}

const OPTIONS: { value: ThemePreference; label: string; Icon: typeof SunIcon }[] = [
  { value: 'system', label: 'System theme', Icon: MonitorIcon },
  { value: 'light', label: 'Light theme', Icon: SunIcon },
  { value: 'dark', label: 'Dark theme', Icon: MoonIcon },
];

export default function ThemeToggle() {
  // Server snapshot is "system"; the real preference is read after hydration, so there is no mismatch.
  const preference = useSyncExternalStore(subscribe, readPreference, () => 'system' as const);

  // Follow OS changes while the preference is "system".
  useEffect(() => {
    if (preference !== 'system') return;
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => document.documentElement.setAttribute('data-theme', resolveTheme('system'));
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, [preference]);

  return (
    <div role="radiogroup" aria-label="Color theme" className="flex items-center rounded-full border border-line p-0.5">
      {OPTIONS.map(({ value, label, Icon }) => {
        const active = preference === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={label}
            title={label}
            onClick={() => setPreference(value)}
            className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors duration-200 ${
              active ? 'bg-muted text-fg' : 'text-fg-subtle hover:text-fg'
            }`}
          >
            <Icon className="h-3.5 w-3.5" />
          </button>
        );
      })}
    </div>
  );
}
