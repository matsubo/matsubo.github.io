import en from '../messages/locales/en/translation.json'
import ja from '../messages/locales/ja/translation.json'

export const languages = { en: 'English', ja: '日本語' } as const
export type Locale = keyof typeof languages
export const locales = Object.keys(languages) as Locale[]
export const defaultLocale: Locale = 'en'

const dictionaries: Record<Locale, unknown> = { en, ja }

function resolve(dict: unknown, key: string): unknown {
  return key
    .split('.')
    .reduce<unknown>((obj, part) => (obj && typeof obj === 'object' ? (obj as Record<string, unknown>)[part] : undefined), dict)
}

export interface Translator {
  (key: string): string
  /** Raw accessor for arrays/objects in the dictionary (e.g. feature lists). */
  raw<T = unknown>(key: string): T
}

/**
 * Build-time translation accessor. Resolves a dotted key path against the
 * locale dictionary, falling back to the default locale, then to the key.
 */
export function useTranslations(locale: Locale): Translator {
  const dict = dictionaries[locale] ?? dictionaries[defaultLocale]
  const t = ((key: string) => {
    const value = resolve(dict, key)
    return typeof value === 'string' ? value : key
  }) as Translator
  t.raw = <T = unknown>(key: string) => resolve(dict, key) as T
  return t
}

/**
 * Prefix a root-relative path with the locale segment.
 * localizePath('/', 'ja') => '/ja/'; localizePath('/rails/', 'en') => '/rails/'
 */
export function localizePath(path: string, locale: Locale): string {
  const clean = path.startsWith('/') ? path : `/${path}`
  return locale === defaultLocale ? clean : `/${locale}${clean}`
}
