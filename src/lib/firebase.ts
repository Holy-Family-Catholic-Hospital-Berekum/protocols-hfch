import { initializeApp } from 'firebase/app'
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from 'firebase/app-check'
import { browserLocalPersistence, indexedDBLocalPersistence, initializeAuth } from 'firebase/auth'
import {
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
} from 'firebase/firestore'
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

// Optional, so it is not part of the required-values check above. Analytics is off without it.
export const app = initializeApp({ ...firebaseConfig, measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID })

// App Check: Firestore and Storage only accept requests from this app (not scripts using a stolen login).
// Set up before any other service so their first requests already carry a token.
const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY
if (recaptchaSiteKey) {
  if (import.meta.env.DEV) {
    // localhost can't pass reCAPTCHA: use a debug token registered in Firebase Console → App Check → Manage debug tokens.
    (globalThis as { FIREBASE_APPCHECK_DEBUG_TOKEN?: string | boolean }).FIREBASE_APPCHECK_DEBUG_TOKEN =
      import.meta.env.VITE_APPCHECK_DEBUG_TOKEN || true
  }
  initializeAppCheck(app, {
    provider: new ReCaptchaEnterpriseProvider(recaptchaSiteKey),
    isTokenAutoRefreshEnabled: true,
  })
} else {
  console.warn('VITE_RECAPTCHA_SITE_KEY is not set: App Check is off.')
}

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
