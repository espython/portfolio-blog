import Link from 'next/link'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="mx-auto flex max-w-6xl items-center justify-between gap-12 px-6 py-24 md:py-36">
      {/* Text content */}
      <div className="flex flex-col items-start gap-6">
        <p className="text-sm font-medium tracking-widest text-[var(--color-primary)] uppercase">
          Hey, I&apos;m
        </p>

        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-[var(--color-text)] sm:text-5xl md:text-6xl">
          Eslam Mahmoud
          <span className="block text-[var(--color-primary)]">Full Stack Engineer</span>
        </h1>

        <p className="max-w-2xl text-lg leading-relaxed text-[var(--color-text-muted)]">
          Senior Full Stack Engineer with 6+ years building scalable web applications. I work across
          the stack with TypeScript, React, Node.js, and AWS — and care deeply about clean
          architecture, performance, and developer experience.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/projects"
            className="rounded-lg bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-hover)]"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
          >
            Get in Touch
          </Link>
        </div>

        <div className="flex items-center gap-5 pt-2">
          <a
            href="https://github.com/espython"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--color-text-subtle)] transition-colors hover:text-[var(--color-primary)]"
          >
            GitHub
          </a>
          <span className="text-[var(--color-border)]">·</span>
          <a
            href="https://www.linkedin.com/in/eslam-mahmoud-a63b06116/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--color-text-subtle)] transition-colors hover:text-[var(--color-primary)]"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Avatar */}
      <div className="hidden shrink-0 lg:block">
        <div className="relative h-72 w-72 overflow-hidden rounded-3xl ring-4 ring-[var(--color-border)] ring-offset-4 ring-offset-[var(--color-bg)]">
          <Image
            src="/avatar.png"
            alt="Eslam Mahmoud"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
    </section>
  )
}
