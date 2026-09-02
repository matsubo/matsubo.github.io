import { describe, expect, it } from 'vitest'
import en from '@/messages/locales/en/translation.json'
import ja from '@/messages/locales/ja/translation.json'

type Json = string | number | boolean | null | Json[] | { [key: string]: Json }

/** Flatten a dictionary into sorted "a.b.c" leaf paths (array indices included). */
function leafPaths(value: Json, prefix = ''): string[] {
  if (value === null || typeof value !== 'object') return [prefix]
  return Object.entries(value)
    .flatMap(([key, child]) => leafPaths(child, prefix ? `${prefix}.${key}` : key))
    .sort()
}

function emptyStrings(value: Json, prefix = ''): string[] {
  if (typeof value === 'string') return value.trim() === '' ? [prefix] : []
  if (value === null || typeof value !== 'object') return []
  const entries = Array.isArray(value) ? value.map((v, i) => [String(i), v] as const) : Object.entries(value)
  return entries.flatMap(([key, child]) => emptyStrings(child, prefix ? `${prefix}.${key}` : key))
}

describe('translation dictionaries', () => {
  it('ja defines exactly the same keys as en', () => {
    expect(leafPaths(ja)).toEqual(leafPaths(en))
  })

  it.each([
    ['en', en],
    ['ja', ja],
  ] as const)('%s has no empty strings', (_locale, dict) => {
    expect(emptyStrings(dict)).toEqual([])
  })
})
