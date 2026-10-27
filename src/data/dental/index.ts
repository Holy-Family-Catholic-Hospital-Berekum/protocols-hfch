import type { ProtocolContent } from '../../types/protocol'
import { AVULSION_CLOSED_APEX, AVULSION_OPEN_APEX } from './avulsion'
import { ORTHODONTIC_BONDING } from './orthodonticBonding'

/** Maxillofacial / Dental protocols, transcribed from the supplied PDFs. Wording as in the source. */
export const DENTAL_PROTOCOLS: Record<string, ProtocolContent> = {
  'dn-avulsion-open-apex': AVULSION_OPEN_APEX,
  'dn-avulsion-closed-apex': AVULSION_CLOSED_APEX,
  'dn-ortho-bonding': ORTHODONTIC_BONDING,
}
