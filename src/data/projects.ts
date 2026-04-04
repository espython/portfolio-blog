import { type Project } from '@/types/project'

export const projects: Project[] = [
  {
    slug: 'project-one',
    title: 'Project One',
    description:
      'A full-stack web application built with Next.js, TypeScript, and PostgreSQL. Focuses on performance and accessibility.',
    longDescription:
      'This project was born out of a need to manage complex data workflows in a team environment. It features role-based access control, real-time updates via Server-Sent Events, and a fully accessible UI built to WCAG 2.1 AA standards.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    githubUrl: 'https://github.com/espython',
    liveUrl: '#',
    featured: true,
    coverImage: '/images/projects/project-one.png',
  },
  {
    slug: 'project-two',
    title: 'Project Two',
    description:
      'An open-source CLI tool that automates repetitive development tasks and integrates with popular CI/CD pipelines.',
    longDescription:
      'Built to eliminate the boilerplate overhead in day-to-day development. Supports plugins, custom templates, and hooks. Integrates with GitHub Actions, GitLab CI, and CircleCI out of the box.',
    tags: ['Node.js', 'CLI', 'CI/CD'],
    githubUrl: 'https://github.com/espython',
    featured: true,
  },
  {
    slug: 'project-three',
    title: 'Project Three',
    description:
      'A real-time dashboard for monitoring system metrics, built with WebSockets and React.',
    longDescription:
      'Streams live CPU, memory, and network metrics from a Node.js agent to a React dashboard over WebSockets. Supports configurable alerting thresholds and historical charting.',
    tags: ['React', 'WebSockets', 'Tailwind CSS'],
    githubUrl: 'https://github.com/espython',
    liveUrl: '#',
    featured: true,
  },
  {
    slug: 'project-four',
    title: 'Project Four',
    description: 'A markdown-based static site generator with a focus on developer experience.',
    longDescription:
      'A lightweight static site generator that transforms Markdown + frontmatter into a production-ready site. Supports custom themes, syntax highlighting, and incremental builds.',
    tags: ['TypeScript', 'Markdown', 'Node.js'],
    githubUrl: 'https://github.com/espython',
    featured: false,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
