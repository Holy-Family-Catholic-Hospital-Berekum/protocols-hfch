import type { ProtocolContent } from '../../types/protocol'
import { box, danger, decision, drug, flow, goTo, note, ol, p, refs, section, see, table, ul } from '../helpers'

const PAEDIATRIC_KEYWORDS = ['paediatric', 'pediatric', 'children', 'child', 'infant', 'APLS', 'PALS']

export const PALS_APLS: ProtocolContent = {
  title: 'Paediatric Advanced Life Support',
  category: 'anaesthesia',
  version: 'v1.0',
  summary: 'Paediatric cardiac arrest: shockable (VF/pulseless VT) and non-shockable (PEA/asystole) loops, during-CPR checklist, reversible causes and post-resuscitation care.',
  keywords: [...PAEDIATRIC_KEYWORDS, 'cardiac arrest', 'CPR', 'VF', 'pulseless VT', 'PEA', 'asystole', 'adrenaline', 'amiodarone', 'ROSC'],
  attachments: [],
  timer: { enabled: true, cycleSeconds: 120 },
  sections: [
    section(
      'pals-start',
      'Continue CPR and assess rhythm',
      [
        ol('**Continue CPR** with minimal interruptions', '**Attach defibrillator/monitor**'),
        decision('Assess rhythm', [
          { label: 'Shockable: VF / pulseless VT', tone: 'critical', target: 'pals-shockable' },
          { label: 'Non-shockable: PEA / asystole', tone: 'info', target: 'pals-non-shockable' },
        ]),
      ],
      { tone: 'critical' },
    ),
    section(
      'pals-shockable',
      'Shockable: VF / pulseless VT',
      [
        flow(
          { id: 'ps-shock', kind: 'shock', title: '**Shock** (4 J/kg)' },
          { id: 'ps-cpr', kind: 'action', title: '**Recommence CPR** with minimal interruptions' },
          {
            id: 'ps-drugs',
            kind: 'drug',
            title: 'Drugs',
            items: ['**Adrenaline** 10 mcg/kg after 2nd shock (then every 2nd loop)', '**Amiodarone** 5 mg/kg after 3rd shock'],
          },
          { id: 'ps-continue', kind: 'action', title: '**Continue CPR** for 2 mins' },
          {
            id: 'ps-rosc',
            kind: 'check',
            title: 'Return of spontaneous circulation?',
            branches: [
              { label: 'YES → Post-resuscitation care', tone: 'stable', target: 'pals-post' },
              { label: 'NO → Assess rhythm', tone: 'critical', target: 'pals-start' },
            ],
          },
        ),
      ],
      { tone: 'critical' },
    ),
    section(
      'pals-non-shockable',
      'Non-shockable: PEA / asystole',
      [
        flow(
          { id: 'pn-cpr', kind: 'action', title: '**Recommence CPR** with minimal interruptions' },
          { id: 'pn-adrenaline', kind: 'drug', title: '**Adrenaline** 10 mcg/kg (immediately then every 2nd loop)' },
          { id: 'pn-continue', kind: 'action', title: '**Continue CPR** for 2 mins' },
          {
            id: 'pn-rosc',
            kind: 'check',
            title: 'Return of spontaneous circulation?',
            branches: [
              { label: 'YES → Post-resuscitation care', tone: 'stable', target: 'pals-post' },
              { label: 'NO → Assess rhythm', tone: 'critical', target: 'pals-start' },
            ],
          },
        ),
      ],
      { tone: 'info' },
    ),
    section('pals-during', 'During CPR', [
      ul(
        'Airway adjuncts (SGA/ETT)',
        'Oxygen',
        'Waveform capnography',
        'IV/IO access',
        'Minimise interruptions to CPR',
        'Plan actions before interrupting compressions (e.g. charge manual defibrillator to 4 J/kg)',
      ),
    ]),
    section('pals-causes', 'Consider and correct', [
      ul(
        'Hypoxia',
        'Hypovolaemia',
        'High or low electrolytes (K, Ca, Mg) and metabolic disorders',
        'Hypothermia/hyperthermia',
        'Tension pneumothorax',
        'Tamponade',
        'Toxins',
        'Thrombosis (pulmonary/coronary)',
      ),
    ]),
    section(
      'pals-post',
      'Post-resuscitation care',
      [
        ul(
          'Re-evaluate ABCDE',
          '12 lead ECG, CXR',
          'Treat precipitating causes',
          'Aim for SpO₂ 94-98%, normocapnia and normoglycaemia',
          'Temperature control',
        ),
      ],
      { tone: 'stable' },
    ),
  ],
}

export const ASYSTOLE_PEA: ProtocolContent = {
  title: 'Asystole and PEA Management (paediatric)',
  category: 'anaesthesia',
  version: 'v1.0',
  summary: 'Paediatric non-shockable cardiac arrest loop: CPR, adrenaline 10 mcg/kg, 2-minute cycles, ROSC check.',
  keywords: [...PAEDIATRIC_KEYWORDS, 'asystole', 'PEA', 'pulseless electrical activity', 'non-shockable', 'cardiac arrest', 'adrenaline', 'CPR'],
  attachments: [],
  timer: { enabled: true, cycleSeconds: 120 },
  sections: [
    section(
      'ap-loop',
      'Non-shockable loop',
      [
        flow(
          { id: 'ap-assess', kind: 'action', title: '**Assess rhythm**: Non-shockable PEA/asystole' },
          { id: 'ap-cpr', kind: 'action', title: '**Recommence CPR** with minimal interruptions' },
          { id: 'ap-adrenaline', kind: 'drug', title: '**Adrenaline** 10 mcg/kg (immediately then every 2nd loop)' },
          { id: 'ap-continue', kind: 'action', title: '**Continue CPR** for 2 mins' },
          {
            id: 'ap-rosc',
            kind: 'check',
            title: 'Return of spontaneous circulation?',
            branches: [
              { label: 'YES → Post-resuscitation care', tone: 'stable', target: 'ap-post' },
              { label: 'NO → Assess rhythm', tone: 'critical', target: 'ap-assess' },
            ],
          },
        ),
        goTo('an-pals', 'Paediatric Advanced Life Support', 'If the rhythm becomes shockable'),
      ],
      { tone: 'critical' },
    ),
    section('ap-post', 'Post-resuscitation care', [goTo('an-pals', 'Post-resuscitation care (Paediatric Advanced Life Support)')], {
      tone: 'stable',
    }),
  ],
}

export const VT_PAEDS: ProtocolContent = {
  title: 'Management of VT (paediatric)',
  category: 'anaesthesia',
  version: 'v1.0',
  summary: 'Paediatric ventricular tachycardia with a pulse: with or without shock; synchronised DC shock 1-2-4 J/kg, amiodarone 5 mg/kg.',
  keywords: [...PAEDIATRIC_KEYWORDS, 'VT', 'ventricular tachycardia', 'tachycardia', 'cardioversion', 'DC shock', 'amiodarone'],
  attachments: [],
  timer: { enabled: false },
  sections: [
    section(
      'vt-pulse',
      'Pulse present?',
      [
        decision('Pulse present?', [
          { label: 'YES', tone: 'urgent', target: 'vt-shock-check' },
          { label: 'NO → VF/pulseless VT protocol', tone: 'critical', target: 'vt-no-pulse' },
        ]),
      ],
      { tone: 'critical' },
    ),
    section('vt-no-pulse', 'No pulse: VF/pulseless VT protocol', [goTo('an-pals', 'Paediatric Advanced Life Support (shockable)')], {
      tone: 'critical',
    }),
    section('vt-shock-check', 'Shock present?', [
      decision('Shock present?', [
        { label: 'YES', tone: 'critical', target: 'vt-shock' },
        { label: 'NO', tone: 'urgent', target: 'vt-no-shock' },
      ]),
    ]),
    section(
      'vt-shock',
      'Shock present',
      [
        ol('**Appropriate sedation / analgesia**', '**DC shock* 1 J/kg**', '**DC shock* 2 J/kg**', '**Seek advice.** Consider DC shock* 4 J/kg and amiodarone'),
        note('*Synchronous shock. If fails to discharge, use asynchronous shock.'),
      ],
      { tone: 'critical' },
    ),
    section(
      'vt-no-shock',
      'No shock',
      [drug('Amiodarone', '5 mg/kg over 20 mins'), p('**Consider:** Synchronous DC shock. Seek advice.')],
      { tone: 'urgent' },
    ),
  ],
}

export const SVT_PAEDS: ProtocolContent = {
  title: 'Management of SVT (paediatric)',
  category: 'anaesthesia',
  version: 'v1.0',
  summary: 'Paediatric supraventricular tachycardia: vagal manoeuvres, adenosine 100-200-300 mcg/kg, or synchronous DC shock 1-2-4 J/kg if shocked.',
  keywords: [...PAEDIATRIC_KEYWORDS, 'SVT', 'supraventricular tachycardia', 'tachycardia', 'adenosine', 'vagal', 'cardioversion', 'DC shock'],
  attachments: [],
  timer: { enabled: false },
  sections: [
    section('svt-shock-check', 'Shock present?', [
      decision('Shock present?', [
        { label: 'YES', tone: 'critical', target: 'svt-shock' },
        { label: 'NO', tone: 'urgent', target: 'svt-no-shock' },
      ]),
    ]),
    section(
      'svt-shock',
      'Shock present',
      [
        p('**Vagal manoeuvre** (if no delays)'),
        decision('Establishing vasc. access quicker than obtaining defibrillator?', [
          { label: 'YES → Adenosine', tone: 'urgent', target: 'svt-adenosine' },
          { label: 'NO → Synchronous DC shock', tone: 'critical', target: 'svt-dc' },
        ]),
      ],
      { tone: 'critical' },
    ),
    section(
      'svt-no-shock',
      'No shock',
      [p('**Vagal manoeuvre**'), see('svt-adenosine', 'Adenosine', 'Then')],
      { tone: 'urgent' },
    ),
    section(
      'svt-adenosine',
      'Adenosine',
      [
        ol(
          '**Adenosine 100 mcg/kg** (max 6 mg)',
          'Wait **2 mins**, then **Adenosine 200 mcg/kg** (max 12 mg)',
          'Wait **2 mins**, then **Adenosine 300 mcg/kg** (max 12 mg)',
          '**Seek expert advice.** Consider amiodarone',
        ),
      ],
      { tone: 'info' },
    ),
    section(
      'svt-dc',
      'Synchronous DC shock',
      [
        ol(
          '**Give appropriate sedation/analgesia**',
          '**Synchronous DC shock 1 J/kg**',
          '**Synchronous DC shock 2 J/kg**',
          '**Seek expert advice.** Consider synchronous shock 4 J/kg',
        ),
      ],
      { tone: 'critical' },
    ),
  ],
}

export const BRADYCARDIA_PAEDS: ProtocolContent = {
  title: 'Management of Bradycardia (paediatric)',
  category: 'anaesthesia',
  version: 'v1.0',
  summary: 'Paediatric bradycardia: chest compressions if HR<60 despite oxygenation; atropine for vagal overactivity; adrenaline; consider infusion or pacing.',
  keywords: [...PAEDIATRIC_KEYWORDS, 'bradycardia', 'slow heart rate', 'atropine', 'adrenaline', 'pacing', 'vagal'],
  attachments: [],
  timer: { enabled: false },
  sections: [
    section(
      'br-start',
      'First',
      [
        danger('If unresponsive and HR<60 despite oxygenation/ventilation: **Commence chest compressions**'),
        decision('Shock present?', [
          { label: 'YES', tone: 'critical', target: 'br-shock' },
          { label: 'NO → Seek opinion', tone: 'info', target: 'br-no-shock' },
        ]),
      ],
      { tone: 'critical' },
    ),
    section('br-no-shock', 'No shock', [p('**Seek opinion**')], { tone: 'info' }),
    section(
      'br-shock',
      'Shock present',
      [
        p('**Treat hypoxia and shock**'),
        decision('Vagal overactivity?', [
          { label: 'YES → Atropine', tone: 'urgent', target: 'br-atropine' },
          { label: 'NO → Adrenaline', tone: 'critical', target: 'br-adrenaline' },
        ]),
      ],
      { tone: 'critical' },
    ),
    section(
      'br-atropine',
      'Atropine',
      [drug('Atropine', '20 mcg/kg', 'Max dose 1.2 mg'), see('br-adrenaline', 'Adrenaline', 'Then')],
      { tone: 'urgent' },
    ),
    section(
      'br-adrenaline',
      'Adrenaline',
      [drug('Adrenaline', '0.5 mcg/kg/dose', 'Titrate to effect'), p('**Consider:** Adrenaline infusion. Pacing.')],
      { tone: 'critical' },
    ),
  ],
}

export const PALS_RCUK: ProtocolContent = {
  title: 'Paediatric Advanced Life Support (RCUK 2021)',
  category: 'anaesthesia',
  version: 'RCUK 2021',
  summary: 'Resuscitation Council UK 2021 paediatric ALS: 5 rescue breaths then 15:2, shockable and non-shockable pathways, drug doses, ventilation rates and post-arrest care.',
  keywords: [...PAEDIATRIC_KEYWORDS, 'cardiac arrest', 'CPR', 'resuscitation council', 'VF', 'pulseless VT', 'PEA', 'asystole', 'adrenaline', 'amiodarone', 'ROSC'],
  attachments: [],
  timer: { enabled: true, cycleSeconds: 120 },
  sections: [
    section(
      'rc-start',
      'Recognise cardiac arrest',
      [
        ol(
          '**Recognise cardiac arrest**',
          '**Call for help**',
          '**Commence/continue CPR** (5 initial breaths then CV ratio 15:2). Attach defibrillator/monitor. Minimise interruptions',
        ),
        note('The source chart shows the UK in-hospital emergency number (2222). Use the HFCH emergency number.', 'Calling for help'),
        decision('Assess rhythm', [
          { label: 'SHOCKABLE: VF/Pulseless VT', tone: 'critical', target: 'rc-shockable' },
          { label: 'NON-SHOCKABLE: PEA/asystole/brady < 60 min⁻¹', tone: 'info', target: 'rc-non-shockable' },
          { label: 'Return of spontaneous circulation (ROSC)', tone: 'stable', target: 'rc-rosc' },
        ]),
      ],
      { tone: 'critical' },
    ),
    section(
      'rc-shockable',
      'Shockable: VF / Pulseless VT',
      [
        flow(
          { id: 'rcs-shock', kind: 'shock', title: '**1 shock 4 J/kg**' },
          { id: 'rcs-cpr', kind: 'action', title: '**Immediately resume CPR for 2 min**', items: ['Minimise interruptions'], goto: 'rc-start' },
        ),
        box(
          'critical',
          'After 3 shocks give:',
          'Adrenaline IV/IO 10 mcg/kg (and every alternate cycle thereafter)',
          'AND',
          'Amiodarone IV/IO 5 mg/kg (and repeat 5 mg/kg once more only after 5th shock)',
        ),
      ],
      { tone: 'critical' },
    ),
    section(
      'rc-non-shockable',
      'Non-shockable: PEA / asystole / brady < 60 min⁻¹',
      [
        flow(
          { id: 'rcn-cpr', kind: 'action', title: '**Immediately resume CPR for 2 min**', items: ['Minimise interruptions'] },
          {
            id: 'rcn-adrenaline',
            kind: 'drug',
            title: '**Give adrenaline IV/IO 10 mcg/kg** as soon as possible and then every 3–5 min',
            goto: 'rc-start',
          },
        ),
      ],
      { tone: 'info' },
    ),
    section(
      'rc-rosc',
      'Return of spontaneous circulation (ROSC): post cardiac arrest care',
      [
        ul(
          'Use an ABCDE approach',
          'Aim for SpO₂ of 94–98% and normal PaCO₂',
          'Avoid hypotension',
          'Targeted temp management',
          'Glucose control',
        ),
      ],
      { tone: 'stable' },
    ),
    section('rc-during', 'During CPR', [
      ul(
        '**Ensure high quality chest compressions are delivered:** correct rate, depth and full recoil',
        'Provide BMV with 100% oxygen (2 person approach)',
        'Provide continuous chest compressions when a tracheal tube is in place.',
        'Competent providers can consider an advanced airway and capnography, and ventilate at a rate (breaths minute⁻¹) of:',
      ),
      table(['Infants', '1–8 years', '8–12 years', '> 12 years'], [['25', '20', '15', '10–12']], 'Ventilation rate (breaths/min)'),
      ul(
        'Vascular access IV/IO',
        'Once started, give Adrenaline every 3-5 min',
        '**Maximum single dose Adrenaline 1 mg**',
        '**Maximum single dose Amiodarone 300 mg**',
      ),
    ]),
    section('rc-causes', 'Identify and treat reversible causes', [
      ul(
        'Hypoxia',
        'Hypovolaemia',
        'Hyperkalaemia, hypercalcaemia, hypermagnesemia, hypoglycaemia',
        'Hypo-/hyperthermia',
        'Thrombosis – coronary or pulmonary',
        'Tension pneumothorax',
        'Tamponade – cardiac',
        'Toxic agents',
      ),
      p('Adjust algorithm in specific settings (e.g. special circumstances)'),
      refs('Resuscitation Council UK, Guidelines 2021: Paediatric advanced life support'),
    ]),
  ],
}
