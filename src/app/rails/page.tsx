'use client'

import { useState, useEffect } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import Layout from '@/components/layout'
import Link from 'next/link'
import {
  ChevronLeftIcon,
  CommandLineIcon,
  CloudArrowUpIcon,
} from '@heroicons/react/24/outline'

export const dynamic = 'force-static'

export default function RailsPage() {
  const [locale, setLocale] = useState<string>('en')
  const [messages, setMessages] = useState<any>(null)

  useEffect(() => {
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
      const loadedMessages = await import(`@/messages/locales/${selectedLocale}/translation.json`)
      setMessages(loadedMessages.default)
    }

    loadLocale()
  }, [])

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
    return null
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-error to-warning text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-4 flex items-center gap-3">
              <CommandLineIcon className="h-14 w-14" />
              Ruby on Rails Installation
            </h1>
            <p className="text-xl opacity-90">
              This page illustrates how to install and setup Ruby on Rails
              development environment. The goal is to start Rails development
              using Aptana Studio.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Breadcrumb */}
        <div className="breadcrumbs text-sm mb-8">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>Ruby on Rails install</li>
          </ul>
        </div>

        {/* OS Selection */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8">Select Your OS</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="/rails/win/"
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <div className="card-body items-center text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-20 h-20 text-info mb-4"
                >
                  <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                </svg>
                <h3 className="card-title text-3xl mb-2">Windows</h3>
                <p className="text-base-content/70">
                  Windowsをご利用の方はこちらのドキュメントを参照ください。
                </p>
                <div className="card-actions mt-4">
                  <div className="badge badge-info badge-lg">View Guide</div>
                </div>
              </div>
            </Link>

            <Link
              href="/rails/mac/"
              className="card bg-primary text-primary-content shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <div className="card-body items-center text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-20 h-20 mb-4"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <h3 className="card-title text-3xl mb-2">Mac OS X</h3>
                <p className="opacity-90">
                  Mac OS Xをご利用の方はこちらのドキュメントを参照ください。
                </p>
                <div className="card-actions mt-4">
                  <div className="badge badge-secondary badge-lg">推奨</div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Deploy to Heroku */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <CloudArrowUpIcon className="h-10 w-10 text-accent" />
            Deploy to Heroku
          </h2>
          <div className="card bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-2xl mb-4">
                HerokuでRailsのプロジェクトを公開する手順
              </h3>
              <p className="text-lg opacity-90 mb-6">
                Railsアプリケーションを無料でHerokuにデプロイする方法を説明します。
              </p>
              <div className="card-actions">
                <a
                  href="https://github.com/matsubo/rails4heroku/blob/master/README.md"
                  className="btn btn-secondary btn-lg gap-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Back Button */}
        <div className="flex justify-start">
          <Link href="/" className="btn btn-ghost gap-2">
            <ChevronLeftIcon className="h-5 w-5" />
            Back to Home
          </Link>
        </div>
      </div>
    </Layout>
    </NextIntlClientProvider>
  )
}
