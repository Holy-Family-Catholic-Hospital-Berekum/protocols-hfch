import type { ProtocolContent } from '../../types/protocol'
import { APPENDICES } from './appendices'
import { CHAPTERS_1_TO_3 } from './chapters1to3'
import { CHAPTERS_4_TO_6 } from './chapters4to6'
import { CHAPTERS_7_TO_8 } from './chapters7to8'
import { CHAPTERS_9_TO_11 } from './chapters9to11'
import { FRONT_MATTER } from './frontMatter'

/**
 * "Adult Internal Medicine Clinical Protocol Handbook — Flowchart Edition", v0.3 controlled draft
 * (18 October 2026), 59-page source PDF. Wording, doses and thresholds follow the source; each
 * quick-algorithm flowchart (an image in the PDF) is transcribed in arrow order. The printed
 * contents page and the duplicate topic list on page 7 are left out.
 */
const IM_HANDBOOK: ProtocolContent = {
  title: 'Adult Internal Medicine Clinical Protocol Handbook',
  category: 'internal-medicine',
  version: 'v0.3',
  summary:
    'Flowchart edition (controlled draft): stroke, status epilepticus, meningitis, heart failure, ACS, acute asthma, hepatitis B/C, cirrhosis, DKA/HHS/hypoglycaemia, thyroid and adrenal emergencies, SJS/TEN, AKI, CKD and complications, dialysis complications, SLE, RA, MCTD, sickle cell, haemophilia, TLS, shock and acute pain.',
  keywords: [
    'internal medicine',
    'adult',
    'ABCDE',
    'stroke',
    'thrombolysis',
    'status epilepticus',
    'seizure',
    'meningitis',
    'encephalitis',
    'heart failure',
    'pulmonary oedema',
    'ACS',
    'STEMI',
    'NSTEMI',
    'asthma',
    'hepatitis B',
    'hepatitis C',
    'cirrhosis',
    'ascites',
    'SBP',
    'hepatic encephalopathy',
    'DKA',
    'HHS',
    'hypoglycaemia',
    'insulin',
    'potassium',
    'thyroid storm',
    'myxedema coma',
    'adrenal crisis',
    'hydrocortisone',
    'SJS',
    'TEN',
    'AKI',
    'CKD',
    'hyperkalaemia',
    'hypertensive emergency',
    'dialysis',
    'SLE',
    'lupus',
    'rheumatoid arthritis',
    'methotrexate',
    'MCTD',
    'sickle cell',
    'acute chest syndrome',
    'haemophilia',
    'tumour lysis',
    'cardiogenic shock',
    'septic shock',
    'sepsis',
    'hypovolaemic shock',
    'pain',
    'analgesia',
    'opioid',
  ],
  attachments: [],
  timer: { enabled: false },
  sections: [...FRONT_MATTER, ...CHAPTERS_1_TO_3, ...CHAPTERS_4_TO_6, ...CHAPTERS_7_TO_8, ...CHAPTERS_9_TO_11, ...APPENDICES],
}

/** Internal Medicine department guidelines, transcribed from the supplied PDFs. */
export const INTERNAL_MEDICINE_PROTOCOLS: Record<string, ProtocolContent> = {
  'im-handbook': IM_HANDBOOK,
}
