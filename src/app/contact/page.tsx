import { type Metadata } from 'next'

import { ContactForm } from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Eslam Mahmoud — open to new opportunities and collaborations.',
}

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <div className="grid gap-16 md:grid-cols-2">
        {/* Left — copy */}
        <div>
          <p className="mb-2 text-sm font-medium tracking-widest text-[var(--color-primary)] uppercase">
            Say Hello
          </p>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-[var(--color-text-muted)]">
            I&apos;m open to new opportunities, collaborations, or just a friendly chat about tech.
            Fill in the form and I&apos;ll get back to you as soon as possible.
          </p>

          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3 text-[var(--color-text-muted)]">
              <span className="font-medium text-[var(--color-text)]">Email</span>
              <a
                href="mailto:espython85@gmail.com"
                className="transition-colors hover:text-[var(--color-primary)]"
              >
                espython85@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3 text-[var(--color-text-muted)]">
              <span className="font-medium text-[var(--color-text)]">LinkedIn</span>
              <a
                href="https://linkedin.com/in/eslam-mahmoud-a63b06116"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[var(--color-primary)]"
              >
                eslam-mahmoud-a63b06116
              </a>
            </li>
            <li className="flex items-center gap-3 text-[var(--color-text-muted)]">
              <span className="font-medium text-[var(--color-text)]">GitHub</span>
              <a
                href="https://github.com/espython"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[var(--color-primary)]"
              >
                github.com/espython
              </a>
            </li>
          </ul>
        </div>

        {/* Right — form */}
        <ContactForm />
      </div>
    </main>
  )
}
