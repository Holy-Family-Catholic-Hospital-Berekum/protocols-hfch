import type { Section } from '../../../types/protocol'
import { box, drug, ol, p, sec, table, ul, warn, type Place } from '../../helpers'

const C8: Place = { chapter: '8. Fluid & metabolic disorders' }

export const CHAPTER_8_METABOLIC: Section[] = [
  sec(
    C8,
    'k-dka',
    '8.1',
    'Diabetic hyperglycaemic crisis / coma (DKA)',
    [
      p('**1. Rapid assessment**'),
      ul(
        'i) Vomiting, drowsiness, polyuria, polydipsia, abdominal pains, weight loss etc.',
        "ii) Dehydration (-10%) Listlessness, deep rapid breathing, Ketotic ('fruity') breath shock, coma",
        'iii) Significant hyperglycemia, usually > 17mmol/L',
      ),
      p('**2. Diagnosis of DKA**'),
      ul('i) Hyperglycemia (glucose > 11.1mmol/dl)', 'ii) Acidosis (pH < 7.25 or bicarbonate <17)', 'iii) Ketosis (serum or urine)'),
      warn('Source typo: "11.1mmol/dl" (presumably 11.1 mmol/L).', 'Check with the source'),
      p('**3. Management**'),
      ol(
        'Airway, Breathing, & Circulation',
        '100% O2 to patients with cyanosis/shock or SaO2 <90%',
        'Start IV fluid, insulin, & Potassium as below',
        'Pass an N-G tube to drain gastric contents in comatose patients.',
        'Accurately assess urine output.',
        '!!Suspect cerebral edema if there is a set back after 2-24hrs and treat with mannitol.!!',
        'Find precipitating cause and treat appropriately.',
        "Maintain a flow chart of patient's clinical data",
      ),
      drug(
        'Fluid',
        'i. Start intravenous fluid (N/S or R/L) at once to run at 10-20ml/kg/hr (i.e. 0.35ml/kg/min for 1st hr ± plasma/Haemaccel 10ml/kg IV if shocked).',
        'ii. If no urine is passed, continue IV bolus for 2nd (±3rd) hours as well',
        'iii. Calculate fluid requirement for 24hrs. (i.e. maintenance fluid + 10% deficit/ dehydration): a. Give 1.5 times maintenance for 36-48hrs or b. Decrease infusion rate to 10ml/kg/hr for next 6-7 hrs, then give the remaining fluid requirement over the subsequent 16 hrs.',
        'iv. Change IVF to 5% Dextrose /saline when blood glucose ≤11mmol/L.',
      ),
      drug(
        'Insulin',
        'i. Start insulin after first hour of NS/LR bolus/rapid infusion is completed.',
        'ii. Start low dose insulin regimen: a) Soluble insulin @ 0.1u/kg/hr as IV infusion with a syringe pump; b) May give first dose IV then subsequent doses IM/IV (e.g. 0.2u/kg/2hrs IM); b) Reduce insulin dose to 0.05u/kg/hr if child < 5 years or glucose falls more than 4 mmol/L/hr.',
        'iii. Continue with hourly insulin until blood glucose <10mmol/l and acidosis is controlled (i.e. base deficit <5 or pH >7.32) then change to sliding scale insulin therapy.',
        'iv. When patient is able to eat change to SC short or intermediate or long acting insulin.',
      ),
      table(
        ['Blood glucose (mmol/L)', 'Insulin dose (SC)'],
        [
          ['<5', '-'],
          ['5-9', '0.05u/kg'],
          ['9-11', '0.1 u/kg'],
          ['11-17', '0.15u/kg'],
          ['>17-20', '0.2u/kg'],
          ['≥ 20', 'Revert to hourly insulin'],
        ],
        'Sliding scale using 4-6-hourly blood glucose testing',
      ),
      box(
        'urgent',
        'Electrolyte: potassium',
        'i) When urine flow ≥ 1ml/kg/hr, start IV K+, as guided by serum K+. If serum potassium (K+) < 5mmol/L, give 10-20 mmol per each 500ml IV fluid.',
        'ii) Obtain serum Potassium 12hrly.',
        'iii) Maintain Potassium level between 4-5mmol/L',
        'iv) !!DO NOT give Potassium if serum level ≥ 6mmol/L!!',
        'v) Total Potassium replacement by IV route is NOT NECESSARY, it should be completed orally when food intake resumes.',
        'vi) Half the Potassium may be given as Potassium phosphate.',
      ),
    ],
    { tone: 'critical' },
  ),
]
