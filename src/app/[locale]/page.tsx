import { useTranslations } from 'next-intl'
import Layout from '@/components/layout'
import StructuredData from '@/components/structured-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Yuki Matsukura - CTO & Software Engineer | 20+ Years Experience',
  description: 'Experienced CTO at Minedia with 20+ years in software engineering. Expert in scalable systems, Ruby on Rails, React, and team leadership.',
  keywords: 'CTO, Software Engineer, System Architecture, Ruby on Rails, React, Cloud Infrastructure, Team Leadership',
  authors: [{ name: 'Yuki Matsukura' }],
  openGraph: {
    title: 'Yuki Matsukura - CTO & Software Engineer',
    description: 'Experienced CTO with 20+ years building scalable systems',
    url: 'https://matsubo.github.io',
    siteName: 'Yuki Matsukura Portfolio',
    images: [
      {
        url: 'https://matsubo.github.io/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Yuki Matsukura - CTO & Software Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yuki Matsukura - CTO & Software Engineer',
    description: 'Experienced CTO with 20+ years building scalable systems',
    creator: '@matsubokkuri',
    images: ['https://matsubo.github.io/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function IndexPage() {
  const t = useTranslations()

  return (
    <>
      <StructuredData />
      <Layout>
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-base-200 to-base-300">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <div className="avatar mb-4">
                <div className="w-32 rounded-full">
                  <img
                    src="https://github.com/matsubo.png"
                    alt="Yuki Matsukura profile picture"
                    loading="eager"
                    width={128}
                    height={128}
                  />
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Yuki Matsukura
            </h1>
            <p className="text-2xl md:text-3xl text-base-content/80 mb-6">
              CTO & Software Engineer
            </p>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto mb-8">
              Building scalable systems and innovative solutions for 20+ years
            </p>

            {/* Social Links */}
            <nav className="flex flex-wrap justify-center gap-3 mt-8">
              <a
                href="https://github.com/matsubo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline gap-2 hover:scale-105 transition-transform"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/yukimatsukura/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline gap-2 hover:scale-105 transition-transform"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/matsubokkuri"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline gap-2 hover:scale-105 transition-transform"
              >
                X (Twitter)
              </a>
              <a
                href="https://blog.teraren.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline gap-2 hover:scale-105 transition-transform"
              >
                Blog
              </a>
              <a
                href="https://zenn.dev/matsubokkuri"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-primary gap-2 hover:scale-105 transition-transform"
              >
                Zenn
              </a>
            </nav>
          </div>
        </section>

        {/* About Section */}
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

        {/* Experience Section */}
        <section className="py-16 px-4 bg-base-200">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">{t('experience.title')}</h2>
            <div className="space-y-8">
              {/* Minedia */}
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-2xl">{t('experience.minedia.role')}</h3>
                  <p className="text-lg font-semibold text-primary">
                    {t('experience.minedia.company')}
                  </p>
                  <p className="badge badge-primary badge-lg">
                    {t('experience.minedia.period')}
                  </p>
                  <ul className="list-disc list-inside space-y-2 mt-4">
                    {Array.isArray(t.raw('experience.minedia.items')) ?
                      t.raw('experience.minedia.items').map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      )) : null}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-base-100">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">{t('contact.title')}</h2>
            <p className="text-lg text-base-content/70 mb-8">
              {t('contact.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://github.com/matsubo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary gap-2"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/yukimatsukura/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary gap-2"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/matsubokkuri"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline gap-2"
              >
                X (Twitter)
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
