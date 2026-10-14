import { setGlobalOptions } from 'firebase-functions/v2'
import { HttpsError, onCall } from 'firebase-functions/v2/https'
import { initializeApp } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { FieldValue, getFirestore } from 'firebase-admin/firestore'

initializeApp()

// Close to the Firestore database (eur3). A low ceiling keeps costs predictable.
setGlobalOptions({ region: 'europe-west1', maxInstances: 2 })

/**
 * Permanently deletes a user: their sign-in account and their profile.
 * Only admins may call it, and never on themselves.
 *
 * A tombstone in deletedUsers/{uid} stops the deleted person's still-signed-in device
 * (ID tokens stay valid for up to an hour) from recreating a "pending" profile.
 */
export const deleteUser = onCall(async (request) => {
  const callerUid = request.auth?.uid
  if (!callerUid) throw new HttpsError('unauthenticated', 'Please sign in.')

  const uid: unknown = request.data?.uid
  if (typeof uid !== 'string' || uid.length === 0 || uid.length > 128) {
    throw new HttpsError('invalid-argument', 'A valid user id is required.')
  }
  if (uid === callerUid) throw new HttpsError('failed-precondition', 'You cannot delete your own account.')

  const db = getFirestore()
  const caller = await db.doc(`users/${callerUid}`).get()
  if (caller.get('role') !== 'admin') throw new HttpsError('permission-denied', 'Only admins can delete users.')

  await db.doc(`deletedUsers/${uid}`).set({ deletedAt: FieldValue.serverTimestamp(), deletedBy: callerUid })
  await db.doc(`users/${uid}`).delete()
  try {
    await getAuth().deleteUser(uid)
  } catch (err) {
    if ((err as { code?: string }).code !== 'auth/user-not-found') throw err
  }
  return { ok: true }
})
