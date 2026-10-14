import type { Block, ListItem, Section, Tone } from '../../types/protocol'

/** Small builders that keep the guideline transcription readable. */

export const p = (text: string, tone?: Tone): Block => (tone ? { type: 'text', text, tone } : { type: 'text', text })

const toItem = (i: string | ListItem): ListItem => (typeof i === 'string' ? { text: i } : i)

export const ul = (...items: (string | ListItem)[]): Block => ({ type: 'list', items: items.map(toItem) })

export const ol = (...items: (string | ListItem)[]): Block => ({ type: 'list', ordered: true, items: items.map(toItem) })

export const li = (text: string, ...sub: string[]): ListItem => ({ text, sub })

export const drug = (name: string, ...regimen: string[]): Block => ({ type: 'drug', name, regimen })

export const note = (text: string, title?: string): Block => ({ type: 'callout', tone: 'info', title, text })

export const warn = (text: string, title?: string): Block => ({ type: 'callout', tone: 'urgent', title, text })

export const danger = (text: string, title?: string): Block => ({ type: 'callout', tone: 'critical', title, text })

/** A titled box of bullet points, e.g. one branch of a flowchart. */
export const box = (tone: 'critical' | 'urgent' | 'info', title: string, ...items: string[]): Block => ({
  type: 'callout',
  tone,
  title,
  items,
})

export const table = (columns: string[], rows: string[][], title?: string): Block => ({
  type: 'table',
  title,
  columns,
  rows: rows.map((cells) => ({ cells })),
})

export const fig = (caption: string, page: number, note?: string): Block => ({ type: 'figure', caption, page, note })

export const refs = (...items: string[]): Block => ({ type: 'references', items })

/** Link to another section of the same guideline. */
export const see = (anchor: string, label: string, condition?: string): Block => ({ type: 'link', anchor, label, condition })

export interface Place {
  chapter: string
  subchapter?: string
}

export const sec = (
  place: Place,
  id: string,
  number: string | undefined,
  title: string,
  blocks: Block[],
  extra: { tone?: Tone; timeTarget?: string } = {},
): Section => ({ id, number, title, chapter: place.chapter, subchapter: place.subchapter, ...extra, blocks })
