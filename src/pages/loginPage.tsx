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
      case 'auth/network-request-failed':
        return 'No internet connection. You need internet to sign in the first time; after that the app works offline.'
      case 'auth/too-many-requests':
        return 'Too many attempts. Please wait a moment and try again.'
    }
  }
  return 'Something went wrong. Please try again.'
}

export function LoginPage() {
  const { signIn, register, resetPassword } = useAuth()
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
