import type { ListItem } from '../../../types/protocol'

/**
 * Plain-text formats used by the editor so lists can be typed naturally.
 *
 * List items:   one per line; "- " starts a sub-item of the line above; "[STAT] " marks STAT.
 * Tables:       cells separated by " | ", one row per line.
 */

export function linesToArray(text: string): string[] {
  return text
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
}

export function arrayToLines(items: string[] | undefined): string {
  return (items ?? []).join('\n')
}

const STAT = '[STAT]'

export function parseListItems(text: string): ListItem[] {
  const items: ListItem[] = []
  for (const raw of text.split('\n')) {
    const line = raw.trim()
    if (!line) continue
    if (line.startsWith('- ') && items.length > 0) {
      const last = items[items.length - 1]
      last.sub = [...(last.sub ?? []), line.slice(2).trim()]
      continue
    }
    const stat = line.toUpperCase().startsWith(STAT)
    const body = stat ? line.slice(STAT.length).trim() : line
    items.push(stat ? { text: body, stat: true } : { text: body })
  }
  return items
}

export function listItemsToText(items: ListItem[]): string {
  return items
    .flatMap((i) => [`${i.stat ? `${STAT} ` : ''}${i.text}`, ...(i.sub ?? []).map((s) => `- ${s}`)])
    .join('\n')
}

export function parseRows(text: string): string[][] {
  return text
    .split('\n')
    .filter((l) => l.trim())
    .map((l) => l.split('|').map((c) => c.trim()))
}

export function rowsToText(rows: string[][]): string {
  return rows.map((r) => r.join(' | ')).join('\n')
}

export function uniqueId(base: string, taken: Set<string>): string {
  const slug =
    base
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 32) || 'item'
  let id = slug
  let n = 2
  while (taken.has(id)) id = `${slug}-${n++}`
  return id
}
