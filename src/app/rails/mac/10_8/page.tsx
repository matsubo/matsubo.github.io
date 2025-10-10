'use client'

import { useState, useEffect } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import Layout from '@/components/layout'
import Link from 'next/link'
import { ChevronLeftIcon, ArrowDownTrayIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

export default function RailsMac108Page() {
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
        {/* Breadcrumb */}
        <div className="bg-base-200 py-4">
          <div className="container mx-auto px-4">
            <div className="breadcrumbs text-sm">
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/rails/">Ruby on Rails install</Link>
                </li>
                <li>
                  <Link href="/rails/mac/">Mac OS X</Link>
                </li>
                <li>Mac OS X 10.8</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4 flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12 text-primary"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Mac OS X 10.8 (Mountain Lion)
            </h1>
            <div className="alert alert-info">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-current shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>
                PDFファイルかPowerPointファイルをダウンロードし、参照してください。
              </span>
            </div>
          </div>

          {/* Download Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <ArrowDownTrayIcon className="h-8 w-8 text-primary" />
              ドキュメントをダウンロード
            </h2>

            <div className="space-y-6">
              {/* PDF Download Card */}
              <div className="card bg-gradient-to-br from-red-500 to-orange-500 text-white shadow-xl">
                <div className="card-body items-center text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-20 h-20 mb-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zm6.905 9.97a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72V18a.75.75 0 001.5 0v-4.19l1.72 1.72a.75.75 0 101.06-1.06l-3-3z"
                      clipRule="evenodd"
                    />
                    <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
                  </svg>
                  <h3 className="card-title text-2xl mb-2">PDF版</h3>
                  <p className="text-lg opacity-90 mb-6">
                    PDFリーダーで閲覧可能なドキュメント
                  </p>
                  <div className="card-actions">
                    <a
                      href="/manual_formac_v11.pdf"
                      className="btn btn-lg btn-secondary gap-2"
                      download
                    >
                      <DocumentTextIcon className="h-6 w-6" />
                      PDFをダウンロード
                    </a>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="divider text-lg font-semibold">OR</div>

              {/* PowerPoint Download Card */}
              <div className="card bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-xl">
                <div className="card-body items-center text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-20 h-20 mb-4"
                  >
                    <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z" />
                    <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                  </svg>
                  <h3 className="card-title text-2xl mb-2">PowerPoint版</h3>
                  <p className="text-lg opacity-90 mb-6">
                    編集可能なPowerPoint形式のドキュメント
                  </p>
                  <div className="card-actions">
                    <a
                      href="/manual_formac_v11.pptx"
                      className="btn btn-lg btn-accent gap-2"
                      download
                    >
                      <DocumentTextIcon className="h-6 w-6" />
                      PowerPointをダウンロード
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Back Button */}
          <div className="flex justify-start">
            <Link href="/rails/mac/" className="btn btn-ghost gap-2">
              <ChevronLeftIcon className="h-5 w-5" />
              戻る
            </Link>
          </div>
        </div>
      </Layout>
    </NextIntlClientProvider>
  )
}
