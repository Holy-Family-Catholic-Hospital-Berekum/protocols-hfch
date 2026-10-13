import { useEffect, useRef, useState } from 'react'
import { Pause, Play, RotateCcw, Timer as TimerIcon, Volume2, VolumeX, X } from 'lucide-react'
import type { TimerConfig } from '../types/protocol'

interface StoredTimer {
  startedAt: number | null
  elapsedBefore: number
}

function load(key: string): StoredTimer {
  try {
    const raw = sessionStorage.getItem(key)
    if (raw) return JSON.parse(raw) as StoredTimer
  } catch {
    /* storage unavailable */
  }
  return { startedAt: null, elapsedBefore: 0 }
}

function save(key: string, value: StoredTimer) {
  try {
    sessionStorage.setItem(key, JSON.stringify(value))
  } catch {
    /* storage unavailable */
  }
}

function beep() {
  try {
    const ctx = new AudioContext()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.frequency.value = 880
    gain.gain.value = 0.25
    osc.connect(gain).connect(ctx.destination)
    osc.start()
    osc.stop(ctx.currentTime + 0.35)
    osc.onended = () => void ctx.close()
  } catch {
    /* audio unavailable */
  }
}

function fmt(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60)
  const s = Math.floor(totalSeconds % 60)
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

/** Floating stopwatch. Survives page reloads within the session and keeps the screen awake while running. */
export function Timer({ protocolId, config }: { protocolId: string; config: TimerConfig }) {
  const key = `timer:${protocolId}`
  const [state, setState] = useState<StoredTimer>(() => load(key))
  // Reopen automatically if a timer was already running before a reload.
  const [open, setOpen] = useState(() => state.startedAt !== null)
  const [now, setNow] = useState(() => Date.now())
  const [sound, setSound] = useState(true)
  const lastCycle = useRef(-1)
  const wakeLock = useRef<WakeLockSentinel | null>(null)

  const running = state.startedAt !== null
  const elapsed = state.elapsedBefore + (running ? (now - state.startedAt!) / 1000 : 0)
  const cycle = config.cycleSeconds
  const cycleNum = cycle ? Math.floor(elapsed / cycle) : 0
  const cycleProgress = cycle ? (elapsed % cycle) / cycle : 0

  useEffect(() => {
    if (!running) return
    const t = window.setInterval(() => setNow(Date.now()), 250)
    return () => window.clearInterval(t)
  }, [running])

  // Alert at the end of each cycle (e.g. every 2 minutes of CPR).
  useEffect(() => {
    if (!cycle || !running) return
    if (lastCycle.current === -1) lastCycle.current = cycleNum
    if (cycleNum > lastCycle.current) {
      lastCycle.current = cycleNum
      if (sound) beep()
      navigator.vibrate?.([300, 150, 300])
    }
  }, [cycle, cycleNum, running, sound])

  useEffect(() => {
    if (!running) {
      void wakeLock.current?.release().catch(() => undefined)
      wakeLock.current = null
      return
    }
    navigator.wakeLock
      ?.request('screen')
      .then((lock) => {
        wakeLock.current = lock
      })
      .catch(() => undefined)
    return () => {
      void wakeLock.current?.release().catch(() => undefined)
      wakeLock.current = null
    }
  }, [running])

  const update = (next: StoredTimer) => {
    setState(next)
    save(key, next)
    setNow(Date.now())
  }

  const start = () => update({ startedAt: Date.now(), elapsedBefore: state.elapsedBefore })
  const pause = () => update({ startedAt: null, elapsedBefore: elapsed })
  const reset = () => {
    lastCycle.current = -1
    update({ startedAt: null, elapsedBefore: 0 })
  }

  if (!config.enabled) return null

  if (!open) {
    return (
      <button type="button" className="timer-fab" onClick={() => setOpen(true)}>
        <TimerIcon size={22} aria-hidden /> Start timer
      </button>
    )
  }

  const R = 34
  const C = 2 * Math.PI * R

  return (
    <div className={`timer-panel ${running ? 'running' : ''}`} role="timer" aria-live="off">
      {cycle ? (
        <svg className="timer-ring" viewBox="0 0 80 80" aria-hidden>
          <circle cx="40" cy="40" r={R} className="ring-bg" />
          <circle
            cx="40"
            cy="40"
            r={R}
            className="ring-fg"
            strokeDasharray={C}
            strokeDashoffset={C * (1 - cycleProgress)}
          />
          <text x="40" y="45" textAnchor="middle">
            {fmt(cycle - (elapsed % cycle))}
          </text>
        </svg>
      ) : (
        <TimerIcon size={28} aria-hidden className="timer-icon" />
      )}
      <div className="timer-main">
        <div className="timer-time">{fmt(elapsed)}</div>
        <div className="timer-sub">
          {cycle ? `Cycle ${cycleNum + 1} · next check in ${fmt(cycle - (elapsed % cycle))}` : 'Since start'}
        </div>
      </div>
      <div className="timer-actions">
        {running ? (
          <button type="button" onClick={pause} aria-label="Pause">
            <Pause size={20} />
          </button>
        ) : (
          <button type="button" onClick={start} aria-label="Start" className="go">
            <Play size={20} />
          </button>
        )}
        <button type="button" onClick={reset} aria-label="Reset">
          <RotateCcw size={18} />
        </button>
        {cycle ? (
          <button type="button" onClick={() => setSound(!sound)} aria-label={sound ? 'Mute alert' : 'Unmute alert'}>
            {sound ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>
        ) : null}
        {!running && (
          <button type="button" onClick={() => setOpen(false)} aria-label="Hide timer">
            <X size={18} />
          </button>
        )}
      </div>
    </div>
  )
}
