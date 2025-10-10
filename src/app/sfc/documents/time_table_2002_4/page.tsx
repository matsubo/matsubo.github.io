'use client'

import { useState, useEffect } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import Layout from '@/components/layout'
import Link from 'next/link'

export default function TimeTable2002_4() {
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
              <li>Timetable 2002/4</li>
            </ul>
          </div>

          <h1 className="text-3xl font-bold mb-8">時間割 2002年春学期</h1>

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
                  <th className="bg-primary text-primary-content text-center">
                    1<br />(9:25〜10:55)
                  </th>
                  <td className="text-center"></td>
                  <td className="text-center">
                    英語スキルB (Test)<br />
                    (黒澤麻美)<br />
                    λ13
                  </td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center">
                    英語スキルB (Presentation)<br />
                    (Sorenson)<br />
                    ο15
                  </td>
                </tr>
                <tr>
                  <th className="bg-primary text-primary-content text-center">
                    2<br />(11:10〜12:40)
                  </th>
                  <td className="text-center"></td>
                  <td className="text-center">
                    英語スキルB (Test)<br />
                    (吉原学)<br />
                    ε21
                  </td>
                  <td className="text-center">
                    体育II・III (バドミントン)<br />
                    (加藤幸司)
                  </td>
                  <td className="text-center">
                    資料検索法<br />
                    (渋川雅俊)<br />
                    ε21
                  </td>
                  <td className="text-center">
                    マーケティング戦略<br />
                    (桑原武夫)<br />
                    Ω11
                  </td>
                </tr>
                <tr>
                  <th className="bg-primary text-primary-content text-center">
                    3<br />(13:00〜14:30)
                  </th>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center">
                    グラフィックスプログラミング<br />
                    (脇田玲)<br />
                    κ11
                  </td>
                  <td className="text-center">
                    モバイル・分散プログラミング<br />
                    (徳田英幸)<br />
                    τ11
                  </td>
                  <td className="text-center">
                    英語スキルB (Academic writing)<br />
                    (Lepple)<br />
                    ι16
                  </td>
                </tr>
                <tr>
                  <th className="bg-primary text-primary-content text-center">
                    4<br />(14:40〜16:10)
                  </th>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center">
                    グラフィックスプログラミング<br />
                    (脇田玲)<br />
                    κ11
                  </td>
                  <td className="text-center">
                    徳田英幸研究プロジェクト1<br />
                    (徳田英幸)<br />
                    ι23
                  </td>
                  <td className="text-center">
                    プログラミング入門C<br />
                    (坂田洋幸)<br />
                    κ18
                  </td>
                </tr>
                <tr>
                  <th className="bg-primary text-primary-content text-center">
                    5<br />(16:20〜17:50)
                  </th>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center">
                    プログラミング入門C<br />
                    (坂田洋幸)<br />
                    κ18
                  </td>
                </tr>
                <tr>
                  <th className="bg-primary text-primary-content text-center">
                    6<br />(18:00〜19:30)
                  </th>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
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
