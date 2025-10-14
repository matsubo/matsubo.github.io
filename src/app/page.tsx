'use client'

import { useState, useEffect } from 'react'
import { NextIntlClientProvider, useTranslations } from 'next-intl'
import Layout from '@/components/layout'
import StructuredData from '@/components/structured-data'
import {
  AcademicCapIcon,
  BeakerIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  HeartIcon,
  LightBulbIcon,
  SparklesIcon,
  TrophyIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import aiModeratorImg from '@/images/ai-moderator.png'
import aiTriathlonImg from '@/images/ai-triathlon.png'

export default function IndexPage() {
  const [locale, setLocale] = useState<string>('en')
  const [messages, setMessages] = useState<any>(null)

  useEffect(() => {
    // Load locale from localStorage or browser
    const loadLocale = async () => {
      const storedLocale = localStorage.getItem('preferred-locale')
      let selectedLocale = 'en'

      if (storedLocale && (storedLocale === 'en' || storedLocale === 'ja')) {
        selectedLocale = storedLocale
      } else {
        const userLang = navigator.language.toLowerCase()
        selectedLocale = userLang.startsWith('ja') ? 'ja' : 'en'
        localStorage.setItem('preferred-locale', selectedLocale)
      }

      setLocale(selectedLocale)

      // Load messages
      const loadedMessages = await import(`@/messages/locales/${selectedLocale}/translation.json`)
      setMessages(loadedMessages.default)
    }

    loadLocale()
  }, [])

  // Listen for locale changes from footer
  useEffect(() => {
    const handleLocaleChange = async (e: CustomEvent) => {
      const newLocale = e.detail.locale
      setLocale(newLocale)
      const loadedMessages = await import(`@/messages/locales/${newLocale}/translation.json`)
      setMessages(loadedMessages.default)
    }

    window.addEventListener('localeChange' as any, handleLocaleChange as any)
    return () => {
      window.removeEventListener('localeChange' as any, handleLocaleChange as any)
    }
  }, [])

  if (!messages) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="loading loading-spinner loading-lg"></div>
          <p className="mt-4">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <StructuredData />
      <Layout>
        <MainContent />
      </Layout>
    </NextIntlClientProvider>
  )
}

function MainContent() {
  const t = useTranslations()

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* MBTI & Work Style Section */}
      <PersonalitySection />

      {/* Academic & Research Section */}
      <AcademicSection />

      {/* Professional Experience Section */}
      <ExperienceSection />

      {/* Technical Skills Section */}
      <SkillsSection />

      {/* Featured Projects Section */}
      <ProjectsSection />

      {/* Hobbies & Interests Section */}
      <HobbiesSection />

      {/* Archive Section */}
      <ArchiveSection />

      {/* Contact Section */}
      <ContactSection />
    </>
  )
}

function HeroSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-base-200 to-base-300">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <div className="avatar mb-4">
            <div className="w-32 rounded-full">
              <Image
                src="https://github.com/matsubo.png"
                alt="Yuki Matsukura profile picture"
                width={128}
                height={128}
                priority
                className="rounded-full"
              />
            </div>
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Yuki Matsukura
        </h1>
        <p className="text-2xl md:text-3xl text-base-content/80 mb-6">
          CTO & Software Engineer
        </p>
        <p className="text-xl text-base-content/70 max-w-3xl mx-auto mb-8">
          Building scalable systems and innovative solutions for 20+ years
        </p>

        {/* Social Links */}
        <nav className="flex flex-wrap justify-center gap-3 mt-8">
          <a
            href="https://github.com/matsubo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline gap-2 hover:scale-105 transition-transform"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yukimatsukura/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline gap-2 hover:scale-105 transition-transform"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/matsubokkuri"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline gap-2 hover:scale-105 transition-transform"
          >
            X (Twitter)
          </a>
          <a
            href="https://blog.teraren.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline gap-2 hover:scale-105 transition-transform"
          >
            <GlobeAltIcon className="w-5 h-5" />
            Blog
          </a>
          <a
            href="https://zenn.dev/matsubokkuri"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-primary gap-2 hover:scale-105 transition-transform"
          >
            Zenn
          </a>
        </nav>
      </div>
    </section>
  )
}

function AboutSection() {
  const t = useTranslations()

  return (
    <section className="py-16 px-4 bg-base-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">{t('about.title')}</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed">
            {t('about.paragraph1')}
          </p>
          <p className="text-lg leading-relaxed">
            {t('about.paragraph2')}
          </p>
        </div>
      </div>
    </section>
  )
}

function PersonalitySection() {
  const t = useTranslations()

  return (
    <section className="py-16 px-4 bg-base-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <LightBulbIcon className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold">{t('personality.title')}</h2>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title text-3xl mb-4 flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
              <span className="badge badge-primary badge-lg whitespace-nowrap">{t('personality.mbti')}</span>
              <span>{t('personality.subtitle')}</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-semibold mb-3">{t('personality.strengths.title')}</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <SparklesIcon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>
                      <strong>{t('personality.strengths.logical.title')}</strong> {t('personality.strengths.logical.description')}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <SparklesIcon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>
                      <strong>{t('personality.strengths.strategic.title')}</strong> {t('personality.strengths.strategic.description')}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <SparklesIcon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>
                      <strong>{t('personality.strengths.innovation.title')}</strong> {t('personality.strengths.innovation.description')}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <SparklesIcon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>
                      <strong>{t('personality.strengths.understanding.title')}</strong> {t('personality.strengths.understanding.description')}
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">{t('personality.leadership.title')}</h4>
                <p className="mb-4">{t('personality.leadership.description1')}</p>
                <p>{t('personality.leadership.description2')}</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-base-200 rounded-lg">
              <p className="text-sm italic">
                <strong>{t('personality.note')}</strong> {t('personality.noteText')}{' '}
                <a
                  href="https://diary.teraren.com/2025/04/14/mbti/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link link-primary"
                >
                  {t('personality.fullAnalysis')}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AcademicSection() {
  const t = useTranslations()

  return (
    <section className="py-16 px-4 bg-base-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <AcademicCapIcon className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold">{t('academic.title')}</h2>
        </div>

        {/* Research Papers */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <DocumentTextIcon className="w-6 h-6 text-secondary" />
            {t('academic.papers.title')}
          </h3>
          <div className="space-y-4">
            <div className="card bg-base-200">
              <div className="card-body">
                <h4 className="card-title">{t('academic.papers.ec.title')}</h4>
                <p className="text-sm text-base-content/70">{t('academic.papers.ec.meta')}</p>
                <p className="mt-2">{t('academic.papers.ec.description')}</p>
                <div className="card-actions mt-4">
                  <a
                    href="https://link.springer.com/chapter/10.1007/978-3-031-34668-2_26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    {t('academic.papers.ec.button')}
                  </a>
                </div>
              </div>
            </div>

            <div className="card bg-base-200">
              <div className="card-body">
                <h4 className="card-title">{t('academic.papers.mugi.title')}</h4>
                <p className="text-sm text-base-content/70">{t('academic.papers.mugi.meta')}</p>
                <p className="mt-2">{t('academic.papers.mugi.description')}</p>
                <div className="card-actions mt-4">
                  <a
                    href="/paper/200502_thesis.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    {t('academic.papers.mugi.button')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Presentations */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <BeakerIcon className="w-6 h-6 text-secondary" />
            {t('academic.presentations.title')}
          </h3>
          <div className="space-y-4">
            <div className="card bg-base-200">
              <div className="card-body">
                <h4 className="card-title">{t('academic.presentations.snowday.title')}</h4>
                <p className="text-sm text-base-content/70">{t('academic.presentations.snowday.meta')}</p>
                <p className="mt-2">{t('academic.presentations.snowday.description')}</p>
                <div className="card-actions mt-4">
                  <a
                    href="https://dev.classmethod.jp/articles/snowday-report-hone/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    {t('academic.presentations.snowday.button')}
                  </a>
                </div>
              </div>
            </div>

            <div className="card bg-base-200">
              <div className="card-body">
                <h4 className="card-title">{t('academic.presentations.cedec.title')}</h4>
                <p className="text-sm text-base-content/70">{t('academic.presentations.cedec.meta')}</p>
                <p className="mt-2">{t('academic.presentations.cedec.description')}</p>
                <div className="card-actions mt-4">
                  <a
                    href="https://gigazine.net/news/20120829-gree-strategy-cedec2012/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    {t('academic.presentations.cedec.button')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceSection() {
  const t = useTranslations()

  return (
    <section className="py-16 px-4 bg-base-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <BriefcaseIcon className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold">{t('experience.title')}</h2>
        </div>

        <div className="space-y-8">
          {/* Minedia */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="card-title text-2xl">{t('experience.minedia.role')}</h3>
                  <p className="text-lg font-semibold text-primary">{t('experience.minedia.company')}</p>
                </div>
                <div className="badge badge-primary badge-lg">{t('experience.minedia.period')}</div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-base-content/80">
                {Array.isArray(t.raw('experience.minedia.items')) &&
                  t.raw('experience.minedia.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
              </ul>
            </div>
          </div>

          {/* Metaps */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="card-title text-2xl">{t('experience.metaps.role')}</h3>
                  <p className="text-lg font-semibold text-primary">{t('experience.metaps.company')}</p>
                </div>
                <div className="badge badge-secondary badge-lg">{t('experience.metaps.period')}</div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-base-content/80">
                {Array.isArray(t.raw('experience.metaps.items')) &&
                  t.raw('experience.metaps.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
              </ul>
            </div>
          </div>

          {/* GREE */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="card-title text-2xl">{t('experience.gree.role')}</h3>
                  <p className="text-lg font-semibold text-primary">{t('experience.gree.company')}</p>
                </div>
                <div className="badge badge-secondary badge-lg">{t('experience.gree.period')}</div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-base-content/80">
                {Array.isArray(t.raw('experience.gree.items')) &&
                  t.raw('experience.gree.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillsSection() {
  const t = useTranslations()

  return (
    <section className="py-16 px-4 bg-base-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <CodeBracketIcon className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold">{t('skills.title')}</h2>
        </div>

        {/* Main Skills with Progress Bars */}
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
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Other Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Other Technologies</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Languages */}
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">{t('skills.languages')}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-primary badge-lg">PHP</span>
                <span className="badge badge-primary badge-lg">Go</span>
                <span className="badge badge-primary badge-lg">Java</span>
                <span className="badge badge-primary badge-lg">Kotlin</span>
                <span className="badge badge-primary badge-lg">Swift</span>
                <span className="badge badge-primary badge-lg">C</span>
                <span className="badge badge-primary badge-lg">C++</span>
                <span className="badge badge-primary badge-lg">Rust</span>
                <span className="badge badge-primary badge-lg">Shell/Bash</span>
              </div>
            </div>
          </div>

          {/* Frameworks */}
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">{t('skills.frameworks')}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-secondary badge-lg">Nuxt.js</span>
                <span className="badge badge-secondary badge-lg">Vue.js</span>
                <span className="badge badge-secondary badge-lg">Angular</span>
                <span className="badge badge-secondary badge-lg">Django</span>
                <span className="badge badge-secondary badge-lg">FastAPI</span>
                <span className="badge badge-secondary badge-lg">Laravel</span>
                <span className="badge badge-secondary badge-lg">Express.js</span>
                <span className="badge badge-secondary badge-lg">Flutter</span>
                <span className="badge badge-secondary badge-lg">React Native</span>
              </div>
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">{t('skills.cloud')}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-accent badge-lg">Azure</span>
                <span className="badge badge-accent badge-lg">GitHub Actions</span>
                <span className="badge badge-accent badge-lg">CircleCI</span>
                <span className="badge badge-accent badge-lg">Jenkins</span>
                <span className="badge badge-accent badge-lg">Terraform</span>
                <span className="badge badge-accent badge-lg">Ansible</span>
                <span className="badge badge-accent badge-lg">Cloudflare</span>
                <span className="badge badge-accent badge-lg">Vercel</span>
                <span className="badge badge-accent badge-lg">Netlify</span>
              </div>
            </div>
          </div>

          {/* Databases & Caching */}
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">{t('skills.database')}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-info badge-lg">Elasticsearch</span>
                <span className="badge badge-info badge-lg">DynamoDB</span>
                <span className="badge badge-info badge-lg">Cassandra</span>
                <span className="badge badge-info badge-lg">Memcached</span>
                <span className="badge badge-info badge-lg">SQLite</span>
              </div>
            </div>
          </div>

          {/* Testing & Quality */}
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

          {/* API & Integration */}
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">{t('skills.api')}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-success badge-lg">REST</span>
                <span className="badge badge-success badge-lg">GraphQL</span>
                <span className="badge badge-success badge-lg">gRPC</span>
                <span className="badge badge-success badge-lg">WebSocket</span>
                <span className="badge badge-success badge-lg">OpenAPI</span>
                <span className="badge badge-success badge-lg">Swagger</span>
                <span className="badge badge-success badge-lg">Postman</span>
              </div>
            </div>
          </div>

          {/* Infrastructure & Web Servers */}
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">{t('skills.infrastructure')}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-lg">Linux</span>
                <span className="badge badge-lg">Ubuntu</span>
                <span className="badge badge-lg">CentOS</span>
                <span className="badge badge-lg">Nginx</span>
                <span className="badge badge-lg">Apache</span>
                <span className="badge badge-lg">Load Balancer</span>
                <span className="badge badge-lg">CDN</span>
              </div>
            </div>
          </div>

          {/* Message Queue & Streaming */}
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

          {/* Version Control & Tools */}
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">{t('skills.versionControl')}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-lg">Git</span>
                <span className="badge badge-lg">GitHub</span>
                <span className="badge badge-lg">GitLab</span>
                <span className="badge badge-lg">Bitbucket</span>
                <span className="badge badge-lg">SVN</span>
                <span className="badge badge-lg">VS Code</span>
                <span className="badge badge-lg">Vim</span>
              </div>
            </div>
          </div>

          {/* AI & Machine Learning */}
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

function ProjectsSection() {
  const t = useTranslations()

  return (
    <section className="py-16 px-4 bg-base-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <RocketLaunchIcon className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold">{t('projects.title')}</h2>
        </div>

        {/* AI Tools */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
            <CpuChipIcon className="w-6 h-6 text-secondary" />
            {t('projects.aiTools.title')}
          </h3>
          <p className="text-base-content/70 mb-6">{t('projects.aiTools.subtitle')}</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <figure>
                <Image
                  src={aiModeratorImg}
                  alt="AI Moderator"
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <h4 className="card-title">{t('projects.aiTools.moderator.title')}</h4>
                <p className="text-sm text-secondary font-semibold">{t('projects.aiTools.moderator.subtitle')}</p>
                <p className="text-base-content/80">{t('projects.aiTools.moderator.description')}</p>
                <div className="card-actions justify-end mt-4">
                  <a
                    href="https://ai-moderator.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    {t('projects.aiTools.moderator.button')}
                  </a>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <figure>
                <Image
                  src={aiTriathlonImg}
                  alt="AI Triathlon Training"
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <h4 className="card-title">{t('projects.aiTools.triathlon.title')}</h4>
                <p className="text-sm text-secondary font-semibold">{t('projects.aiTools.triathlon.subtitle')}</p>
                <p className="text-base-content/80">{t('projects.aiTools.triathlon.description')}</p>
                <div className="card-actions justify-end mt-4">
                  <a
                    href="https://triathlon.teraren.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    {t('projects.aiTools.triathlon.button')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* API Services */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">{t('projects.apiServices.title')}</h3>
          <p className="text-base-content/70 mb-6">{t('projects.apiServices.subtitle')}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Postcode API */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="card-body">
                <h4 className="card-title text-lg">{t('projects.apiServices.postcode.title')}</h4>
                <p className="text-sm text-secondary font-semibold">{t('projects.apiServices.postcode.subtitle')}</p>
                <ul className="text-sm space-y-1 mt-2">
                  {Array.isArray(t.raw('projects.apiServices.postcode.features')) &&
                    t.raw('projects.apiServices.postcode.features').map((feature: string, index: number) => (
                      <li key={index}>• {feature}</li>
                    ))}
                </ul>
                <div className="card-actions justify-end mt-4">
                  <a
                    href="https://postcode.teraren.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    {t('projects.apiServices.postcode.button')}
                  </a>
                </div>
              </div>
            </div>

            {/* Bank Code API */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="card-body">
                <h4 className="card-title text-lg">{t('projects.apiServices.bank.title')}</h4>
                <p className="text-sm text-secondary font-semibold">{t('projects.apiServices.bank.subtitle')}</p>
                <ul className="text-sm space-y-1 mt-2">
                  {Array.isArray(t.raw('projects.apiServices.bank.features')) &&
                    t.raw('projects.apiServices.bank.features').map((feature: string, index: number) => (
                      <li key={index}>• {feature}</li>
                    ))}
                </ul>
                <div className="card-actions justify-end mt-4">
                  <a
                    href="https://bank.teraren.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    {t('projects.apiServices.bank.button')}
                  </a>
                </div>
              </div>
            </div>

            {/* Corporation API */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="card-body">
                <h4 className="card-title text-lg">{t('projects.apiServices.corporation.title')}</h4>
                <p className="text-sm text-secondary font-semibold">{t('projects.apiServices.corporation.subtitle')}</p>
                <ul className="text-sm space-y-1 mt-2">
                  {Array.isArray(t.raw('projects.apiServices.corporation.features')) &&
                    t.raw('projects.apiServices.corporation.features').map((feature: string, index: number) => (
                      <li key={index}>• {feature}</li>
                    ))}
                </ul>
                <div className="card-actions justify-end mt-4">
                  <a
                    href="https://corporation.teraren.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    {t('projects.apiServices.corporation.button')}
                  </a>
                </div>
              </div>
            </div>

            {/* Train API */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="card-body">
                <h4 className="card-title text-lg">{t('projects.apiServices.train.title')}</h4>
                <p className="text-sm text-secondary font-semibold">{t('projects.apiServices.train.subtitle')}</p>
                <ul className="text-sm space-y-1 mt-2">
                  {Array.isArray(t.raw('projects.apiServices.train.features')) &&
                    t.raw('projects.apiServices.train.features').map((feature: string, index: number) => (
                      <li key={index}>• {feature}</li>
                    ))}
                </ul>
                <div className="card-actions justify-end mt-4">
                  <a
                    href="https://train.teraren.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    {t('projects.apiServices.train.button')}
                  </a>
                </div>
              </div>
            </div>

            {/* School API */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="card-body">
                <h4 className="card-title text-lg">{t('projects.apiServices.school.title')}</h4>
                <p className="text-sm text-secondary font-semibold">{t('projects.apiServices.school.subtitle')}</p>
                <ul className="text-sm space-y-1 mt-2">
                  {Array.isArray(t.raw('projects.apiServices.school.features')) &&
                    t.raw('projects.apiServices.school.features').map((feature: string, index: number) => (
                      <li key={index}>• {feature}</li>
                    ))}
                </ul>
                <div className="card-actions justify-end mt-4">
                  <a
                    href="https://school.teraren.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    {t('projects.apiServices.school.button')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HobbiesSection() {
  const t = useTranslations()

  return (
    <section className="py-16 px-4 bg-base-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <HeartIcon className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold">{t('hobbies.title')}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title flex items-center gap-2">
                <TrophyIcon className="w-6 h-6 text-warning" />
                {t('hobbies.triathlon.title')}
              </h3>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start gap-2">
                  <span className="text-warning">🏆</span>
                  <span>{t('hobbies.triathlon.worldChampionship')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-warning">🏃</span>
                  <span>{t('hobbies.triathlon.marathon')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-warning">🏃‍♂️</span>
                  <span>{t('hobbies.triathlon.olympicDistance')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-info">🏊</span>
                  <span>{t('hobbies.triathlon.openwater')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-warning">🚴</span>
                  <span>{t('hobbies.triathlon.ironman703')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-info">💡</span>
                  <span>{t('hobbies.triathlon.aiTools')}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title flex items-center gap-2">
                <DocumentTextIcon className="w-6 h-6 text-info" />
                {t('hobbies.writing.title')}
              </h3>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start gap-2">
                  <span className="text-info">📝</span>
                  <span>{t('hobbies.writing.zenn')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-info">📝</span>
                  <span>{t('hobbies.writing.blog')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-info">📚</span>
                  <span>{t('hobbies.writing.editor')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-warning">🔥</span>
                  <a
                    href="https://labs.gree.jp/blog/2011/04/3282/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link link-primary hover:link-accent"
                  >
                    {t('hobbies.writing.gree')}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title">{t('hobbies.certifications.title')}</h3>
              <ul className="space-y-2 mt-4 text-sm">
                <li>• {t('hobbies.certifications.applied')}</li>
                <li>• {t('hobbies.certifications.lpic')}</li>
                <li>• {t('hobbies.certifications.electrician')}</li>
                <li>• {t('hobbies.certifications.toeic')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ArchiveSection() {
  const t = useTranslations()

  return (
    <section className="py-16 px-4 bg-base-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('archive.title')}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/sfc/"
            className="card bg-base-100 hover:bg-base-300 hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="card-body">
              <h3 className="card-title group-hover:text-primary transition-colors">
                {t('archive.university.title')}
              </h3>
              <p className="text-base-content/70">{t('archive.university.description')}</p>
            </div>
          </Link>

          <Link
            href="/ht/"
            className="card bg-base-100 hover:bg-base-300 hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="card-body">
              <h3 className="card-title group-hover:text-primary transition-colors">
                {t('archive.lab.title')}
              </h3>
              <p className="text-base-content/70">{t('archive.lab.description')}</p>
            </div>
          </Link>

          <Link
            href="/rails/"
            className="card bg-base-100 hover:bg-base-300 hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="card-body">
              <h3 className="card-title group-hover:text-primary transition-colors">
                {t('archive.rails.title')}
              </h3>
              <p className="text-base-content/70">{t('archive.rails.description')}</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  const t = useTranslations()

  return (
    <section className="py-16 px-4 bg-base-100">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <EnvelopeIcon className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold">{t('contact.title')}</h2>
        </div>
        <p className="text-lg text-base-content/70 mb-8">{t('contact.description')}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://github.com/matsubo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary gap-2"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yukimatsukura/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary gap-2"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/matsubokkuri"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline gap-2"
          >
            X (Twitter)
          </a>
        </div>
      </div>
    </section>
  )
}
