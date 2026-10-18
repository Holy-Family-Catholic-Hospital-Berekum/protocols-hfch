import type { ProtocolContent } from '../../types/protocol'
import { box, danger, decision, drug, goTo, li, note, ol, p, refs, section, table, ul, warn } from '../helpers'

const AAGBI_DISCLAIMER =
  'This guideline is not a standard of medical care. The ultimate judgement with regard to a particular clinical procedure or treatment plan must be made by the clinician in the light of the clinical data presented and the diagnostic and treatment options available.'

export const ANAPHYLAXIS: ProtocolContent = {
  title: 'Anaphylaxis',
  category: 'anaesthesia',
  version: 'Aug 2023',
  summary: 'Recognition, IM adrenaline (adults and children), fluids, observation and escalation; APLS paediatric drug doses.',
  keywords: ['anaphylaxis', 'allergy', 'adrenaline', 'epinephrine', 'stridor', 'wheeze', 'shock', 'APLS', 'paediatric'],
  attachments: [],
  timer: { enabled: true },
  sections: [
    section(
      'assess',
      'Assess for',
      [
        ul(
          '**Upper airway obstruction** (stridor, oral swelling)',
          'or **Lower airway obstruction** (wheeze, respiratory distress)',
          'or **Shock** (dizziness, pale, clammy)',
        ),
      ],
      { tone: 'urgent' },
    ),
    section(
      'call-for-help',
      'Call for help',
      [
        ul('**Call for help**', 'Remove trigger / causative agent', 'Position flat or sitting, not walking or standing'),
        decision('Cardiac arrest?', [
          { label: 'NO', tone: 'urgent', target: 'adrenaline-im' },
          { label: 'YES', tone: 'critical', target: 'arrest' },
        ]),
      ],
      { tone: 'urgent' },
    ),
    section(
      'arrest',
      'Cardiac arrest: refer Advanced Life Support algorithm',
      [
        p('**Refer Advanced Life Support algorithm**'),
        goTo('cardiac-arrest', 'Adult Cardiac Arrest', 'Adults'),
        goTo('an-pals-rcuk', 'Paediatric Advanced Life Support (RCUK 2021)', 'Children'),
      ],
      { tone: 'critical' },
    ),
    section(
      'adrenaline-im',
      'Adrenaline IM',
      [
        drug(
          'Adrenaline IM',
          'Use auto injector if available (preferred injection site upper outer thigh)',
          '**Adults: 0.5mg (0.5ml of 1:1,000)**',
          '**Children: 10mcg/kg (0.01mL/kg of 1:1,000)** (min dose 0.1mL, max dose 0.5mL)',
          '**Repeat every 5 minutes as needed**',
        ),
      ],
      { tone: 'critical' },
    ),
    section(
      'support',
      'Monitoring, oxygen, IV access and fluids',
      [
        ul('Attach cardiac monitoring', 'High flow oxygen', 'IV access'),
        drug('For shock: 0.9% saline rapid infusion', '**Adults:** 1,000mL', '**Children:** 20mL/kg'),
        decision('Resolution?', [
          { label: 'Resolution', tone: 'stable', target: 'observe' },
          { label: 'No resolution', tone: 'critical', target: 'specialist' },
        ]),
      ],
      { tone: 'urgent' },
    ),
    section(
      'observe',
      'Resolution: observe (4 hours min)',
      [ul('Monitor vital signs, reassess ABC', 'Consider **steroids** and oral **antihistamine**')],
      { tone: 'stable' },
    ),
    section(
      'specialist',
      'Call for specialist advice',
      [
        p('**Consider:**'),
        ul(
          'Transfer to advanced care setting',
          'Further 0.9% saline',
          'Nebulised **adrenaline** for upper airway obstruction',
          '**Adrenaline** infusion',
          'Inotropic support',
          'Nebulised **salbutamol** for lower airway obstruction',
        ),
      ],
      { tone: 'critical' },
    ),
    section('apls-doses', 'APLS Guidelines: drugs in anaphylaxis', [
      table(
        ['Drug', 'Less than 6 months', '6 months to 6 years', '6–12 years', 'More than 12 years'],
        [
          [
            'Adrenaline IM – pre-hospital practitioners',
            '150 micrograms device or 0.15 ml of 1:1000*',
            '150 micrograms device or 0.15 ml of 1:1000*',
            '300 micrograms device or 0.3 ml of 1:1000*',
            '300/500 microg device or 0.5 ml of 1:1000*',
          ],
          [
            'Adrenaline IM – in-hospital practitioners',
            '10 Micrograms / Kg = 0.01 ml/Kg Of 1:1000, Minimum dose 0.1 ml*',
            '10 Micrograms / Kg = 0.01 ml/Kg Of 1:1000, Minimum dose 0.1 ml*',
            '10 Micrograms / Kg = 0.01 ml/Kg Of 1:1000, Minimum dose 0.1 ml*',
            '10 Micrograms / Kg = 0.01 ml/Kg Of 1:1000, Minimum dose 0.1 ml*',
          ],
          [
            'Adrenaline IV',
            'Adrenaline infusion 0.1 – 1 micrograms/kg/min according to local guidelines',
            'Adrenaline infusion 0.1 – 1 micrograms/kg/min according to local guidelines',
            'Adrenaline infusion 0.1 – 1 micrograms/kg/min according to local guidelines',
            'Adrenaline infusion 0.1 – 1 micrograms/kg/min according to local guidelines',
          ],
          ['Crystalloid', '20 ml/kg', '20 ml/kg', '20 ml/kg', '20 ml/kg'],
        ],
        'Dosage by age',
      ),
      note('*prime needle with adrenaline solution to ensure correct dose with small volumes'),
      refs(
        'Australian Resuscitation Council / New Zealand Resuscitation Council: Anaphylaxis flowchart, reviewed August 2023',
        'Advanced Paediatric Life Support (APLS) Guidelines: drugs in anaphylaxis',
      ),
    ]),
  ],
}

export const EQUIPMENT_CHECKLIST: ProtocolContent = {
  title: 'Checklist for Anaesthetic Equipment',
  category: 'anaesthesia',
  version: 'AAGBI 2012',
  summary: 'Checks at the start of every operating session: machine, power, gases and suction, breathing system, ventilator, scavenging, monitors, airway equipment.',
  keywords: ['anaesthetic machine', 'equipment check', 'checklist', 'AAGBI', 'breathing system', 'two-bag test', 'suction', 'theatre'],
  attachments: [],
  timer: { enabled: false },
  sections: [
    section(
      'checks',
      'Checks at the start of every operating session',
      [
        danger('Do not use this equipment unless you have been trained.'),
        ol(
          '**Check self-inflating bag available**',
          '**Perform manufacturer’s (automatic) machine check**',
          { text: '**Power supply**', sub: ['Plugged in', 'Switched on', 'Back-up battery charged'] },
          {
            text: '**Gas supplies and suction**',
            sub: [
              'Gas and vacuum pipelines – ‘tug test’',
              'Cylinders filled and turned off',
              'Flowmeters working (if applicable)',
              'Hypoxic guard working',
              'Oxygen flush working',
              'Suction clean and working',
            ],
          },
          {
            text: '**Breathing system**',
            sub: [
              'Whole system patent and leak free using ‘two-bag’ test',
              'Vaporisers – fitted correctly, filled, leak free, plugged in (if necessary)',
              'Soda lime – colour checked',
              'Alternative systems (Bain, T-piece) – checked',
              'Correct gas outlet selected',
            ],
          },
          { text: '**Ventilator**', sub: ['Working and configured correctly'] },
          { text: '**Scavenging**', sub: ['Working and configured correctly'] },
          { text: '**Monitors**', sub: ['Working and configured correctly', 'Alarms limits and volumes set'] },
          { text: '**Airway equipment**', sub: ['Full range required, working, with spares'] },
        ),
        warn('RECORD THIS CHECK IN THE PATIENT RECORD'),
      ],
      { tone: 'urgent' },
    ),
    section('dont-forget', 'Don’t Forget!', [
      ul('Self-inflating bag', 'Common gas outlet', 'Difficult airway equipment', 'Resuscitation equipment', 'TIVA and/or other infusion equipment'),
      p(AAGBI_DISCLAIMER),
      refs('© The Association of Anaesthetists of Great Britain & Ireland 2012. AAGBI Safety Guideline: Checklist for Anaesthetic Equipment 2012'),
    ]),
  ],
}

export const LA_TOXICITY: ProtocolContent = {
  title: 'Management of Severe Local Anaesthetic Toxicity',
  category: 'anaesthesia',
  version: 'AAGBI 2010',
  summary: 'Recognition, immediate management, treatment with or without circulatory arrest (intravenous lipid emulsion), and follow-up.',
  keywords: ['local anaesthetic toxicity', 'LAST', 'lipid emulsion', 'intralipid', 'bupivacaine', 'lidocaine', 'seizures', 'AAGBI'],
  attachments: [],
  timer: { enabled: true },
  sections: [
    section(
      'recognition',
      'Recognition: signs of severe toxicity',
      [
        ul(
          'Sudden alteration in mental state, severe agitation or loss of consciousness, with or without tonic-clonic convulsions',
          'Cardiovascular collapse: sinus bradycardia, conduction blocks, asystole and ventricular tachyarrhythmias may occur',
          'Local anaesthetic (LA) toxicity may occur some time after an initial injection',
        ),
      ],
      { tone: 'urgent' },
    ),
    section(
      'immediate',
      'Immediate management',
      [
        ul(
          '**Stop injecting the LA**',
          '**Call for help**',
          'Maintain the airway and, if necessary, secure it with a tracheal tube',
          'Give 100% oxygen and ensure adequate lung ventilation (hyperventilation may help by increasing plasma pH in the presence of metabolic acidosis)',
          'Confirm or establish intravenous access',
          'Control seizures: give a benzodiazepine, thiopental or propofol in small incremental doses',
          'Consider drawing blood for analysis, but do not delay definitive treatment to do this',
        ),
        decision('Circulatory arrest?', [
          { label: 'IN CIRCULATORY ARREST', tone: 'critical', target: 'in-arrest' },
          { label: 'WITHOUT CIRCULATORY ARREST', tone: 'urgent', target: 'no-arrest' },
        ]),
      ],
      { tone: 'urgent' },
    ),
    section(
      'in-arrest',
      'Treatment: in circulatory arrest',
      [
        ul(
          'Start cardiopulmonary resuscitation (CPR) using standard protocols',
          'Manage arrhythmias using the same protocols, recognising that arrhythmias may be very refractory to treatment',
          'Consider the use of cardiopulmonary bypass if available',
        ),
        goTo('cardiac-arrest', 'Adult Cardiac Arrest'),
        box(
          'critical',
          'GIVE INTRAVENOUS LIPID EMULSION (following the regimen overleaf)',
          'Continue CPR throughout treatment with lipid emulsion',
          'Recovery from LA-induced cardiac arrest may take >1h',
          'Propofol is not a suitable substitute for lipid emulsion',
          'Lidocaine should not be used as an anti-arrhythmic therapy',
        ),
        warn(
          'The source refers to a lipid emulsion regimen “overleaf”. That page was not included in the material provided, so no lipid dosing is shown here.',
          'Lipid emulsion regimen not included',
        ),
      ],
      { tone: 'critical' },
    ),
    section(
      'no-arrest',
      'Treatment: without circulatory arrest',
      [
        p('Use conventional therapist to treat:'),
        ul('hypotension,', 'bradycardia,', 'tachyarrhythmia'),
        box(
          'urgent',
          'CONSIDER INTRAVENOUS LIPID EMULSION (following the regimen overleaf)',
          'Propofol is not suitable substitute for lipid emulsion',
          'Lidocaine should not be used as an anti-arrhythmic therapy',
        ),
        warn(
          'The source refers to a lipid emulsion regimen “overleaf”. That page was not included in the material provided, so no lipid dosing is shown here.',
          'Lipid emulsion regimen not included',
        ),
      ],
      { tone: 'urgent' },
    ),
    section('follow-up', 'Follow-up', [
      ul(
        'Arrange safe transfer to a clinical area with appropriate equipment and suitable staff until sustained recovery is achieved',
        'Exclude pancreatitis by regular clinical review, including daily amylase or lipase assays for two days',
        'Report cases as follows: in the United Kingdom to the National Patient Safety Agency (via www.npsa.nhs.uk); in the republic of Ireland to the Irish Medicines Biard (via www.imb.ie).',
        'If Lipid has been given, please also report its use to the international registry at www.lipidregistry.org. Details may also be posted at www.lipidrescue.org',
      ),
      note('Your nearest bag of Lipid Emulsion is kept: [location to be filled in]', 'Lipid Emulsion location'),
      p(AAGBI_DISCLAIMER),
      refs(
        '© The Association of Anaesthetists of Great Britain & Ireland 2009. AAGBI Safety Guidelines: Management of Severe Local Anaesthetic Toxicity; www.aagbi.org/publications/guidelines/docs/la_toxicity_2010.pdf',
      ),
    ]),
  ],
}

export const MALIGNANT_HYPERTHERMIA: ProtocolContent = {
  title: 'Malignant Hyperthermia Crisis',
  category: 'anaesthesia',
  version: 'AAGBI 2011',
  summary: 'Recognition, immediate management, dantrolene dosing, treatment of complications, monitoring and follow-up.',
  keywords: ['malignant hyperthermia', 'MH', 'dantrolene', 'ETCO2', 'hyperkalaemia', 'suxamethonium', 'volatile', 'AAGBI'],
  attachments: [],
  timer: { enabled: true },
  sections: [
    section('mh-intro', 'About', [
      p(
        'Successful management of malignant hyperthermia depends upon early diagnosis and treatment; onset can be within minutes of induction or may be insidious. The standard operating procedure below is intended to ease the burden of managing this rare but life threatening emergency.',
      ),
    ]),
    section(
      'mh-recognition',
      'Recognition',
      [
        ul('Unexplained increase in ETCO₂ **AND**', 'Unexplained tachycardia **AND**', 'Unexplained increase in oxygen requirement'),
        note('(Previous uneventful anaesthesia does **not** rule out MH)'),
      ],
      { tone: 'urgent' },
    ),
    section(
      'mh-immediate',
      'Immediate management',
      [
        ul(
          '**STOP** all trigger agents (anaesthetic vapours, etc.)',
          '**CALL FOR HELP.** Allocate specific tasks (action plan in MH kit)',
          'Install clean breathing system and **HYPERVENTILATE** with **100% O₂ high flow**',
          'Maintain anaesthesia with intravenous agent',
          '**ABANDON/FINISH** surgery as soon as possible',
        ),
      ],
      { tone: 'critical' },
    ),
    section(
      'mh-treatment',
      'Monitoring & treatment',
      [
        ul('Give **dantrolene**', 'Initiate active **cooling** avoiding vasoconstriction'),
        drug(
          'DANTROLENE',
          '2.5mg/kg immediate iv bolus.',
          'Repeat 1mg/kg boluses as required to max 10mg/kg.',
          '**For a 70kg adult:** Initial bolus: 9 vials dantrolene 20mg (each vial mixed with 60ml sterile water)',
          'Further boluses of 4 vials dantrolene 20mg repeated up to 7 times.',
        ),
        p('**TREAT:**'),
        ul(
          '**Hyperkalaemia:** calcium chloride, NaHCO₃⁻, glucose/insulin',
          '**Arrhythmias:** magnesium/amiodarone/metoprolol. **AVOID** calcium channel blockers - interaction with dantrolene',
          '**Metabolic acidosis:** hyperventilate, NaHCO₃⁻',
          '**Myoglobinaemia:** forced alkaline diuresis (mannitol/frusemide + NaHCO₃⁻) may require RRT later',
          '**DIC:** FFP, croyprecipitate, platelets',
          'Check plasma CK as soon as able',
        ),
        box('info', 'Continuous monitoring', 'Core & peripheral temperature', 'ETCO₂', 'SpO₂', 'ECG', 'Invasive blood pressure', 'CVP'),
        box('info', 'Repeated bloods', 'ABG', 'U&Es (potassium)', 'FBC (haematocrit/platelets)', 'Coagulation'),
      ],
      { tone: 'critical' },
    ),
    section('mh-follow-up', 'Follow-up', [
      ul(
        'Continue monitoring on ICU, repeat dantrolene as necessary',
        'Monitor for renal failure and compartment syndrome',
        'Repeat CK',
        'Consider alternative diagnoses (sepsis, phaeochromocytoma, thyroid storm, myopathy)',
        'Counsel patient & family members',
        'Refer to MH unit',
      ),
      note('Your nearest MH kit is stored: [location to be filled in]', 'MH kit location'),
      p(AAGBI_DISCLAIMER),
      refs('© The Association of Anaesthetists of Great Britain & Ireland 2011. AAGBI Safety Guideline: Malignant Hyperthermia Crisis'),
    ]),
  ],
}

export const CICV: ProtocolContent = {
  title: 'Can Intubate, Can’t Ventilate Algorithm',
  category: 'anaesthesia',
  version: '2025',
  summary: 'Stepwise approach to ventilation and oxygenation problems after intubation: circuit, tube, airway, then medical/surgical causes.',
  keywords: ['can intubate cannot ventilate', 'CICV', 'ventilation', 'hypoxaemia', 'tracheal tube', 'bronchospasm', 'pneumothorax', 'airway'],
  attachments: [],
  timer: { enabled: false },
  sections: [
    section(
      'cicv-algorithm',
      'Algorithm',
      [
        ol(
          li(
            '**Intubation of the trachea** (verified with EtCO₂, DL or VL)?',
            '**NO** → Extubate patient',
            '**YES** → **Can Intubate, Cannot Ventilate**: go to step 2',
          ),
          li(
            'Disconnect the filter from the tracheal tube (TT). Connect bag valve and ventilate with 100% O₂. **Improvement?**',
            '**YES** → Problem with ventilator / hoses / filter',
            '**NO** → step 3',
          ),
          li(
            'Place a suction catheter through the TT and apply suction. **Improvement?**',
            '**YES** → TT kinked or obstructed (mucus / blood)',
            '**NO** → !!CALL FOR HELP!!, then step 4',
          ),
          li(
            'Place a fibreoptic scope through the TT. **Treatable cause?**',
            '**YES** → Foreign body / mucus / blood in the trachea / main bronchi; Accidental endobronchial intubation; TT obstructed by the tracheal wall or opening covered by cuff',
            '**NO** → step 5',
          ),
          li(
            'TT and trachea are not obstructed. **Medical and/or surgical problem likely:**',
            '**Bronchospasm? Anaphylaxis?**',
            '**Pneumothorax?** Decompress tension pneumothorax.',
            '**Surgical cause?** Consider one-lung ventilation if lung injury, thoracic trauma or mediastinal mass',
            '**Intrapulmonal gas exchange problem? V/Q mismatch?** Aspiration, pulmonary edema, ARDS, circulatory collapse? Optimize ventilator settings. Correct causes of hypotension.',
          ),
        ),
        goTo('an-anaphylaxis', 'Anaphylaxis', 'Bronchospasm? Anaphylaxis?'),
      ],
      { tone: 'urgent' },
    ),
    section(
      'cicv-persistent',
      'Persistent severe hypoxemia or circulatory shock?',
      [
        ul(
          '**Continue ventilation with 100% oxygen**',
          '**Cardiopulmonary resuscitation (CPR) if indicated**',
          '**Consider explorative thoracotomy or ECMO if indicated**',
        ),
        refs(
          'Fosse K et al. Can intubate, cannot ventilate: A proposed algorithm to handle problems with ventilation and oxygenation after intubation. Acta Anaesthesiol Scand. 2025 Mar;69(3):e70007. doi: 10.1111/aas.70007.',
        ),
      ],
      { tone: 'critical' },
    ),
  ],
}
