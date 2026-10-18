import type { ProtocolContent } from '../../types/protocol'
import { ASTHMA_GTS } from './asthmaGts'
import { CHILD_HEALTH_GUIDELINES } from './childHealth'
import { NEWBORN_UNIT_PROTOCOL } from './newbornUnit'

/** Paediatrics department guidelines, transcribed from the supplied PDFs. */
export const PAEDIATRICS_PROTOCOLS: Record<string, ProtocolContent> = {
  'pd-asthma-gts': ASTHMA_GTS,
  'pd-treatment-guidelines': CHILD_HEALTH_GUIDELINES,
  'pd-newborn-unit': NEWBORN_UNIT_PROTOCOL,
}
