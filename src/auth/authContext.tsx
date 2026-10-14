import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut as fbSignOut,
  updateProfile,
  type User,
} from 'firebase/auth'
import { doc, onSnapshot, serverTimestamp, setDoc } from 'firebase/firestore'
import { auth, db } from '../lib/firebase'

/** 'rejected' keeps a declined sign-up blocked (deleting the profile would just recreate it as pending). */
export type Role = 'pending' | 'staff' | 'admin' | 'rejected'

export interface Profile {
  uid: string
  email: string
  displayName: string
  role: Role
}

interface AuthValue {
  user: User | null
  profile: Profile | null
  loading: boolean
  /** Signed in, but the profile isn't cached on this device and there is no connection to fetch it. */
  needsConnection: boolean
  signIn: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  resetPassword: (email: string) => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthValue | null>(null)

// Name typed on the register form, used when the profile document is first created.
let pendingDisplayName: string | null = null

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const [needsConnection, setNeedsConnection] = useState(false)

  useEffect(() => {
    let unsubProfile: (() => void) | undefined

    // Firebase restores the saved session from this device (works offline), so users stay signed in until they sign out.
    const unsubAuth = onAuthStateChanged(auth, (u) => {
      unsubProfile?.()
      setUser(u)
      setNeedsConnection(false)
      if (!u) {
        setProfile(null)
        setLoading(false)
        return
      }
      setLoading(true)
      let creating = false

      // Reads the cached profile first, so the app opens instantly offline; live updates (approval, promotion) follow when online.
      unsubProfile = onSnapshot(
        doc(db, 'users', u.uid),
        (snap) => {
          const data = snap.data()
          if (data) {
            setProfile({ uid: u.uid, email: data.email, displayName: data.displayName, role: data.role as Role })
            setNeedsConnection(false)
            setLoading(false)
            return
          }
          if (snap.metadata.fromCache) {
            // Not on this device yet. Wait for the server unless we're offline.
            if (!navigator.onLine) {
              setNeedsConnection(true)
              setLoading(false)
            }
            return
          }
          // Confirmed by the server that no profile exists: first sign-in, create it as pending.
          if (creating) return
          creating = true
          setDoc(doc(db, 'users', u.uid), {
            email: u.email ?? '',
            displayName: pendingDisplayName ?? u.displayName ?? '',
            role: 'pending',
            createdAt: serverTimestamp(),
          })
            .then(() => {
              pendingDisplayName = null
            })
            .catch((err) => {
              // Refused by the rules: the account was deleted by an admin. Sign this device out.
              console.error('Could not create profile', err)
              setProfile(null)
              setLoading(false)
              void fbSignOut(auth)
            })
        },
        () => {
          setProfile(null)
          setLoading(false)
        },
      )
    })

    return () => {
      unsubAuth()
      unsubProfile?.()
    }
  }, [])

  const value: AuthValue = {
    user,
    profile,
    loading,
    needsConnection,
    signIn: async (email, password) => {
      await signInWithEmailAndPassword(auth, email, password)
    },
    register: async (name, email, password) => {
      pendingDisplayName = name.trim()
      const cred = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(cred.user, { displayName: name.trim() })
    },
    resetPassword: async (email) => {
      await sendPasswordResetEmail(auth, email)
    },
    signOut: async () => {
      await fbSignOut(auth)
    },
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// oxlint-disable-next-line react/only-export-components
export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}
