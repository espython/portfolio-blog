import Link from 'next/link'

interface PostMeta {
  slug: string
  title: string
  date: string
  summary: string
  tags: string[]
}

const LATEST_POSTS: PostMeta[] = [
  {
    slug: 'getting-started-with-nextjs-15',
    title: 'Getting Started with Next.js 15',
    date: '2026-03-20',
    summary:
      'A deep dive into what changed in Next.js 15 — new APIs, breaking changes, and how to migrate your existing app.',
    tags: ['Next.js', 'React'],
  },
  {
    slug: 'mastering-tailwind-css-v4',
    title: 'Mastering Tailwind CSS v4',
    date: '2026-03-10',
    summary:
      'Tailwind v4 rewrites the engine from scratch. Here is what the new CSS-first config means for your workflow.',
    tags: ['CSS', 'Tailwind'],
  },
  {
    slug: 'typescript-tips-for-react-devs',
    title: 'TypeScript Tips for React Developers',
    date: '2026-02-28',
    summary:
      'Practical patterns I use daily: discriminated unions, generic components, and avoiding the any escape hatch.',
    tags: ['TypeScript', 'React'],
  },
]

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function LatestPosts() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="mb-2 text-sm font-medium tracking-widest text-[var(--color-primary)] uppercase">
            From the Blog
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-4xl">
            Latest Posts
          </h2>
        </div>
        <Link
          href="/blog"
          className="hidden text-sm font-medium text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)] sm:block"
        >
          All posts →
        </Link>
      </div>

      <ul className="divide-y divide-[var(--color-border)]">
        {LATEST_POSTS.map((post) => (
          <li key={post.slug} className="group py-6">
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-6">
                <time
                  dateTime={post.date}
                  className="shrink-0 text-sm text-[var(--color-text-subtle)] sm:w-36"
                >
                  {formatDate(post.date)}
                </time>
                <div className="flex-1">
                  <h3 className="mb-1 text-lg font-semibold text-[var(--color-text)] transition-colors group-hover:text-[var(--color-primary)]">
                    {post.title}
                  </h3>
                  <p className="mb-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {post.summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-[var(--color-bg-subtle)] px-2.5 py-1 text-xs font-medium text-[var(--color-text-muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-6 sm:hidden">
        <Link
          href="/blog"
          className="text-sm font-medium text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)]"
        >
          All posts →
        </Link>
      </div>
    </section>
  )
}
