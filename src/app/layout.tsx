import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Yuki Matsukura - CTO & Software Engineer',
  description: 'Experienced CTO and Software Engineer with 20+ years building scalable systems',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
