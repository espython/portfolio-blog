'use client'

import { useState } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

interface FormFields {
  name: string
  email: string
  subject: string
  message: string
}

type FormErrors = Partial<Record<keyof FormFields, string>>

const EMPTY: FormFields = { name: '', email: '', subject: '', message: '' }

function validate(fields: FormFields): FormErrors {
  const errors: FormErrors = {}
  if (!fields.name.trim()) errors.name = 'Name is required.'
  if (!fields.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!fields.subject.trim()) errors.subject = 'Subject is required.'
  if (!fields.message.trim()) {
    errors.message = 'Message is required.'
  } else if (fields.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.'
  }
  return errors
}

export function ContactForm() {
  const [fields, setFields] = useState<FormFields>(EMPTY)
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormFields, boolean>>>({})
  const [status, setStatus] = useState<FormState>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
    if (touched[name as keyof FormFields]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validate({ ...fields, [name]: value })[name as keyof FormFields],
      }))
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors((prev) => ({ ...prev, [name]: validate(fields)[name as keyof FormFields] }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const allTouched = { name: true, email: true, subject: true, message: true }
    setTouched(allTouched)
    const validationErrors = validate(fields)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setStatus('submitting')
    // Submission will be wired in #62
    await new Promise((r) => setTimeout(r, 800))
    setStatus('success')
    setFields(EMPTY)
    setTouched({})
    setErrors({})
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Name"
          name="name"
          type="text"
          value={fields.name}
          error={touched.name ? errors.name : undefined}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        <Field
          label="Email"
          name="email"
          type="email"
          value={fields.email}
          error={touched.email ? errors.email : undefined}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
      </div>
      <Field
        label="Subject"
        name="subject"
        type="text"
        value={fields.subject}
        error={touched.subject ? errors.subject : undefined}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />

      {/* Message textarea */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-[var(--color-text)]">
          Message <span className="text-[var(--color-primary)]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={fields.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Your message…"
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`resize-none rounded-lg border bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-subtle)] outline-none transition-colors focus:ring-2 focus:ring-[var(--color-primary)]/20 ${
            touched.message && errors.message
              ? 'border-red-500 focus:border-red-500'
              : 'border-[var(--color-border)] focus:border-[var(--color-primary)]'
          }`}
        />
        {touched.message && errors.message && (
          <p id="message-error" className="text-xs text-red-500">
            {errors.message}
          </p>
        )}
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
  error?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  required?: boolean
}

function Field({ label, name, type, value, error, onChange, onBlur, required }: FieldProps) {
  const errorId = `${name}-error`
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-[var(--color-text)]">
        {label} {required && <span className="text-[var(--color-primary)]">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={label}
        aria-describedby={error ? errorId : undefined}
        aria-invalid={!!error}
        className={`rounded-lg border bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-subtle)] outline-none transition-colors focus:ring-2 focus:ring-[var(--color-primary)]/20 ${
          error
            ? 'border-red-500 focus:border-red-500'
            : 'border-[var(--color-border)] focus:border-[var(--color-primary)]'
        }`}
      />
      {error && (
        <p id={errorId} className="text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  )
}
