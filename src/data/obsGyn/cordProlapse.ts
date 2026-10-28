import type { ProtocolContent } from '../../types/protocol'
import { box, decision, flow, goTo, note, p, section, table, ul } from '../helpers'

/** Holy Family Hospital, Berekum 2019. Page 1 is the text protocol, page 2 the flow chart. */
export const CORD_PROLAPSE: ProtocolContent = {
  title: 'Umbilical Cord Prolapse',
  category: 'obs-gyn',
  version: 'HFH 2019',
  summary: 'Definition, risk factors, clinical findings and diagnosis; flow chart: viable fetus → ventouse if fully dilated, otherwise relieve cord compression, fill bladder and emergency C/S.',
  keywords: ['cord prolapse', 'umbilical cord', 'occult cord prolapse', 'fetal bradycardia', 'variable decelerations', 'knee-elbow', 'bladder filling', 'Foley', 'emergency caesarean', 'C/S', 'ventouse', 'IUFD'],
  attachments: [],
  timer: { enabled: true },
  sections: [
    section('definition', 'Definition', [
      p(
        'Cord slips ahead of the presenting part of the fetus and protrudes into the cervical canal or vagina, or beyond (when the membranes are ruptured). It is an **obstetrical emergency** because the prolapsed cord is vulnerable to compression, umbilical vein occlusion and umbilical artery vasospasm, which can compromise fetal oxygenation. In **occult umbilical cord prolapse**, the cord slips alongside, but not ahead of the presenting part. Umbilical cord prolapse is a rare event but associated with serious fetal/neonatal complications (asphyxia, death).',
      ),
    ]),
    section('risk-factors', 'Risk factors', [
      table(
        ['Maternal and fetal factors', 'Obstetric interventions'],
        [
          ['Malpresentation (breech, transverse, oblique or unstable lie)', 'Iatrogenic rupture of membranes'],
          ['Prematurity', 'Cervical ripening with a balloon catheter'],
          ['Low birth weight (<2500gr)', 'Induction of labour'],
          ['Second twin', 'Application of an internal scalp electrode'],
          ['Low lying placenta', 'Insertion of an intrauterine pressure catheter'],
          ['Pelvic deformities', 'Manual rotation of the fetal head'],
          ['Uterine malformations/tumors', 'External cephalic version'],
          ['External fetal abnormalities', 'Internal podalic version'],
          ['Multiparity', 'Application of forceps'],
          ['Polyhydramnios', ''],
          ['Long umbilical cord (>80cm)', ''],
          ['Unengaged presenting part', ''],
          ['Prolonged labour', ''],
          ['Preterm broken membranes', ''],
        ],
      ),
    ]),
    section('clinical-findings', 'Clinical findings', [
      p(
        'Abrupt onset of severe, prolonged fetal bradycardia or moderate to severe variable decelerations in a patient with a previous normal tracing. The fetal heart may also change abruptly after membrane rupture or an obstetric intervention.',
      ),
      note(
        'Check for other causes of the sudden change of fetal heart rate (fall in maternal blood pressure, uterine tachysystole: >5 contractions in 10 minutes, placental abruption, uterine rupture and vasa praevia).',
        'NOTE',
      ),
    ]),
    section('diagnosis', 'Diagnosis', [
      ul(
        'Visualization of the prolapsed cord',
        'Vaginal examination',
        'USG may be helpful in case of occult umbilical cord prolapse → !!do not use it as a standard diagnostic tool, to prevent delay of treatment!!',
      ),
      note(
        'The fetal heart rate can be normal when the prolapsed cord is palpated, however in most cases there is already a bradycardia or variable decelerations.',
        'NOTE',
      ),
    ]),
    section(
      'treatment',
      'Treatment plan',
      [
        p('!!Start timer!!'),
        ul(
          '**Perform emergency delivery!**',
          'Minimize manipulation of the umbilical cord',
          'Gently replace the overtly prolapsed cord in the vagina where it will remain warm and wet',
        ),
        box(
          'critical',
          'NOTE',
          '**Pushing the cord back in the uterus is contra-indicated**',
          'Avoid exposing cord to cold and dry environment to prevent vasospasm of the cord and consequently prevent fetal compromise or death',
        ),
      ],
      { tone: 'critical' },
    ),
    section('viable', 'Is fetus viable?', [
      p('**Diagnosis:** clinical and vaginal examination'),
      decision('Is fetus viable? (Is fetal heart present?)', [
        { label: 'Yes', tone: 'urgent', target: 'dilatation' },
        { label: 'No', tone: 'neutral', target: 'iufd' },
      ]),
    ]),
    section('dilatation', 'Is cervix fully dilated?', [
      decision('Is cervix fully dilated?', [
        { label: 'Yes', tone: 'urgent', target: 'fully-dilated' },
        { label: 'No', tone: 'critical', target: 'not-dilated' },
      ]),
    ]),
    section('fully-dilated', 'Cervix fully dilated', [goTo('og-vacuum-extraction', 'Vacuum Extraction', 'Consider ventouse delivery')], {
      tone: 'urgent',
    }),
    section(
      'not-dilated',
      'Cervix not fully dilated',
      [
        flow(
          { id: 'relieve', kind: 'action', title: '**Push up presenting part manually** or patient in **knee-elbow position**' },
          { id: 'catheter', kind: 'action', title: 'Place **Foley catheter** in bladder' },
          { id: 'fill', kind: 'action', title: 'Fill with **500 mL normal saline**' },
          { id: 'monitor', kind: 'action', title: 'Monitor fetal heart rate' },
          { id: 'theatre', kind: 'action', title: 'Transfer to OR for **Em C/S**' },
          { id: 'empty', kind: 'action', title: 'At skin incision, **release clamp on catheter** to empty bladder' },
        ),
      ],
      { tone: 'critical' },
    ),
    section('iufd', 'Fetal heart absent', [box('info', 'No fetal heart', 'Confirm IUFD with ultrasound scan', 'Await spontaneous delivery or induce')]),
  ],
}
