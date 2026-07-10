'use client'

import { useTranslations } from 'next-intl'
import { NewspaperIcon, StarIcon } from '@heroicons/react/24/outline'
import publications from '@/data/publications.json'

interface Publication {
  title: string
  url: string
  source: string
  date: string
}

function SourceBadge({ source }: { source: string }) {
  return (
    <span className={`badge badge-sm ${source === 'zenn' ? 'badge-info' : 'badge-secondary'}`}>
      {source === 'zenn' ? 'Zenn' : 'Blog'}
    </span>
  )
}

export function PublicationsSection() {
  const t = useTranslations()

  const featured = publications.featured as Publication[]
  const latest = publications.latest as Publication[]

  return (
    <section className="py-16 px-4 bg-base-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <NewspaperIcon className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold">{t('publications.title')}</h2>
        </div>

        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <StarIcon className="w-6 h-6 text-secondary" />
          {t('publications.featured')}
        </h3>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {featured.map(entry => (
            <a
              key={entry.url}
              href={entry.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow group"
            >
              <div className="card-body">
                <div className="flex items-center gap-2 mb-1">
                  <SourceBadge source={entry.source} />
                  <span className="text-xs text-base-content/60">{entry.date}</span>
                </div>
                <h4 className="card-title text-lg leading-snug group-hover:text-primary transition-colors">
                  {entry.title}
                </h4>
              </div>
            </a>
          ))}
        </div>

        {latest.length > 0 && (
          <>
            <h3 className="text-2xl font-semibold mb-6">{t('publications.latest')}</h3>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body divide-y divide-base-300 p-4 md:p-6">
                {latest.map(entry => (
                  <a
                    key={entry.url}
                    href={entry.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-wrap md:flex-nowrap items-baseline gap-x-3 gap-y-1 py-3 first:pt-0 last:pb-0 group"
                  >
                    <span className="text-xs text-base-content/60 shrink-0 tabular-nums">
                      {entry.date}
                    </span>
                    <SourceBadge source={entry.source} />
                    <span className="text-sm md:text-base group-hover:text-primary transition-colors">
                      {entry.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
