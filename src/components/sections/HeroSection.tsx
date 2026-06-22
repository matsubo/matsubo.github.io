'use client'

import Image from 'next/image'
import { GlobeAltIcon } from '@heroicons/react/24/outline'

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden border-b border-base-300 px-4 py-24 md:py-32"
      style={{
        backgroundColor: 'var(--color-base-100)',
        backgroundImage:
          'radial-gradient(ellipse 75% 55% at 50% -8%, oklch(50% 0.083 195 / 0.12), transparent 60%), radial-gradient(circle at 88% 18%, oklch(70% 0.115 68 / 0.08), transparent 42%)',
      }}
    >
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="avatar mb-8 animate-fade-in-up">
          <div className="w-28 rounded-full ring-2 ring-primary/30 ring-offset-4 ring-offset-base-100 shadow-xl">
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

        <h1 className="animate-fade-in-up animation-delay-100 text-5xl md:text-7xl font-semibold tracking-tight text-base-content">
          Yuki Matsukura
        </h1>

        <div className="animate-fade-in-up animation-delay-200 mx-auto mt-6 mb-7 h-px w-16 bg-accent" />

        <p className="animate-fade-in-up animation-delay-200 text-lg md:text-xl font-medium uppercase tracking-[0.25em] text-primary">
          CTO &amp; Software Engineer
        </p>

        <p className="animate-fade-in-up animation-delay-300 mx-auto mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-base-content/70">
          Building scalable systems and innovative solutions for 20+ years
        </p>

        {/* Social Links */}
        <nav className="animate-fade-in-up animation-delay-400 mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="https://github.com/matsubo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm md:btn-md gap-2 hover:scale-105 transition-transform"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yukimatsukura/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm md:btn-md gap-2 hover:scale-105 transition-transform"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/matsubokkuri"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm md:btn-md gap-2 hover:scale-105 transition-transform"
          >
            X (Twitter)
          </a>
          <a
            href="https://blog.teraren.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm md:btn-md gap-2 hover:scale-105 transition-transform"
          >
            <GlobeAltIcon className="w-5 h-5" />
            Blog
          </a>
          <a
            href="https://zenn.dev/matsubokkuri"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm md:btn-md gap-2 hover:scale-105 transition-transform"
          >
            Zenn
          </a>
        </nav>
      </div>
    </section>
  )
}
