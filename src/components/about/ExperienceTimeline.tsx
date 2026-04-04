interface Role {
  title: string
  company: string
  period: string
  location: string
  highlights: string[]
  tags: string[]
}

const EXPERIENCE: Role[] = [
  {
    title: 'Senior Full Stack Software Engineer',
    company: 'VOIS (Vodafone Intelligent Solutions)',
    period: 'Nov 2025 – Present',
    location: 'Remote',
    highlights: [
      'Building enterprise-scale web applications using React, Next.js, and Node.js within cross-functional agile teams.',
      'Developing Java microservices with Spring and Quarkus frameworks for high-throughput backend systems.',
      'Contributing across the full stack — TypeScript/React frontends through to Java/Node.js backend services.',
    ],
    tags: ['TypeScript', 'React.js', 'Next.js', 'Node.js', 'Java', 'Spring', 'Quarkus'],
  },
  {
    title: 'Senior Frontend Engineer',
    company: 'InVitro Capital',
    period: 'Nov 2024 – Nov 2025',
    location: 'Irvine, CA — Remote',
    highlights: [
      'Architected complex, performant React/TypeScript applications with advanced state management.',
      'Designed scalable AWS microservices (Lambda, CloudFront, S3, RDS, ECS).',
      'Improved performance monitoring via CloudWatch and enforced granular IAM access control.',
    ],
    tags: ['React.js', 'Next.js', 'TypeScript', 'AWS', 'Node.js'],
  },
  {
    title: 'Senior Full Stack Engineer',
    company: 'Swenson He LLC',
    period: 'May 2023 – Jun 2024',
    location: 'Los Angeles, CA — Remote',
    highlights: [
      'Reduced infrastructure costs by 40% via AWS Lambda serverless architecture.',
      'Designed CI/CD pipelines with GitHub Actions integrated with AWS Elastic Beanstalk.',
      'Built secure auth systems (JWT, OAuth) and robust notification pipelines (SNS, SES).',
    ],
    tags: ['Node.js', 'Nest.js', 'React.js', 'AWS', 'PostgreSQL'],
  },
  {
    title: 'Full Stack Developer',
    company: 'DotOffice VB',
    period: 'Nov 2021 – May 2023',
    location: 'Amsterdam, Netherlands — Remote',
    highlights: [
      'Built a cloud-based document management platform on Azure VMs with Azure Functions.',
      'Implemented Azure Active Directory for authentication and Azure Blob Storage for assets.',
      'Designed MSSQL schemas and applied React performance patterns (code splitting, memoization).',
    ],
    tags: ['TypeScript', 'React.js', 'C#', 'ASP.NET', 'Azure', 'MSSQL'],
  },
  {
    title: 'Software Engineer',
    company: 'HyperList LLC',
    period: 'Jun 2019 – Nov 2021',
    location: 'Riyadh, KSA — Remote',
    highlights: [
      'Built scalable e-learning platforms on Google Cloud Platform with microservices architecture.',
      'Developed a cross-platform iOS app with React Native.',
      'Reduced load times by 35% through debugging and performance optimisation.',
    ],
    tags: ['React.js', 'React Native', 'Node.js', 'GCP'],
  },
  {
    title: 'Frontend Developer',
    company: 'Arabic Digital Research Institute',
    period: 'Apr 2018 – Jun 2019',
    location: 'Manama, Bahrain — Remote',
    highlights: [
      'Contributed to an AI-driven research platform using React.js and Ember.js.',
      'Conducted code reviews and developed unit tests for UI components.',
    ],
    tags: ['React.js', 'Ember.js', 'JavaScript'],
  },
]

export function ExperienceTimeline() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <p className="mb-2 text-sm font-medium tracking-widest text-[var(--color-primary)] uppercase">
        Career
      </p>
      <h2 className="mb-12 text-3xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-4xl">
        Experience
      </h2>

      <ol className="relative border-l border-[var(--color-border)]">
        {EXPERIENCE.map((role, i) => (
          <li key={i} className="mb-12 ml-6 last:mb-0">
            {/* Timeline dot */}
            <span className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full bg-[var(--color-primary)] ring-4 ring-[var(--color-bg)]" />

            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-text)]">{role.title}</h3>
                <p className="text-sm font-medium text-[var(--color-primary)]">{role.company}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-[var(--color-text-muted)]">{role.period}</p>
                <p className="text-xs text-[var(--color-text-subtle)]">{role.location}</p>
              </div>
            </div>

            <ul className="mt-3 space-y-1.5">
              {role.highlights.map((point, j) => (
                <li key={j} className="flex gap-2 text-sm text-[var(--color-text-muted)]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-3 flex flex-wrap gap-2">
              {role.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-[var(--color-bg-subtle)] px-2.5 py-1 text-xs font-medium text-[var(--color-text-muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
