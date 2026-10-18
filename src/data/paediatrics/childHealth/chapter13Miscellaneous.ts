import type { Section } from '../../../types/protocol'
import { box, drug, li, note, ol, p, sec, see, table, ul, warn, type Place } from '../../helpers'

const C13S: Place = { chapter: '13. Miscellaneous disorders', subchapter: 'Snake bites' }
const C13P: Place = { chapter: '13. Miscellaneous disorders', subchapter: 'Poisoning' }

export const CHAPTER_13_MISCELLANEOUS: Section[] = [
  sec(C13S, 'k-snake', '13.1', 'Snake bites: recognition and clinical features', [
    p('Venomous snakes constitute approximately <15% of species of snakes known to exist.'),
    table(
      ['Type of venom', 'Snakes', 'Recognition'],
      [
        ['Cytotoxic (local tissue destruction)', 'Viperidae (e.g. Puff adder, Gaboon viper)', "flat, arrow-shaped head; short and stout body; often lie in 'Z' position"],
        ['Neurotoxic (neuromuscular paralysis)', 'Elapidae (e.g. Mamba, Cobra)', 'head continuous with body; slender and agile; hooded neck; spits'],
        ['Haemotoxic (bleeding diathesis)', 'Colubrids and some vipers (e.g. carpet viper - Echis carinatus)', 'very large eyes; slender body; ragged deep wound'],
        ['Cardiotoxic (cardiac arrhythmias, hypotension etc)', 'Viperidae', ''],
        ['Myotoxic (systemic rhabdomyolysis)', 'Hydrophiidae', ''],
      ],
      '13.1.1 Recognition of venomous snakes',
    ),
    p('**13.1.2 Clinical features.** Local pain and fang marks are very variable and of no help in diagnosis.'),
    ul(
      li(
        '**a. Neurotoxicity**',
        'Typically, symptoms develop within 1-2 hours',
        'Contraction of frontalis muscle (puckered forehead)',
        'Extra-ocular muscles paralysis (e.g. ophthalmoplegia, ptosis, blurred vision)',
        'hyperacusis, hypersalivation, congested conjunctiva, circum-oral numbness',
        'More serious late signs include dysphagia, dysphonia, and paralysis of muscles of deglutition and respiration',
        'NB. The paralysed tongue (inability to protrude) may obstruct the upper airway.',
      ),
      li(
        '**b. Haemotoxic (procoagulant and haemorrhagin)**',
        'Persistent bleeding from fang mark, venopuncture site or new scarification marks',
        'Spontaneous bleeding (e.g. gingival sulci, haematuria, intraperitoneal, GI tract)',
        'Severe headache, meningism suggestive of Subarachnoid Haemorrhage',
        'Convulsion, hemiplegia and coma suggestive of intracranial haemorrhage',
        'Shock and pulmonary oedema from haemorrhage and /or capillary leakage.',
      ),
      li(
        '**c. Cytotoxic**',
        'Blisters, tender swelling spreads from site of bite',
        'Early tender enlargement of lymph nodes draining the bitten site.',
        'Tensely swollen limbs are at risk of compartment syndrome',
      ),
      li('**d. Myotoxicity**', 'Muscle pain and stiffness with trismus', 'Respiratory muscle paralysis', 'Myoglobinuria and hyperkalaemia'),
      li('**e. Cardiotoxicity**', 'Cardiac arrhythmias, ECG abnormalities and hypotension', 'Responds rapidly to intravenous antivenom'),
    ),
  ]),
  sec(
    C13S,
    'k-snake-management',
    '13.1.3',
    'Snake bites: management and antivenom',
    [
      ol(
        'general measures to support vital functions (including Airway, Breathing & IV fluids)',
        'the site should be cleansed and then left strictly alone',
        'Sedatives are required if the patient is apprehensive',
        'Lab. Investigation: Look for evidence of blood in urine, stool & vomitus; FBC (neutrophil >20,000/mm3, thrombocytopenia in severe envenoming); Incoagulable blood (leave 2-5mls of blood in dry glass: failure to clot in 20min); Raised CPK, AST, BUN in severe envenoming; Do BUN, creatinine, serum K+ in ALL oliguric patients; CXR for suspected pulmonary oedema',
        'Appropriate antitetanus prophylaxis',
        'Treat / prevent secondary infection (e.g. using Penicillin & metronidazole)',
        'Antivenom if indicated* (see below)',
      ),
      box(
        'critical',
        '13.1.4 Indication for antivenom',
        'Severe local envenoming: swelling involving more than half the bitten limb or develop extensive blistering',
        'Systemic envenoming: Neurotoxicity; Haemotoxicity (see above); Impaired consciousness; Cardiotoxicity (cardiac arrhythmias, abnormal ECG, hypotension); Myotoxicity (Rhabdomyolysis stiff and tender muscles, trismus, myoglobinuria)',
        'Local envenoming however small it may be plus: vomiting in the absence of emetic mixture (herbal or orthodox) ingestion; neutrophil leucocytosis; elevated serum enzymes (CPK & AST); haemoconcentration (elevated PCV); uraemia; oliguria (urine output <0.5ml/kg/hour)',
        'Confirmed case of elapid (cobra, mamba): do not wait for symptoms; evidence of fang penetration and snake must definitely have been an elapid.',
      ),
      drug(
        '13.1.5 Administration of antivenom',
        'As soon as possible whenever indicated',
        'The dosage is the same for adults and children; antivenom is for treating the amount of venom and not size of patient.',
        'IV route preferable to IM',
        'Dosage: **40ml in 200ml Normal saline IV stat, for adder/viper bite**; **60-80ml in 200ml Normal saline IV stat, for elapid (neurotoxin) bite**',
        'Run few drops initially as "Test dose" for serum sensitivity and look out for reaction, if no reaction then whole drip in 1hr.',
        'Repeat dose of antivenom if signs & symptoms of envenoming persist after 1st dose: persistence of cardiopulmonary signs > 30min after 1st dose; persistence of incoagulable blood > 6hrs after 1st dose',
        '!!Have drugs to counter anaphylaxis drawn up prior to giving antivenom (i.e. adrenaline, antihistamine, corticosteroid)!!',
        'Dilute 1 amp antivenom in 9 parts water for rinsing of venom from eyes (e.g. cobra)',
        'Use specific antivenom for sea-snake or boomslang bites',
      ),
      see('k-anaphylaxis', '1.4 Anaphylaxis'),
      note(
        'a) Fixed dilated pupils with paralysis may occur in cobra and mamba bites. b) The carpet viper (Echis carinatus) accounts for more snake bite morbidity and mortality than any other species; and in Northern Ghana the same species is responsible for 86 bites per 100,000 populations with 28% mortality.',
        'NOTE',
      ),
    ],
    { tone: 'critical' },
  ),

  sec(C13P, 'k-poisoning', '13.2', 'Poisoning in children: assessment', [
    p('**Poisoning in children may be:**'),
    ul(
      'Accidental - the vast majority, especially <5years',
      'Non-accidental - as a form of child abuse in children over 6 years',
      'Deliberate self-poisoning - in older children',
      'Iatrogenic',
    ),
    p('**A. Assessment. a. History**'),
    ul(
      li(
        'High index of suspicion:',
        'Abrupt onset of symptoms',
        'Inconsistent history',
        'Previous history of ingestion',
        'Consider possibility of poisoning in any child with unexplained coma, seizures, or affective disorder',
      ),
      li('Identification of toxins with details of ingestion', 'Type and time of ingestion/exposure and maximum possible quantity of toxin ingested/exposed.'),
      'Consider other causes of coma in the unconscious child e.g. trauma, seizures, CNS infection',
    ),
    table(
      ['Toxicity', 'Medicine', 'Household products'],
      [
        ['Low', 'Oral contraceptives; Most antibiotics', 'Chalk & crayons; washing powder'],
        ['Intermediate', 'Paracetamol elixir; Salbutamol', 'Bleach, disinfectants, window cleaners'],
        ['High', 'Alcoholic drinks, iron; Salicylate, digoxin; Tricyclic antidepressants', 'Acids, alkalis, petroleum distillates; organophosphorus insecticides'],
      ],
      'Potential toxicity in accidental poisoning in children',
    ),
    table(
      ['System', 'Look for'],
      [
        ['Vital signs', 'Pulse; Respiration; Blood pressure; Temperature'],
        ['Neuromuscular', 'Ataxia; Delirium/Psychosis; Convulsions/Seizures; Paralysis; Coma'],
        ['Ophthalmologic', 'Pupil size; Nystagmus'],
        ['Skin', 'Jaundice; Cyanosis; Urticaria; Hot dry; Flushing'],
        ['Breath odors', 'Alcohol; Garlic; Acetone; Coal gas'],
        ['Gastrointestinal tract', 'Ileus; Violet emesis; Urinary retention'],
      ],
      'B. Examination',
    ),
  ]),
  sec(
    C13P,
    'k-poisoning-management',
    undefined,
    'Poisoning in children: management',
    [
      p('**C. Management priorities**'),
      ol(
        'Resuscitation; maintain the airway, breathing, and circulation.',
        'Determine the type and severity of ingestion; utilizing the history, physical examination & laboratory analysis',
        'Prevent further toxicity by removing the toxin or decreasing its absorption',
        'Enhance the elimination of the drug and its metabolites: i) Continue assessment of vital signs ii) Administer an antidote if possible iii) Rule out attempted suicide or child abuse',
      ),
      box(
        'critical',
        'The comatose child',
        'i) Maintain adequacy of airway and ventilation',
        'ii) Start an intravenous line, give 10% dextrose containing fluid @ 5ml/kg for documented or suspected hypoglycaemia. If effective continue fluid at maintenance rate.',
        'iii) Give naloxone 0.1mg/kg for documented or suspected opiate over dose.',
        "iv) Poor perfusion or circulatory compromise should be treated with IV infusion of 10ml/kg of normal saline or Ringer's lactate, repeated prn till child's condition stable (≤60ml/kg).",
        'v) Obtain samples for toxicology (i.e. urine, blood, gastric aspirate)',
      ),
      p('**Surface decontamination:** Remove clothing and wash skin with soap and water. Wash eyes with water or normal saline'),
      warn(
        'Airway protection is of prime importance in gastrointestinal (GI) decontamination procedures. Insertion of cuffed endotracheal tube is important in patients with altered sensorium or depressed gag reflex, especially in those undergoing gastric lavage.',
        'Gastrointestinal decontamination',
      ),
      drug(
        'Activated charcoal',
        '1g/kg body weight (or 10g / g ingested drug) PO or NG tube (≤50g).',
        'Contraindications: i. increased risk of aspiration e.g. Ileus, intestinal obstruction, hydrocarbons, absent gag reflex. ii. Alcohols, iron, caustics, lithium, electrolyte solutions, boric acid.',
      ),
      drug(
        'Gastric lavage',
        'Indications: gastric lavage with large-bore tube may be useful in a life-threatening ingestion and/or obtunded who arrive soon (≤90mins.)',
        'Contraindications: caustic or hydrocarbon ingestions, co-ingestion of sharps.',
      ),
      drug(
        'Ipecac (Not recommended for use in hospital set up)',
        '6 - 12month-old: 10ml followed by 10ml/kg water',
        '1 - 5 years old: 15ml followed by 120ml water',
        '>5 years old: 30ml followed by 200-300ml water',
        'Contraindication: Coma, Convulsions, Caustics, and hydroCarbon',
      ),
      drug(
        'Cathartics (Avoid in children < 4years)',
        '70% sorbitol solution at 1-2ml/kg',
        'Magnesium citrate at 4-6ml/kg (max. 200ml)',
        'Magnesium sulphate at 250mg/kg',
      ),
      drug(
        'Whole bowel irrigation',
        'Polyethylene glycol solution @ 500ml/hr for 4-6hrs. Start slowly.',
        'Dosage for adolescent is 1L/hr for 4-6hrs.',
        'Effective and method of choice for symptomatic iron toxicity',
      ),
      p('**Enhanced elimination:** pH alteration to enhance excretion of weak acids and bases. Sodium bicarbonate for alkalinization of urine (e.g. salicylates). Ammonium chloride for acidification of urine, limited value. Haemodialysis'),
      p('**Specific antidotes or therapy:** Available for only a limited number of poisons. e.g. N-acetylcysteine for acetaminophen (paracetamol).'),
      p('**Social assessment:** To prevent further poisoning or accidents.'),
    ],
    { tone: 'critical' },
  ),
  sec(C13P, 'k-hydrocarbons', '13.3.1', 'Hydrocarbons', [
    p('**Agents:** Gasoline, kerosene, lubricating oils, mineral oil; Benzene, turpentine, toluene, camphor; Carbon tetrachloride, methylene chloride, trichloroethane.'),
    table(
      ['System', 'Features'],
      [
        ['Pulmonary', 'tachypnea, dyspnea, tachycardia, cyanosis, grunting, cough.'],
        ['CNS', 'lethargy, seizures, coma.'],
        ['Hepatic toxicity', 'Acute liver failure'],
        ['Cardiac toxicity', 'Arrhythmias.'],
      ],
      'Assessment',
    ),
    p('**Management**'),
    ul(
      li(
        'a.) Decontamination',
        'i) !!Avoid emesis or lavage because of the risk of aspiration!!',
        'ii) Avoid charcoal unless there is co-ingestion. It does not bind aliphatics and will increase the risk of aspiration.',
        'iii) If toxic amount ingested or contains potentially toxic substance, consider INTUBATION WITH A CUFFED EndoTracheal Tube followed by lavage.',
      ),
      'b.) If patient seen within 2hr, consider single dose of liquid paraffin to decrease absorption. Give 10-15ml stat orally.',
      li(
        'c.) Treat pneumonitis with oxygen.',
        'Routine use of antibiotics and steroids not warranted.',
        'Add antibiotics only with aspiration or suspected superimposed bacterial infection.',
      ),
      li(
        'd.) Observe patient for at least 6 hours.',
        'i) If asymptomatic for 6hrs and CXR is normal, discharge.',
        'ii) If symptomatic within 6hrs, admit.',
        'iii) If asymptomatic but abnormal CXR, observe further.',
        'iv) Lung complication may be delayed 12 hrs.',
      ),
    ),
  ]),
  sec(C13P, 'k-caustics', '13.3.2', 'Caustic ingestions', [
    p(
      '**Agents:** Strong acids; Alkalis (e.g. hair relaxers, drain/oven cleaners, detergent crystals). Have the potential for airway swelling or esophageal perforation, even if no symptoms initially or no oropharyngeal burns.',
    ),
    p('**Assessment:** Drooling, persistent salivation, vomiting (often with blood or tissue), stridor, dyspnea, aphonia, hoarseness, chest pain, abdominal pain.'),
    p('**Management**'),
    ul(
      'a) !!Ipecac or lavage is contraindicated!!',
      'b) Asymptomatic: ingested GI irritants but non caustic substance (e.g. household bleach) and demonstrate good oral intake. Give oral fluids as a diluent (10-15ml/kg of water, milk, etc.). May be followed as outpatients.',
      li(
        'c) Symptomatic',
        'i) Stabilize airway',
        'ii) Maintain NPO. Do not pass NG tube BLINDLY',
        'iii) Obtain IV access and start IV fluids',
        'iv) Obtain FBC, GXM, CXR',
        'v) Obtain surgical consultation; prepare for endoscopy.',
        'vi) Consider IV steroid, though controversial; (hydrocortisone at 4mg/kg q6hrly or dexamethasone at 0.4mg/kg/12hrly or methylprednisolone at 2mg/kg/day divided Q6-8hr)',
      ),
    ),
  ]),
  sec(C13P, 'k-iron-poisoning', '13.3.3', 'Iron poisoning', [
    table(
      ['Stage', 'Features'],
      [
        ['1st stage GI toxicity (30min ~ 6hrs)', 'Nausea, vomiting, diarrhea, abdominal pain, hematemesis, and malena. Rarely shock, seizures, and coma'],
        ['2nd stage Latent period (6 ~ 24 hours)', 'Improvement and sometimes resolution of clinical symptoms.'],
        [
          '3rd stage Systemic toxicity (6 ~ 48 hours)',
          'Shock, seizures, cyanosis, lethargy, coma, hypoglycaemia, metabolic acidosis, coagulopathy associated with hepatic dysfunction and/or renal failure, and death.',
        ],
        ['4th stage Late complications (4 ~ 8 weeks)', 'Stricture formation with pyloric or antral stenosis.'],
      ],
      'Assessment',
    ),
    p('**Management**'),
    ol(
      'Determine amount of iron ingested. Abdominal X-ray may be helpful as most iron tablets are radio-opaque.',
      'If dose of elemental iron < 20mg/kg, no treatment is needed.',
      'For elemental iron 20 - 60mg/kg or ingestion of unknown amount, consider gastric emptying & give 60ml milk after. If remain asymptomatic in first 6hrs, no further treatment.',
      'Consider gastric lavage if dose ingested >60mg/kg and/or presence of large amount of tablets on radiograph. If iron tablets still present in stomach despite lavage begin whole bowel irrigation, especially if abdominal. X-ray reveals iron tablets distal to the pylorus.',
      'Supportive care is the most important therapy. IV fluids, avoid hypovolemic shock / acidemia. Maintain urine output >2ml/kg/hr.',
      'Give deferoxamine IV at 15mg/kg/hr via continuous infusion in all cases of serious poisoning (i.e. presence of significant clinical symptoms, positive abd. X-ray with significant number of tablets.) up to a total of 80mg/kg/24h. Leave 5g in 50ml water in the stomach after gastric lavage. !!Beware of hypotension!!',
    ),
  ]),
  sec(
    C13P,
    'k-pesticides',
    '13.3.4',
    'Pesticides',
    [
      table(
        ['Class', 'Examples'],
        [
          ['Carbamates', 'e.g. Carbaryl'],
          ['Organophosphates', 'e.g. Malathion, dimefox, diazinon, TEPP etc.'],
          ['Organochloride', 'e.g. DDT, benzene hexachloride, lindane etc.'],
        ],
        'Common agents',
      ),
      p('**Assessment**'),
      ul(
        '**Muscarinic:** Salivation, Lacrimation, Urination, Defecation, gastric Cramping, Emesis (SLUDGE); bronchorrhea, miosis.',
        '**Nicotinic:** Muscle fasciculations, tremor, weakness.',
        '**Central Nervous System (CNS):** Agitation, seizures, coma.',
      ),
      p('**Treatment**'),
      ul(
        li(
          'Decontamination',
          'a. Remove clothing and wash skin with soap and water',
          'b. Gastric lavage if poison swallowed',
          'c. Avoid milk or oils as they enhance absorption',
        ),
        'Aims to support respiration and circulation, to treat acetylcholinesterase inhibition, control/treat seizures and to prevent hypoglycaemia.',
      ),
      drug(
        'Antidotes',
        'a. **Atropine** (causes tachycardia, pupils dilatation, reduces bronchorrhea) 0.025mg/kg (min. dose 0.1mg & max. dose 1mg) Q15min till fully atropinized',
        'b. **Pralidoxime** (reverses & prevents fasciculations, neuropathy & weakness) 20-40mg/kg, Q6hrly for 24-48hrs.',
        'c. Control seizures with pharmacotherapy e.g. Diazepam.',
      ),
    ],
    { tone: 'critical' },
  ),
]
