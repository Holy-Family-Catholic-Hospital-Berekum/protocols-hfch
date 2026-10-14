import type { Block, Protocol, Section } from '../types/protocol'
import { stripRichText } from './richTextParse'
import { getCategory } from '../config/categories'

function blockText(block: Block): string[] {
  switch (block.type) {
    case 'text':
      return [block.text]
    case 'list':
      return block.items.flatMap((i) => [i.text, ...(i.sub ?? [])])
    case 'drug':
      return [block.name, ...block.regimen, block.note ?? '']
    case 'callout':
      return [block.title ?? '', block.text ?? '', ...(block.items ?? [])]
    case 'decision':
      return [block.question, block.detail ?? '', ...block.branches.map((b) => b.label)]
    case 'table':
      return [block.title ?? '', ...block.columns, ...block.rows.flatMap((r) => r.cells)]
    case 'link':
      return [block.label]
    case 'contacts':
      return [block.title]
    case 'flow':
      return block.nodes.flatMap((n) => [n.title, ...(n.items ?? [])])
    case 'figure':
      return [block.caption, block.note ?? '']
    case 'references':
      return []
  }
}

/** Plain lower-case text of one section, for searching inside a guideline. */
export function sectionText(section: Section): string {
  return stripRichText([section.number ?? '', section.title, ...section.blocks.flatMap(blockText)].join(' ')).toLowerCase()
}

const cache = new WeakMap<Protocol, { title: string; meta: string; body: string }>()

function indexOf(p: Protocol) {
  let entry = cache.get(p)
  if (!entry) {
    entry = {
      title: p.title.toLowerCase(),
      meta: [p.summary, getCategory(p.category).name, ...(p.keywords ?? [])].join(' ').toLowerCase(),
      body: stripRichText(
        (p.sections ?? []).flatMap((s) => [s.title, ...s.blocks.flatMap(blockText)]).join(' '),
      ).toLowerCase(),
    }
    cache.set(p, entry)
  }
  return entry
}

/** Every search term must match somewhere; title and keyword hits rank higher. */
export function searchProtocols(protocols: Protocol[], query: string): Protocol[] {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean)
  if (terms.length === 0) return protocols
  const scored: { p: Protocol; score: number }[] = []
  for (const p of protocols) {
    const idx = indexOf(p)
    let score = 0
    let all = true
    for (const t of terms) {
      if (idx.title.includes(t)) score += 10
      else if (idx.meta.includes(t)) score += 5
      else if (idx.body.includes(t)) score += 1
      else {
        all = false
        break
      }
    }
    if (all) scored.push({ p, score })
  }
  return scored.sort((a, b) => b.score - a.score).map((s) => s.p)
}
