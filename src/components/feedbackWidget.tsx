import { useEffect, useRef, useState, type FormEvent } from 'react'
import { CheckCircle2, CloudOff, Loader2, MessageSquareHeart, Send, X } from 'lucide-react'
import { useAuth } from '../auth/authContext'
import { FEEDBACK_MAX, sendFeedback } from '../lib/feedback'

/** Floating "Feedback" button with a panel to type and send feedback straight away. */
export function FeedbackWidget() {
  const { profile } = useAuth()
  const [open, setOpen] = useState(false)
  const [text, setText] = useState('')
  const [sending, setSending] = useState(false)
  const [result, setResult] = useState<'sent' | 'queued' | null>(null)
  const [error, setError] = useState('')
  const [online, setOnline] = useState(navigator.onLine)
  const textRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const update = () => setOnline(navigator.onLine)
    window.addEventListener('online', update)
    window.addEventListener('offline', update)
    return () => {
      window.removeEventListener('online', update)
      window.removeEventListener('offline', update)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const openPanel = () => {
    setResult(null)
    setError('')
    setOpen(true)
    window.setTimeout(() => textRef.current?.focus(), 50)
  }

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    if (!profile || !text.trim() || sending) return
    setSending(true)
    setError('')
    try {
      setResult(await sendFeedback(text, profile))
      setText('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not send feedback. Please try again.')
    } finally {
      setSending(false)
    }
  }

  if (!open) {
    return (
      <button type="button" className="feedback-fab" onClick={openPanel} aria-label="Send feedback">
        <MessageSquareHeart size={20} aria-hidden />
        <span>Feedback</span>
      </button>
    )
  }

  return (
    <section className="feedback-panel glass" role="dialog" aria-labelledby="feedback-title">
      <div className="feedback-head">
        <span className="feedback-badge">
          <MessageSquareHeart size={20} aria-hidden />
        </span>
        <div className="feedback-title">
          <strong id="feedback-title">Any feedback for us?</strong>
          <span className="muted small">What are we doing well? What challenges are you experiencing?</span>
        </div>
        <button type="button" className="icon-btn" onClick={() => setOpen(false)} aria-label="Close feedback">
          <X size={18} />
        </button>
      </div>

      {result ? (
        <div className="feedback-done">
          {result === 'sent' ? (
            <CheckCircle2 size={34} className="ok" aria-hidden />
          ) : (
            <CloudOff size={34} className="queued" aria-hidden />
          )}
          <strong>Thank you!</strong>
          <span className="muted small">
            {result === 'sent'
              ? 'Your feedback was sent to the admins.'
              : 'Saved on this device. It will be sent automatically when you are back online.'}
          </span>
          <div className="feedback-actions">
            <button type="button" className="btn ghost small" onClick={() => setResult(null)}>
              Send more
            </button>
            <button type="button" className="btn primary small" onClick={() => setOpen(false)}>
              Done
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={submit}>
          <textarea
            ref={textRef}
            className="input feedback-text"
            rows={4}
            maxLength={FEEDBACK_MAX}
            placeholder="Type your feedback here…"
            value={text}
            onChange={(e) => setText(e.target.value)}
            aria-label="Your feedback"
          />
          {!online && (
            <p className="feedback-offline small">
              <CloudOff size={14} aria-hidden /> You are offline. Your feedback will be sent when you reconnect.
            </p>
          )}
          {error && <div className="form-error">{error}</div>}
          <div className="feedback-actions">
            <span className="muted small">
              {text.length > FEEDBACK_MAX - 200 ? `${FEEDBACK_MAX - text.length} characters left` : ''}
            </span>
            <button type="submit" className="btn primary small" disabled={!text.trim() || sending}>
              {sending ? <Loader2 size={16} className="spin" aria-hidden /> : <Send size={16} aria-hidden />} Send
            </button>
          </div>
        </form>
      )}
    </section>
  )
}
