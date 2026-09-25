'use client';
import { useState, type FormEvent } from 'react';
import { practiceAreas } from '@/lib/services';
import { CheckIcon } from './icons';

type Errors = Partial<Record<'name' | 'email' | 'phone' | 'message', string>>;

const inputClass =
  'w-full rounded-md border border-line bg-bg px-3 py-2.5 text-sm text-fg placeholder:text-fg-subtle transition-colors duration-200 hover:border-line-strong focus:border-accent focus:outline-none focus:ring-4 focus:ring-[var(--ring)] aria-[invalid=true]:border-red-500';

function validate(data: FormData): Errors {
  const errors: Errors = {};
  const name = String(data.get('name') ?? '').trim();
  const email = String(data.get('email') ?? '').trim();
  const phone = String(data.get('phone') ?? '').trim();
  const message = String(data.get('message') ?? '').trim();

  if (name.length < 2) errors.name = 'Enter your full name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Enter a valid email address.';
  if (phone && !/^\+?[\d\s-]{8,16}$/.test(phone)) errors.phone = 'Enter a valid phone number.';
  if (message.length < 10) errors.message = 'Tell us a little more about your requirement.';
  return errors;
}

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submittedName, setSubmittedName] = useState<string | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nextErrors = validate(data);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    // TODO: send to a backend or email service; this form currently only confirms on screen.
    setSubmittedName(String(data.get('name')).trim().split(' ')[0]);
  };

  if (submittedName) {
    return (
      <div className="flex min-h-[420px] flex-col items-start justify-center animate-fade-in">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-accent">
          <CheckIcon className="h-5 w-5" />
        </span>
        <h3 className="mt-5 text-lg font-semibold tracking-tight">Thank you, {submittedName}. We have your inquiry.</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-fg-muted">
          A member of our advisory team will review it and respond within one business day.
        </p>
        <button onClick={() => setSubmittedName(null)} className="mt-6 text-sm text-fg-muted underline-offset-4 hover:text-fg hover:underline">
          Send another inquiry
        </button>
      </div>
    );
  }

  const field = (name: keyof Errors) => ({
    name,
    id: `contact-${name}`,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `contact-${name}-error` : undefined,
  });

  const errorText = (name: keyof Errors) =>
    errors[name] && <p id={`contact-${name}-error`} className="mt-1.5 text-xs text-red-600 dark:text-red-400">{errors[name]}</p>;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium">Full name</label>
          <input {...field('name')} type="text" autoComplete="name" placeholder="Ananya Mehra" className={inputClass} />
          {errorText('name')}
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium">Work email</label>
          <input {...field('email')} type="email" autoComplete="email" placeholder="ananya@company.in" className={inputClass} />
          {errorText('email')}
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-medium">
            Phone <span className="font-normal text-fg-subtle">(optional)</span>
          </label>
          <input {...field('phone')} type="tel" autoComplete="tel" placeholder="+91 98110 42716" className={inputClass} />
          {errorText('phone')}
        </div>
        <div>
          <label htmlFor="contact-area" className="mb-1.5 block text-sm font-medium">Practice area</label>
          <select id="contact-area" name="area" defaultValue="" className={inputClass}>
            <option value="">Not sure yet</option>
            {practiceAreas.map((a) => (
              <option key={a.number} value={a.title}>{a.title}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium">Requirement</label>
        <textarea
          {...field('message')}
          rows={5}
          placeholder="Briefly describe the matter, relevant timelines and the entities involved."
          className={`${inputClass} resize-none`}
        />
        {errorText('message')}
      </div>
      <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-fg-subtle">Shared in confidence. We never disclose client information.</p>
        <button
          type="submit"
          className="h-10 rounded-md bg-fg px-5 text-sm font-medium text-bg transition-opacity duration-200 hover:opacity-85 active:scale-[0.98]"
        >
          Submit inquiry
        </button>
      </div>
    </form>
  );
}
