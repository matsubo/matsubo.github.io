'use client'

import { useState, useEffect } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import Layout from '@/components/layout'
import Link from 'next/link'
import { ChevronLeftIcon, InformationCircleIcon } from '@heroicons/react/24/outline'

export default function RailsMacPage() {
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
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          {/* Breadcrumb */}
          <div className="breadcrumbs text-sm mb-8">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/rails/">Ruby on Rails install</Link>
              </li>
              <li>Mac OS X</li>
            </ul>
          </div>

          <h1 className="text-4xl font-bold mb-8">Mac OS X へのインストール</h1>

          {/* Info Alert */}
          <div className="alert alert-info mb-8">
            <InformationCircleIcon className="h-6 w-6" />
            <div>
              <h3 className="font-bold">OSのバージョンを確認してください</h3>
              <div className="text-sm">
                お使いのMac OS Xのバージョンに応じて、適切なインストール手順を選択してください。
                バージョンは「このMacについて」から確認できます。
              </div>
            </div>
          </div>

          {/* Version Selection */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Link
              href="/rails/mac/10_8/"
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <div className="card-body items-center text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-20 h-20 text-warning mb-4"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <h3 className="card-title text-3xl mb-2">Mac OS X 10.8</h3>
                <p className="text-base-content/70">Mountain Lion 向けガイド</p>
                <div className="card-actions mt-4">
                  <div className="badge badge-warning badge-lg">Legacy</div>
                </div>
              </div>
            </Link>

            <Link
              href="/rails/mac/10_9/"
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
                <h3 className="card-title text-3xl mb-2">Mac OS X 10.9</h3>
                <p className="opacity-90">Mavericks 向けガイド</p>
                <div className="card-actions mt-4">
                  <div className="badge badge-secondary badge-lg">推奨</div>
                </div>
              </div>
            </Link>
          </div>

          {/* Back Button */}
          <div className="flex justify-start">
            <Link href="/rails/" className="btn btn-ghost gap-2">
              <ChevronLeftIcon className="h-5 w-5" />
              Back to Rails
            </Link>
          </div>
        </div>
      </Layout>
    </NextIntlClientProvider>
  )
}
