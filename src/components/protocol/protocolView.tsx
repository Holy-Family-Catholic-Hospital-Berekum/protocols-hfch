import { useEffect, useMemo, useRef, useState } from 'react'
import { Clock, Sparkles } from 'lucide-react'
import type { Section } from '../../types/protocol'
import { BlockView, type BlockContext } from './blocks'
import { anchorDomId, buildAnchorIndex, scrollToAnchor } from './anchors'

interface Props {
  sections: Section[]
  changedSections?: string[]
  availableProtocols: Map<string, string>
}

/** Tracks which section is currently in view for the contents bar. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? '')
  useEffect(() => {
    const visible = new Map<string, number>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const id = e.target.getAttribute('data-section') ?? ''
          if (e.isIntersecting) visible.set(id, e.boundingClientRect.top)
          else visible.delete(id)
        }
        const first = ids.find((id) => visible.has(id))
        if (first) setActive(first)
      },
      { rootMargin: '-140px 0px -55% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(anchorDomId(id))
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])
  return active
}

export function ProtocolView({ sections, changedSections = [], availableProtocols }: Props) {
  const anchors = useMemo(() => buildAnchorIndex(sections), [sections])
  const ids = useMemo(() => sections.map((s) => s.id), [sections])
  const active = useActiveSection(ids)
  const tocRef = useRef<HTMLDivElement>(null)
  const ctx: BlockContext = { anchors, availableProtocols }

  // Keep the active chip visible in the horizontal contents bar.
  useEffect(() => {
    const chip = tocRef.current?.querySelector<HTMLElement>(`[data-toc="${active}"]`)
    chip?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' })
  }, [active])

  return (
    <div className="protocol-layout">
      <nav className="toc" aria-label="Contents">
        <div className="toc-title">Contents</div>
        <div className="toc-items" ref={tocRef}>
          {sections.map((s, i) => (
            <button
              key={s.id}
              type="button"
              data-toc={s.id}
              className={`toc-item tone-${s.tone ?? 'neutral'} ${active === s.id ? 'active' : ''}`}
              onClick={() => scrollToAnchor(s.id)}
            >
              <span className="toc-num">{i + 1}</span>
              <span className="toc-label">{s.title}</span>
            </button>
          ))}
        </div>
      </nav>

      <div className="sections">
        {sections.map((section, i) => (
          <section
            key={section.id}
            id={anchorDomId(section.id)}
            data-section={section.id}
            className={`section tone-${section.tone ?? 'neutral'}`}
          >
            <header className="section-head">
              <span className="section-num">{i + 1}</span>
              <h2>{section.title}</h2>
              <div className="section-badges">
                {section.timeTarget && (
                  <span className="badge time">
                    <Clock size={14} aria-hidden /> {section.timeTarget}
                  </span>
                )}
                {changedSections.includes(section.id) && (
                  <span className="badge updated">
                    <Sparkles size={14} aria-hidden /> Updated
                  </span>
                )}
              </div>
            </header>
            <div className="section-body">
              {section.blocks.map((block, j) => (
                <BlockView key={j} block={block} ctx={ctx} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
