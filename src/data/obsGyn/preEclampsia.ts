import type { ProtocolContent } from '../../types/protocol'
import { box, danger, drug, goTo, note, section, ul, warn } from '../helpers'

/** Two single-page protocols: IV antihypertensives in labour, and the magnesium sulfate schedules. */

const keywords = ['pre-eclampsia', 'eclampsia', 'severe hypertension', 'hypertension in pregnancy', 'blood pressure', 'labour']

export const IV_ANTIHYPERTENSIVES: ProtocolContent = {
  title: 'Intravenous Antihypertensives Protocol',
  category: 'obs-gyn',
  version: 'v1.0',
  summary: 'IV labetalol for high BPs in labour (80 mg stat if ≥200/110, then 40 mg every 20 min until DBP <110, max 300 mg); IV/IM hydralazine 5 mg every 30 min (max 40 mg) if labetalol is not available.',
  keywords: [...keywords, 'labetalol', 'hydralazine', 'antihypertensive', 'DBP', 'diastolic'],
  attachments: [],
  timer: { enabled: true },
  sections: [
    section(
      'labetalol',
      'IV Labetalol Protocol',
      [
        ul('IV labetalol is the intravenous antihypertensive to control high BPs in labour.'),
        drug(
          'IV labetalol: BP 200/110 mmHg or more',
          '**80 mg stat**',
          'continue with **40 mg every 20 minutes** till the DBP is less than 110 mmHg or till a **maximum of 300 mg**',
        ),
        drug(
          'IV labetalol: DBP 110 mmHg or more and SBP less than 200 mmHg',
          '**40 mg every 20 minutes** till the DBP is less than 110 mmHg or till a **maximum of 300 mg**',
        ),
        warn('Administer the IV labetalol over 2 minutes.'),
      ],
      { tone: 'urgent' },
    ),
    section(
      'hydralazine',
      'IV Hydralazine Protocol',
      [
        note('Use this if IV labetalol is not available.'),
        drug(
          'IV or IM hydralazine: DBP 110 mmHg or more',
          '**5 mg over 5 minutes**',
          'repeat **every 30 minutes** till the DBP is less than 110 mmHg or till a **maximum of 40 mg**',
        ),
        box(
          'info',
          'Preparation',
          'If the drug is in powder constitution, the contents of vial should be reconstituted with 1 ml of water for injection. If it’s liquid constitution, no further reconstitution needed.',
          'Then draw the contents into a 10 ml syringe and add 9 ml of normal saline.',
          'The vial contains 20 mg hydralazine. Hence the 10 ml preparation in the syringe contains 20 mg hydralazine. **To obtain 5 mg of hydralazine, use 2.5 ml of the preparation.**',
        ),
        ul(
          'The injection must be given immediately and slowly over 5 minutes.',
          'Ideally, the rest of the preparation should be discarded.',
          'If that’s not feasible, store in cool dry place away from light',
        ),
      ],
      { tone: 'urgent' },
    ),
    section('magnesium', 'Seizure prophylaxis', [goTo('og-magnesium-sulfate', 'Magnesium Sulfate Schedules', 'Severe pre-eclampsia / eclampsia')]),
  ],
}

export const MAGNESIUM_SULFATE: ProtocolContent = {
  title: 'Magnesium Sulfate Schedules for Severe Pre-eclampsia and Eclampsia',
  category: 'obs-gyn',
  version: 'v1.0',
  summary: 'Loading dose 4 g IV + 10 g deep IM, maintenance 5 g IM every 4 hours for 24 hours, checks before each repeat dose (RR, patellar reflexes, urine output) and the calcium gluconate antidote.',
  keywords: [...keywords, 'magnesium sulfate', 'magnesium sulphate', 'MgSO4', 'convulsions', 'seizures', 'calcium gluconate', 'antidote', 'patellar reflex'],
  attachments: [],
  timer: { enabled: false },
  sections: [
    section(
      'loading',
      'Loading dose',
      [
        drug('Magnesium sulfate IV', '**4 g IV over 5 minutes**'),
        drug(
          'Magnesium sulfate deep IM',
          'Follow promptly with **10 g** of magnesium sulfate solution, **5 g in each buttock** as deep IM injection with 1 mL of 2% lignocaine in the same syringe.',
        ),
        ul(
          'Ensure that aseptic technique is practiced when giving magnesium sulfate deep IM injection.',
          'Warn the woman that a feeling of warmth will be felt when magnesium sulfate is given.',
        ),
        warn('If convulsions recur after 15 minutes, give **2 g magnesium sulfate IV over 5 minutes**.'),
      ],
      { tone: 'urgent' },
    ),
    section('maintenance', 'Maintenance dose', [
      drug('Magnesium sulfate IM', '**5 g** magnesium sulfate + 1 mL lignocaine 2% IM **every 4 hours** into alternate buttocks.'),
      ul('Continue treatment with magnesium sulfate for **24 hours after childbirth or the last convulsion**, whichever occurs last.'),
    ]),
    section(
      'before-repeat',
      'Before repeat administration, ensure that',
      [
        ul(
          'Respiratory rate is at least **16 breaths per minute**.',
          'Patellar reflexes are present.',
          'Urine output is at least **30 mL per hour over 4 hours**.',
        ),
      ],
      { tone: 'stable' },
    ),
    section(
      'withhold',
      'Withhold or delay drug if',
      [
        ul(
          'Respiratory rate falls below 16 breaths per minute.',
          'Patellar reflexes are absent.',
          'Urine output falls below 30 mL per hour over preceding 4 hours.',
        ),
      ],
      { tone: 'critical' },
    ),
    section(
      'antidote',
      'Keep antidote ready',
      [
        danger(
          'Assist ventilation (mask and bag, anesthesia apparatus, intubation). Give **calcium gluconate 1 g (10 mL of 10% solution) IV slowly** until respiration begins to antagonize the effects of magnesium sulfate.',
          'In case of respiratory arrest',
        ),
        note(
          'Magnesium sulfate comes in different concentrations (e.g., 20%, 40%, 50%). When giving injections IM, it is best to use higher concentrations (e.g., 50%) to decrease the total volume required.',
        ),
      ],
      { tone: 'critical' },
    ),
    section('bp', 'Blood pressure control', [goTo('og-iv-antihypertensives', 'Intravenous Antihypertensives Protocol', 'DBP 110 mmHg or more')]),
  ],
}
