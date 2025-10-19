'use client'

import { useState, useEffect } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import Link from 'next/link'
import Layout from '@/components/layout'
import ImageWithLightbox from '@/components/ImageWithLightbox'
import { ChevronLeftIcon, CommandLineIcon } from '@heroicons/react/24/outline'
import terminalImg from '@/images/tutorials/terminal.png'

export default function HomebrewPage() {
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
                <li>homebrewのインストール</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="badge badge-primary badge-lg">Step 2</div>
              <h1 className="text-5xl font-bold flex items-center gap-3">
                <CommandLineIcon className="h-12 w-12 text-primary" />
                homebrewのインストール
              </h1>
            </div>
            <div className="prose max-w-none">
              <p className="text-lg">
                homebrewとはMac OS
                Xにコマンドを1回打つだけでアプリケーションを導入できるようにするツールです。
              </p>
              <p className="text-lg">
                後ほど利用する、rbenvというrubyを管理するためのアプリケーションをインストールするために利用します。
              </p>
            </div>
          </div>

          {/* Instructions */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold mb-6">手順</h2>

            {/* Step 1: Terminal */}
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-2xl mb-4">
                  <div className="badge badge-primary">1</div>
                  ターミナルを立ち上げます
                </h3>
                <div className="bg-base-200 p-4 rounded-lg">
                  <ImageWithLightbox
                    src={terminalImg}
                    alt="ターミナル"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Command */}
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-2xl mb-4">
                  <div className="badge badge-primary">2</div>
                  以下のコマンドを入力して[Enter]キーを押します
                </h3>
                <div className="mockup-code">
                  <pre data-prefix="%">
                    <code>
                      ruby -e &quot;$(curl -fsSL
                      https://raw.github.com/Homebrew/homebrew/go/install)&quot;
                    </code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Step 3: Installation */}
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-2xl mb-4">
                  <div className="badge badge-primary">3</div>
                  インストール中の質問に回答
                </h3>
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
                    <p>
                      いくつか、インストール中に質問を聞かれるので、適切に回答していきます。
                    </p>
                    <p className="mt-2">
                      途中、自分のパスワード入力を求められるので、入力してEnterを押します。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Success */}
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
                  インストール完了の確認
                </h3>
                <p className="text-lg">
                  最後の方に、以下のメッセージが表示されたら完了です：
                </p>
                <div className="mockup-code bg-base-100 text-base-content mt-4">
                  <pre data-prefix="$">
                    <code>Installation successful!</code>
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-6 border-t border-base-300">
            <Link href="/rails/mac/10_9/command_line_tools" className="btn btn-ghost gap-2">
              <ChevronLeftIcon className="h-5 w-5" />
              前のステップに戻る
            </Link>
            <Link href="/rails/mac/10_9/rbenv" className="btn btn-primary gap-2">
              次のステップへ
              <ChevronLeftIcon className="h-5 w-5 rotate-180" />
            </Link>
          </div>
        </div>
      </Layout>
    </NextIntlClientProvider>
  )
}
