import type { ProtocolContent } from '../../../types/protocol'
import { PART_1_CARE } from './part1Care'
import { PART_2_FEEDING } from './part2Feeding'
import { PART_3_CONDITIONS } from './part3Conditions'
import { PART_4_METABOLIC } from './part4Metabolic'
import { PART_5_REFERENCE } from './part5Reference'

/**
 * Newborn (mother-baby) unit protocol, 78-page scanned source PDF with no text layer.
 * Transcribed from the page images; wording, doses and thresholds as in the source.
 * Hospital-identifying references are left out. Figure pages are PDF pages (printed page + 1).
 */
export const NEWBORN_UNIT_PROTOCOL: ProtocolContent = {
  title: 'Newborn Unit Protocol',
  category: 'paediatrics',
  version: 'v1.0',
  summary:
    'Infection control, preterm and LBW care, feeds and fluids, routine newborn care, sepsis, seizures, shock, asphyxia, anaemia, birth injuries, HIV/syphilis/hepatitis exposure, glucose, CAH, hypothyroidism, surgical baby, CPAP, drug doses and procedures.',
  keywords: [
    'newborn',
    'neonatal',
    'neonate',
    'NICU',
    'preterm',
    'low birth weight',
    'LBW',
    'incubator',
    'KMC',
    'feeds',
    'IV fluids',
    'caffeine',
    'apnea',
    'sepsis',
    'seizures',
    'phenobarbitone',
    'shock',
    'birth asphyxia',
    'HIE',
    'Thompson',
    'anaemia',
    'cephalhaematoma',
    'subgaleal',
    "Erb's palsy",
    'HIV exposed',
    'syphilis',
    'hepatitis B',
    'chickenpox',
    'neonatal tetanus',
    'hypoglycaemia',
    'hyperglycaemia',
    'CAH',
    'hypothyroidism',
    'gastroschisis',
    'oesophageal atresia',
    'CPAP',
    'ventilation',
    'Ballard',
    'NG tube',
    'catheter',
    'jaundice',
    'phototherapy',
  ],
  attachments: [],
  timer: { enabled: false },
  sections: [...PART_1_CARE, ...PART_2_FEEDING, ...PART_3_CONDITIONS, ...PART_4_METABOLIC, ...PART_5_REFERENCE],
}
