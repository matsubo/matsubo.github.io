import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import icon from 'astro-icon'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://matsubo.github.io',
  // Match the previous Next.js export (trailingSlash: true) so existing URLs are preserved.
  trailingSlash: 'always',
  build: { format: 'directory' },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [icon(), sitemap()],
  vite: { plugins: [tailwindcss()] },
})
