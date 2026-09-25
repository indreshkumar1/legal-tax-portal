import type { ReactNode } from 'react';

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-accent">
      <span className="h-px w-5 bg-accent/60" />
      {children}
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">{title}</h2>
        {description && <p className="mt-4 max-w-xl text-base leading-relaxed text-fg-muted">{description}</p>}
      </div>
      {action}
    </div>
  );
}
