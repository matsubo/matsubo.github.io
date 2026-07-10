'use client'

import Image from 'next/image'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yukimatsukura/' },
  { label: 'X (Twitter)', href: 'https://x.com/matsubokkuri' },
  { label: 'Blog', href: 'https://blog.teraren.com/' },
  { label: 'Zenn', href: 'https://zenn.dev/matsubokkuri' },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden aurora-bg">
      <div className="dot-grid-bg absolute inset-0" aria-hidden="true" />

      <div className="relative max-w-5xl mx-auto px-4 pt-24 pb-20 md:pt-36 md:pb-28 text-center">
        {/* Avatar */}
        <div className="animate-fade-in-up mb-8 flex justify-center">
          <div className="relative">
            <div
              className="absolute -inset-1.5 rounded-full opacity-60 blur-md"
              style={{
                background:
                  'conic-gradient(from 210deg, var(--color-primary), var(--color-accent), transparent 60%, var(--color-primary))',
              }}
              aria-hidden="true"
            />
            <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full ring-1 ring-base-content/15 overflow-hidden bg-base-200">
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
        </div>

        {/* Eyebrow */}
        <p className="animate-fade-in-up animation-delay-100 eyebrow mb-4">
          CTO&ensp;·&ensp;Software Engineer
        </p>

        {/* Name */}
        <h1 className="animate-fade-in-up animation-delay-200 section-header text-5xl md:text-7xl mb-6">
          <span className="text-shimmer">Yuki Matsukura</span>
        </h1>

        {/* Tagline */}
        <p className="animate-fade-in-up animation-delay-300 section-subtitle text-lg md:text-xl text-base-content/65 max-w-2xl mx-auto mb-10">
          Building scalable systems and innovative solutions for 20+ years
        </p>

        {/* CTA + socials */}
        <nav className="animate-fade-in-up animation-delay-400 flex flex-wrap justify-center items-center gap-3">
          <a
            href="https://github.com/matsubo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-glow rounded-full px-6"
          >
            GitHub
            <ArrowUpRightIcon className="w-4 h-4" />
          </a>
          {SOCIAL_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost rounded-full px-5 border border-base-content/15 hover:border-primary/60 hover:bg-primary/5"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Bottom hairline */}
      <div className="glow-divider" aria-hidden="true" />
    </section>
  )
}
