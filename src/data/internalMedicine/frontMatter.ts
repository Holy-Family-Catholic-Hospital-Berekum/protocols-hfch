import type { Section } from '../../types/protocol'
import { box, note, p, sec, table, ul, warn, type Place } from '../helpers'

const FM: Place = { chapter: 'Front matter' }

export const FRONT_MATTER: Section[] = [
  sec(FM, 'im-governance', undefined, 'Editorial note and clinical governance', [
    warn(
      'CONTROLLED DRAFT — FOR CLINICAL REVIEW AND HOSPITAL APPROVAL. This is a draft clinical aid, not an officially endorsed Ghana Ministry of Health publication. It contains representative emergency doses and care pathways; local formulary, current national guidance, patient-specific factors and specialist advice take precedence. Verify each regimen, dose, concentration, monitoring requirement and referral pathway before use. High-risk treatment—thrombolysis, insulin/potassium infusions, vasopressors, anticoagulation, dialysis prescriptions and factor replacement—requires a local approved protocol and trained staff.',
      'Important clinical governance notice',
    ),
    p(
      'This document reorganizes and editorially updates the supplied handbook. It is a clinical aid for trained healthcare professionals, not a substitute for bedside assessment, specialist advice, Ghana Ministry of Health policy, or an approved institutional protocol. The original 26 clinical topics and appendices are retained. Some high-risk recommendations have been clarified against current international guidance; this does not mean every drug dose or every disease-specific recommendation has undergone independent specialist validation.',
    ),
    p(
      'The official Ghana Ministry of Health/Ghana Health Service resources located during review continued to list the Ghana STG, 7th edition (2017) (checked 18 October 2026). The online listing is not proof that no newer circular, restricted programme guideline, or facility directive exists. Confirm with the Ghana National Drugs Programme, Ghana Health Service and relevant national disease-control programme leads before adoption and ratification.',
    ),
    table(
      ['Topic', 'Editorial reconciliation / local action'],
      [
        [
          'Stroke',
          'Use the AHA/ASA 2026 acute ischaemic stroke guideline as the current US reference. CT-based distinction of haemorrhage from ischaemia remains mandatory before antithrombotic/reperfusion decisions. Reperfusion eligibility, drug choice and post-treatment monitoring must follow the receiving stroke centre\'s approved pathway. Avoid intensive SBP lowering to <140 mmHg after EVT solely to improve outcome.',
        ],
        [
          'Acute coronary syndrome',
          'Add the 2025 ACC/AHA/ACEP/NAEMSP/SCAI ACS guideline alongside ESC 2023. PCI/fibrinolysis decisions require a written network pathway, contraindication checklist and urgent transfer plan.',
        ],
        [
          'Sepsis/septic shock',
          'Replace the superseded 2021-only reference with Surviving Sepsis Campaign 2026. Use NEWS/NEWS2, MEWS or SIRS as part of screening rather than qSOFA alone. Antibiotics are immediate in shock/probable sepsis; for possible sepsis without shock, rapidly investigate and treat within 3 hours if infection remains likely. Initial 30 mL/kg crystalloid is conditional, not an automatic unassessed bolus; reassess frequently. Peripheral vasopressors require a local monitored protocol.',
        ],
        [
          'DKA/HHS',
          'Retain the 2024 international consensus as the main shared ADA/EASD/JBDS/AACE/DTS reference. Use a written insulin/potassium protocol, check potassium before insulin, never administer IV potassium push, and ensure frequent glucose/electrolyte monitoring and overlap when transitioning to subcutaneous insulin.',
        ],
        [
          'Chronic hepatitis B',
          'Cross-check eligibility against WHO 2024 guidance and current Ghana programme protocol; the WHO 2024 update broadened and simplified treatment eligibility. Confirm access, monitoring and pregnancy/vertical-transmission pathways locally.',
        ],
        [
          'CKD and CKD anaemia',
          'Use KDIGO 2024 CKD guidance. Before ratification, verify whether a newer KDIGO anaemia update or Ghana renal programme circular supersedes the cited anaemia guidance.',
        ],
        [
          'All high-risk infusions / antidotes / factor replacement',
          'Do not operationalize from this handbook alone. Approve concentration-specific order sets, monitoring frequency, staffing requirements, antidote/rescue procedures and transfer triggers before clinical use.',
        ],
      ],
      'Guideline reconciliation: priority changes and checks',
    ),
    box(
      'info',
      'Required approval before use',
      'Medical Superintendent / clinical lead signs off each protocol and assigns a named owner and review date.',
      'Pharmacy verifies formulary, concentrations, dose units, renal adjustments, interactions, stock and high-alert medication safeguards.',
      'Nursing, laboratory, blood bank, dialysis, emergency transport and referral-centre teams confirm monitoring and escalation capacity.',
      'Microbiology/IPC team supplies the current local antibiogram and empiric antimicrobial policy.',
      'Remove or revise any intervention that cannot be delivered safely at the facility; specify stabilization and referral alternatives.',
      'Review after any national circular, major guideline update, medication safety incident or change in local capability; otherwise at least annually.',
    ),
  ]),
  sec(FM, 'im-purpose', undefined, 'Purpose and how to use this handbook', [
    p('**Purpose and governance**'),
    ul(
      'This is a working clinical protocol handbook for adult internal medicine at a Ghanaian district hospital with laboratory testing, ECG, X-ray and intermittent CT access. It is an implementation aid, not a substitute for clinical judgement, specialist consultation, national policy, or bedside assessment.',
      'Before adoption, the Medical Superintendent/clinical lead, pharmacy lead, nursing lead, laboratory, blood bank, dialysis team and referral partners should review each protocol; confirm formulary, concentrations, infusion pumps, oxygen supply, blood products, CT availability, referral contacts and local antimicrobial susceptibility data. Assign a local owner and review date.',
      'Guideline baseline: Ghana Ministry of Health STG, 7th edition (2017), the latest general edition located in the official resources reviewed on 18 October 2026. Recommendations are cross-checked against relevant current WHO, European and US guidance where identified. Ghana-specific circulars, programme protocols, formulary, local resistance data and referral capability take precedence. Confirm all references and doses during local ratification.',
    ),
    p('**How to use each protocol**'),
    p(
      'Read the recognition and red-flag section first, follow the quick algorithm, then use the treatment pathway only within the clinician\'s scope and the facility\'s approved protocol. Confirm allergy, weight, pregnancy possibility, renal/hepatic function, interactions and actual product concentration. For transfer-dependent care, call the receiving clinician early while stabilizing the patient. Follow facility-approved drug doses, referral pathways and monitoring requirements.',
    ),
    p('**How to use this handbook**'),
    ul(
      '!!RED FLAG: stabilize first and call for senior help/transfer early.!! Do not delay life-saving treatment for nonessential tests.',
      'Use weight-based dosing only after obtaining a reliable weight where possible. Check allergies, pregnancy possibility when relevant, renal/hepatic function, drug interactions and local product concentration. Use a second clinician/pharmacist check for high-alert medicines (insulin infusions, heparin, thrombolytics, potassium, vasopressors, concentrated electrolytes).',
      'Document time of onset/last-known-well, vital signs, working diagnosis, contraindications considered, treatments with times, response, escalation calls and handover. Record the source and version of any protocol used.',
      'Where a treatment requires a capability not available on site (e.g. thrombolysis/thrombectomy, neurosurgery, ICU, endoscopy, urgent dialysis, blood products), contact the receiving centre immediately while stabilizing and arranging safe transport.',
    ),
  ]),
  sec(
    FM,
    'im-abcde',
    undefined,
    'Universal emergency approach (ABCDE) and bedside checklist',
    [
      ul(
        '**A — Airway:** assess speech, secretions, vomiting and protective reflexes. Position, suction, airway adjuncts as trained; call for airway support early if deteriorating consciousness or exhaustion.',
        '**B — Breathing:** respiratory rate, SpO₂, work of breathing, chest examination. Give oxygen for hypoxaemia; usually target 94–98%, or 88–92% in patients at risk of hypercapnic respiratory failure pending blood gas assessment. Do not give routine high-flow oxygen to a normoxaemic patient.',
        '**C — Circulation:** pulse, BP, perfusion, capillary refill, bleeding, ECG, IV access. Obtain bloods without delaying emergency treatment. Give fluids only when indicated and reassess after each bolus; use caution in heart failure, renal failure and cirrhosis.',
        '**D — Disability:** AVPU/GCS, pupils, focal neurology, capillary glucose, seizure activity, temperature. Treat hypoglycaemia immediately.',
        '**E — Exposure:** rash, infection source, trauma, oedema, dehydration, medication patches, temperature and pressure areas; preserve dignity and prevent hypothermia.',
      ),
      p('**Immediate bedside checklist**'),
      ul(
        'ABCDE and repeat observations; capillary glucose; ECG when cardiovascular symptoms, shock or electrolyte abnormality; pregnancy test when clinically relevant; oxygen saturation; medication/allergy history; IV access; fluid balance and urine output where indicated.',
        'Initial common tests as appropriate: FBC, electrolytes/urea/creatinine, glucose, LFT, CRP, blood cultures before antibiotics if this causes no meaningful delay, urinalysis, lactate/blood gas where available, troponin, coagulation profile and group/crossmatch.',
      ),
    ],
    { tone: 'urgent' },
  ),
  sec(FM, 'im-referral', undefined, 'Referral and transfer', [
    ul(
      'Refer urgently for airway/ventilatory support, persistent shock, new focal neurological deficit or suspected stroke when CT/reperfusion is unavailable, intracranial haemorrhage, STEMI needing reperfusion, status epilepticus not rapidly controlled, meningitis with severe disease, severe asthma not responding to initial treatment, urgent dialysis indications, major bleeding, acute liver failure, SJS/TEN, severe sickle complications, suspected malignancy needing definitive treatment, or any clinical deterioration beyond local capacity.',
      'Before transfer: stabilize airway/breathing/circulation, give time-critical treatment, call the receiving clinician, send referral note and results, secure IV access, arrange appropriate escort/monitoring, and communicate treatment times and response. Do not delay transfer for administrative completion.',
    ),
    note(
      'Flowchart key in the source: green = start; blue = clinical actions; gold diamond = short decision point (shown here as a check step); "ASSESS / DECIDE" boxes contain longer conditional logic; peach = final action/escalation.',
    ),
  ]),
]
