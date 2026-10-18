import type { Section } from '../../types/protocol'
import { box, fig, note, p, refs, sec, ul, warn, type Place } from '../helpers'

const C6: Place = { chapter: '6. Appendix' }

export const CHAPTER_6_APPENDIX: Section[] = [
  sec(C6, 'fluids', '6.1', 'Fluid and electrolytes requirements', [
    p(
      'Fluid management is aimed at making sure the patient is neither fluid depleted nor fluid overloaded. The principle is to replace whatever is lost. Success can make the difference between a short, uncomplicated postoperative course and the patient ending up on ICU.',
    ),
    p('**Maintenance crystalloid**'),
    p(
      'The principle is to replace Na⁺, K⁺, and water loss from urine, vomiting, diarrhoea, high output fistulae and stomas, and fluid ‘third-spaced’ (e.g. ascites, tissue oedema). The normal bowel contains gas and chyle, which is the sum of food and salivary, gastric, biliary, pancreatic and intestinal secretions. Chyle continues to accumulate even without oral intake.',
    ),
    p('**Approximate average daily loss of fluid and electrolytes**'),
    ul(
      'Water loss 2500mL/day: Intestinal: 0.1L/day*; Urine output: 1.5L/day; Insensible loss: total 0.8L/day',
      'Na⁺ losses: 100mmol/day (in urine)',
      'K⁺ losses: 80mmol/day (in urine)',
    ),
    box(
      'info',
      '* GI fluid secretions/day',
      'Salivary glands: 0.2-1L',
      'Gastric: 0.6-2L',
      'Pancreas: 1-2L',
      'Biliary tree: 1L',
      'Jejunum/ileum: 1-2L',
      'TOTAL GI absorption: 7-8L',
    ),
    note('Fluid and electrolyte losses are increased in sepsis, ventilation, diarrhoea, vomiting, high output fistulas, polyuric renal failure.', 'NOTE'),
    box(
      'info',
      'Regime 1',
      'This gives 3L of fluid, 200mmol Na⁺, and 80mmol KCl in 24h. It is only suited to adult patients with no significant comorbidity. It takes no account of patient age, size, cardiac function, or fluid loss.',
      '1L NS with 40mmol KCl over 8h',
      '1L NS with 40mmol KCl over 8 h',
      '1L 5% Dextrose over 8h',
    ),
    box(
      'info',
      'Regime 2: Alder Hey paediatric regimen',
      'Useful in all ages and all body weights, except extreme starvation',
      'Fluid volume/24h: 100mL/kg for each kg 0–10kg; 50mL/kg for each kg 10–20kg; 20mL/kg for each kg over 20kg',
      'Electrolytes: Na⁺ 2mmol/kg/24h; K⁺ 1mmol/kg/24h',
    ),
    warn('If in shock: 1L RL in 30-60minutes AND then 4-6L/24H required.', 'NOTE'),
    p('**Some patients cope with fluids better than others:**'),
    ul(
      'Young and normally fit patients handle big fluid loads easily',
      'Cardiac disease: impairs pumping excess fluids round the body',
      'Renal disease: impairs excretion of excess fluid',
      'Hypoalbuminaemia: impairs retention of excess fluid in the blood',
      'Excess fluid: accumulates in the lungs causing pulmonary edema',
    ),
    warn('Urine output has to be >30ml/H when replacing K⁺ deficit.', 'NOTE'),
    refs(
      'Holy Family Hospital Berekum, Protocols for surgical emergencies',
      'Medscape; Author: J. Shalkow, MD and C. Cuffari, MD; Pediatric Small-Bowel Obstruction; Updated dec 2015',
      'D.J. Sloan, E.E. Zijlstra; The clinical book 2013; Department of Medicine, College of Medicine; Second edition, Blantyre Malawi; pp 98',
      'G. McLatchie, N. Borley, J. Chikwe 2013; Oxford Handbook of clinical Surgery; Fourth Edition, Oxford University Press; pp. 92-93',
    ),
  ]),

  sec(C6, 'antibiotics', '6.2', 'Antibiotics versus Pathogens', [
    p(
      'Two charts in the original: (1) which antibiotics cover which pathogens, across anaerobes (gram positive: Peptostreptococ, Clostridium; gram negative: Bacteroides spp, B. fragilis) and aerobes (gram negative: Pseudomonas, Enterobacter, Haemophilus, Moraxella, Neisseria; gram positive: Pneumococ, Streptococ, Enterococ, Staphylococ S. aureus and CNS); and (2) which pathogens are typical for each infection site (GI and gallbladder, urological, respiratory, CF, meningitis, brain, decubitus and chronic ulcer, wounds, burns, lines, neutropenia).',
    ),
    p(
      'Antibiotics charted: Penicillin, Flucloxacillin, Amoxicillin, Amoxicillin/clavulanate, Cefuroxim, Ceftriaxone, Ceftazidim, Imipenem, Aminoglycoside, Vancomycin, Erythromycin, Clindamycin, Cotrimoxazol, Ciproxin, Metronidazole.',
    ),
    warn(
      'The coverage is drawn as bars spanning pathogen columns. To avoid misreading a column boundary, this chart is shown from the original document only.',
      'Read this chart in the original',
    ),
    fig('Antibiotics versus Pathogens: coverage chart and infection-site chart', 58),
  ]),
]
