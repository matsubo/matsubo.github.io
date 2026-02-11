import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Semantic color tokens that work with light/dark mode
        brand: {
          primary: 'oklch(var(--brand-primary) / <alpha-value>)',
          secondary: 'oklch(var(--brand-secondary) / <alpha-value>)',
          accent: 'oklch(var(--brand-accent) / <alpha-value>)',
        },
        surface: {
          base: 'oklch(var(--surface-base) / <alpha-value>)',
          elevated: 'oklch(var(--surface-elevated) / <alpha-value>)',
          overlay: 'oklch(var(--surface-overlay) / <alpha-value>)',
        },
        content: {
          primary: 'oklch(var(--content-primary) / <alpha-value>)',
          secondary: 'oklch(var(--content-secondary) / <alpha-value>)',
          tertiary: 'oklch(var(--content-tertiary) / <alpha-value>)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          'primary': '#00d9ff',
          'secondary': '#ff6b35',
          'accent': '#9fa4b8',
          'neutral': '#2d3142',
          'base-100': '#fef9f3',
          'base-200': '#f0e9e3',
          'base-300': '#e8e4dc',
          'info': '#00d9ff',
          'success': '#22c55e',
          'warning': '#f59e0b',
          'error': '#ef4444',
        },
        dark: {
          'primary': '#00d9ff',
          'secondary': '#ff6b35',
          'accent': '#9fa4b8',
          'neutral': '#9fa4b8',
          'base-100': '#1a1d29',
          'base-200': '#2d3142',
          'base-300': '#3d4252',
          'info': '#00d9ff',
          'success': '#22c55e',
          'warning': '#f59e0b',
          'error': '#ef4444',
        },
      },
    ],
  },
} as any

export default config
