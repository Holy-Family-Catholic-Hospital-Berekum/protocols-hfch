import { useCallback, useEffect, useMemo } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { ChevronLeft, ChevronRight, List, Loader2, TriangleAlert } from 'lucide-react'
import { useProtocolList } from '../lib/protocolsContext'
import { SectionCard } from '../components/protocol/protocolView'
import { buildAnchorIndex, buildSectionOf, scrollToAnchor } from '../components/protocol/anchors'
import { rememberLastSection, sectionPath } from '../components/protocol/handbookUtils'
import type { BlockContext } from '../components/protocol/blocks'
import { trackHandbookSectionView } from '../lib/analytics'

/** One section of a long guideline, with breadcrumb and previous/next navigation. */
export function HandbookSectionPage() {
  const { id = '', sectionId = '' } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const { protocols, loading, available } = useProtocolList()
  const protocol = protocols.find((p) => p.id === id)
  const sections = useMemo(() => protocol?.sections ?? [], [protocol])
  const index = sections.findIndex((s) => s.id === sectionId)
  const section = index >= 0 ? sections[index] : undefined
  const prev = index > 0 ? sections[index - 1] : undefined
  const next = index >= 0 && index < sections.length - 1 ? sections[index + 1] : undefined

  const anchors = useMemo(() => buildAnchorIndex(sections), [sections])
  const sectionOf = useMemo(() => buildSectionOf(sections), [sections])
  const original = protocol?.attachments?.find((a) => a.isOriginal)

  // Jumps within this section scroll; jumps elsewhere open that section and land on the target.
  const jump = useCallback(
    (anchorId: string) => {
      const target = sectionOf.get(anchorId)
      if (!target || target === sectionId) return scrollToAnchor(anchorId)
      navigate(sectionPath(id, target), { state: { anchor: anchorId === target ? undefined : anchorId } })
    },
    [sectionOf, sectionId, navigate, id],
  )

  const landingAnchor = (location.state as { anchor?: string } | null)?.anchor
  useEffect(() => {
    if (!section) return
    rememberLastSection(id, section.id)
    if (landingAnchor) {
      // Wait a frame so the new section is rendered before scrolling to the step.
      const t = window.setTimeout(() => scrollToAnchor(landingAnchor), 60)
      return () => window.clearTimeout(t)
    }
  }, [id, section, landingAnchor])

  const sectionTitle = section?.title ?? ''
  useEffect(() => {
    if (sectionTitle) trackHandbookSectionView(id, sectionId, sectionTitle)
  }, [id, sectionId, sectionTitle])

  if (loading) {
    return (
      <div className="center-pad">
        <Loader2 size={28} className="spin" aria-label="Loading" />
      </div>
    )
  }
  if (!protocol || !section) {
    return (
      <div className="empty glass">
        <p>This section is not available.</p>
        <Link to={protocol ? `/p/${id}` : '/'} className="btn ghost">
          {protocol ? 'Back to contents' : 'Back to protocols'}
        </Link>
      </div>
    )
  }

  const ctx: BlockContext = { anchors, availableProtocols: available, jump, originalUrl: original?.url }
  const crumbs = [section.chapter, section.subchapter].filter(Boolean) as string[]

  return (
    <article className="protocol hb-page">
      {protocol.status === 'draft' && (
        <div className="draft-banner">
          <TriangleAlert size={20} aria-hidden />
          <div>
            <strong>Draft: not visible to staff.</strong> Check every step and dose against the original before publishing.
          </div>
        </div>
      )}

      <nav className="hb-crumbs" aria-label="Location in guideline">
        <Link to={`/p/${id}`} className="hb-crumb-root">
          <List size={16} aria-hidden /> {protocol.title}
        </Link>
        {crumbs.map((c) => (
          <span key={c} className="hb-crumb">
            <ChevronRight size={14} aria-hidden /> {c}
          </span>
        ))}
      </nav>

      <SectionCard
        section={section}
        number={section.number ?? String(index + 1)}
        updated={protocol.changedSections?.includes(section.id) ?? false}
        ctx={ctx}
      />

      <nav className="hb-pager" aria-label="Previous and next section">
        {prev ? (
          <Link to={sectionPath(id, prev.id)} className="hb-pager-btn glass prev">
            <ChevronLeft size={20} aria-hidden />
            <span>
              <span className="muted small">Previous</span>
              <strong>
                {prev.number ? `${prev.number} ` : ''}
                {prev.title}
              </strong>
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={sectionPath(id, next.id)} className="hb-pager-btn glass next">
            <span>
              <span className="muted small">Next</span>
              <strong>
                {next.number ? `${next.number} ` : ''}
                {next.title}
              </strong>
            </span>
            <ChevronRight size={20} aria-hidden />
          </Link>
        ) : (
          <span />
        )}
      </nav>

      <Link to={`/p/${id}`} className="btn ghost block hb-contents-btn">
        <List size={18} aria-hidden /> All contents
      </Link>
    </article>
  )
}
