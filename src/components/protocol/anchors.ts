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
    index.set(section.id, { label: `${si + 1}. ${section.title}` })
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

export function anchorDomId(id: string) {
  return `a-${id}`
}

export function scrollToAnchor(id: string) {
  const el = document.getElementById(anchorDomId(id))
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  el.classList.remove('flash')
  // Restart the highlight animation so the doctor sees where they landed.
  void el.offsetWidth
  el.classList.add('flash')
  window.setTimeout(() => el.classList.remove('flash'), 1800)
}
