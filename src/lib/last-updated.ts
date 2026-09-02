import { execFileSync } from 'node:child_process'

const ISO_DATE_TIME = /^(\d{4}-\d{2}-\d{2})T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/

/** Calendar date (YYYY-MM-DD) of an ISO-8601 timestamp, kept in the timestamp's own timezone. */
export function toIsoDate(isoDateTime: string): string {
  const date = ISO_DATE_TIME.exec(isoDateTime.trim())?.[1]
  if (!date) throw new Error(`Expected an ISO-8601 timestamp, got "${isoDateTime}"`)
  return date
}

/** Committer date of HEAD as an ISO-8601 string, or null when git is unavailable. */
export function readHeadCommitDate(cwd: string = process.cwd()): string | null {
  try {
    return execFileSync('git', ['log', '-1', '--format=%cI'], {
      cwd,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim()
  } catch (error) {
    console.warn('last-updated: git commit date unavailable, falling back to build time', error)
    return null
  }
}

interface LastUpdatedOptions {
  /** ISO-8601 timestamp of the last content change; null when unknown. */
  gitDate?: string | null
  /** Used when no git date is available (defaults to build time). */
  fallback?: Date
}

/** Date to show as "last updated", as YYYY-MM-DD. Resolved once per build. */
export function getLastUpdated({
  gitDate = readHeadCommitDate(),
  fallback = new Date(),
}: LastUpdatedOptions = {}): string {
  return toIsoDate(gitDate ?? fallback.toISOString())
}
