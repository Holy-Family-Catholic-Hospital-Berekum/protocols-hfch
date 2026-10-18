import type { Section } from '../../../types/protocol'
import { box, danger, drug, li, note, ol, p, sec, see, table, ul, warn, type Place } from '../../helpers'
import { C9, CHEMO_WARNING } from './chapter9OncologyA'

const C9A: Place = { chapter: '9. Oncological disorders', subchapter: 'Acute lymphoblastic leukaemia (ALL)' }

const COTRIMOXAZOLE_BY_BSA = '0.5-0.75 m2 = 240mg bd; 0.76-1.0m2 = 360mg bd; >1.0m2 = 480mg bd'

export const CHAPTER_9_ONCOLOGY_B: Section[] = [
  sec(C9A, 'k-all', '9.8', 'ALL: investigations, management and pre-treatment phase', [
    CHEMO_WARNING,
    p('**Investigations**'),
    ul(
      'FBC [Hb, RBCs, WBCs total and differential, Platelet] + retic count ± film comment',
      'Renal function test, Blood Urea and electrolyte',
      'Chest x-ray',
      'Abdominal Ultrasound Scan',
      'Tumor aspirate/ biopsy: Contact pathologists so that reports are obtained within 3 -5 days.',
    ),
    p('**Management**'),
    ul(
      'Cytotoxic drugs are calculated by body surface area (BSA)',
      'BSA (m²) = Square root of [Height (m) x Weight (kg) /3600] or use chart to convert from kg.',
      'Treatment is given as pre-treatment phase, followed by regimen A or B induction phase, followed by maintenance.',
      '**Regimen A** induction for patients age <10yrs and highest recorded total WBC count <50 x10⁹/L.',
      '**Regimen B** induction for patients age ≥ 10yrs and/or highest recorded total WCC >50 x10⁹/L.',
    ),
    warn(
      'Source check: the BSA formula is printed with height in metres; the standard Mosteller formula √(height × weight / 3600) uses height in centimetres. Confirm before use.',
      'Check with the source',
    ),
    see('k-appendix-bsa', 'Estimating body surface area (Appendix)'),
    p('**9.8.1 Pre-treatment phase**'),
    ul(
      'Commence as soon as diagnosis confirmed either by blood film or bone marrow aspirate review by haematologist.',
      'For patients with clinical suspicion of CNS disease see notes at end of protocol',
      'Hydration is commenced - maximal oral fluids, supplemented for 48hrs with 2-2.5L/m2/24hrs iv.',
      'Allopurinol is commenced - 10-20mg/kg/day po in 2 divided doses for 7 days',
      li('Prednisolone 2mg/kg po daily in the morning.', 'If WCC ≥80x10⁹/L the pre-treatment phase continues for 7days', 'If WCC <80x10⁹/L the pre-treatment phase continues for 2 days'),
      'Once pre-treatment phase completed patient commences day 1 of induction with regimen A or B depending on their highest recorded WCC and age as above.',
    ),
    see('k-tls', '9.1.1 Tumour lysis syndrome'),
  ]),
  sec(C9A, 'k-all-regimen-a', '9.8.2', 'ALL: regimen A induction', [
    CHEMO_WARNING,
    drug(
      'Regimen A induction',
      'Prednisolone 2mg/kg po in the morning day 1-28, then 1.5mg/kg for 2 days, 1mg/kg for 2 days, 0.5mg/kg for 2 days, then stop.',
      'Vincristine 1.5mg/m2 (max dose 2mg) iv day 1, 8, 15, 22, 29',
      'Intrathecal Methotrexate dose by age: <2yrs = 7.5mg, 2yrs = 10mg, ≥3yrs = 12.5mg. Day 9, 16 and 23 (see intrathecal notes)',
      `Cotrimoxazole by BSA on day of vincristine and following days (Day 1,2,8,9,15,16,22,23,29,30): ${COTRIMOXAZOLE_BY_BSA}`,
      'Folic Acid 5mg PO daily day 1-30',
    ),
    p('**Reviews during regimen A induction**'),
    ol(
      'Patient can be discharged once diagnosis confirmed and iv fluids discontinued if they are afebrile, well enough to be managed at home and parents understand the drug regimen and plan for review. Parents must also understand indications for returning for earlier review.',
      'Check FBC on day 30 to see if ready to progress to maintenance (neutrophil count more than 0.75x10⁹/L and platelet count > 75x10⁹/L). If counts too low request blood film review by haematologist ?needs BM aspirate or ?non-responder/relapse.',
    ),
    see('k-all-intrathecal', 'Intrathecal methotrexate notes'),
  ]),
  sec(C9A, 'k-all-regimen-b', '9.8.3', 'ALL: regimen B induction', [
    CHEMO_WARNING,
    drug(
      'Regimen B induction',
      'Prednisolone 2mg/kg po in the morning day 1-28, then 1.5mg/kg for 2 days, 1mg/kg for 2 days, 0.5mg/kg for 2 days, then stop',
      'Vincristine 1.5mg/m2 (max dose 2mg) iv day 1, 8, 15, 22, 29',
      'Doxorubicin 25mg/m2 iv day 8 and 22',
      'Cyclophosphamide 750mg/m2 iv day 29 and 36',
      '6-mercaptopurine 75mg/m2 po daily day 30 onwards irrespective of blood counts. Do not take milk simultaneously',
      'Intrathecal Methotrexate dose by age: <2yrs = 7.5mg, 2yrs = 10mg, 3yrs or more = 12.5mg day 9, 16, 23, and 30 (see intrathecal notes)',
      `Cotrimoxazole by BSA on day of vincristine and following day (Day 1,2,8,9,15,16,22,23,29,30): ${COTRIMOXAZOLE_BY_BSA}`,
      'Folic Acid 5mg po daily on day 1-30',
    ),
    p('**Reviews during regimen B induction**'),
    ol(
      'Patient can be discharged once diagnosis confirmed and iv fluids discontinued if they are afebrile, well enough to be managed at home and parents understand the drug regimen and plan for review. Parents must also understand indications for returning for earlier review.',
      'Check FBC on day 43 to see if ready to progress to maintenance (neutrophil count more than 0.75x10⁹/l and platelet count >75x10⁹/l). If counts too low adjust dose of 6-mercaptopurine as below and repeat FBC on day 50. If count still too low omit 6-mercaptopurine and request FBC with blood film review by haematologist on day 57 ?needs BM aspirate - ?non-responder/relapse.',
    ),
    see('k-all-intrathecal', 'Intrathecal methotrexate notes'),
  ]),
  sec(C9A, 'k-all-maintenance', '9.8.4', 'ALL: maintenance', [
    CHEMO_WARNING,
    ol('Commence once induction completed, PLUS Neutrophil count > 0.75x10⁹/L and PLT > 75x10⁹/L.', 'Should be continued for 48 weeks in four cycles of 12 weeks (84days)'),
    drug(
      'Maintenance',
      'Intrathecal Methotrexate dose by age: <2yrs = 7.5mg, 2-3yrs = 10mg, ≥3yrs = 12.5mg day 1',
      '6-mercaptopurine 75mg/m2 po daily day 1-84 (see below re dose adjustment). Do not take milk simultaneously',
      'Oral Methotrexate 20mg/m2 po weekly day 8, 15, 22, 29, 36, 43, 50, 57, 64, 71, 78 (weekly, but omit on day of intrathecal methotrexate) (see below re dose adjustment)',
      'Vincristine 1.5mg/m2 (max dose 2mg) iv day 15, 43, 71 (ie week 3, 7, 11)',
      'Prednisolone 2mg/kg po day 15-19, 43-47, 71-75 (ie for 5 days week 3, 7, 11)',
    ),
    p('**Clinic visits during maintenance**'),
    p(
      "Patient should attend for FBC on the day prior to intrathecal methotrexate and attend with the results to be checked prior to drug administration platelet count must be >50x10⁹/L and patient's card. The IV vincristine and PO Prednisolone are then given.",
    ),
    p('**6-mercaptopurine and oral methotrexate dose adjustment during maintenance**'),
    ul(
      'The doses should be adjusted to maintain the neutrophil count between 0.75 and 1.5x10⁹/l and platelets between 75 -150x10⁹/L.',
      'If the neutrophil count falls to 0.5 - 0.75x10⁹/L halve the dose of 6-mercaptopurine and oral methotrexate. Check FBC weekly and restart the 6-mercaptopurine (75mg/m2 po daily) and oral methotrexate (20mg/m2 po weekly) when the neutrophil count is > 0.75x10⁹/L.',
      'If the platelet count falls to between 50 -75x10⁹/L halve the dose of 6-mercaptopurine and oral methotrexate.',
      'If the platelet count falls to < 50x10⁹/L. STOP the 6-mercaptopurine and oral methotrexate. Check FBC weekly and restart the 6-mercaptopurine (75mg/m2 po daily) and oral methotrexate (20mg/m2 po weekly) when the platelet count is >75x10⁹/L.',
      'If both the platelet and neutrophil counts fall, adjust dose according to which has the biggest drop and ensure that both rise with dose adjustment.',
    ),
    see('k-all-maintenance-v2', 'Second version of these maintenance instructions printed in the source'),
  ]),
  sec(
    C9A,
    'k-all-intrathecal',
    undefined,
    'ALL: intrathecal methotrexate, admission, relapse',
    [
      danger(
        'It is imperative that vincristine is NOT given via the intrathecal route. In order to avoid this occurring intravenous vincristine should NOT be given on the same day as intrathecal methotrexate.',
        'Intrathecal methotrexate',
      ),
      ul(
        'The only drugs that can be given by the intrathecal route are methotrexate, hydrocortisone and cytosine.',
        '10 drops of CSF should be collected into a sterile container and taken to the haematology lab for a slide to be made and a white cell count done. If the CSF WCC is >0.1x10⁹/L and RCC <1x10⁹/L discuss with haematologist ?CNS involvement/relapse.',
      ),
      p('**Who should be admitted to the ward**'),
      ol(
        'Patients that are neutropenic (neutrophil count <1.0x10⁹/L) and febrile (Temp. > 38°C) should be assessed and admitted to the ward for broad spectrum antibiotics as per the neutropenic sepsis regimen.',
        'Patients that are too unwell to be managed at home e.g. Diarrhea or vomiting requiring intravenous fluids, hypoxia, severe uncontrolled pain.',
        'Patients with clinical evidence of CNS disease at presentation (neurological deficit) and patients who have blasts in their CSF. These patients should be treated as per regimen B unless too unwell to treat (at the discretion of the specialist)',
      ),
      see('k-febrile-neutropenia', '9.1.2 Febrile neutropenia'),
      p('**Relapse and non-responders:** These patients should be given palliative treatment only eg dexamethasone (discuss with the specialist)'),
      p(
        '**Considerations for the future:** Asparaginase could be added to the regimen if it becomes more readily available locally; small doses of iv cytosine could be added to regimen B induction if this becomes more readily available locally.',
      ),
    ],
    { tone: 'critical' },
  ),
  sec(C9, 'k-onc-general-rules', undefined, 'General rules, reasons to defer treatment and when to discuss', [
    note(
      'In the source this text follows the ALL protocol, but its references to "pre-phase" and cyclophosphamide tablets match the Burkitt lymphoma protocol (9.5).',
    ),
    p('**General rules**'),
    ul(
      'Patients are enrolled into the treatment programme through a specialist.',
      'Pre-phase helps to reduce the risk of tumour lysis syndrome. If cyclophosphamide tabs cannot be swallowed, pre-phase can be given i.v.',
      'Laboratory investigations before treatment (minimum) includes Hb, WBC and platelets (renal function and electrolytes are not necessary in my opinion - urinary output is more important); LDH is not a necessary parameter - only if it is high before starting treatment, then it may be able to monitor remission and relapse)',
      'X-rays are usually not helpful and in classical presentation not needed should be indicated by specialists;',
      'Ultrasound of abdomen in all cases desirable',
    ),
    p('Pre-phase and first cycle of induction is given as in-patient treatment. Subsequent cycles can be given as out-patient treatment.'),
    p('**On each visit**'),
    ul(
      'History of fever, pain, mouth sores, appetite, weight loss, skin/joint problems, activity',
      'O/E temperature, weight, pallor, inspection mucous membranes and skin for infections,',
      'Lab: FBC (Hb, WBC, Platelets) + MPs',
    ),
    box(
      'urgent',
      'Reasons to defer treatment',
      'If Hb below 7g/dl - defer cycle for 5 days but give oral dexamethasone (O.6mg/kg in 2-4 doses',
      'If platelets below 100ml defer intrathecal methotrexate (without delaying the next i.v cycle)',
      'If malaria positive, but not ill - treat malaria and give chemotherapy',
      'If malaria positive, but very ill - treat malaria first and discuss with specialist (child may be ill because of the tumour!)',
      'If fever for no obvious reasons - treat with antibiotics and discuss with senior.',
    ),
    warn('Source typos: dexamethasone "O.6mg/kg" (presumably 0.6 mg/kg) and platelets "below 100ml" (unit missing, presumably 100 x10⁹/L).', 'Check with the source'),
    box(
      'info',
      'When to discuss a patient',
      'When tumour increases during treatment',
      'When patient ill',
      'When fever without explanation',
      'When any reason to defer treatment persists more than one week (do not forget - it is the tumour that kills the patient!)',
    ),
  ]),
  sec(C9A, 'k-all-maintenance-v2', undefined, 'ALL: maintenance (second version printed in the source)', [
    CHEMO_WARNING,
    warn(
      'The source prints the ALL maintenance instructions twice (pages 99-100 and 102-103) with differences: this version reviews on days 15, 43 and 71 instead of FBC before each intrathecal dose; it adds a STOP rule for neutrophils <0.5x10⁹/L; and its CSF threshold is "RCC >1.0x10⁹/L" where the first version has "RCC <1x10⁹/L". It also starts mid-sentence. A specialist must reconcile the two versions before publishing.',
      'Duplicate with differences',
    ),
    p('...6-mercaptopurine and request FBC with film FAO haematologist on day 27 → ? Needs BM aspirate - ?non-responder/relapse.'),
    p('**Maintenance**'),
    ul(
      'Commence once induction completed and neutrophil count > 0.75x10⁹/L and platelet count more than 75x10⁹/L',
      'Should be continued for 48 weeks in four cycles of 12 weeks (84 days)',
    ),
    drug(
      'Maintenance',
      'Intrathecal Methotrexate dose by age: <2yrs = 7.5mg; 2yrs = 10mg; ≥3yrs = 12.5mg day 1',
      '6-mercaptopurine 75mg/m2 po daily day 1-84 (see below for dose adjustment) [Do not take milk simultaneously]',
      'Oral Methotrexate 20mg/m2 po weekly day 8, 15, 22, 29, 36, 43, 50, 57, 64, 71, 78 (weekly, but omit on day of intrathecal methotrexate) (see below re dose adjustment)',
      'Vincristine 1.5mg/m2 (max dose 2mg) IV day 15, 43, 71 (i.e. week 3, 7, 11)',
      'Prednisolone 2mg/kg po day 15-19, 43-47, 71-75 (i.e. for 5 days in weeks 3, 7, 11)',
    ),
    p('**Clinic visits during maintenance**'),
    p(
      "Patient should attend for review on days 15, 43, and 71 (i.e. 4 weekly). They should have FBC checked the day before. The patient and FBC result should be reviewed (for side effects of treatment and possible signs of relapse especially). Dose adjustments should be made to the oral methotrexate and 6-mercaptopurine doses (see below) and documented in the patient's card. The iv vincristine and po Prednisolone are then given.",
    ),
    p('**6-mercaptopurine and oral methotrexate dose adjustment during maintenance**'),
    ul(
      'The doses should be adjusted to maintain the neutrophil count between 0.75 and 1.5x10⁹/l and platelets between 75 and 150x10⁹/l.',
      'If the neutrophil count falls to between 0.5 and 0.75x10⁹/L. HALVE the dose of 6-mercaptopurine and oral methotrexate.',
      'If the neutrophil count falls to <0.5x10⁹/L. STOP the 6-mercaptopurine and oral methotrexate. Check FBC weekly and restart the 6-mercaptopurine (75mg/m2 po daily) and oral methotrexate (20mg/m2 po weekly) when the neutrophil count is >0.75x10⁹/L.',
      'If the platelet count falls to between 50 and 75x10⁹/L. HALVE the dose of 6-mercaptopurine and oral methotrexate.',
      'If the platelet count falls to <50x10⁹/L. STOP the 6-mercaptopurine and oral methotrexate. Check FBC weekly and restart the 6-mercaptopurine (75mg/m2 po daily) and oral methotrexate (20mg/m2 po weekly) when the platelet count is .75x10⁹/l.',
      'If both the platelet and neutrophil counts fall dose adjust according to which has the biggest drop and ensure the both rise with dose adjustment.',
    ),
    p('**Intrathecal methotrexate**'),
    ul(
      'It is imperative that vincristine is NOT given via the intrathecal route. In order to avoid this occurring intravenous vincristine should not be given on the same day as intrathecal methotrexate.',
      'The only drugs that can be given by the intrathecal route are methotrexate, hydrocortisone and cytosine.',
      '10drops of CSF should be collected into a sterile container and taken to the haematology lab for a slide to be made and a white cell count done. If the CSF WCC is > 0.1x10⁹/L and RCC >1.0x10⁹/L discuss with haematologist ?CNS involvement /relapse.',
    ),
    p('**Who should be admitted to the ward?**'),
    ul(
      'Patients that are neutropenic (neutrophil count < 1.0x10⁹/L) and febrile (Temp. 38°C) should be assessed and admitted to the ward for broad spectrum antibiotics as per the neutropenic sepsis regimen',
      'Patients that are too unwell to be managed at home e.g. diarrhea or vomiting requiring intravenous fluids, hypoxia, and severe uncontrolled pain.',
      'Patients with clinic evidence of CNS disease at presentation (neurological deficit) and patients who have blasts in their CSF. These patients should be treated as per regimen B unless too unwell to treat (at the discretion of the specialist)',
    ),
    p('**Relapse and non-responders:** These patients should be given palliative treatment only e.g. dexamethasone (discuss with the specialist)'),
  ]),
  sec(C9, 'k-onc-drugs', '9.9', 'Some common drugs used in paediatric oncology patients', [
    table(
      ['Drug', 'Administration'],
      [
        ['IV Cyclophosphamide', 'dose over 30mins in 100mls fluid (N/S)'],
        ['IV Vincristine', 'dose bolus'],
        ['IV Etoposide', 'dose in 100ml N/S over one hour'],
        ['IV Doxorubicin (Adriamycin)', 'dose in 250mls over 6 hrs.'],
        ['IV Carboplatin', 'dose in 150ml 5% dextrose over one hour.'],
        ['IV Actinomycin D', 'dose bolus'],
        ['IV Bleomycin', 'dose over 30 mins in N/S'],
        ['IV Dacarbazine', 'bolus over 15mins'],
      ],
    ),
    table(
      ['Age', 'IT methotrexate'],
      [
        ['<1yr', '6 mg'],
        ['1-<2yr', '8mg'],
        ['2-<3yr', '10mg'],
        ['>3yr', '12.5mg'],
      ],
      'IT Methotrexate is age dependent',
    ),
    warn(
      'Source check: IT methotrexate doses differ between protocols in this chapter (Burkitt and this table: <1yr 6mg, 1-2yr 8mg; ALL: <2yrs 7.5mg).',
      'Check with the source',
    ),
    box(
      'critical',
      'Note',
      'Vincristine maximum dose 2mg',
      'Actinomycin D maximum dose 2mg',
      'Infants under 1 year and children with weight < 10kg give two thirds of calculated doses of chemotherapy.',
      'Do not give actinomycin D/doxorubicin within two weeks of radiotherapy.',
    ),
    p('**Extravasation of drugs** (Vincristine, Actinomycin D, doxorubicin)'),
    ul(
      'Local injection of hydrocortisone - infiltrate of site as much as possible.',
      'For vincristine, immediate application of warm compress will increase circulation and encourage absorption of drug from tissues to blood stream.',
      'After one hour, a cold compress may relieve swelling and inflammation.',
      'Early application of ice pack for other drugs.',
      'Where skin damage is extensive, early referral to plastic surgeon.',
    ),
    drug(
      'Antiemetic',
      'IV Metoclopramide 100 micrograms/kg 30 mins before chemotherapy, may repeat after 6hrs.',
      'IV/ oral dexamethasone 1-4mg 8 hourly.',
      'IV Granisetron 40 mcg/kg before chemotherapy.',
    ),
    drug('Sedation', 'IV Midazolam 100mcg/kg but doses up to 300mcg/kg may be used.'),
    drug('Analgesia', 'Mild pain - paracetamol', 'Moderate pain - dihydrocodeine ± paracetamol', 'Severe pain - oral morphine', 'Opiates may cause constipation so consider stool softeners.'),
  ]),
]
