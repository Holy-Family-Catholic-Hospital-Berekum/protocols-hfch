import { useEffect, useMemo, useRef, useState, type RefObject } from 'react'
import { Clock, Sparkles } from 'lucide-react'
import type { Section } from '../../types/protocol'
import { BlockView, type BlockContext } from './blocks'
import { JUMP_EVENT, anchorDomId, buildAnchorIndex, buildSectionOf, scrollToAnchor } from './anchors'

interface Props {
  sections: Section[]
  changedSections?: string[]
  availableProtocols: Map<string, string>
  originalUrl?: string
}

/**
 * Tracks the section being read: the last section whose top has scrolled up to just below the
 * contents bar. After a jump (contents chip or branch button) the target stays selected until the
 * reader touches/scrolls again, so short sections at the end of the page still highlight correctly.
 */
function useActiveSection(sections: Section[], navRef: RefObject<HTMLElement | null>) {
  const ids = useMemo(() => sections.map((s) => s.id), [sections])
  const [active, setActive] = useState(ids[0] ?? '')
  const pinned = useRef<string | null>(null)

  // Flow steps live inside sections; a jump to a step selects its section.
  const sectionOf = useMemo(() => buildSectionOf(sections), [sections])

  useEffect(() => {
    let frame = 0
    const compute = () => {
      frame = 0
      if (pinned.current) return setActive(pinned.current)
      const sidebar = window.matchMedia('(min-width: 1000px)').matches
      const edge = sidebar
        ? (document.querySelector('.topbar')?.getBoundingClientRect().bottom ?? 60)
        : (navRef.current?.getBoundingClientRect().bottom ?? 120)
      const line = edge + 24
      let current = ids[0] ?? ''
      for (const id of ids) {
        const el = document.getElementById(anchorDomId(id))
        if (!el) continue
        if (el.getBoundingClientRect().top <= line) current = id
        else break
      }
      setActive(current)
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(compute)
    }
    const release = () => {
      pinned.current = null
    }
    const onJump = (e: Event) => {
      const section = sectionOf.get((e as CustomEvent<string>).detail)
      if (!section) return
      pinned.current = section
      setActive(section)
    }

    compute()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    window.addEventListener(JUMP_EVENT, onJump)
    // Any manual interaction hands control back to scroll tracking.
    for (const t of ['touchstart', 'wheel', 'keydown', 'mousedown'] as const) window.addEventListener(t, release, { passive: true })
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      window.removeEventListener(JUMP_EVENT, onJump)
      for (const t of ['touchstart', 'wheel', 'keydown', 'mousedown'] as const) window.removeEventListener(t, release)
    }
  }, [ids, sectionOf, navRef])

  return active
}

/** One section with its header and blocks. Shared by the single-page and handbook layouts. */
export function SectionCard({
  section,
  number,
  updated,
  ctx,
}: {
  section: Section
  number: string
  updated: boolean
  ctx: BlockContext
}) {
  return (
    <section id={anchorDomId(section.id)} data-section={section.id} className={`section tone-${section.tone ?? 'neutral'}`}>
      <header className="section-head">
        <span className="section-num">{number}</span>
        <h2>{section.title}</h2>
        <div className="section-badges">
          {section.timeTarget && (
            <span className="badge time">
              <Clock size={14} aria-hidden /> {section.timeTarget}
            </span>
          )}
          {updated && (
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
  )
}

export function ProtocolView({ sections, changedSections = [], availableProtocols, originalUrl }: Props) {
  const anchors = useMemo(() => buildAnchorIndex(sections), [sections])
  const navRef = useRef<HTMLElement>(null)
  const active = useActiveSection(sections, navRef)
  const tocRef = useRef<HTMLDivElement>(null)
  const ctx: BlockContext = { anchors, availableProtocols, jump: scrollToAnchor, originalUrl }

  // Keep the active chip visible in the horizontal contents bar. Only the bar itself is scrolled:
  // scrollIntoView() would also scroll the page and, with the sticky bar, yank the reader back down.
  useEffect(() => {
    const bar = tocRef.current
    const chip = bar?.querySelector<HTMLElement>(`[data-toc="${active}"]`)
    if (!bar || !chip || bar.scrollWidth <= bar.clientWidth) return
    const left = chip.offsetLeft - bar.offsetLeft - (bar.clientWidth - chip.clientWidth) / 2
    bar.scrollTo({ left, behavior: 'smooth' })
  }, [active])

  return (
    <div className="protocol-layout">
      <nav className="toc" aria-label="Contents" ref={navRef}>
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
          <SectionCard
            key={section.id}
            section={section}
            number={String(i + 1)}
            updated={changedSections.includes(section.id)}
            ctx={ctx}
          />
        ))}
      </div>
    </div>
  )
}
