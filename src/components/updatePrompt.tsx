import { useEffect, useState } from 'react'
import { RefreshCw } from 'lucide-react'
import { useRegisterSW } from 'virtual:pwa-register/react'

const CHECK_EVERY_MS = 30 * 60 * 1000

/**
 * Installed apps are usually resumed rather than reloaded, so the browser never looks for a new
 * version on its own. Check whenever the app comes back to the foreground (and periodically).
 * New versions activate in the background; instead of reloading under a doctor mid-protocol,
 * offer a one-tap update.
 */
export function UpdatePrompt() {
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null)
  const [ready, setReady] = useState(false)
  const [updating, setUpdating] = useState(false)

  useRegisterSW({
    immediate: true,
    onRegisteredSW: (_url, r) => setRegistration(r ?? null),
    onNeedReload: () => setReady(true),
  })

  useEffect(() => {
    if (!registration) return
    const check = () => {
      if (navigator.onLine) void registration.update().catch(() => undefined)
    }
    const onVisible = () => {
      if (document.visibilityState === 'visible') check()
    }
    const timer = window.setInterval(check, CHECK_EVERY_MS)
    document.addEventListener('visibilitychange', onVisible)
    window.addEventListener('online', check)
    return () => {
      window.clearInterval(timer)
      document.removeEventListener('visibilitychange', onVisible)
      window.removeEventListener('online', check)
    }
  }, [registration])

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
