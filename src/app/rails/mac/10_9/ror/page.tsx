'use client'

import { useState, useEffect } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import Link from 'next/link'
import Layout from '@/components/layout'
import {
  ChevronLeftIcon,
  CommandLineIcon,
  ClockIcon,
} from '@heroicons/react/24/outline'

export default function RorPage() {
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
                <li>
                  <Link href="/rails/mac/10_9/">Mac OS X 10.9</Link>
                </li>
                <li>Ruby on Railsのインストール</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="badge badge-primary badge-lg">Step 5</div>
              <h1 className="text-5xl font-bold flex items-center gap-3">
                <CommandLineIcon className="h-12 w-12 text-primary" />
                Ruby on Railsのインストール
              </h1>
            </div>
            <div className="prose max-w-none">
              <p className="text-lg">
                Ruby on Railsのライブラリをインストールします。Ruby on Railsは{' '}
                <a
                  href="https://rubygems.org/"
                  className="link link-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ruby Gems
                </a>{' '}
                と呼ばれるライブラリ管理アプリケーションによって提供されています。
              </p>
            </div>
          </div>

          {/* Instructions */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold mb-6">手順</h2>

            {/* Step 1: Install Rails */}
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-2xl mb-4">
                  <div className="badge badge-primary">1</div>
                  Ruby on Railsをインストール
                </h3>
                <p className="mb-4">ターミナルで以下のコマンドを実行します：</p>
                <div className="mockup-code">
                  <pre data-prefix="%">
                    <code>gem install rails</code>
                  </pre>
                </div>
                <div className="alert alert-warning mt-4">
                  <ClockIcon className="h-6 w-6" />
                  <div>
                    <p className="font-semibold mb-2">時間がかかります</p>
                    <p>
                      Ruby on
                      Railsは様々なライブラリに依存しており、上記コマンドを実行すると依存しているライブラリもインストールされます。依存しているライブラリがたくさんあるので、インストールには時間がかかります。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Verify Installation */}
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-2xl mb-4">
                  <div className="badge badge-primary">2</div>
                  インストールの確認
                </h3>
                <p className="mb-4">
                  インストールが完了したら、以下のコマンドで確認します：
                </p>
                <div className="mockup-code">
                  <pre data-prefix="%">
                    <code>gem list</code>
                  </pre>
                </div>
                <div className="alert alert-success mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>
                    <code className="badge badge-outline mx-1">rails</code>
                    という表記があったらインストールは成功しています。
                  </span>
                </div>
                <div className="divider">Tip</div>
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
                  <div>
                    <p className="font-semibold mb-2">railsを見つけやすくする</p>
                    <p>
                      railsを見つけづらい場合は、
                      <code className="badge badge-outline mx-1">
                        gem list | grep rails
                      </code>
                      と入力するとrailsが含まれた行だけ表示出来ます。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Completion Card */}
            <div className="card bg-success text-success-content shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-2xl mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Ruby on Railsのインストール完了！
                </h3>
                <p className="text-lg">
                  お疲れ様でした！これでRuby on Railsの環境が整いました。 次はAptana
                  Studioをインストールして、実際に開発を始めましょう。
                </p>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-6 border-t border-base-300">
            <Link href="/rails/mac/10_9/ruby" className="btn btn-ghost gap-2">
              <ChevronLeftIcon className="h-5 w-5" />
              前のステップ
            </Link>
            <Link href="/rails/mac/10_9/java" className="btn btn-primary gap-2">
              次のステップへ
              <ChevronLeftIcon className="h-5 w-5 rotate-180" />
            </Link>
          </div>
        </div>
      </Layout>
    </NextIntlClientProvider>
  )
}
