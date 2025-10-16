'use client'
import { useTranslations } from 'next-intl'
import { BriefcaseIcon } from '@heroicons/react/24/outline'

export function ExperienceSection() {
  const t = useTranslations()
  return (
    <section className="py-16 px-4 bg-base-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <BriefcaseIcon className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold">{t('experience.title')}</h2>
        </div>
        <div className="space-y-8">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="card-title text-2xl">{t('experience.minedia.role')}</h3>
                  <p className="text-lg font-semibold text-primary">{t('experience.minedia.company')}</p>
                </div>
                <div className="badge badge-primary badge-lg">{t('experience.minedia.period')}</div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-base-content/80">
                {Array.isArray(t.raw('experience.minedia.items')) &&
                  t.raw('experience.minedia.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="card-title text-2xl">{t('experience.metaps.role')}</h3>
                  <p className="text-lg font-semibold text-primary">{t('experience.metaps.company')}</p>
                </div>
                <div className="badge badge-secondary badge-lg">{t('experience.metaps.period')}</div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-base-content/80">
                {Array.isArray(t.raw('experience.metaps.items')) &&
                  t.raw('experience.metaps.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="card-title text-2xl">{t('experience.gree.role')}</h3>
                  <p className="text-lg font-semibold text-primary">{t('experience.gree.company')}</p>
                </div>
                <div className="badge badge-secondary badge-lg">{t('experience.gree.period')}</div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-base-content/80">
                {Array.isArray(t.raw('experience.gree.items')) &&
                  t.raw('experience.gree.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
