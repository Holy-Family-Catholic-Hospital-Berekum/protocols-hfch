import { useState, type FormEvent } from 'react'
import { Loader2, ShieldCheck, X } from 'lucide-react'
import { useAuth } from '../auth/authContext'

interface Props {
  title: string
  isUpdate: boolean
  onConfirm: (v: { verifiedBy: string; changeNote: string }) => Promise<void>
  onClose: () => void
}

/** A clinician must confirm a line-by-line check against the source before anything goes live. */
export function VerifyDialog({ title, isUpdate, onConfirm, onClose }: Props) {
  const { profile } = useAuth()
  const [verifiedBy, setVerifiedBy] = useState(profile?.displayName ?? '')
  const [changeNote, setChangeNote] = useState('')
  const [checked, setChecked] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    setBusy(true)
    setError('')
    try {
      await onConfirm({ verifiedBy, changeNote })
      onClose()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Publishing failed.')
      setBusy(false)
    }
  }

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="verify-title">
      <form className="modal glass" onSubmit={submit}>
        <button type="button" className="icon-btn modal-close" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>
        <div className="modal-icon">
          <ShieldCheck size={30} aria-hidden />
        </div>
        <h2 id="verify-title">{isUpdate ? 'Verify & publish update' : 'Verify & publish'}</h2>
        <p className="muted">{title}</p>

        <label className="lbl">
          Verified by (clinician name)
          <input className="input" required value={verifiedBy} onChange={(e) => setVerifiedBy(e.target.value)} placeholder="Dr. …" />
        </label>

        <label className="lbl">
          {isUpdate ? 'What changed? (shown to all doctors)' : 'Note (optional)'}
          <textarea
            className="input"
            required={isUpdate}
            rows={3}
            value={changeNote}
            onChange={(e) => setChangeNote(e.target.value)}
            placeholder={isUpdate ? 'e.g. Updated atropine dose to 1 mg' : 'e.g. Initial version'}
          />
        </label>

        <label className="check">
          <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
          <span>
            I have checked <strong>every step, dose, threshold and decision branch</strong> against the original source document,
            and this protocol is correct.
          </span>
        </label>

        {error && <div className="form-error">{error}</div>}

        <div className="modal-actions">
          <button type="button" className="btn ghost" onClick={onClose}>
            Cancel
          </button>
          <button className="btn primary" disabled={!checked || busy || !verifiedBy.trim()}>
            {busy && <Loader2 size={18} className="spin" aria-hidden />} Publish
          </button>
        </div>
      </form>
    </div>
  )
}
