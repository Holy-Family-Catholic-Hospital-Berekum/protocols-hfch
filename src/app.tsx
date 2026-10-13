import type { ReactNode } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider, useAuth } from './auth/authContext'
import { ProtocolsProvider } from './lib/protocolsContext'
import { AppShell } from './components/appShell'
import { LoginPage } from './pages/loginPage'
import { PendingPage } from './pages/pendingPage'
import { HomePage } from './pages/homePage'
import { ProtocolPage } from './pages/protocolPage'
import { HistoryPage, VersionPage } from './pages/historyPage'
import { UsersPage } from './pages/admin/usersPage'
import { EditorPage } from './pages/admin/editor/editorPage'

function Splash() {
  return (
    <div className="splash">
      <img src="/icon-192.png" alt="" />
      <div className="splash-bar" />
    </div>
  )
}

function AdminOnly({ children }: { children: ReactNode }) {
  const { profile } = useAuth()
  return profile?.role === 'admin' ? children : <Navigate to="/" replace />
}

function Gate() {
  const { user, profile, loading, needsConnection } = useAuth()

  if (loading) return <Splash />
  if (!user) return <LoginPage />
  if (needsConnection) return <PendingPage offline />
  if (!profile || profile.role === 'pending' || profile.role === 'rejected') return <PendingPage />

  return (
    <ProtocolsProvider>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<HomePage />} />
          <Route path="p/:id" element={<ProtocolPage />} />
          <Route path="p/:id/history" element={<HistoryPage />} />
          <Route path="p/:id/history/:versionId" element={<VersionPage />} />
          <Route path="admin/users" element={<AdminOnly><UsersPage /></AdminOnly>} />
          <Route path="admin/protocols/new" element={<AdminOnly><EditorPage /></AdminOnly>} />
          <Route path="admin/protocols/:id/edit" element={<AdminOnly><EditorPage /></AdminOnly>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </ProtocolsProvider>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Gate />
      </AuthProvider>
    </BrowserRouter>
  )
}
