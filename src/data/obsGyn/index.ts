import type { ProtocolContent } from '../../types/protocol'
import { CORD_PROLAPSE } from './cordProlapse'
import { IV_ANTIHYPERTENSIVES, MAGNESIUM_SULFATE } from './preEclampsia'
import { VACUUM_EXTRACTION } from './vacuumExtraction'

/** Obstetrics and Gynaecology protocols, transcribed from the supplied PDFs. Wording as in the source. */
export const OBS_GYN_PROTOCOLS: Record<string, ProtocolContent> = {
  'og-cord-prolapse': CORD_PROLAPSE,
  'og-vacuum-extraction': VACUUM_EXTRACTION,
  'og-iv-antihypertensives': IV_ANTIHYPERTENSIVES,
  'og-magnesium-sulfate': MAGNESIUM_SULFATE,
}
