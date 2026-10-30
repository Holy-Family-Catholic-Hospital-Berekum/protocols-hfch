import { useEffect, useState } from 'react'
import { collection, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc, updateDoc, type Timestamp } from 'firebase/firestore'
import { db } from './firebase'
import type { Profile } from '../auth/authContext'

export const FEEDBACK_MAX = 2000

// How long to wait for the server before telling the user their feedback is queued on the device.
const CONFIRM_MS = 4000

export interface FeedbackRecord {
  id: string
  text: string
  uid: string
  displayName: string
  email: string
  createdAt: Timestamp | null
  read: boolean
}

/**
 * Saves feedback. Offline (or on a slow connection) the write is queued in the device's Firestore cache
 * and sent automatically when the connection returns, even if the app is closed and reopened in between.
 * Resolves 'sent' once the server confirms, or 'queued' if it hasn't within a few seconds.
 */
export async function sendFeedback(text: string, profile: Profile): Promise<'sent' | 'queued'> {
  const write = setDoc(doc(collection(db, 'feedback')), {
    text: text.trim().slice(0, FEEDBACK_MAX),
    uid: profile.uid,
    displayName: profile.displayName.slice(0, 120),
    email: profile.email,
    createdAt: serverTimestamp(),
    read: false,
  })
  // A queued write that the server later refuses only surfaces here, after the user has moved on.
  write.catch((err) => console.error('Feedback was not saved', err))

  if (!navigator.onLine) return 'queued'
  let timer: number | undefined
  const timeout = new Promise<'queued'>((resolve) => {
    timer = window.setTimeout(() => resolve('queued'), CONFIRM_MS)
  })
  try {
    return await Promise.race([write.then(() => 'sent' as const), timeout])
  } finally {
    window.clearTimeout(timer)
  }
}

/** Admin only: live list of all feedback, newest first. */
export function useFeedback(enabled: boolean) {
  const [items, setItems] = useState<FeedbackRecord[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!enabled) return
    return onSnapshot(
      query(collection(db, 'feedback'), orderBy('createdAt', 'desc')),
      (snap) => {
        setItems(snap.docs.map((d) => ({ id: d.id, ...d.data() }) as FeedbackRecord))
        setLoading(false)
      },
      () => setLoading(false),
    )
  }, [enabled])

  return { items, loading }
}

export async function setFeedbackRead(id: string, read: boolean) {
  await updateDoc(doc(db, 'feedback', id), { read })
}
