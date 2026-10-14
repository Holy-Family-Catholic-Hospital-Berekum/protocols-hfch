import { initializeApp } from 'firebase/app'
import { browserLocalPersistence, indexedDBLocalPersistence, initializeAuth } from 'firebase/auth'
import {
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
} from 'firebase/firestore'
import { getFunctions } from 'firebase/functions'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

const missing = Object.entries(firebaseConfig)
  .filter(([, value]) => !value)
  .map(([key]) => key)
if (missing.length > 0) {
  throw new Error(`Missing Firebase config values: ${missing.join(', ')}. Check your .env file.`)
}

export const app = initializeApp(firebaseConfig)

// Session is stored on the device and never expires on its own: users stay signed in until they sign out.
export const auth = initializeAuth(app, {
  persistence: [indexedDBLocalPersistence, browserLocalPersistence],
})

// Ask the browser not to evict saved data (session + offline protocols) under storage pressure.
void navigator.storage?.persist?.().catch(() => undefined)

// Offline cache: the full protocol list is cached on first load and stays readable without a connection.
export const db = initializeFirestore(app, {
  ignoreUndefinedProperties: true,
  localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() }),
})

export const storage = getStorage(app)

// Same region as the Cloud Functions (functions/src/index.ts).
export const functions = getFunctions(app, 'europe-west1')
