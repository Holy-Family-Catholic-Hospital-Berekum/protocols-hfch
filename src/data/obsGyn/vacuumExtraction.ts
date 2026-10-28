import type { ProtocolContent } from '../../types/protocol'
import { danger, fig, ol, p, section, ul } from '../helpers'

export const VACUUM_EXTRACTION: ProtocolContent = {
  title: 'Vacuum Extraction',
  category: 'obs-gyn',
  version: 'v1.0',
  summary: 'Indications (vertex, term, ≥8 cm and fully effaced, station ≥0 or descent ≥2/5), cup application at the flexion point, vacuum pressures, traction with contractions and criteria for failed extraction.',
  keywords: ['vacuum extraction', 'ventouse', 'assisted vaginal delivery', 'instrumental delivery', 'flexion point', 'cup', 'traction', 'failed vacuum', 'episiotomy'],
  attachments: [],
  timer: { enabled: true },
  sections: [
    section('indications', 'Indications', [
      p('Vacuum is indicated when the following conditions prevail:'),
      ol(
        'Presenting part is vertex',
        'Term pregnancy',
        'At least cervical dilatation of **8cm** and fully effaced',
        'Station of at least **0** or descent of at least **2/5**',
      ),
    ]),
    section('preparation', 'Preparation and application', [
      ul(
        'Test the vacuum on a gloved hand after checking all connections',
        'Make the woman (and partner) aware of what you intend doing and offer emotional support',
        'Do a vaginal exam with a sterile gloved hand and feel for the position of the head by identifying the sagittal suture and fontanelles. Identify the posterior fontanelle.',
        'Apply the largest cup that will fit, with the centre to the **flexion point** which is **1cm anterior to the posterior fontanelle**.',
      ),
      fig('Applying the cup to the flexion point', 1),
      ul(
        'Episiotomy might be needed',
        'Check the application to ensure that no maternal soft tissue is caught within the rim',
        'Create a vacuum of **0.2kg/cm³**, check application and increase to **0.8kg/cm³**',
      ),
    ]),
    section('traction', 'Traction', [
      p('!!Start timer!!'),
      ul(
        'Then start traction in the line of the pelvic axis and perpendicular to the cup',
        'With each contraction, apply traction in the line perpendicular to the rim of the cup and place a finger next to the rim of the cup during traction to assess potential slippage and descent.',
        'Check for FHR and slippage in between contraction',
      ),
      fig('Traction with a finger next to the rim of the cup', 1),
      ul(
        '!!Never actively rotate the fetal head!!',
        'Do not continue to pull in between contractions and fetal expulsion',
        'If you see progress and there is no fetal compromise, continue the guided pull for 30 minutes',
      ),
    ]),
    section(
      'failure',
      'Failed extraction',
      [
        danger(
          'Extraction has failed if the fetal head does not advance between contractions; fetus is undelivered with 3 pulls or after 30 minutes; or cup slips off the head twice with the proper application of the cup with maximum negative pressure.',
          'NB',
        ),
      ],
      { tone: 'critical' },
    ),
  ],
}
