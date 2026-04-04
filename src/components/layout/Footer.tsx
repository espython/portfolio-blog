import Link from 'next/link'

const SOCIAL_LINKS = [
  { href: 'https://github.com/espython', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/eslam-mahmoud-a63b06116/', label: 'LinkedIn' },
]

const NAV_LINKS = [
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-subtle)]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-base font-bold text-[var(--color-primary)] hover:opacity-80"
            >
              espython.dev
            </Link>
            <p className="mt-1 text-xs text-[var(--color-text-subtle)]">
              Full Stack Engineer · Luxor, Egypt
            </p>
          </div>

          {/* Nav links */}
          <ul className="flex flex-wrap gap-6">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social links */}
          <ul className="flex gap-5">
            {SOCIAL_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-xs text-[var(--color-text-subtle)]">
          © {year} Eslam Mahmoud — Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
