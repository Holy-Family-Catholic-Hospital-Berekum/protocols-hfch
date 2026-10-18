import type { ProtocolContent } from '../../types/protocol'
import { ANAPHYLAXIS, CICV, EQUIPMENT_CHECKLIST, LA_TOXICITY, MALIGNANT_HYPERTHERMIA } from './general'
import { ASYSTOLE_PEA, BRADYCARDIA_PAEDS, PALS_APLS, PALS_RCUK, SVT_PAEDS, VT_PAEDS } from './paediatric'

/**
 * Anaesthesia department protocols (supplied as charts/PDFs). Transcribed from the images;
 * wording, doses and thresholds as in the source. Local details (emergency numbers, kit
 * locations, UK contact blocks) are left for HFCH to fill in.
 */
export const ANAESTHESIA_PROTOCOLS: Record<string, ProtocolContent> = {
  'an-anaphylaxis': ANAPHYLAXIS,
  'an-equipment-checklist': EQUIPMENT_CHECKLIST,
  'an-la-toxicity': LA_TOXICITY,
  'an-malignant-hyperthermia': MALIGNANT_HYPERTHERMIA,
  'an-cicv': CICV,
  'an-pals': PALS_APLS,
  'an-pals-rcuk': PALS_RCUK,
  'an-asystole-pea': ASYSTOLE_PEA,
  'an-vt-paeds': VT_PAEDS,
  'an-svt-paeds': SVT_PAEDS,
  'an-bradycardia-paeds': BRADYCARDIA_PAEDS,
}
