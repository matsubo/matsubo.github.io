'use client'

import { useTranslations } from 'next-intl'
import { LightBulbIcon, SparklesIcon } from '@heroicons/react/24/outline'

export function PersonalitySection() {
  const t = useTranslations()

  return (
    <section className="py-16 px-4 bg-base-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <LightBulbIcon className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold">{t('personality.title')}</h2>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title text-3xl mb-4 flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
              <span className="badge badge-primary badge-lg whitespace-nowrap">{t('personality.mbti')}</span>
              <span>{t('personality.subtitle')}</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-semibold mb-3">{t('personality.strengths.title')}</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <SparklesIcon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>
                      <strong>{t('personality.strengths.logical.title')}</strong> {t('personality.strengths.logical.description')}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <SparklesIcon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>
                      <strong>{t('personality.strengths.strategic.title')}</strong> {t('personality.strengths.strategic.description')}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <SparklesIcon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>
                      <strong>{t('personality.strengths.innovation.title')}</strong> {t('personality.strengths.innovation.description')}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <SparklesIcon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>
                      <strong>{t('personality.strengths.understanding.title')}</strong> {t('personality.strengths.understanding.description')}
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">{t('personality.leadership.title')}</h4>
                <p className="mb-4">{t('personality.leadership.description1')}</p>
                <p>{t('personality.leadership.description2')}</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-base-200 rounded-lg">
              <p className="text-sm italic">
                <strong>{t('personality.note')}</strong> {t('personality.noteText')}{' '}
                <a
                  href="https://diary.teraren.com/2025/04/14/mbti/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link link-primary"
                >
                  {t('personality.fullAnalysis')}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
