import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { LogOut, Users, WifiOff } from 'lucide-react'
import { useAuth } from '../auth/authContext'
import { InstallPrompt } from './installPrompt'

function useOnline() {
  const [online, setOnline] = useState(navigator.onLine)
  useEffect(() => {
    const on = () => setOnline(true)
    const off = () => setOnline(false)
    window.addEventListener('online', on)
    window.addEventListener('offline', off)
    return () => {
      window.removeEventListener('online', on)
      window.removeEventListener('offline', off)
    }
  }, [])
  return online
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
  const online = useOnline()
  const [menu, setMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const isAdmin = profile?.role === 'admin'

  useEffect(() => {
    if (!menu) return
    const close = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setMenu(false)
    }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [menu])

  return (
    <div className="shell">
      <header className="topbar glass">
        <Link to="/" className="brand">
          <img src="/icon-192.png" alt="" />
          <span>
            <strong>HFCH</strong> Protocols
          </span>
        </Link>
        <div className="topbar-right">
          {isAdmin && (
            <NavLink to="/admin/users" className="icon-btn" aria-label="Manage users">
              <Users size={20} />
            </NavLink>
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
                <button type="button" className="menu-item" onClick={() => void signOut()}>
                  <LogOut size={18} aria-hidden /> Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {!online && (
        <div className="offline-banner">
          <WifiOff size={16} aria-hidden /> You are offline. Showing protocols saved on this device.
        </div>
      )}

      <main className="main">
        <Outlet />
      </main>

      <InstallPrompt />
    </div>
  )
}
