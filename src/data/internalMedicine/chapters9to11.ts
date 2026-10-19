import type { Section } from '../../types/protocol'
import type { Place } from '../helpers'
import { topic } from './topic'

const HAEM: Place = { chapter: '9. Haematology' }
const EM: Place = { chapter: '10. Emergency and critical care' }
const SUP: Place = { chapter: '11. Supportive care' }

export const CHAPTERS_9_TO_11: Section[] = [
  topic(HAEM, 'im-sickle-cell', undefined, 'Sickle cell disease and acute complications', {
    tone: 'urgent',
    recognition:
      'Confirm genotype from reliable electrophoresis/HPLC if not documented. Establish baseline Hb, reticulocyte count, renal function, oxygen saturation, transfusion history, alloantibodies and hydroxyurea use. !!Fever in SCD is an emergency because of functional asplenia.!!',
    flowchart: [
      'SCD patient with pain, fever, dyspnoea, pallor or neurological symptoms',
      'ABCDE, pain score, SpO₂, temperature, glucose and focused assessment',
      '**ASSESS / DECIDE:** fever, chest symptoms/hypoxaemia, focal neurology, severe anaemia, priapism or shock? emergency pathway and urgent senior review/transfer',
      'Give prompt analgesia and appropriate hydration; avoid fluid overload; oxygen only if hypoxaemic',
      'Suspected acute chest syndrome: CXR, antibiotics/oxygen as indicated and consider transfusion with specialist advice',
      'Assess infection, sequestration, aplasia and stroke',
      'Reassess pain, vitals, Hb and response.',
    ],
    treatment: [
      '**Vaso-occlusive pain:** assess for alternative emergencies (acute chest syndrome, stroke, sepsis, splenic/hepatic sequestration, aplastic crisis, osteomyelitis). Give prompt analgesia using a protocol based on prior effective therapy; paracetamol and NSAID if safe for mild/moderate pain, opioid for severe pain with reassessment and monitoring. Encourage oral fluids if able; IV isotonic fluids only if dehydrated or unable to drink—avoid overhydration. Warmth, incentive spirometry in admitted patients and early mobilization are helpful.',
      '**Acute chest syndrome:** new pulmonary infiltrate plus fever/respiratory symptoms in SCD. Admit, oxygen if hypoxaemic, analgesia without respiratory depression, incentive spirometry, antibiotics covering typical/atypical pathogens (e.g. ceftriaxone plus azithromycin per local policy), careful fluids and early haematology referral. Consider simple or exchange transfusion for worsening hypoxaemia, multilobar disease, falling Hb or respiratory failure with specialist input.',
      '**Stroke:** urgent CT and referral; exchange transfusion is preferred when available, with target HbS reduction under specialist protocol. Do not delay referral. **Acute anaemia:** compare with baseline, reticulocytes and haemolysis; consider aplastic crisis, sequestration and bleeding. Transfusion is indication-based and must account for alloimmunization/hyperviscosity risk.',
      '**Long-term:** hydroxyurea for eligible patients with CBC monitoring; folate according to local practice; vaccination, penicillin prophylaxis where indicated by age/history, renal screening, transcranial Doppler in children (not a core adult protocol), pregnancy planning and specialist follow-up.',
    ],
    references: [
      'Ghana MoH STG 2017; WHO Sickle-cell disease resources; NHLBI Evidence-Based Management of Sickle Cell Disease (2014); ASH transfusion support (2020) and pain guidelines (2020); current local Ghana SCD programme guidance.',
    ],
  }),
  topic(HAEM, 'im-haemophilia', undefined, 'Hemophilia', {
    tone: 'urgent',
    recognition:
      'Suspect with recurrent haemarthrosis, deep muscle bleeding, prolonged bleeding or family history. Confirm haemophilia A/B with factor VIII/IX assay; assess inhibitor if poor response to factor. Avoid IM injections, aspirin and NSAIDs where possible; use paracetamol or specialist-directed analgesia.',
    flowchart: [
      'Bleeding or suspected hemarthrosis in known/suspected hemophilia',
      'Assess airway/head/neck/abdominal bleeding and haemodynamic stability',
      'Suspected intracranial, neck, GI or major bleeding: urgent factor replacement per haemophilia plan and emergency transfer; do not wait for imaging',
      'Contact haematology/haemophilia centre and check factor/inhibitor history',
      'Avoid IM injections and NSAIDs where possible; protect joint and provide analgesia',
      'Document bleed site, treatment and response; arrange definitive factor/inhibitor management.',
    ],
    treatment: [
      '**Major bleed, head injury, neck/throat bleed, GI bleed, iliopsoas bleed or suspected intracranial bleed: treat as emergency.** Contact haemophilia centre and give factor replacement immediately if available, before imaging when delay would be dangerous. Typical initial factor targets and doses depend on site/severity and concentrate; use the product-specific protocol and haematology advice rather than a universal dose. Desmopressin may help selected mild haemophilia A only after documented response; it does not treat haemophilia B.',
      'Tranexamic acid can be an adjunct for mucosal bleeding when appropriate, but avoid in significant upper urinary tract bleeding and use specialist advice. Monitor neurovascular status, Hb, pain/swelling and compartment syndrome. Arrange safe transfer and document factor product, dose and time.',
    ],
    references: [
      'World Federation of Hemophilia Guidelines for the Management of Hemophilia, 3rd edition (2020); Ghana MoH STG 2017; local blood product/factor availability protocol.',
    ],
  }),
  topic(HAEM, 'im-tumour-lysis', undefined, 'Tumor lysis syndrome', {
    tone: 'urgent',
    recognition:
      'Risk: high-burden, rapidly proliferative malignancy (especially lymphoma/leukaemia), renal impairment, high LDH/uric acid or after cancer therapy; spontaneous TLS can occur. Baseline and serial potassium, phosphate, calcium, uric acid, creatinine, LDH and ECG.',
    flowchart: [
      'Cancer patient after/before cytotoxic therapy with weakness, vomiting, arrhythmia or AKI',
      'ECG, potassium, phosphate, calcium, uric acid, creatinine and urine output',
      'High-risk or established TLS: urgent oncology/renal discussion, carefully managed IV fluids if not overloaded and frequent labs',
      'Treat hyperkalaemia immediately; manage phosphate/calcium disturbances and uric acid with risk-appropriate therapy',
      'Avoid nephrotoxins and routine urine alkalinization unless specifically indicated',
      'Urgent dialysis-capable transfer for refractory electrolyte disturbance, fluid overload or worsening AKI.',
    ],
    treatment: [
      '**Prevention:** risk-stratify with oncology. Hydration with isotonic fluid tailored to cardiac/renal status and urine output; avoid potassium/phosphate in fluids. Allopurinol for appropriate intermediate-risk patients per local protocol; rasburicase for high-risk or established hyperuricaemia when available. Check G6PD risk before rasburicase because of haemolysis/methemoglobinaemia risk.',
      '**Established TLS:** urgent oncology/nephrology input, continuous ECG if significant electrolyte disturbance, frequent electrolytes/renal function (often every 4–6 h in high-risk/active TLS). Treat hyperkalaemia immediately. Avoid routine calcium for asymptomatic hypocalcaemia because calcium-phosphate precipitation can worsen renal injury; give calcium for symptomatic hypocalcaemia or ECG instability under monitored care. Dialysis may be needed for refractory hyperkalaemia, severe hyperphosphataemia, fluid overload or AKI.',
    ],
    references: [
      'British Committee for Standards in Haematology TLS guideline; ASCO/other current oncology TLS guidance; Cairo-Bishop TLS criteria; Ghana MoH STG 2017.',
    ],
  }),
  topic(EM, 'im-cardiogenic-shock', undefined, 'Cardiogenic shock', {
    tone: 'critical',
    recognition:
      'Suspect hypotension (often SBP <90 mmHg or need for support) with tissue hypoperfusion due to cardiac dysfunction: cold peripheries, confusion, oliguria, lactate elevation, pulmonary oedema. Causes include MI, acute valve/mechanical complication, myocarditis, arrhythmia and decompensated HF.',
    flowchart: [
      'Hypotension with cold peripheries, altered mentation, oliguria or pulmonary oedema',
      'Call senior/transfer team, ABCDE, ECG, IV access, lactate and bedside echo if available',
      'Treat reversible cause (especially ACS/arrhythmia) and avoid indiscriminate fluid loading',
      'Oxygen/ventilatory support if indicated; vasopressor/inotrope only with close monitoring and protocol',
      'Urgent transfer to facility with critical care and definitive cardiac intervention',
      'Monitor BP, perfusion, urine output, lactate and rhythm continuously where possible.',
    ],
    treatment: [
      'Call senior clinician and referral/critical-care team immediately. ABCDE, continuous ECG/SpO₂/BP, two IV lines, bedside glucose, ECG, troponin, FBC/U&E/LFT, lactate/blood gas and urgent echocardiography/POCUS if trained. Treat cause, especially urgent coronary reperfusion for MI-related shock.',
      '!!Do not give large empiric fluid boluses to a congested patient.!! If no pulmonary congestion and suspected preload depletion/right ventricular infarction, give a cautious 250 mL isotonic crystalloid challenge and reassess. Vasopressor/inotrope choice and titration require monitored critical care; norepinephrine is commonly preferred for persistent hypotension, with dobutamine considered for low cardiac output after BP support. Do not start unmonitored infusions in a low-resource ward.',
      'Arrange urgent transfer for ICU, coronary intervention, mechanical support or specialist care. Monitor perfusion, urine output, lactate, mental status and arrhythmias during stabilization.',
    ],
    references: [
      '2023 ESC Guidelines for acute coronary syndromes; AHA scientific statements on cardiogenic shock; 2022 AHA/ACC/HFSA Heart Failure Guideline; Ghana MoH STG 2017.',
    ],
  }),
  topic(EM, 'im-septic-shock', undefined, 'Septic shock', {
    tone: 'critical',
    recognition:
      'Suspect infection with acute organ dysfunction; septic shock includes persistent circulatory failure requiring vasopressors to maintain MAP ≥65 mmHg and lactate >2 mmol/L despite adequate fluids, but treatment must start before formal criteria are complete. Obtain cultures if no meaningful delay.',
    flowchart: [
      'Suspected infection with hypotension or organ dysfunction',
      'ABCDE, lactate if available, cultures if no delay, IV access and rapid source assessment',
      'Give prompt empiric antibiotics guided by likely source/local resistance',
      'Assess fluid responsiveness and give crystalloid in reassessed aliquots; use caution in HF/CKD',
      'Persistent hypotension after appropriate fluids: vasopressor support and urgent transfer to monitored/critical-care setting',
      'Source control, urine output and repeated perfusion assessment; de-escalate antibiotics when data permit.',
    ],
    treatment: [
      'Immediately assess ABCDE, obtain IV access, measure lactate if available, collect blood cultures before antibiotics when this causes no meaningful delay, and monitor urine output. Use NEWS/NEWS2, MEWS or SIRS as part of assessment; do not use qSOFA alone to screen for sepsis. **In septic shock or probable/definite sepsis, give appropriate IV antimicrobials immediately, ideally within 1 hour**, guided by likely source, Ghana/facility antibiogram, allergy and renal function. For possible sepsis without shock, rapidly investigate infectious and non-infectious causes and give antimicrobials within 3 hours if concern for infection persists. Reassess and de-escalate when data return.',
      'For sepsis-induced hypoperfusion/shock, the 2026 Surviving Sepsis Campaign suggests at least 30 mL/kg IV crystalloid within 3 hours, but this is conditional and requires frequent reassessment; individualize for heart failure, CKD, frailty, malnutrition and signs of fluid overload. Reassess capillary refill, lungs, BP, mental state and urine output after each aliquot. If hypotension persists, norepinephrine is first-line in monitored care, initially targeting MAP about 65 mmHg (consider 60–65 mmHg in adults aged ≥65 years). Peripheral vasopressor initiation should occur only under a written local protocol with a suitable IV site and close monitoring; do not delay referral if safe monitoring is unavailable.',
      'Control source (drainage, surgery, remove infected line) as soon as feasible. Monitor BP, mental status, perfusion, urine output, glucose, lactate trend and fluid overload. Consider hydrocortisone 200 mg/day for ongoing vasopressor-dependent shock per critical-care protocol. Do not use routine antibiotics without reassessment.',
    ],
    references: [
      'Surviving Sepsis Campaign International Guidelines for Sepsis and Septic Shock (2026); WHO sepsis resources; Ghana MoH STG 2017; current Ghana national and facility antimicrobial policy. Apply the 2026 guidance through a locally approved sepsis pathway and antibiogram.',
    ],
  }),
  topic(EM, 'im-hypovolaemic-shock', undefined, 'Hypovolemic shock', {
    tone: 'critical',
    recognition:
      'Identify cause: haemorrhage, GI loss, dehydration, burns or third-spacing. ABCDE, control external bleeding, call senior/transfer, keep warm, obtain large-bore IV access, CBC, U&E, lactate, coagulation and group/crossmatch. Do not delay haemorrhage control.',
    flowchart: [
      'Hypotension/tachycardia with suspected fluid or blood loss',
      'ABCDE, control external bleeding, obtain IV access, glucose and crossmatch/labs as available',
      '**ASSESS / DECIDE:** haemorrhage? control source and activate blood/transfer pathway; avoid delaying definitive haemostasis',
      { check: 'Non-haemorrhagic fluid loss? give isotonic crystalloid in reassessed boluses' },
      'Monitor mental status, pulse, BP, capillary refill and urine output',
      'Persistent shock, suspected internal bleeding or need for blood/surgery: urgent transfer.',
    ],
    treatment: [
      '**Non-haemorrhagic volume loss:** give isotonic crystalloid in 250–500 mL aliquots with frequent reassessment of BP, pulse, capillary refill, lungs and urine output; tailor to age, pregnancy, and cardiac/renal status. Replace ongoing losses and treat the cause.',
      '**Haemorrhagic shock:** activate blood-transfusion/major-haemorrhage protocol where available; prioritize blood products and definitive haemostasis rather than excessive crystalloid. Consider tranexamic acid early for major traumatic bleeding within 3 h of injury per trauma protocol; not for every cause of bleeding. Avoid hypothermia and correct coagulopathy with specialist guidance.',
      'Monitor haemodynamics, mental state, urine output, Hb trend and lactate. Escalate for ongoing bleeding, persistent shock, suspected internal haemorrhage, need for blood products or surgery not available locally.',
    ],
    references: [
      'WHO trauma/bleeding guidance; European guideline on management of major bleeding and coagulopathy following trauma (2023); NICE major trauma guidance; Ghana MoH STG 2017.',
    ],
  }),
  topic(SUP, 'im-acute-pain', undefined, 'Acute pain management / WHO analgesic ladder', {
    recognition:
      'Assess pain with a consistent scale (0–10), location, onset, character, function and red flags. Diagnose and treat cause; pain relief must not delay investigation of ACS, acute abdomen, compartment syndrome, stroke or other emergencies. Reassess after each intervention.',
    flowchart: [
      'Assess pain score, cause, red flags, allergies, renal/hepatic function and current medicines',
      { check: 'Emergency cause or unstable patient? stabilize and investigate urgently' },
      'Choose analgesia by pain severity and mechanism; use non-opioid ± adjuvant for mild pain, escalate for moderate/severe pain according to local formulary',
      'Prescribe route/dose/interval and reassessment time; consider renal/liver adjustment and interactions',
      'Monitor efficacy, sedation, respiratory rate, constipation and adverse effects; treat cause and make a review/stop plan.',
    ],
    treatment: [
      '**Mild pain:** paracetamol 500–1,000 mg orally every 6–8 h as needed; usual adult maximum 4 g/day, but use lower maximum (often ≤2 g/day) in significant liver disease, chronic alcohol use, malnutrition or frailty. Avoid duplicate combination products.',
      'NSAIDs can help inflammatory pain but avoid or use extreme caution in CKD/AKI, peptic ulcer/GI bleed, anticoagulation, uncontrolled hypertension, heart failure, pregnancy and high cardiovascular risk. Use the lowest effective dose for the shortest duration if appropriate.',
      '**Moderate/severe acute pain:** use a short-acting opioid according to local formulary and clinician experience, titrated to effect with respiratory rate, sedation, BP and oxygenation monitoring. In opioid-naïve adults, small titrated IV morphine doses (e.g. 1–2 mg every 5–10 min in monitored settings) may be safer than a large initial dose; reduce dose in renal impairment/older/frail patients. Have naloxone and airway support available. Avoid opioids with alcohol/sedatives and reassess for respiratory depression.',
      'WHO cancer pain guidance supports individualized analgesia and opioid access for cancer pain; the traditional 3-step ladder is not a rigid rule for all acute pain. Consider adjuvants and non-pharmacological care. Document response, adverse effects, functional goal and review/stop date.',
    ],
    references: [
      'WHO Guidelines for the pharmacological and radiotherapeutic management of cancer pain in adults and adolescents (2018); WHO analgesic ladder framework; NICE acute pain/opioid guidance; Ghana MoH STG 2017.',
    ],
  }),
]
