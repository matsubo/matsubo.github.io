import { describe, it, expect, beforeAll } from 'vitest'
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')

// Every route the site is expected to publish, as a clean URL path.
// Tutorials are English-only; the home page exists in both locales.
const EXPECTED_ROUTES = [
  '/',
  '/ja/',
  '/ht/',
  '/rails/',
  '/rails/win/',
  '/rails/mac/',
  '/rails/mac/10_8/',
  '/rails/mac/10_9/',
  '/rails/mac/10_9/aptana/',
  '/rails/mac/10_9/aptana_check/',
  '/rails/mac/10_9/command_line_tools/',
  '/rails/mac/10_9/homebrew/',
  '/rails/mac/10_9/java/',
  '/rails/mac/10_9/rbenv/',
  '/rails/mac/10_9/ror/',
  '/rails/mac/10_9/ruby/',
  '/sfc/',
  '/sfc/documents/time_table_2001_9/',
  '/sfc/documents/time_table_2002_4/',
  '/sfc/documents/time_table_2002_9/',
  '/sfc/documents/time_table_2003_4/',
  '/sfc/documents/time_table_2003_9/',
  '/sfc/documents/time_table_2004_4/',
]

beforeAll(() => {
  if (!existsSync(dist)) {
    throw new Error('dist/ not found — run `bun run build` before the tests (or use `bun run test`).')
  }
})

/** Resolve a site-absolute URL path to the file that should serve it in dist/. */
function resolveToFile(urlPath: string): string | null {
  const clean = urlPath.split(/[?#]/)[0]
  const rel = clean.replace(/^\//, '')
  if (clean.endsWith('/') || clean === '') {
    return path.join(dist, rel, 'index.html')
  }
  const last = rel.split('/').pop() ?? ''
  if (last.includes('.')) {
    return path.join(dist, rel) // a file with an extension
  }
  // extension-less, no trailing slash: could be a directory index or a .html file
  const asDir = path.join(dist, rel, 'index.html')
  const asHtml = path.join(dist, `${rel}.html`)
  return existsSync(asDir) ? asDir : asHtml
}

function walkHtml(dir: string, acc: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry)
    const st = statSync(full)
    if (st.isDirectory()) walkHtml(full, acc)
    else if (entry.endsWith('.html')) acc.push(full)
  }
  return acc
}

describe('expected pages exist in the build', () => {
  it.each(EXPECTED_ROUTES)('%s is published', (route) => {
    const file = path.join(dist, route.replace(/^\//, ''), 'index.html')
    expect(existsSync(file), `missing built page for ${route} (expected ${path.relative(root, file)})`).toBe(true)
  })
})

describe('internal links and assets resolve to a built file', () => {
  const htmlFiles = existsSync(dist) ? walkHtml(dist) : []

  // Collect every internal href/src reference across the built HTML.
  const refs = new Map<string, string>() // target -> first source file that uses it
  for (const file of htmlFiles) {
    const html = readFileSync(file, 'utf8')
    for (const m of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
      const target = m[1]
      if (target.startsWith('//')) continue // protocol-relative external URL, not internal
      if (!refs.has(target)) refs.set(target, path.relative(dist, file))
    }
  }

  const targets = [...refs.keys()].sort()

  it('found a non-trivial number of internal references', () => {
    expect(targets.length).toBeGreaterThan(20)
  })

  it.each(targets)('%s resolves', (target) => {
    const file = resolveToFile(target)
    expect(file && existsSync(file), `broken internal link ${target} (referenced by ${refs.get(target)})`).toBe(true)
  })
})
