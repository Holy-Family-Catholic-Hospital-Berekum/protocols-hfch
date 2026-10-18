import type { Section } from '../../../types/protocol'
import { box, drug, goTo, li, note, ol, p, sec, see, table, ul, warn, type Place } from '../../helpers'

const C12: Place = { chapter: '12. Respiratory disorders' }

export const CHAPTER_12_RESPIRATORY: Section[] = [
  sec(C12, 'k-respiratory-intro', '12.1', 'Introduction', [
    p(
      'Respiratory disorders are second to malaria in frequency of occurrence in Ghana. Among the Respiratory disorders seen in this hospital Acute Respiratory Infections are the most common.',
    ),
    p(
      'Common symptoms at presentations are Cough, fast breathing, wheeze, stridor, hoarseness of voice, Lower chest in-drawing. Children often present with a combination of symptoms which would suggest the diagnosis. They may lead eventually to respiratory failure and death.',
    ),
    table(
      ['Age in months', 'Maximum respiratory rate expected for normal'],
      [
        ['< 2 mths', '60 cycles /min'],
        ['2 - 11 mths', '50 cycles / min'],
        ['12 mths and over', '40 cycles / min'],
      ],
      'Criteria for fast breathing in children',
    ),
    table(
      ['Condition', 'Cough', 'Fast breathing', 'Wheeze', 'Stridor', 'Grunting', 'Onset'],
      [
        ['Croup', 'Yes (barking)', '±', '-', '+', '-', 'Short history'],
        ['Epiglotitis', 'Yes', '±', '-', '+', '-', 'Short history'],
        ['Inhaled Foreign Body', 'Yes', '+', '± (depending on level)', '± (depending on level)', '-', 'Sudden'],
        ['Pneumonia', 'Yes', '+', '±', '-', '±', 'Short history'],
        ['Asthma', 'Yes (morning and night)', '±', '+', '-', '-', 'Sudden or gradual'],
        ['Pulmonary TB', 'Yes', '±', '±', '-', '±', 'Weeks to months'],
      ],
      'Features of common respiratory disorders at presentation',
    ),
    note('Infections are often associated with fever at onset. Severe forms present with Lower Chest In-drawing (LCI)'),
  ]),
  sec(
    C12,
    'k-respiratory-failure',
    '12.2',
    'Respiratory failure',
    [
      p('**1. Definition:** Inability of the respiratory system to provide sufficient oxygen for metabolic needs or to excrete CO2 produced.'),
      box(
        'urgent',
        'Biochemical indicators',
        'PaO2 <8 kPa (60 mmHg) [Normal PaO2 11-13 kPa or 83-98 mmHg]',
        'or PaCO2 >7 kPa (55 mmHg) [Normal PaCO2 4.8-6.0 kPa or 36-45 mmHg]',
      ),
      ul(
        '**Signs of hypoxia:** Restlessness, Confusion, Central cyanosis. If long standing, Polycythemia, Pulmonary hypertension, Cor pulmonale',
        '**Signs of hypercapnia:** Headache, peripheral vasodilatation, bounding pulse, Tremors, confusion, drowsiness, coma.',
      ),
      p('**2. Types of respiratory failure**'),
      ul(
        '**Type I respiratory failure:** Low PaO2 with normal or low PaCO2. Associated with diseases that damage lung tissue causing acute hypoxaemia e.g. Pneumonia, Pulmonary oedema, Acute lung injury.',
        '**Type II respiratory failure (ventilatory failure):** Low PaO2 with high PaCO2. Associated with conditions in which alveolar ventilation is insufficient to excrete the volume of carbon dioxide being produced by tissue metabolism: Asthma; Acute epiglottitis; Anaphylaxis; Poliomyelitis; Bulbar syndromes; Inhaled foreign body; Respiratory depressants (drugs)',
      ),
      p('**3. Principles of management of respiratory failure**'),
      ul('Treat underlying cause', 'Give oxygen', 'Assisted ventilation (bag and mask)', 'If this fails consider intubation and ventilation'),
    ],
    { tone: 'urgent' },
  ),
  sec(
    C12,
    'k-croup',
    '12.3',
    'Croup',
    [
      p(
        '**Definition:** A respiratory infection that occurs mainly in children, particularly from 2 to 4 years of age, due inflammation of the upper airway from the larynx to main and branch bronchus.',
      ),
      p(
        '**Symptoms/Signs:** Preceded by an URTI (cough, rhinorrhoea, pharyngitis, low grade fever). Stridor, barking cough, hoarse voice, suprasternal and intercostals indrawing, cyanosis, agitation, respiratory distress, unconsciousness in severe cases. Use scoring system to judge severity if croup is suspected.',
      ),
      table(
        ['Severity', 'Features', 'Westley score'],
        [
          ['Mild croup', 'Occasional barking cough; no stridor at rest; and no to mild suprasternal, intercostal indrawing (retractions of the skin of the chest wall), or both', '0-2'],
          ['Moderate croup', 'Frequent barking cough, easily audible stridor at rest, and suprasternal and sternal wall retraction at rest, but no or little distress or agitation', '3-5'],
          [
            'Severe croup',
            'Frequent barking cough, prominent inspiratory and - occasionally - expiratory stridor, marked sternal wall retractions, decreased air entry on auscultation, and significant distress and agitation',
            '6-11',
          ],
        ],
      ),
      p('**1. Causes:** Viral laryngotracheitis (very common) e.g. RSV, hMPV etc; Recurrent or spasmodic croup (common); Bacterial tracheitis (rare)'),
      p('**2. Assessment**'),
      ul(
        'Peak age 6 months to 3 years, 80% <5 years.',
        'Hoarseness or muffled voice',
        'Stridor',
        'Respiratory rate',
        'Drooling',
        'Barking cough',
        'Fever',
        li(
          'Severity of upper airway obstruction best assessed clinically by:',
          'Increase agitation (Irritability and/or anxiety)',
          'Drowsiness, tiredness, exhaustion',
          'Heart Rate (Tachycardia)',
          'Degree of retractions (sternal and subcostal recession)',
          'Pulsus paradoxicus',
          'Central cyanosis',
          'Croup score*',
        ),
      ),
      p('**3. Complications:** Hypoxia (Oxygen saturation by pulse oximetry, blood gases rarely indicated); Dehydration; Respiratory failure'),
      p('**4. Investigation:** AP and lateral neck x-ray (may not be important for classical cases)'),
      p('**5. Management**'),
      box('info', 'Mild (no stridor at rest), i.e. Westley Croup Score < 3', 'Minimal disturbance, hydration ± antipyretic.'),
      p('**Moderate to severe, i.e. Westley Croup Score > 2**'),
      ul(
        'Admit if croup score is greater than 2',
        'Minimal handling of patient',
        'Adequate hydration, preferable orally, ± antipyretic',
        'Place child in position of comfort ± humidified oxygen',
      ),
      drug(
        'Nebulized adrenaline (1ml of 1:1000 plus 3ml N/saline)',
        'nebulize with 0.5 - 1ml of prepared solution, diluted to 2-3ml, may repeat >1hrly',
        'rebound phenomenon can occur, monitor HR, RR, & Retraction',
      ),
      drug('Steroid', 'Administer Dexamethasone 0.6mg/kg PO /IV/IM stat./daily (max. dose 16mg)', 'nebulized pulmicort 2mg/4ml 0.9% Normal saline stat.'),
      warn('Source check: "may repeat >1hrly" for nebulized adrenaline is ambiguous (more than hourly, or after more than 1 hour?).', 'Check with the source'),
      ul(
        'monitor carefully for signs of deterioration or worsening of score',
        'urgent tracheal intubation is required in <1% for respiratory failure',
        'Intubation and tracheostomy should be done by an experienced person if indicated (impending respiratory failure/arrest)',
      ),
      note(
        'If child fails to respond as expected to therapy, consider lateral neck radiography and evaluation by ENT surgeon for retropharyngeal abscess, bacterial tracheitis, and foreign body',
      ),
      table(
        ['Clinical feature', '0', '1', '2', '3', '4', '5'],
        [
          ['Stridor', 'None', 'With agitation', 'At rest', '...', '...', '...'],
          ['Retractions', 'None', 'Mild', 'Moderate', 'Severe', '...', '...'],
          ['Cyanosis', 'None', '...', '...', '...', 'With Agitation', 'At rest'],
          ['Consciousness', 'Normal/Asleep', '...', '...', '...', '...', 'Disoriented'],
        ],
        'Westley Croup Score (*Mild croup 0-2; **Moderate croup 3-5; ***Severe croup 6-11)',
      ),
      box(
        'info',
        'Discharge criteria: discharge if',
        'Westley Croup Score <3 [i.e. Mild croup], and',
        'At least 3 hours post adrenaline nebulization',
        'And no other indication for admission exists.',
      ),
      table(
        ['', '0', '1', '2'],
        [
          ['Cyanosis', 'None', 'In room air', 'In 40% O2 [FiO2=0.4]'],
          ['Inspiratory Breath sounds', 'Normal', 'Harsh with rhonchi', 'Delayed'],
          ['Stridor', 'None', 'Inspiratory', 'Inspiratory & Expiratory or at rest'],
          ['Cough', 'None', 'Hoarse', 'Bark'],
          ['Retractions & Flaring', 'None', 'Flaring & suprasternal retraction', 'Flaring & suprasternal retraction plus Sub costal and intercostals recession'],
        ],
        'Croup score',
      ),
      ul(
        'Croup Score ≥4 is indicative of moderately severe airway obstruction,',
        'Croup Score ≥ 7 (± PaCO2 >45 and PaO2 <70mmHg in room air) indicative of impending respiratory failure',
      ),
    ],
    { tone: 'urgent' },
  ),
  sec(
    C12,
    'k-asthma',
    '12.4',
    'Asthma',
    [
      goTo('pd-asthma-gts', 'See also: Asthma Management (Ghana Thoracic Society 2023), the newer national guideline'),
      p('**1. Diagnosis**'),
      ul(
        'Recurrent reversible airway obstruction',
        'Wheeze / Cough (especially nocturnal)',
        'Difficulty in breathing /Prolong expiratory phase',
        'More than 15% improvement in Peak expiratory flow rate (PEFR) after inhaled salbutamol (suggestive)',
        'Rule out other causes of wheeze (e.g. foreign body airway obstruction, bronchiolitis, Pneumonia in very young children, etc)',
        'High association with allergic phenomena (especially allergic rhinitis (common), eczema)',
      ),
      p('**2. Pathophysiology:** Bronchoconstriction; Mucosal oedema; Excessive mucous production'),
      table(
        ['High index', 'Predictor in later childhood'],
        [
          [
            'Frequent wheeze (>1/ month), Exercise/Activity-induced cough or wheeze, Nocturnal cough in periods without "colds", Absence of seasonal variation in wheeze, and Persistent symptoms after age 3. (Exercise test responses in the field)',
            'Wheeze before the age of 3, PLUS one major risk factor: parental history of asthma, eczema; OR two of three minor risk factors: eosinophilia, wheezing without colds, allergic rhinitis',
          ],
        ],
        '3. Clinical suspicion',
      ),
      table(
        ['', 'Severe asthma', 'Life-threatening asthma'],
        [
          ['Heart rate (HR)', '>140/min', ''],
          ['*Respiratory rate (RR)', '>50/min', 'Poor respiratory effort'],
          ['Expiratory wheeze', '', 'Silent chest'],
          ['Oxygen saturation (SaO2)', '', ''],
          ['Dyspnoea / Speech', 'too breathless to talk / feed', 'Words only'],
          ['Alertness', '', 'Reduced conscious level'],
          ['', '', 'Fatigue, agitation, drowsiness'],
          ['*Use of accessory muscles', '', '<33% predicted / best value'],
          ['Peak expiratory flow rate', '<60% predicted / best value', 'Cyanosis'],
          ['Colour / Cyanosis', 'Nil', '>20mmHg'],
          ['Pulsus paradoxus', '10 - 20mmHg', ''],
        ],
        '4. Assessment and features of severe / life-threatening asthma',
      ),
      warn(
        'Source layout: the life-threatening column appears shifted down one row from "Use of accessory muscles" (so "<33% predicted" belongs to peak flow, "Cyanosis" to colour, ">20mmHg" to pulsus paradoxus). No SaO2 thresholds are given.',
        'Check with the source',
      ),
      note(
        'I. Wheeze and respiratory rate are poor indicators of severity. Disappearance of wheeze may actually signify very severe bronchoconstriction (silent chest). II. Contraction of sternomastoids, chest recession and pulse rate are better guides.',
        '*NOTE',
      ),
      p(
        '**Status asthmaticus.** Definition: Any asthmatic attack that fails to respond to the usual medications to which it previously responded. OR Asthma symptoms are refractory to initial bronchodilator therapy in the emergency department. Often associated with patients who have underused or have been underprescribed anti-inflammatory drugs.',
      ),
    ],
    { tone: 'urgent' },
  ),
  sec(
    C12,
    'k-asthma-management',
    undefined,
    'Asthma: management',
    [
      p('**5. Initial / immediate management**'),
      p('**a. Give oxygen to keep SaO2 >92%**'),
      drug(
        'b. Inhaled β2-agonists (salbutamol / albuterol)',
        'i) Via nebulizer: 0.15mg/kg/dose (min. dose 1.25mg; max. dose 5mg.) Or 2.5mg for <8yrs old & 5mg for ≥ 8yrs old. Dilute to total of 2 - 3ml with 0.9% Normal saline. Repeat every 20 minutes for 3 doses. May nebulize back-to-back in severe cases',
        'ii) Via Metered Dose Inhaler (MDI): 100 - 200μg (1 - 2 simultaneous puffs) repeated every 20 minutes with GOOD inhaler technique or using a Spacer (alone if patient cooperates or with face mask if available) for 3 doses. For each puff let patient breathe through spacer 5 times before the next puff is administered.',
        'Most patients respond within 1 hour of treatment.',
        'iii) Ipratropium 0.25 mg (or 2% solution) via nebulizer: Ipratropium is synergistic with β2-agonists and should be administered with salbutamol every 4-6 hours if available. Note: Children appear to have more cholinergic receptors than adults and therefore are more responsive to parasympathetic stimulation.',
      ),
      drug(
        'c. Start corticosteroids simultaneously with inhaled β2-agonists',
        'Orally: Prednisolone /Methylprednisolone @1 -2mg/kg/day for 3 -5days OR Dexamethasone phosphate (decadron) @ 0.6mg/kg/day for ≤ 3days',
        'Parenterally till oral tolerated: IV Methylprednisolone 2mg/kg stat, then 0.5mg/kg/dose 6hrly OR IM Dexamethasone 0.4mg/kg/dose BD (max. dose 16mg/day) OR IV Hydrocortisone 4mg/kg/dose 6hrly',
      ),
      drug(
        'd. Intravenous magnesium sulfate',
        '40-75 mg/kg (typical dose 50mg/Kg, maximum of 2g per dose) dissolved in 30-50 ml normal saline, infused over about 20 - 30 minutes could be helpful for severe exacerbations not responding to conventional therapy.',
      ),
      p('**6. Criteria for admission.** If after nebulized bronchodilator therapy, child'),
      ul(
        'Has not responded adequately clinically',
        'Is exhausted',
        'Still has a marked reduction in the predicted (or usual) peak flow rate',
        'Has a reduced SaO2 <90%',
        'Has status asthmaticus',
      ),
      ul(
        'CXR is indicated ONLY if there is severe dyspnoea or unusual features (e.g. asymmetry chest signs suggestive of pneumothorax, lobar collapse) or signs of chest infection.',
        'Blood gases indicated ONLY in life-threatening or refractory cases.',
      ),
      warn(
        'Respiratory failure and death may be precipitated by fatigued respiratory muscles. Hence, patients not responding to treatment would require transfer to ICU for intubation and ventilatory support while inhaled /parenteral bronchodilators and parenteral corticosteroids are administered.',
      ),
      p('**7. Subsequent acute management**'),
      ul(
        'Continue with oxygen',
        'Check hydration status and Rehydrate and/or maintain hydration',
        'Continue nebulization therapy 1- 4hrly and space interval as tolerated.',
        'Additional nebulized bronchodilators may include ipratropium bromide 0.25mg nebulized with salbutamol / albuterol',
        'Monitor respiration, pulse, SaO2, PEFR & alertness.',
        'Avoid drugs that aggravate asthma or depress respiration. (e.g. NSAIDS, Opioids)',
      ),
      table(
        ['General', 'Respiratory', 'Cardiac', 'Neurologic'],
        [
          [
            'Fatigue; Sweating',
            'Wheezing; Expiratory grunting; Decrease/Absent breath sounds; Flaring of the alae nasi; Retractions of chest wall; Tachypnea, Bradypnea, or apnea; Cyanosis',
            'Bradycardia or Excessive tachycardia; Hypotension or Hypertension',
            'Restlessness; Irritability; Headache; Confusion; Convulsions; Coma',
          ],
        ],
        'Clinical features of respiratory failure',
      ),
      p('**On discharge (out-patient management of asthma):** bronchodilator (preferable inhaled) ± short course oral steroid ≤ 5days (see below for home-management)'),
      drug(
        'Other drugs (if response to inhaled β2-agonists not satisfactory or unable to cooperate with nebulization)',
        'Aminophylline (currently out of favour): 5mg/kg IV over 20-30min (omit if had any theophylline in the past 12hrs), then maintenance @ 0.8 - 1mg/kg/hr',
        'Adrenaline (1:1000): 0.01ml/kg SC (max. dose 0.3ml), may repeat every 20min up to 3 doses or',
        'Terbutaline: 0.01mg/kg SC (max. dose 0.4mg), may repeat every 20min up to 3 doses',
      ),
      p('**Home / out-patient management of asthma**'),
      p('Prevention of attacks/hospitalizations: Review periodically and treat. Use PEFRs to monitor progress'),
      ul(
        '**Very occasional symptoms (once in several months):** Give short course (3-5 days) oral steroids with attacks. Inhaled bronchodilator as required',
        '**Frequent symptoms (more than one episode per month):** Daily Inhaled corticosteroids with bronchodilators. Adjust dose according to severity - The ultimate goal is to achieve a totally asthma-free status. Identify and counsel against precipitating factors',
      ),
      note(
        'Poor technique of using medications or adherence is often a cause of failed response to treatment. Early initiation of steroids is useful in prevention severe attacks. Exclude helminthiasis before administering high doses of steroids',
        'Note',
      ),
      goTo('pd-asthma-gts', 'Stepwise controller therapy and ICS doses (GTS 2023 guideline)'),
    ],
    { tone: 'urgent' },
  ),
  sec(C12, 'k-pneumonia', '12.5', 'Approach to pneumonias', [
    p('**Introduction**'),
    ul(
      'Commonly presents as acute onset of illness with cough, sometimes following acute upper respiratory Illness (AURI).',
      'Common features: Fever, Tachypnoea (fast breathing), Respiratory distress (Lower Chest In-drawing), Grunting',
      'Evidence of area of consolidation on CXR (but not always)',
      'Dullness, crepitations',
      'Referred pain to abdomen suggests usually Right or Left lower lobe involvement',
      'Presence of neck stiffness suggests Right upper lobe pneumonia',
      'Abdominal distention may occur',
      'Diagnosis not always easy: from mild febrile illness to peripheral circulatory collapse with respiratory failure.',
      'Lateral and AP X-rays are important for confirming diagnosis',
      'Blood cultures are recommended for: Severely ill; Immunocompromised; The malnourished; Patients with other focus/foci of infection(s)',
      'Sputum microscopy and culture useful if possible',
      'Right Upper lobe pneumonias usually occur in first year of life from aspiration',
      'Main Risk factors: Malnutrition, Low Birth Weight, Measles, Crowding, Smoke.',
    ),
    p('**Aetiology: common causes**'),
    ul(
      'In developing: Strept pneumoniae (pneumococcus): 30-50% cases; H. influenza (10-30% cases, more commonly in children <4 year); There may be others that are less well known',
      'In young infants in developed countries: Group B strept., Chlamydia trachomatis, Listeria monocytogenes, Strept faecalis, Enteric gram negative bacilli - E. coli, Klebsiella spp.',
    ),
    table(
      ['Age', 'Organism', 'Treatment'],
      [
        ['1st year', 'Streptococcal, Staphylococcal, E. coli', 'chloramphenicol/ benzyl pen/ fluclox + gent (as first line)'],
        ['1st year', 'Chlamydia trachomatis', 'Erythromycin/Azithromycin'],
        ['Beyond 1st year', 'Pneumococcus (over 90%)', 'Amoxicillin /Co-AmoxiClav/Cefuroxime'],
        ['Beyond 1st year', 'Pneumocystis jirovecii (suspected in the immune compromised)', 'Co-trimoxazole'],
      ],
      'Treatment',
    ),
    note('Chlamydia pneumonia: dramatic X-ray changes in infants who are not that ill. Beyond the 1st year, remember Chlamydia, TB as important differentials.', 'PS'),
    p('Any of these organisms may cause pneumonia in the malnourished or immunosuppressed, hence appropriate treatment.'),
    drug('Oral treatment', 'Amoxicillin, Co-AmoxiClav/Cefuroxime'),
    drug('Parenteral treatment', 'Penicillin G, Co-AmoxiClav/Cefuroxime', 'Second line: Third generation cephalosporins'),
    p('Choice of antibiotics ideally based on suspected organisms. For example, appropriate gram-negative coverage should be considered in the immunocompromised.'),
    p('**Special notes: common complications**'),
    ul(
      'Pleural effusions - with pneumococcal infections',
      'Empyemas, pneumothorax - commonly with staphylococcal infections',
      'Suspect immunosuppression if there is a history of more than 2 episodes of pneumonia in one year',
    ),
    p('**Notes during management**'),
    ul(
      'Amoxicillin can effectively be given at 90mg/kg in 2 divided doses orally for 5 - 7 days, especially for all patients who do not require admission.',
      'Although septicaemic illness does not always occur it is helpful to do a blood culture at booking for all hospitalized cases to facilitate choices for second line treatment, should the need arise.',
      'Useful second line drugs: Cefotaxime, Clindamycin, Azithromycin.',
      'Need for hydration and nutritional support (look for and manage dehydration)',
      'Effects of underlying/associated problems, e.g. measles, FB, AIDS, TB, etc',
    ),
    warn('Coughing + poor peripheral perfusion, rapid pulse, High resp. rate, cardiomegaly, Hepato-(spleno)megaly is suggestive of Heart failure', 'NB'),
    see('k-heart-failure', '3.2 Heart failure'),
    p('**12.6 Atypical pneumonias**'),
    p(
      'Definition: Pneumonia caused by non-bacterial pathogens, typically Mycoplasma pneumoniae, Pneumocystis jirovecii, viruses. Commonly associated with mild (progressive) symptoms (fever, cough) with chest X-rays that look much worse than clinical picture would suggest.',
    ),
    ul(
      'Exclude TB',
      'Always rule out immunosuppression in such cases.',
      'Consider Erythromycin/Azithromycin or Co-trimoxazole for treatment in such cases depending on history and other clinical parameters.',
    ),
  ]),
  sec(C12, 'k-tb', '12.7', 'Paediatric pulmonary tuberculosis', [
    p(
      '**Definition:** Disease caused by mycobacterium tuberculosis; mycobacterium bovis; mycobacterium africanum. There are two types namely pulmonary and extra pulmonary tuberculosis. Examples of extra pulmonary tuberculosis includes CNS, Cervical, Spinal (Potts disease), abdominal tuberculosis and so forth.',
    ),
    p(
      '**Symptoms & signs:** Cough which is usually more than two (2) weeks; fever (may or may not be present at presentation), weight loss, spinal mass; abdominal mass. Weight loss; Clubbing; Generalised Lymphadenopathy; Radiological changes; Gibbus',
    ),
    ul(
      '**Definitive diagnosis:** Sputum for AFBs (uncommon); PCR of urine and pleuritic fluid; Histopathology of biopsy',
      '**Supportive:** Positive Family history; Radiological changes; Positive Mantoux test (>10mm); raised ESR',
    ),
    table(
      ["Patient's weight", 'Initial phase (2 months): 2 months RH and Z, daily, 56 total doses. HR (Isoniazid 30mg + Rifampicin 60mg) + Pyrazinamide (Z) 150mg', 'Continuation (4 months): 4 months RH, daily, 112 total doses. HR (Isoniazid 30 mg and Rifampicin 60 mg)'],
      [
        [
          'Up to 9 kg (according to weight)',
          "Calculate to nearest number of children's tablets; H 5 mg/kg and R 10 mg/kg daily, plus Z (Pyrazinamide) 25 mg/kg",
          "Calculate to nearest number of children's tablets; H 5 mg/kg and R 10 mg/kg daily",
        ],
        ['10 - 14 kg', 'HR 2 tablets + Z 2 tablets', 'HR 2 tablets'],
        ['15 - 19 kg', 'HR 3 tablets + Z 3 tablets', 'HR 3 tablets'],
        ['20 - 29 kg', 'HR 4 tablets + Z 4 tablets', 'HR 4 tablets'],
        ['30+ kg', 'Refer to adult regimen below', ''],
      ],
      '"Category 3" - Children under 12 years regimen',
    ),
    p(
      '**"Category 1" - New adult (> 12 years).** A new case is a patient who has not taken TB drugs before, or has taken less than 4 weeks of TB drugs in the past, (or a patient who has interrupted treatment of more than 4 weeks but is found sputum or culture negative).',
    ),
    table(
      ["Patient's weight", 'Initial phase (2 months): 2(RHZE) daily, 56 total doses (Isoniazid 75mg + Rifampicin 150mg + Pyrazinamide 400mg + Ethambutol 275mg)', 'Continuation phase (4 months): 4(HR) daily, 112 total doses (Isoniazid 150mg + Rifampicin 150mg) for 4 months'],
      [
        ['30-39 kg', '2', '1.5'],
        ['40-54 kg', '3', '2'],
        ['55-70 kg', '4', '3'],
        ['70 kg +', '5', '3'],
      ],
      '"Category 1" - New adult (> 12 years): tablets per day',
    ),
    note('The above are for the combination HRZE supplied through the Global TB Drug Facility. RH: isoniazid + rifampicin; Z: pyrazinamide'),
    ul(
      '*Tb Meningitis add streptomycin (20-40mg/kg/day',
      '*Indication for steroids: Large Pleural effusion; Endobronchial tuberculosis; pericardial effusion; tuberculous meningitis; Laryngeal tuberculosis',
      '*Ethambutol should be considered with caution when there is treatment failure',
    ),
    p('**Supportive therapy:** Improve Nutrition; Screening of immediate family members; Surgical intervention where necessary'),
    p('**Post exposure prophylaxis**'),
    ol(
      'For children five years and below with positive family contact Isoniazid !!5mk/kg/day!! for three months',
      'If mantoux is positive after three months continue prophylactics for another three months.',
      'Start full treatment anytime you suspect disease',
    ),
    warn(
      'Source typo: isoniazid prophylaxis "5mk/kg/day" (presumably 5 mg/kg/day). This 2010 TB regimen and its fixed-dose tablets have since been revised; check current national TB guidelines before publishing.',
      'Check with the source',
    ),
  ]),
]
