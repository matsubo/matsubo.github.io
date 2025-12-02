'use client'
import { useTranslations } from 'next-intl'
import { AcademicCapIcon, DocumentTextIcon, BeakerIcon } from '@heroicons/react/24/outline'

export function AcademicSection() {
  const t = useTranslations()
  return (
    <section className="py-16 px-4 bg-base-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <AcademicCapIcon className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold">{t('academic.title')}</h2>
        </div>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <DocumentTextIcon className="w-6 h-6 text-secondary" />
            {t('academic.papers.title')}
          </h3>
          <div className="space-y-4">
            <div className="card bg-base-200">
              <div className="card-body">
                <h4 className="card-title">{t('academic.papers.ec.title')}</h4>
                <p className="text-sm text-base-content/70">{t('academic.papers.ec.meta')}</p>
                <p className="mt-2">{t('academic.papers.ec.description')}</p>
                <div className="card-actions mt-4">
                  <a href="https://link.springer.com/chapter/10.1007/978-3-031-34668-2_26" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                    {t('academic.papers.ec.button')}
                  </a>
                </div>
              </div>
            </div>
            <div className="card bg-base-200">
              <div className="card-body">
                <h4 className="card-title">{t('academic.papers.mugi.title')}</h4>
                <p className="text-sm text-base-content/70">{t('academic.papers.mugi.meta')}</p>
                <p className="mt-2">{t('academic.papers.mugi.description')}</p>
                <div className="card-actions mt-4">
                  <a href="/paper/200502_thesis.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                    {t('academic.papers.mugi.button')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <BeakerIcon className="w-6 h-6 text-secondary" />
            {t('academic.presentations.title')}
          </h3>
          <div className="space-y-4">
            <div className="card bg-base-200">
              <div className="card-body">
                <h4 className="card-title">{t('academic.presentations.snowday.title')}</h4>
                <p className="text-sm text-base-content/70">{t('academic.presentations.snowday.meta')}</p>
                <p className="mt-2">{t('academic.presentations.snowday.description')}</p>
                <div className="card-actions mt-4">
                  <a href="https://dev.classmethod.jp/articles/snowday-report-hone/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                    {t('academic.presentations.snowday.button')}
                  </a>
                </div>
              </div>
            </div>
            <div className="card bg-base-200">
              <div className="card-body">
                <h4 className="card-title">{t('academic.presentations.cedec.title')}</h4>
                <p className="text-sm text-base-content/70">{t('academic.presentations.cedec.meta')}</p>
                <p className="mt-2">{t('academic.presentations.cedec.description')}</p>
                <div className="card-actions mt-4">
                  <a href="https://gigazine.net/news/20120829-gree-strategy-cedec2012/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                    {t('academic.presentations.cedec.button')}
                  </a>
                </div>
              </div>
            </div>
            <div className="card bg-base-200">
              <div className="card-body">
                <h4 className="card-title">{t('academic.presentations.codezine.title')}</h4>
                <p className="text-sm text-base-content/70">{t('academic.presentations.codezine.meta')}</p>
                <p className="mt-2">{t('academic.presentations.codezine.description')}</p>
                <div className="card-actions mt-4">
                  <a href="https://codezine.jp/article/detail/5858" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                    {t('academic.presentations.codezine.button')}
                  </a>
                </div>
              </div>
            </div>
            <div className="card bg-base-200">
              <div className="card-body">
                <h4 className="card-title">{t('academic.presentations.greeLabs.title')}</h4>
                <p className="text-sm text-base-content/70">{t('academic.presentations.greeLabs.meta')}</p>
                <p className="mt-2">{t('academic.presentations.greeLabs.description')}</p>
                <div className="card-actions mt-4">
                  <a href="https://labs.gree.jp/blog/2011/04/3282/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                    {t('academic.presentations.greeLabs.button')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
