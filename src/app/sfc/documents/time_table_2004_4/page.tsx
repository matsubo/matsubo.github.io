'use client'

import { useState, useEffect } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import Layout from '@/components/layout'
import Link from 'next/link'

export default function TimeTable2004_4() {
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
        <div className="container mx-auto px-4 py-8">
          <div className="breadcrumbs text-sm mb-8">
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/sfc/">University</Link></li>
              <li>Timetable 2004/4</li>
            </ul>
          </div>

          <h1 className="text-3xl font-bold mb-8">時間割 2004年春学期</h1>

          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr className="bg-primary text-primary-content">
                  <th></th>
                  <th className="text-center">月</th>
                  <th className="text-center">火</th>
                  <th className="text-center">水</th>
                  <th className="text-center">木</th>
                  <th className="text-center">金</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="bg-primary text-primary-content text-center">1</th>
                  <td className="text-center"></td>
                  <td className="text-center">電子おもちゃ設計論</td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                </tr>
                <tr>
                  <th className="bg-primary text-primary-content text-center">2</th>
                  <td className="text-center"></td>
                  <td className="text-center">コラボレーション技法</td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                </tr>
                <tr>
                  <th className="bg-primary text-primary-content text-center">3</th>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                </tr>
                <tr>
                  <th className="bg-primary text-primary-content text-center">4</th>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center">
                    RG<br />
                    ι23
                  </td>
                  <td className="text-center"></td>
                </tr>
                <tr>
                  <th className="bg-primary text-primary-content text-center">5</th>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center">多変量解析B</td>
                  <td className="text-center">
                    RG<br />
                    ι23
                  </td>
                  <td className="text-center"></td>
                </tr>
                <tr>
                  <th className="bg-primary text-primary-content text-center">6</th>
                  <td className="text-center">userviceミーティング</td>
                  <td className="text-center"></td>
                  <td className="text-center">ACEミーティング</td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    </NextIntlClientProvider>
  )
}
