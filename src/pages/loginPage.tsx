import { useState, type FormEvent } from 'react'
import { FirebaseError } from 'firebase/app'
import { Loader2, Lock, Mail, User } from 'lucide-react'
import { useAuth } from '../auth/authContext'

type Mode = 'signin' | 'register' | 'reset'

function friendlyError(err: unknown): string {
  if (err instanceof FirebaseError) {
    switch (err.code) {
      case 'auth/invalid-credential':
      case 'auth/wrong-password':
      case 'auth/user-not-found':
        return 'Email or password is incorrect.'
      case 'auth/email-already-in-use':
        return 'An account with this email already exists. Try signing in.'
      case 'auth/weak-password':
        return 'Password must be at least 6 characters.'
      case 'auth/invalid-email':
        return 'Please enter a valid email address.'
      case 'auth/popup-closed-by-user':
      case 'auth/cancelled-popup-request':
        return ''
      case 'auth/network-request-failed':
        return 'No internet connection. Please try again when online.'
      case 'auth/too-many-requests':
        return 'Too many attempts. Please wait a moment and try again.'
    }
  }
  return 'Something went wrong. Please try again.'
}

function GoogleMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden>
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
  )
}

export function LoginPage() {
  const { signIn, register, signInWithGoogle, resetPassword } = useAuth()
  const [mode, setMode] = useState<Mode>('signin')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setMessage('')
    setBusy(true)
    try {
      if (mode === 'signin') await signIn(email.trim(), password)
      else if (mode === 'register') await register(name, email.trim(), password)
      else {
        await resetPassword(email.trim())
        setMessage('If an account exists for this email, a reset link has been sent.')
      }
    } catch (err) {
      setError(friendlyError(err))
    } finally {
      setBusy(false)
    }
  }

  const google = async () => {
    setError('')
    setBusy(true)
    try {
      await signInWithGoogle()
    } catch (err) {
      setError(friendlyError(err))
    } finally {
      setBusy(false)
    }
  }

  const switchMode = (m: Mode) => {
    setMode(m)
    setError('')
    setMessage('')
  }

  return (
    <div className="auth-page">
      <div className="auth-card glass">
        <img src="/icon-192.png" alt="Holy Family Catholic Hospital, Berekum" className="auth-logo" />
        <h1>Clinical Protocols</h1>
        <p className="muted">Holy Family Catholic Hospital, Berekum</p>

        {mode !== 'reset' && (
          <div className="segmented" role="tablist">
            <button type="button" role="tab" aria-selected={mode === 'signin'} className={mode === 'signin' ? 'on' : ''} onClick={() => switchMode('signin')}>
              Sign in
            </button>
            <button type="button" role="tab" aria-selected={mode === 'register'} className={mode === 'register' ? 'on' : ''} onClick={() => switchMode('register')}>
              Create account
            </button>
          </div>
        )}

        <form onSubmit={submit} className="auth-form">
          {mode === 'register' && (
            <label className="field">
              <User size={18} aria-hidden />
              <input required autoComplete="name" placeholder="Full name (e.g. Dr. Ama Mensah)" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
          )}
          <label className="field">
            <Mail size={18} aria-hidden />
            <input required type="email" autoComplete="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          {mode !== 'reset' && (
            <label className="field">
              <Lock size={18} aria-hidden />
              <input
                required
                type="password"
                minLength={6}
                autoComplete={mode === 'register' ? 'new-password' : 'current-password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          )}

          {error && <div className="form-error">{error}</div>}
          {message && <div className="form-ok">{message}</div>}

          <button className="btn primary block" disabled={busy}>
            {busy && <Loader2 size={18} className="spin" aria-hidden />}
            {mode === 'signin' ? 'Sign in' : mode === 'register' ? 'Create account' : 'Send reset link'}
          </button>
        </form>

        {mode !== 'reset' && (
          <>
            <div className="divider">
              <span>or</span>
            </div>
            <button type="button" className="btn ghost block" onClick={google} disabled={busy}>
              <GoogleMark /> Continue with Google
            </button>
          </>
        )}

        <div className="auth-foot">
          {mode === 'reset' ? (
            <button type="button" className="linkish" onClick={() => switchMode('signin')}>
              Back to sign in
            </button>
          ) : (
            <button type="button" className="linkish" onClick={() => switchMode('reset')}>
              Forgot password?
            </button>
          )}
        </div>
        {mode === 'register' && (
          <p className="muted small">New accounts need approval from the Medical Director before protocols become visible.</p>
        )}
      </div>
    </div>
  )
}
