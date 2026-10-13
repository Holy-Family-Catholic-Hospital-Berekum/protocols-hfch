import { createContext, useContext, useMemo, type ReactNode } from 'react'
import type { Protocol } from '../types/protocol'
import { useProtocols } from './protocols'
import { useAuth } from '../auth/authContext'

interface ProtocolsValue {
  protocols: Protocol[]
  loading: boolean
  error: string | null
  /** id -> title of protocols the current user can open. */
  available: Map<string, string>
}

const ProtocolsContext = createContext<ProtocolsValue | null>(null)

/**
 * One live subscription for the whole app. Loading the full list up front also means
 * every protocol is in Firestore's offline cache after the first online visit.
 */
export function ProtocolsProvider({ children }: { children: ReactNode }) {
  const { profile } = useAuth()
  const isAdmin = profile?.role === 'admin'
  const { protocols, loading, error } = useProtocols(isAdmin)

  const value = useMemo<ProtocolsValue>(() => {
    const sorted = [...protocols].sort((a, b) => a.title.localeCompare(b.title))
    return {
      protocols: sorted,
      loading,
      error,
      available: new Map(sorted.map((p) => [p.id, p.title])),
    }
  }, [protocols, loading, error])

  return <ProtocolsContext.Provider value={value}>{children}</ProtocolsContext.Provider>
}

// oxlint-disable-next-line react/only-export-components
export function useProtocolList() {
  const ctx = useContext(ProtocolsContext)
  if (!ctx) throw new Error('useProtocolList must be used inside ProtocolsProvider')
  return ctx
}
