import { type Metadata } from 'next'

import { BlogPostCard } from '@/components/blog/BlogPostCard'
import { getAllPostsMeta } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts on web development, TypeScript, and building things.',
}

export default function BlogPage() {
  const posts = getAllPostsMeta()

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12">
        <p className="mb-2 text-sm font-medium tracking-widest text-[var(--color-primary)] uppercase">
          Writing
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-5xl">
          Blog
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
          Thoughts on web development, TypeScript, and things I learn along the way.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-[var(--color-text-muted)]">No posts yet. Check back soon.</p>
      ) : (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <BlogPostCard post={post} />
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
