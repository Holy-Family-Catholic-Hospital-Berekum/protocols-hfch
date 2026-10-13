import { Hourglass, LogOut, ShieldX, WifiOff } from 'lucide-react'
import { useAuth } from '../auth/authContext'

/** Shown while access is pending/declined, or when a first sign-in on this device can't finish offline. */
export function PendingPage({ offline = false }: { offline?: boolean }) {
  const { profile, user, signOut } = useAuth()
  const rejected = !offline && profile?.role === 'rejected'

  const title = offline ? 'Connect to the internet' : rejected ? 'Access not approved' : 'Awaiting approval'
  const text = offline
    ? 'Your account details are not on this device yet. Connect to the internet once to finish signing in; after that, protocols work offline.'
    : rejected
      ? 'Your request to access the protocols was not approved. Please contact the Medical Director if you think this is a mistake.'
      : 'Your account has been created. The Medical Director needs to approve it before you can view protocols. This page will update automatically once approved.'

  return (
    <div className="auth-page">
      <div className="auth-card glass center">
        <div className={`pending-orb ${rejected ? 'rejected' : ''}`}>
          {offline ? <WifiOff size={40} aria-hidden /> : rejected ? <ShieldX size={40} aria-hidden /> : <Hourglass size={40} aria-hidden />}
        </div>
        <h1>{title}</h1>
        <p className="muted">{text}</p>
        <p className="small muted">Signed in as {profile?.email ?? user?.email}</p>
        <button type="button" className="btn ghost" onClick={() => void signOut()}>
          <LogOut size={18} aria-hidden /> Sign out
        </button>
      </div>
    </div>
  )
}
