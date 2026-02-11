'use client'

import { useTranslations } from 'next-intl'

export function AboutSection() {
  const t = useTranslations()

  return (
    <section className="py-12 px-4 bg-base-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-header text-3xl text-base-content mb-6">
          {t('about.title')}
        </h2>

        <div className="space-y-4">
          <p className="section-subtitle text-base text-base-content/80 leading-relaxed">
            {t('about.paragraph1')}
          </p>
          <p className="section-subtitle text-base text-base-content/70 leading-relaxed">
            {t('about.paragraph2')}
          </p>
        </div>
      </div>
    </section>
  )
}
