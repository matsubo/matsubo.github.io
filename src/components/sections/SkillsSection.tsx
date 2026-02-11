'use client'

import { useTranslations } from 'next-intl'
import { CodeBracketIcon, SparklesIcon } from '@heroicons/react/24/outline'

export function SkillsSection() {
  const t = useTranslations()

  return (
    <section className="py-20 px-4 bg-base-200 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-secondary opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        <div className="flex items-center gap-4 mb-12 animate-fade-in-up">
          <CodeBracketIcon className="w-10 h-10 text-primary" />
          <h2 className="section-header text-5xl md:text-6xl text-base-content">{t('skills.title')}</h2>
        </div>
        <div className="mb-16 animate-fade-in-up animation-delay-100">
          <h3 className="section-header text-3xl md:text-4xl mb-8 flex items-center gap-3 text-base-content">
            <SparklesIcon className="w-8 h-8 text-secondary" />
            {t('skills.expertSkills')}
          </h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {Array.isArray(t.raw('skills.mainSkills')) &&
              t.raw('skills.mainSkills').map((skill: any, index: number) => (
                <div key={index} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="code-accent text-base font-semibold text-base-content">{skill.name}</span>
                    <span className="code-accent text-sm font-bold text-primary">{skill.level}%</span>
                  </div>
                  <div className="relative h-3 bg-base-300 border-2 border-neutral overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out group-hover:brightness-110"
                      style={{ width: `${skill.level}%`, animationDelay: `${index * 100}ms` }}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="animate-fade-in-up animation-delay-200">
          <h3 className="section-header text-3xl md:text-4xl mb-8 text-base-content">Other Technologies</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up animation-delay-300">
          <div className="card bg-base-100 border-3 border-primary layer-shadow-lg card-hover-lift">
            <div className="card-body p-6">
              <h3 className="section-header text-2xl mb-4 text-primary">{t('skills.languages')}</h3>
              <div className="flex flex-wrap gap-3">
                <span className="badge-neo text-primary border-primary">Ruby</span>
                <span className="badge-neo text-primary border-primary">Python</span>
                <span className="badge-neo text-primary border-primary">TypeScript</span>
                <span className="badge-neo text-primary border-primary">PHP</span>
                <span className="badge-neo text-primary border-primary">Java</span>
                <span className="badge-neo text-primary border-primary">Shell/Bash</span>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 border-3 border-primary layer-shadow-lg card-hover-lift">
            <div className="card-body p-6">
              <h3 className="section-header text-2xl mb-4 text-primary">{t('skills.frameworks')}</h3>
              <div className="flex flex-wrap gap-3">
                <span className="badge-neo text-primary border-primary">Ruby on Rails</span>
                <span className="badge-neo text-primary border-primary">Next.js</span>
                <span className="badge-neo text-primary border-primary">Astro</span>
                <span className="badge-neo text-primary border-primary">WordPress</span>
                <span className="badge-neo text-primary border-primary">Flutter</span>
                <span className="badge-neo text-primary border-primary">React Native</span>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 border-3 border-primary layer-shadow-lg card-hover-lift">
            <div className="card-body p-6">
              <h3 className="section-header text-2xl mb-4 text-primary">{t('skills.cloud')}</h3>
              <div className="flex flex-wrap gap-3">
                <span className="badge-neo text-primary border-primary">Docker</span>
                <span className="badge-neo text-primary border-primary">ECS</span>
                <span className="badge-neo text-primary border-primary">Fargate</span>
                <span className="badge-neo text-primary border-primary">GitHub Actions</span>
                <span className="badge-neo text-primary border-primary">CircleCI</span>
                <span className="badge-neo text-primary border-primary">Terraform</span>
                <span className="badge-neo text-primary border-primary">Cloudflare</span>
                <span className="badge-neo text-primary border-primary">Vercel</span>
                <span className="badge-neo text-primary border-primary">Netlify</span>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 border-3 border-primary layer-shadow-lg card-hover-lift">
            <div className="card-body p-6">
              <h3 className="section-header text-2xl mb-4 text-primary">{t('skills.database')}</h3>
              <div className="flex flex-wrap gap-3">
                <span className="badge-neo text-primary border-primary">MySQL</span>
                <span className="badge-neo text-primary border-primary">Redis</span>
                <span className="badge-neo text-primary border-primary">Elasticsearch</span>
                <span className="badge-neo text-primary border-primary">DynamoDB</span>
                <span className="badge-neo text-primary border-primary">SQLite</span>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 border-3 border-primary layer-shadow-lg card-hover-lift">
            <div className="card-body p-6">
              <h3 className="section-header text-2xl mb-4 text-primary">{t('skills.testing')}</h3>
              <div className="flex flex-wrap gap-3">
                <span className="badge-neo text-primary border-primary">Jest</span>
                <span className="badge-neo text-primary border-primary">RSpec</span>
                <span className="badge-neo text-primary border-primary">Pytest</span>
                <span className="badge-neo text-primary border-primary">Mocha</span>
                <span className="badge-neo text-primary border-primary">Chai</span>
                <span className="badge-neo text-primary border-primary">Selenium</span>
                <span className="badge-neo text-primary border-primary">Cypress</span>
                <span className="badge-neo text-primary border-primary">Playwright</span>
                <span className="badge-neo text-primary border-primary">JUnit</span>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 border-3 border-primary layer-shadow-lg card-hover-lift">
            <div className="card-body p-6">
              <h3 className="section-header text-2xl mb-4 text-primary">{t('skills.api')}</h3>
              <div className="flex flex-wrap gap-3">
                <span className="badge-neo text-primary border-primary">REST</span>
                <span className="badge-neo text-primary border-primary">GraphQL</span>
                <span className="badge-neo text-primary border-primary">gRPC</span>
                <span className="badge-neo text-primary border-primary">WebSocket</span>
                <span className="badge-neo text-primary border-primary">WebRTC</span>
                <span className="badge-neo text-primary border-primary">OpenAPI</span>
                <span className="badge-neo text-primary border-primary">Swagger</span>
                <span className="badge-neo text-primary border-primary">Postman</span>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 border-3 border-primary layer-shadow-lg card-hover-lift">
            <div className="card-body p-6">
              <h3 className="section-header text-2xl mb-4 text-primary">{t('skills.infrastructure')}</h3>
              <div className="flex flex-wrap gap-3">
                <span className="badge-neo text-primary border-primary">Linux</span>
                <span className="badge-neo text-primary border-primary">Debian</span>
                <span className="badge-neo text-primary border-primary">Ubuntu</span>
                <span className="badge-neo text-primary border-primary">CentOS</span>
                <span className="badge-neo text-primary border-primary">TCP/IP</span>
                <span className="badge-neo text-primary border-primary">Nginx</span>
                <span className="badge-neo text-primary border-primary">Apache</span>
                <span className="badge-neo text-primary border-primary">Load Balancer</span>
                <span className="badge-neo text-primary border-primary">CDN</span>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 border-3 border-primary layer-shadow-lg card-hover-lift">
            <div className="card-body p-6">
              <h3 className="section-header text-2xl mb-4 text-primary">{t('skills.messageQueue')}</h3>
              <div className="flex flex-wrap gap-3">
                <span className="badge-neo text-primary border-primary">SQS</span>
                <span className="badge-neo text-primary border-primary">SNS</span>
                <span className="badge-neo text-primary border-primary">Pub/Sub</span>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 border-3 border-primary layer-shadow-lg card-hover-lift">
            <div className="card-body p-6">
              <h3 className="section-header text-2xl mb-4 text-primary">{t('skills.versionControl')}</h3>
              <div className="flex flex-wrap gap-3">
                <span className="badge-neo text-primary border-primary">Git</span>
                <span className="badge-neo text-primary border-primary">GitHub</span>
                <span className="badge-neo text-primary border-primary">GitLab</span>
                <span className="badge-neo text-primary border-primary">Bitbucket</span>
                <span className="badge-neo text-primary border-primary">VS Code</span>
                <span className="badge-neo text-primary border-primary">Vim</span>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 border-3 border-primary layer-shadow-lg card-hover-lift">
            <div className="card-body p-6">
              <h3 className="section-header text-2xl mb-4 text-primary">{t('skills.ai')}</h3>
              <div className="flex flex-wrap gap-3">
                <span className="badge-neo text-primary border-primary">OpenAI</span>
                <span className="badge-neo text-primary border-primary">Anthropic</span>
                <span className="badge-neo text-primary border-primary">Groq</span>
                <span className="badge-neo text-primary border-primary">Vertex AI</span>
                <span className="badge-neo text-primary border-primary">LangChain</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
