# espython.dev — Portfolio & Blog

Personal portfolio and blog of Eslam Mahmoud, built with Next.js, TypeScript, and Tailwind CSS v4.

## Tech stack

- **Framework** — Next.js 16 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS v4 (CSS-first config)
- **Content** — Markdown files with gray-matter + unified/rehype pipeline
- **Email** — Resend
- **Deployment** — Netlify (`@netlify/plugin-nextjs`)

## Local setup

**Prerequisites:** Node.js ≥ 22, npm

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Create a `.env.local` file at the project root:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RESEND_API_KEY=re_...
CONTACT_TO_EMAIL=your@email.com
```

| Variable               | Required | Description                                                             |
| ---------------------- | -------- | ----------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Yes      | Canonical base URL (used in sitemap and OG images)                      |
| `RESEND_API_KEY`       | Yes      | API key from [resend.com](https://resend.com) — powers the contact form |
| `CONTACT_TO_EMAIL`     | Yes      | Email address that receives contact form submissions                    |

## Folder structure

```
src/
├── app/                     # Next.js App Router pages and layouts
│   ├── layout.tsx           # Root layout (fonts, metadata defaults, dark-mode)
│   ├── page.tsx             # Homepage (Hero + LatestPosts + FeaturedProjects + CTA)
│   ├── about/page.tsx       # About page (bio, skills, experience timeline)
│   ├── blog/
│   │   ├── page.tsx         # Blog listing
│   │   └── [slug]/page.tsx  # Individual post (rendered via unified pipeline)
│   ├── projects/
│   │   ├── page.tsx         # Projects listing
│   │   └── [slug]/page.tsx  # Project detail
│   ├── contact/page.tsx     # Contact form
│   ├── api/contact/route.ts # POST handler — sends email via Resend
│   ├── opengraph-image.tsx  # Default OG image (edge runtime)
│   ├── sitemap.ts           # Dynamic sitemap
│   └── robots.ts            # robots.txt
├── components/              # React components, co-located by feature
├── data/projects.ts         # Static project data
├── lib/posts.ts             # Markdown parsing utilities
└── types/                   # Shared TypeScript types
posts/                       # Blog post Markdown files
```

## How to add a blog post

1. Create a new file in `posts/` using kebab-case: `posts/my-new-post.md`
2. Add the required frontmatter:

```markdown
---
title: My New Post
date: '2026-05-01'
summary: A one-sentence description shown in the post card and meta tags.
tags:
  - Tag One
  - Tag Two
---

Your post content here. Markdown and fenced code blocks are fully supported.
```

3. The post is statically generated at `/blog/my-new-post` on the next build. No other files need to be touched.

**Frontmatter fields:**

| Field     | Required | Description                                   |
| --------- | -------- | --------------------------------------------- |
| `title`   | Yes      | Post title                                    |
| `date`    | Yes      | ISO date string (`YYYY-MM-DD`)                |
| `summary` | Yes      | Short description (used in cards and OG meta) |
| `tags`    | No       | Array of tag strings                          |

## How to add a project

Edit `src/data/projects.ts` and append an entry to the `projects` array:

```ts
{
  slug: 'my-project',           // URL: /projects/my-project
  title: 'My Project',
  description: 'Short description shown in the card.',
  longDescription: 'Optional longer description for the detail page.',
  tags: ['React', 'TypeScript'],
  githubUrl: 'https://github.com/...',
  liveUrl: 'https://...',
  featured: true,               // Show on homepage FeaturedProjects section
}
```

## Scripts

| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start development server     |
| `npm run build` | Production build             |
| `npm start`     | Run production build locally |
| `npm run lint`  | Run ESLint                   |

## Deployment

The site deploys automatically to Netlify via GitHub Actions.

- **Production** — merges to `main` trigger a production deploy
- **Previews** — pull requests get a preview URL posted as a PR comment

### Manual deploy

```bash
# Requires Netlify CLI and the env vars below set
npm run build
npx netlify deploy --build --prod
```

### Required GitHub secrets

| Secret                 | Description                                  |
| ---------------------- | -------------------------------------------- |
| `NETLIFY_AUTH_TOKEN`   | Personal access token from Netlify           |
| `NETLIFY_SITE_ID`      | Site API ID from Netlify site settings       |
| `RESEND_API_KEY`       | Resend API key                               |
| `CONTACT_TO_EMAIL`     | Email address for contact form delivery      |
| `NEXT_PUBLIC_SITE_URL` | Production URL (e.g. `https://espython.dev`) |
