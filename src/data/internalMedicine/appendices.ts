import type { Section } from '../../types/protocol'
import { note, refs, sec, ul, warn, type Place } from '../helpers'

const AP: Place = { chapter: 'Appendices' }

export const APPENDICES: Section[] = [
  sec(
    AP,
    'im-high-alert',
    'A',
    'High-alert medicine safety',
    [
      ul(
        '**Insulin infusions:** use a standardized concentration and pump; independent double-check; hourly glucose; potassium monitoring; never start DKA insulin if potassium is severely low.',
        '**Potassium:** !!never IV push!!; use diluted infusion and pump; confirm renal function/urine output; ECG monitoring for high-rate replacement.',
        '**Thrombolytics/anticoagulants:** confirm indication, weight, contraindications, baseline tests where required, dose and timing; document bleeding checks and escalation plan.',
        '**Vasopressors:** central access preferred when feasible; if peripheral initiation is necessary, use a suitable proximal vein and frequent site checks while arranging definitive access/transfer.',
        '**Concentrated dextrose, magnesium, calcium and sedatives:** verify product concentration and infusion rate; monitor relevant physiology.',
      ),
    ],
    { tone: 'urgent' },
  ),
  sec(AP, 'im-monitoring', 'B', 'Suggested monitoring minimums (adapt to acuity)', [
    ul(
      '**Unstable patient:** continuous pulse oximetry and ECG where available; BP every 5–15 min; repeated ABCDE and documented response.',
      '**DKA/HHS:** glucose hourly; electrolytes, renal function, venous pH/bicarbonate and ketones every 2–4 h initially; strict fluid balance.',
      '**Hyperkalaemia:** continuous ECG if severe/ECG changes; glucose after insulin at baseline and repeated for 4–6 h; repeat potassium within 1–2 h and for rebound.',
      '**Stroke:** frequent neurological observations and BP per stroke/reperfusion protocol; immediate reassessment for deterioration.',
      '**Opioids:** respiratory rate, sedation, BP and SpO₂ after dose/titration and during ongoing treatment.',
    ),
  ]),
  sec(AP, 'im-formulary-audit', 'C', 'Minimum local formulary and equipment audit', [
    ul(
      '**Emergency medicines to verify:** oxygen delivery equipment, salbutamol, ipratropium, systemic corticosteroids, benzodiazepines, levetiracetam/phenytoin, ceftriaxone, ampicillin, aciclovir, dextrose, insulin and infusion sets, potassium and calcium preparations, furosemide, nitrates, aspirin, clopidogrel, statin, hydrocortisone, crystalloids, analgesics, naloxone, antibiotics based on local policy and vasoactive agents where monitored use is possible.',
      '**Equipment:** glucometer and strips, pulse oximeter, ECG, suction, bag-mask, oxygen, infusion pumps, BP cuffs, thermometer, urine catheter/measurement, blood culture supplies, LP kit, defibrillator, emergency airway equipment and reliable transfer communications.',
      'Confirm availability of CT, blood bank, dialysis, echocardiography, ICU, endoscopy, ophthalmology, neurology, cardiology, nephrology and burns/dermatology referral pathways.',
    ),
  ]),
  sec(AP, 'im-approval-log', 'D', 'Local approval and revision log', [
    ul(
      'Facility: ______________________________',
      'Clinical lead: __________________________',
      'Pharmacy lead: _________________________',
      'Version: 1.0 draft for clinical review',
      'Prepared: 17 October 2026',
      'Approved by / date: _____________________',
      'Next review date: _______________________',
      'Revision trigger: new Ghana MoH guideline/circular, major international guideline update, formulary or referral change, safety incident or audit finding.',
    ),
    warn(
      'Source check: this log says "Version: 1.0 draft … Prepared: 17 October 2026", but the cover page says "Version 0.3 | 18 October 2026".',
      'Check with the source',
    ),
  ]),
  sec(AP, 'im-references', undefined, 'Selected reference list and limitations', [
    note(
      'Use the latest full-text version available and record the access/review date during local ratification. Some references are listed as guideline families or editions requiring a final update check; this is intentional where annual updates or local implementation documents may have changed.',
    ),
    refs(
      'Ghana Ministry of Health / Ghana National Drugs Programme. Standard Treatment Guidelines, 7th edition. 2017. https://www.moh.gov.gh/wp-content/uploads/2020/07/GHANA-STG-2017-1.pdf',
      'American Heart Association/American Stroke Association. 2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke. Stroke. Published 26 January 2026. https://professional.heart.org/en/guidelines-statements/2026-guideline-for-the-early-management-of-patients-with-acute-ischemic-strokestr0000000000000513',
      'European Society of Cardiology. 2023 ESC Guidelines for the management of acute coronary syndromes. European Heart Journal. 2023.',
      'American College of Cardiology/American Heart Association. 2025 Guideline for the Management of Patients With Acute Coronary Syndromes. Verify current full guideline and local implementation. https://professional.heart.org/en/science-news/2025-guideline-for-the-management-of-patients-with-acute-coronary-syndromes',
      'European Society of Cardiology. 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure. European Heart Journal. 2021.',
      'American Heart Association/American College of Cardiology/Heart Failure Society of America. 2022 Guideline for the Management of Heart Failure. Circulation. 2022.',
      'American Diabetes Association, EASD, JBDS, AACE, Diabetes Technology Society. Hyperglycemic Crises in Adults With Diabetes: A Consensus Report. Diabetes Care. 2024. https://doi.org/10.2337/dci24-0032',
      'American Diabetes Association. Standards of Care in Diabetes—2026. Verify current chapter-specific recommendations.',
      'Kidney Disease: Improving Global Outcomes (KDIGO). Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. 2024. https://kdigo.org/guidelines/ckd-evaluation-and-management/',
      'KDIGO. Clinical Practice Guideline for Acute Kidney Injury. 2012; check for updates.',
      'World Health Organization. Guidelines for the prevention, diagnosis, care and treatment for people with chronic hepatitis B infection. 2024. https://www.who.int/publications/i/item/9789240090903',
      'World Health Organization. Consolidated guidelines on hepatitis B and C prevention, testing, treatment, service delivery and monitoring (2026 implementation handbook). https://www.who.int/publications/b/82108',
      'World Health Organization. Updated recommendations on treatment of adolescents and children with chronic HCV infection and HCV simplified service delivery / current HCV guidance. 2022 and updates.',
      'American Association for the Study of Liver Diseases/IDSA. HCV Guidance: Recommendations for Testing, Managing, and Treating Hepatitis C. Current online version.',
      'American Association for the Study of Liver Diseases. Practice Guidance on prevention, diagnosis, and treatment of hepatocellular carcinoma. Hepatology. 2023.',
      'European Association for the Study of the Liver. Clinical Practice Guidelines for decompensated cirrhosis and management of ascites; verify current editions.',
      'Global Initiative for Asthma (GINA). Global Strategy for Asthma Management and Prevention. Current annual report; verify latest edition before adoption.',
      'American Epilepsy Society. Evidence-Based Guideline: Treatment of Convulsive Status Epilepticus in Children and Adults. Epilepsy Currents. 2016.',
      'National Institute for Health and Care Excellence (NICE). NG240: Meningitis (bacterial) and meningococcal disease: recognition, diagnosis and management. 2024.',
      'World Health Organization. Meningitis diagnosis, treatment and care guideline. 2025.',
      'Infectious Diseases Society of America. Management of Encephalitis: Clinical Practice Guidelines. Clinical Infectious Diseases. 2008; verify for updates.',
      'Endocrine Society. Diagnosis and Treatment of Primary Adrenal Insufficiency: Clinical Practice Guideline. Journal of Clinical Endocrinology & Metabolism. 2016.',
      'American Thyroid Association. Guidelines for Diagnosis and Management of Hyperthyroidism and Other Causes of Thyrotoxicosis. Thyroid. 2016.',
      'European League Against Rheumatism (EULAR). Recommendations for the management of systemic lupus erythematosus; 2023 update.',
      'KDIGO. Clinical Practice Guideline for the Management of Lupus Nephritis. 2024.',
      'American College of Rheumatology. Guideline for the Treatment of Rheumatoid Arthritis. 2021.',
      'European League Against Rheumatism (EULAR). Recommendations for the management of rheumatoid arthritis with synthetic and biological DMARDs; 2022 update.',
      'World Federation of Hemophilia. Guidelines for the Management of Hemophilia. 3rd edition. 2020.',
      'American Society of Hematology. Guidelines for sickle cell disease: transfusion support (2020) and pain management (2020); verify current updates.',
      'National Heart, Lung, and Blood Institute. Evidence-Based Management of Sickle Cell Disease: Expert Panel Report. 2014.',
      'Prescott H, Antonelli M, Alhazzani W, et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock. 2026. Critical Care Medicine. doi:10.1097/CCM.0000000000007075. https://sccm.org/clinical-resources/guidelines/guidelines/surviving-sepsis-campaign-international-guidelines-for-management-of-sepsis-and-septic-shock-2026',
      'European Society of Intensive Care Medicine / European Society of Anaesthesiology and Intensive Care. European guideline on management of major bleeding and coagulopathy following trauma. 2023.',
      'World Health Organization. Guidelines for the pharmacological and radiotherapeutic management of cancer pain in adults and adolescents. 2018.',
      'National Kidney Foundation. KDOQI clinical practice guidance for hemodialysis adequacy and related dialysis care; verify current edition.',
      'British Association of Dermatologists / European S3 guideline. Guidance for Stevens–Johnson syndrome and toxic epidermal necrolysis; verify current edition.',
    ),
    warn(
      'This is an editorially organized draft based on the supplied text and a targeted check of selected current guideline sources (checked 18 October 2026). It is not a full systematic review of all 26 protocols and does not constitute independent specialist validation of every regimen, dose, contraindication, laboratory threshold or reference. Before clinical deployment, each protocol must be reviewed line-by-line by the responsible Ghanaian clinical governance team and compared with current national programme guidance and local capabilities.',
      'Important limitation',
    ),
  ]),
]
