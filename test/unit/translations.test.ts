import { readdirSync, readFileSync, statSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const localesDir = path.join(root, 'src', 'messages', 'locales')
// Everything that ends up in the published site: components, copy, and static files.
const scanDirs = [path.join(root, 'src'), path.join(root, 'public')]

// Hosts that no longer serve content. diary.teraren.com was merged into
// blog.teraren.com in 2026; its index pages 404 and post URLs only survive
// through redirects, so links must point at the canonical host.
const RETIRED_HOSTS = ['diary.teraren.com']

function readJson(file: string): unknown {
  return JSON.parse(readFileSync(file, 'utf8'))
}

/**
 * Flatten a nested value into dotted key paths. Array indices become path
 * segments on purpose: en and ja lists must have the same length, otherwise
 * a component would render one locale with a missing card.
 */
function keyPaths(value: unknown, prefix = ''): string[] {
  if (value === null || typeof value !== 'object') return [prefix]
  const entries = Object.entries(value as Record<string, unknown>)
  if (entries.length === 0) return [prefix] // keep empty objects/arrays visible
  return entries.flatMap(([k, v]) => keyPaths(v, prefix ? `${prefix}.${k}` : k))
}

/** Dotted paths of every string value that is empty or whitespace-only. */
function emptyStrings(value: unknown, prefix = ''): string[] {
  if (typeof value === 'string') return value.trim() === '' ? [prefix] : []
  if (value === null || typeof value !== 'object') return []
  return Object.entries(value as Record<string, unknown>).flatMap(([k, v]) =>
    emptyStrings(v, prefix ? `${prefix}.${k}` : k),
  )
}

function walk(dir: string, acc: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry)
    if (statSync(full).isDirectory()) walk(full, acc)
    else if (/\.(astro|ts|json|css|md|mdx|txt|xml|html)$/.test(entry)) acc.push(full)
  }
  return acc
}

describe('locale dictionaries', () => {
  const en = readJson(path.join(localesDir, 'en', 'translation.json'))
  const ja = readJson(path.join(localesDir, 'ja', 'translation.json'))

  it('en and ja expose the same key paths', () => {
    const enKeys = new Set(keyPaths(en))
    const jaKeys = new Set(keyPaths(ja))
    const missingInJa = [...enKeys].filter(k => !jaKeys.has(k)).sort()
    const missingInEn = [...jaKeys].filter(k => !enKeys.has(k)).sort()
    expect(missingInJa, 'keys present in en but missing in ja').toEqual([])
    expect(missingInEn, 'keys present in ja but missing in en').toEqual([])
  })

  it.each([
    ['en', en],
    ['ja', ja],
  ])('%s has no empty strings', (_locale, dict) => {
    expect(emptyStrings(dict)).toEqual([])
  })
})

describe('outbound links', () => {
  const files = scanDirs.flatMap(dir => walk(dir))

  it.each(RETIRED_HOSTS)('no link points at retired host %s', host => {
    const offenders = files
      .filter(file => readFileSync(file, 'utf8').includes(host))
      .map(file => path.relative(root, file))
    expect(offenders, `files still referencing ${host}`).toEqual([])
  })
})
