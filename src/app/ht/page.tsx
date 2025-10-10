'use client'

import { useState, useEffect } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import Layout from '@/components/layout'
import Image from 'next/image'
import {
  UserIcon,
  BookOpenIcon,
  PresentationChartBarIcon,
  DocumentTextIcon,
  LinkIcon,
  BriefcaseIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline'

export const dynamic = 'force-static'

export default function HTPage() {
  const [locale, setLocale] = useState<string>('en')
  const [messages, setMessages] = useState<any>(null)

  useEffect(() => {
    const loadLocale = async () => {
      const storedLocale = localStorage.getItem('preferred-locale')
      let selectedLocale = 'en'

      if (storedLocale && (storedLocale === 'en' || storedLocale === 'ja')) {
        selectedLocale = storedLocale
      } else {
        const userLang = navigator.language.toLowerCase()
        selectedLocale = userLang.startsWith('ja') ? 'ja' : 'en'
        localStorage.setItem('preferred-locale', selectedLocale)
      }

      setLocale(selectedLocale)
      const loadedMessages = await import(`@/messages/locales/${selectedLocale}/translation.json`)
      setMessages(loadedMessages.default)
    }

    loadLocale()
  }, [])

  useEffect(() => {
    const handleLocaleChange = async (e: CustomEvent) => {
      const newLocale = e.detail.locale
      setLocale(newLocale)
      const loadedMessages = await import(`@/messages/locales/${newLocale}/translation.json`)
      setMessages(loadedMessages.default)
    }

    window.addEventListener('localeChange' as any, handleLocaleChange as any)
    return () => {
      window.removeEventListener('localeChange' as any, handleLocaleChange as any)
    }
  }, [])

  if (!messages) {
    return null
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-primary-content py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="avatar">
              <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <Image src="https://github.com/matsubo.png" alt="Yuki Matsukura" width={128} height={128} priority className="rounded-full" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl font-bold mb-4">Yuki Matsukura</h1>
              <p className="text-xl opacity-90 mb-2">
                松倉 友樹 (Yuki Matsukura)
              </p>
              <p className="text-lg opacity-80">
                Keio University Faculty of Environmental Information
              </p>
              <p className="text-lg opacity-80">Hide Tokuda Lab</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Profile Section */}
        <section className="mb-16">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-3xl mb-6">
                <UserIcon className="h-8 w-8" />
                Profile
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-lg mb-3">Contact</h3>
                  <a
                    href="https://www.facebook.com/matsubokkuri"
                    className="link link-primary flex items-center gap-2 mb-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook Profile
                  </a>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-3">Research Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    <div className="badge badge-primary badge-lg">
                      Location Information
                    </div>
                    <div className="badge badge-primary badge-lg">GPS</div>
                    <div className="badge badge-primary badge-lg">
                      Behavior Modeling
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <BookOpenIcon className="h-10 w-10 text-primary" />
            Publications
          </h2>
          <div className="space-y-6">
            {publications.map((pub, idx) => (
              <div key={idx} className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
                <div className="card-body">
                  <h3 className="card-title text-lg">
                    {pub.title}
                    {pub.link && (
                      <a
                        href={pub.link}
                        className="badge badge-secondary"
                        target={pub.link.startsWith('http') ? '_blank' : undefined}
                        rel={pub.link.startsWith('http') ? 'noreferrer' : undefined}
                      >
                        {pub.link.startsWith('http') ? 'URL' : 'PDF'}
                      </a>
                    )}
                  </h3>
                  <p className="text-sm opacity-70">{pub.authors}</p>
                  <p>{pub.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Presentations Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <PresentationChartBarIcon className="h-10 w-10 text-primary" />
            Presentations
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {presentations.map((pres, idx) => (
              <div key={idx} className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
                <div className="card-body">
                  <h3 className="card-title">
                    {pres.title}
                    {pres.file && (
                      <a href={pres.file} className="badge badge-accent">
                        {pres.file.endsWith('.zip') ? 'Zip' : pres.file.endsWith('.ppt') ? 'PPT' : 'Download'}
                      </a>
                    )}
                  </h3>
                  {pres.description && <p className="text-sm">{pres.description}</p>}
                  {pres.link && (
                    <a
                      href={pres.link}
                      className="link link-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View on Gigazine →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Term Projects Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <DocumentTextIcon className="h-10 w-10 text-primary" />
            Term Projects
          </h2>
          <div className="space-y-6">
            {termProjects.map((project, idx) => (
              <div key={idx} className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
                <div className="card-body">
                  <h3 className="card-title text-xl">{project.title}</h3>
                  <p>{project.description}</p>
                  {project.link && (
                    <a
                      href={project.link}
                      className="link link-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Archive Link →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Links Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <LinkIcon className="h-10 w-10 text-primary" />
            Links
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                className="card bg-base-100 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                target="_blank"
                rel="noreferrer"
              >
                <div className="card-body">
                  <h3 className="card-title">{link.title}</h3>
                  <p>{link.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Work History Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <BriefcaseIcon className="h-10 w-10 text-primary" />
            Work History
          </h2>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <ul className="timeline timeline-vertical">
                {workHistory.map((work, idx) => (
                  <li key={idx}>
                    {idx > 0 && <hr className="bg-primary" />}
                    <div className="timeline-start">{work.period}</div>
                    <div className="timeline-middle">
                      <CheckCircleIcon className={`w-5 h-5 ${work.current ? 'text-secondary' : 'text-primary'}`} />
                    </div>
                    <div className="timeline-end timeline-box">
                      <strong>{work.company}</strong> - {work.position}
                    </div>
                    {idx < workHistory.length - 1 && <hr className="bg-primary" />}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <ShieldCheckIcon className="h-10 w-10 text-primary" />
            Skills & Certificates
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title">System Administration</h3>
                <div className="flex flex-wrap gap-2">
                  <div className="badge badge-outline">Linux</div>
                  <div className="badge badge-outline">UNIX</div>
                  <div className="badge badge-outline">Windows Server</div>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <div className="badge badge-outline">Perl</div>
                  <div className="badge badge-outline">PHP</div>
                  <div className="badge badge-outline">Shell</div>
                  <div className="badge badge-outline">Java</div>
                  <div className="badge badge-outline">Ruby</div>
                  <div className="badge badge-outline">JavaScript</div>
                  <div className="badge badge-outline">HTML/CSS</div>
                  <div className="badge badge-outline">LaTeX</div>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title">Applications & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <div className="badge badge-outline">MySQL</div>
                  <div className="badge badge-outline">PostgreSQL</div>
                  <div className="badge badge-outline">MS-Office</div>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title">Certifications</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-success" />
                    LPIC Level 1, Level 2
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-success" />
                    Applied Information Technology Engineer (AP)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-success" />
                    Amateur Third-Class Radio Operator
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded-t-3xl">
        <div>
          <p className="text-sm opacity-70 mt-4">Hide Tokuda Laboratory Archive</p>
        </div>
      </footer>
    </Layout>
    </NextIntlClientProvider>
  )
}

const publications: Array<{
  title: string;
  authors: string;
  description: string;
  link?: string;
}> = [
  {
    title: 'u-Texture: A Self-Organizable Material with Multiple Sensors',
    authors: 'Yuki Matsukura, Naohiko Kohtake, Jin Nakazawa, Kazunori Takashio, Hideyuki Tokuda',
    description: 'Position paper of Ubicomp 2004 on Playing with Sensors workshop.',
    link: '/paper/200408_ubicomp.pdf',
  },
  {
    title: "MUGI:Design and Implementation of Activity Models for Proposal Navigation Services using Location Information and Places' Attributes",
    authors: 'Yuki Matsukura',
    description: "Bachelor's thesis 2005, Keio University Faculty of environmental information.",
    link: '/paper/200502_thesis.pdf',
  },
  {
    title: "Activity Model using Location and Places' Attributes for Navigation Services",
    authors: 'Yuki Matsukura, Naohiko Kohtake, Kazunori Takashio, Hideyuki Tokuda',
    description: 'IWSAWC 2005, Held in conjunction with the IEEE International Conference on Distributed Computing Systems (ICDCS)',
    link: '/paper/200506_iwsawc.pdf',
  },
  {
    title: 'Platform for Realizing Social Gaming -How to Develop Attractive Games for 1 Billion Users-',
    authors: 'Yuki Matsukura, Hideki Tanaka, Masaki Fujimoto',
    description: 'Technical Committee on Natural Language Understanding and Models of Communication (NLC) 2012',
    link: 'http://www.ieice.org/ken/program/index.php?tgs_regid=7b51ac8a2255b64211deee115de18aa9001df9945f52808b72e33513fedb8ef3&tgid=IEICE-NLC&lang=',
  },
]

const presentations: Array<{
  title: string;
  file?: string;
  description?: string;
  link?: string;
}> = [
  {
    title: 'Basics and Development using PHP5',
    file: '/ppt/function.zip',
    description: 'This presentation is for PHP beginner. By hearing this presentation, you can know basics of PHP, new functions of PHP5 and treands in development field.',
  },
  {
    title: 'Survey of "Privacy-Aware Location Sensor Networks"',
    description: "This research shows how to protect sensor nodes' privacy in sensor networks.",
  },
  {
    title: 'Survey of "Social Disclosure of Place: From Location Technology to Communication Practices"',
    file: '/ppt/social_disclosure_of_place.ppt',
    description: 'PlaceLab works middleware of multiple location devices such as GPS, GSM and 802.11. Application programmer can obtain users\' location wherever indoor or outdoor.',
  },
  {
    title: "GREE's strategy exporting Japanese social game to the world wide.",
    description: 'Made a presentation on CEDEC(Computer science Entertainment Developers Conference) 2012.',
    link: 'https://gigazine.net/news/20120829-gree-strategy-cedec2012/',
  },
]

const termProjects: Array<{
  title: string;
  description: string;
  link?: string;
}> = [
  {
    title: 'Area Based Matching system - 2002/Spring',
    description: "This system enables users to find someone who can offer users' needs. As a scenario, when a user is alone in university, the user wants to have lunch. the user use this system and find a person who wants to have lunch near the user.",
    link: 'https://web.archive.org/web/20211019064322/http://www.ht.sfc.keio.ac.jp/%7ematsu/2002s/',
  },
  {
    title: 'DoCoDeMo pingpong! - 2002/Autumn',
    description: 'This system enables users to receive home\'s interphone on PC. Even users are in university, they can receive and respond to visitors.',
    link: 'https://web.archive.org/web/20211019064322/http://www.ht.sfc.keio.ac.jp/~matsu/2002a/',
  },
  {
    title: 'Middleware for Public Services - 2003/Spring',
    description: 'I constructed a middleware to save working snapshot. A user can continue works even in moved another location.',
  },
  {
    title: 'Object LOcating System - 2003/Autumn',
    description: 'This system manages objects attached RFID by managing RFID readers\' location. So applications can navigate users to the wanted objects, and manage object by shopkeeper. These days, many products are published related in this research.',
    link: 'https://web.archive.org/web/20211019064322/http://www.ht.sfc.keio.ac.jp/%7Ematsu/2003a/',
  },
]

const links: Array<{
  title: string;
  url: string;
  description: string;
}> = [
  {
    title: 'BLOG',
    url: 'https://matsu.teraren.com/blog/',
    description: "I'm writing my daily life and interests about bikes, aquarium and traveling.",
  },
  {
    title: 'Photograph',
    url: 'https://portfolio.teraren.com/',
    description: 'Publishing for Creative Commons on my server.',
  },
  {
    title: '500px',
    url: 'https://500px.com/p/matsubokkuri?view=photos',
    description: 'Photo portfolio on 500px platform.',
  },
]

const workHistory: Array<{
  period: string;
  company: string;
  position: string;
  current?: boolean;
}> = [
  {
    period: '2001/4 - 2001/8',
    company: 'COM Corp',
    position: 'System management department',
  },
  {
    period: '2001/9 - 2002/4',
    company: 'CNS guide 2002',
    position: 'Editor',
  },
  {
    period: '2002/4 - 2003/3',
    company: 'SFC Data Science Lab',
    position: 'Sub-administrator',
  },
  {
    period: '2002/4 - 2002/9',
    company: 'Clair Inc.',
    position: 'System developer',
  },
  {
    period: '2002/4 - 2005/9',
    company: 'Marue Corp.',
    position: 'Consultant, System Management',
  },
  {
    period: '2003/4 - 2004/3',
    company: 'CNS guide 2004',
    position: 'Chief editor',
  },
  {
    period: '2003/4 - 2005/4',
    company: 'SFC Data Science Lab',
    position: 'Administrator',
  },
  {
    period: '2006/4 - 2009/3',
    company: 'E-commerce ASP Company',
    position: 'System Architect',
  },
  {
    period: '2009/4 - 2011/1',
    company: 'Coach United',
    position: 'Chief Engineer',
  },
  {
    period: '2011/2 - Present',
    company: 'GREE, Inc.',
    position: 'Senior Engineer / Manager',
    current: true,
  },
]
