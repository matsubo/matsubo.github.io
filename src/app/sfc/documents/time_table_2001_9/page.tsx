'use client'

import { useState, useEffect } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import Layout from '@/components/layout'
import Link from 'next/link'

export default function TimeTable2001_9() {
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
              <li>Timetable 2001/9</li>
            </ul>
          </div>

          <h1 className="text-3xl font-bold mb-8">時間割 2001年秋学期</h1>

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
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center">
                    connectカスタマー<br />戦略定期会議
                  </td>
                  <td className="text-center"></td>
                </tr>
                <tr>
                  <th className="bg-primary text-primary-content text-center">
                    2<br />(11:10〜12:40)
                  </th>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center">
                    英語スキル B(Integrated)<br />(Wesselhoff)<br />λ17
                  </td>
                  <td className="text-center"></td>
                  <td className="text-center">
                    英語スキル B(Integrated)<br />(Wesselhoff)<br />ι13
                  </td>
                </tr>
                <tr>
                  <th className="bg-primary text-primary-content text-center">
                    3<br />(13:00〜14:30)
                  </th>
                  <td className="text-center"></td>
                  <td className="text-center">
                    connect システム<br />定期会議
                  </td>
                  <td className="text-center">
                    英語スキル B(Oral)<br />(Rand)<br />θ
                  </td>
                  <td className="text-center">
                    統計言語<br />(湯前祥二)<br />ο13
                  </td>
                  <td className="text-center">
                    保健衛生<br />【学期前半】<br />(濱田庸子)<br />κ12
                  </td>
                </tr>
                <tr>
                  <th className="bg-primary text-primary-content text-center">
                    4<br />(14:40〜16:10)
                  </th>
                  <td className="text-center">
                    プレゼンテーション技法<br />(高橋一貢)<br />Ω22
                  </td>
                  <td className="text-center"></td>
                  <td className="text-center">
                    体育I(30)<br />(加藤幸司)
                  </td>
                  <td className="text-center">
                    Fisher研究会
                  </td>
                  <td className="text-center">
                    情報処理(30)<br />(小林裕之)<br />ε17
                  </td>
                </tr>
                <tr>
                  <th className="bg-primary text-primary-content text-center">
                    5<br />(16:20〜17:50)
                  </th>
                  <td className="text-center">
                    ネットワークアーキテクチャ<br />(村井純)<br />Ω21
                  </td>
                  <td className="text-center">
                    データベース概論<br />(清木康)<br />Ω12
                  </td>
                  <td className="text-center">
                    データ分析<br />(石塚直樹)<br />ι23
                  </td>
                  <td className="text-center"></td>
                  <td className="text-center">
                    情報処理(30)<br />(小林裕之)<br />ε17
                  </td>
                </tr>
                <tr>
                  <th className="bg-primary text-primary-content text-center">
                    6<br />(18:00〜19:30)
                  </th>
                  <td className="text-center">
                    connect カスタマー<br />戦略定期会議
                  </td>
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
