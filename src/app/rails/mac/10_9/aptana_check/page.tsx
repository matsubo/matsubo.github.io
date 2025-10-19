'use client'

import { useState, useEffect } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import Link from 'next/link'
import Layout from '@/components/layout'
import ImageWithLightbox from '@/components/ImageWithLightbox'
import {
  ChevronLeftIcon,
  CheckCircleIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline'
import railsProjectImg from '@/images/tutorials/rails_project.png'
import aptanaNewImg from '@/images/tutorials/aptana_new.png'
import progressImg from '@/images/tutorials/progress.png'
import aptanaRunServerImg from '@/images/tutorials/aptana_run_server.png'
import serverConsoleImg from '@/images/tutorials/server_console.png'
import aptanaBrowserImg from '@/images/tutorials/aptana_browser.png'
import aptanaQuitImg from '@/images/tutorials/aptana_quit.png'

export default function AptanaCheckPage() {
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
                <li>Ruby on Railsの動作確認</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="badge badge-secondary badge-lg">Aptana - Step 3</div>
              <h1 className="text-5xl font-bold flex items-center gap-3">
                <CheckCircleIcon className="h-12 w-12 text-secondary" />
                Ruby on Railsの動作確認
              </h1>
            </div>
            <div className="prose max-w-none">
              <p className="text-lg">
                Aptana StudioでRuby on Railsのプロジェクトを作成し、Ruby on
                Railsを起動してみます。
              </p>
            </div>
          </div>

          {/* Instructions */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold mb-6">手順</h2>

            {/* Step 1: Create Project */}
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-2xl mb-4">
                  <div className="badge badge-secondary">1</div>
                  Railsプロジェクトを作成
                </h3>
                <p className="mb-4">
                  Aptana Studioを立ち上げ、
                  <code className="badge badge-outline">File</code> →{' '}
                  <code className="badge badge-outline">New</code> →{' '}
                  <code className="badge badge-outline">Rails Project</code>
                  を選択します。
                </p>
                <div className="bg-base-200 p-4 rounded-lg">
                  <ImageWithLightbox
                    src={railsProjectImg}
                    alt="Rails Project Menu"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Configure Project */}
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-2xl mb-4">
                  <div className="badge badge-secondary">2</div>
                  プロジェクト名を入力
                </h3>
                <p className="mb-4">
                  <code className="badge badge-outline">Name</code>
                  にプロジェクト名を入力し、
                  <code className="badge badge-outline">Finish</code>
                  ボタンを押します。
                </p>
                <div className="bg-base-200 p-4 rounded-lg">
                  <ImageWithLightbox
                    src={aptanaNewImg}
                    alt="New Rails Project"
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Wait for Progress */}
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-2xl mb-4">
                  <div className="badge badge-secondary">3</div>
                  プロジェクト作成を待つ
                </h3>
                <p className="mb-4">
                  右下に表示されているウィンドウに、以下のような出力が出ていれば成功です。下に表示されている青いバーが終了するまで待ちます。
                </p>
                <div className="bg-base-200 p-4 rounded-lg">
                  <ImageWithLightbox
                    src={progressImg}
                    alt="Progress Bar"
                  />
                </div>
              </div>
            </div>

            {/* Step 4: Run Server */}
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-2xl mb-4 flex items-center gap-2">
                  <div className="badge badge-secondary">4</div>
                  <RocketLaunchIcon className="h-6 w-6" />
                  サーバを起動
                </h3>
                <p className="mb-4">
                  <code className="badge badge-outline">App Explorer</code>
                  タブのギアの形をしたアイコンから、
                  <code className="badge badge-outline">Run Server</code>
                  を選択して、サーバを起動します。
                </p>
                <div className="bg-base-200 p-4 rounded-lg">
                  <ImageWithLightbox
                    src={aptanaRunServerImg}
                    alt="Run Server"
                  />
                </div>
              </div>
            </div>

            {/* Step 5: Check Console */}
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-2xl mb-4">
                  <div className="badge badge-secondary">5</div>
                  コンソールの出力を確認
                </h3>
                <p className="mb-4">
                  Console画面に以下のような表示が出力されれば、成功です。
                </p>
                <div className="bg-base-200 p-4 rounded-lg">
                  <ImageWithLightbox
                    src={serverConsoleImg}
                    alt="Server Console"
                  />
                </div>
              </div>
            </div>

            {/* Step 6: Open Browser */}
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-2xl mb-4">
                  <div className="badge badge-secondary">6</div>
                  ブラウザで確認
                </h3>
                <p className="mb-4">
                  ブラウザで以下のページを開き、ページが表示されることを確認します：
                </p>
                <a
                  href="http://0.0.0.0:3000/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-lg btn-secondary gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                  http://0.0.0.0:3000/
                </a>
                <p className="mt-6">
                  以下のような、<strong>&quot;Welcome aboard&quot;</strong>
                  と表示されていれば、正常にセットアップが完了したことになります。
                </p>
                <div className="bg-base-200 p-4 rounded-lg mt-4">
                  <ImageWithLightbox
                    src={aptanaBrowserImg}
                    alt="Welcome aboard"
                  />
                </div>
              </div>
            </div>

            {/* Step 7: Quit Aptana */}
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-2xl mb-4">
                  <div className="badge badge-secondary">7</div>
                  Aptana Studioを終了
                </h3>
                <p className="mb-4">最後に、Aptana Studioを終了します。</p>
                <div className="bg-base-200 p-4 rounded-lg">
                  <ImageWithLightbox
                    src={aptanaQuitImg}
                    alt="Quit Aptana"
                  />
                </div>
              </div>
            </div>

            {/* Completion Card */}
            <div className="card bg-gradient-to-r from-success to-info text-white shadow-xl">
              <div className="card-body items-center text-center">
                <div className="flex justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-20 h-20"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  完了おめでとうございます！
                </h3>
                <p className="text-xl mb-2">
                  Ruby on Railsの開発環境のセットアップが完了しました！
                </p>
                <p className="text-lg opacity-90">
                  これでRuby on Railsを使った開発をスタートできます。
                </p>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-6 border-t border-base-300">
            <Link href="/rails/mac/10_9/aptana" className="btn btn-ghost gap-2">
              <ChevronLeftIcon className="h-5 w-5" />
              前のステップ
            </Link>
            <Link href="/rails/mac/10_9/" className="btn btn-primary gap-2">
              <CheckCircleIcon className="h-5 w-5" />
              ステップ一覧に戻る
            </Link>
          </div>
        </div>
      </Layout>
    </NextIntlClientProvider>
  )
}
