'use client'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export function ArchiveSection() {
  const t = useTranslations()
  return (
    <section className="py-16 px-4 bg-base-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('archive.title')}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/sfc/" className="card bg-base-100 hover:bg-base-300 hover:shadow-2xl transition-all duration-300 group">
            <div className="card-body">
              <h3 className="card-title group-hover:text-primary transition-colors">{t('archive.university.title')}</h3>
              <p className="text-base-content/70">{t('archive.university.description')}</p>
            </div>
          </Link>
          <Link href="/ht/" className="card bg-base-100 hover:bg-base-300 hover:shadow-2xl transition-all duration-300 group">
            <div className="card-body">
              <h3 className="card-title group-hover:text-primary transition-colors">{t('archive.lab.title')}</h3>
              <p className="text-base-content/70">{t('archive.lab.description')}</p>
            </div>
          </Link>
          <Link href="/rails/" className="card bg-base-100 hover:bg-base-300 hover:shadow-2xl transition-all duration-300 group">
            <div className="card-body">
              <h3 className="card-title group-hover:text-primary transition-colors">{t('archive.rails.title')}</h3>
              <p className="text-base-content/70">{t('archive.rails.description')}</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
