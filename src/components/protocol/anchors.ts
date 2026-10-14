import type { Section } from '../../types/protocol'
import { stripRichText } from '../../lib/richTextParse'

export interface AnchorInfo {
  label: string
  /** Display number for flow nodes ("Step 3"). */
  step?: number
}

/** Builds human-readable labels for every jump target on a protocol page. */
export function buildAnchorIndex(sections: Section[]): Map<string, AnchorInfo> {
  const index = new Map<string, AnchorInfo>()
  sections.forEach((section, si) => {
    index.set(section.id, { label: `${section.number ?? `${si + 1}.`} ${section.title}` })
    for (const block of section.blocks) {
      if (block.type !== 'flow') continue
      let step = 0
      for (const node of block.nodes) {
        if (node.kind === 'check') {
          const after = step > 0 ? ` (after step ${step})` : ''
          index.set(node.id, { label: `${section.title}: ${stripRichText(node.title)}${after}` })
        } else {
          step++
          index.set(node.id, { label: `${section.title}: step ${step}`, step })
        }
      }
    }
  })
  return index
}

/** Maps every anchor (section ids and flow step ids) to the id of the section containing it. */
export function buildSectionOf(sections: Section[]): Map<string, string> {
  const map = new Map<string, string>()
  for (const s of sections) {
    map.set(s.id, s.id)
    for (const b of s.blocks) if (b.type === 'flow') b.nodes.forEach((n) => map.set(n.id, s.id))
  }
  return map
}

/** True when sections are grouped into chapters: long guidelines are shown as a handbook. */
export function isHandbook(sections: Section[] | undefined): boolean {
  return (sections ?? []).some((s) => !!s.chapter)
}

export function anchorDomId(id: string) {
  return `a-${id}`
}

/** Fired on window with the target id, so the contents bar can select the section jumped to. */
export const JUMP_EVENT = 'protocol:jump'

export function scrollToAnchor(id: string) {
  const el = document.getElementById(anchorDomId(id))
  if (!el) return
  window.dispatchEvent(new CustomEvent(JUMP_EVENT, { detail: id }))
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  el.classList.remove('flash')
  // Restart the highlight animation so the doctor sees where they landed.
  void el.offsetWidth
  el.classList.add('flash')
  window.setTimeout(() => el.classList.remove('flash'), 1800)
}
