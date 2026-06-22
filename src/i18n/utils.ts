import en from '../messages/locales/en/translation.json'
import ja from '../messages/locales/ja/translation.json'

export const languages = { en: 'English', ja: '日本語' } as const
export type Locale = keyof typeof languages
export const locales = Object.keys(languages) as Locale[]
export const defaultLocale: Locale = 'en'

const dictionaries: Record<Locale, unknown> = { en, ja }

/**
 * Build-time translation accessor. Resolves a dotted key path against the
 * locale dictionary, falling back to the default locale, then to the key.
 */
export function useTranslations(locale: Locale) {
  const dict = dictionaries[locale] ?? dictionaries[defaultLocale]
  return function t(key: string): string {
    const value = key
      .split('.')
      .reduce<unknown>((obj, part) => (obj && typeof obj === 'object' ? (obj as Record<string, unknown>)[part] : undefined), dict)
    return typeof value === 'string' ? value : key
  }
}

/** Raw accessor for arrays/objects in the dictionary (e.g. feature lists). */
export function getMessages(locale: Locale): unknown {
  return dictionaries[locale] ?? dictionaries[defaultLocale]
}

/**
 * Prefix a root-relative path with the locale segment.
 * localizePath('/', 'ja') => '/ja/'; localizePath('/rails/', 'en') => '/rails/'
 */
export function localizePath(path: string, locale: Locale): string {
  const clean = path.startsWith('/') ? path : `/${path}`
  return locale === defaultLocale ? clean : `/${locale}${clean}`
}
