'use client'

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Footer() {
  const t = useTranslations()
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isDark, setIsDark] = useState(false)
  const languages = ['en', 'ja']

  useEffect(() => {
    // Read the current theme
    const currentTheme = document.documentElement.getAttribute("data-theme")
    setIsDark(currentTheme === "dark")
  }, [])

  const handleLanguageChange = (lng: string) => {
    // Save to localStorage
    localStorage.setItem('preferred-locale', lng)

    // Dispatch custom event to trigger locale change
    const event = new CustomEvent('localeChange', { detail: { locale: lng } })
    window.dispatchEvent(event)
  }

  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme = e.target.checked ? "dark" : "light"
    document.documentElement.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)
    setIsDark(e.target.checked)
  }

  return (
  <footer className="relative bg-gradient-to-br from-base-300 via-base-200 to-base-300 text-base-content border-t border-base-300 overflow-hidden" role="contentinfo" aria-label="Site footer">
    {/* Decorative Background Elements */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full filter blur-3xl"></div>
    </div>

    <div className="relative max-w-7xl mx-auto px-6 py-16">
      {/* Main Footer Content */}
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        {/* Brand Section */}
        <div className="space-y-4">
          <Link href="/" className="inline-block">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
              {t("footer.brand.name")}
            </h3>
          </Link>
          <p className="text-base-content/70 text-sm leading-relaxed">
            {t("footer.brand.description")}
          </p>
          <div className="flex gap-3 pt-2">
            <a
              href="https://x.com/matsubokkuri"
              target="_blank"
              rel="noreferrer"
              className="btn btn-circle btn-sm btn-ghost hover:btn-primary hover:scale-110 transition-all duration-300"
              aria-label="X (Twitter)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://github.com/matsubo"
              target="_blank"
              rel="noreferrer"
              className="btn btn-circle btn-sm btn-ghost hover:btn-primary hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/yukimatsukura/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-circle btn-sm btn-ghost hover:btn-primary hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-base-content/90 flex items-center gap-2">
            <span className="inline-block w-1 h-6 bg-primary rounded-full"></span>
            {t("footer.links.title")}
          </h4>
          <nav className="flex flex-col space-y-3">
            <Link
              href="/ht/"
              className="text-base-content/70 hover:text-primary hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
            >
              <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </span>
              {t("footer.links.lab")}
            </Link>
            <Link
              href="/sfc/"
              className="text-base-content/70 hover:text-primary hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
            >
              <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </span>
              {t("footer.links.university")}
            </Link>
            <Link
              href="/rails/"
              className="text-base-content/70 hover:text-primary hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
            >
              <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </span>
              {t("footer.links.rails")}
            </Link>
          </nav>
        </div>

        {/* Theme & Settings */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-base-content/90 flex items-center gap-2">
            <span className="inline-block w-1 h-6 bg-secondary rounded-full"></span>
            {t("footer.preferences.title")}
          </h4>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-base-content/70">{t("footer.preferences.theme")}</span>
              <label className="swap swap-rotate btn btn-sm btn-ghost hover:btn-primary transition-all duration-300">
                <input
                  type="checkbox"
                  className="theme-controller"
                  value="dark"
                  checked={isDark}
                  onChange={handleThemeChange}
                />
                <svg
                  className="swap-off h-5 w-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
                <svg
                  className="swap-on h-5 w-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-base-content/70">{t("footer.preferences.language")}</span>
              <div className="flex gap-2">
                {languages.map(lng => (
                  <button
                    key={lng}
                    type="button"
                    onClick={() => handleLanguageChange(lng)}
                    className={`btn btn-sm transition-all duration-300 ${
                      locale === lng
                        ? "btn-primary"
                        : "btn-ghost hover:btn-primary"
                    }`}
                  >
                    {lng === "en" ? "EN" : "日本語"}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-8 mt-8 border-t border-base-content/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-base-content/60">
            © {new Date().getFullYear()} {t("footer.brand.name")}. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </div>
  </footer>
  )
}
