'use client'

import Image from 'next/image'
import { GlobeAltIcon } from '@heroicons/react/24/outline'

export function HeroSection() {
  return (
    <section className="py-16 px-4 bg-base-100 border-b border-base-300">
      <div className="max-w-4xl mx-auto">
        {/* Avatar */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 rounded-full border-2 border-base-300 overflow-hidden">
            <Image
              src="https://github.com/matsubo.png"
              alt="Yuki Matsukura profile picture"
              width={128}
              height={128}
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Main info */}
        <div className="text-center space-y-4">
          <h1 className="section-header text-4xl md:text-5xl text-base-content">
            Yuki Matsukura
          </h1>

          <div className="flex items-center justify-center gap-3 flex-wrap text-lg md:text-xl text-base-content/70">
            <span>CTO</span>
            <span>•</span>
            <span>Software Engineer</span>
          </div>

          <p className="section-subtitle text-lg text-base-content/70 max-w-2xl mx-auto">
            Building scalable systems and innovative solutions for 20+ years
          </p>

          {/* Social Links */}
          <nav className="flex flex-wrap justify-center gap-3 pt-6">
            <a
              href="https://github.com/matsubo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yukimatsukura/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/matsubokkuri"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline"
            >
              X (Twitter)
            </a>
            <a
              href="https://blog.teraren.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline gap-2"
            >
              <GlobeAltIcon className="w-4 h-4" />
              Blog
            </a>
            <a
              href="https://zenn.dev/matsubokkuri"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline"
            >
              Zenn
            </a>
          </nav>
        </div>
      </div>
    </section>
  )
}
