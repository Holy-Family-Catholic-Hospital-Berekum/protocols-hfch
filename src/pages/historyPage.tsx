import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Archive, BadgeCheck, Loader2 } from 'lucide-react'
import { useProtocolList } from '../lib/protocolsContext'
import { getVersion, listVersions } from '../lib/protocols'
import { formatDate } from '../lib/format'
import { ProtocolView } from '../components/protocol/protocolView'
import { ProtocolHeader } from './protocolPage'
import type { ProtocolVersion } from '../types/protocol'

export function HistoryPage() {
  const { id } = useParams()
  const { protocols } = useProtocolList()
  const protocol = protocols.find((p) => p.id === id)
  const [versions, setVersions] = useState<ProtocolVersion[] | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!id) return
    listVersions(id)
      .then(setVersions)
      .catch(() => setError('Version history is not available offline or could not be loaded.'))
  }, [id])

  return (
    <div className="history">
      <Link to={`/p/${id}`} className="back">
        <ArrowLeft size={18} aria-hidden /> Back to protocol
      </Link>
      <h1>Version history</h1>
      {protocol && <p className="muted">{protocol.title}</p>}

      <ol className="timeline">
        {protocol && protocol.status === 'published' && (
          <li className="tl-item current">
            <div className="tl-dot" />
            <div className="tl-card glass">
              <div className="tl-top">
                <strong>{protocol.version}</strong>
                <span className="pill live">Current</span>
              </div>
              <div className="tl-meta">
                <BadgeCheck size={15} aria-hidden /> Verified by {protocol.verifiedBy} · {formatDate(protocol.verifiedAt)}
              </div>
              {protocol.changeNote && <p>{protocol.changeNote}</p>}
            </div>
          </li>
        )}
        {versions === null && !error && (
          <li className="center-pad">
            <Loader2 className="spin" size={24} aria-label="Loading" />
          </li>
        )}
        {versions?.map((v) => (
          <li key={v.id} className="tl-item">
            <div className="tl-dot" />
            <Link to={`/p/${id}/history/${v.id}`} className="tl-card glass">
              <div className="tl-top">
                <strong>{v.version}</strong>
                <span className="pill">Archived {formatDate(v.archivedAt)}</span>
              </div>
              <div className="tl-meta">
                <BadgeCheck size={15} aria-hidden /> Verified by {v.verifiedBy ?? '—'} · {formatDate(v.verifiedAt)}
              </div>
              {v.changeNote && <p>{v.changeNote}</p>}
            </Link>
          </li>
        ))}
        {versions?.length === 0 && <li className="muted tl-empty">No earlier versions.</li>}
      </ol>
      {error && <div className="notice">{error}</div>}
    </div>
  )
}

export function VersionPage() {
  const { id, versionId } = useParams()
  const { available } = useProtocolList()
  const [version, setVersion] = useState<ProtocolVersion | null | undefined>(undefined)

  useEffect(() => {
    if (!id || !versionId) return
    getVersion(id, versionId)
      .then(setVersion)
      .catch(() => setVersion(null))
  }, [id, versionId])

  if (version === undefined) {
    return (
      <div className="center-pad">
        <Loader2 className="spin" size={28} aria-label="Loading" />
      </div>
    )
  }
  if (version === null) return <div className="empty glass">This version could not be loaded.</div>

  return (
    <article className="protocol">
      <Link to={`/p/${id}/history`} className="back">
        <ArrowLeft size={18} aria-hidden /> Back to history
      </Link>
      <div className="draft-banner archived">
        <Archive size={20} aria-hidden />
        <div>
          <strong>Archived version: do not use for patient care.</strong>{' '}
          <Link to={`/p/${id}`}>Open the current version</Link>
        </div>
      </div>
      <ProtocolHeader content={version}>
        <div className="p-verified">
          <BadgeCheck size={18} aria-hidden /> Verified by {version.verifiedBy ?? '—'} · {formatDate(version.verifiedAt)}
        </div>
      </ProtocolHeader>
      <ProtocolView sections={version.sections} availableProtocols={available} />
    </article>
  )
}
