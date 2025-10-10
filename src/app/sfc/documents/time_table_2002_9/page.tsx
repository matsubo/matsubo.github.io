'use client'

import { useState, useEffect } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import Layout from '@/components/layout'
import Link from 'next/link'

export default function TimeTable2002_9() {
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
              <li>Timetable 2002/9</li>
            </ul>
          </div>

          <h1 className="text-3xl font-bold mb-8">時間割 2002年秋学期</h1>

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
                  <td className="text-center">
                    情処SA<br />
                    (楠本)<br />
                    ι17
                  </td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center">
                    論理プログラミング<br />
                    (向井 国昭)<br />
                    ο11
                  </td>
                </tr>
                <tr>
                  <th className="bg-primary text-primary-content text-center">2</th>
                  <td className="text-center">
                    環境情報分析<br />
                    (清水 浩)<br />
                    Ω21
                  </td>
                  <td className="text-center">
                    情処SA<br />
                    (楠本)<br />
                    ι17
                  </td>
                  <td className="text-center"></td>
                  <td className="text-center">
                    地球環境概論<br />
                    (厳 網林)<br />
                    ε11
                  </td>
                  <td className="text-center">
                    論理プログラミング<br />
                    (向井 国昭)<br />
                    ο11
                  </td>
                </tr>
                <tr>
                  <th className="bg-primary text-primary-content text-center">3</th>
                  <td className="text-center"></td>
                  <td className="text-center">
                    システム・ソフトウェア<br />
                    (萩野 達也)<br />
                    ο12
                  </td>
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
                  <td className="text-center">
                    データベース構築法<br />
                    (清木 康)<br />
                    τ12
                  </td>
                </tr>
                <tr>
                  <th className="bg-primary text-primary-content text-center">5</th>
                  <td className="text-center">
                    インターネット概論<br />
                    (村井 純)<br />
                    Ω21
                  </td>
                  <td className="text-center">
                    CCNA<br />
                    ε12
                  </td>
                  <td className="text-center"></td>
                  <td className="text-center">
                    RG<br />
                    ι23
                  </td>
                  <td className="text-center"></td>
                </tr>
                <tr>
                  <th className="bg-primary text-primary-content text-center">6</th>
                  <td className="text-center"></td>
                  <td className="text-center">
                    CCNA<br />
                    ε12
                  </td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                </tr>
                <tr>
                  <th className="bg-primary text-primary-content text-center">7</th>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center">
                    ACE meeting<br />
                    ΔS213
                  </td>
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
