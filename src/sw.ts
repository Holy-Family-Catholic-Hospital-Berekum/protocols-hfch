/// <reference lib="webworker" />
import { cleanupOutdatedCaches, matchPrecache, precacheAndRoute, type PrecacheEntry } from 'workbox-precaching'
import { NavigationRoute, registerRoute } from 'workbox-routing'
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies'
import { ExpirationPlugin } from 'workbox-expiration'
import { CacheableResponsePlugin } from 'workbox-cacheable-response'
import { clientsClaim } from 'workbox-core'

declare const self: ServiceWorkerGlobalScope & { __WB_MANIFEST: (string | PrecacheEntry)[] }

// New versions take over as soon as they are installed.
void self.skipWaiting()
clientsClaim()
cleanupOutdatedCaches()

/** How long to wait for the network before showing the saved copy (slow hospital connections). */
const NETWORK_TIMEOUT_MS = 4000

function fetchWithTimeout(request: Request, ms: number): Promise<Response> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('timeout')), ms)
    fetch(request).then(
      (res) => {
        clearTimeout(timer)
        resolve(res)
      },
      (err) => {
        clearTimeout(timer)
        reject(err)
      },
    )
  })
}

// Page loads go to the network first, so a refresh always gets the build Vercel just deployed.
// Offline (or very slow): fall back to the app shell saved with this version's files.
// Registered before precacheAndRoute so it wins over the precached index.html.
registerRoute(
  new NavigationRoute(async ({ request }) => {
    try {
      const response = await fetchWithTimeout(request, NETWORK_TIMEOUT_MS)
      if (response.ok) return response
      throw new Error(`HTTP ${response.status}`)
    } catch {
      return (await matchPrecache('/index.html')) ?? Response.error()
    }
  }),
)

// JS/CSS/icons of this version. File names contain a content hash, so they can never go stale.
precacheAndRoute(self.__WB_MANIFEST)

registerRoute(
  ({ url }) => url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com',
  new CacheFirst({
    cacheName: 'google-fonts',
    plugins: [
      new CacheableResponsePlugin({ statuses: [0, 200] }),
      new ExpirationPlugin({ maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 365 }),
    ],
  }),
)

// Uploaded PDFs and images, so documents opened once stay available offline.
registerRoute(
  ({ url }) => url.origin === 'https://firebasestorage.googleapis.com',
  new StaleWhileRevalidate({
    cacheName: 'protocol-files',
    plugins: [
      new CacheableResponsePlugin({ statuses: [0, 200] }),
      new ExpirationPlugin({ maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 60 }),
    ],
  }),
)
