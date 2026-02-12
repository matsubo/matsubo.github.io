'use client'

import { useTranslations } from 'next-intl'
import { CodeBracketIcon } from '@heroicons/react/24/outline'

export function SkillsSection() {
  const t = useTranslations()

  return (
    <section className="py-16 px-4 bg-base-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <CodeBracketIcon className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold">{t('skills.title')}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">{t('skills.languages')}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-primary badge-lg">Ruby</span>
                <span className="badge badge-primary badge-lg">Python</span>
                <span className="badge badge-primary badge-lg">JavaScript</span>
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
                <span className="badge badge-secondary badge-lg">React</span>
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
                <span className="badge badge-accent badge-lg">AWS</span>
                <span className="badge badge-accent badge-lg">GCP</span>
                <span className="badge badge-accent badge-lg">Docker</span>
                <span className="badge badge-accent badge-lg">Kubernetes</span>
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
                <span className="badge badge-info badge-lg">PostgreSQL</span>
                <span className="badge badge-info badge-lg">Redis</span>
                <span className="badge badge-info badge-lg">MongoDB</span>
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
                <span className="badge badge-primary badge-lg">Vertex AI</span>
                <span className="badge badge-primary badge-lg">LangChain</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
