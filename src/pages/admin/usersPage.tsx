import { useMemo, useState } from 'react'
import { Ban, Check, CheckCheck, Loader2, Search, UserPlus, X } from 'lucide-react'
import { useAuth, type Role } from '../../auth/authContext'
import { setRole, setRoles, useUsers, type UserRecord } from '../../lib/users'
import { formatDate } from '../../lib/format'

function UserRow({ u, self }: { u: UserRecord; self: boolean }) {
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const name = u.displayName || u.email

  const run = async (action: () => Promise<void>, confirmText?: string) => {
    if (confirmText && !confirm(confirmText)) return
    setBusy(true)
    setError('')
    try {
      await action()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
      setBusy(false)
      return
    }
    setBusy(false)
  }
  const change = (role: Role, confirmText?: string) => run(() => setRole(u.uid, role), confirmText)

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
        ) : (
          <>
            {u.role === 'pending' && (
              <>
                <button type="button" className="btn primary small" disabled={busy} onClick={() => change('staff')}>
                  <Check size={16} aria-hidden /> Approve
                </button>
                <button type="button" className="btn ghost small" disabled={busy} onClick={() => change('rejected', `Decline access for ${name}?`)}>
                  <X size={16} aria-hidden /> Decline
                </button>
              </>
            )}
            {u.role === 'staff' && (
              <button
                type="button"
                className="btn ghost small"
                disabled={busy}
                onClick={() => change('rejected', `Block ${name}? They will lose access immediately. You can restore access later.`)}
              >
                <Ban size={16} aria-hidden /> Block
              </button>
            )}
            {/* Admin rights are only granted or removed in the Firebase Console (enforced by firestore.rules). */}
            {u.role === 'admin' && <span className="role-pill role-admin">Admin</span>}
            {u.role === 'rejected' && (
              <button type="button" className="btn ghost small" disabled={busy} onClick={() => change('staff')}>
                <UserPlus size={16} aria-hidden /> Restore access
              </button>
            )}
          </>
        )}
      </div>
      {error && <div className="form-error user-error">{error}</div>}
    </div>
  )
}

const GROUPS: { role: Role; title: string }[] = [
  { role: 'pending', title: 'Waiting for approval' },
  { role: 'admin', title: 'Admins' },
  { role: 'staff', title: 'Staff' },
  { role: 'rejected', title: 'Declined / blocked' },
]

export function UsersPage() {
  const { profile } = useAuth()
  const { users, loading } = useUsers(true)
  const [query, setQuery] = useState('')
  const [approvingAll, setApprovingAll] = useState(false)
  const [bulkError, setBulkError] = useState('')

  const approveAll = async (list: UserRecord[]) => {
    const names = list.map((u) => u.displayName || u.email)
    const preview = names.slice(0, 10).join('\n') + (names.length > 10 ? `\n…and ${names.length - 10} more` : '')
    if (!confirm(`Approve ${list.length} people as staff?\n\n${preview}`)) return
    setApprovingAll(true)
    setBulkError('')
    try {
      await setRoles(
        list.map((u) => u.uid),
        'staff',
      )
    } catch (err) {
      setBulkError(err instanceof Error ? err.message : 'Could not approve everyone. Please try again.')
    } finally {
      setApprovingAll(false)
    }
  }

  const filtered = useMemo(() => {
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean)
    if (terms.length === 0) return users
    return users.filter((u) => {
      const text = `${u.displayName} ${u.email}`.toLowerCase()
      return terms.every((t) => text.includes(t))
    })
  }, [users, query])

  const searching = query.trim().length > 0

  return (
    <div className="users">
      <h1>Users</h1>

      <div className="search glass users-search">
        <Search size={20} aria-hidden />
        <input
          type="search"
          placeholder="Search by name or email…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search users"
        />
        {query && (
          <button type="button" className="icon-btn" onClick={() => setQuery('')} aria-label="Clear search">
            <X size={18} />
          </button>
        )}
      </div>

      {bulkError && <div className="form-error">{bulkError}</div>}

      {loading ? (
        <div className="center-pad">
          <Loader2 className="spin" size={28} aria-label="Loading" />
        </div>
      ) : searching && filtered.length === 0 ? (
        <div className="empty glass">No users match “{query.trim()}”.</div>
      ) : (
        GROUPS.map(({ role, title }) => {
          const list = filtered.filter((u) => u.role === role)
          if (list.length === 0 && (searching || role !== 'pending')) return null
          return (
            <section key={role} className="group">
              <div className="group-head">
                <h2 className="list-head">
                  {title} <span className="count-soft">{list.length}</span>
                </h2>
                {role === 'pending' && list.length > 1 && (
                  <button type="button" className="btn primary small" disabled={approvingAll} onClick={() => approveAll(list)}>
                    {approvingAll ? <Loader2 size={16} className="spin" aria-hidden /> : <CheckCheck size={16} aria-hidden />}
                    Approve all {list.length}
                  </button>
                )}
              </div>
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
