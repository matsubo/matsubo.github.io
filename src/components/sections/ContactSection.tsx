'use client'
import { useTranslations } from 'next-intl'
import { EnvelopeIcon } from '@heroicons/react/24/outline'

export function ContactSection() {
  const t = useTranslations()
  return (
    <section className="py-16 px-4 bg-base-100">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <EnvelopeIcon className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold">{t('contact.title')}</h2>
        </div>
        <p className="text-lg text-base-content/70 mb-8">{t('contact.description')}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="https://github.com/matsubo" target="_blank" rel="noopener noreferrer" className="btn btn-primary gap-2">GitHub</a>
          <a href="https://www.linkedin.com/in/yukimatsukura/" target="_blank" rel="noopener noreferrer" className="btn btn-primary gap-2">LinkedIn</a>
          <a href="https://x.com/matsubokkuri" target="_blank" rel="noopener noreferrer" className="btn btn-outline gap-2">X (Twitter)</a>
        </div>
      </div>
    </section>
  )
}
