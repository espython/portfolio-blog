'use client'

import { useState } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

interface FormFields {
  name: string
  email: string
  subject: string
  message: string
}

const EMPTY: FormFields = { name: '', email: '', subject: '', message: '' }

export function ContactForm() {
  const [fields, setFields] = useState<FormFields>(EMPTY)
  const [status, setStatus] = useState<FormState>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    // Submission logic will be wired in #62
    await new Promise((r) => setTimeout(r, 800))
    setStatus('success')
    setFields(EMPTY)
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Name"
          name="name"
          type="text"
          value={fields.name}
          onChange={handleChange}
          required
        />
        <Field
          label="Email"
          name="email"
          type="email"
          value={fields.email}
          onChange={handleChange}
          required
        />
      </div>
      <Field
        label="Subject"
        name="subject"
        type="text"
        value={fields.subject}
        onChange={handleChange}
        required
      />
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-[var(--color-text)]">
          Message <span className="text-[var(--color-primary)]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          value={fields.message}
          onChange={handleChange}
          placeholder="Your message…"
          className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-subtle)] outline-none transition-colors focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="rounded-lg bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-hover)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>

      {status === 'success' && (
        <p className="rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-700 dark:bg-green-950/30 dark:text-green-400">
          Message sent! I&apos;ll get back to you soon.
        </p>
      )}
      {status === 'error' && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700 dark:bg-red-950/30 dark:text-red-400">
          Something went wrong. Please try again or email me directly.
        </p>
      )}
    </form>
  )
}

interface FieldProps {
  label: string
  name: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
}

function Field({ label, name, type, value, onChange, required }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-[var(--color-text)]">
        {label} {required && <span className="text-[var(--color-primary)]">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={label}
        className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-subtle)] outline-none transition-colors focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20"
      />
    </div>
  )
}
