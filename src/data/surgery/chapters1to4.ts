import type { Section } from '../../types/protocol'
import { box, drug, fig, li, note, ol, p, refs, sec, see, table, ul, warn, type Place } from './helpers'

const C1: Place = { chapter: '1. Introduction' }
const C2: Place = { chapter: '2. Infection prevention' }
const C3: Place = { chapter: '3. Preoperative care' }
const C4: Place = { chapter: '4. Postoperative care' }

const WHO_2003 = 'WHO 2003; Surgical Care at the District Hospital; Interprint Limited, Geneva; ISBN 9241545755'

export const CHAPTERS_1_TO_4: Section[] = [
  // ---------------------------------------------------------------- 1
  sec(C1, 'introduction', '1', 'Introduction', [
    p(
      'Surgical emergencies present situations where prompt action to stem the physiological changes that the pathological conditions induce is needed and hence help to determine the outcome of surgery. Surgical emergencies include trauma after road traffic accidents, shock (septic or hypovolemic), burns and acute abdominal pain like: acute appendicitis, acute cholecystitis, intestinal obstruction, urinary colic, perforated peptic ulcer, diverticulitis or gynaecological disorders in woman.',
    ),
    p(
      'All emergency patients must be fully clerked, noting the onset of symptoms, past medical history, any treatment given, current medication use, allergies, anaesthetic problems in the past and time a patient took the last meal. Perform a thorough examination and make note of all your findings is important. Make a differential diagnosis and arrange all necessary investigations to come to a definitive diagnosis. Institute initial treatment, observe the effects of treatment and re-assess the patient regularly when in an acute situation.',
    ),
    p(
      'The patient who presents with a surgical emergency may have been starving for hours or days, or may have lost body fluids through bleeding, vomiting, diarrhoea and third space fluid loss. In addition the patient may have an infection e.g. peritonitis. Such a patient may therefore present with shock, fluid and electrolyte depletion and acid-base imbalance. Preoperative preparations are therefore of paramount importance to try and correct as near to normal as possible: the fluid, the electrolytes and the acid-base imbalance (see Appendix 6.1.). Also postoperative care should be monitored very carefully (maintenance of fluid, start of enteral feedings, ambulation, monitoring of vitals). This gives the patient best chance of survival.',
    ),
    see('fluids', '6.1 Fluid and electrolytes requirements'),
    note(
      'Withholding analgesics until establishing the definitive diagnosis has been the standard procedure for the last years. Reasons were “fear of masking symptoms, generating a change in the physical exploration or obstructing the diagnostic process of a surgically treatable disease”. The latest reviews have shown that “the use of analgesia for acute abdominal pain does not mask clinical findings, nor does it delay diagnosis”. It changes the intensity of the pain and improves patient’s comfort level.',
      'Analgesia in acute abdominal pain',
    ),
    refs('Manterola C et al; Analgesia in patients with acute abdominal pain; Cochrane Library 2011'),
  ]),

  // ---------------------------------------------------------------- 2
  sec(C2, 'hand-washing', '2.1', 'Hand washing', [
    p(
      'In order to protect patients, health care providers, hospital workers and other people in the health care setting it is important to take measures of infection prevention. Hand washing, the use of barrier protection such as gloves and aprons, the safe handling and disposal of “sharps” and medical waste and proper disinfection, cleaning and sterilization are all part of creating a safe hospital. Infection prevention depends upon a system of practices in which all blood and body fluids, including cerebrospinal fluid, sputum and semen, are considered to be infectious.',
    ),
    p('Hand washing is intended to remove contamination and to decrease the transient bacterial load.'),
    p('**WHO: Indications for hand washing**'),
    ul(
      'Before and after touching the patient',
      'Before handling an invasive device for patient care (regardless of whether or not gloves are used)',
      'After contact with body fluids or excretions, mucous membranes, non-intact skin or wound dressings',
      'Moving from a contaminated body site to another body site during care of the same patient',
      'After removing sterile or non-sterile gloves',
      'After contact with inanimate surfaces and objects (including medical equipment)',
      'If hands are visibly dirty',
      'After using the toilet',
      'Before handling medication or preparing food',
      'Before a sterile procedure',
    ),
    p('**Hand hygiene technique with soap and water** (duration of the entire procedure: 40-60 seconds)'),
    ol(
      'Wet hands with water',
      'Apply enough soap to cover all hand surfaces',
      'Rub hands palm to palm',
      'Right palm over left dorsum with interlaced fingers and vice versa',
      'Palm to palm with fingers interlaced',
      'Backs of fingers to opposing palms with fingers interlocked',
      'Rotational rubbing of left thumb clasped in right palm and vice versa',
      'Rotational rubbing, backwards and forwards with clasped fingers of right hand in left palm and vice versa',
      'Rinse hands with water',
      'Dry hands thoroughly with a single use towel',
      'Use towel to turn off faucet',
      'Your hands are now safe',
    ),
    fig('Hand hygiene technique with soap and water (illustrated steps 0-11)', 4, 'In the original the steps are numbered 0 to 11.'),
    note('Hand hygiene technique with alcohol: same procedure.'),
    warn('Remove jewellery. Keep your nails short. Keep nails clean.', 'IMPORTANT'),
  ]),

  sec(C2, 'scrubbing', '2.2', 'Scrubbing', [
    warn('Cover nose and mouth with mask. Wear an apron. Put on goggles.', 'Before scrubbing for surgery'),
    p('**Procedure:**'),
    ol(
      'Wet your hands with water',
      'Start with soaping your hands',
      'Scrub each side of each finger, between the fingers, nails and the back and front of the hand for two minutes',
      'Proceed to scrub the arms, wash each side of the arm to three inches above the elbow for one minute',
      'Keeping the hand higher than the arm at all times (this prevents bacteria-laden soap and water from contaminating the hand)',
      'Repeat the process on the other hand and arm, keeping hands above elbows at all times (if the hand touches anything at any time, the scrub must be lengthened by one minute for the area that has been contaminated)',
      'Rinse hands and arms by passing them through the water in one direction only, from fingertips to elbow (do not move the arm back and forth through the water)',
      'Turn off the tap with your elbow to prevent contamination',
    ),
    fig('Scrubbing technique (illustrations)', 5),
  ]),

  sec(C2, 'sterile-gloves', '2.3', 'How to wear and remove sterile gloves', [
    fig('How to wear and remove sterile gloves (illustrated steps 1-21)', 5),
    refs(
      'WHO; Guidelines on hand hygiene in health care; 2009; WHO reference number: WHO/IER/PSP/2009/01',
      `${WHO_2003}; “Chapter 2.3 Operating room”; pp. 2-8`,
    ),
  ]),

  // ---------------------------------------------------------------- 3
  sec(C3, 'doctor-checklist', '3.1', 'Doctor’s surgical checklist', [
    p('Careful planning is the key to preventing perioperative complications and deaths.'),
    ul(
      'Admit patient to the Surgical Ward',
      'Prescribe all the necessary medication',
      'To do full blood count (FBC)',
      'To do grouping & crossmatching (GXM), if indicated',
      'In **elderly patients**: do electrolytes, renal function and ECG',
      'In **diabetic patient**: do blood sugar level, electrolytes and renal function',
      'Check for imaging reports',
      'To do anaesthesia assessment',
      'Get informed consent signed',
      'Mark the site of operation the day of surgery (where applicable, especially for paired structures)',
    ),
    note('No need to admit patients one day prior to surgery in case of minor procedures.', 'NOTE'),
  ]),

  sec(C3, 'ward-preparations', '3.2', 'Preoperative preparations on the ward (nurse)', [
    ul(
      'Check all vital signs and document findings (give appropriate interventions where necessary)',
      'Give ID band',
      'Insert intravenous (IV) cannulae',
      'Insert urethral catheter, if indicated',
      'Insert nasogastric tube (NGT), if indicated',
      'Give appropriate preoperative medication',
      'If blood is required make sure it is available stand-by or already given',
      'Get all fluids, medication and investigations reports for theatre ready',
      'Check if consent form is signed',
      'Keep nil per os (unless otherwise stated)',
      'Empty the bowel and bladder (drainage bags) if possible and document volume and colour',
      'Remove dentures',
      'Remove jewelleries',
      'Clean patient (shave if required) and dress patient with appropriate theatre gowns',
      'Unbraid elaborate hair styles which make it impossible to extend the neck at the atlanto-occipital joint',
      'Reassure patient and relatives appropriately',
    ),
  ]),

  sec(C3, 'nurse-checklist', '3.3', 'Nurse’s surgical checklist', [
    p('Tick appropriately or mark N/A if not applicable.'),
    table(
      ['#', 'Item'],
      [
        ['1', 'Operative counseling to patient'],
        ['2', 'Valuables and jewellery removed'],
        ['3', 'Hair pins and makeup removed'],
        ['4', 'Dentures removed'],
        ['5', 'Contact lenses or glasses and prosthesis removed'],
        ['6', 'Voided (specific time)'],
        ['7', 'Enema (if ordered)'],
        ['8', 'PO since'],
        ['9', 'Band'],
        ['10', 'Preoperative medication (kind and time)'],
        ['11', 'NGT (if ordered)'],
        ['12', 'Shaving if necessary'],
        ['13', 'Catheter in place'],
        ['14', 'Vital signs: Temperature, Blood pressure, Respiratory rate, Pulse, SpO₂'],
        ['', 'Known allergies'],
        ['16', 'Consent for surgery'],
        ['17', 'Consent for transfusion'],
        ['18', 'Blood stand-by'],
        ['19', 'Amount of units'],
        ['20', 'Input and output chart'],
        ['21', 'TOR Graphic'],
        ['22', 'Nurse note'],
        ['23', 'Medications sheet'],
        ['24', 'X-ray'],
        ['25', 'Ultrasound or other imaging tests'],
        ['26', 'Laboratory tests'],
        ['27', 'ECG'],
        ['28', 'Other (specific)'],
        ['29', 'Date and time release to operating room; name and signature nurse releasing patient to operating room'],
      ],
    ),
  ]),

  sec(C3, 'diabetes', '3.4', 'Preoperative preparations of patients with Diabetes Mellitus', [
    p(
      'Surgical procedures and their inherent metabolic effects can induce a stressed state causing perioperative hyperglycaemia in diabetic patients leading into a higher risk of per- and postoperative complications. To reduce this risk it is therefore important to optimize a patient with Diabetes Mellitus (DM) preoperatively.',
    ),
    note('Maintain the blood glucose levels between **5 – 10mmol/L** in the perioperative period.', 'Goal'),
    p('**Definitions of DM:**'),
    ul(
      'Once a measured fasting blood sugar (FBS) ≥ 7mmol/L or random blood sugar (RBS) ≥ 11.1mmol/L **AND** symptoms of hyperglycaemia (polyuria, polydipsia, unexplained weight loss, blurred vision) **OR**',
      'In two separate occasions the FBS ≥ 7mmol/L and/or RBS ≥ 11.1mmol/L **OR**',
      'OGTT ≥ 11.1mmol/L',
    ),
    p('**HbA1c:**'),
    ul('< 6.0% non-diabetic', '6.0-6.4% impaired glucose regulation (pre-diabetes)', '> 6.5% diabetic'),
    p('**At OPD:**'),
    ul(
      'Check blood glucose',
      'Check anti-diabetic medication and dosages being used by patient',
      'Check for HbA1c, potassium, sodium and creatinine (only if not done in the past 3 months)',
    ),
    see('diabetes-insulin', '3.4.1 Insulin dependent diabetic (elective major surgery)'),
    see('diabetes-non-insulin', '3.4.2 Non-insulin dependent diabetic (elective major surgery)'),
  ]),

  sec(C3, 'diabetes-insulin', '3.4.1', 'Well controlled insulin dependent diabetic: elective major surgery', [
    ul(
      'Admit a diabetic patient one day before scheduled major procedure',
      'Schedule patient first or second on the list',
      'On admission RBS should be **checked every 4 hours**',
      'Correction of RBS should be done following the Sliding Scale regime (see Table 1)',
    ),
    table(
      ['Random blood sugar', 'To be checked every 4H'],
      [
        ['0-6 mmol/L', 'Keep on 5-10% Dextrose 2L per 24H'],
        ['6.1 - 9 mmol/L', '2IU SC of soluble insulin'],
        ['9.1 - 12 mmol/L', '4IU SC of soluble insulin'],
        ['12.1 - 15 mmol/L', '6IU SC of soluble insulin'],
        ['15.1 - 18 mmol/L', '8IU IM of soluble insulin'],
        [
          '> 18 mmol/L',
          'Start **Modified Alberti Regime:** -10IU IM or IV of soluble insulin; -Add 1L NS in 1H; -Check every hour RBS till blood glucose reaches ≤ 13mmol/L; -Go back to Sliding scale when blood glucose ≤ 13mmol/L',
        ],
      ],
      'Table 1: Sliding scale regime',
    ),
    table(
      ['When', 'Action'],
      [
        ['Day -1: before dinner', 'Continue with usual doses of insulin'],
        ['Day -1: dinner', 'Normal dinner + usual doses of insulin'],
        [
          'Overnight',
          'Fasting starting from midnight. **NOTE:** allowed to drink clear fluids (water, thee with sugar and without milk) till 2H before surgery',
        ],
        [
          'Day 0: 7 AM',
          'Withhold normal insulin dosages; Check blood glucose; Start GKI*: 500ml of Dextrose 5-10% + 10mmol Potassium + Insulin depending on glucose level (see Table 1); Start Sliding Scale regime (see Table 1); If glucose >18mmol → Start Modified Alberti regime (See Table 1)',
        ],
        [
          'Day 0: until surgery',
          'Continue with GKI; Continue sliding scale or Alberti regime depending on blood glucose level; **if >18mmol/L postpone surgery**',
        ],
        ['After surgery', 'Stop GKI; Continue Sliding Scale regime till blood sugars between 5-10mmol/L and go back to own insulin dosages'],
      ],
      'Table 2: Preoperative preparations',
    ),
    p('* GKI = Glucose-Potassium-Insulin'),
  ]),

  sec(C3, 'diabetes-non-insulin', '3.4.2', 'Well controlled non-insulin dependent diabetic: elective major surgery', [
    ul(
      'Admit a diabetic patient one day before scheduled major procedure',
      'On admission RBS should be checked **once daily**',
      'Correction of RBS should be done following the Sliding scale or Modified Alberti regime (depending on blood glucose level). See table 1.',
    ),
    see('diabetes-insulin', 'Table 1: Sliding scale regime (in 3.4.1)'),
    table(
      ['When', 'Action'],
      [
        ['Day -1: before dinner', 'Continue with usual oral anti-diabetic drugs'],
        ['Day -1: dinner', 'Normal dinner + usual oral anti-diabetic drugs'],
        [
          'Overnight',
          'Fasting starting from midnight. **NOTE:** allowed to drink clear fluids (water, thee with sugar and without milk) till 2H before surgery',
        ],
        [
          'Day 0: 7 AM',
          'Check blood glucose; Withhold oral anti-diabetic drugs; Start Sliding Scale regime (see Table 1); If glucose >18mmol → start Modified Alberti Regime (see Table 1)',
        ],
        ['Day 0: until surgery', 'Continue with Sliding Scale regime or Modified Alberti regime depending on level of blood glucose'],
        ['After surgery', 'Restart oral anti-diabetic drugs in next meal'],
      ],
      'Table 3: Preoperative preparations',
    ),
    refs(
      'E. Cosson et al 2018; ‘Practical management of diabetes patients before, during and after surgery: A joint French diabetology and anaesthesiology position statement’; Diabetes & Metabolism; 44: 200-2016',
      'Davidson R, Brent A, Seale A; Oxford Handbook of Tropical Medicine 2014; Fourth edition; New York',
    ),
  ]),

  sec(C3, 'transfusion', '3.5', 'Transfusion protocol', [
    p('**Preoperative haemoglobin (hb) concentration**'),
    p(
      'Anaemia is common in patients scheduled for surgery. There is no agreement on the lowest permissible value of hb for which transfusion is necessary or surgery cannot be carried out in a particular case. A preoperative hb value of 10 g/dl is acceptable without the need for transfusion or making a request for blood. However, in a case of a life-threatening bleeding a patient must always immediately go for surgery despite any hb concentration.',
    ),
    p('The following factors will make a patient less tolerant of anaemia during surgery:'),
    ul('Significant blood loss anticipated', 'Respiratory, cardiovascular disease or obesity', 'Old age', 'Recent blood loss or surgery'),
    p('**Anaemia**'),
    p(
      'Anaemia is not a complete diagnosis and it may indicate that a patient has a pathological condition that has so far gone undetected. Sometimes the cause of anaemia may be far more in need of treatment than the condition requiring surgery. Therefore, it is important to always look for the cause of anaemia.',
    ),
    table(
      ['Microcytic (MCV < 80fL)', 'Normocytic (MCV 80 – 100fL)', 'Macrocytic (MCV > 100fL)'],
      [
        ['Iron deficiency', 'Acute blood loss', 'Folic acid deficiency'],
        ['Thalassaemia', 'Anaemia of inflammation', 'Vitamin B12 deficiency'],
        ['Anaemia of inflammation', 'Marrow hypoplasia or infiltration', 'Drugs affecting DNA metabolism'],
        ['Lead poisoning', 'Chronic infection: HIV, Sickling, Malaria, Tuberculosis', 'Alcohol abuse'],
        ['Sideroblastic anaemia', 'Renal failure', 'Liver dysfunction'],
        ['Infections', 'G6PD deficiency', 'Hypothyroidism'],
        ['Auto-immune diseases', '', 'Haemolytic anaemia'],
      ],
      'Most common causes of anaemia',
    ),
    p('**Blood transfusion: Is patient actively bleeding?**'),
    box(
      'critical',
      'YES: actively bleeding',
      '1. Transfuse at least two units of blood',
      '2. Re-assess',
      '3. Start Massive Transfusion Protocol (MTP) in case of haemorrhagic shock',
      'MTP, request for: 4 units of red blood cells; 2 units of fresh frozen plasma',
      'Consider: Fresh whole blood; Tranexamic acid in trauma patients < 3H',
      'Re-assess and restart MTP if needed',
    ),
    box(
      'info',
      'NO: not actively bleeding',
      'If any of the following: Anaemic heart failure; Hb < 7g/dL with symptoms; Hb < 4g/dL in any situation; Need for major surgery with preoperative Hb < 7g/dL',
      '→ Transfuse two units of blood',
      '→ If child: 10-20ml/kg',
      '→ Re-assess',
      'Hb > 7g/dL with symptoms → Start oral tothema ferrous sulphate or folic acid',
    ),
    note('One unit of blood increases Hb by about 1g/dl (in adults).', 'NOTE'),
    see('transfusion-reaction', 'Transfusion reaction'),
  ]),

  sec(C3, 'transfusion-reaction', '3.5', 'Transfusion reaction', [
    p(
      'A transfusion reaction may occur due to ABO incompatibility, allergic reaction or bacterial contamination of the blood unit. See for further details in ABCD assessment chapter 5.1. Shock and 5.2 Trauma.',
    ),
    p(
      '**Patient exhibiting possible features of an acute transfusion reaction**, which include: fever, chills, rigors, tachycardia, hyper- or hypotension, collapse, flushing, urticaria, pain (bone, muscle, chest, abdominal), respiratory distress, nausea, general malaise',
    ),
    ol('**STOP transfusion**', '**ABC assessment**'),
    p('**Problems in A, B or C (= severe transfusion reaction):**', 'critical'),
    ol(
      'Get IV access and start IV fluids with Normale Saline',
      'Pass urethral catheter and monitor urine output',
      'Start broadspectrum antibiotics IV (e.g. ceftriaxone)',
      li('Treat:', 'wheezing: bronchodilators', 'allergic reaction: adrenaline (if anaphylaxis), antihistamine and IV hydrocortisone'),
      'Repeat GXM',
    ),
    p('**No problems in A, B or C (= moderate or mild transfusion reaction):**'),
    box(
      'urgent',
      'MODERATE: temperature ≥39°C or rise ≥2°C AND/OR other symptoms/signs apart from pruritis/rash only',
      'If symptoms/signs consistent with underlying condition or history → Continue transfusion at slower rate; Check vitals every 10 minutes',
      'If symptoms/signs NOT consistent with underlying condition or history → Manage as severe reaction',
    ),
    box(
      'info',
      'MILD: isolated temperature ≥38°C or rise ≥ 1 or 2°C AND/OR pruritis/rash only',
      'Check vitals',
      'Give 1000 mg paracetamol stat',
      'Re-assess after 15 minutes',
      'Worsening of symptoms or signs → Manage as moderate reaction',
      'NO worsening of symptoms or signs → Continue transfusion at slower rate',
    ),
    refs(
      `${WHO_2003}; “Chapter 13.2 Other conditions requiring urgent attention”; pp. 13-10`,
      'Davidson R, Brent A, Seale A; Oxford Handbook of Tropical Medicine 2014; Fourth edition; New York; pp. 499-519',
      'Joint United Kingdom (UK) Blood Transfusion and Tissue Transplantation Services JPAC; “Chapter 5.2.1. Acute transfusion reactions”; Transfusion handbook 2014; Fifth edition; https://www.transfusionguidelines.org',
    ),
  ]),

  // ---------------------------------------------------------------- 4
  sec(C4, 'eras', '4.1', 'ERAS protocol (Enhanced Recovery After Surgery)', [
    p(
      'The Enhanced Recovery After Surgery (ERAS) protocol is a multimodal perioperative care pathway introduced in 1990 to achieve early recovery for patients undergoing major abdominal surgery. It has been proven that the ERAS-protocol is a cost-effective method to reduce recovery time and post-operative complication rates in patients undergoing abdominal surgery.',
    ),
    p(
      'Evidence suggests that limiting of postoperative IV fluids and stimulating early oral fluids can reduce hospital stay and postoperative complications such as ileus. An earlier return to normal diet both support mobilization, energy, protein supply and reduce starvation-induced insulin resistance. The early removal of urinary catheters supports mobilization. To reduce the risk of ileus, strategies include epidural analgesia in open surgery, avoidance of opioids and fluid overload and oral laxatives usage early after surgery. Discharge should occur as soon as the patient has a solid food diet, bowel movements, orally controlled pain, sufficient mobility for self-care and no complications requiring hospital care.',
    ),
    p('Day 0 = day of operation'),
    box('info', 'Early oral nutrition', 'Provide chewing gum (day 0)', 'Remove NGT (day 1)*', 'Switch IV fluids to oral fluids (day 1)', 'Expand diet** (day 1 or 2)'),
    box('info', 'Early ambulation', 'Remove urinary catheter (day 1)', 'Stimulate ambulation*** (day 1)'),
    box(
      'info',
      'Nausea management',
      'Step 1: Prescribe monotherapy with metoclopramide, domperidone or promethazine',
      'Step 2: Add dexamethason or cyclizine',
      'Step 3: Switch to monotherapy with ondansetron or ganisetron',
    ),
    see('pain', '4.2 Postoperative pain protocol', 'Pain management'),
    ul(
      '* Depends on NGT production (remove if production <100ml/24H); In case of gastric perforation, remove it on day 3',
      '** Consult of dietician, if indicated',
      '*** Consult physiotherapist, if indicated',
    ),
    note(
      'Extra actions to be taken into consideration, especially in the elderly or patients with comorbidities: Decubitus prevention; Heparin if prolonged immobilization expected; Early consultation of physiotherapist if difficult ambulation expected; Lung exercises/lung physiotherapy to prevent pneumonia',
      'NOTE',
    ),
    refs(
      'Carli F, Ljungqvist O, Lobo DN, Fearon KCH, Schricker T, Scott MJ, et al. Enhanced Recovery After Surgery (ERAS) for gastrointestinal surgery, part 1: pathophysiological considerations. Acta Anaesthesiol Scand. 2015;59(10):1212–31',
      'Lassen K, Soop M, Nygren J, Cox PBW, Hendry PO, Spies C, et al. Consensus review of optimal perioperative care in colorectal surgery: Enhanced Recovery After Surgery (ERAS) Group recommendations. Arch Surg. 2009;144:961–9.',
      'Gustafsson UO, Scott MJ, Schwenk W, Demartines N, Roulin D, Francis N. Guidelines for perioperative care in elective colonic surgery: Enhanced Recovery After Surgery (ERAS®) Society recommendations. World J Surg. 2013;37(2):259–84.',
    ),
  ]),

  sec(C4, 'pain', '4.2', 'Postoperative pain protocol', [
    p(
      'Pain is expressed differently by each patient depending on cultural background or age and it is a subjective experience. There are different kinds of pain: acute versus chronic (> 6 months), nociceptive, neuropathic and mixed. Pain management after surgery is very important due to several reasons: psychological, social and biological factors. By relieving pain it makes it less feared by society. There is also evidence that pain activates the autonomic system leading to reduced arteriolar vasoconstriction and therefore reduced wound perfusion for proper healing.',
    ),
    p('**WHO Pain ladder**'),
    box('info', 'Step 1: Non-opioid analgesics', 'Examples: paracetamol and NSAID’s (diclofenac, ibuprofen, aspirin)'),
    box(
      'info',
      'Step 2: Weak opioid analgesics',
      'Examples: tramadol and codeine',
      'Combination with one or two Step 1 analgesics recommended',
    ),
    box(
      'info',
      'Step 3: Strong opioid analgesics',
      'Examples: morphine or pethidine',
      'Combination with one or two Step 1 analgesics recommended',
      'Step 2 and 3 should not be combined',
    ),
    p('**Analgesia dosages in children, adults and pregnant/breastfeeding** (superscripts refer to the footnotes below)'),
    p('**Level 1**'),
    drug(
      'Paracetamol¹',
      '**Children PO:** <1 month: 10mg/kg, every 6-8H (max. 40mg/kg/day); ≥1 month: 15mg/kg, every 6-8H (max. 60mg/kg/day)',
      '**Children IV:** <10kg: 7.5mg/kg every 6H (max 30mg/kg/day); ≥ 10kg: 15mg/kg every 6H (max 60mg/kg/day)',
      '**Adults PO:** 1 gr every 6-8H (max. 4g/day)',
      '**Adults IV:** 1gr every 6H (max. 4gr/day)',
      '**Pregnant / breastfeeding:** First choice during whole pregnancy',
    ),
    drug(
      'Aspirin² (avoid in young children)',
      '**Children PO:** 10-20mg/kg, every 4-6H',
      '**Adults PO:** 300mg-1gr, every 4-6H (max. 4gr/day)',
      '**Pregnant:** 0-5 months gestation: avoid; >6 months gestation: contra-indicated',
      '**Breastfeeding:** Avoid',
    ),
    drug(
      'Diclofenac² (avoid use if <3 years old)',
      '**Children PO:** Children ≥ 3 years: 2-3mg/kg/day',
      '**Adults PO:** 50mg every 8H or 75mg every 12H (max. 150mg/day)',
      '**Adults IV:** 37.5mg every 6H (max. 150mg/day)',
      '**Adults IM:** 75mg/day',
      '**Adults SUPP:** 100mg every 12H',
      '**Pregnant:** 0-5 months gestation: avoid; >6 months gestation: contra-indicated',
      '**Breastfeeding:** Possible',
    ),
    drug(
      'Ibuprofen² (avoid use if <6 months)',
      '**Children PO:** 5-10mg/kg every 6-8H (max. 40mg/kg/day); >12 years: as adults',
      '**Adults PO:** 200-400mg every 6-8H (max. 1200mg/day)',
      '**Pregnant:** 0-5 months gestation: avoid; >6 months gestation: contra-indicated',
      '**Breastfeeding:** Possible',
    ),
    p('**Level 2**'),
    drug(
      'Codeine³ (avoid use if <12 years old)',
      '**Children PO:** >12 years: same as for adults',
      '**Adults PO:** 30-60mg, every 4-6H (max. 240mg/day)',
      '**Pregnant:** 0-5 months gestation: possible; >6 months gestation: risk of resp. depression and drowsiness of neonate when prolonged administration of large doses at the end of 3rd trim.',
      '**Breastfeeding:** Use with caution, for short period (2-3 days), at the lowest effective dose',
    ),
    drug(
      'Tramadol³,⁴ (avoid use if <12 years old)',
      '**Children PO:** >12 years: same as for adults',
      '**Children IM, slow IV or infusion:** same as for adults',
      '**Adults PO:** 50-100mg, every 4-6H (max. 400mg/day)',
      '**Adults IM, slow IV or infusion:** 50-100mg every 4-6H (max. 600mg/day)',
      '**Pregnant:** 0-5 months gestation: possible; >6 months gestation: risk of drowsiness of the neonate when given end of 3rd trimester',
      '**Breastfeeding:** Risk of drowsiness of the neonate when given end of 3rd trimester. Give lowest dose and for a short period',
    ),
    p('**Level 3**'),
    drug(
      'Morphine³,⁴',
      '**Children PO:** 0.2-0.4mg/kg every 4-6H',
      '**Children SC/IM:** same as for adults',
      '**Children IV:** 0.05-0.1mg/kg, every 4-6H',
      '**Adults PO:** tablets 10mg every 4H; oral solution and SUPP 10-20mg every 4H',
      '**Adults SC/IM:** 0.1-0.2mg/kg every 4-6H',
      '**Adults IV:** 0.1mg/kg every 3-4H (infused over 4-5min)',
      '**Antagonist:** Naloxon 1-3mcg/kg until side effects disappear',
      '**Pregnant:** 0-5 months gestation: possible; >6 months gestation: risk of drowsiness of the neonate when given end of 3rd trimester',
      '**Breastfeeding:** Risk of drowsiness of the neonate when given end of 3rd trimester. Give lowest dose and for a short period',
    ),
    drug(
      'Pethidine⁵',
      '**Children IM/SC:** 1-2mg/kg every 3-4H (max. 100mg/day)',
      '**Adults IM/SC:** 25-100mg every 3-4H (max. 600mg/day)',
      '**Pregnant:** Short before delivery: risk of neonatal sedation',
      '**Breastfeeding:** Risk of drowsiness of the neonate when given end of 3rd trimester. Give lowest dose and for a short period',
    ),
    ul(
      '¹ Precautions with hepatic impairment, limit therapy to short-term use with maximum dose of 2 gr/day',
      '² Avoid usage if history of peptic ulcer or other stomach problems, heart failure or renal impairment. When given >2 weeks, give it together with e.g. Omeprazole/Pantoprazole.',
      '³ Add laxative if treatment > 48H. E.g. Lactulose 15-20ml/day (children 5-15ml/day)',
      '⁴ Give half of dosis in elderly and patients with hepatic/renal impairment',
      '⁵ Limit use in acute pain to ≤ 48H, not first choice in treatment of acute pain',
    ),
    p('PO= per os; IV= intravenous; IM= intramuscular; SUPP= suppository; SC= subcutaneous; H= hour'),
    p('**Neuropathic pain**'),
    p(
      'Damage to the nerves themselves, including: active herpes zoster infection, post-herpetic neuralgia, HIV/ARV related peripheral neuropathy (common in Stavudine), Tuberculosis treatment (Isoniazid, may also be due to vitamin B6 deficiency), diabetic neuropathy. It may not be Paracetamol/NSAID’s/morphine sensitive.',
    ),
    p('Treatment steps, in order of recommendation:'),
    p('**1) Antidepressants**'),
    ul(
      'Amitriptyline: 25mg NOCTE (week 1) → 50mg NOCTE (week 2) → 75mg NOCTE (week 3); max. 150mg/day (in elderly reduce dosis by 50%)',
      'Venlafaxine 75-225mg/day (may take 6 weeks for full benefit)',
    ),
    p('**2) Anticonvulsants**'),
    ul(
      'Pregabalin 50mg TID or 75mg BID, may be increased to 100mg TID within 1 week (max. 300mg/day)',
      'Gabapentin 900mg/day, may be increased in 3 days to 1800-3600mg/day',
      'Carbamazepine: 200mg NOCTE (week 1) → 200mg BID (week 2) → 200mg TID (week 3); max 1.6g/day',
    ),
    p('**4) Others**'),
    ul(
      'Anxiolytics (Diazepam) or corticosteroids like Dexamethasone (e.g. liver capsule pain in hepatocellular carcinoma) and Prednisolone',
    ),
    p('**Mixed pain:** This pain is seen in patients who have cancer or AIDS. → Morphine combined with antidepressants and antiepileptics.'),
    refs(
      'Longmore M. et al 2010; Oxford handbook of Clinical Medicine; 8th Edition; New York: Oxford University Press, pp. 534, 576',
      'Médecins Sans Frontières 2018; Clinical guidelines- Diagnosis and treatment manual; “Chapter 1: a few symptoms and syndromes- Pain”; 2018 Edition',
      'Medscape application 2019; Drugs: Meperidine/Pethidine- dosage and pregnancy; Based on FDA-approved labeling information (viewed 12 June 2019)',
      'Medscape application 2019; Drugs; Based on FDA-approved labeling information (viewed 22 July 2019)',
      'D.J. Sloan, T. Phiri, E.E. Zijlstra 2013; The clinical book; Department of Medicine, College of Medicine; Second edition, Blantyre Malawi; pp 183-191',
      'B.P.Murnion 2018; “Neuropatic pain: current definition and review of drugs”; Australian Prescriber; University of Sydney, New South Wales; 41(3): 60-63; DOI: 10.18773/austprescr.2018.022',
    ),
  ]),
]
