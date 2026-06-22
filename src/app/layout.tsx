import './globals.css'
import type { Metadata } from 'next'
import { Fraunces, Hanken_Grotesk } from 'next/font/google'

// Display serif with optical character — used for the name and section headings.
const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

// Refined grotesk for body and UI.
const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-hanken',
  display: 'swap',
})

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="editorial" className={`${fraunces.variable} ${hanken.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M2JT5C2T');
            `,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M2JT5C2T"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
