import { useEffect, useState } from 'react'
import { Download, Share, SquarePlus, X } from 'lucide-react'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

const DISMISS_KEY = 'install-dismissed'

function isStandalone() {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    (navigator as Navigator & { standalone?: boolean }).standalone === true
  )
}

function isIos() {
  return /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
}

function wasDismissed() {
  try {
    return localStorage.getItem(DISMISS_KEY) === '1'
  } catch {
    return false
  }
}

/** "Install app" banner: native prompt on Android/desktop Chrome, instructions on iPhone Safari. */
export function InstallPrompt() {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null)
  const [showIos] = useState(() => isIos() && !isStandalone())
  const [hidden, setHidden] = useState(() => isStandalone() || wasDismissed())

  useEffect(() => {
    const onPrompt = (e: Event) => {
      e.preventDefault()
      setDeferred(e as BeforeInstallPromptEvent)
    }
    window.addEventListener('beforeinstallprompt', onPrompt)
    return () => window.removeEventListener('beforeinstallprompt', onPrompt)
  }, [])

  const dismiss = () => {
    setHidden(true)
    try {
      localStorage.setItem(DISMISS_KEY, '1')
    } catch {
      /* storage unavailable */
    }
  }

  if (hidden || (!deferred && !showIos)) return null

  return (
    <div className="install glass">
      <img src="/icon-192.png" alt="" className="install-logo" />
      <div className="install-text">
        <strong>Install the app</strong>
        {deferred ? (
          <span>Open protocols from your home screen, even offline.</span>
        ) : (
          <span>
            Tap <Share size={14} aria-label="Share" /> then <SquarePlus size={14} aria-label="Add to Home Screen" /> “Add to Home Screen”.
          </span>
        )}
      </div>
      {deferred && (
        <button
          type="button"
          className="btn primary small"
          onClick={async () => {
            await deferred.prompt()
            await deferred.userChoice
            setDeferred(null)
          }}
        >
          <Download size={16} aria-hidden /> Install
        </button>
      )}
      <button type="button" className="icon-btn" onClick={dismiss} aria-label="Dismiss">
        <X size={18} />
      </button>
    </div>
  )
}

