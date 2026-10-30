import { useState } from 'react'
import { Loader2, Mail, MailOpen } from 'lucide-react'
import { setFeedbackRead, useFeedback, type FeedbackRecord } from '../../lib/feedback'
import { formatDate } from '../../lib/format'

function FeedbackRow({ f }: { f: FeedbackRecord }) {
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  const toggle = async () => {
    setBusy(true)
    setError('')
    try {
      await setFeedbackRead(f.id, !f.read)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <article className={`feedback-row glass ${f.read ? '' : 'unread'}`}>
      <div className="feedback-row-top">
        <div className="user-info">
          <strong>{f.displayName || '(no name)'}</strong>
          <span className="muted small">
            {f.email} · {formatDate(f.createdAt)}
          </span>
        </div>
        <button type="button" className="btn ghost small" disabled={busy} onClick={toggle}>
          {busy ? (
            <Loader2 size={16} className="spin" aria-hidden />
          ) : f.read ? (
            <Mail size={16} aria-hidden />
          ) : (
            <MailOpen size={16} aria-hidden />
          )}
          {f.read ? 'Mark unread' : 'Mark read'}
        </button>
      </div>
      <p className="feedback-row-text">{f.text}</p>
      {error && <div className="form-error">{error}</div>}
    </article>
  )
}

export function FeedbackPage() {
  const { items, loading } = useFeedback(true)
  const [showAll, setShowAll] = useState(false)
  const unread = items.filter((f) => !f.read)
  const list = showAll ? items : unread

  return (
    <div className="users">
      <h1>Feedback</h1>
      <p className="muted">Sent by staff from the Home page. Only admins can see this.</p>
      <div className="chips">
        <button type="button" className={`chip ${showAll ? '' : 'on'}`} onClick={() => setShowAll(false)}>
          Unread ({unread.length})
        </button>
        <button type="button" className={`chip ${showAll ? 'on' : ''}`} onClick={() => setShowAll(true)}>
          All ({items.length})
        </button>
      </div>
      {loading ? (
        <div className="center-pad">
          <Loader2 className="spin" aria-label="Loading" />
        </div>
      ) : list.length === 0 ? (
        <div className="empty glass">{showAll ? 'No feedback yet.' : 'No unread feedback.'}</div>
      ) : (
        list.map((f) => <FeedbackRow key={f.id} f={f} />)
      )}
    </div>
  )
}
