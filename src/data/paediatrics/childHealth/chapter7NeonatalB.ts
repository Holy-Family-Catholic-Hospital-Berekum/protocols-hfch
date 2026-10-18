import type { Section } from '../../../types/protocol'
import { box, danger, drug, fig, li, note, ol, p, sec, see, table, ul, warn } from '../../helpers'
import { C7 } from './chapter7NeonatalA'

export const CHAPTER_7_NEONATAL_B: Section[] = [
  sec(C7, 'k-mbu-feeding', '7.6', 'Feeding protocol for babies admitted to the Mother Baby Unit', [
    box(
      'info',
      'The ideal',
      'THE IDEAL WHICH WE AIM FOR IS EXCLUSIVE BREASTFEEDING FOR EVERY BABY ON THE UNIT. EVERY EFFORT MUST BE MADE BY ALL STAFF OF THE UNIT TO ACHIEVE THIS, WHERE POSSIBLE.',
    ),
    p('**General principles to be followed**'),
    ol(
      'Artificial feeds are to be handled like drugs. They should only be given when prescribed by the doctor on duty or with permission from the Nurse in charge. They should only be given for medical reasons. (see below)',
      'A baby who has started breast feeding should never be given artificial feeds until after the mother has been to feed, if necessary.',
      'A baby who is on a functioning IV line with glucose in it should never be given artificial feeds as there is no immediate risk of hypoglycaemia.',
      'Every effort should be made to call mothers OR to take the baby to mother to breastfeed rather than giving the baby artificial feeds only because the mother is late in coming.',
      'Artificial feeds should never be given to babies with birth asphyxia unless there is no functioning IV line, to reduce the risk of necrotizing enterocolitis.',
      "Ward doctors must, as part of daily ward rounds, review the baby's feeding chart and as much as possible find out from the mother independently, how feeding is going, in order to make the necessary changes in the baby's feeding schedule.",
      'It is the duty of all health care staff on the unit to identify mothers with breast feeding problems and help them to overcome them.',
      'In order not to send wrong messages, artificial feeds must not be prepared in full view of the mothers. All talks to mothers must enforce exclusive breast feeding and where mothers are being counseled about artificial feeding, this must be done with as much discretion as possible.',
    ),
    p('**Examples of common and acceptable medical reasons for giving a baby artificial feeds**'),
    ol(
      'A baby with a high risk of hypoglycaemia (e.g. a premature baby, a baby of a diabetic mother or a very growth retarded baby) in whom there is no functioning IV line and in whom the mother is either not available or in whom it is judged that there is insufficient breast milk to prevent hypoglycaemia from occurring. NB A healthy term or near term baby is not at risk of developing hypoglycaemia just because feeding is delayed for an hour or so - HUNGER is not the same as hypoglycaemia.',
      "The baby of an HIV positive mother (or any other mother!) who has made an informed choice not to breast feed. This information must be adequately communicated to the ward staff. (In the case of the HIV Positive mother, artificial feeds should never be started until the mother's decision on feeding is known. This to avoid mixing of breast feeding and artificial feed which is believed to carry a high risk of transmitting HIV to the baby.)",
      'Where the mother is dead, or where the mother has abandoned the baby or has a psychiatric disorder where it is considered that the baby is at risk of being harmed by the mother.',
    ),
    p('**Some common, non medical and unacceptable reasons for giving artificial feeds**'),
    ol("The mother hasn't come. (Send for her!)", 'The baby is too big.', 'The stomach "looks flat"', 'The baby is crying after being fed.', 'The baby "looks hungry".'),
    p('In all these cases the solution is to give more breast milk and only if this fails should artificial feeds be considered.'),
    p('**Some situations where oral feeds should usually be withheld**'),
    ol(
      'Moderate and severe birth asphyxia, (to reduce the risk of Necrotising Enterocolitis).',
      'Any neonate who is very ill immediately after birth, or a preterm baby less than 30 weeks. In both these cases however breast feeding should start as soon as the baby is stable.',
      'In suspected intestinal obstruction.',
      'In any baby who is going for General Anaesthesia who has been made nil per os.',
      'The baby of an HIV positive mother whose feeding choice is not yet known by the ward staff.',
      'A baby who on a previous feed has not tolerated oral feeding. (E.g. turned blue or had an apnoeic attack.)',
      'Any neonate with a Respiratory rate >80 breaths per minute or has other signs of severe respiratory distress.',
      'A baby who is about to have an exchange blood transfusion. (A baby whose bilirubin is being monitored in whom a decision concerning exchange transfusion has not been taken should be fed. However feeds should be stopped as soon as the decision to do the procedure is made).',
      'A baby who has an umbilical vein catheter should not be fed until the catheter has been removed.',
    ),
    table(
      ['Day', 'Volume'],
      [
        ['Day 1 (the 1st 24 hour period)', '60 ml per kg per day'],
        ['Day 2 (the 2nd 24 hour period)', '90 ml per kg per day'],
        ['Day 3 (the 3rd 24 hour period)', '120 ml per kg per day'],
        ['Day 4 (the 4th 24 hour period)', '150 ml per kg per day'],
        ['Day 5 and beyond: TERM babies', '150 ml per kg per day, unless otherwise prescribed'],
        ['Day 5 and beyond: PRETERM AND LOW BIRTH WEIGHT babies', '180 mls per kg per day or more if they will tolerate it'],
      ],
      'Volumes of feed to give',
    ),
    ul(
      'For very small babies, feeds can be given two hourly or even hourly if they cannot tolerate larger volumes three hourly.',
      'Where the baby cannot suck, feeds should be given by NG tube or cup depending on the gestational age and condition of the baby.',
      'All babies must have a feeding chart which is filled daily.',
    ),
  ]),

  sec(
    C7,
    'k-jaundice',
    '7.7',
    'Management of neonatal jaundice',
    [
      p(
        "Neonatal jaundice is a common condition which doctors are often called upon to manage. Decisions as to which management option to choose are based on what YOU consider to be the baby's risk of developing kernicterus. This can sometimes be confusing. Below are some guidelines to help you decide how to manage the baby. In some cases, the decision is straight forward and easy to take. In others, it is not so simple. Always be prepared to consult when you are not sure what to do.",
      ),
      p('**First decide whether the jaundiced baby has any signs of kernicterus.** Some of the things to look for include the following:'),
      ul(
        'Does he have poor feeding? - Remember to ask whether the baby is feeding AS WELL AS he was the day before?',
        'Has he become irritable? - is he crying more than usual? Is he sleeping poorly? Is he taking longer than usual to attach to the breast because of fussing or crying?',
        'Has he become lethargic? - Is he sleeping more than usual or feeding poorly? Does he have little movement?',
        'Are there seizures? Are there any abnormal looking movements?',
      ),
      danger(
        'IF THE ANSWER TO ANY OF THESE IS YES, THE BABY MAY BE DEVELOPING KERNICTERUS. PREPARE HIM FOR AN EXCHANGE TRANSFUSION. (AFTER PERFORMING ALL EMERGENCY PROCEDURES SUCH AS CORRECTING HYPOGLYCAEMIA, ETC.)',
      ),
      p('**7.7.1 Preparation for an exchange blood transfusion**'),
      ol(
        'While taking blood for culture, G6PD etc, take a specimen from the baby and one from the mother also for grouping and cross matching. In filling the request form, make sure the lab knows the request is for an exchange and not a simple transfusion so that you get the right group of blood. Request for 160mls/kg of blood',
        'Set an IV line to rehydrate the baby and treat/prevent hypoglycaemia. Keep the baby nil per os until after the exchange. If you are conversant with passing an umbilical vein catheter you may go ahead and do so.',
        'Put the baby under phototherapy.',
        'Discuss the decision with a senior colleague if ANY doubt exists.',
      ),
      p(
        'If the answer to all the above questions is no (i.e. you assess the baby as having no signs of kernicterus), decide whether there is a risk of this baby developing kernicterus. Some factors that will put a baby at risk of developing kernicterus include the following:',
      ),
      ol(
        'Serum bilirubin of !!400µ/1!! in a term baby, or 10 x the gestational age in a preterm baby.',
        'A previous history of a jaundiced baby who was hospitalized or severely affected (or even unexplained neonatal deaths, as the mother may not have observed the jaundice.)',
        'Jaundice noticed before the baby was 48 hrs old',
        'Age less than 72 hours.',
        'Child deeply jaundiced, especially if this involves the whole body including the feet.',
        'Prematurity',
        'Co-existing illness such as birth asphyxia or injury sepsis, meningitis etc.',
      ),
      warn('IF THE CHILD HAS ANY OF THESE HE MAY BE AT RISK OF DEVELOPING KERNICTERUS. PREPARE AS IF YOU ARE GOING TO EXCHANGE HIM AND DISCUSS WITH A SENIOR COLLEAGUE.'),
      p(
        'If you decide that there is no sign of kernicterus and there is no risk of the baby developing kernicterus, take all necessary samples to the lab. Usually this will include a blood culture, a full blood count and blood film for malaria parasites. Always check for G6PD deficiency.',
      ),
      p(
        'Put the baby under phototherapy and give IV fluids if necessary. Give all other treatments as necessary. Though many babies admitted for jaundice will need sepsis treatment, this should NOT be a routine.',
      ),
      warn('Source typo: the bilirubin threshold is printed as "400µ/1" (presumably 400 µmol/L). Confirm before publishing.', 'Check with the source'),
      p('**7.7.2 Performing the exchange blood transfusion (EBT)**'),
      p(
        'You should have observed at least one exchange blood transfusion and should have been supervised to do at least one, before attempting to do one on your own. You should therefore be familiar with the basic set of the procedure. Below however are a few points to note.',
      ),
      ol(
        'Remember that rehydration and phototherapy may have reduced the bilirubin to a level where EBT is no longer indicated, especially in borderline cases. As much as possible, especially where the SBR was not checked in the last hour, recheck before starting.',
        'An EBT is a hazardous procedure. Every effort should be made to maintain cleanliness and sterility, especially when passing the UVC. Once passed, the UVC should be secured to prevent the need for re-passage and its attendant increased risk of infection and thromboembolism.',
        'The baby must be kept warm and carefully monitored during the procedure. If the heart rate or respiratory rates become deranged, slow down and allow the baby to recover.',
        'Aim to do the procedure over two hours to allow the bilirubin in the tissue to equilibrate with that in the blood.',
        'Remember to keep mixing the blood in the bag to prevent anaemia at the end of the exchange. This is especially important as the adult blood used for the exchange will usually have an Hb well below the expected value for a baby.',
        li(
          'At the end of the exchange',
          'a. Remove the UVC slowly.',
          'b. Cover the cord with sterile gauze.',
          'c. Give the baby Vitamin K (treatment dose), and anti malarial and antibiotics if indicated',
          'd. Check the Serum Bilirubin to provide a baseline for subsequent monitoring.',
          'e. Maintain IV dextrose, keep the baby nil per os and continue to monitor until at least two hour after the exchange.',
          'f. Where the baby is very young (usually < about 4 days), the bilirubin may rise such that another exchange is needed. Always check again within 6 hours of completing the procedure. Conversely, there is rarely the need to go on monitoring bilirubin once the baby is 7 complete days old.',
        ),
      ),
    ],
    { tone: 'urgent' },
  ),

  sec(C7, 'k-hiv-exposed', '7.8', 'Management of the HIV exposed baby', [
    p('**Diagnosis:** The Delivery Head Ticket may have the number 279 written on it, indicating that the mother has the infection.'),
    p('**Antiretroviral (ARV) prophylaxis**'),
    ol(
      'Give a single dose of Nevirapine susp. 2mg/kg within 48hrs of delivery PLUS one week course of a. Syr Zidovudine 4mg/kg bd PLUS Syr Lamivudine 2mg/kg bd BUT',
      'If the mother has had less than 4 weeks of ARV prophylaxis, then a. Give the baby a 6 week course of Zidovudine and Lamivudine.',
      'Collect the drugs from the dispensary (FREE).',
      "Document all the drugs given in the patient's folder or weighing card, and in the 279/PMTCT records book on the ward.",
    ),
    danger(
      'This PMTCT regimen is from 2010 and has been superseded. Check current national PMTCT guidelines before publishing.',
      'Dated guidance',
    ),
    p('**Feeding options**'),
    ul(
      'DO NOT give artificial feeds if the mother has not opted for it.',
      'Find out what feeding option the mother has chosen: ? Exclusive breastfeeding OR ? Artificial feeds',
      'If the mother has opted to breastfeed: Support her. Ask any of the doctors/nurses who have been trained in PMTCT to counsel the mother on how to minimize risk of infection to the baby.',
      'If the mother has opted not to breastfeed but to give artificial feeds: Support her. Ask any of the doctors/nurses trained in PMTCT to counsel mother on AFASS.',
      "If the mother has not made any informed choice or you do not have any information on the mother's feeding choice, then: Admit and give IV fluids till the mother has been counseled. Get in touch with the mother as soon as possible",
      'IDENTIFY and TREAT any other problems',
    ),
    p('**Follow-up**'),
    ul('The baby should be seen at the HIV clinic at 6 weeks of age.', 'If there are any problems before 6 weeks of age, the baby should be brought to the hospital.'),
  ]),

  sec(C7, 'k-birth-injuries', '7.9', 'Management of common birth injuries', [
    p('**7.9.1 Cephalhaematoma**'),
    p(
      'Usually not visible till a few hours after birth. Typically over the parietal bone, (not in the midline!) and does not cross suture lines. Rarely requires any intervention other than counseling mother to leave alone. Occasionally may be large or bilateral and may require a blood transfusion. Other than this, should never be the only reason for admission',
    ),
    p('**7.9.2 Subgaleal / subaponeurotic haematoma**'),
    p(
      'Often, (but not always) a history of a difficult vacuum delivery. Presents shortly after birth but may initially be difficult to differentiate between an early subgaleal bleed and a large caput. Typically extends to cover the whole scalp and fontanelles may not be palpable as they are covered with haematoma. The distribution of the haematoma is influenced by gravity and therefore may be masked if baby is lying on his back, for example or may collect down one side in the parieto-temporal region.',
    ),
    p('Management'),
    ul(
      'Sometimes associated with shock, hypoglycaemia, birth asphyxia etc, so emergency management aimed at these.',
      'Check PCV and transfuse accordingly.',
      'If blood transfusion not immediately indicated, monitor PCV AND vital signs every 2 hours. (Remember that in acute bleeding PCV may not give a true picture of blood loss).',
      'Give therapeutic doses of Vitamin K until bleeding stops (i.e PCV settles).',
      'Give paracetamol for pain relief.',
      'When stable, monitor for jaundice and treat appropriately. Treat associated conditions e.g. sepsis',
    ),
    p('**7.9.3 Fractured femur**'),
    p(
      'Typically presents as a baby who does not move one leg and the thigh may be swollen. Confirm by x-ray. There is often a history of a breech delivery.',
    ),
    p('Management'),
    ul('Emergency management for asphyxia, shock etc if indicated.', 'Give paracetamol for pain relief and encourage minimal handling'),
    p('Splinting a fractured femur'),
    ul(
      'Place the baby on her/his back and place a padded splint under the baby from the waist to below the knee of the affected leg',
      'Strap the splint to the baby by wrapping an elastic bandage around the waist and from the thigh to below the knee of the affected leg. Ensure that the umbilicus is not covered by the bandage.',
      'Check the toes daily for three days - (this can be done on OPD basis if practical) If the toes become blue or swollen, remove the bandage and rewrap it more loosely;',
      'If the bandage is rewrapped, observe the toes for blueness or swelling for an additional three days.',
      'Ask the mother return with the baby in 14 days to remove the splint and do check x-ray',
    ),
    fig('Splinting a fractured femur (drawings)', 90),
    p('**7.9.4 Fractured humerus**'),
    p(
      'Typically presents as a baby who does not move one arm and the upper arm may be swollen. Confirm by x-ray. There is often a history of a difficult delivery, suggesting shoulder dystocia. If seen very early before swelling is visible, may be difficult to distinguish from an Obstetric Brachial Plexus Injury or Erbs Palsy.',
    ),
    ul('Emergency management for asphyxia etc if indicated.', 'Give paracetamol for pain relief and encourage minimal handling'),
    p('Splinting a fractured humerus'),
    ul('Place a layer of cotton wool padding between the affected arm and the chest, from the axilla to the elbow.', 'Strap the upper arm to the chest using a crepe bandage.'),
    fig('Splinting a fractured humerus (drawings)', 91),
  ]),

  sec(
    C7,
    'k-nnt',
    '7.10',
    'Management of neonatal tetanus (NNT)',
    [
      p(
        'Suspect tetanus in a previously well neonate with inability to feed and spasms, which are provoked or aggravated by stimulation. There is often no history of the mother having had anti tetanus immunization during pregnancy, and there may be a history of poor cord care.',
      ),
      box(
        'urgent',
        '7.10.1 Aims of management',
        'RESUSCITATION (Airways, Breathing and Circulation, Treat Hypoglycaemia)',
        'MAXIMUM SPASM CONTROL WITH MINIMUM RESPIRATORY DEPRESSION',
        'IDENTIFICATION AND TREATMENT OF ALL ONGOING INFECTION',
        'MAINTENANCE OF HYDRATION AND NUTRITION',
      ),
      p('**7.10.2 Specific steps to take**'),
      ul(
        'Resuscitate and stabilise, check for and treat hypoglycaemia',
        'Take bloods as for neonatal sepsis and do LP if not contraindicated and if possible give the following drugs',
      ),
      drug(
        'Drugs',
        'Broad spectrum antibiotics as for sepsis/meningitis',
        'Antitetanus serum 5000 units (or Human tetanus immunoglobulin im, single dose of 500 units - preferable if available)',
        'Chlorpromazine IM/NGT 7.5mg every 8 hrs plus',
        'Phenobarbitone IM/NGT 30mg stat then 7.5mg every 12 hours',
        'Diazepam IM/NGT 2mg every 3-6 hrs PRN',
      ),
      ul(
        'Control fever appropriately',
        'Pay attention to keeping the cord clean on a daily basis',
        'Maintain a policy of minimal handling (no bathing!)',
        'Keep well hydrated by NG tube feeding of breast milk, and IV fluids.',
        "Adequate immunization for nursing mothers' of children with neonatal tetanus",
      ),
      warn(
        'MONITOR BREATHING AND SPASMS, AND GRADUALLY REDUCE THE SEDATION AS THE SPASMS DECREASE IN FREQUENCY AND INTENSITY. THIS MAY TAKE AS LONG AS TWO WEEKS BUT MAY BE MUCH SHORTER. WHEN SPASMS STOP, ENCOURAGE MOTHER TO KEEP PUTTING THE BABY TO BREAST.',
      ),
      box(
        'info',
        'NB!',
        'Risk factors for NNT are risk factors for neonatal sepsis, cord sepsis and meningitis, hence the need to identify these other infections and treat them appropriately. It is common to see a baby being treated for NNT, with the source of the infection, often the cord, remaining unclean and badly infected and thus maintaining the infection.',
        'Use of oral sedatives, (crushed tablets down an NG tube) cuts the cost of sedatives by 90%, and should be used as soon as possible, usually after about the first day of treatment. Passage of the NG tube should be done under sedation with diazepam, with an ambu bag ready at hand as it may provoke severe prolonged spasms and consequent apnoea. Once passed, the NG tube must be firmly taped to avoid the need for re passage.',
        'Sedatives must be written up on a separate sedation chart to avoid confusion. They should be evenly spaced to provide regular, smooth and sustained sedation.',
      ),
      see('k-tetanus', '5.3 Tetanus'),
    ],
    { tone: 'urgent' },
  ),

  sec(C7, 'k-kmc', '7.11', 'Kangaroo mother care (KMC)', [
    ol(
      'All staff should learn, teach and encourage mothers to practice KMC',
      'All mothers should know the benefits of KMC and how to practice KMC',
      'Preterm and Low birth babies in stable condition should be placed in KMC position for at least 4 hours in the morning - 8am to 12noon, and 4 hours in the afternoon - 2pm to 6pm.',
      'All nurses and other staff should support mothers practicing KMC and allow them to keep their babies in KMC position for as long as they can.',
      'KMC babies should be weighed on alternate days, head circumference and length measured weekly',
      'Monitor temperature 4 hourly',
      'Babies can be discharged if feeding well (breastmilk) and gaining weight, and if baby is said to be well to go home according to the doctor, and mother confident to practice KMC at home',
      'Before discharge, the grandmother, father or a relative should be involved in KMC of the baby and provide support to the mother at home',
      'Follow up should be continued until the baby weighs more than 2.5kg',
    ),
  ]),

  sec(C7, 'k-mbu-antibiotics', '7.12', 'Antibiotic protocol for babies admitted to MBU', [
    ol(
      'Take BLOOD and CSF for culture before starting antibiotics',
      'See the drug dosages chart for the antibiotic dosages',
      'Duration of treatment for Staph. aureus and Gram negative sepsis is 14 - 21 days: parenteral for at least 7 days',
      'Duration of treatment for Coagulase neg. staph sepsis - 7 days',
    ),
    table(
      ['Indication', 'First line', 'Second line'],
      [
        ['Sepsis', 'Cefuroxime and Gentamicin', 'Cefotaxime or Ceftazidime or Ceftriaxone'],
        ['Cord Sepsis / Cellulitis / Abscess', 'Flucloxacillin and Gentamicin', ''],
        ['Meningitis', 'Crystalline Penicillin and Gentamicin', 'Ceftriaxone or Cefotaxime or Ceftazidime'],
        ['Osteomyelitis / Septic Arthritis', 'Flucloxacillin & Gentamicin (at least 14 days parenteral, total duration of treatment is 6 weeks)', 'Clindamycin'],
      ],
    ),
    warn('Avoid Ceftriaxone in first week of life'),
    note('The drug dosages chart referred to here is not included in the source.'),
    p('**Changing from first line to second line**'),
    ol(
      'Should not be based on culture results alone',
      'When patient is clinically not improving eg. temperature spiking or unstable temperature, feeding poorly, respiratory difficulty etc, a) Change after 48hrs of antibiotic treatment b) Change antibiotics based on culture c) But if culture not yet ready, change to second line',
      'Always consult a senior colleague when changing',
      'If patient has been on adequate first line antibiotics before admission, start with second line',
      'For all re-admissions who need antibiotics, start with second line',
    ),
  ]),
]
