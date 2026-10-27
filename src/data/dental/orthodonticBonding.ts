import type { ProtocolContent } from '../../types/protocol'
import { flow, li, ol, p, refs, section, ul } from '../helpers'

export const ORTHODONTIC_BONDING: ProtocolContent = {
  title: 'Orthodontic Treatment Planning and Bonding Protocol',
  category: 'maxillofacial-dental',
  version: 'v1.0',
  summary: 'Stepwise treatment planning (database → problem list → priorities → solutions → informed consent → plan) and stepwise bracket bonding: cleaning, enamel conditioning, sealing, bonding and curing.',
  keywords: ['orthodontics', 'treatment planning', 'problem list', 'bonding', 'brackets', 'etching', 'phosphoric acid', 'primer', 'Transbond XT', 'moisture control', 'light cure', 'Proffit', 'Graber'],
  attachments: [],
  timer: { enabled: false },
  sections: [
    section('planning', 'Stepwise Protocol for Orthodontic Treatment Planning', [
      flow(
        { id: 'database', kind: 'action', title: '**Data base**', items: ['Interview', 'Clinical exam', 'Analysis of Tx records'] },
        {
          id: 'diagnosis',
          kind: 'action',
          title: '**Problem list = DIAGNOSIS**',
          items: ['**Pathology:** control before treatment', '**Positive attributes:** maintain during treatment'],
        },
        { id: 'priority', kind: 'action', title: '**Orthodontic problems in PRIORITY ORDER**' },
        { id: 'solutions', kind: 'action', title: '**Possible solutions**' },
        { id: 'discussion', kind: 'action', title: '**Patient-parent discussion**', items: ['Informed consent'] },
        { id: 'plan', kind: 'action', title: '**Treatment plan**' },
      ),
      refs('Contemporary Orthodontics, 6th edition, by William R Proffit'),
    ]),
    section('cleaning', 'Bonding: 1. Cleaning', [
      p('The steps involved in direct and indirect bracket bonding on facial or lingual surfaces are as follows:'),
      p(
        '**Cleaning:** Cleaning of the teeth with pumice removes plaque and the organic pellicle that normally covers all teeth that otherwise might remain trapped at the enamel–resin interface after bonding.',
      ),
    ]),
    section('conditioning', 'Bonding: 2. Enamel conditioning', [
      ul(
        li(
          '**a) Moisture Control:** After the rinse, salivary control and maintenance of a dry working field is essential. For eg:',
          'Lip expanders and cheek retractors',
          'Saliva ejectors',
          'Tongue guards with bite blocks',
          'Salivary duct obstructors',
          'Gadgets that combine several of these',
          'Cotton or gauze rolls',
          'Antisialagogue',
        ),
        '**b) Enamel Pretreatment:** After the operative field has been isolated, the etchant (**37% Phosphoric acid**) is applied over the enamel surface for **15 to 30 seconds**. At the end of the etching period, the etchant is rinsed off the teeth with abundant water spray. !!Salivary contamination of the etched surface must not be allowed.!! (If contamination occurs, rinse with the water spray or re-etch for a few seconds; the patient must not rinse.) Next, the teeth are dried thoroughly with a moisture-and-oil–free air source to obtain the well-known dull, frosty appearance. Teeth that do not appear dull and frosty white should be re-etched.',
      ),
    ]),
    section('sealing', 'Bonding: 3. Sealing', [
      p(
        'After the teeth are completely dry and frosty white, a thin layer of bonding agent (sealant, primer) may be painted over the etched enamel surface. The coating may be thinned by a gentle air burst for 1 to 2 seconds. Bracket placement should be started immediately after all etched surfaces are coated.',
      ),
    ]),
    section('bonding', 'Bonding: 4. Bonding', [
      p(
        'Immediately after all teeth to be bonded have been painted with sealant or primer, the operator should proceed with the actual bonding of the attachments.',
      ),
      p('The recommended bracket bonding procedure (with any adhesive, **Transbond XT recommended**) consists of the following steps:'),
      ol(
        '**Transfer:** The clinician grips the bracket with reverse action tweezers and then applies the adhesive to the back of the bonding base. The clinician immediately places the bracket on the tooth close to its correct position.',
        '**Positioning:** The clinician uses a placement scaler to position the brackets mesiodistally and incisogingivally and to angulate them accurately relative to the long axis of the teeth. Proper vertical positioning may be enhanced by different measuring devices or height guides.',
        '**Fitting:** Next, the clinician turns the scaler and with one-point contact with the bracket, pushes firmly toward the tooth surface. The tight fit will result in good bond strength, little material to remove on debonding, optimal adhesive penetration into bracket backing, and reduced slide when excess material extrudes peripherally. The clinician should remove the scaler after the bracket is in the correct position and should make no attempts to hold the bracket in place with the instrument.',
        '**Removal of excess:** Excess adhesive will not be worn away by toothbrushing and other mechanical forces; it must be removed (especially along the gingival margin) with the scaler before the adhesive has set or with burs after setting.',
      ),
    ]),
    section('curing', 'Bonding: 5. Curing', [
      p('Each brackets are then **light cured for 20 seconds**.'),
      refs('Orthodontics: Current Principles and Techniques, 5th Edition, by Graber, Vanarsdall, Vig'),
    ]),
  ],
}
