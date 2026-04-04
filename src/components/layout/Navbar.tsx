'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import { ThemeToggle } from '@/components/ui/ThemeToggle'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--color-border)] bg-[var(--color-surface)]/90 backdrop-blur-sm">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold text-[var(--color-primary)] transition-opacity hover:opacity-80"
        >
          YourName.dev
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm transition-colors hover:text-[var(--color-primary)] ${
                    isActive
                      ? 'font-semibold text-[var(--color-primary)]'
                      : 'text-[var(--color-text-muted)]'
                  }`}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* Mobile hamburger */}
          <button
            className="flex flex-col gap-1.5 p-1 md:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span
              className={`block h-0.5 w-6 bg-[var(--color-text)] transition-transform duration-200 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span
              className={`block h-0.5 w-6 bg-[var(--color-text)] transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-0.5 w-6 bg-[var(--color-text)] transition-transform duration-200 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-6 pb-4 md:hidden">
          <ul className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-[var(--color-bg-subtle)] ${
                      isActive
                        ? 'font-semibold text-[var(--color-primary)]'
                        : 'text-[var(--color-text-muted)]'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </header>
  )
}
