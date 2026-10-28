import { getAnalytics, isSupported, logEvent, type Analytics } from 'firebase/analytics'
import { app } from './firebase'

/**
 * Google Analytics (via Firebase): daily users, retention, engagement time and page views are collected
 * automatically. Off when VITE_FIREBASE_MEASUREMENT_ID is unset (local development).
 * Never send names, emails or other personal data in events.
 */
const analytics: Promise<Analytics | null> = import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
  ? isSupported()
      .then((ok) => (ok ? getAnalytics(app) : null))
      .catch(() => null)
  : Promise.resolve(null)

function track(event: string, params: Record<string, string>) {
  void analytics.then((a) => {
    // Analytics drops parameter values longer than 100 characters.
    if (a) logEvent(a, event, Object.fromEntries(Object.entries(params).map(([k, v]) => [k, v.slice(0, 100)])))
  })
}

/** Which protocols staff actually open. */
export function trackProtocolView(protocolId: string, title: string, department: string) {
  track('protocol_view', { protocol_id: protocolId, protocol_title: title, department })
}

/** Which sections of the long handbook guidelines are read. */
export function trackHandbookSectionView(protocolId: string, sectionId: string, sectionTitle: string) {
  track('handbook_section_view', { protocol_id: protocolId, section_id: sectionId, section_title: sectionTitle })
}
