import type { Section } from '../../types/protocol'
import type { Place } from '../helpers'
import { topic } from './topic'

const NEURO: Place = { chapter: '1. Neurology' }
const CARDIO: Place = { chapter: '2. Cardiovascular medicine' }
const RESP: Place = { chapter: '3. Respiratory medicine' }

export const CHAPTERS_1_TO_3: Section[] = [
  topic(NEURO, 'im-stroke', '1', 'Acute stroke: ischemic and hemorrhagic', {
    tone: 'critical',
    recognition:
      'Recognize sudden focal deficit, speech/vision loss, ataxia or altered consciousness. Record exact last-known-well time, baseline function, anticoagulants, recent surgery/bleeding, seizure at onset and glucose. Use NIHSS if trained; a low score does not exclude disabling/posterior stroke.',
    flowchart: [
      'Suspected stroke',
      'Record last-known-well + ABCDE + bedside glucose',
      'Activate stroke pathway and arrange urgent brain CT (± CTA if available)',
      '**ASSESS / DECIDE:** CT shows haemorrhage? **YES:** manage as haemorrhagic stroke, reverse anticoagulation where indicated and urgently transfer; **NO:** assess eligibility for reperfusion with stroke-capable team',
      'If no reperfusion, give antiplatelet only after haemorrhage excluded and check swallowing',
      'Monitor neurological status, BP, glucose, temperature and complications.',
    ],
    treatment: [
      '**Immediate:** ABCDE, capillary glucose, SpO₂, temperature, ECG and IV access. Keep nil by mouth until swallow screen. Urgent non-contrast CT brain is required to distinguish haemorrhage from infarction. !!If CT is unavailable or delayed, call referral centre immediately; do not assume stroke type or give aspirin empirically.!!',
      '**Ischemic stroke:** if CT excludes haemorrhage, consider aspirin 160–300 mg orally/NG once, then 75–100 mg daily, unless thrombolysis was given or another contraindication exists. After IV thrombolysis, withhold antiplatelet/anticoagulant for 24 h and obtain follow-up imaging before starting. Evaluate reperfusion eligibility urgently: current AHA/ASA guidance supports alteplase 0.9 mg/kg (max 90 mg; 10% bolus then remainder over 60 min) or tenecteplase 0.25 mg/kg (max 25 mg) in eligible patients within 4.5 h, in a suitably equipped and protocolized service. Do not initiate thrombolysis without imaging, eligibility checks, trained staff and monitoring. Consider thrombectomy referral for suspected large-vessel occlusion; selected patients may benefit beyond 6 h where advanced imaging and specialist service exist.',
      '**BP:** if thrombolysis is planned, reduce to <185/110 mmHg before treatment and maintain <180/105 for 24 h. Without reperfusion, generally avoid acute BP reduction unless >220/120 mmHg or another emergency (e.g. aortic dissection, ACS, pulmonary oedema, encephalopathy); if treatment needed, lower cautiously, about 15% in first 24 h. Follow local stroke-team advice.',
      '**Haemorrhagic stroke:** stop/reverse anticoagulants according to agent and availability; urgent transfer for neurosurgical/neurocritical assessment. Control BP smoothly using an IV agent per local protocol; avoid hypotension. !!Do not give antiplatelets or thrombolytics.!! Manage raised ICP, seizures and hydrocephalus with specialist input; routine corticosteroids are not indicated.',
      'Monitor neurological observations, BP, glucose, temperature, oxygenation, swallowing, fluid balance and aspiration risk. Treat fever and hypoglycaemia; avoid intensive glucose targets that increase hypoglycaemia. Start VTE prevention and rehabilitation per stroke protocol after bleeding risk assessment.',
    ],
    references: [
      'Ghana MoH STG 2017; AHA/ASA 2026 Guideline for Early Management of Acute Ischaemic Stroke; AHA/ASA spontaneous intracerebral haemorrhage guideline (2022; check for updates); WHO PEN. The 2026 US guideline is a current reference, but the receiving stroke team and locally approved imaging/reperfusion pathway determine eligibility. After EVT, do not pursue intensive SBP lowering to <140 mmHg solely to improve outcome.',
    ],
  }),
  topic(NEURO, 'im-status-epilepticus', '2', 'Status epilepticus', {
    tone: 'critical',
    recognition:
      'Convulsive status: seizure lasting ≥5 minutes or recurrent seizures without recovery. Call for help; time the seizure. Protect from injury, lateral position when feasible, suction and oxygen if hypoxaemic. Check glucose immediately.',
    flowchart: [
      'Convulsive seizure ≥5 min or repeated seizures without recovery',
      'Call for help, protect airway, oxygen if hypoxaemic, check glucose and obtain IV/IO access',
      'Treat hypoglycaemia immediately if present',
      'Give an appropriate benzodiazepine; reassess after 5 min and repeat once if needed',
      'Persistent seizure: load a second-line antiseizure medicine per local protocol',
      'Ongoing seizure, airway compromise or recurrent seizures: urgent senior/anaesthesia/ICU consultation and transfer; investigate and treat the cause.',
    ],
    treatment: [
      '**At 5 minutes: give a benzodiazepine.** If IV access: lorazepam 0.1 mg/kg IV (maximum 4 mg per dose; may repeat once after 3–5 min) where available; alternative diazepam 0.15–0.2 mg/kg IV (maximum 10 mg per dose; may repeat once). If no IV access, use midazolam 10 mg IM for adults >40 kg or 5 mg for 13–40 kg, following local formulation/protocol. Monitor airway and respiration; prepare bag-mask ventilation.',
      '**If ongoing after adequate benzodiazepine:** load one second-line agent promptly. Levetiracetam 60 mg/kg IV (maximum 4.5 g) is often well tolerated; alternatives include fosphenytoin 20 mg PE/kg (max 1.5 g PE) or valproate 40 mg/kg IV (max 3 g) where appropriate and available. Avoid valproate in significant liver disease, suspected mitochondrial disease and pregnancy where alternatives exist. Phenytoin requires ECG/BP monitoring and careful infusion; avoid rapid infusion.',
      '**Persistent seizures after benzodiazepine plus a second-line agent = refractory status:** urgent ICU/anaesthesia/neurology transfer for airway management, continuous EEG if available and anaesthetic infusion. !!Do not keep repeating benzodiazepines without airway support.!!',
      'Investigate cause without delaying seizure control: glucose, electrolytes including sodium/calcium/magnesium, renal/liver function, FBC, infection workup, toxicology/medication history, pregnancy where relevant, and CT brain if focal deficit, trauma, persistent coma or suspected structural cause. Treat underlying cause (e.g. hypoglycaemia, meningitis, eclampsia pathway if relevant).',
    ],
    references: [
      'Ghana MoH STG 2017; American Epilepsy Society guideline for convulsive status epilepticus (2016); Neurocritical Care Society status epilepticus guidance; NICE NG217 (epilepsies).',
    ],
  }),
  topic(NEURO, 'im-meningitis', '3', 'Meningitis and encephalitis', {
    tone: 'critical',
    recognition:
      'Suspect with fever, headache, neck stiffness, photophobia, altered mental status, seizure or focal deficit. Start ABCDE, sepsis assessment and IV access. Obtain blood cultures and blood glucose; !!do not delay antibiotics for CT or lumbar puncture.!!',
    flowchart: [
      'Fever + headache/neck stiffness/altered mental state or focal seizure',
      'ABCDE, glucose, cultures if this will not delay treatment',
      'Start empiric antimicrobials promptly when bacterial meningitis is suspected; add antiviral treatment if encephalitis is suspected',
      'Assess for contraindications to lumbar puncture; do not delay treatment for CT or LP',
      'LP when safe; send CSF and blood tests',
      'Monitor closely and urgently transfer if reduced consciousness, seizures, shock, focal deficit or need for advanced support.',
    ],
    treatment: [
      '**Adult suspected acute bacterial meningitis:** give empiric IV antibiotics immediately according to local resistance and formulary. A commonly used adult regimen is ceftriaxone 2 g IV every 12 h; add ampicillin 2 g IV every 4 h if Listeria risk (older age, pregnancy, immunocompromise) and consider vancomycin where pneumococcal resistance warrants it and it is available. Adapt to Ghana STG, allergy history, renal function and local microbiology; de-escalate to results.',
      'Give dexamethasone 10 mg IV every 6 h immediately before or with the first antibiotic dose when pneumococcal meningitis is suspected and per local protocol; continue only if indicated by organism/clinical guidance. If delayed, do not postpone antibiotics to give dexamethasone.',
      'LP when safe and not delaying treatment. Defer LP and consider CT first for focal neurological signs, new seizure, markedly reduced consciousness, papilloedema, known CNS lesion or severe immunocompromise. Stabilize shock, airway compromise, coagulopathy and cardiorespiratory instability before LP. Send CSF cell count/differential, protein, glucose with paired serum glucose, Gram stain/culture and targeted PCR/antigen tests if available.',
      '**Suspected HSV encephalitis:** start aciclovir 10 mg/kg IV every 8 h (adjust for renal function; ensure hydration and monitor creatinine) while investigating; do not wait for PCR if suspicion is significant. Treat seizures, manage fluids carefully and seek specialist advice.',
      '**TB meningitis:** urgent specialist/public-health input; start multidrug anti-TB therapy and adjunctive corticosteroid per current national TB protocol; assess HIV and drug resistance.',
    ],
    references: [
      'Ghana MoH STG 2017; WHO meningitis diagnosis, treatment and care guidance (2025); WHO consolidated TB guidelines; NICE NG240 (meningitis, 2024); IDSA encephalitis guideline (2008, verify for updates).',
    ],
  }),
  topic(CARDIO, 'im-heart-failure', '4', 'Heart failure', {
    recognition:
      'Assess congestion (orthopnoea, JVP, oedema, crackles), perfusion, BP, ECG, CXR and precipitant. Consider ACS, arrhythmia, infection, anaemia, renal failure, uncontrolled hypertension, valvular disease and medication non-adherence. Obtain FBC, electrolytes/creatinine, LFT, glucose, troponin if ACS, BNP/NT-proBNP if available and echocardiography when possible.',
    flowchart: [
      'Dyspnoea/oedema or suspected acute HF',
      'ABCDE, ECG, SpO₂, BP, CXR and labs as available',
      '**ASSESS / DECIDE:** hypoxaemia? give oxygen; respiratory distress/pulmonary oedema? sit upright and consider ventilatory support',
      'Assess congestion and perfusion',
      'Congested: diuretic-based decongestion with renal/electrolyte monitoring; shock/hypoperfusion: urgent senior review and transfer',
      'Identify trigger (ACS, arrhythmia, infection, PE, non-adherence)',
      'Once stable, optimize guideline-directed chronic therapy and arrange follow-up.',
    ],
    treatment: [
      '**Acute pulmonary oedema:** sit upright, monitor ECG/BP/SpO₂, oxygen only if hypoxaemic, and consider CPAP/NIV if available for severe respiratory distress. IV furosemide 20–40 mg in a diuretic-naïve adult; if already taking a loop diuretic, initial IV dose is usually at least equivalent to the usual total daily oral dose, then reassess urine output, symptoms, BP, renal function and electrolytes. Nitrates may help if markedly hypertensive and no hypotension, severe aortic stenosis or recent PDE-5 inhibitor use; follow local protocol.',
      'Do not routinely give IV fluids to a congested patient. Treat precipitating cause. In cardiogenic shock, avoid unmonitored diuresis/vasodilators and escalate urgently.',
      '**Stable HFrEF:** introduce foundational therapy when haemodynamically stable: ACE inhibitor/ARB or ARNI (ARNI requires washout of ≥36 h after ACE inhibitor), evidence-based beta-blocker, mineralocorticoid receptor antagonist and SGLT2 inhibitor, as tolerated and available. Check BP, renal function and potassium before and after initiation/titration. Avoid initiating/up-titrating beta-blocker during shock or marked decompensation; avoid MRA with significant hyperkalaemia or severe renal impairment.',
      'Discharge only when clinically stable, congestion controlled, oral plan established, education completed and early follow-up arranged. Provide daily weight/symptom advice, salt moderation, medication reconciliation and clear return precautions.',
    ],
    references: [
      'Ghana MoH STG 2017; 2021 ESC Guidelines for acute and chronic heart failure; 2022 AHA/ACC/HFSA Heart Failure Guideline; WHO PEN.',
    ],
  }),
  topic(CARDIO, 'im-acs', '5', 'Acute myocardial infarction / acute coronary syndrome', {
    tone: 'critical',
    recognition:
      'Obtain 12-lead ECG within 10 min; repeat if initial ECG nondiagnostic and symptoms persist. Check troponin if available, but do not delay reperfusion for a diagnostic STEMI. Assess haemodynamic status, oxygen saturation, bleeding risk and contraindications.',
    flowchart: [
      'Suspected ACS',
      'ECG within 10 min, repeat if needed, troponin if available, IV access and monitoring',
      '**ASSESS / DECIDE:** STEMI or ongoing high-risk ischaemia? activate urgent transfer/reperfusion pathway',
      'Give aspirin unless contraindicated; add antithrombotic/anti-ischaemic treatment according to diagnosis, bleeding risk and local protocol',
      'Assess oxygenation (oxygen only if hypoxaemic), BP and complications',
      'Avoid nitrates if hypotension, suspected right-ventricular infarct or recent PDE-5 inhibitor',
      'Monitor rhythm and arrange definitive cardiology care.',
    ],
    treatment: [
      'Give aspirin 150–300 mg chewed once (unless allergy/active major bleeding), then 75–100 mg daily. Add a P2Y12 inhibitor and anticoagulation according to STEMI/NSTEMI pathway, reperfusion plan, bleeding risk, renal function and local stock. Use high-intensity statin unless contraindicated. Oxygen only if hypoxaemia (typically SpO₂ <90%), respiratory distress or shock.',
      '**STEMI:** immediate contact with PCI-capable centre. Primary PCI is preferred when timely available. If PCI cannot be delivered within guideline-recommended time and symptom onset is usually within 12 h, assess fibrinolysis eligibility using an approved local protocol and checklist; !!never fibrinolyse without excluding contraindications and confirming ECG diagnosis.!! Transfer after fibrinolysis for rescue PCI if failed reperfusion or for routine early angiography according to network protocol.',
      '**NSTEMI/unstable angina:** risk-stratify, serial ECG/troponin, antithrombotic treatment and urgent invasive referral for shock, recurrent/refractory pain, life-threatening arrhythmia or acute HF. !!Avoid fibrinolysis in NSTEMI.!!',
      'Nitrates relieve pain if BP adequate but avoid in hypotension, suspected right ventricular infarction, severe aortic stenosis or recent PDE-5 inhibitor use. Opioids only for severe persistent pain with monitoring; avoid routine oxygen, routine NSAIDs and unnecessary IM injections.',
    ],
    references: [
      'Ghana MoH STG 2017; 2023 ESC Guidelines for acute coronary syndromes; 2025 ACC/AHA Guideline for Acute Coronary Syndromes; WHO PEN.',
    ],
  }),
  topic(RESP, 'im-asthma', '6', 'Acute asthma exacerbation / status asthmaticus', {
    tone: 'urgent',
    recognition:
      'Assess severity: inability to speak sentences, agitation/drowsiness, exhaustion, silent chest, cyanosis, low SpO₂, poor peak flow or normal/rising CO₂ in a distressed patient are danger signs. Call senior help and arrange transfer early for life-threatening features.',
    flowchart: [
      'Acute wheeze/breathlessness',
      'Assess speech, RR, SpO₂, pulse, peak flow if feasible and red flags',
      '**ASSESS / DECIDE:** life-threatening features, exhaustion, silent chest, cyanosis, confusion or poor response? call senior help and arrange urgent transfer',
      'Give repeated inhaled/nebulized short-acting bronchodilator, add ipratropium for severe attacks, give systemic corticosteroid early and titrated oxygen if hypoxaemic',
      'Reassess after initial treatment',
      'Poor response/deterioration: escalate urgently; consider magnesium sulfate for severe refractory attack per protocol',
      'Discharge only when clinically stable with inhaler technique, controller plan and safety-net.',
    ],
    treatment: [
      'Give inhaled salbutamol 4–10 puffs via spacer, one puff at a time, repeated every 20 min for the first hour; or nebulized salbutamol 2.5–5 mg every 20 min for 1 h. Add ipratropium 0.5 mg nebulized for severe attacks, repeated per protocol. Oxygen titrated to target SpO₂ 93–95% in adults.',
      'Give prednisolone 40–50 mg orally daily for 5–7 days, or IV hydrocortisone if unable to take oral medication. For severe/life-threatening exacerbation, consider IV magnesium sulfate 2 g over 20 min once, with monitoring. !!Do not use sedatives.!! Antibiotics are not routine unless bacterial infection is suspected.',
      'Reassess symptoms, speech, respiratory rate, pulse, SpO₂ and peak flow after each treatment. Obtain blood gas if severe, tiring, deteriorating or poor response; a normal/rising PaCO₂ can indicate impending failure. Escalate to high-dependency/ICU for exhaustion, altered consciousness, silent chest, worsening hypoxaemia, rising CO₂ or poor response.',
      'Before discharge: confirm improvement and inhaler technique, prescribe an inhaled corticosteroid-containing controller (not SABA-only treatment), provide an action plan, address triggers and arrange review within 2–7 days.',
    ],
    references: [
      'Ghana MoH STG 2017; GINA 2025/2026 Global Strategy for Asthma Management and Prevention (verify latest release); BTS/SIGN acute asthma guidance.',
    ],
  }),
]
