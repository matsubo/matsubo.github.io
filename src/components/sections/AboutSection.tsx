'use client'

import { useTranslations } from 'next-intl'

export function AboutSection() {
  const t = useTranslations()

  return (
    <section className="py-16 px-4 bg-base-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">{t('about.title')}</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed">
            {t('about.paragraph1')}
          </p>
          <p className="text-lg leading-relaxed">
            {t('about.paragraph2')}
          </p>
        </div>
      </div>
    </section>
  )
}
