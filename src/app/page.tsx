'use client'

import { useState, useEffect } from 'react'
import { NextIntlClientProvider, useTranslations } from 'next-intl'
import Layout from '@/components/layout'
import StructuredData from '@/components/structured-data'

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
      <section className="py-16 px-4 bg-gradient-to-br from-base-200 to-base-300">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="avatar mb-4">
              <div className="w-32 rounded-full">
                <img
                  src="https://github.com/matsubo.png"
                  alt="Yuki Matsukura profile picture"
                  loading="eager"
                  width={128}
                  height={128}
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

      {/* About Section */}
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

      {/* Experience Section */}
      <section className="py-16 px-4 bg-base-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">{t('experience.title')}</h2>
          <div className="space-y-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-2xl">{t('experience.minedia.role')}</h3>
                <p className="text-lg font-semibold text-primary">
                  {t('experience.minedia.company')}
                </p>
                <p className="badge badge-primary badge-lg">
                  {t('experience.minedia.period')}
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  {Array.isArray(t.raw('experience.minedia.items')) &&
                    t.raw('experience.minedia.items').map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">{t('contact.title')}</h2>
          <p className="text-lg text-base-content/70 mb-8">
            {t('contact.description')}
          </p>
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
    </>
  )
}
