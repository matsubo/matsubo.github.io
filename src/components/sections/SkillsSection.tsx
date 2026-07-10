'use client'

import { useTranslations } from 'next-intl'
import { CodeBracketIcon } from '@heroicons/react/24/outline'

const CATEGORIES = [
  {
    key: 'languages',
    items: ['Ruby', 'Python', 'TypeScript', 'PHP', 'Java', 'Shell/Bash'],
  },
  {
    key: 'frameworks',
    items: ['Ruby on Rails', 'Next.js', 'Astro', 'WordPress', 'Flutter', 'React Native'],
  },
  {
    key: 'cloud',
    items: [
      'Docker',
      'ECS',
      'Fargate',
      'GitHub Actions',
      'CircleCI',
      'Terraform',
      'Cloudflare',
      'Vercel',
      'Netlify',
    ],
  },
  {
    key: 'database',
    items: ['MySQL', 'Redis', 'Elasticsearch', 'DynamoDB', 'SQLite'],
  },
  {
    key: 'testing',
    items: [
      'Jest',
      'RSpec',
      'Pytest',
      'Mocha',
      'Chai',
      'Selenium',
      'Cypress',
      'Playwright',
      'JUnit',
    ],
  },
  {
    key: 'api',
    items: ['REST', 'GraphQL', 'gRPC', 'WebSocket', 'WebRTC', 'OpenAPI', 'Swagger', 'Postman'],
  },
  {
    key: 'infrastructure',
    items: [
      'Linux',
      'Debian',
      'Ubuntu',
      'CentOS',
      'TCP/IP',
      'Nginx',
      'Apache',
      'Load Balancer',
      'CDN',
    ],
  },
  {
    key: 'messageQueue',
    items: ['SQS', 'SNS', 'Pub/Sub'],
  },
  {
    key: 'versionControl',
    items: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'VS Code', 'Vim'],
  },
  {
    key: 'ai',
    items: ['OpenAI', 'Anthropic', 'Groq', 'Vertex AI', 'LangChain'],
  },
] as const

export function SkillsSection() {
  const t = useTranslations()

  const mainSkills: Array<{ name: string; level: number }> = Array.isArray(
    t.raw('skills.mainSkills')
  )
    ? [...t.raw('skills.mainSkills')].sort((a, b) => b.level - a.level)
    : []

  return (
    <section className="py-16 px-4 bg-base-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <CodeBracketIcon className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold">{t('skills.title')}</h2>
        </div>

        {/* Core stack */}
        <div className="mb-8">
          <h3 className="eyebrow mb-3">{t('skills.expertSkills')}</h3>
          <div className="flex flex-wrap gap-2">
            {mainSkills.map(skill => (
              <span
                key={skill.name}
                className="inline-flex items-center rounded-full border border-primary/35 bg-primary/10 text-primary px-3.5 py-1.5 text-sm md:text-base font-semibold"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Category rows */}
        <div className="card bg-base-100 border border-base-content/10 layer-shadow-md">
          <div className="card-body p-4 md:p-6 divide-y divide-base-300/60">
            {CATEGORIES.map(category => (
              <div
                key={category.key}
                className="grid md:grid-cols-[11rem_1fr] gap-1.5 md:gap-4 py-3 first:pt-0 last:pb-0 items-baseline"
              >
                <h4 className="text-sm font-semibold text-base-content/60">
                  {t(`skills.${category.key}`)}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {category.items.map(item => (
                    <span key={item} className="badge-neo text-base-content/85">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
