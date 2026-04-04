import { type Metadata } from 'next'

import { ExperienceTimeline } from '@/components/about/ExperienceTimeline'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Full Stack Software Engineer with 6+ years of experience building scalable web and mobile applications.',
  openGraph: {
    url: '/about',
    title: 'About — Eslam Mahmoud',
    description:
      'Full Stack Software Engineer with 6+ years of experience. Currently Senior Engineer at VOIS (Vodafone Intelligent Solutions).',
  },
}

export default function AboutPage() {
  return (
    <main>
      <HeroBio />
      <Skills />
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
            Hi, I&apos;m <span className="text-[var(--color-primary)]">Eslam</span>
          </h1>
          <div className="space-y-4 text-lg leading-relaxed text-[var(--color-text-muted)]">
            <p>
              I&apos;m a Senior Full Stack Engineer based in Luxor, Egypt, with 6+ years of
              experience building scalable web and mobile applications. I work primarily with
              TypeScript, React, Node.js, and AWS — and I care deeply about clean architecture,
              performance, and great developer experience.
            </p>
            <p>
              Currently at VOIS (Vodafone Intelligent Solutions), where I work on large-scale web
              products. Previously I&apos;ve built platforms at InVitro Capital, Swenson He,
              DotOffice, HyperList, and ADRI — shipping everything from real estate marketplaces and
              SaaS dashboards to open-source developer tooling.
            </p>
            <p>
              Outside of work I write about things I&apos;ve learned, contribute to open source, and
              explore new tools that make development more enjoyable. Feel free to{' '}
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
              href="https://www.linkedin.com/in/eslam-mahmoud-a63b06116/"
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

const SKILL_GROUPS = [
  {
    label: 'Frontend',
    skills: [
      'TypeScript',
      'JavaScript',
      'React.js',
      'Next.js',
      'React Native',
      'Redux',
      'TailwindCSS',
      'Material-UI',
      'HTML & CSS',
    ],
  },
  {
    label: 'Backend',
    skills: [
      'Node.js',
      'Express.js',
      'Nest.js',
      'Java',
      'Spring / Quarkus',
      'C# / ASP.NET',
      'Python',
      'GraphQL',
    ],
  },
  {
    label: 'Cloud & DevOps',
    skills: [
      'AWS (Lambda, EC2, S3, RDS, CloudFront, ECS, SES…)',
      'Azure',
      'Google Cloud Platform',
      'GitHub Actions',
      'CloudFormation',
      'CI/CD',
    ],
  },
  {
    label: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'MSSQL', 'DynamoDB'],
  },
  {
    label: 'Testing & Performance',
    skills: ['Jest', 'Mocha', 'Code Splitting', 'Lazy Loading', 'Memoization'],
  },
  {
    label: 'Security & Auth',
    skills: ['JWT', 'OAuth', 'AWS IAM', 'Azure Active Directory'],
  },
]

function Skills() {
  return (
    <section className="bg-[var(--color-bg-subtle)]">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <p className="mb-2 text-sm font-medium tracking-widest text-[var(--color-primary)] uppercase">
          Tech Stack
        </p>
        <h2 className="mb-10 text-3xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-4xl">
          Skills &amp; Technologies
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group) => (
            <div key={group.label}>
              <h3 className="mb-3 text-xs font-semibold tracking-widest text-[var(--color-primary)] uppercase">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md bg-[var(--color-surface)] px-3 py-1.5 text-sm font-medium text-[var(--color-text-muted)] ring-1 ring-[var(--color-border)]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
