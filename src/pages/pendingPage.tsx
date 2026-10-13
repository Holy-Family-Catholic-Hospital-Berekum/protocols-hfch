import { Hourglass, LogOut, ShieldX } from 'lucide-react'
import { useAuth } from '../auth/authContext'

export function PendingPage() {
  const { profile, user, signOut } = useAuth()
  const rejected = profile?.role === 'rejected'

  return (
    <div className="auth-page">
      <div className="auth-card glass center">
        <div className={`pending-orb ${rejected ? 'rejected' : ''}`}>
          {rejected ? <ShieldX size={40} aria-hidden /> : <Hourglass size={40} aria-hidden />}
        </div>
        <h1>{rejected ? 'Access not approved' : 'Awaiting approval'}</h1>
        <p className="muted">
          {rejected
            ? 'Your request to access the protocols was not approved. Please contact the Medical Director if you think this is a mistake.'
            : 'Your account has been created. The Medical Director needs to approve it before you can view protocols. This page will update automatically once approved.'}
        </p>
        <p className="small muted">Signed in as {profile?.email ?? user?.email}</p>
        <button type="button" className="btn ghost" onClick={() => void signOut()}>
          <LogOut size={18} aria-hidden /> Sign out
        </button>
      </div>
    </div>
  )
}
