'use client'

import { useState, useEffect } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import Layout from '@/components/layout'
import Link from 'next/link'
import {
  ChevronLeftIcon,
  CommandLineIcon,
  CubeIcon,
  CodeBracketIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline'

export default function RailsMac109Page() {
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
                <li>Mac OS X 10.9</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 max-w-5xl">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4 flex items-center gap-3">
              <CommandLineIcon className="h-12 w-12 text-primary" />
              Mac OS X 10.9 (Mavericks)
            </h1>
            <div className="alert alert-warning">
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
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>上から順番にインストールを進めてください。</span>
            </div>
          </div>

          {/* Ruby on Rails Installation Steps */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <CubeIcon className="h-8 w-8 text-primary" />
              Ruby on Railsのインストール
            </h2>
            <div className="space-y-4">
              <Link
                href="command_line_tools"
                className="card bg-base-100 shadow-lg hover:shadow-xl transition-all hover:scale-[1.01]"
              >
                <div className="card-body">
                  <div className="flex items-start gap-4">
                    <div className="badge badge-primary badge-lg">1</div>
                    <div className="flex-1">
                      <h3 className="card-title text-xl mb-2">
                        Command Line Toolsのインストール
                      </h3>
                      <p className="text-base-content/70">
                        Mac OS
                        Xでソフトウェア開発を行う際に必要になる一般的なライブラリをインストールします。30分程度かかります。
                      </p>
                    </div>
                    <div className="badge badge-outline">~30分</div>
                  </div>
                </div>
              </Link>

              <Link
                href="homebrew"
                className="card bg-base-100 shadow-lg hover:shadow-xl transition-all hover:scale-[1.01]"
              >
                <div className="card-body">
                  <div className="flex items-start gap-4">
                    <div className="badge badge-primary badge-lg">2</div>
                    <div className="flex-1">
                      <h3 className="card-title text-xl mb-2">
                        homebrewのインストール
                      </h3>
                      <p className="text-base-content/70">
                        rubyenvをインストールするためのアプリケーションをインストールします。
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                href="rbenv"
                className="card bg-base-100 shadow-lg hover:shadow-xl transition-all hover:scale-[1.01]"
              >
                <div className="card-body">
                  <div className="flex items-start gap-4">
                    <div className="badge badge-primary badge-lg">3</div>
                    <div className="flex-1">
                      <h3 className="card-title text-xl mb-2">
                        rbenvのインストール
                      </h3>
                      <p className="text-base-content/70">
                        ruby自体を管理するアプリケーションをインストールし、設定します。
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                href="ruby"
                className="card bg-base-100 shadow-lg hover:shadow-xl transition-all hover:scale-[1.01]"
              >
                <div className="card-body">
                  <div className="flex items-start gap-4">
                    <div className="badge badge-primary badge-lg">4</div>
                    <div className="flex-1">
                      <h3 className="card-title text-xl mb-2">
                        Rubyのインストール
                      </h3>
                      <p className="text-base-content/70">
                        Ruby自体のインストールを行います。
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                href="ror"
                className="card bg-base-100 shadow-lg hover:shadow-xl transition-all hover:scale-[1.01]"
              >
                <div className="card-body">
                  <div className="flex items-start gap-4">
                    <div className="badge badge-primary badge-lg">5</div>
                    <div className="flex-1">
                      <h3 className="card-title text-xl mb-2">
                        Ruby on Railsのインストール
                      </h3>
                      <p className="text-base-content/70">
                        Ruby on Railsのライブラリをインストールします。
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          {/* Aptana Studio Installation Steps */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <CodeBracketIcon className="h-8 w-8 text-secondary" />
              Aptana Studioのインストール
            </h2>
            <div className="space-y-4">
              <Link
                href="java"
                className="card bg-base-100 shadow-lg hover:shadow-xl transition-all hover:scale-[1.01]"
              >
                <div className="card-body">
                  <div className="flex items-start gap-4">
                    <div className="badge badge-secondary badge-lg">1</div>
                    <div className="flex-1">
                      <h3 className="card-title text-xl mb-2">
                        Javaのインストール
                      </h3>
                      <p className="text-base-content/70">
                        Aptanaが依存しているJavaをインストールします。
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                href="aptana"
                className="card bg-base-100 shadow-lg hover:shadow-xl transition-all hover:scale-[1.01]"
              >
                <div className="card-body">
                  <div className="flex items-start gap-4">
                    <div className="badge badge-secondary badge-lg">2</div>
                    <div className="flex-1">
                      <h3 className="card-title text-xl mb-2">
                        Aptana Studioのインストール
                      </h3>
                      <p className="text-base-content/70">
                        Aptana Studioをダウンロードし、インストール、起動します。
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                href="aptana_check"
                className="card bg-base-100 shadow-lg hover:shadow-xl transition-all hover:scale-[1.01]"
              >
                <div className="card-body">
                  <div className="flex items-start gap-4">
                    <div className="badge badge-secondary badge-lg">3</div>
                    <div className="flex-1">
                      <h3 className="card-title text-xl mb-2">
                        <CheckCircleIcon className="h-6 w-6 inline mr-2" />
                        Ruby on Railsの動作確認
                      </h3>
                      <p className="text-base-content/70">
                        Aptana StudioからRuby on
                        Railsプロジェクトを作成して動作確認をします。
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
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
