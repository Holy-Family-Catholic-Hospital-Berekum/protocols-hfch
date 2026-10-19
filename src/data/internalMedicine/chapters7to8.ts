import type { Section } from '../../types/protocol'
import type { Place } from '../helpers'
import { topic } from './topic'

const NEPH: Place = { chapter: '7. Nephrology' }
const RHEUM: Place = { chapter: '8. Rheumatology' }

export const CHAPTERS_7_TO_8: Section[] = [
  topic(NEPH, 'im-aki', undefined, 'Acute kidney injury', {
    recognition:
      'AKI: creatinine rise ≥26.5 µmol/L within 48 h, ≥1.5 times baseline within 7 days, or urine output <0.5 mL/kg/h for 6 h. Determine baseline and stage if possible. Assess volume status, sepsis, nephrotoxins (NSAIDs, contrast, aminoglycosides, herbal products), obstruction, glomerulonephritis and rhabdomyolysis.',
    flowchart: [
      'Acute creatinine rise or oliguria',
      'ABCDE, volume status, medication review and urine output',
      'Check U&E/creatinine, urinalysis and bladder obstruction; ECG urgently if hyperkalaemia suspected',
      'Correct hypovolaemia cautiously if present; stop nephrotoxins and adjust doses',
      '**ASSESS / DECIDE:** obstruction? relieve and refer as appropriate; intrinsic renal disease? investigate and discuss early',
      'Urgent dialysis-capable referral for refractory hyperkalaemia/acidosis, pulmonary oedema, uraemic complications or persistent severe AKI.',
    ],
    treatment: [
      '**Initial tests:** U&E/creatinine, urinalysis and microscopy, FBC, glucose, ECG if hyperkalaemia, bladder scan/catheter if indicated; ultrasound urgently if obstruction suspected or cause unclear. Check medication list and dose-adjust/withhold nephrotoxins as appropriate.',
      '**Treat cause:** restore perfusion with reassessed isotonic crystalloid if hypovolaemic; antibiotics/source control for sepsis; relieve obstruction; treat specific nephritic or toxic causes with specialist advice. Avoid fluid overload and avoid routine diuretics to treat AKI except for volume overload.',
      '**Urgent nephrology/dialysis referral** for refractory hyperkalaemia, severe metabolic acidosis, pulmonary oedema/volume overload, uraemic complications (encephalopathy, pericarditis), certain poisonings, or rapidly progressive renal failure. Monitor urine output, weight, fluid balance, BP, potassium, bicarbonate and creatinine at frequency matching severity.',
    ],
    references: [
      'KDIGO Clinical Practice Guideline for Acute Kidney Injury (2012; check for updated guidance); NICE NG148 Acute Kidney Injury; Ghana MoH STG 2017.',
    ],
  }),
  topic(NEPH, 'im-ckd', undefined, 'Chronic kidney disease', {
    recognition:
      'CKD is kidney structural/function abnormality for ≥3 months, including eGFR <60 mL/min/1.73 m² or markers of kidney damage (e.g. albuminuria). Confirm chronicity; do not label a single abnormal creatinine as CKD without context. Measure eGFR and urine albumin-creatinine ratio (ACR) and classify by cause, GFR and albuminuria (CGA).',
    flowchart: [
      'Possible CKD',
      'Repeat eGFR/creatinine and urine albumin/protein; establish chronicity ≥3 months or other evidence',
      'Stage by eGFR + albuminuria; assess BP, diabetes, urinalysis, medication and cardiovascular risk',
      'Treat cause, control BP/diabetes, avoid nephrotoxins and dose-adjust medicines',
      'Monitor eGFR, potassium, bicarbonate, haemoglobin and albuminuria',
      'Refer early for rapid decline, severe albuminuria, resistant hypertension, suspected systemic disease, complications or advanced CKD; plan kidney replacement care when indicated.',
    ],
    treatment: [
      'Assess BP, diabetes, cardiovascular risk, urinalysis, U&E, bicarbonate, FBC, calcium/phosphate where available, medication/herbal use and obstruction. Ultrasound when structural disease/obstruction suspected. Screen for reversible causes and refer early for rapid eGFR decline, significant albuminuria/haematuria, resistant hypertension, suspected systemic/glomerular disease, hereditary disease or eGFR <30.',
      '**Risk reduction:** BP control individualized to tolerance; ACEi/ARB for albuminuric CKD unless contraindicated, monitor creatinine and potassium after initiation/up-titration. SGLT2 inhibitor may be indicated for eligible CKD/diabetes/heart failure patients subject to eGFR thresholds, availability and local protocol. Avoid dual ACEi+ARB. Dose-adjust drugs, avoid NSAIDs, review contrast risk, counsel on smoking, diet, exercise and vaccination.',
      'Monitor eGFR/ACR, BP, potassium, bicarbonate, haemoglobin, iron status and CKD-mineral bone parameters according to stage. Plan kidney replacement therapy access and education early in advanced CKD; dialysis initiation is based on symptoms/complications and overall clinical context, not eGFR alone.',
    ],
    references: ['KDIGO 2024 Clinical Practice Guideline for Evaluation and Management of CKD; Ghana MoH STG 2017; NICE NG203 CKD.'],
  }),
  topic(NEPH, 'im-ckd-complications', undefined, 'CKD complications: hyperkalaemia, severe hypertension, anaemia, acidosis', {
    tone: 'urgent',
    recognition:
      '**Hyperkalaemia:** repeat a non-haemolysed sample if safe, obtain ECG and cardiac monitoring for significant elevation. ECG changes or severe K (commonly ≥6.5 mmol/L) require emergency treatment. Give IV calcium gluconate 10% 10 mL over 2–5 min for ECG changes, repeat if persistent per protocol; calcium stabilizes myocardium but does not lower K. Shift K with regular insulin 10 units IV plus glucose (e.g. 25 g), with glucose checks for at least 4–6 h; nebulized salbutamol 10–20 mg may be adjunct. Bicarbonate only if significant metabolic acidosis. Remove K with dialysis or appropriate binders/diuresis where indicated. Recheck K within 1–2 h and monitor rebound.',
    flowchart: [
      'CKD patient with abnormal potassium/BP/Hb/bicarbonate',
      'Assess symptoms, ECG and repeat/confirm labs without delaying emergency care',
      'Hyperkalaemia with ECG changes or severe level: cardiac membrane stabilization and potassium-shifting/removal measures per emergency protocol; urgent transfer if refractory',
      'Severe hypertension with acute organ injury: manage as hypertensive emergency',
      'Anaemia: evaluate iron/B12/folate/bleeding and renal cause before treatment',
      'Metabolic acidosis: assess severity and treat cause/bicarbonate when indicated',
      'Monitor response and involve nephrology/dialysis service when severe or refractory.',
    ],
    treatment: [
      '**Severe hypertension:** assess end-organ damage (neurological deficit/encephalopathy, ACS, pulmonary oedema, AKI, retinal changes, aortic syndrome). Hypertensive emergency requires monitored IV treatment and controlled reduction tailored to syndrome; avoid abrupt normalization. If no acute organ damage, use oral therapy and gradual reduction rather than rapid IV lowering.',
      '**Anaemia:** evaluate CBC indices, reticulocytes if available, ferritin/TSAT, bleeding, B12/folate and inflammation. Correct iron deficiency and other causes before considering ESA. ESA initiation/targets and iron dosing should follow KDIGO/local nephrology protocol; avoid normalizing Hb with ESA because of thrombotic/stroke risk. Transfusion depends on symptoms, instability and transplant considerations.',
      '**Metabolic acidosis:** confirm bicarbonate and consider blood gas. Treat cause, review diet/medicines and consider oral sodium bicarbonate for persistent clinically significant acidosis, balancing sodium load, BP and fluid status. Severe/refractory acidosis is a dialysis referral trigger.',
    ],
    references: [
      'KDIGO 2024 CKD guideline; KDIGO anaemia in CKD guideline (2026 update status should be checked); UK Kidney Association Hyperkalaemia guideline; AHA/ACC hypertension guidance; Ghana MoH STG 2017.',
    ],
  }),
  topic(NEPH, 'im-haemodialysis', undefined, 'Hemodialysis complications: disequilibrium and intradialytic hypotension', {
    tone: 'urgent',
    recognition:
      '**Intradialytic hypotension:** symptoms/significant BP fall during dialysis. Stop/reduce ultrafiltration, place supine/Trendelenburg if tolerated, assess airway and symptoms, give 100–200 mL isotonic saline and reassess; repeat cautiously if needed. Check glucose, bleeding, sepsis, arrhythmia, ACS and dialyzer reaction. Inform dialysis clinician; revise dry weight, ultrafiltration rate, antihypertensives and dialysate prescription before next session.',
    flowchart: [
      'Symptoms during/after dialysis',
      'Stop or reduce ultrafiltration and assess ABCDE, BP, glucose and rhythm',
      'Hypotension: lay flat, assess volume/bleeding/sepsis/arrhythmia and give cautious fluid bolus if appropriate; reassess',
      'Headache, nausea, confusion or seizure suggesting disequilibrium: stop dialysis, urgent senior/nephrology review and assess for other causes',
      'Seizure, persistent hypotension, chest pain or reduced consciousness: emergency response and transfer',
      'Document event and adjust next dialysis prescription/ultrafiltration with renal team.',
    ],
    treatment: [
      '**Dialysis disequilibrium syndrome:** headache, nausea, restlessness, confusion, seizure or reduced consciousness during/after dialysis, especially first session or very high urea. Stop or slow dialysis and urgently assess other causes (stroke, hypoglycaemia, electrolyte shift). Severe symptoms require emergency transfer/critical-care and nephrologist input; hypertonic saline or mannitol may be considered only by experienced teams. Prevention: shorter, lower-efficiency initial dialysis and gradual urea reduction in high-risk patients.',
      'Other emergencies include air embolism, haemolysis, access bleeding, anaphylactoid reaction, arrhythmia and chest pain. Stop dialysis and follow the unit\'s emergency procedure; !!do not return blood to the patient if air embolism or haemolysis is suspected.!!',
    ],
    references: ['KDIGO AKI/CKD guidance; National Kidney Foundation KDOQI Hemodialysis Adequacy guidance; renal-unit emergency protocols.'],
  }),
  topic(RHEUM, 'im-sle', undefined, 'SLE', {
    recognition:
      'Suspect with multisystem disease: photosensitive rash, oral ulcers, inflammatory arthritis, serositis, cytopenias, renal abnormalities, seizures/psychosis or thrombosis. ANA is a sensitive screening test but not diagnostic alone. Evaluate CBC, creatinine/eGFR, urinalysis, urine protein quantification, complements C3/C4, anti-dsDNA and antiphospholipid antibodies where indicated.',
    flowchart: [
      'Possible SLE flare',
      'Assess fever/infection, rash/joints, chest pain, neurological symptoms, BP and urine',
      'Obtain CBC, creatinine, urinalysis/protein quantification, complements and anti-dsDNA as available',
      '**ASSESS / DECIDE:** organ-threatening disease (nephritis, CNS, myocarditis, severe cytopenia) or possible sepsis? urgent admission/specialist input; exclude infection before escalating immunosuppression',
      'Mild disease: symptom control and hydroxychloroquine consideration with eye monitoring',
      'Renal abnormalities: quantify protein, assess sediment and refer for nephrology/biopsy consideration',
      'Monitor activity, damage and medication toxicity.',
    ],
    treatment: [
      'Assess severity and organ involvement. Urine protein, active sediment, rising creatinine or hypertension may indicate lupus nephritis; arrange urgent nephrology/rheumatology referral and kidney biopsy when feasible before immunosuppression, unless immediate organ-threatening treatment is required.',
      'Hydroxychloroquine is recommended for most patients unless contraindicated; dose usually ≤5 mg/kg/day actual body weight to reduce retinal toxicity risk, with baseline and periodic retinal screening. Use sun protection, cardiovascular risk reduction, vaccination and pregnancy planning. Glucocorticoids should be minimized and tailored to severity. Immunosuppressants (e.g. mycophenolate, cyclophosphamide, azathioprine, belimumab) require specialist-led protocols, infection screening and monitoring.',
      'Urgent referral for nephritis, CNS disease, severe cytopenias/haemolysis, myocarditis, pulmonary haemorrhage, thrombosis or pregnancy complications. Screen for infection before escalating immunosuppression.',
    ],
    references: [
      'EULAR recommendations for SLE management (2023 update); KDIGO 2024 Lupus Nephritis guideline; ACR guideline (current version to verify); Ghana MoH STG 2017.',
    ],
  }),
  topic(RHEUM, 'im-rheumatoid-arthritis', undefined, 'Rheumatoid arthritis', {
    recognition:
      'Suspect persistent symmetric inflammatory polyarthritis, especially MCP/PIP/wrist, morning stiffness and functional impairment. Order ESR/CRP, RF and anti-CCP; negative serology does not exclude RA. X-ray hands/feet if available. Refer early—do not wait for erosions.',
    flowchart: [
      'Persistent inflammatory polyarthritis',
      'History/exam for synovitis and red flags; consider RF/anti-CCP, ESR/CRP and baseline imaging/labs',
      '**ASSESS / DECIDE:** suspected septic joint or acute hot monoarthritis? urgent aspiration/referral before steroids',
      'Likely RA: early rheumatology referral and assess extra-articular disease',
      'Start/optimize DMARD only with appropriate screening, baseline monitoring and specialist/local protocol',
      'Short-term symptom control while avoiding prolonged glucocorticoids when possible',
      'Monitor disease activity, CBC/LFT/renal function and infection risk.',
    ],
    treatment: [
      'Use short-term analgesia/NSAID only after assessing renal, GI, BP and cardiovascular risks; NSAIDs do not prevent joint damage. Glucocorticoids may be used briefly as bridging therapy under a treatment plan, with infection and metabolic risk considered.',
      'Start a conventional DMARD early under rheumatology/experienced clinician protocol. Methotrexate is commonly first-line (!!weekly, never daily!!) with folic acid; baseline CBC, LFT, renal function, hepatitis screening and pregnancy assessment are required. Avoid methotrexate in pregnancy, significant liver disease, severe renal impairment or relevant cytopenias. Counsel on infection, alcohol and toxicity; monitor CBC/LFT/renal function. If methotrexate unavailable/contraindicated, specialist may choose sulfasalazine, hydroxychloroquine or leflunomide.',
      'Refer urgently for suspected septic arthritis, rapidly progressive disease, cervical myelopathy, vasculitis, interstitial lung disease or major extra-articular involvement. Review vaccination and osteoporosis/cardiovascular risk.',
    ],
    references: [
      'EULAR recommendations for management of RA with synthetic/biologic DMARDs (2022 update); ACR RA guideline (2021); NICE NG100; Ghana MoH STG 2017.',
    ],
  }),
  topic(RHEUM, 'im-mctd', undefined, 'Mixed connective tissue disease', {
    recognition:
      'Consider with overlapping SLE, systemic sclerosis and myositis features: Raynaud phenomenon, swollen hands, inflammatory arthritis, myositis, oesophageal dysmotility or pulmonary hypertension. Anti-U1-RNP supports diagnosis in the appropriate clinical context but is not sufficient alone.',
    flowchart: [
      'Overlap symptoms (Raynaud, swollen hands, inflammatory arthritis, myositis, rash or serositis)',
      'Assess respiratory symptoms, oxygenation, muscle power, renal and cardiac features',
      'ANA/anti-U1-RNP and targeted tests; check CK, urinalysis, renal function and pulmonary assessment as indicated',
      '**ASSESS / DECIDE:** suspected pulmonary hypertension, ILD, myocarditis, severe myositis or renal disease? urgent specialist referral',
      'Treat organ involvement with rheumatology guidance and monitor treatment toxicity',
      'Longitudinal screening for lung and vascular complications.',
    ],
    treatment: [
      '**Baseline assessment:** CBC, renal/liver function, urinalysis, ESR/CRP, CK, ANA/ENA, ECG, chest imaging, pulmonary function tests and echocardiography when available. Screen for interstitial lung disease and pulmonary arterial hypertension; these drive morbidity.',
      'Treatment is organ-directed and specialist-led: hydroxychloroquine/NSAID for selected mild joint/skin symptoms, glucocorticoids and steroid-sparing immunosuppression for myositis or organ inflammation. Avoid assuming all patients need the same regimen. Evaluate new dyspnoea urgently for pulmonary hypertension, ILD, infection or thromboembolism.',
    ],
    references: [
      'EULAR/ERS guidance for systemic autoimmune rheumatic disease and pulmonary hypertension/ILD; current specialty reviews; Ghana MoH STG 2017.',
    ],
  }),
]
