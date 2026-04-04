import { type Project } from '@/types/project'

export const projects: Project[] = [
  {
    slug: 'strapi-firebase-auth',
    title: 'Strapi Firebase Auth',
    description:
      'Open-source Strapi plugin that integrates Firebase Authentication — supports social providers, custom tokens, and role syncing.',
    longDescription:
      'Published on the official Strapi Marketplace. Enables Firebase Authentication in any Strapi v4 application. Supports multiple social providers (Google, Facebook, Apple), custom token flows, and automatic Strapi role assignment based on Firebase claims. Used by teams who need a headless CMS with a modern auth layer without rolling their own.',
    tags: ['Node.js', 'Strapi', 'Firebase', 'Open Source'],
    githubUrl: 'https://github.com/swensonhe/strapi-firebase-auth',
    liveUrl: 'https://market.strapi.io/plugins/@swensonhe-strapi-plugin-firebase-auth',
    featured: true,
  },
  {
    slug: 'mcmakler',
    title: 'McMakler',
    description:
      "Germany's leading digital real estate platform — connecting buyers, sellers, and agents through a seamless online experience.",
    longDescription:
      "McMakler is one of Germany's largest PropTech companies, offering a hybrid real estate service that combines an online platform with local agents. Contributed to the platform's web frontend, focusing on listing search, property detail pages, and agent-facing tools.",
    tags: ['React', 'TypeScript', 'Web'],
    liveUrl: 'https://www.mcmakler.de/',
    featured: true,
  },
  {
    slug: 'do365',
    title: 'do365',
    description:
      'Cloud-based template management for Office 365 — Word, Outlook, PowerPoint, and Excel — built with React, Node.js, C#, and .NET.',
    longDescription:
      'do365 lets organisations manage, distribute, and enforce branded document templates across Office 365 apps. The system integrates with Microsoft Graph to push templates directly into users&apos; Office applications. Built with a React frontend, Node.js API layer, and a C#/.NET backend handling authentication and template rendering.',
    tags: ['React', 'Node.js', 'C#', '.NET', 'Office 365'],
    liveUrl: 'https://www.do365.nl',
    featured: true,
  },
  {
    slug: 'portfolio-blog',
    title: 'espython.dev',
    description:
      'This site — a portfolio and blog built with Next.js 16, TypeScript, Tailwind CSS v4, and Netlify.',
    longDescription:
      'Designed and built from scratch with a focus on performance and accessibility. Features a statically generated blog backed by Markdown files, dynamic OG images, a contact form powered by Resend, and a perfect Lighthouse score across all pages.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Netlify'],
    githubUrl: 'https://github.com/espython/portfolio-blog',
    liveUrl: 'https://espython.dev',
    featured: false,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
