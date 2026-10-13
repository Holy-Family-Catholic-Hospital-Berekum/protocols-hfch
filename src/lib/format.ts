import type { Timestamp } from 'firebase/firestore'

export function formatDate(ts: Timestamp | null | undefined): string {
  if (!ts) return '—'
  return ts.toDate().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

export function daysSince(ts: Timestamp | null | undefined): number {
  if (!ts) return Infinity
  return (Date.now() - ts.toMillis()) / 86_400_000
}
