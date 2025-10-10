'use client'

import { useState, useEffect } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import Layout from '@/components/layout'
import Link from 'next/link'

export default function TimeTable2003_4() {
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
              <li>Timetable 2003/4</li>
            </ul>
          </div>

          <h1 className="text-3xl font-bold mb-8">時間割 2003年春学期</h1>

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
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                </tr>
                <tr>
                  <th className="bg-primary text-primary-content text-center">2</th>
                  <td className="text-center">
                    インターネットオペレーション<br />
                    (中村修)<br />
                    Ω21
                  </td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center">
                    統計解析<br />
                    (中條安芸子)<br />
                    ι12
                  </td>
                  <td className="text-center"></td>
                </tr>
                <tr>
                  <th className="bg-primary text-primary-content text-center">3</th>
                  <td className="text-center">
                    インターネット構成法<br />
                    (村井純)<br />
                    τ11
                  </td>
                  <td className="text-center">
                    分散処理系論<br />
                    (萩野達也)<br />
                    ι12
                  </td>
                  <td className="text-center"></td>
                  <td className="text-center">
                    消費とライフスタイル<br />
                    (栗林敦子)<br />
                    Ω22
                  </td>
                  <td className="text-center"></td>
                </tr>
                <tr>
                  <th className="bg-primary text-primary-content text-center">4</th>
                  <td className="text-center">
                    中国語I(ベーシック)<br />
                    (飯田・川田)<br />
                    ε22
                  </td>
                  <td className="text-center"></td>
                  <td className="text-center">
                    中国語I(ベーシック)<br />
                    (飯田・植松)<br />
                    ε22
                  </td>
                  <td className="text-center">
                    徳田英幸 研究プロジェクトB(1)<br />
                    (徳田英幸)<br />
                    ι23
                  </td>
                  <td className="text-center"></td>
                </tr>
                <tr>
                  <th className="bg-primary text-primary-content text-center">5</th>
                  <td className="text-center"></td>
                  <td className="text-center">
                    オブジェクト指向モデリング<br />
                    (児玉公信)<br />
                    τ12
                  </td>
                  <td className="text-center">
                    体育II・III(バレーボール)<br />
                    (若井憲彰)
                  </td>
                  <td className="text-center">
                    徳田英幸 研究プロジェクトB(2)<br />
                    (徳田英幸)<br />
                    ι23
                  </td>
                  <td className="text-center"></td>
                </tr>
                <tr>
                  <th className="bg-primary text-primary-content text-center">6</th>
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
