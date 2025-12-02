'use client'
import { useTranslations } from 'next-intl'
import { HeartIcon, TrophyIcon, DocumentTextIcon, WrenchScrewdriverIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

export function HobbiesSection() {
  const t = useTranslations()
  return (
    <section className="py-16 px-4 bg-base-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <HeartIcon className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold">{t('hobbies.title')}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title flex items-center gap-2">
                <TrophyIcon className="w-6 h-6 text-warning" />
                {t('hobbies.triathlon.title')}
              </h3>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start gap-2"><span className="text-warning">🏆</span><span>{t('hobbies.triathlon.worldChampionship')}</span></li>
                <li className="flex items-start gap-2"><span className="text-warning">🏃</span><span>{t('hobbies.triathlon.marathon')}</span></li>
                <li className="flex items-start gap-2"><span className="text-warning">🏃‍♂️</span><span>{t('hobbies.triathlon.olympicDistance')}</span></li>
                <li className="flex items-start gap-2"><span className="text-info">🏊</span><span>{t('hobbies.triathlon.openwater')}</span></li>
                <li className="flex items-start gap-2"><span className="text-warning">🚴</span><span>{t('hobbies.triathlon.ironman703')}</span></li>
                <li className="flex items-start gap-2"><span className="text-info">💡</span><span>{t('hobbies.triathlon.aiTools')}</span></li>
              </ul>
            </div>
          </div>
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title flex items-center gap-2">
                <DocumentTextIcon className="w-6 h-6 text-info" />
                {t('hobbies.writing.title')}
              </h3>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start gap-2"><span className="text-info">📝</span><a href="https://zenn.dev/matsubokkuri" rel="noopener noreferrer" className="link">{t('hobbies.writing.zenn')}</a></li>
                <li className="flex items-start gap-2"><span className="text-info">📝</span><a href="https://blog.teraren.com/" rel="noopener noreferrer" className="link">{t('hobbies.writing.blog')}</a></li>
              </ul>
            </div>
          </div>
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title flex items-center gap-2">
                <WrenchScrewdriverIcon className="w-6 h-6 text-success" />
                {t('hobbies.diy.title')}
              </h3>
              <p className="text-sm mt-2">{t('hobbies.diy.description')}</p>
              <ul className="space-y-2 mt-4">
                {t.raw('hobbies.diy.projects').map((project: any, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-success">🔧</span>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="link">
                      {project.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title flex items-center gap-2">
                <GlobeAltIcon className="w-6 h-6 text-warning" />
                {t('hobbies.travel.title')}
              </h3>
              <p className="text-sm mt-2">{t('hobbies.travel.description')}</p>
              <ul className="space-y-2 mt-4">
                {t.raw('hobbies.travel.destinations').map((destination: any, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-warning">✈️</span>
                    <a href={destination.url} target="_blank" rel="noopener noreferrer" className="link">
                      {destination.title}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <a
                  href="https://diary.teraren.com/travel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm w-full"
                >
                  {t('hobbies.travel.allTravels')}
                </a>
              </div>
            </div>
          </div>
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title">{t('hobbies.certifications.title')}</h3>
              <ul className="space-y-2 mt-4 text-sm">
                <li>• {t('hobbies.certifications.applied')}</li>
                <li>• {t('hobbies.certifications.lpic')}</li>
                <li>• {t('hobbies.certifications.electrician')}</li>
                <li>• {t('hobbies.certifications.toeic')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
