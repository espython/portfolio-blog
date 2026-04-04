import { type Metadata } from 'next'

import { ExperienceTimeline } from '@/components/about/ExperienceTimeline'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Full Stack Software Engineer with 6+ years of experience building scalable web and mobile applications.',
}

export default function AboutPage() {
  return (
    <main>
      <HeroBio />
      <ExperienceTimeline />
    </main>
  )
}

function HeroBio() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <div className="flex flex-col gap-12 md:flex-row md:items-start md:gap-16">
        {/* Avatar placeholder */}
        <div className="shrink-0">
          <div className="h-36 w-36 rounded-2xl bg-[var(--color-bg-subtle)] ring-4 ring-[var(--color-border)] md:h-44 md:w-44" />
        </div>

        {/* Bio */}
        <div className="flex-1">
          <p className="mb-2 text-sm font-medium tracking-widest text-[var(--color-primary)] uppercase">
            About Me
          </p>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-5xl">
            Hi, I&apos;m <span className="text-[var(--color-primary)]">YourName</span>
          </h1>
          <div className="space-y-4 text-lg leading-relaxed text-[var(--color-text-muted)]">
            <p>
              I&apos;m a full-stack developer based in —, passionate about building fast, accessible
              web experiences. I work primarily with TypeScript, React, and Node.js, and I care
              deeply about clean code and great developer experience.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me writing about things I&apos;ve learned,
              contributing to open source, or exploring new tools that make development more
              enjoyable.
            </p>
            <p>
              I&apos;m currently open to new opportunities — feel free to{' '}
              <a
                href="/contact"
                className="font-medium text-[var(--color-primary)] underline underline-offset-4 transition-colors hover:text-[var(--color-primary-hover)]"
              >
                get in touch
              </a>
              .
            </p>
          </div>

          {/* Social links */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://github.com/espython"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-[var(--color-border)] px-4 py-2 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourname"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-[var(--color-border)] px-4 py-2 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            >
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--color-primary-hover)]"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
