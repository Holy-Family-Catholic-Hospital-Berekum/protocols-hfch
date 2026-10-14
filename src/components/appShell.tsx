import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { Link, NavLink, Outlet, useLocation, useNavigate, useNavigationType } from 'react-router-dom'
import { ArrowLeft, FilePlus2, Home, LogOut, Search, Users, Wifi, WifiOff } from 'lucide-react'
import { useAuth } from '../auth/authContext'
import { useUsers } from '../lib/users'
import { InstallPrompt } from './installPrompt'
import { confirmLeave } from '../lib/unsavedGuard'

const TOAST_MS = 4000

/** Online state plus a short-lived toast whenever connectivity changes (or the app opens offline). */
function useConnectivity() {
  const [online, setOnline] = useState(navigator.onLine)
  const [toast, setToast] = useState<'offline' | 'online' | null>(navigator.onLine ? null : 'offline')

  useEffect(() => {
    const on = () => {
      setOnline(true)
      setToast('online')
    }
    const off = () => {
      setOnline(false)
      setToast('offline')
    }
    window.addEventListener('online', on)
    window.addEventListener('offline', off)
    return () => {
      window.removeEventListener('online', on)
      window.removeEventListener('offline', off)
    }
  }, [])

  useEffect(() => {
    if (!toast) return
    const t = window.setTimeout(() => setToast(null), toast === 'online' ? 2500 : TOAST_MS)
    return () => window.clearTimeout(t)
  }, [toast])

  return { online, toast, dismissToast: () => setToast(null) }
}

function initials(name: string, email: string) {
  const source = name.replace(/^dr\.?\s+/i, '').trim() || email
  return source
    .split(/\s+/)
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export function AppShell() {
  const { profile, signOut } = useAuth()
  const isAdmin = profile?.role === 'admin'
  const { users } = useUsers(isAdmin)
  const pendingCount = users.filter((u) => u.role === 'pending').length
  const { online, toast, dismissToast } = useConnectivity()
  const [menu, setMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const navType = useNavigationType()
  const navigate = useNavigate()

  const path = location.pathname
  const isHome = path === '/'

  // New pages open at the top; going back (POP) keeps the browser's restored position.
  useEffect(() => {
    if (navType !== 'POP') window.scrollTo({ top: 0 })
  }, [location.pathname, navType])

  useEffect(() => {
    if (!menu) return
    const close = (e: PointerEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setMenu(false)
    }
    document.addEventListener('pointerdown', close)
    return () => document.removeEventListener('pointerdown', close)
  }, [menu])

  const goBack = () => {
    if (!confirmLeave()) return
    // history.state.idx is set by React Router; 0 means this is the first page of the session.
    const idx = (window.history.state as { idx?: number } | null)?.idx ?? 0
    if (idx > 0) navigate(-1)
    else navigate('/', { replace: true })
  }

  const goHome = () => {
    if (isHome) window.scrollTo({ top: 0, behavior: 'smooth' })
    else if (confirmLeave()) navigate('/')
  }

  const goSearch = () => {
    if (confirmLeave()) navigate('/', { state: { focusSearch: Date.now() } })
  }

  // Links ask before discarding unsaved editor changes.
  const guard = (e: MouseEvent) => {
    if (!confirmLeave()) e.preventDefault()
  }

  return (
    <div className="shell has-bottom-nav">
      <header className="topbar glass">
        <div className="topbar-left">
          {!isHome && (
            <button type="button" className="icon-btn back-btn" onClick={goBack} aria-label="Back">
              <ArrowLeft size={22} />
            </button>
          )}
          <Link to="/" className="brand" aria-label="Home" onClick={guard}>
            <img src="/icon-192.png" alt="" />
            <span>
              <strong>HFCH</strong> Protocols
            </span>
          </Link>
        </div>
        <div className="topbar-right">
          {!online && (
            <span className="offline-dot" title="Offline: showing protocols saved on this device">
              <WifiOff size={16} aria-label="Offline" />
            </span>
          )}
          <div className="menu-wrap" ref={menuRef}>
            <button type="button" className="avatar" onClick={() => setMenu(!menu)} aria-label="Account menu" aria-expanded={menu}>
              {initials(profile?.displayName ?? '', profile?.email ?? '')}
            </button>
            {menu && (
              <div className="menu glass">
                <div className="menu-head">
                  <strong>{profile?.displayName || 'Account'}</strong>
                  <span className="muted small">{profile?.email}</span>
                  <span className={`role-pill role-${profile?.role}`}>{profile?.role === 'admin' ? 'Admin' : 'Staff'}</span>
                </div>
                <button type="button" className="menu-item" onClick={() => confirmLeave() && void signOut()}>
                  <LogOut size={18} aria-hidden /> Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {toast && (
        <button type="button" className={`toast ${toast}`} onClick={dismissToast} role="status">
          {toast === 'offline' ? <WifiOff size={18} aria-hidden /> : <Wifi size={18} aria-hidden />}
          {toast === 'offline' ? 'You are offline. Showing protocols saved on this device.' : 'Back online'}
        </button>
      )}

      <main className="main">
        <Outlet />
      </main>

      <nav className="bottom-nav glass" aria-label="Main">
        <button type="button" className={`nav-item ${isHome ? 'on' : ''}`} onClick={goHome} aria-current={isHome ? 'page' : undefined}>
          <Home size={22} aria-hidden />
          <span>Home</span>
        </button>
        <button type="button" className="nav-item" onClick={goSearch}>
          <Search size={22} aria-hidden />
          <span>Search</span>
        </button>
        {isAdmin && (
          <NavLink to="/admin/protocols/new" end onClick={guard} className={({ isActive }) => `nav-item ${isActive ? 'on' : ''}`}>
            <FilePlus2 size={22} aria-hidden />
            <span>New</span>
          </NavLink>
        )}
        {isAdmin && (
          <NavLink to="/admin/users" end onClick={guard} className={({ isActive }) => `nav-item ${isActive ? 'on' : ''}`}>
            <span className="nav-icon">
              <Users size={22} aria-hidden />
              {pendingCount > 0 && <span className="nav-badge">{pendingCount}</span>}
            </span>
            <span>Users</span>
          </NavLink>
        )}
      </nav>

      <InstallPrompt />
    </div>
  )
}
