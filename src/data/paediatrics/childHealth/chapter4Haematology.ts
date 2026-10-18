import type { Section } from '../../../types/protocol'
import { box, drug, flow, li, note, ol, p, sec, see, table, ul, warn, type Place } from '../../helpers'

const C4: Place = { chapter: '4. Haematological disorders' }
const C4S: Place = { chapter: '4. Haematological disorders', subchapter: 'Sickle cell disease' }

export const CHAPTER_4_HAEMATOLOGY: Section[] = [
  sec(C4S, 'k-scd', '4.1', 'Sickle cell disease: definitions and general management', [
    p('**Definitions**'),
    ul(
      'Sickle cell disease: hemoglobinopathies characterized by the formation of sickled red cells in response to deoxygenation',
      'Sickle cell anaemia: substitution of valine for glutamine in the 6th amino acid position of the β chain.',
      'Others: HbSC, sickle-thalassemia combination.',
      '**All sickle cell patients should be considered as immunocompromised host.**',
    ),
    p('**Therapy**'),
    ol(
      'Stabilization: ABCs, treat shock, frequent reassessment',
      'Hydration: Maintain adequate hydration, monitor volume status !!DO NOT over hydrate!!',
      'Liberal pain control: relaxes patient, and enhances pulmonary toilet.',
      li(
        '*Treat infection',
        'Antimalarial: consider local resistance & sensitivity pattern (e.g. Give Quinine or ACT)',
        'Antibiotics: must provide coverage for encapsulated organism (e.g. Strept. pneumoniae, H. influenzae) & others like Staphylococcus, Salmonella',
      ),
      '*Haemotransfusion: partial exchange/straight transfusion (see anaemia transfusion)',
    ),
    see('k-transfusion', '4.2 Anaemia transfusion algorithm'),
    p('**Associated acute illness: general principles of management in acute episodes**'),
    ul(
      'Make sure diagnosis of SCD has been confirmed by relevant laboratory findings',
      'Take cognizance of presence or otherwise of any long term complications of SCD e.g. Renal Failure.',
      'Always do routine tests for established patients.',
      "Look for source of infection by doing Blood cultures, thick/thin film for MP's, Urine R/E etc.",
      'Prescribe a curative antimalarial according to National Protocol',
      'Prescribe appropriate antibiotics if infection is present',
      'Relieve distress',
      'Aim to improve vascular blood flow by ensuring adequate hydration',
      'Aim to mobilize patient early',
    ),
  ]),
  sec(
    C4S,
    'k-scd-infection',
    '4.1.1',
    'Infection (malaria / sepsis / pneumonia / osteomyelitis / UTIs etc)',
    [
      table(
        ['', ''],
        [
          [
            '**Clinical assessment**',
            "Fever and/or other signs/symptoms of infection. FBC + B/F for MP's, ± blood & urine C/S. CXR, LP if indicated & no contraindication(s)",
          ],
          ["**Management**", "ABC's, freq. reassessment, hydration, analgesics ± antimalarial, antibiotics, O2. !!DO NOT delay antibiotics while waiting for C/S!!"],
        ],
      ),
      p('**Acute osteomyelitis**'),
      p('Most common organisms: Staphylococcus species; Salmonella species'),
      p('Investigations:'),
      ol(
        'Bone marrow culture an infection site - Needle aspiration',
        'Blood culture/sensitivity',
        'Stool culture/sensitivity',
        "Rule out Koch's disease",
        'X-ray of affected bone - Changes seen about 10-14 days after onset',
      ),
      p(
        'Treatment: Initial therapy before culture and sensitivity results should cover both staphylococcus and salmonella species. Fair choice antibiotics include clindamycin, vancomycin for staphylococcus and chloramphenicol for salmonella. Other useful antibiotics for salmonella include trimethoprim-sulfamethoxazole, aminoglycosides, 2nd and 3rd generation cephalosporins and ciprofloxacin in adults.',
      ),
      ul('Duration of therapy - About 4 - 6 weeks', 'Parenteral antibiotics is necessary in the first 10 days'),
      p('**Hand foot syndrome**'),
      p('Treatment: 1. Analgesics 2. Hydration 3. Parental reassurance'),
      note(
        'Early osteomyelitis can mimic this syndrome. In the presence of fever, marked inflammation or no clinical improvement after 3 days - Evaluate for osteomyelitis.',
        'Note',
      ),
    ],
    { tone: 'urgent' },
  ),
  sec(C4S, 'k-scd-crises', '4.1.2', 'Hyperhaemolytic, splenic sequestration and aplastic crises', [
    table(
      ['Crisis', 'Clinical assessment', 'Management'],
      [
        ['**4.1.2 Hyperhemolytic crisis**', '↑icterus, acute drop in Hb, haemoglobinuria. FBC, RBCs indices, retic count', 'ABCs, O2, serial PCV & urine monitor. Treat infection, hydration ± transfusion'],
        [
          '**4.1.3 Splenic sequestration** (massive RBCs + plasma sequestration in spleen)',
          'Acute drop in Hb > 2g/dl, anaemia, ↑ retic, ↓platelet. Pallor, irritable, abd. pain/distension, ↓ intravascular volume. FBC, RBCs indices, retic count',
          "ABC's, & freq. reassessment. Treat shock, hydration, ± haemotransfusion, analgesics, antimalarial & antibiotics",
        ],
        [
          '**4.1.4 Aplastic crisis** (cessation of erythropoiesis)',
          'Hx of URTI signs/symptoms, rapid ↓Hb, ↓retic, pallor, weak. FBC, RBCs indices, retic count',
          'If stable, monitor closely; spontaneous resolution 1-2weeks. If unstable ABCs, freq. assessment + top-up transfusions',
        ],
      ],
    ),
  ]),
  sec(
    C4S,
    'k-scd-voc',
    '4.1.5',
    'Vaso-occlusive crisis',
    [
      p(
        '**Pain. Clinical assessment:** precipitants (hypoxia, dehydration acidosis, infection); long bone or abd. pain, dactylitis (6-12mths). R/o infection, acute abd. and osteomyelitis',
      ),
      p('**Management:** The GOAL of therapy is to provide prompt pain relief. Hydration, analgesics & treat infection if present.'),
      p('Assess pain and categorize into:'),
      table(
        ['Category', 'Description', 'Where to treat'],
        [
          ['Mild', 'Pain limited to a single joint or limb of bearable intensity and without any associated symptoms/signs e.g. Fever, anaemia.', 'Should be treated on out-patient basis.'],
          [
            'Moderate',
            'Pain affecting multiple sites impairing normal activity without any associated symptoms or signs.',
            'Can be treated on outpatient basis except where social circumstances of the patient and good sense indicate otherwise',
          ],
          [
            'Severe',
            'Severe pain in single or multiple sites: 1. With or without associated symptoms/signs 2. Abdominal crisis (pain) 3. Chest pain 4. Severe headache',
            'Patient must be detained in the first instance (if recovery ward is available) and admitted if symptoms have not subsided after 24-48 hours.',
          ],
        ],
      ),
      p('**Mild - moderate painful episodes**'),
      ol(
        'Try to identify the precipitating factor(s)',
        "Ascertain that the patient's temperature is normal",
        'Investigate thoroughly - refer labs for established patients',
        'Encourage high oral fluid intake',
        'Start with simple analgesics - e.g. Paracetamol 10mg/kg every 4-6 hrs or Ibuprofen 5-10mg/kg/dose every 6-8hrs. Note: Alternating paracetamol and ibuprofen doses 3 hourly offers sustained pain relief. Moderate pain demands the use of higher NSAIDs e.g. Tramadol, Toradol or Codeine. Ketorolac (Toradol) 1mg/kg load, followed by 0.5mg/kg every 6hrs',
        'Warm baths, massage and application of warm pads help relieve pain',
        'Give curative dose of antimalarial',
        'See patient within 3-5 days to assess and alter management if indicated.',
      ),
      p('**Severe pain**'),
      ul(
        'Admit patient',
        'Do Numbers 1-4 under Mild to Moderate pain',
        'Give IV fluids (N/S or D). Total volume should not exceed 1.5X maintenance requirement for 24hrs for the patient.',
      ),
      drug(
        'Analgesic (severe pain)',
        'Start with a strong NSAID e.g.: Ketorolac (Toradol) - 1 mg/kg stat, followed by 0.5mg/kg every 6 hours;',
        'Morphine: Parenteral: 100mcg/kg 4 hourly; PO: 80-200mcg/kg 4 hourly',
        '!!There should be no PRN regimen!!',
        'Assess patient frequently - every hour',
      ),
      table(
        ['', 'Clinical assessment', 'Management'],
        [
          ['**4.1.5.1 Priapism**', 'painful erection, most often seen in adolescents', 'hydration & analgesics, avoid over hydration, if 4-6hrs no resolution haemotransfusion & Urology consult'],
          [
            '**4.1.5.2 Acute chest syndrome** (pneumonia/infarct)',
            'cough, pleuritic chest pain, tachypnea, hypoxia, CXR (changes in lungs)',
            'ABCs, O2, hydration (1X maintenance volume), analgesics, antibiotics. Consider haemotransfusion, mycoplasma, & PTB',
          ],
          [
            '**4.1.5.3 CVA**',
            'headache, seizure, weakness, altered sensorium. Focal neurologic deficit. Must R/o meningitis, abscess, frontal bone infarct',
            'ABCs, frequent reassessment, O2, hydration ± antibiotics, haemotransfusion. Control seizure & ICP',
          ],
        ],
      ),
    ],
    { tone: 'urgent' },
  ),
  sec(C4S, 'k-scd-transfusion', '4.1.6', 'Indications for blood transfusion in sickle cell disease', [
    p('**1. A need to improve oxygen-carrying capacity and transport.** Transfusions should be SIMPLE TRANSFUSION'),
    ul(
      'a. Anaemic patients with impending or overt high output cardiac failure, dyspnoea, postural hypotension angina or cerebral dysfunction.',
      'b. Acute splenic or hepatic sequestration crisis',
      'c. Hb less than 5gm/dl and PCV less than 15%, associated erythroid hypoplasia or aplasia',
    ),
    p('**2. A need to improve microvascular perfusion by decreasing the proportion of erythrocytes containing HbS.** (Partial exchange transfusion)'),
    ul(
      'a. Acute impending or suspected cerebro-vascular accidents, including transient ischaemic attacks',
      'b. Arterial hypoxia syndrome ("fat embolism")',
      'c. Acute progressive lung disease',
      'd. Unresponsive acute Priapism',
      'e. Eye surgery',
    ),
  ]),
  sec(C4S, 'k-scd-chronic', '4.1.7', 'Chronic complications', [
    p('**A. Leg ulcers**'),
    ol(
      'Always treat in collaboration with plastic surgeon',
      'Search for other causes of leg ulcers such as varicose veins, diabetes mellitus and collagen vascular diseases.',
      'Radiography of the leg to rule out underlying bony infection',
      'Wound swab for culture and sensitivity',
      'Daily dressing',
    ),
    p('Failure to heal: 1. Try chronic blood transfusions to raise Hb to 10mg/dl for a period of six months. 2. Try skin grafting'),
    p('**B. Aseptic necrosis**'),
    ol(
      'Always treat in collaboration with specialist Orthopaedic Surgeons',
      'Radiograph in AP and frog-leg position.',
      'In early case and in children in particular: Avoidance of weight bearing not motion with the use of braces. Appliance of local heat and analgesics for up to 6 months',
      'In individuals beyond adolescence and with severe aseptic necrosis, surgical replacement may be considered.',
    ),
    p('**C. Hypersplenism**'),
    ul(
      li(
        'Diagnosis:',
        'Spleen 4cm or more below costal margin',
        'Hb less that 6.5g/dl',
        'Reticulocyte count above 15',
        'Platelets count below 2000x10⁹/L',
        'Observed on 2 occasions 6 months apart.',
      ),
      li('Treatment:', '1. Chronic transfusion programmes', '2. Splenectomy - preferable refer Surgeon'),
      li(
        'Equivocal Indication - no clear cut evidence whether transfusion is either useful or necessary.',
        'a. Preparation for surgery requiring general anaesthesia',
        'b. Intractable acute events',
        'c. Before injection of contrast material',
      ),
    ),
    warn(
      'Source typos: "raise Hb to 10mg/dl" (presumably 10 g/dl) and "Platelets count below 2000x10⁹/L" (the unit or number is wrong). Confirm before publishing.',
      'Check with the source',
    ),
    p('**D. Chronic transfusion**'),
    p(
      'This may be relevant for several chronic conditions related to sickle cell disease. In these cases the proportion of normal cells circulating should be maintained above 70% by repeated simple transfusion. Clear indication is for: Cerebral vascular occlusion (stroke)',
    ),
    p(
      'Other less clear indications are: leg ulcers; skin graft; chronic organ damage; pregnancy; extreme diminution of performance status due to recurrent complications of SCD.',
    ),
  ]),

  sec(
    C4,
    'k-transfusion',
    '4.2',
    'Anaemia transfusion algorithm',
    [
      flow(
        {
          id: 'k-tx-start',
          kind: 'action',
          title: 'Patient with anaemia',
          items: ['Ensure ABCs, and then draw blood for FBC, RBCs indices, retic count + Sickle cell & G6PD status ± blood film comment'],
        },
        {
          id: 'k-tx-hb',
          kind: 'check',
          title: 'Hb <4g/dL or Hb 4-6g/dL plus respiratory distress?',
          branches: [
            { label: 'Yes', tone: 'critical', target: 'k-tx-transfuse' },
            { label: 'No', tone: 'neutral', target: 'k-tx-history' },
          ],
        },
        {
          id: 'k-tx-transfuse',
          kind: 'drug',
          title: 'Transfuse BLOOD 10-20mL/kg over 3-4 hours',
          items: ['± Lasix 1mg/kg at start of transfusion', '!!(Avoid Lasix if Patient is hypovolaemic)!!'],
        },
        {
          id: 'k-tx-observe',
          kind: 'action',
          title: 'Observe every 15 minutes',
          items: [
            'Monitor for signs of overload: Rising PR >25bpm; Rising RR >5 bpm',
            'Monitor for transfusion reaction',
            'IF signs of overload or reaction: **STOP BLOOD** → Call for Senior review',
          ],
          goto: 'k-tx-review',
        },
        {
          id: 'k-tx-history',
          kind: 'check',
          title: 'Complete history & physical exams. Acute blood loss or increase destruction?',
          branches: [
            { label: 'Yes: group & cross-match blood, stand-by', tone: 'urgent', target: 'k-tx-criteria' },
            { label: 'No', tone: 'neutral', target: 'k-tx-criteria' },
          ],
        },
        {
          id: 'k-tx-criteria',
          kind: 'check',
          title: 'Hb < 6-7g/dL or HCT < 20% PCV PLUS any of:',
          items: [
            'Acute blood loss or increase destruction',
            'Blood sequestration',
            'Respiratory distress',
            'Shock',
            'Coma',
            'Sickle Cell Disease with: Acute Sickle Chest Syndrome; CVA; Priapism; Prolonged Chest Pain Crisis',
          ],
          branches: [
            { label: 'Yes: transfuse', tone: 'critical', target: 'k-tx-transfuse' },
            { label: 'No', tone: 'neutral', target: 'k-tx-review' },
          ],
        },
        {
          id: 'k-tx-review',
          kind: 'action',
          title: 'Review laboratory results with resident/specialist',
          items: ['FBC, RBCs indices, retic count, Sickle cell & G6PD status ± Stool R/E, Coombs test, ESR, blood film comment'],
        },
      ),
      box(
        'urgent',
        'Note',
        'Do proper patient identification before, during and immediate after Blood transfusion',
        'Take 2-3ml blood for grp X-match & label sample ASAP. DO NOT pre-label sample',
        'Capillary haematocrit (PCV) is 1-2% higher than venous haematocrit (PCV)',
        'If bleeding GI /Surgical → Control blood loss PLUS → Senior Review',
        'Monitor RBS hourly if previously Hypoglycaemic, Severe Malaria, or on Quinine inj.',
        'Give 1st 5ml/kg of blood over 30min if in Shock or Haemodynamically unstable.',
        'Complete blood transfusion monitoring sheet',
        'If in doubt call for Senior Review',
      ),
    ],
    { tone: 'urgent' },
  ),
]
