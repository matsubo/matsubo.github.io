#!/usr/bin/env bun
/**
 * Fetches latest articles from Zenn and blog RSS feeds and writes
 * src/data/publications.json (featured + latest). Runs as `prebuild`.
 * Never fails the build: on fetch error the existing JSON is kept.
 */

type Source = 'zenn' | 'blog'

interface Publication {
  title: string
  url: string
  source: Source
  date: string
}

interface PublicationsData {
  generatedAt: string
  featured: Publication[]
  latest: Publication[]
}

const FEEDS: Array<{ source: Source; url: string }> = [
  { source: 'zenn', url: 'https://zenn.dev/matsubokkuri/feed' },
  { source: 'blog', url: 'https://blog.teraren.com/rss.xml' },
]

const LATEST_PER_SOURCE = 4

// Hand-picked notable articles. Title/date are refreshed from the feed
// when the article is still present there; otherwise these values are used.
const FEATURED: Publication[] = [
  {
    title: '🏔️ 17万9千座の山頂データをサブ10msで検索できるPWAをClaude Codeだけで作った話',
    url: 'https://zenn.dev/matsubokkuri/articles/sota-peak-finder',
    source: 'zenn',
    date: '2026-02-26',
  },
  {
    title: 'Vercel月額$42→自宅サーバ月額$0。Coolifyで個人サービス基盤を作った話',
    url: 'https://zenn.dev/matsubokkuri/articles/2026-03-13-coolify-why-self-hosted-paas',
    source: 'zenn',
    date: '2026-03-16',
  },
  {
    title: '19年運用したWordPress 661記事をAstro + Cloudflare Pagesへ移行した手順と技術的ポイント',
    url: 'https://zenn.dev/matsubokkuri/articles/2026-03-10-wordpress-to-astro-migration',
    source: 'zenn',
    date: '2026-03-16',
  },
  {
    title: 'Claude Opus 4.6 + ブラウザ自動操作で2025年確定申告：CSV解析・仕訳生成・MoneyForward入力・e-Tax送信',
    url: 'https://blog.teraren.com/posts/tax-return-with-ai-agent-2025/',
    source: 'blog',
    date: '2026-03-17',
  },
]

const OUTPUT_PATH = new URL('../src/data/publications.json', import.meta.url).pathname

function parseFeed(xml: string, source: Source): Publication[] {
  return xml
    .split('<item>')
    .slice(1)
    .flatMap(item => {
      const title =
        item.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/)?.[1] ??
        item.match(/<title>([\s\S]*?)<\/title>/)?.[1]
      const url = item.match(/<link>([\s\S]*?)<\/link>/)?.[1]
      const pubDate = item.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1]
      if (!title || !url || !pubDate) return []

      const parsed = new Date(pubDate)
      if (Number.isNaN(parsed.getTime())) return []

      return [
        {
          title: title.trim(),
          url: url.trim(),
          source,
          date: parsed.toISOString().slice(0, 10),
        },
      ]
    })
}

async function fetchFeed(feed: { source: Source; url: string }): Promise<Publication[]> {
  const response = await fetch(feed.url, { redirect: 'follow' })
  if (!response.ok) {
    throw new Error(`${feed.url} responded ${response.status}`)
  }
  return parseFeed(await response.text(), feed.source)
}

function byDateDesc(a: Publication, b: Publication): number {
  return b.date.localeCompare(a.date)
}

function buildData(allItems: Publication[]): PublicationsData {
  const byUrl = new Map(allItems.map(item => [item.url, item]))
  const featured = FEATURED.map(entry => byUrl.get(entry.url) ?? entry)
  const featuredUrls = new Set(featured.map(entry => entry.url))

  const seenTitles = new Set(featured.map(entry => entry.title))
  const latest = FEEDS.flatMap(feed => {
    const candidates = allItems
      .filter(item => item.source === feed.source && !featuredUrls.has(item.url))
      .sort(byDateDesc)

    const picked: Publication[] = []
    for (const item of candidates) {
      if (picked.length >= LATEST_PER_SOURCE) break
      if (seenTitles.has(item.title)) continue // skip cross-posted duplicates
      seenTitles.add(item.title)
      picked.push(item)
    }
    return picked
  }).sort(byDateDesc)

  return { generatedAt: new Date().toISOString(), featured, latest }
}

async function main() {
  try {
    const results = await Promise.all(FEEDS.map(fetchFeed))
    const data = buildData(results.flat())
    await Bun.write(OUTPUT_PATH, `${JSON.stringify(data, null, 2)}\n`)
    console.log(
      `publications.json updated: ${data.featured.length} featured, ${data.latest.length} latest`
    )
  } catch (error) {
    const existing = await Bun.file(OUTPUT_PATH).exists()
    console.warn(`WARN: feed fetch failed (${String(error)})`)
    if (existing) {
      console.warn('WARN: keeping existing publications.json')
      return
    }
    // First run without network: fall back to the hardcoded featured list.
    const fallback: PublicationsData = {
      generatedAt: new Date().toISOString(),
      featured: FEATURED,
      latest: [],
    }
    await Bun.write(OUTPUT_PATH, `${JSON.stringify(fallback, null, 2)}\n`)
    console.warn('WARN: wrote fallback publications.json (featured only)')
  }
}

await main()
