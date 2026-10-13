import { useEffect, useState } from 'react'
import { collection, doc, onSnapshot, orderBy, query, updateDoc, type Timestamp } from 'firebase/firestore'
import { db } from './firebase'
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
