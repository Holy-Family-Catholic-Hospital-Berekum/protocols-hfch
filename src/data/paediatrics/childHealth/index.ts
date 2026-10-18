import type { ProtocolContent } from '../../../types/protocol'
import { CHAPTER_1_RESUSCITATION } from './chapter1Resuscitation'
import { CHAPTER_2_NEUROLOGICAL } from './chapter2Neurological'
import { CHAPTER_3_CARDIAC } from './chapter3Cardiac'
import { CHAPTER_4_HAEMATOLOGY } from './chapter4Haematology'
import { CHAPTER_5_INFECTIOUS } from './chapter5Infectious'
import { CHAPTER_6_MALNUTRITION } from './chapter6Malnutrition'
import { CHAPTER_7_NEONATAL_A } from './chapter7NeonatalA'
import { CHAPTER_7_NEONATAL_B } from './chapter7NeonatalB'
import { CHAPTER_8_METABOLIC } from './chapter8Metabolic'
import { CHAPTER_9_ONCOLOGY_A } from './chapter9OncologyA'
import { CHAPTER_9_ONCOLOGY_B } from './chapter9OncologyB'
import { CHAPTER_10_EMERGENCIES } from './chapter10Emergencies'
import { CHAPTER_11_RENAL_A } from './chapter11RenalA'
import { CHAPTER_11_RENAL_B } from './chapter11RenalB'
import { CHAPTER_12_RESPIRATORY } from './chapter12Respiratory'
import { CHAPTER_13_MISCELLANEOUS } from './chapter13Miscellaneous'
import { CHAPTER_14_APPENDIX } from './chapter14Appendix'

/**
 * Child Health "Treatment Guidelines" (2010),
 * 174-page source PDF, used with permission. Foreword, preface and contributor lists are left out.
 *
 * Sections carry chapter/subchapter so the app shows this as a handbook. Wording, doses and
 * thresholds follow the source; tables and flowcharts were checked against the page images
 * because the PDF's text layer scrambles many of them. Source typos are kept and flagged.
 * Figure page numbers are PDF pages (printed page + 9).
 */
export const CHILD_HEALTH_GUIDELINES: ProtocolContent = {
  title: 'Paediatric Treatment Guidelines (2010)',
  category: 'paediatrics',
  version: 'v1.0',
  summary:
    'Resuscitation, anaphylaxis, seizures, coma, cardiac, sickle cell, transfusion, meningitis, severe malaria, tetanus, malnutrition, neonatal care, DKA, oncology, hypoglycaemia, shock and fluids, diarrhoea, renal, respiratory, snake bite, poisoning and reference tables.',
  keywords: [
    'paediatrics',
    'children',
    'CPR',
    'resuscitation',
    'anaphylaxis',
    'seizures',
    'status epilepticus',
    'epilepsy',
    'coma',
    'Blantyre',
    'hypertension',
    'heart failure',
    'tet spell',
    'sickle cell',
    'vaso-occlusive crisis',
    'transfusion',
    'meningitis',
    'malaria',
    'quinine',
    'artesunate',
    'tetanus',
    'malnutrition',
    'SAM',
    'F-75',
    'neonatal',
    'newborn',
    'birth asphyxia',
    'jaundice',
    'exchange transfusion',
    'kangaroo',
    'DKA',
    'oncology',
    'leukaemia',
    'Burkitt',
    'hypoglycaemia',
    'shock',
    'fluids',
    'dehydration',
    'diarrhoea',
    'nephrotic',
    'nephritic',
    'UTI',
    'renal failure',
    'croup',
    'asthma',
    'pneumonia',
    'tuberculosis',
    'snake bite',
    'antivenom',
    'poisoning',
    'infusions',
    'body surface area',
  ],
  attachments: [],
  timer: { enabled: false },
  sections: [
    ...CHAPTER_1_RESUSCITATION,
    ...CHAPTER_2_NEUROLOGICAL,
    ...CHAPTER_3_CARDIAC,
    ...CHAPTER_4_HAEMATOLOGY,
    ...CHAPTER_5_INFECTIOUS,
    ...CHAPTER_6_MALNUTRITION,
    ...CHAPTER_7_NEONATAL_A,
    ...CHAPTER_7_NEONATAL_B,
    ...CHAPTER_8_METABOLIC,
    ...CHAPTER_9_ONCOLOGY_A,
    ...CHAPTER_9_ONCOLOGY_B,
    ...CHAPTER_10_EMERGENCIES,
    ...CHAPTER_11_RENAL_A,
    ...CHAPTER_11_RENAL_B,
    ...CHAPTER_12_RESPIRATORY,
    ...CHAPTER_13_MISCELLANEOUS,
    ...CHAPTER_14_APPENDIX,
  ],
}
