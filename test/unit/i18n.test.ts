import { describe, expect, it } from 'vitest'
import { defaultLocale, type Locale, locales, localizePath, useTranslations } from '@/i18n/utils'
import en from '@/messages/locales/en/translation.json'
import ja from '@/messages/locales/ja/translation.json'

describe('locales', () => {
  it('exposes en and ja with en as the default', () => {
    expect(locales).toEqual(['en', 'ja'])
    expect(defaultLocale).toBe('en')
  })
})

describe('useTranslations', () => {
  it('resolves a dotted key against the requested locale', () => {
    expect(useTranslations('en')('hero.role')).toBe(en.hero.role)
    expect(useTranslations('ja')('hero.role')).toBe(ja.hero.role)
    expect(en.hero.role).not.toBe(ja.hero.role)
  })

  it('returns the key itself when nothing matches', () => {
    expect(useTranslations('en')('does.not.exist')).toBe('does.not.exist')
  })

  it('returns the key when the value is not a string', () => {
    expect(useTranslations('en')('hero')).toBe('hero')
  })

  it('falls back to the default locale dictionary for an unknown locale', () => {
    const t = useTranslations('xx' as Locale)
    expect(t('hero.role')).toBe(en.hero.role)
  })

  it('exposes nested objects through raw()', () => {
    const t = useTranslations('en')
    expect(t.raw<typeof en.hero>('hero')).toEqual(en.hero)
    expect(t.raw('does.not.exist')).toBeUndefined()
  })
})

describe('localizePath', () => {
  it('leaves default-locale paths unprefixed', () => {
    expect(localizePath('/', 'en')).toBe('/')
    expect(localizePath('/rails/', 'en')).toBe('/rails/')
  })

  it('prefixes non-default locales', () => {
    expect(localizePath('/', 'ja')).toBe('/ja/')
    expect(localizePath('/rails/', 'ja')).toBe('/ja/rails/')
  })

  it('normalises a missing leading slash', () => {
    expect(localizePath('rails/', 'ja')).toBe('/ja/rails/')
    expect(localizePath('rails/', 'en')).toBe('/rails/')
  })
})
