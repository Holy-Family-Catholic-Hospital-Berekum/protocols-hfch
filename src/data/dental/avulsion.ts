import type { ProtocolContent, Section } from '../../types/protocol'
import { decision, li, p, refs, section, ul } from '../helpers'

/**
 * AAPD Reference Manual of Pediatric Dentistry, pp. 616-617: the two avulsion flowsheets.
 * Everything up to stabilization is identical on both pages; only the postoperative box differs.
 */

const ANTIBIOTICS =
  'Prescribe 7-day course of antibiotics (e.g., amoxicillin or penicillin; alternative for penicillin-allergic patients; doxycycline has demonstrated antiresorptive, anti-osteoclastic, anti-inflammatory, and antibacterial effects).'

const sharedSteps: Section[] = [
  section(
    'at-site',
    'Instructions to Individual at Site of Avulsion',
    [
      ul(
        'Seek medical attention if loss of consciousness, signs of neurological impairment, or other major medical concerns.',
        'Rinse avulsed tooth gently in milk, saline, or saliva; use care **not to touch root** with fingers.',
        '**If possible, replant avulsed tooth.**',
        'If unable to replant tooth, place in physiologic storage medium (milk, Hank’s Balanced Salt Solution [HBSS], saliva, or saline).',
        '**Seek immediate dental treatment.**',
      ),
    ],
    { tone: 'urgent' },
  ),
  section(
    'arrival',
    'Upon Arrival to Dental Facility',
    [
      ul(
        'Perform general neurological assessment (See also Acute Traumatic Injuries: Assessment and Documentation¹).',
        'If tooth was not previously replanted or stored in physiologic medium, rinse the root structure with gentle stream of saline until all visible contaminants are removed and store in physiologic medium.',
        'Review medical history (including tetanus immunization status) and details of injury.',
        'Complete clinical and radiographic evaluations.',
        'Consider taking photographs.',
        'Evaluate for abuse.',
      ),
      decision('Has the tooth been replanted before arrival?', [
        { label: 'Tooth has been replanted before arrival to the dental facility', tone: 'stable', target: 'confirm-position' },
        { label: 'Tooth has not been reimplanted prior to arrival', tone: 'urgent', target: 'prepare' },
      ]),
    ],
    { tone: 'urgent' },
  ),
  section('prepare', 'Tooth not replanted: Preparation for Replantation', [
    p(
      '**Tooth has not been reimplanted prior to arrival.** (Prognosis, but not treatment, will change based on placement in physiologic storage medium versus dry storage before arrival to dental facility.²)',
    ),
    ul(
      'Anesthetize area, giving consideration to using block injection techniques and no vasoconstrictor.',
      'Irrigate socket with gentle stream of sterile saline, removing coagulum.',
    ),
  ]),
  section('replant', 'Replantation', [ul('Replant tooth slowly and gently.')]),
  section('confirm-position', 'Confirmation of Positioning', [
    ul('Verify the correct position of the tooth clinically and radiographically.', 'Reposition if necessary.'),
  ]),
  section('stabilize', 'Stabilization', [
    ul(
      'Stabilize the tooth using a passive, flexible wire or nylon fishing line bonded with composite. Placement should allow area to be cleansable.',
      '**Exception:** Alveolar or jaw fracture requires a rigid splint.',
    ),
  ]),
]

const sources = refs(
  'Adapted with permission: McIntyre J, Lee J, Trope M, Vann WJ. Permanent tooth replantation following avulsion: Using a decision tree to achieve the best outcome. Pediatr Dent 2009;31(2):137-44.',
  '1. American Academy of Pediatric Dentistry. Acute traumatic injuries: Assessment and documentation. The Reference Manual of Pediatric Dentistry. Chicago, Ill.: American Academy of Pediatric Dentistry; 2022:614-5.',
  '2. Fouad AF, Abbott PV, Tsilingaridis G, et al. International Association of Dental Traumatology guidelines for the management of traumatic dental injuries: 2. Avulsion of permanent teeth. Dent Traumatol 2020;36:331-342. Available at: “https://doi.org/10.1111/edt.12573”.',
)

const keywords = ['avulsion', 'avulsed tooth', 'knocked out tooth', 'replantation', 'dental trauma', 'splint', 'HBSS', 'permanent tooth', 'AAPD', 'IADT']

export const AVULSION_OPEN_APEX: ProtocolContent = {
  title: 'Acute Management of an Avulsed Permanent Tooth with an Open (>1 mm) Apex',
  category: 'maxillofacial-dental',
  version: 'AAPD 2022',
  summary: 'At-site instructions, arrival assessment, replantation, positioning, flexible splint; antibiotics, splint removal at 2 weeks and monitoring for revascularization.',
  keywords: [...keywords, 'open apex', 'immature tooth', 'revascularization', 'apexification'],
  attachments: [],
  timer: { enabled: false },
  sections: [
    ...sharedSteps,
    section('postop', 'Postoperative Management: Prescriptions, Splint Removal, and Follow-Up', [
      ul(
        ANTIBIOTICS,
        'Prescribe chlorhexidine mouth rinse 2 times/day for 2 weeks.²',
        'Refer to medical professional for tetanus booster as needed.',
        'At 2 weeks, remove splint (unless bony fracture occurred) and evaluate clinically and radiographically for pulpal revascularization, infection, pulpal necrosis, and root resorption.',
        'Initiate pulpal revascularization, apexification, or root canal treatment as soon as definitive clinical and/or radiographic pathology presents.²',
        'Frequent, regular follow-up evaluations (e.g., every 4 weeks) are indicated initially.',
      ),
      sources,
    ]),
  ],
}

export const AVULSION_CLOSED_APEX: ProtocolContent = {
  title: 'Acute Management of an Avulsed Permanent Tooth with a Closed (<1 mm) Apex',
  category: 'maxillofacial-dental',
  version: 'AAPD 2022',
  summary: 'At-site instructions, arrival assessment, replantation, positioning, flexible splint; antibiotics, root canal treatment within 2 weeks, splint removal and 5-year follow-up.',
  keywords: [...keywords, 'closed apex', 'mature tooth', 'root canal', 'calcium hydroxide'],
  attachments: [],
  timer: { enabled: false },
  sections: [
    ...sharedSteps,
    section('postop', 'Postoperative Management: Prescriptions, Root Canal Treatment, Splint Removal, and Follow-Up', [
      ul(
        ANTIBIOTICS,
        'Prescribe chlorhexidine mouth rinse 2 times/day for 2 weeks.²',
        'Refer to medical professional for tetanus booster as needed.',
        '**Initiate root canal treatment** (e.g. calcium hydroxide) **within 2 weeks** of replantation.²',
        'Splint removal at 2 weeks; rigid splint placed for bony fracture should remain for 4 weeks.',
        li('Follow-up evaluations:', '1 month', '3 months', '6 months', '12 months', 'annually for 5 years'),
      ),
      sources,
    ]),
  ],
}
