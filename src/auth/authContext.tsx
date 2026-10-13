import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut as fbSignOut,
  updateProfile,
  type User,
} from 'firebase/auth'
import { doc, getDoc, onSnapshot, serverTimestamp, setDoc } from 'firebase/firestore'
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
  signIn: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  signInWithGoogle: () => Promise<void>
  resetPassword: (email: string) => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthValue | null>(null)

// Name typed on the register form, used when the profile document is first created.
let pendingDisplayName: string | null = null

async function ensureProfile(user: User) {
  const ref = doc(db, 'users', user.uid)
  const snap = await getDoc(ref)
  if (snap.exists()) return
  await setDoc(ref, {
    email: user.email ?? '',
    displayName: pendingDisplayName ?? user.displayName ?? '',
    role: 'pending',
    createdAt: serverTimestamp(),
  })
  pendingDisplayName = null
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let unsubProfile: (() => void) | undefined

    const unsubAuth = onAuthStateChanged(auth, async (u) => {
      unsubProfile?.()
      setUser(u)
      if (!u) {
        setProfile(null)
        setLoading(false)
        return
      }
      setLoading(true)
      try {
        await ensureProfile(u)
      } catch (err) {
        console.error('Could not create profile', err)
      }
      // Live subscription so approval / promotion takes effect without a reload.
      unsubProfile = onSnapshot(
        doc(db, 'users', u.uid),
        (snap) => {
          const data = snap.data()
          setProfile(
            data
              ? { uid: u.uid, email: data.email, displayName: data.displayName, role: data.role as Role }
              : null,
          )
          setLoading(false)
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
    signIn: async (email, password) => {
      await signInWithEmailAndPassword(auth, email, password)
    },
    register: async (name, email, password) => {
      pendingDisplayName = name.trim()
      const cred = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(cred.user, { displayName: name.trim() })
    },
    signInWithGoogle: async () => {
      await signInWithPopup(auth, new GoogleAuthProvider())
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
