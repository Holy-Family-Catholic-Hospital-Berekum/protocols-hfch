import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  ArrowDown,
  ArrowLeft,
  ArrowUp,
  ChevronDown,
  ChevronRight,
  Eye,
  FileUp,
  Loader2,
  Plus,
  Save,
  ShieldCheck,
  Star,
  Trash2,
} from 'lucide-react'
import { useAuth } from '../../../auth/authContext'
import { useProtocolList } from '../../../lib/protocolsContext'
import {
  ALLOWED_UPLOAD_TYPES,
  deleteProtocol,
  emptyProtocol,
  pickContent,
  removeAttachmentFile,
  saveDraft,
  slugify,
  uploadAttachment,
  verifyAndPublish,
} from '../../../lib/protocols'
import { CATEGORIES, getCategory } from '../../../config/categories'
import { buildAnchorIndex } from '../../../components/protocol/anchors'
import { ProtocolView } from '../../../components/protocol/protocolView'
import { VerifyDialog } from '../../../components/verifyDialog'
import { ProtocolHeader } from '../../protocolPage'
import type { Block, ProtocolContent, Section, Tone } from '../../../types/protocol'
import { BlockEditor, type EditorEnv } from './blockEditor'
import { BLOCK_TYPES } from './blockTypes'
import { uniqueId } from './lines'

type Tab = 'details' | 'content' | 'files' | 'preview'

const BLOCK_LABEL = Object.fromEntries(BLOCK_TYPES.map((b) => [b.type, b.label]))

function collectIds(sections: Section[]): Set<string> {
  const ids = new Set<string>()
  for (const s of sections) {
    ids.add(s.id)
    for (const b of s.blocks) if (b.type === 'flow') b.nodes.forEach((n) => ids.add(n.id))
  }
  return ids
}

function SectionEditor({
  section,
  index,
  count,
  env,
  onChange,
  onMove,
  onDelete,
}: {
  section: Section
  index: number
  count: number
  env: EditorEnv
  onChange: (s: Section) => void
  onMove: (d: number) => void
  onDelete: () => void
}) {
  const [open, setOpen] = useState(true)
  // Bumped on reorder/delete so text areas re-initialise from the new block order.
  const [nonce, setNonce] = useState(0)
  const [adding, setAdding] = useState(false)

  const setBlocks = (blocks: Block[], remount = false) => {
    onChange({ ...section, blocks })
    if (remount) setNonce((n) => n + 1)
  }
  const moveBlock = (i: number, d: number) => {
    const j = i + d
    if (j < 0 || j >= section.blocks.length) return
    const copy = [...section.blocks]
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
    setBlocks(copy, true)
  }

  return (
    <div className={`sec-edit glass tone-${section.tone ?? 'neutral'}`}>
      <div className="sec-edit-head">
        <button type="button" className="icon-btn" onClick={() => setOpen(!open)} aria-label={open ? 'Collapse' : 'Expand'}>
          {open ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </button>
        <span className="section-num">{index + 1}</span>
        <input
          className="input sec-title-input"
          value={section.title}
          placeholder="Section title"
          onChange={(e) => onChange({ ...section, title: e.target.value })}
        />
        <div className="row-btns">
          <button type="button" className="icon-btn" disabled={index === 0} onClick={() => onMove(-1)} aria-label="Move section up">
            <ArrowUp size={16} />
          </button>
          <button type="button" className="icon-btn" disabled={index === count - 1} onClick={() => onMove(1)} aria-label="Move section down">
            <ArrowDown size={16} />
          </button>
          <button type="button" className="icon-btn danger" onClick={() => confirm(`Delete section "${section.title}"?`) && onDelete()} aria-label="Delete section">
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      {open && (
        <div className="sec-edit-body">
          <div className="row-fields">
            <label className="lbl">
              Colour
              <select className="input" value={section.tone ?? ''} onChange={(e) => onChange({ ...section, tone: (e.target.value || undefined) as Tone | undefined })}>
                <option value="">Neutral</option>
                <option value="critical">Critical (red)</option>
                <option value="urgent">Immediate (amber)</option>
                <option value="stable">Stable (green)</option>
                <option value="info">Info / drugs (blue)</option>
              </select>
            </label>
            <label className="lbl">
              Time target (optional)
              <input
                className="input"
                placeholder="e.g. within 10 min"
                value={section.timeTarget ?? ''}
                onChange={(e) => onChange({ ...section, timeTarget: e.target.value || undefined })}
              />
            </label>
          </div>

          {section.blocks.map((block, i) => (
            <div key={`${nonce}-${i}`} className="block-edit">
              <div className="block-edit-head">
                <span className="block-type">{BLOCK_LABEL[block.type]}</span>
                <div className="row-btns">
                  <button type="button" className="icon-btn" onClick={() => moveBlock(i, -1)} aria-label="Move block up">
                    <ArrowUp size={15} />
                  </button>
                  <button type="button" className="icon-btn" onClick={() => moveBlock(i, 1)} aria-label="Move block down">
                    <ArrowDown size={15} />
                  </button>
                  <button
                    type="button"
                    className="icon-btn danger"
                    onClick={() => confirm('Delete this block?') && setBlocks(section.blocks.filter((_, j) => j !== i), true)}
                    aria-label="Delete block"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
              <BlockEditor block={block} env={env} onChange={(b) => setBlocks(section.blocks.map((x, j) => (j === i ? b : x)))} />
            </div>
          ))}

          {adding ? (
            <div className="add-block">
              {BLOCK_TYPES.map((t) => (
                <button
                  key={t.type}
                  type="button"
                  className="chip"
                  onClick={() => {
                    setBlocks([...section.blocks, t.make()])
                    setAdding(false)
                  }}
                >
                  {t.label}
                </button>
              ))}
              <button type="button" className="chip" onClick={() => setAdding(false)}>
                Cancel
              </button>
            </div>
          ) : (
            <button type="button" className="btn ghost small" onClick={() => setAdding(true)}>
              <Plus size={16} aria-hidden /> Add block
            </button>
          )}
          <div className="hint">
            Section anchor: {section.id}. Formatting: **bold**, !!red emphasis!!
          </div>
        </div>
      )}
    </div>
  )
}

export function EditorPage() {
  const { id: routeId } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const { protocols, loading } = useProtocolList()
  const existing = routeId ? protocols.find((p) => p.id === routeId) : undefined

  // Until the first edit, show the stored protocol; after that the local draft wins, so live updates never overwrite edits.
  const [draft, setContent] = useState<ProtocolContent | null>(routeId ? null : emptyProtocol())
  const content = draft ?? (existing ? pickContent(existing) : null)
  const [newId, setNewId] = useState<string | null>(null)
  const [tab, setTab] = useState<Tab>(routeId ? 'content' : 'details')
  const [dirty, setDirty] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [verifying, setVerifying] = useState(false)
  const [uploadOriginal, setUploadOriginal] = useState(false)
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    if (!dirty) return
    const warn = (e: BeforeUnloadEvent) => e.preventDefault()
    window.addEventListener('beforeunload', warn)
    return () => window.removeEventListener('beforeunload', warn)
  }, [dirty])

  const sections = content?.sections
  const env: EditorEnv = useMemo(
    () => ({
      anchors: buildAnchorIndex(sections ?? []),
      protocols: protocols.filter((p) => p.id !== routeId).map((p) => ({ id: p.id, title: p.title })),
      takenIds: collectIds(sections ?? []),
    }),
    [sections, protocols, routeId],
  )

  if (routeId && loading) {
    return (
      <div className="center-pad">
        <Loader2 className="spin" size={28} aria-label="Loading" />
      </div>
    )
  }
  if (routeId && !existing && !content) return <div className="empty glass">Protocol not found.</div>
  if (!content || !user) return null

  const isPublished = existing?.status === 'published'
  const protocolId = routeId ?? newId

  const update = (patch: Partial<ProtocolContent>) => {
    setContent({ ...content, ...patch })
    setDirty(true)
  }
  const setSections = (s: Section[]) => update({ sections: s })

  const ensureId = () => {
    if (protocolId) return protocolId
    const id = slugify(content.title || 'protocol')
    setNewId(id)
    return id
  }

  const validate = (): string | null => {
    if (!content.title.trim()) return 'Please give the protocol a title.'
    if (!content.category) return 'Please choose a department (Details tab).'
    const anchors = buildAnchorIndex(content.sections)
    for (const s of content.sections) {
      if (!s.title.trim()) return 'Every section needs a title.'
      for (const b of s.blocks) {
        const branches =
          b.type === 'decision' ? b.branches : b.type === 'flow' ? b.nodes.flatMap((n) => n.branches ?? []) : []
        for (const br of branches) {
          if (!br.label.trim() || !anchors.has(br.target)) return `A branch in "${s.title}" has no answer text or no destination.`
        }
        if (b.type === 'flow') {
          for (const n of b.nodes) if (n.goto && !anchors.has(n.goto)) return `A loop in "${s.title}" points to a step that no longer exists.`
        }
        if (b.type === 'link' && b.anchor !== undefined && !anchors.has(b.anchor)) return `A link in "${s.title}" points to a section that no longer exists.`
        if (b.type === 'link' && b.anchor === undefined && !b.protocolId) return `A link in "${s.title}" has no protocol selected.`
      }
    }
    return null
  }

  const doSaveDraft = async () => {
    const problem = validate()
    if (problem) return setError(problem)
    setBusy(true)
    setError('')
    try {
      const id = ensureId()
      await saveDraft(id, content, user.uid)
      setDirty(false)
      navigate(`/p/${id}`)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Saving failed.')
    } finally {
      setBusy(false)
    }
  }

  const openVerify = () => {
    const problem = validate()
    if (problem) return setError(problem)
    setError('')
    setVerifying(true)
  }

  const onUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return
    setUploading(true)
    setError('')
    try {
      const id = ensureId()
      const added = []
      for (const file of Array.from(files)) added.push(await uploadAttachment(id, file, uploadOriginal))
      const attachments = uploadOriginal
        ? [...content.attachments.map((a) => ({ ...a, isOriginal: false })), ...added]
        : [...content.attachments, ...added]
      update({ attachments })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed.')
    } finally {
      setUploading(false)
    }
  }

  const removeAttachment = async (path: string) => {
    if (!confirm('Remove this file?')) return
    update({ attachments: content.attachments.filter((a) => a.path !== path) })
    // Published protocols and their archived versions may still reference the file, so only drafts delete it.
    if (!isPublished) await removeAttachmentFile(path).catch(() => undefined)
  }

  return (
    <div className="editor">
      <button type="button" className="back" onClick={() => (!dirty || confirm('Discard unsaved changes?')) && ((window.history.state as { idx?: number } | null)?.idx ? navigate(-1) : navigate('/', { replace: true }))}>
        <ArrowLeft size={18} aria-hidden /> Back
      </button>
      <h1>{routeId ? 'Edit protocol' : 'New protocol'}</h1>
      {isPublished && (
        <div className="notice">
          This protocol is live. Your changes only reach staff after you <strong>Verify & publish</strong>. The current version is
          archived automatically.
        </div>
      )}

      <div className="tabs">
        {(['details', 'content', 'files', 'preview'] as Tab[]).map((t) => (
          <button key={t} type="button" className={`tab ${tab === t ? 'on' : ''}`} onClick={() => setTab(t)}>
            {t === 'preview' && <Eye size={16} aria-hidden />} {t[0].toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {tab === 'details' && (
        <div className="form glass">
          <label className="lbl">
            Title
            <input className="input" value={content.title} onChange={(e) => update({ title: e.target.value })} placeholder="e.g. Adult Sepsis and Septic Shock" />
          </label>
          <div className="row-fields">
            <label className="lbl">
              Department
              <select
                className="input"
                value={content.category ? getCategory(content.category).id : ''}
                onChange={(e) => update({ category: e.target.value })}
              >
                <option value="" disabled>
                  Choose…
                </option>
                {CATEGORIES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="lbl">
              Version
              <input className="input" value={content.version} onChange={(e) => update({ version: e.target.value })} placeholder="v1.0" />
            </label>
          </div>
          <label className="lbl">
            Summary
            <textarea className="input" rows={2} value={content.summary} onChange={(e) => update({ summary: e.target.value })} />
          </label>
          <label className="lbl">
            Search keywords
            <span className="hint">Comma separated, e.g. MI, chest pain, troponin</span>
            <input
              className="input"
              defaultValue={content.keywords.join(', ')}
              onChange={(e) => update({ keywords: e.target.value.split(',').map((k) => k.trim()).filter(Boolean) })}
            />
          </label>
          <label className="lbl">
            Source / adapted from
            <input className="input" value={content.source} onChange={(e) => update({ source: e.target.value })} />
          </label>
          <div className="row-fields">
            <label className="check inline">
              <input type="checkbox" checked={content.timer.enabled} onChange={(e) => update({ timer: { ...content.timer, enabled: e.target.checked } })} />
              Show stopwatch
            </label>
            {content.timer.enabled && (
              <label className="lbl">
                Cycle alert (seconds, optional)
                <input
                  className="input"
                  type="number"
                  min={0}
                  placeholder="e.g. 120 for CPR cycles"
                  value={content.timer.cycleSeconds ?? ''}
                  onChange={(e) => update({ timer: { ...content.timer, cycleSeconds: Number(e.target.value) || undefined } })}
                />
              </label>
            )}
          </div>
        </div>
      )}

      {tab === 'content' && (
        <div className="sections-edit">
          {content.sections.length === 0 && (
            <div className="empty glass">
              No sections yet. Add sections in the order doctors should follow them, or upload a PDF under Files for a file-only protocol.
            </div>
          )}
          {content.sections.map((s, i) => (
            <SectionEditor
              key={s.id}
              section={s}
              index={i}
              count={content.sections.length}
              env={env}
              onChange={(next) => setSections(content.sections.map((x) => (x.id === s.id ? next : x)))}
              onMove={(d) => {
                const j = i + d
                const copy = [...content.sections]
                ;[copy[i], copy[j]] = [copy[j], copy[i]]
                setSections(copy)
              }}
              onDelete={() => setSections(content.sections.filter((x) => x.id !== s.id))}
            />
          ))}
          <button
            type="button"
            className="btn ghost"
            onClick={() => {
              const title = `Section ${content.sections.length + 1}`
              setSections([...content.sections, { id: uniqueId(title, env.takenIds), title, blocks: [] }])
            }}
          >
            <Plus size={18} aria-hidden /> Add section
          </button>
        </div>
      )}

      {tab === 'files' && (
        <div className="form glass">
          <p className="muted">Upload the original source document, or extra files (PDF, Word, images, up to 20 MB).</p>
          <label className="check inline">
            <input type="checkbox" checked={uploadOriginal} onChange={(e) => setUploadOriginal(e.target.checked)} /> This is the original source
            document (shown as “View original”)
          </label>
          <label className="btn ghost upload-btn">
            {uploading ? <Loader2 size={18} className="spin" aria-hidden /> : <FileUp size={18} aria-hidden />} Choose files
            <input type="file" multiple hidden accept={ALLOWED_UPLOAD_TYPES.join(',')} onChange={(e) => void onUpload(e.target.files)} disabled={uploading} />
          </label>
          {content.attachments.map((a) => (
            <div key={a.path} className="doc-row">
              <span>{a.name}</span>
              {a.isOriginal ? (
                <span className="pill">Original</span>
              ) : (
                <button
                  type="button"
                  className="icon-btn"
                  title="Mark as original"
                  onClick={() => update({ attachments: content.attachments.map((x) => ({ ...x, isOriginal: x.path === a.path })) })}
                >
                  <Star size={16} />
                </button>
              )}
              <button type="button" className="icon-btn danger" onClick={() => void removeAttachment(a.path)} aria-label="Remove file">
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      )}

      {tab === 'preview' && (
        <div className="protocol">
          <ProtocolHeader content={content} />
          <ProtocolView sections={content.sections} availableProtocols={new Map(env.protocols.map((p) => [p.id, p.title]))} />
        </div>
      )}

      {error && <div className="form-error">{error}</div>}

      <div className="save-bar glass">
        {existing && (
          <button
            type="button"
            className="btn ghost small danger"
            onClick={async () => {
              if (!confirm(`Permanently delete "${existing.title}" and its files? This cannot be undone.`)) return
              await deleteProtocol(existing)
              navigate('/')
            }}
          >
            <Trash2 size={16} aria-hidden /> Delete
          </button>
        )}
        <span className="spacer" />
        {!isPublished && (
          <button type="button" className="btn ghost" disabled={busy} onClick={doSaveDraft}>
            {busy ? <Loader2 size={18} className="spin" aria-hidden /> : <Save size={18} aria-hidden />} Save draft
          </button>
        )}
        <button type="button" className="btn primary" disabled={busy} onClick={openVerify}>
          <ShieldCheck size={18} aria-hidden /> Verify & publish
        </button>
      </div>

      {verifying && (
        <VerifyDialog
          title={`${content.title} · ${content.version}`}
          isUpdate={isPublished}
          onClose={() => setVerifying(false)}
          onConfirm={async (v) => {
            const id = ensureId()
            await verifyAndPublish(id, content, v, user.uid)
            setDirty(false)
            navigate(`/p/${id}`)
          }}
        />
      )}
    </div>
  )
}
