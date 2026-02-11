'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { GlobeAltIcon } from '@heroicons/react/24/outline'

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY
        const parallaxElements = heroRef.current.querySelectorAll('[data-parallax]')
        parallaxElements.forEach((el) => {
          const speed = parseFloat((el as HTMLElement).dataset.parallax || '0')
          ;(el as HTMLElement).style.transform = `translateY(${scrollY * speed}px)`
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={heroRef} className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-base-100 via-base-100 to-base-200">
      {/* Decorative geometric elements */}
      <div className="absolute top-20 right-10 w-32 h-32 border-4 border-primary opacity-10 rotate-12 animate-parallax-float" data-parallax="0.1" />
      <div className="absolute bottom-32 left-10 w-24 h-24 bg-secondary opacity-5 -rotate-6 animate-parallax-float" data-parallax="-0.05" style={{ animationDelay: '1s' }} />

      <div className="max-w-6xl mx-auto relative">
        {/* Avatar with dramatic styling */}
        <div className="mb-12 flex justify-center animate-fade-in">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 blur-2xl animate-glow-pulse" />
            <div className="relative w-36 h-36 rounded-full border-4 border-primary p-1 layer-shadow-xl">
              <Image
                src="https://github.com/matsubo.png"
                alt="Yuki Matsukura profile picture"
                width={144}
                height={144}
                priority
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Hero text with asymmetric layout */}
        <div className="text-center space-y-6">
          <div className="space-y-2 animate-fade-in-up animation-delay-100">
            <h1 className="section-header text-6xl md:text-8xl text-base-content">
              Yuki <span className="text-shimmer">Matsukura</span>
            </h1>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <span className="code-accent text-primary text-lg md:text-xl font-semibold px-4 py-1 border-2 border-primary rounded">
                CTO
              </span>
              <span className="text-2xl text-accent">/</span>
              <span className="code-accent text-secondary text-lg md:text-xl font-semibold px-4 py-1 border-2 border-secondary rounded">
                Software Engineer
              </span>
            </div>
          </div>

          <p className="section-subtitle text-xl md:text-2xl text-base-content/80 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Building <span className="font-bold text-primary">scalable systems</span> and{' '}
            <span className="font-bold text-secondary">innovative solutions</span> for 20+ years
          </p>

          {/* Social Links with neo-brutalist styling */}
          <nav className="flex flex-wrap justify-center gap-4 mt-12 animate-fade-in-up animation-delay-300" data-parallax="0.05">
            <a
              href="https://github.com/matsubo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline border-2 transition-all duration-300 font-mono text-sm uppercase tracking-wider"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yukimatsukura/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-primary border-2 transition-all duration-300 font-mono text-sm uppercase tracking-wider btn-glow"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/matsubokkuri"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline border-2 transition-all duration-300 font-mono text-sm uppercase tracking-wider"
            >
              X (Twitter)
            </a>
            <a
              href="https://blog.teraren.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-secondary border-2 transition-all duration-300 font-mono text-sm uppercase tracking-wider gap-2"
            >
              <GlobeAltIcon className="w-5 h-5" />
              Blog
            </a>
            <a
              href="https://zenn.dev/matsubokkuri"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary border-2 border-secondary transition-all duration-300 font-mono text-sm uppercase tracking-wider btn-glow"
            >
              Zenn
            </a>
          </nav>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
    </section>
  )
}
