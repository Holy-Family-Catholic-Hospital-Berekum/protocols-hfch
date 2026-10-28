import type { ProtocolContent } from '../types/protocol'
import { SURGERY_GUIDELINES } from './surgery'
import { ANAESTHESIA_PROTOCOLS } from './anaesthesia'
import { PAEDIATRICS_PROTOCOLS } from './paediatrics'
import { INTERNAL_MEDICINE_PROTOCOLS } from './internalMedicine'
import { DENTAL_PROTOCOLS } from './dental'
import { OBS_GYN_PROTOCOLS } from './obsGyn'

/**
 * Starter protocols transcribed from the source PDF (pages 1-4).
 *
 * Transcribed from the page images, not from extracted PDF text (text extraction
 * drops symbols such as ≥). Clinical wording, doses and thresholds are kept exactly
 * as in the source, including known source typos pending the medical director's review.
 * They are imported as DRAFTS and must be verified by a clinician before publishing.
 */



export const STARTER_PROTOCOLS: Record<string, ProtocolContent> = {
  acs: {
    title: 'Acute Coronary Syndrome',
    category: 'emergency',
    version: 'v3.0',
    summary: 'Chest pain suggestive of acute ischemia/infarction. Immediate management, then STEMI or NSTEMI / Unstable Angina pathway.',
    keywords: ['ACS', 'STEMI', 'NSTEMI', 'unstable angina', 'chest pain', 'myocardial infarction', 'MI', 'thrombolysis', 'troponin', 'DAPT', 'aspirin', 'nitroglycerin'],
    attachments: [],
    timer: { enabled: true },
    sections: [
      {
        id: 'trigger',
        title: 'When to use',
        blocks: [
          { type: 'text', text: '**Chest pain pattern suggestive of acute ischemia/infarction**' },
          { type: 'text', text: '!!Start timer!!' },
        ],
      },
      {
        id: 'immediate',
        title: 'Immediate Management',
        tone: 'urgent',
        timeTarget: 'within 10 min',
        blocks: [
          {
            type: 'list',
            items: [
              { text: '**ABC:** supp O₂ **only if** saturation < 90%, monitors, vitals' },
              { text: '**Focused H&P**' },
              { text: '**STAT ECG**', stat: true },
              { text: '**STAT meds:**', stat: true },
            ],
          },
          { type: 'drug', name: 'Aspirin', regimen: ['300 mg (chewed), **and**'] },
          { type: 'drug', name: 'SL nitroglycerin', regimen: ['0.4 mg every 5 min for up to 3 doses unless contraindicated*'] },
          { type: 'list', items: [{ text: '**Labs:** cardiac troponin, FBC, BUE/Cr, LFTs' }] },
          {
            type: 'callout',
            tone: 'urgent',
            title: '*Contraindications to nitrates',
            text: 'severe AoS, HCM, suspected RV infarct, hypotension, marked bradycardia or tachycardia, recent use of PDE-5 inhibitors (i.e., sildenafil/tadalafil)',
          },
        ],
      },
      {
        id: 'ecg-non-diagnostic',
        title: 'If initial ECG is non-diagnostic',
        blocks: [
          { type: 'text', text: '**If initial ECG is non-diagnostic but concern for ACS remains:**' },
          {
            type: 'list',
            items: [
              { text: 'repeat ECG every 15-30 minutes' },
              { text: 'repeat cardiac troponin at 3-6 hrs after symptom onset' },
              { text: 'calculate cardiac risk score (GRACE, HEART, or TIMI)' },
              { text: 'observe for at least 12 hours for symptom recurrence' },
            ],
          },
        ],
      },
      {
        id: 'pathway',
        title: 'STEMI or NSTEMI?',
        blocks: [
          {
            type: 'decision',
            question: 'Which pathway?',
            branches: [
              { label: 'STEMI', tone: 'critical', target: 'stemi' },
              { label: 'NSTEMI / Unstable Angina', tone: 'urgent', target: 'nstemi' },
            ],
          },
        ],
      },
      {
        id: 'stemi',
        title: 'STEMI',
        tone: 'critical',
        blocks: [
          { type: 'callout', tone: 'critical', text: '**Concurrent initiation of medical therapy PLUS mobilization of thrombolysis protocol**' },
          {
            type: 'list',
            ordered: true,
            items: [
              { text: '**STAT** call Cardiology Team to confirm diagnosis', stat: true },
              { text: 'Complete **Thrombolysis Checklist** and obtain patient consent' },
              { text: 'Notify Pharmacy Team' },
              { text: '**Initiate thrombolysis** !!(within 30 min)!!', sub: ['continuous cardiac monitoring'] },
              { text: 'Admit to Cardiology Unit' },
            ],
          },
          { type: 'link', anchor: 'medical-therapy', label: 'Medical Therapy', condition: 'At the same time, start' },
        ],
      },
      {
        id: 'nstemi',
        title: 'NSTEMI / Unstable Angina',
        tone: 'urgent',
        blocks: [
          { type: 'callout', tone: 'urgent', text: '**Initiation of medical therapy ONLY**' },
          { type: 'link', anchor: 'medical-therapy', label: 'Medical Therapy' },
        ],
      },
      {
        id: 'medical-therapy',
        title: 'Medical Therapy',
        tone: 'info',
        blocks: [
          { type: 'text', text: 'For **STEMI** (together with thrombolysis) and **NSTEMI / Unstable Angina**.' },
          {
            type: 'drug',
            name: 'Anticoagulation',
            regimen: ['Enoxaparin SC 1 mg/kg every 12 hrs; **or**', 'UFH IV 60u/kg load (max 4000u) + 12u/kg/hr'],
          },
          {
            type: 'drug',
            name: 'Dual antiplatelet therapy (DAPT)',
            regimen: ['Clopidogrel 300 mg loading dose (75 mg if > 75 years) followed by 75 mg daily; **and**', 'aspirin 75 mg daily*'],
          },
          { type: 'drug', name: 'High-intensity statin', regimen: ['Atorvastatin 80 mg **or** Rosuvastatin 20-40 mg'] },
          { type: 'drug', name: 'Beta blocker (PO only)', regimen: ['within 24 hours if no shock and no contraindication'] },
          { type: 'drug', name: 'IV nitroglycerin', regimen: ['if persistent chest pain'] },
          { type: 'drug', name: 'IV morphine', regimen: ['Consider IV morphine **only if** unacceptable pain despite above therapies'] },
          {
            type: 'callout',
            tone: 'critical',
            title: '*Contraindications to DAPT (to be discussed with cardiology)',
            text: 'previous intracranial hemorrhage or ongoing bleeding',
          },
        ],
      },
    ],
  },

  bradycardia: {
    title: 'Adult Bradycardia with a Pulse',
    category: 'emergency',
    version: 'v1.1',
    summary: 'Immediate management, stable vs unstable pathway, atropine, pacing and infusions, and primary etiology.',
    keywords: ['bradycardia', 'heart block', 'atropine', 'pacing', 'dopamine', 'epinephrine', 'glucagon', 'slow heart rate'],
    attachments: [],
    timer: { enabled: false },
    sections: [
      {
        id: 'immediate',
        title: 'Immediate Management',
        tone: 'urgent',
        blocks: [
          {
            type: 'list',
            items: [
              { text: '**ABC:** secure airway; supplemental O₂ if SpO₂ <94%' },
              { text: '**Attach cardiac leads**; 12 lead ECG (if possible)' },
              { text: '**Obtain blood pressure**, monitor at least every 3 min' },
              { text: 'Obtain IV Access' },
              { text: 'Identify and treat underlying cause' },
            ],
          },
          { type: 'link', protocolId: 'cardiac-arrest', label: 'Cardiac Arrest Algorithm', condition: 'If no pulse' },
        ],
      },
      {
        id: 'stability',
        title: 'Hemodynamic compromise?',
        blocks: [
          {
            type: 'decision',
            question: 'Are there signs of **hemodynamic compromise?**',
            detail: 'Altered mental status, hypotension, ischemic chest pain, acute heart failure, decreased consciousness, other signs of shock',
            branches: [
              { label: 'Yes, patient is UNSTABLE', tone: 'critical', target: 'unstable' },
              { label: 'No, patient is STABLE', tone: 'stable', target: 'stable' },
            ],
          },
        ],
      },
      {
        id: 'unstable',
        title: 'Unstable',
        tone: 'critical',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              { text: '**Bring defibrillator to bedside.**' },
              { text: '**Administer atropine:**', sub: ['a. First dose: 0.5 mg bolus', 'b. Repeat every 3-5 min. Maximum 3 mg total'] },
            ],
          },
          { type: 'text', text: 'Monitor on telemetry. Check pulse and BP every 2 min until bradycardia resolves.' },
          { type: 'link', protocolId: 'cardiac-arrest', label: 'Cardiac Arrest Algorithm', condition: 'If no pulse' },
          { type: 'link', anchor: 'persists', label: 'If bradycardia persists' },
        ],
      },
      {
        id: 'persists',
        title: 'If bradycardia persists',
        tone: 'critical',
        blocks: [
          { type: 'text', text: '**Transcutaneous pacing** (if available)' },
          { type: 'text', text: '!!and/or!!' },
          {
            type: 'drug',
            name: 'Dopamine IV Infusion',
            regimen: ['Dose range: 2-20 mcg/kg/min', 'Titrate every 2 minutes to patient response. Taper slowly.'],
          },
          { type: 'text', text: '!!or!!' },
          {
            type: 'drug',
            name: 'Epinephrine IV Infusion',
            regimen: ['Dose range: 2-10 mcg/min (or 0.025 to 0.125 mcg/kg/min)', 'Titrate to patient response.'],
          },
          { type: 'callout', tone: 'critical', title: 'Refractory bradycardia', text: 'Obtain expert consultation' },
        ],
      },
      {
        id: 'stable',
        title: 'Stable',
        tone: 'stable',
        blocks: [
          { type: 'text', text: '**Continue to monitor and observe:**' },
          {
            type: 'list',
            items: [
              { text: 'Obtain 12-lead ECG to evaluate contributing rhythm' },
              { text: 'Monitor blood pressures at least every 30 min until confirmed stable' },
              { text: 'Identify and treat underlying causes' },
            ],
          },
        ],
      },
      {
        id: 'etiology',
        title: 'Evaluate and treat primary etiology',
        blocks: [
          {
            type: 'table',
            columns: ['Cause', 'Action'],
            rows: [
              { cells: ['Acute coronary syndrome', 'ACS algorithm, consider thrombolysis'] },
              {
                cells: [
                  'Iatrogenic (drug-induced): beta blockers, calcium channel blockers, digoxin, opioids, clonidine',
                  'Stop offending medications. If suspected BB/CCB overdose, give IV glucagon 3-10 mg IV bolus over 3-5 minutes. Repeat if no response, consider glucagon',
                ],
              },
              { cells: ['Hypoxia', 'Supplemental oxygen to maintain O₂ sat > 94%'] },
              { cells: ['Electrolyte abnormality', 'In particular, hypokalemia, hypermagnesemia'] },
              { cells: ['Thyroid dysfunction', 'Hypothyroidism'] },
              { cells: ['Neurologic', 'Evaluate for increased ICP, brainstem stroke'] },
            ],
          },
          { type: 'link', protocolId: 'acs', label: 'ACS algorithm', condition: 'Acute coronary syndrome' },
        ],
      },
    ],
  },

  'cardiac-arrest': {
    title: 'Adult Cardiac Arrest',
    category: 'emergency',
    version: 'v5.0',
    summary: 'CPR, rhythm checks every 2 min, shockable and non-shockable pathways, ROSC and reversible causes.',
    keywords: ['cardiac arrest', 'CPR', 'ACLS', 'VF', 'ventricular fibrillation', 'VT', 'PEA', 'asystole', 'shock', 'defibrillation', 'epinephrine', 'amiodarone', 'ROSC', "H's and T's"],
    attachments: [],
    timer: { enabled: true, cycleSeconds: 120 },
    sections: [
      {
        id: 'start',
        title: 'Start CPR',
        tone: 'critical',
        blocks: [
          { type: 'text', text: '!!Start timer!!' },
          { type: 'text', text: '**Start CPR**' },
          { type: 'text', text: 'Give oxygen, attach monitors and defibrillator, obtain IV access' },
          {
            type: 'decision',
            question: 'Rhythm shockable?',
            branches: [
              { label: 'YES: Shockable rhythm', tone: 'critical', target: 'shockable' },
              { label: 'NO: Non-shockable rhythm', tone: 'info', target: 'non-shockable' },
            ],
          },
        ],
      },
      {
        id: 'shockable',
        title: 'Shockable rhythm',
        tone: 'critical',
        blocks: [
          { type: 'text', text: '**Ventricular fibrillation (VF)** · **Pulseless VTach**' },
          {
            type: 'flow',
            nodes: [
              { id: 's1', kind: 'shock', title: 'Clear patient and **SHOCK at 120-200J**' },
              { id: 's2', kind: 'action', title: '**Resume CPR 2 min**', items: ['Rhythm and pulse check every 2 min or 5 CPR cycles'] },
              {
                id: 's2-check',
                kind: 'check',
                title: 'Rhythm shockable?',
                branches: [
                  { label: 'YES', tone: 'critical', target: 's3' },
                  { label: 'NO', tone: 'info', target: 'n1' },
                ],
              },
              { id: 's3', kind: 'shock', title: 'Clear patient and **SHOCK at 200J**' },
              {
                id: 's4',
                kind: 'action',
                title: '**Resume CPR 2 min**',
                items: ['**Give Epinephrine** every 3-5 min', 'Consider advanced airway, capnography'],
              },
              {
                id: 's4-check',
                kind: 'check',
                title: 'Rhythm shockable?',
                branches: [
                  { label: 'YES', tone: 'critical', target: 's5' },
                  { label: 'NO', tone: 'info', target: 'n1' },
                ],
              },
              { id: 's5', kind: 'shock', title: 'Clear patient and **SHOCK at 200J**' },
              {
                id: 's6',
                kind: 'action',
                title: '**Resume CPR 2 min**',
                items: ['**Give IV amiodarone 300 mg or IV liodcaine 1-1.5 mg/kg**', 'Treat reversible causes'],
                goto: 's2-check',
              },
            ],
          },
        ],
      },
      {
        id: 'non-shockable',
        title: 'Non-shockable rhythm',
        tone: 'info',
        blocks: [
          { type: 'text', text: '**Pulseless electrical activity (PEA)** · **Asystole**' },
          {
            type: 'flow',
            nodes: [
              { id: 'n0', kind: 'drug', title: '**Epinephrine ASAP**' },
              {
                id: 'n1',
                kind: 'action',
                title: '**CPR 2 min**',
                items: ['Rhythm and pulse check every 2 min or 5 CPR cycles', '**Epinephrine** every 3-5 min', 'Consider advanced airway, capnography'],
              },
              {
                id: 'n1-check',
                kind: 'check',
                title: 'Rhythm shockable?',
                branches: [
                  { label: 'YES', tone: 'critical', target: 's5' },
                  { label: 'NO', tone: 'info', target: 'n2' },
                ],
              },
              { id: 'n2', kind: 'action', title: '**Resume CPR 2 min**', items: ['Treat reversible causes'] },
              {
                id: 'n2-check',
                kind: 'check',
                title: 'Rhythm shockable?',
                branches: [
                  { label: 'YES', tone: 'critical', target: 's5' },
                  { label: 'NO', tone: 'info', target: 'n1' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'rosc',
        title: 'Return of Spontaneous Circulation (ROSC)',
        tone: 'urgent',
        blocks: [
          { type: 'text', text: '**If no signs of ROSC:**' },
          {
            type: 'list',
            items: [
              { text: 'Resume CPR' },
              { text: 'Treat reversible causes' },
              { text: 'Consider appropriateness of continued resuscitation' },
            ],
          },
          { type: 'text', text: '**If ROSC:**' },
          {
            type: 'list',
            items: [
              { text: 'Admit to ICU for post-resuscitation care' },
              { text: 'Treat reversible causes' },
              { text: 'Secure airway, optimize breathing and circulation' },
            ],
          },
        ],
      },
      {
        id: 'reversible-causes',
        title: "H's and T's of Reversible Causes",
        blocks: [
          {
            type: 'table',
            columns: ["H's", "T's"],
            rows: [
              { cells: ['**H**ypoxia', '**T**hrombosis (PE)'] },
              { cells: ['**H**ypovolemia', '**T**hrombosis (CAD)'] },
              { cells: ['**H**ypo/hyperkalemia', '**T**ension pneumothorax'] },
              { cells: ['**H**ypothermia', '**T**amponade (cardiac)'] },
              { cells: ['**H**ydrogen ion (acidosis)', '**T**oxins'] },
              { cells: ['**H**ypoglycemia', ''] },
            ],
          },
        ],
      },
    ],
  },

  'cardiogenic-shock': {
    title: 'Adults with Cardiogenic Shock',
    category: 'emergency',
    version: 'v3.0',
    summary: 'Immediate management, "dry and cold" vs "wet and cold", vasopressors/inotropes by SBP, and primary etiology.',
    keywords: ['cardiogenic shock', 'shock', 'hypotension', 'norepinephrine', 'dobutamine', 'vasopressor', 'inotrope', 'MAP', 'PCWP', 'heart failure'],
    attachments: [],
    timer: { enabled: false },
    sections: [
      {
        id: 'trigger',
        title: 'Suspected cardiogenic shock',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'Known/suspected ischemia or heart failure' },
              { text: 'Hypotension and tachycardia' },
              { text: 'Hypoperfusion (cool extremities, decreased UOP, altered mental status)' },
            ],
          },
        ],
      },
      {
        id: 'immediate',
        title: 'Immediate management',
        tone: 'urgent',
        blocks: [
          {
            type: 'list',
            items: [
              { text: '**ABC:** secure airway; supp O₂ saturation < 90% (< 88% in COPD); cardiac monitors, vitals' },
              { text: '**Focused H&P:** pertinent cardiac history/risk factors, chest trauma, chest pain, presence of new cardiac murmur, S3/S4; elevated JVP' },
              { text: '**STAT ECG**', stat: true },
              { text: '**STAT transthoracic echocardiogram (TTE)**', stat: true },
              { text: '**Labs:** troponins, BUE/Cr, Mg, LFTs, FBC, lactic acid' },
              { text: '**Chest x-ray**' },
              { text: '**Consult/notify Cardiology.** Consider invasive hemodynamic monitoring if available.' },
            ],
          },
          {
            type: 'callout',
            tone: 'critical',
            text: 'Reassess mental status, work of breathing, perfusion, and vital signs every 15 minutes. Monitor UOP daily.',
          },
        ],
      },
      {
        id: 'filling-pressures',
        title: 'LV filling pressures',
        blocks: [
          {
            type: 'decision',
            question: 'Suspected/confirmed LV filling pressures',
            branches: [
              { label: 'Low: "dry and cold"', tone: 'info', target: 'dry-cold' },
              { label: 'Elevated: "wet and cold"', tone: 'critical', target: 'wet-cold' },
            ],
          },
        ],
      },
      {
        id: 'dry-cold',
        title: 'Low LV filling pressures: "dry and cold"',
        tone: 'info',
        blocks: [
          { type: 'text', text: '(PCWP < 15; absence of congestive symptoms; RV infarction, LVOT obstruction, pericardial tamponade)' },
          { type: 'list', items: [{ text: '**100-200ml R/L bolus**' }, { text: 'Reassess after each bolus' }] },
          { type: 'link', anchor: 'vasopressors', label: 'Initiate vasopressors/intropes', condition: '!!MAP < 65!!' },
          { type: 'link', anchor: 'etiology', label: 'Evaluate and treat primary etiology' },
        ],
      },
      {
        id: 'wet-cold',
        title: 'Elevated LV filling pressures: "wet and cold"',
        tone: 'critical',
        blocks: [
          { type: 'text', text: '(PCWP > 18; pulmonary edema, elevated JVP)' },
          { type: 'link', anchor: 'vasopressors', label: 'Initiate vasopressors/intropes' },
        ],
      },
      {
        id: 'vasopressors',
        title: 'Initiate vasopressors/intropes',
        tone: 'critical',
        blocks: [
          { type: 'text', text: '**Goal MAP ≥ 65**', tone: 'stable' },
          { type: 'text', text: '**If SBP !!< 80!!:**' },
          {
            type: 'list',
            ordered: true,
            items: [{ text: 'Norepinephrine, **then**' }, { text: 'add dobutamine if continued hypotension' }],
          },
          { type: 'text', text: '**If SBP !!≥ 80!!:**' },
          {
            type: 'list',
            ordered: true,
            items: [{ text: 'Dobutamine, **then**' }, { text: 'add norepinephrine if continued hypotension' }],
          },
          { type: 'drug', name: 'Norepinephrine', regimen: ['Initial: 0.01-0.3 mcg/kg/min', 'Max dose: 3.3 mcg/kg/min'] },
          { type: 'drug', name: 'Dobutamine', regimen: ['Initial: 2-5 mcg/kg/min', 'Max dose: 20 mcg/kg/min'] },
          { type: 'link', anchor: 'etiology', label: 'Evaluate and treat primary etiology' },
        ],
      },
      {
        id: 'etiology',
        title: 'Evaluate and treat primary etiology',
        blocks: [
          {
            type: 'table',
            columns: ['Cause', 'Action'],
            rows: [
              { cells: ['Acute coronary syndrome', 'ACS algorithm, consider thrombolysis'] },
              { cells: ['Acute valvular/structural heart disease', 'Consider referral for surgical consult'] },
              { cells: ['Atrial arrhythmia with rapid ventricular rate', 'IV or PO metoprolol (closely monitor HR and BP)'] },
              { cells: ['Acute decompensated heart failure', 'IV diuresis (closely monitor BP and UOP)'] },
            ],
          },
          { type: 'link', protocolId: 'acs', label: 'ACS algorithm', condition: 'Acute coronary syndrome' },
        ],
      },
    ],
  },

  'surgery-guidelines': SURGERY_GUIDELINES,

  ...ANAESTHESIA_PROTOCOLS,

  ...PAEDIATRICS_PROTOCOLS,
  ...INTERNAL_MEDICINE_PROTOCOLS,
  ...DENTAL_PROTOCOLS,
  ...OBS_GYN_PROTOCOLS,
}
