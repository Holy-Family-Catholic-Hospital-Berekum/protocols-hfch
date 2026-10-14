import type { ProtocolContent } from '../../types/protocol'
import { CHAPTERS_1_TO_4 } from './chapters1to4'
import { CHAPTER_5_SHOCK_TRAUMA } from './chapter5ShockTrauma'
import { CHAPTER_5_GENERAL } from './chapter5General'
import { CHAPTER_5_ABDOMINAL } from './chapter5Abdominal'
import { CHAPTER_5_URO_VASCULAR } from './chapter5UroVascular'
import { CHAPTER_6_APPENDIX } from './chapter6Appendix'

/**
 * "Surgery protocols and guidelines", Holy Family Catholic Hospital, Berekum (58-page source PDF).
 *
 * Sections carry chapter/subchapter so the app shows this as a handbook. Wording, doses and
 * thresholds follow the source (flowcharts transcribed from the page images). Pure illustrations
 * and the antibiotic coverage chart are linked to the original PDF page instead of redrawn.
 */
export const SURGERY_GUIDELINES: ProtocolContent = {
  title: 'Surgery Protocols and Guidelines',
  category: 'surgery',
  version: 'v1.0',
  summary:
    'Infection prevention, pre- and postoperative care, transfusion, pain, shock, trauma (ABCDE), burns, wounds, abdominal, urologic and vascular emergencies, fluids and antibiotics.',
  keywords: [
    'surgery',
    'surgical emergencies',
    'preoperative',
    'postoperative',
    'ERAS',
    'transfusion',
    'pain',
    'analgesia',
    'shock',
    'sepsis',
    'trauma',
    'ABCDE',
    'burns',
    'Parkland',
    'wound',
    'tetanus',
    'rabies',
    'abscess',
    'cellulitis',
    'peritonitis',
    'appendicitis',
    'Alvarado',
    'cholecystitis',
    'intestinal obstruction',
    'GI bleeding',
    'ectopic',
    'urinary retention',
    'kidney stones',
    'haematuria',
    'torsion',
    'scrotum',
    'arterial occlusion',
    'DVT',
    'pulmonary embolism',
    'heparin',
    'warfarin',
    'diabetes',
    'sliding scale',
    'fluids',
    'antibiotics',
  ],
  attachments: [],
  timer: { enabled: false },
  sections: [
    ...CHAPTERS_1_TO_4,
    ...CHAPTER_5_SHOCK_TRAUMA,
    ...CHAPTER_5_GENERAL,
    ...CHAPTER_5_ABDOMINAL,
    ...CHAPTER_5_URO_VASCULAR,
    ...CHAPTER_6_APPENDIX,
  ],
}
