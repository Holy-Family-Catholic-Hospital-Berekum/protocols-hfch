import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { RefreshCw } from 'lucide-react'
import { useRegisterSW } from 'virtual:pwa-register/react'

/** How often to look for a new deploy while the app is on screen. */
const CHECK_EVERY_MS = 60 * 1000

/**
 * Keeps installed apps and open tabs on the latest deploy.
 *
 * Checks for a new version every minute while visible and immediately when the app comes back
 * to the foreground. A new version is applied automatically when that is safe (the app is in the
 * background, or the user is on the home page); otherwise an Update banner is shown so nobody is
 * reloaded in the middle of a protocol.
 */
export function UpdatePrompt() {
  const location = useLocation()
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null)
  const [ready, setReady] = useState(false)
  const [updating, setUpdating] = useState(false)
  const pathRef = useRef(location.pathname)
  useEffect(() => {
    pathRef.current = location.pathname
  }, [location.pathname])

  useRegisterSW({
    immediate: true,
    onRegisteredSW: (_url, r) => setRegistration(r ?? null),
    onNeedReload: () => {
      const safe = document.visibilityState === 'hidden' || pathRef.current === '/'
      if (safe) window.location.reload()
      else setReady(true)
    },
  })

  // A new version that arrived on another page is applied as soon as the user is back home.
  useEffect(() => {
    if (ready && location.pathname === '/') window.location.reload()
  }, [ready, location.pathname])

  useEffect(() => {
    if (!registration) return
    const check = () => {
      if (navigator.onLine && document.visibilityState === 'visible') void registration.update().catch(() => undefined)
    }
    const onVisibility = () => {
      if (document.visibilityState !== 'visible') return
      // Returning to the app: apply a waiting update before the user starts reading.
      if (ready) window.location.reload()
      else check()
    }
    const timer = window.setInterval(check, CHECK_EVERY_MS)
    document.addEventListener('visibilitychange', onVisibility)
    window.addEventListener('online', check)
    return () => {
      window.clearInterval(timer)
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('online', check)
    }
  }, [registration, ready])

  if (!ready) return null

  return (
    <div className="update-bar" role="status">
      <RefreshCw size={18} aria-hidden />
      <span>A new version of the app is available.</span>
      <button
        type="button"
        className="btn primary small"
        disabled={updating}
        onClick={() => {
          setUpdating(true)
          window.location.reload()
        }}
      >
        {updating ? 'Updating…' : 'Update'}
      </button>
    </div>
  )
}
