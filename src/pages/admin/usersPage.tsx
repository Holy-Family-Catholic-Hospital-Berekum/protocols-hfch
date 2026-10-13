import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Check, Crown, Loader2, ShieldOff, UserMinus, UserPlus, X } from 'lucide-react'
import { useAuth, type Role } from '../../auth/authContext'
import { setRole, useUsers, type UserRecord } from '../../lib/users'
import { formatDate } from '../../lib/format'

function UserRow({ u, self }: { u: UserRecord; self: boolean }) {
  const [busy, setBusy] = useState(false)
  const change = async (role: Role, confirmText?: string) => {
    if (confirmText && !confirm(confirmText)) return
    setBusy(true)
    try {
      await setRole(u.uid, role)
    } finally {
      setBusy(false)
    }
  }
  const name = u.displayName || u.email

  return (
    <div className="user-row glass">
      <div className="user-info">
        <strong>{u.displayName || '(no name)'}</strong>
        <span className="muted small">{u.email}</span>
        <span className="muted small">Joined {formatDate(u.createdAt)}</span>
      </div>
      <div className="user-actions">
        {busy && <Loader2 size={18} className="spin" aria-label="Saving" />}
        {self ? (
          <span className="role-pill role-admin">You</span>
        ) : u.role === 'pending' ? (
          <>
            <button type="button" className="btn primary small" disabled={busy} onClick={() => change('staff')}>
              <Check size={16} aria-hidden /> Approve
            </button>
            <button type="button" className="btn ghost small" disabled={busy} onClick={() => change('rejected', `Decline access for ${name}?`)}>
              <X size={16} aria-hidden /> Decline
            </button>
          </>
        ) : u.role === 'staff' ? (
          <>
            <button type="button" className="btn ghost small" disabled={busy} onClick={() => change('admin', `Make ${name} an admin? They will be able to edit and publish protocols and manage users.`)}>
              <Crown size={16} aria-hidden /> Make admin
            </button>
            <button type="button" className="btn ghost small danger" disabled={busy} onClick={() => change('rejected', `Remove access for ${name}?`)}>
              <UserMinus size={16} aria-hidden /> Remove
            </button>
          </>
        ) : u.role === 'admin' ? (
          <button type="button" className="btn ghost small" disabled={busy} onClick={() => change('staff', `Remove admin rights from ${name}?`)}>
            <ShieldOff size={16} aria-hidden /> Make staff
          </button>
        ) : (
          <button type="button" className="btn ghost small" disabled={busy} onClick={() => change('staff')}>
            <UserPlus size={16} aria-hidden /> Restore access
          </button>
        )}
      </div>
    </div>
  )
}

const GROUPS: { role: Role; title: string }[] = [
  { role: 'pending', title: 'Waiting for approval' },
  { role: 'admin', title: 'Admins' },
  { role: 'staff', title: 'Staff' },
  { role: 'rejected', title: 'Declined / removed' },
]

export function UsersPage() {
  const { profile } = useAuth()
  const { users, loading } = useUsers(true)
  const navigate = useNavigate()

  return (
    <div className="users">
      <button type="button" className="back" onClick={() => (window.history.length > 1 ? navigate(-1) : navigate('/'))}>
        <ArrowLeft size={18} aria-hidden /> Back
      </button>
      <h1>Users</h1>
      {loading ? (
        <div className="center-pad">
          <Loader2 className="spin" size={28} aria-label="Loading" />
        </div>
      ) : (
        GROUPS.map(({ role, title }) => {
          const list = users.filter((u) => u.role === role)
          if (list.length === 0 && role !== 'pending') return null
          return (
            <section key={role} className="group">
              <h2 className="list-head">
                {title} <span className="count-soft">{list.length}</span>
              </h2>
              {list.length === 0 ? (
                <p className="muted">No one is waiting for approval.</p>
              ) : (
                list.map((u) => <UserRow key={u.uid} u={u} self={u.uid === profile?.uid} />)
              )}
            </section>
          )
        })
      )}
    </div>
  )
}
