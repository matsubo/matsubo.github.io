'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { GlobeAltIcon } from '@heroicons/react/24/outline'

export function HeroSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-base-200 to-base-300">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <div className="avatar mb-4">
            <div className="w-32 rounded-full">
              <Image
                src="https://github.com/matsubo.png"
                alt="Yuki Matsukura profile picture"
                width={128}
                height={128}
                priority
                className="rounded-full"
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
            <GlobeAltIcon className="w-5 h-5" />
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
  )
}
