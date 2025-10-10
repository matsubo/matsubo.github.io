'use client'

import { useState, useEffect } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import Layout from '@/components/layout'
import Link from 'next/link'
import { ChevronLeftIcon, InformationCircleIcon, DocumentTextIcon, PresentationChartBarIcon } from '@heroicons/react/24/outline'

export default function RailsWinPage() {
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
              <li>Windows</li>
            </ul>
          </div>

          <h1 className="text-4xl font-bold mb-8">Windows へのインストール</h1>

          {/* Info Alert */}
          <div className="alert alert-info mb-8">
            <InformationCircleIcon className="h-6 w-6" />
            <div>
              <h3 className="font-bold">Windows 7 / 8 対応</h3>
              <div className="text-sm">
                このガイドは Windows 7 および Windows 8 での Ruby on Rails のインストール手順を説明しています。
              </div>
            </div>
          </div>

          {/* Download Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">インストールガイドをダウンロード</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <a
                href="/manual_forwin_v12.pdf"
                className="card bg-gradient-to-br from-red-500 to-orange-500 text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                target="_blank"
                rel="noreferrer"
              >
                <div className="card-body items-center text-center">
                  <DocumentTextIcon className="w-20 h-20 mb-4" />
                  <h3 className="card-title text-2xl mb-2">PDF版ダウンロード</h3>
                  <p className="opacity-90 mb-4">
                    印刷やオフラインでの閲覧に最適なPDF形式のインストールガイドです。
                  </p>
                  <div className="card-actions">
                    <div className="btn btn-secondary btn-lg">Download PDF</div>
                  </div>
                </div>
              </a>

              <a
                href="/manual_forwin_v12.pptx"
                className="card bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                target="_blank"
                rel="noreferrer"
              >
                <div className="card-body items-center text-center">
                  <PresentationChartBarIcon className="w-20 h-20 mb-4" />
                  <h3 className="card-title text-2xl mb-2">PowerPoint版ダウンロード</h3>
                  <p className="opacity-90 mb-4">
                    編集可能なPowerPoint形式のインストールガイドです。
                  </p>
                  <div className="card-actions">
                    <div className="btn btn-secondary btn-lg">Download PPTX</div>
                  </div>
                </div>
              </a>
            </div>
          </section>

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
