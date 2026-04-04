---
title: Getting Started with Next.js 15
date: '2026-03-20'
summary: A deep dive into what changed in Next.js 15 — new APIs, breaking changes, and how to migrate your existing app.
tags:
  - Next.js
  - React
---

Next.js 15 ships with a set of breaking changes that are easy to miss if you're upgrading from v14. This post covers what changed, what to watch out for, and how to make your migration smooth.

## What's New

### `params` is Now a Promise

The most impactful change for App Router users: `params` and `searchParams` are now asynchronous. You must `await` them before accessing values.

```tsx
// Before (Next.js 14)
export default function Page({ params }: { params: { slug: string } }) {
  return <h1>{params.slug}</h1>
}

// After (Next.js 15)
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <h1>{slug}</h1>
}
```

### Turbopack is Now Stable for `next dev`

Turbopack graduates from beta. You get significantly faster HMR out of the box — no config needed.

### `fetch` Caching Defaults Changed

Fetch requests are **no longer cached by default**. To cache, you must explicitly opt in:

```ts
const data = await fetch('/api/data', { cache: 'force-cache' })
```

## Migration Checklist

- Update all `params` and `searchParams` accesses to use `await`
- Review any `fetch` calls that relied on default caching
- Run `next lint` — the new ESLint rules will catch most issues

## Conclusion

Next.js 15 is a worthwhile upgrade. The async params change feels jarring at first, but it enables better streaming and caching primitives down the line.
