import { tmpdir } from 'node:os'
import { describe, expect, it, vi } from 'vitest'
import { getLastUpdated, readHeadCommitDate, toIsoDate } from '@/lib/last-updated'

describe('toIsoDate', () => {
  it('keeps the calendar date of the original timezone', () => {
    expect(toIsoDate('2026-09-03T03:10:58+09:00')).toBe('2026-09-03')
  })

  it('rejects values that are not ISO-8601 timestamps', () => {
    expect(() => toIsoDate('yesterday')).toThrow(/ISO-8601/)
  })
})

describe('readHeadCommitDate', () => {
  it('returns the HEAD commit timestamp inside a git repository', () => {
    expect(readHeadCommitDate()).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(Z|[+-]\d{2}:\d{2})$/)
  })

  it('returns null outside a git repository', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    expect(readHeadCommitDate(tmpdir())).toBeNull()
    expect(warn).toHaveBeenCalledOnce()
    warn.mockRestore()
  })
})

describe('getLastUpdated', () => {
  it('prefers the git commit date', () => {
    const result = getLastUpdated({ gitDate: '2026-09-03T03:10:58+09:00', fallback: new Date('2030-01-01T00:00:00Z') })
    expect(result).toBe('2026-09-03')
  })

  it('falls back to the given date when git is unavailable', () => {
    expect(getLastUpdated({ gitDate: null, fallback: new Date('2030-01-01T12:00:00Z') })).toBe('2030-01-01')
  })
})
