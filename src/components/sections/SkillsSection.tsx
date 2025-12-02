'use client'

import { useTranslations } from 'next-intl'
import { CodeBracketIcon, SparklesIcon } from '@heroicons/react/24/outline'

export function SkillsSection() {
  const t = useTranslations()

  return (
    <section className="py-16 px-4 bg-base-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <CodeBracketIcon className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold">{t('skills.title')}</h2>
        </div>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <SparklesIcon className="w-6 h-6 text-primary" />
            {t('skills.expertSkills')}
          </h3>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            {Array.isArray(t.raw('skills.mainSkills')) &&
              t.raw('skills.mainSkills').map((skill: any, index: number) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-base-content/70">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-base-300 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full transition-all duration-500" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-6">Other Technologies</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">{t('skills.languages')}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-primary badge-lg">Ruby</span>
                <span className="badge badge-primary badge-lg">Python</span>
                <span className="badge badge-primary badge-lg">TypeScript</span>
                <span className="badge badge-primary badge-lg">PHP</span>
                <span className="badge badge-primary badge-lg">Java</span>
                <span className="badge badge-primary badge-lg">Shell/Bash</span>
              </div>
            </div>
          </div>
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">{t('skills.frameworks')}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-secondary badge-lg">Ruby on Rails</span>
                <span className="badge badge-secondary badge-lg">Next.js</span>
                <span className="badge badge-secondary badge-lg">Astro</span>
                <span className="badge badge-secondary badge-lg">WordPress</span>
                <span className="badge badge-secondary badge-lg">Flutter</span>
                <span className="badge badge-secondary badge-lg">React Native</span>
              </div>
            </div>
          </div>
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">{t('skills.cloud')}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-accent badge-lg">Docker</span>
                <span className="badge badge-accent badge-lg">ECS</span>
                <span className="badge badge-accent badge-lg">Fargate</span>
                <span className="badge badge-accent badge-lg">GitHub Actions</span>
                <span className="badge badge-accent badge-lg">CircleCI</span>
                <span className="badge badge-accent badge-lg">Terraform</span>
                <span className="badge badge-accent badge-lg">Cloudflare</span>
                <span className="badge badge-accent badge-lg">Vercel</span>
                <span className="badge badge-accent badge-lg">Netlify</span>
              </div>
            </div>
          </div>
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">{t('skills.database')}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-info badge-lg">MySQL</span>
                <span className="badge badge-info badge-lg">Redis</span>
                <span className="badge badge-info badge-lg">Elasticsearch</span>
                <span className="badge badge-info badge-lg">DynamoDB</span>
                <span className="badge badge-info badge-lg">SQLite</span>
              </div>
            </div>
          </div>
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">{t('skills.testing')}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-warning badge-lg">Jest</span>
                <span className="badge badge-warning badge-lg">RSpec</span>
                <span className="badge badge-warning badge-lg">Pytest</span>
                <span className="badge badge-warning badge-lg">Mocha</span>
                <span className="badge badge-warning badge-lg">Chai</span>
                <span className="badge badge-warning badge-lg">Selenium</span>
                <span className="badge badge-warning badge-lg">Cypress</span>
                <span className="badge badge-warning badge-lg">Playwright</span>
                <span className="badge badge-warning badge-lg">JUnit</span>
              </div>
            </div>
          </div>
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">{t('skills.api')}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-success badge-lg">REST</span>
                <span className="badge badge-success badge-lg">GraphQL</span>
                <span className="badge badge-success badge-lg">gRPC</span>
                <span className="badge badge-success badge-lg">WebSocket</span>
                <span className="badge badge-success badge-lg">WebRTC</span>
                <span className="badge badge-success badge-lg">OpenAPI</span>
                <span className="badge badge-success badge-lg">Swagger</span>
                <span className="badge badge-success badge-lg">Postman</span>
              </div>
            </div>
          </div>
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">{t('skills.infrastructure')}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-lg">Linux</span>
                <span className="badge badge-lg">Debian</span>
                <span className="badge badge-lg">Ubuntu</span>
                <span className="badge badge-lg">CentOS</span>
                <span className="badge badge-lg">TCP/IP</span>
                <span className="badge badge-lg">Nginx</span>
                <span className="badge badge-lg">Apache</span>
                <span className="badge badge-lg">Load Balancer</span>
                <span className="badge badge-lg">CDN</span>
              </div>
            </div>
          </div>
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">{t('skills.messageQueue')}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-error badge-lg">RabbitMQ</span>
                <span className="badge badge-error badge-lg">Kafka</span>
                <span className="badge badge-error badge-lg">SQS</span>
                <span className="badge badge-error badge-lg">SNS</span>
                <span className="badge badge-error badge-lg">Pub/Sub</span>
              </div>
            </div>
          </div>
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">{t('skills.versionControl')}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-lg">Git</span>
                <span className="badge badge-lg">GitHub</span>
                <span className="badge badge-lg">GitLab</span>
                <span className="badge badge-lg">Bitbucket</span>
                <span className="badge badge-lg">VS Code</span>
                <span className="badge badge-lg">Vim</span>
              </div>
            </div>
          </div>
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">{t('skills.ai')}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-primary badge-lg">OpenAI</span>
                <span className="badge badge-primary badge-lg">Anthropic</span>
                <span className="badge badge-primary badge-lg">Groq</span>
                <span className="badge badge-primary badge-lg">LangChain</span>
                <span className="badge badge-primary badge-lg">TensorFlow</span>
                <span className="badge badge-primary badge-lg">PyTorch</span>
                <span className="badge badge-primary badge-lg">scikit-learn</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
