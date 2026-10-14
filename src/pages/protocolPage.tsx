import { useState, type ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  BadgeCheck,
  EyeOff,
  FileText,
  History,
  Image as ImageIcon,
  Loader2,
  Pencil,
  ShieldCheck,
  TriangleAlert,
} from 'lucide-react'
import { useAuth } from '../auth/authContext'
import { useProtocolList } from '../lib/protocolsContext'
import { ProtocolView } from '../components/protocol/protocolView'
import { Timer } from '../components/timer'
import { VerifyDialog } from '../components/verifyDialog'
import { getCategory } from '../config/categories'
import { formatDate } from '../lib/format'
import { pickContent, unpublish, verifyAndPublish } from '../lib/protocols'
import type { Attachment, ProtocolContent } from '../types/protocol'

function AttachmentList({ attachments }: { attachments: Attachment[] }) {
  if (attachments.length === 0) return null
  return (
    <section className="docs glass">
      <h2 className="list-head">Documents</h2>
      {attachments.map((a) => (
        <a key={a.path} href={a.url} target="_blank" rel="noopener noreferrer" className="doc-row">
          {a.contentType.startsWith('image/') ? <ImageIcon size={20} aria-hidden /> : <FileText size={20} aria-hidden />}
          <span>{a.name}</span>
          {a.isOriginal && <span className="pill">Original</span>}
        </a>
      ))}
    </section>
  )
}

/** Header + body shared by the live page and archived-version view. */
export function ProtocolHeader({ content, children }: { content: ProtocolContent; children?: ReactNode }) {
  const cat = getCategory(content.category)
  const Icon = cat.icon
  return (
    <header className="p-header" style={{ ['--cat-a' as string]: cat.colors[0], ['--cat-b' as string]: cat.colors[1] }}>
      <div className="p-cat">
        <span className="p-cat-icon">
          <Icon size={16} aria-hidden />
        </span>
        {cat.name}
        <span className="p-version">{content.version}</span>
      </div>
      <h1>{content.title}</h1>
      {content.summary && <p className="p-summary">{content.summary}</p>}
      {children}
    </header>
  )
}

export function ProtocolPage() {
  const { id } = useParams()
  const { profile, user } = useAuth()
  const isAdmin = profile?.role === 'admin'
  const { protocols, loading, available } = useProtocolList()
  const [verifying, setVerifying] = useState(false)
  const [busy, setBusy] = useState(false)

  const protocol = protocols.find((p) => p.id === id)

  if (loading) {
    return (
      <div className="center-pad">
        <Loader2 size={28} className="spin" aria-label="Loading" />
      </div>
    )
  }

  if (!protocol) {
    return (
      <div className="empty glass">
        <p>This protocol is not available.</p>
        <Link to="/" className="btn ghost">
          Back to protocols
        </Link>
      </div>
    )
  }

  const original = protocol.attachments?.find((a) => a.isOriginal)
  const isDraft = protocol.status === 'draft'
  const hasStructured = (protocol.sections ?? []).length > 0
  const firstPdf = protocol.attachments?.find((a) => a.contentType === 'application/pdf')

  return (
    <article className="protocol">

      {isDraft && (
        <div className="draft-banner">
          <TriangleAlert size={20} aria-hidden />
          <div>
            <strong>Draft: not visible to staff.</strong> Check every step, dose and branch against the original before publishing.
          </div>
        </div>
      )}

      <ProtocolHeader content={protocol}>
        {!isDraft && (
          <div className="p-verified">
            <BadgeCheck size={18} aria-hidden />
            Verified by {protocol.verifiedBy} · {formatDate(protocol.verifiedAt)}
          </div>
        )}
        {!isDraft && protocol.changeNote && protocol.changedSections?.length > 0 && (
          <div className="p-change">
            <strong>What changed:</strong> {protocol.changeNote}
          </div>
        )}
        <div className="p-actions">
          {original && (
            <a className="btn ghost small" href={original.url} target="_blank" rel="noopener noreferrer">
              <FileText size={16} aria-hidden /> View original
            </a>
          )}
          <Link className="btn ghost small" to={`/p/${protocol.id}/history`}>
            <History size={16} aria-hidden /> History
          </Link>
          {isAdmin && (
            <Link className="btn ghost small" to={`/admin/protocols/${protocol.id}/edit`}>
              <Pencil size={16} aria-hidden /> Edit
            </Link>
          )}
          {isAdmin && isDraft && (
            <button type="button" className="btn primary small" onClick={() => setVerifying(true)}>
              <ShieldCheck size={16} aria-hidden /> Verify & publish
            </button>
          )}
          {isAdmin && !isDraft && (
            <button
              type="button"
              className="btn ghost small"
              disabled={busy}
              onClick={async () => {
                if (!user || !confirm('Unpublish this protocol? Staff will no longer see it.')) return
                setBusy(true)
                await unpublish(protocol.id, user.uid).finally(() => setBusy(false))
              }}
            >
              <EyeOff size={16} aria-hidden /> Unpublish
            </button>
          )}
        </div>
      </ProtocolHeader>

      {hasStructured ? (
        <ProtocolView sections={protocol.sections} changedSections={protocol.changedSections} availableProtocols={available} />
      ) : firstPdf ? (
        <div className="pdf-frame glass">
          <iframe src={firstPdf.url} title={protocol.title} />
          <a className="btn ghost small" href={firstPdf.url} target="_blank" rel="noopener noreferrer">
            Open PDF full screen
          </a>
        </div>
      ) : (
        <div className="empty glass">This protocol has no content yet.</div>
      )}

      <AttachmentList attachments={protocol.attachments ?? []} />


      <Timer protocolId={protocol.id} config={protocol.timer ?? { enabled: false }} />

      {verifying && user && (
        <VerifyDialog
          title={`${protocol.title} · ${protocol.version}`}
          isUpdate={false}
          onClose={() => setVerifying(false)}
          onConfirm={(v) => verifyAndPublish(protocol.id, pickContent(protocol), v, user.uid)}
        />
      )}
    </article>
  )
}
