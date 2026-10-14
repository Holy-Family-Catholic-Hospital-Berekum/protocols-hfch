import { useEffect, useState } from 'react'
import { collection, doc, onSnapshot, orderBy, query, updateDoc, writeBatch, type Timestamp } from 'firebase/firestore'
import { httpsCallable } from 'firebase/functions'
import { FirebaseError } from 'firebase/app'
import { db, functions } from './firebase'
import type { Role } from '../auth/authContext'

export interface UserRecord {
  uid: string
  email: string
  displayName: string
  role: Role
  createdAt: Timestamp | null
}

/** Admin only: live list of all user profiles. */
export function useUsers(enabled: boolean) {
  const [users, setUsers] = useState<UserRecord[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!enabled) return
    return onSnapshot(
      query(collection(db, 'users'), orderBy('createdAt', 'desc')),
      (snap) => {
        setUsers(snap.docs.map((d) => ({ uid: d.id, ...d.data() }) as UserRecord))
        setLoading(false)
      },
      () => setLoading(false),
    )
  }, [enabled])

  return { users, loading }
}

export async function setRole(uid: string, role: Role) {
  await updateDoc(doc(db, 'users', uid), { role })
}

/** Permanently deletes a user's sign-in account and profile (admin-only Cloud Function). */
export async function deleteUserAccount(uid: string) {
  try {
    await httpsCallable<{ uid: string }, { ok: boolean }>(functions, 'deleteUser')({ uid })
  } catch (err) {
    if (err instanceof FirebaseError && err.code === 'functions/unavailable') {
      throw new Error('No internet connection. Deleting a user needs to be online.')
    }
    throw new Error(err instanceof FirebaseError ? err.message : 'Could not delete the user.')
  }
}

/** Sets the same role on many users at once (Firestore batches are capped at 500 writes). */
export async function setRoles(uids: string[], role: Role) {
  for (let i = 0; i < uids.length; i += 450) {
    const batch = writeBatch(db)
    for (const uid of uids.slice(i, i + 450)) batch.update(doc(db, 'users', uid), { role })
    await batch.commit()
  }
}
