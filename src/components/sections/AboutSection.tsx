'use client'

import { useTranslations } from 'next-intl'

export function AboutSection() {
  const t = useTranslations()

  return (
    <section className="py-20 px-4 bg-base-100 relative">
      {/* Diagonal accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary to-transparent opacity-5 blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Section title with asymmetric placement */}
          <div className="md:col-span-4 animate-slide-in-left">
            <h2 className="section-header text-5xl md:text-6xl text-base-content mb-4">
              {t('about.title')}
            </h2>
            <div className="w-24 h-1 bg-primary" />
          </div>

          {/* Content with refined typography */}
          <div className="md:col-span-8 space-y-6 animate-slide-in-right animation-delay-200">
            <p className="section-subtitle text-xl md:text-2xl text-base-content/80 leading-relaxed">
              {t('about.paragraph1')}
            </p>
            <p className="section-subtitle text-lg md:text-xl text-base-content/70 leading-relaxed">
              {t('about.paragraph2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
