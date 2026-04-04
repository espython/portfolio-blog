import Link from 'next/link'

export function CallToAction() {
  return (
    <section className="bg-[var(--color-bg-subtle)]">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-4xl">
          Let&apos;s build something together
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-lg text-[var(--color-text-muted)]">
          Have a project in mind or just want to say hello? My inbox is always open.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-lg bg-[var(--color-primary)] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-hover)]"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  )
}
