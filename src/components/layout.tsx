'use client'

import Footer from "./footer"
import SkipLink from "./skip-link"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col">
      <SkipLink />
      <main id="main-content" className="flex-grow" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
