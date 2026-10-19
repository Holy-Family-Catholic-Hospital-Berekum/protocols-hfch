import type { Section } from '../../types/protocol'
import type { Place } from '../helpers'
import { topic } from './topic'

const GI: Place = { chapter: '4. Gastroenterology and hepatology' }
const ENDO: Place = { chapter: '5. Endocrinology' }
const DERM: Place = { chapter: '6. Dermatology' }

export const CHAPTERS_4_TO_6: Section[] = [
  topic(GI, 'im-hepatitis', '7', 'Hepatitis B and C', {
    recognition:
      'Initial assessment: history of jaundice, alcohol, medications, exposure, pregnancy, family history, decompensation and extrahepatic disease. Test HBsAg; if positive, assess ALT/AST, bilirubin, albumin, INR, CBC/platelets, creatinine/eGFR, HBV DNA if available, HBeAg/anti-HBe as relevant, HIV, HCV and HDV testing where indicated. Assess fibrosis with APRI/FIB-4 and ultrasound where available.',
    flowchart: [
      'Suspected viral hepatitis/chronic liver disease',
      'Assess jaundice, encephalopathy, bleeding, pregnancy and decompensation',
      'Obtain HBsAg and/or anti-HCV; confirm HCV with HCV RNA and characterize HBV with HBV DNA, ALT and staging tests where available',
      'Check HIV, renal function and relevant coinfections before therapy',
      { check: 'Acute liver failure/decompensation? urgent referral' },
      'Chronic HBV: treat/monitor according to current eligibility and local access; HCV: offer direct-acting antiviral pathway after interaction and cirrhosis assessment',
      'Counsel on transmission prevention, vaccination of susceptible contacts and follow-up/HCC surveillance when indicated.',
    ],
    treatment: [
      '**HBV:** treatment eligibility should be assessed using the current Ghana programme protocol and WHO 2024 guidance, which broadened/simplified treatment eligibility; consider fibrosis/cirrhosis, ALT, HBV DNA where available, coinfections, immunosuppression and pregnancy/vertical-transmission prevention. Tenofovir disoproxil fumarate (TDF) 300 mg orally daily or entecavir 0.5 mg daily are common first-line agents; adjust for renal function and follow national programme guidance. !!Do not stop nucleos(t)ide analogue therapy without specialist review because flare/reactivation can be severe.!! Monitor renal function with TDF and adherence/virological response.',
      '**HCV:** confirm active infection with HCV RNA (or validated reflex RNA test) after antibody positivity. Assess cirrhosis, renal function, HBV/HIV coinfection, pregnancy, drug interactions and prior DAA exposure. Pangenotypic direct-acting antiviral options commonly include glecaprevir/pibrentasvir for 8 weeks in eligible treatment-naïve patients or sofosbuvir/velpatasvir for 12 weeks; regimen depends on cirrhosis, prior treatment, renal status, interactions and local access. Use current national programme/specialist protocol; check HBV reactivation risk before DAA.',
      'Refer urgently for acute liver failure, encephalopathy, rising INR, severe jaundice, decompensated cirrhosis, suspected HCC, pregnancy-related complexity or treatment failure. Counsel on vaccination of susceptible contacts, safer sex, avoiding blood exposure, alcohol abstinence if liver disease, and not sharing razors/needles.',
    ],
    references: [
      'WHO 2024 Guidelines for prevention, diagnosis, care and treatment for chronic hepatitis B; WHO 2022 updated hepatitis C recommendations; Ghana MoH STG 2017; AASLD/IDSA HCV Guidance (current online version); NIH HIV/HBV coinfection guidance where relevant.',
    ],
  }),
  topic(GI, 'im-cirrhosis', '8', 'Cirrhosis complications: encephalopathy, ascites, anaemia, HCC', {
    recognition:
      'Assess decompensation: ascites, variceal bleeding, encephalopathy, jaundice, infection, renal dysfunction or HCC. Check CBC, electrolytes/creatinine, LFT, albumin, INR, glucose, urinalysis and ultrasound where available. Consider MELD-Na/Child-Pugh when data allow.',
    flowchart: [
      'Known/suspected cirrhosis with deterioration',
      'ABCDE; look for sepsis, GI bleeding, constipation, dehydration, renal injury and sedatives',
      'Confusion: check glucose and treat precipitants; use lactulose per protocol and monitor stool/fluid status',
      'New/worsening ascites or admission: diagnostic paracentesis when feasible; assess for SBP',
      'Bleeding or severe anaemia: stabilize, investigate and use local transfusion/bleeding protocol',
      'Screen for HCC and portal-hypertension complications',
      'Renal dysfunction, SBP, GI bleed, severe encephalopathy or suspected HCC: urgent specialist referral.',
    ],
    treatment: [
      '**Ascites:** perform diagnostic paracentesis for new-onset ascites and in hospitalized cirrhotic patients with ascites, especially with fever, pain, encephalopathy, GI bleed or renal deterioration. Send cell count/differential, culture (inoculate bedside into blood culture bottles if available), albumin and total protein. PMN ≥250 cells/mm³ suggests spontaneous bacterial peritonitis (SBP): start prompt empiric IV antibiotics based on local resistance and give albumin when indicated. Typical albumin regimen for SBP is 1.5 g/kg day 1 and 1 g/kg day 3 in patients at risk of renal failure; confirm supply and local protocol.',
      '**Uncomplicated ascites:** sodium restriction; spironolactone 100 mg daily, often with furosemide 40 mg daily, titrated while monitoring weight, BP, Na/K and renal function. Avoid over-diuresis; typical maximum 400 mg spironolactone/160 mg furosemide daily under close supervision. Large-volume paracentesis for tense/refractory ascites; give albumin after removal >5 L (usually 6–8 g per litre removed).',
      '**Hepatic encephalopathy:** search for precipitants—GI bleed, infection/SBP, constipation, dehydration, renal injury, electrolyte disturbance, sedatives and missed medication. Lactulose 25 mL orally/NG every 1–2 h until bowel movement, then titrate to 2–3 soft stools daily; avoid severe diarrhoea/dehydration. Add rifaximin 550 mg twice daily for recurrent episodes if available/indicated. Protect airway in severe encephalopathy and refer.',
      '**Anaemia:** assess bleeding, iron/B12/folate deficiency, haemolysis, renal disease and hypersplenism; do not assume all anaemia is iron deficiency. Transfuse based on symptoms, haemodynamics and cause; in suspected variceal bleeding, a restrictive strategy often targets Hb about 7–9 g/dL unless special circumstances.',
      '**HCC:** ultrasound surveillance every 6 months in eligible at-risk cirrhosis/chronic HBV patients, with AFP according to local guideline. A suspicious lesion requires multiphasic CT/MRI if available and referral; AFP alone does not diagnose or exclude HCC.',
    ],
    references: [
      'Ghana MoH STG 2017; AASLD Practice Guidance on ascites/SBP/hepatorenal syndrome and hepatic encephalopathy (2021); AASLD HCC Practice Guidance (2023); EASL cirrhosis and decompensated liver disease guidance; WHO hepatitis guidance.',
    ],
  }),
  topic(ENDO, 'im-dka-hhs', '9', 'DKA, HHS and hypoglycaemia', {
    tone: 'critical',
    recognition:
      'DKA: diabetes/hyperglycaemia plus ketonaemia (prefer blood beta-hydroxybutyrate) and metabolic acidosis. HHS: severe hyperglycaemia/hyperosmolality with dehydration and little significant ketoacidosis. Check glucose, ketones, VBG/ABG, Na/K/urea/creatinine, bicarbonate, osmolality if possible, ECG and precipitant (infection, missed insulin, MI, stroke, drugs).',
    flowchart: [
      'Unwell patient with diabetes symptoms or altered consciousness',
      'Immediate capillary glucose, ketones, electrolytes/renal function and ABCDE',
      { check: 'Hypoglycaemia? treat immediately and recheck glucose' },
      '**ASSESS / DECIDE:** hyperglycaemia with ketones/acidosis or hyperosmolar features? start the appropriate DKA/HHS pathway with careful fluids, potassium-guided insulin and frequent monitoring',
      '!!Do not start insulin when potassium is dangerously low;!! replace potassium first per protocol',
      'Search for precipitant (infection, missed insulin, ACS, stroke, drugs)',
      'Senior review/transfer for severe acidosis, shock, altered consciousness, major electrolyte disturbance or inadequate monitoring capacity.',
    ],
    treatment: [
      '**Fluids:** if no heart/renal failure, start isotonic crystalloid 500–1,000 mL/h for first 2–4 h in adults, adjusted to BP, perfusion, sodium and urine output; use smaller boluses and close reassessment in older adults, pregnancy, heart failure or CKD. Do not apply aggressive fluid protocols blindly.',
      '**Insulin:** after initial fluids and confirming K ≥3.5 mmol/L, start regular insulin IV 0.1 units/kg/h for DKA; a bolus is usually unnecessary if infusion starts promptly. For HHS without significant acidosis/ketosis, use 0.05 units/kg/h after initial fluid replacement and potassium assessment. If K <3.5, hold insulin, replace potassium per monitored protocol and recheck frequently. !!Never give IV potassium push.!!',
      '**Potassium:** if K 3.5–5.0 mmol/L, commonly add 20–30 mmol K per litre of fluid to target K 4–5, if renal function/urine output permit and local policy allows. If K >5.0, initially withhold replacement and recheck. Check glucose hourly and electrolytes/venous pH about every 2–4 h. Add dextrose when glucose falls below ~13.9 mmol/L (250 mg/dL) in DKA; continue insulin until ketonaemia/acidosis resolves. HHS correction must be gradual; monitor osmolality, sodium, cognition and fluid balance.',
      'Do not routinely give bicarbonate; consider only exceptional severe acidaemia under senior/critical-care advice. Treat precipitant and provide VTE prophylaxis when appropriate. Resolution criteria and transition to subcutaneous insulin must follow a written protocol with overlap of basal insulin before stopping IV insulin.',
      '**Hypoglycaemia:** if conscious and safe to swallow, give 15–20 g fast-acting carbohydrate and recheck glucose in 15 min; repeat until corrected, then give longer-acting carbohydrate/meal. If unconscious/unable to swallow, give IV dextrose (e.g. 10% 150–200 mL or 20% 75–100 mL, according to local concentration and IV access) and recheck in 10–15 min; if no IV access, glucagon 1 mg IM/SC if available. Identify cause and monitor for recurrence, especially sulfonylurea/long-acting insulin.',
    ],
    references: [
      'Ghana MoH STG 2017; 2024 international consensus report on hyperglycemic crises in adults (ADA/EASD/JBDS/AACE/DTS); ADA Standards of Care in Diabetes 2026; JBDS DKA/HHS guidance.',
    ],
  }),
  topic(ENDO, 'im-thyroid-emergencies', undefined, 'Thyroid storm and myxedema coma', {
    tone: 'critical',
    recognition:
      'Both are clinical emergencies. Check ABCDE, ECG, glucose, electrolytes, CBC, LFT, thyroid function and precipitant; do not delay treatment for thyroid results if suspicion is high. Seek ICU/endocrinology input.',
    flowchart: [
      'Severe thyrotoxicosis with fever/agitation/tachyarrhythmia OR profound hypothyroid features with hypothermia/bradycardia/altered consciousness',
      'ABCDE, ECG, glucose, temperature, electrolytes and infection screen',
      'Treat as an emergency on clinical suspicion; do not wait for thyroid results',
      'Thyroid storm: specialist-directed beta-blockade if safe, thionamide then iodine at the correct interval, corticosteroid and supportive care',
      'Myxedema coma: cautious supportive care, stress-dose steroid until adrenal insufficiency addressed, and thyroid hormone per specialist protocol',
      'Urgent transfer/critical-care support.',
    ],
    treatment: [
      '**Thyroid storm:** supportive care, cooling, fluids with caution, treat precipitant and use beta-blockade only if haemodynamically safe. A common regimen is propranolol 40–80 mg orally every 4–6 h, but avoid in shock, severe asthma or decompensated HF; use specialist-guided alternatives when needed. Give thionamide (e.g. PTU 500–1,000 mg loading then 250 mg every 4 h, or methimazole per local protocol), then iodine at least 1 h after thionamide, plus hydrocortisone 100 mg IV every 8 h. PTU carries hepatotoxicity risk; use local endocrinology protocol.',
      '**Myxedema coma:** airway/ventilatory support, passive rewarming, cautious fluids, treat infection/precipitant and give stress-dose hydrocortisone (e.g. 100 mg IV every 8 h) until adrenal insufficiency is excluded. IV levothyroxine loading (often 200–400 micrograms, lower in older patients or coronary disease) followed by maintenance requires ICU/specialist direction; liothyronine is reserved for selected cases due to arrhythmia risk. Avoid aggressive external rewarming and monitor sodium, glucose, ECG, temperature and mental status.',
    ],
    references: [
      'American Thyroid Association Guidelines for Thyrotoxicosis (2016); ATA Guidelines for Hypothyroidism (2014); Endotext emergency thyroid references; Ghana MoH STG 2017.',
    ],
  }),
  topic(ENDO, 'im-adrenal-crisis', undefined, 'Adrenal insufficiency and adrenal crisis', {
    tone: 'critical',
    recognition:
      'Suspect with shock, vomiting/abdominal pain, weakness, fever, hyponatraemia, hyperkalaemia, hypoglycaemia, hyperpigmentation or recent steroid withdrawal. Draw cortisol and ACTH before treatment if this does not delay therapy.',
    flowchart: [
      'Suspected adrenal crisis (shock, vomiting, abdominal pain, weakness, hyponatraemia ± hyperkalaemia)',
      'ABCDE and bedside glucose',
      'Draw cortisol/electrolytes if immediately feasible but do not delay treatment',
      'Give hydrocortisone and isotonic IV fluid; treat hypoglycaemia and monitor electrolytes/glucose',
      'Identify trigger and review chronic steroid exposure',
      'Urgent admission/transfer; after stabilization confirm diagnosis and establish long-term steroid/mineralocorticoid and sick-day plan.',
    ],
    treatment: [
      '**Adrenal crisis:** hydrocortisone 100 mg IV/IM immediately, then 200 mg over 24 h by infusion or 50 mg IV/IM every 6 h. Give 0.9% saline rapidly (e.g. 1 L in first hour in an adult without heart/renal failure), then tailor to haemodynamics, sodium and urine output. Add IV dextrose for hypoglycaemia. Treat precipitant and monitor BP, glucose, electrolytes and fluid balance.',
      'Once stable, transition to oral hydrocortisone replacement and fludrocortisone if primary adrenal insufficiency, with endocrine input. Provide sick-day rules, emergency steroid card/injection education and never abruptly stop chronic glucocorticoids.',
    ],
    references: [
      'Endocrine Society Clinical Practice Guideline: Primary Adrenal Insufficiency (2016); Society for Endocrinology emergency guidance; Ghana MoH STG 2017.',
    ],
  }),
  topic(DERM, 'im-sjs-ten', undefined, 'SJS/TEN', {
    tone: 'urgent',
    recognition:
      'Suspect with painful dusky rash, blistering, epidermal detachment and mucosal erosions, often after a new medicine. Stop all plausible culprit drugs immediately and document drug exposure/timing. Assess BSA detachment: SJS <10%, overlap 10–30%, TEN >30%.',
    flowchart: [
      'Painful rash, blistering, mucosal erosions or epidermal detachment',
      'Stop suspected culprit drugs immediately and document exposure timeline',
      'ABCDE, assess eyes/mouth/genitals, skin detachment, fluid loss, infection and organ involvement',
      'Urgent admission and early dermatology/burns/ophthalmology discussion; transfer if specialist support unavailable',
      'Supportive care: careful fluids, temperature, wound care, analgesia, nutrition and infection surveillance',
      'Avoid routine prophylactic antibiotics unless infection is suspected; document drug allergy permanently.',
    ],
    treatment: [
      'ABCDE, temperature, fluid balance, pain, oral/eye/genital mucosa and infection assessment. Early referral/admission to ICU/burns/dermatology centre; involve ophthalmology urgently for eye symptoms. Gentle wound care, non-adherent dressings, thermoregulation, nutrition, analgesia and careful fluid/electrolyte management. Avoid unnecessary prophylactic systemic antibiotics; culture and treat infection when suspected.',
      'Review all drugs and use a structured causality tool where available. Systemic corticosteroids, ciclosporin, IVIG or etanercept have variable evidence and should only be considered with specialist input and local protocol. !!Avoid re-challenge with culprit drug!! and document severe drug reaction prominently.',
    ],
    references: [
      'British Association of Dermatologists SJS/TEN guidance; European S3 guideline on SJS/TEN; WHO/ISBI burn care principles; Ghana MoH STG 2017.',
    ],
  }),
]
