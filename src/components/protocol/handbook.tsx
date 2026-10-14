import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { BookMarked, ChevronDown, ChevronRight, Search, X } from 'lucide-react'
import type { Section } from '../../types/protocol'
import { sectionText } from '../../lib/search'
import { groupSections, lastSection, sectionPath } from './handbookUtils'

function SectionLink({ protocolId, section }: { protocolId: string; section: Section }) {
  return (
    <Link to={sectionPath(protocolId, section.id)} className={`hb-link tone-${section.tone ?? 'neutral'}`}>
      {section.number && <span className="hb-num">{section.number}</span>}
      <span className="hb-title">{section.title}</span>
      <ChevronRight size={18} className="hb-chevron" aria-hidden />
    </Link>
  )
}

/** Table of contents for long guidelines: expandable chapters plus search inside the guideline. */
export function HandbookContents({ protocolId, sections }: { protocolId: string; sections: Section[] }) {
  const chapters = useMemo(() => groupSections(sections), [sections])
  const [open, setOpen] = useState<Set<string>>(() => new Set())
  const [query, setQuery] = useState('')
  const last = useMemo(() => {
    const id = lastSection(protocolId)
    return id ? sections.find((s) => s.id === id) : undefined
  }, [protocolId, sections])

  const results = useMemo(() => {
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean)
    if (terms.length === 0) return null
    return sections.filter((s) => {
      const text = sectionText(s)
      return terms.every((t) => text.includes(t))
    })
  }, [query, sections])

  const toggle = (title: string) =>
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(title)) next.delete(title)
      else next.add(title)
      return next
    })

  return (
    <div className="handbook">
      <div className="search glass hb-search">
        <Search size={20} aria-hidden />
        <input
          type="search"
          placeholder="Search this guideline (e.g. appendicitis, burns, insulin)…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search this guideline"
        />
        {query && (
          <button type="button" className="icon-btn" onClick={() => setQuery('')} aria-label="Clear search">
            <X size={18} />
          </button>
        )}
      </div>

      {results ? (
        <div className="hb-results">
          <div className="list-head">
            {results.length} section{results.length === 1 ? '' : 's'} found
          </div>
          {results.length === 0 ? (
            <div className="empty glass">Nothing in this guideline matches “{query.trim()}”.</div>
          ) : (
            <div className="hb-list glass">
              {results.map((s) => (
                <SectionLink key={s.id} protocolId={protocolId} section={s} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <>
          {last && (
            <Link to={sectionPath(protocolId, last.id)} className="hb-continue glass">
              <BookMarked size={20} aria-hidden />
              <span>
                <span className="muted small">Continue reading</span>
                <strong>
                  {last.number ? `${last.number} ` : ''}
                  {last.title}
                </strong>
              </span>
              <ChevronRight size={18} aria-hidden />
            </Link>
          )}

          <div className="list-head">Contents</div>
          <div className="hb-chapters">
            {chapters.map((ch) => {
              const isOpen = open.has(ch.title)
              // A chapter with a single section opens that section directly.
              if (ch.count === 1) {
                const only = ch.subchapters[0].sections[0]
                return (
                  <Link key={ch.title} to={sectionPath(protocolId, only.id)} className="hb-chapter glass hb-chapter-single">
                    <span className="hb-chapter-title">{ch.title}</span>
                    <ChevronRight size={20} aria-hidden />
                  </Link>
                )
              }
              return (
                <div key={ch.title} className={`hb-chapter glass ${isOpen ? 'open' : ''}`}>
                  <button type="button" className="hb-chapter-head" onClick={() => toggle(ch.title)} aria-expanded={isOpen}>
                    <span className="hb-chapter-title">{ch.title}</span>
                    <span className="hb-count">{ch.count}</span>
                    <ChevronDown size={20} className="hb-caret" aria-hidden />
                  </button>
                  {isOpen && (
                    <div className="hb-chapter-body">
                      {ch.subchapters.map((sub, i) => (
                        <div key={sub.title ?? `_${i}`} className="hb-sub">
                          {sub.title && <div className="hb-sub-title">{sub.title}</div>}
                          <div className="hb-list">
                            {sub.sections.map((s) => (
                              <SectionLink key={s.id} protocolId={protocolId} section={s} />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
