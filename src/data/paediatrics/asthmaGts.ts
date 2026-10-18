import type { ProtocolContent } from '../../types/protocol'
import { box, danger, drug, fig, flow, li, note, ol, p, refs, sec, see, table, ul, warn, type Place } from '../helpers'

/**
 * Ghana Thoracic Society, "Guidelines on Asthma Management" (2023), 49-page source PDF.
 *
 * Clinical content only: preface, author/reviewer lists and the epidemiology section are left out.
 * Wording, doses and thresholds follow the source; tables and boxes that are images in the PDF
 * were transcribed from the page images. Source typos are kept and flagged in red notes.
 */

const C1: Place = { chapter: '1. Definition and aetiology' }
const C2: Place = { chapter: '2. Pathophysiology and diagnosis' }
const C3: Place = { chapter: '3. Control of symptoms and risk' }
const C4: Place = { chapter: '4. Acute asthma exacerbation' }
const C5: Place = { chapter: '5. Comorbidities' }
const C5A: Place = { chapter: '5. Comorbidities', subchapter: 'Allergic comorbidities' }
const C5N: Place = { chapter: '5. Comorbidities', subchapter: 'Non-allergic comorbidities' }
const AP: Place = { chapter: 'Appendix' }

export const ASTHMA_GTS: ProtocolContent = {
  title: 'Asthma Management (Ghana Thoracic Society 2023)',
  category: 'paediatrics',
  version: 'v1.0',
  summary:
    'Diagnosis in pre-school children, older children and adults; stepwise controller therapy and ICS doses by age; acute exacerbation severity, treatment, admission, ICU and discharge criteria; comorbidities; asthma action plan and GINA control tool.',
  keywords: [
    'asthma',
    'wheeze',
    'GINA',
    'exacerbation',
    'acute asthma',
    'salbutamol',
    'ipratropium',
    'magnesium sulphate',
    'aminophylline',
    'prednisolone',
    'hydrocortisone',
    'budesonide',
    'ICS',
    'LABA',
    'formoterol',
    'MART',
    'montelukast',
    'LTRA',
    'spacer',
    'inhaler',
    'peak flow',
    'PEFR',
    'spirometry',
    'action plan',
    'allergic rhinitis',
    'eczema',
  ],
  attachments: [],
  timer: { enabled: false },
  sections: [
    // ───────────────────────────── 1. Definition and aetiology
    sec(C1, 'as-definition', '1.1', 'Asthma: Definition', [
      p(
        'Asthma is defined by the Global Initiative of Asthma (GINA) as a heterogeneous disease characterized by chronic inflammation of the airways. The background chronic airway inflammation is associated with airway hyperresponsiveness (AHR) that leads to recurrent episodes of wheeze, difficulty in breathing, chest tightness and cough. It is associated with reversible airway obstruction that could resolve spontaneously or with treatment but may be persistent in a small percentage of people. Characteristically, asthma symptoms are variable over time and in intensity, particularly worse early mornings, at night or on exposure to specific triggers. This underscores the prime role of airway inflammation in all patients with asthma.',
      ),
      note(
        'Factors associated with asthma deaths: previous admission to intensive care unit (ICU), severe asthma necessitating chronic oral corticosteroids, poor daily asthma symptom control with excessive use of short-acting beta2 agonist medication (1.4 canisters per month), abnormal forced expiratory volume in 1 second (FEV1), frequent emergency department (ED) visits, low socioeconomic status, family dysfunction, and patient psychosocial problems.',
        'Risk of asthma death',
      ),
    ]),
    sec(C1, 'as-aetiology', '1.3', 'Asthma: Aetiological factors', [
      p(
        "These are factors that increase one's risk of developing asthma. Asthma is the result of an interplay between genetic and environmental factors which are quite complex with no clear understanding of the pathways involved. Atopy, which is a genetic tendency to develop allergic conditions in response to common environmental allergens, is the strongest risk factor for the development of asthma. Airway hyper responsiveness (AHR), defined as excessive reactivity or narrowing of the airway in response to broncho-constrictive stimuli, is a characteristic feature in asthma and closely related to atopy, both believed to be genetic in aetiology. Examples of such environmental factors include indoor allergens (e.g., house dust mite, cockroaches), air pollutants, respiratory viruses, diet, endotoxins and seasonal outdoor allergens (grass, pollens, molds, animal dander etc).",
      ),
      p(
        'Patients with atopic/allergic asthma tend to have a positive family history of allergic diseases such as rhinitis, eczema, urticarial and develop asthma in early childhood. They are more likely to have peripheral eosinophilia or raised serum IgE levels and a positive skin prick test to intradermal injection of allergens.',
      ),
      p(
        'There are also a group of patients with non-atopic/non-allergic asthma with no features of atopy and are characterized by late onset asthma, absence of personal/family history of allergies and negative skin prick tests/normal IgE. The latter group, as opposed to the atopic group, have their symptoms triggered by non-allergic factors such as stress, cold or dry air, anxiety and viruses. In adults, occupational exposures to organic and inorganic chemicals could lead to the development of occupational asthma.',
      ),
      p(
        'In childhood there is male preponderance of asthma, as well as asthma-related hospital admissions in the pre-pubertal ages. However, after puberty, asthma is more prevalent and severe in females, and this has been associated with hormonal changes and gender-specific environmental exposures.',
      ),
      p(
        'The role of diet in the aetiology of asthma has been contradictory with observational reviews in children suggesting increased risk of asthma in those with low intake of fruits, vegetables, and dairy fats as well as vitamin C and E. Although not scientifically substantiated, it is believed that infants with shorter periods of breastfeeding (less than 6 months) have an increased risk of developing asthma.',
      ),
      p(
        "Obesity has been shown to be a risk factor as well as a disease modifier for asthma in both children and adults based on some longitudinal studies. In children some studies have shown that the effect of obesity on asthma is not only mediated by the child's obesity but could start in utero as maternal obesity and weight gain in pregnancy could be associated with 15-30% risk of child developing asthma.",
      ),
      p(
        "According to the Hygiene hypothesis, which is one of the explanations for increased prevalence of asthma in the developed world, exposure to some germs and bacterial endotoxins helps mature the young child's immune response thus protecting against asthma and other allergic diseases. This hypothesis is supported by some longitudinal epidemiological studies. Similarly this may explain the increased prevalence of asthma in urban dwellings compared to rural settings as observed in a study by Addo-Yobo et al. On the other hand, children with asthma from lower socioeconomic backgrounds are at increased risk of being exposed to indoor (e.g., house dust mite, cockroaches) and outdoor (biomass fuel, urban pollution) allergens due to poor housing conditions which could exacerbate background asthma symptoms.",
      ),
      p(
        'Exposure to environmental tobacco smoking increases the risk of childhood asthma. In African environments, household exposure to biomass fuel has been associated with increased risk of developing asthma symptoms among rural children.',
      ),
      note(
        'Asthma results from a complex interaction between genetic predisposition and environmental exposures. Atopy is a strong risk factor whiles a host of indoors and outdoors allergens influence the phenotypic expression of asthma.',
      ),
      refs(
        'Global Initiative for Asthma (GINA). Global Strategy for Asthma Management and Prevention, 2020. Available from: www.ginasthma.org',
        'Global, regional, and national incidence, prevalence, and years lived with disability for 328 diseases and injuries for 195 countries, 1990-2016: systematic analysis for the Global Burden of Disease Study, 2016. Lancet 2017; 390:1211-59',
        'Adeloye D, Chan KY, Rudan I, Campbell H. An estimate of asthma prevalence in Africa: a systematic analysis. Croat Med J. 2013; 54(6):519-31.',
        'The Global Asthma Report 2011. Paris, France: The International Union Against Tuberculosis and Lung Disease, 2011.',
        'Bousquet J, Mantzouranis E, Cruz AA, et al. Uniform definition of asthma severity, control, and exacerbations. J Allergy Clin Immunol. 2010;126(5):926-38.',
        'Addo-Yobo EOD, Woodcock A, Allotey A, Baffoe-Bonnie B, Strachan D, Custovic A. Exercise-induced bronchospasm and atopy in Ghana: two surveys ten years apart. PLoS Med. 2007; 4(2): e70.',
        'Global Initiative for Asthma (GINA) Report. Global Strategy for Asthma Management and Prevention, 2021. www.ginasthma.org',
      ),
    ]),

    // ───────────────────────────── 2. Pathophysiology and diagnosis
    sec(C2, 'as-pathophysiology', '2.1', 'Pathophysiology', [
      p('The cardinal features which contribute to the pathophysiology of asthma are:'),
      ul('airway inflammation', 'airway hyperresponsiveness', 'bronchial smooth muscle constriction', 'increased mucus production', 'bronchial airway remodeling'),
      p(
        'Airway inflammation underlies the pathophysiology of asthma. This involves key inflammatory cells such as eosinophils and mast cells which release mediators of inflammation. The mediators induce goblet cells in the airway mucous membrane to produce mucus. They also induce airway smooth muscle contraction, leading to narrowing of the airway. The airway inflammation also leads to bronchial hyperresponsiveness which make people with asthma vulnerable to environmental triggers.',
      ),
      p('There are two main pathways in the pathophysiology of asthma:'),
      ul('immunologic (allergic/ atopic) pathway', 'non-immunologic (non-allergic/ non-atopic) pathway'),
      p('**2.1.1 Immunologic (allergic) pathway**'),
      p(
        'Patients with atopic asthma phenotype are likely to have T-helper 2 lymphocytes (Th2) and IgE mediated immune response to allergens, leading to an exaggerated production of inflammatory mediators. The immune response is characterized by acute (immediate) and late-phase reactions, the latter being responsible for the chronic and persistent effect of allergic inflammation. Persistence of mucosal inflammation induces histological changes in the airway wall, with increasing thickness of the basement membrane, collagen deposition, and bronchial smooth muscle hypertrophy, known as airway remodeling (scarring). This commonly results from poor management of the inflammatory component of asthma.',
      ),
      ul(
        '**Diagram A: Sensitization to allergen phase.** Inhaled allergens (antigens) elicit a Th2 dominated response predisposing to immunoglobulin E (IgE) production and eosinophil recruitment. This is called priming or sensitization.',
        '**Diagram B: Allergen-triggered phase.** On re-exposure to the same antigen (Ag), an immediate reaction is triggered by its interaction with Ag-specific IgE-receptors on mast cells in the airway leading to release of preformed mediators such as histamine, leukotrienes, bradykinins e.t.c. Collectively, either directly or through neuronal reflexes, the released mediators induce bronchospasm, increase vascular permeability, and mucus production, besides recruiting additional mediator-releasing cells from the blood.',
        '**Diagram C: Late phase (3-8 hours).** The arrival of recruited leukocytes (neutrophils, eosinophils, basophils, and Th2 cells) signals the initiation of the late phase of asthma with a further release of mediators which drives the persistence of airway inflammation.',
      ),
      fig('Figure 1: A Model for Allergic Asthma', 15),
      p('**2.1.2 Non-immunologic (non-allergic) pathway**'),
      p(
        'The pathophysiology of non-allergic asthma is less clearly understood. Cell-mediated and other mechanisms are involved. Triggers for non-immunologic asthma include viral infections, emotions, exercise and inhaled irritants.',
      ),
    ]),
    sec(C2, 'as-clinical-features', '2.2', 'Clinical features of asthma', [
      p(
        "The diagnosis of asthma is usually made based on an objective clinical assessment which focuses on characteristic features of asthma in a patient's history. These characteristic features include; recurrent symptoms of wheeze, cough, shortness of breath and chest tightness which vary over time and in intensity. Although wheeze is a cardinal sign in asthma it may not always be present during physical examination. It may also present with recurrent cough as the only symptom which is known as cough variant asthma.",
      ),
      p('The following clinical features are **suggestive of asthma** for both adults, adolescents and children 6-11 years old:'),
      ul(
        'Presence of more than one of these respiratory symptoms; wheeze, shortness of breath, cough, chest tightness.',
        'Recurrent nature of the respiratory symptoms.',
        'Symptoms often worse at night or in the early mornings.',
        'Symptoms being variable over time and in intensity.',
        'Symptoms commonly triggered or made worse by respiratory infections, exercise, allergen exposure, changes in weather, emotions, irritants such as car exhaust fumes, smoke, or strong smells and dust.',
        'positive family history of asthma or atopy and/or personal history of other atopic conditions such as allergic rhinitis or atopic eczema.',
        'Positive response of symptoms to bronchodilators.',
      ),
      p('The following clinical features **reduce the likelihood of asthma** and may suggest alternative diagnoses:'),
      ul(
        'Chronic cough with no associated wheezing or breathlessness.',
        'Shortness of breath associated with dizziness, light-headedness or peripheral tingling sensation.',
        'Stridor',
        'Absence of positive response to a trial of asthma therapy',
        'Clinical features suggestive of other diagnoses such as heart failure and pneumonia',
      ),
    ]),
    sec(C2, 'as-preschool', '2.3', 'Diagnosing asthma in children less than six years (pre-school)', [
      p(
        'It is not always easy to diagnose asthma in children younger than 6 years because signs and symptoms of asthma may mimic other respiratory illnesses and are also unable to perform spirometry reliably. By age three most children would have had an episode of wheezing which commonly results from respiratory tract infections and not necessarily from asthma. Among those who develop recurrent episodes of wheezing, only a third will continue to have persistent wheezing and later grow to develop asthma.',
      ),
      p('**2.3.1 Common wheezing phenotypes in pre-school children**'),
      p('Well recognized wheezing phenotypes do occur in preschool children and may be confused with the diagnosis of asthma. These include:'),
      ul(
        '**Transient wheeze** - wheezing episodes which begin in the first three years of life and may be associated with respiratory tract infections but cease by age six.',
        '**Persistent wheeze** - wheezing that begins in the first three years of life and persist beyond six years.',
        '**Late-onset wheeze** - wheezing episodes that begin after age six.',
      ),
      p('Newer terminologies currently used include:'),
      ul(
        '**Episodic Viral Wheeze (EVW)** - wheezing which usually occurs in association with a common cold. There is no wheeze outside episodes of upper respiratory tract infection.',
        '**Multiple Trigger Wheeze (MTW)** - wheezing that occurs in response to various triggers which include tobacco smoke exposure, exposure to allergens, exercise or upper respiratory tract infections.',
      ),
      p('**2.3.2 Features suggestive of asthma in pre-school children**'),
      p('Among pre-school children with recurrent wheeze the following features are suggestive of asthma:'),
      ul(
        '**Pattern** - wheezing occurs in an episodic pattern together with other respiratory symptoms and is not only limited to episodes of viral infections.',
        '**Personal or family history of atopy or other allergic disorders** - commonly eczema, allergic conjunctivitis and allergic rhinitis, which also starts early in life.',
        '**Identifiable triggers** including allergens, tobacco smoke exposure and respiratory tract infections.',
        '**Reversibility** - Symptoms respond positively after administration of bronchodilator medications.',
      ),
      p('**2.3.3 Features suggestive of alternative diagnoses other than asthma**'),
      ul(
        'Wheezing and other respiratory symptoms present from birth.',
        'Wheezing co-existing with cardiovascular signs.',
        'Focal/segmental lung signs on respiratory system examination.',
        'Failure to respond to an adequate therapeutic trial of asthma medications.',
      ),
      note(
        'The Paediatric Asthma Risk Score is a predictive tool for determining the likelihood of developing asthma in childhood. It can be accessed at https://pars.research.cchmc.org//.',
      ),
      table(
        ['Perinatal and family history / Symptoms and signs', 'Possible differential diagnosis'],
        [
          ['**Perinatal and family history**', ''],
          [
            'Symptoms of wheeze that begin at birth or lung problems that develop in the perinatal period',
            'Chronic lung disease of prematurity; Cystic fibrosis; Developmental abnormalities of the lung (congenital thoracic malformations); Primary ciliary dyskinesia; Neuromuscular conditions',
          ],
          ['Recurrent and severe upper respiratory tract disease associated with recurrent ear discharge', 'Primary immunodeficiency; Primary ciliary dyskinesia'],
          ['**Symptoms and signs**', ''],
          [
            'Chronic wet or productive cough',
            'Tuberculosis; Cystic fibrosis; Bronchiectasis; Protracted bacterial bronchitis; Pulmonary aspiration; Primary ciliary dyskinesia',
          ],
          ['Acute onset wheeze and other respiratory symptoms', 'Acute bronchiolitis'],
          ['Excessive vomiting and worsening night time symptoms', 'Gastro-oesophageal reflux disease'],
          ['Dysphagia', 'Swallowing difficulties/ pulmonary aspiration'],
          ['Inspiratory stridor', 'Tracheal or laryngeal disorder; Vocal cord paralysis'],
          ['Abnormal voice or cry', 'Laryngeal disorder'],
          ['Focal signs', 'Congenital thoracic malformations; Tuberculosis; Bronchiectasis'],
          ['Finger clubbing', 'Cystic fibrosis; Bronchiectasis'],
          ['Failure to thrive', 'Tuberculosis; Cystic fibrosis; Primary ciliary dyskinesia; Gastro esophageal reflux disease'],
        ],
        'Table 2.1 Differential diagnoses of asthma to consider in children less than 11 years',
      ),
    ]),
    sec(C2, 'as-investigations-preschool', '2.4', 'Investigations for asthma appropriate for pre-school children', [
      ol(
        li(
          '**Modified bronchodilator response test**',
          'Children who present with wheezing are initially assessed for respiratory rate, and other signs of respiratory distress which should be documented. Bronchodilators are then administered to a child with suspected asthma symptoms via a nebulizer or metered-dose inhaler with a spacer. Clinical signs such as respiratory rate, wheezing and other respiratory symptoms are re-assessed 10-15 minutes later. An improvement suggests a positive response.',
        ),
        li(
          '**Allergy test**',
          'Skin prick test can be performed in children over age three. A positive skin prick test will support underlying atopy. However, a negative test does not rule out asthma.',
        ),
        li('**Plain chest X-ray.**', 'When there is suspicion of other conditions such as tuberculosis or pneumonia, a chest x-ray may be helpful.'),
      ),
    ]),
    sec(C2, 'as-investigations-6plus', '2.5', 'Investigations to support the diagnosis in adults and children six years and older', [
      p('**1. Pulmonary Function Tests (PFT)**'),
      p(
        'The key measurements in spirometry are Forced Expiratory Volume in the first second (FEV1) and forced vital capacity (FVC) which is the total volume of air forcefully exhaled from the lungs. The ratio of FEV1 over FVC indicates airway obstruction if it is less than 0.7 in an adult or less than 0.9 in a child 6 years and over. The goal of PFT in asthma diagnosis is to document reversible expiratory airflow limitation or obstruction. Commonly, this is done with spirometry and Peak Expiratory Flow Rate (PEFR) measurement.',
      ),
      p(
        'Spirometry is more accurate and gives reproducible results than the PEFR and is preferred for the diagnosis of asthma. It can be performed for patients six years and above. All patients, ideally, should have spirometry done and documented at the time of diagnosis. Expiratory airflow obstruction using spirometry is confirmed by an FEV1/FVC ratio of less than 0.7 (at least once) with FEV1 less than or equal to 80% predicted or a value less than lower limit of normal based on the Global Lung Initiative (GLI) measurements. (Normal FEV1/FVC ratio is > 0.70 - 0.80 in healthy adults, and > 0.90 in children). However, a normal spirometry result does not completely exclude the diagnosis of asthma as patients may be asymptomatic during the period of testing.',
      ),
      p(
        'Peak Expiratory Flow meter may be used for the diagnosis of asthma in the absence of spirometry in low resource settings. In that instance, serial measurements of PEFR are recorded in the mornings and evenings for a period of 2 weeks and diurnal variability of greater than 20% is suggestive of asthma.',
      ),
      box(
        'info',
        'Reversibility',
        'Reversibility in airflow obstruction is confirmed when there is an increase in baseline FEV1 greater than 12% and/ or 200 ml after administration of 200 to 400 micrograms of inhaled salbutamol.',
        'Reversibility may also be confirmed using a peak expiratory flow meter when baseline PEFR measurements increases by more than 20% after inhalation of 200 to 400micrograms of salbutamol or after a 2-week course of oral prednisolone.',
      ),
      p('**2. Bronchial Challenge Test (bronchoprovocative test)**'),
      p(
        'This is performed in adults only where a fall in FEV1 from baseline of greater or equal to 20% after nebulization with standard incremental doses of methacholine or histamine is confirmatory of asthma. (This should be done in a tertiary facility).',
      ),
      p('**3. Fractional exhaled nitric oxide (FENO)**'),
      p(
        'FENO measurement can also be used in the diagnosis of asthma when spirometry is inconclusive (This is done in tertiary facility). A FENO level of 40 parts per billion (ppb) or more is regarded as suggestive of asthma in adults, whiles in children a value of 35 ppb or more is suggestive of asthma.',
      ),
      p('**4. Other supporting investigations** that may help in the diagnosis of asthma include:'),
      ul(
        li('Blood and sputum eosinophil count:', 'Blood eosinophilia greater than 4% or 300-400/microliter or sputum eosinophil >3% supports the diagnosis of asthma.'),
        'Skin prick tests',
        'Specific and total IgE serum levels. This when raised increases the suspicion of asthma.',
        'Chest X-ray may help in detecting precipitants of acute exacerbation of asthma such as pneumonia, as well as excluding other possible differentials of asthma.',
      ),
      p('**2.5.1 Diagnosis of Asthma in Primary Healthcare facilities and Regional Hospitals without spirometry**'),
      p(
        'In the absence of both spirometry and peak expiratory flow meters, probable diagnosis of asthma can be made clinically based on typical asthma symptoms described above. Where possible, patients should be referred to the nearest facility where spirometry can be performed even after initiating asthma therapy.',
      ),
    ]),
    sec(C2, 'as-occupational', '2.6', 'Diagnosis of Occupational Asthma', [
      p(
        "Occupational asthma (OA) is caused by workplace exposure to allergic and non-allergic stimuli. These stimuli include chemical fumes, gases, dust or other substances. There are 2 main forms: sensitizer-induced OA is caused by allergic stimuli and develops after a latency period between first exposure and the onset of symptoms. It results from exposure to a substance at the workplace that a patient is sensitive to. Irritant-induced OA is caused by exposure to non-allergic irritants at the work place.",
      ),
      p(
        'Occupational asthma accounts for approximately 10-25% of adult-onset asthma and is often difficult to diagnose. In some instances, occupational asthma may be preceded by occupational rhinitis for up to about 12 months. Diagnosing occupational asthma early is crucial as this can prevent further exposures and poor outcomes. In all cases of adult-onset asthma a good history must be taken on occupational exposures. An enquiry should be made about improvement of symptoms when away from work or its worsening when at the work place.',
      ),
      p(
        'Aside spirometry, an objective diagnosis of occupational asthma is made by comparing peak expiratory flow measurements at the work place with those recorded outside the work environment.',
      ),
      p(
        "Occupational asthma may have legal and economic implications. Furthermore, it may be necessary to recommend a change in patient's work environment.",
      ),
      refs(
        'Global Initiative for Asthma (GINA). Global Strategy for Asthma Management and Prevention, 2020. Available from: www.ginasthma.org',
        'Kumar, P, Clark, M. (2016) Clinical Medicine (9th Edition) W.B Saunders Company',
        'Patel SJ, Teach SJ. Asthma. Pediatr Rev. 2019; 40(11): 549-67',
        'Asthma: diagnosis, monitoring and chronic asthma management, NICE guideline, Published: 29 November 2017, www.nice.org.uk/guidance/ng80',
        'Saglani S, Menzie-Gow AN. Approaches to Asthma Diagnosis in Children and Adults, Front Pediatr. 2019; 7:148',
        'Kirenga BJ, Schwartz JI, de Jong C, Van der Molen T, Okot-Nwang M. Guidance on the diagnosis and management of asthma among adults in resource limited settings. Afri Health Sci. 2015;15(4):1189-99.',
        'Wells CD, Joo MJ. COPD and asthma: Diagnostic accuracy requires spirometry. J Fam Pract. 2019; 68(2):76-81',
        'Martinez FD, Wright AL, Taussig LM, Holberg CJ, Halonen M, Morgan WJ. Asthma and wheezing in the first six years of life. N Engl J Med, 1995; 332(3): 133-38',
        'Masekela R, Risenga SM, Kitchin OP, et al. Diagnosis of asthma in children: an evidence-based approach to a common clinical dilemma. S Afr Med J. 2018; 108(7):540-45',
        'Bush A, Nagakumar P. Preschool wheezing phenotypes. Eur Med J. 2016; 1(1): 93-101',
        'Chung KF, Wenzel SE, Brozek JL, et al. International ERS/ATS guidelines on definition, evaluation and treatment of severe asthma. Eur Respir J. 2014;43:343-73.',
        'Tarlo SM, Lemiere C. Occupational asthma. N Engl J Med. 2014; 370:640-49.',
      ),
    ]),

    // ───────────────────────────── 3. Management to control symptoms and minimize risk
    sec(C3, 'as-principles', '3.1', 'General principles of asthma management', [
      p(
        'Asthma is a chronic disease underlined by chronic airway inflammation hence its management should be an ongoing process rather than only focusing on the relief of acute episodes and symptoms. This is important for controlling the disease and minimizing adverse outcomes.',
      ),
      p('To ensure the best outcomes in asthma management, each physician-patient encounter must be well structured and based on the following principles:'),
      ul(
        'Assessment of the patient',
        'Goal setting through shared decision making',
        'Provision of personalized control-based management',
        'Physician-patient partnership',
        'Structured review and management of the patient',
      ),
      p('**3.1.1 Assessment of the patient**'),
      p('All asthma patients must be assessed in a structured manner through history taking, physical examination and appropriate investigations.'),
      p('**3.1.2 Goal setting through shared decision making**'),
      p('The goals of asthma management are to:'),
      ul(
        'Achieve control of symptoms',
        'Maintain normal daily activities',
        'Minimize the risk of adverse occurrences in the future including exacerbations, fixed-airflow limitation, side-effects and asthma-related deaths',
        'Identify and manage comorbidities',
      ),
      p(
        'It is important for the healthcare provider and the patient to have clarity about what these goals mean in practice. Many asthma patients are used to experiencing frequent symptoms despite treatment and are not aware that the disease can be controlled with little or no symptoms at all. Uncontrolled asthma is often due to lapses in quality of care, inadequate use of corticosteroids and reliance on bronchodilators.',
      ),
      p(
        "Patients must be informed that controlled asthma ensures normal quality of life, ability to participate in physical activities, having uninterrupted sleep, work and school attendance. Acute exacerbations are also minimized and lung function normalized. They should have control of associated comorbidities such as allergic rhinitis, allergic conjunctivitis and atopic eczema. Through shared decision making, the patient's own goals must be elicited by the healthcare provider and incorporated into the management plan. Shared decision making improves adherence and asthma control.",
      ),
      box(
        'info',
        'Box 3.1 Good control of symptoms means a patient:',
        'experiences no more than 1 daytime symptom per month',
        'has no acute exacerbations in the past month',
        'has no nighttime symptoms which interfere with sleep',
        'being able to participate in daily activities including physical exercise and sports',
      ),
      p('**3.1.3 Personalized control-based asthma management**'),
      p(
        "Personalized treatment must be provided to patients to manage their specific needs in order to achieve asthma control. Patients' adherence and response to the personalized care must be assessed and adjustments made when necessary. The use of a personalized asthma action plan may play an important role in this regard but requires literacy. The effect of low literacy may be minimized by tailored education and involvement of family members. The action plan enables the provider to train the patient and/or their caregivers to take necessary actions to manage the condition.",
      ),
      see('as-action-plan', 'Example of an asthma action plan (Appendix A)'),
      p('**3.1.4 Physician-Patient partnership**'),
      p(
        "There is often a gap between what physicians communicate or intend to communicate and patients' understanding. Physicians must ensure that information given to patients is clearly understood by the patient as this ensures adherence and improves outcomes. Effective communication must aim at empowering patients and/or caregivers for self-management.",
      ),
      box(
        'info',
        'Box 3.2 Strategies for effective communication include:',
        'congenial clinic environment',
        'friendly and non-judgmental attitude',
        'encouraging patients to share their perceptions, beliefs, concerns and expectations',
        'simple communication which avoids complex medical language as much as possible',
        'providing clear information',
        'repeating main messages',
        'use of models, pictures, demonstrations, anecdotes and past experiences',
        "assessing patients' comprehension by asking for feedback",
        'giving encouragement and praise',
      ),
      p('**3.1.5 Structured assessment of the patient**'),
      p('This involves assessment of:'),
      ul(
        'Asthma symptom control over the past 4 weeks with questionnaires such as the GINA symptom control tool and Asthma Control Test. These ask about frequency of asthma symptoms, night time awakening due to asthma symptoms, limitation of activities and frequency of use of reliever during the past 4 weeks',
        'Future risk of adverse events which includes frequency of exacerbations, low lung function tests and side effects of medications. Low lung function tests (peak expiratory flow rate and FEV1) may indicate increased risk of future exacerbations',
        "Patients' knowledge of self-management, types of asthma medications and their roles (relievers and controllers) as well as inhaler technique",
        'Comorbidities such as allergic rhinitis, allergic conjunctivitis, atopic eczema, obesity and gastroesophageal reflux disease',
      ),
      see('as-gina-control', 'GINA assessment of symptom control (Appendix B)'),
    ]),
    sec(C3, 'as-stepwise-adults', '3.2', 'Stepwise treatment of adults and adolescents', [
      p('All adults and adolescents should receive inhaled corticosteroid (ICS)-containing controller treatment, to reduce the risk of serious exacerbations.'),
      p('Global Initiative for Asthma (GINA) recommends the following:'),
      ul(
        'Patients should receive formoterol/ICS or short-acting beta-2 agonists (SABA) and ICS taken together as reliever therapy.',
        '!!SABA only treatment is not recommended!! as it increases the risk of severe exacerbations, and that adding any inhaled corticosteroids (ICS) significantly reduces the risk.',
        '!!Treatment with long-acting beta-2 agonist (LABA) only is not recommended.!!',
      ),
      drug(
        'Budesonide-formoterol',
        'Prescribed in maintenance and reliever therapy (Steps 3-5), or as-needed only (Steps 1-2).',
        'From product information, the maximum recommended total dose in one day is 54 mcg formoterol (12 inhalations of budesonide-formoterol).',
      ),
      drug(
        'Beclomethasone-formoterol',
        'Prescribed in maintenance and reliever therapy (Steps 3-5), or within an asthma action plan.',
        'From product information, the maximum recommended total dose in one day is 36 mcg formoterol (8 inhalations of beclomethasone-formoterol)',
      ),
      drug(
        'Fluticasone-salmeterol',
        'The salmeterol component of this formulation has a slower onset of action than formoterol, therefore it is not recommended for maintenance and reliever therapy.',
      ),
      table(
        ['', 'Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'],
        [
          [
            '**Symptoms**',
            'Symptom less than twice a month',
            'Symptom twice a month or more, but less than 4-5 days a week',
            'Symptoms most days, or waking with asthma',
            'Daily symptoms, or waking with asthma once a week or more, and low lung function',
            '',
          ],
          [
            '**Preferred track: Controller**',
            'As-needed low dose ICS/formoterol',
            'As-needed low dose ICS/formoterol',
            'Daily low dose ICS-formoterol',
            'Daily medium dose ICS-formoterol',
            'Refer to pulmonologist/specialist. High dose ICS-LABA may be considered. LAMA may be added on.',
          ],
          ['**Preferred track: Add-on**', 'Leukotriene antagonist (LTRA)', 'Leukotriene antagonist (LTRA)', 'Leukotriene antagonist (LTRA)', 'Leukotriene antagonist (LTRA)', 'Leukotriene antagonist (LTRA)'],
          ['**Preferred track: Reliever**', 'As-needed low-dose ICS-formoterol', 'As-needed low-dose ICS-formoterol', 'As-needed low-dose ICS-formoterol', 'As-needed low-dose ICS-formoterol', 'As-needed low-dose ICS-formoterol'],
          [
            '**Alternative track: Controller**',
            'Take ICS containing controller when SABA is taken',
            'Daily Low dose ICS',
            'Daily low dose ICS-LABA',
            'Daily medium/ high dose maintenance ICS-LABA',
            'Refer to pulmonologist/specialist. High dose ICS-LABA may be considered. LAMA may be added on',
          ],
          ['**Alternative track: Add-on**', '', 'Leukotriene antagonist (LTRA)', 'Leukotriene antagonist (LTRA)', 'Leukotriene antagonist (LTRA)', 'Leukotriene antagonist (LTRA)'],
          ['**Alternative track: Reliever**', 'As-needed SABA', 'As-needed SABA', 'As-needed SABA', 'As-needed SABA', 'As-needed SABA'],
        ],
        'Table 3.1 Stepwise approach to Asthma Therapy',
      ),
      note('Currently, the approved ICS-LABA for maintenance and reliever therapy are budesonide-formoterol and beclomethasone-formoterol.', 'Note'),
      p(
        'Leukotriene receptor antagonists (LTRA) include montelukast, pranlukast and zafirlukast. They are beneficial as an add-on therapy which may help in achieving asthma control. They may provide additional bronchodilator effect, improve lung function, reduce cough, airway inflammation and acute exacerbation. They may also reduce the symptoms of allergic comorbidities. They are rarely associated with neuropsychiatric side effects especially in children such as hallucinations, hence should be used with caution.',
      ),
      p(
        "Anti-immunoglobulin E (e.g. omalizumab) may be used in patients with severe persistent allergic asthma (Step 5) who are receiving oral corticosteroids and moderate-to-high dose ICS/LABA. It is administered as subcutaneous injection every 2 to 4 weeks and the dosage depends on serum IgE and patient's weight. It may be used in patients who are ≥ 6 years old.",
      ),
      table(
        ['Inhaled corticosteroid', 'Low (mcg/day)', 'Medium (mcg/day)', 'High (mcg/day)'],
        [
          ['Beclometasone dipropionate (pMDI, standard particle, HFA)', '200-500', '>500-1000', '>1000'],
          ['Beclometasone dipropionate (pMDI, extrafine particle*, HFA)', '100-200', '>200-400', '>400'],
          ['Budesonide (DPI)', '200-400', '>400-800', '>800'],
          ['Ciclesonide (pMDI, extrafine particle*, HFA)', '80-160', '>160-320', '>320'],
          ['Fluticasone furoate (DPI)', '100 (one cell spanning Low and Medium)', '', '>200'],
          ['Fluticasone propionate (DPI)', '100-250', '>250-500', '>500'],
          ['Fluticasone propionate (pMDI, standard particle, HFA)', '100-250', '>250-500', '>500'],
          ['Mometasone furoate (DPI)', '200 (one cell spanning Low and Medium)', '', '400'],
          ['Mometasone furoate (DPI)', '200-400 (one cell spanning Low and Medium)', '', '>400'],
        ],
        'Table 3.2 Low, Medium and High doses of ICS, adults and adolescents (12 years and older), total daily ICS dose (mcg) (Adapted from GINA)',
      ),
      warn(
        'Source check: "Mometasone furoate (DPI)" is listed twice with different doses. In GINA the second row is mometasone furoate pMDI (standard particle, HFA). Confirm before publishing.',
        'Check with the source',
      ),
    ]),
    sec(C3, 'as-initial-step', '3.3', 'Choosing appropriate initial step of treatment', [
      p('**Before initiating controller treatment:**'),
      ul(
        'Record evidence of asthma diagnosis.',
        "Record the patient's level of symptom control and risk factors, including lung function assessment.",
        'Teach patient correct inhaler technique',
      ),
      p('**After initiating controller treatment:**'),
      ul(
        "Review patients' responses after 1-2 weeks or earlier depending on clinical urgency",
        'Continue to assess patient for symptom control',
        'Step down treatment once good control has been maintained for 3 months',
        'Plan regular follow-up',
      ),
    ]),
    sec(C3, 'as-self-management', '3.4', 'Teaching Self-Management Skills', [
      p('Self-management education should include personalized Asthma Action Plan (AAP).'),
      p("At every consultation assess and reinforce patients' knowledge of the management of their symptoms. Assess and ensure correct inhaler technique."),
      see('as-aap', '3.9 Asthma action plan (AAP)'),
    ]),
    sec(C3, 'as-medicines', '3.5', 'Types of asthma medicines', [
      p(
        'There are two main types of asthma medications: controllers and relievers. Other medicines may be added when asthma remains uncontrolled despite optimal doses of controller therapy (Table 3.3).',
      ),
      table(
        ['Types of asthma medicines', 'Specific medications', 'Mode of administration'],
        [
          ['Relievers', 'Salbutamol aerosol; Salbutamol nebules', 'Pressurized metered-dose inhaler (pMDI); pMDI via spacer; Nebulizer; Dry powder inhaler'],
          [
            'Controllers',
            'Beclomethasone; Fluticasone; Budesonide; Prednisolone; Formoterol/budesonide; Salmeterol/fluticasone',
            'pMDI; pMDI; turbuhaler; oral; turbulaer; accuhaler, pMDI',
          ],
          ['Add-on therapy', 'Montelucast; Theophylline', 'Oral; Oral'],
          ['Other drugs used in acute exacerbation', 'Magnesium sulphate; Aminophylline; Budesonide nebules', 'IV; IV'],
          ['Biologics', 'Omalizumab (anti-IgE monoclonal antibody); Mepolizumab (anti-IL 5 receptor blocker)', 'Subcutaneous injection; Subcutaneous injection'],
        ],
        'Table 3.3 Types of asthma medicines',
      ),
    ]),
    sec(C3, 'as-inhaler', '3.6', 'Inhaler technique and adherence', [
      p('Correct inhaler technique ensures effective delivery of inhaled medication to the airway. Poor inhaler technique is associated with poor asthma control.'),
      p('**To ensure effective inhaler use:**'),
      ul(
        'The patient must be guided to choose the most appropriate and easy to use inhaler device. Where necessary, prescribe a spacer for pressurized metered-dose inhaler (pMDI).',
        'Check inhaler technique at every opportunity. Ask the patient to demonstrate. Check against a device-specific checklist.',
        'Correct lapses identified.',
      ),
      p('**Assess and ensure adherence**'),
      p(
        'Poor adherence with medications has to be looked out for at each clinic visit and admission through empathetic questioning. Some successful strategies to combat this include shared decision making with the patient on medications and their doses.',
      ),
    ]),
    sec(C3, 'as-children', '3.7', 'Stepwise treatment and control of asthma in children 11 years and younger', [
      p('**Choosing appropriate initial step of treatment**'),
      p(
        'The age of the child, his/her ability to follow instructions as well as the ability of the caregiver to follow specific inhaler manoeuvres should be considered. The choice of the initial medication depends on the careful evaluation of the above factors.',
      ),
      p('**Low dose inhaled corticosteroids**'),
      p(
        "ICS only is the recommended option for children less than 6 years. In this age group !!using ICS/LABA is not recommended!! (GINA). Children 6-11 years may use ICS only or ICS/LABA. The initial dose of the ICS should be based on the patient's symptoms as in Tables 3.4 and 3.5. Once control is achieved, the dose should then be titrated to the lowest effective dose to maintain the control.",
      ),
      table(
        ['', 'Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'],
        [
          [
            '**Symptoms**',
            'Symptom less than twice a month',
            'Symptom twice a month or more, but less than 4-5 days a week',
            'Symptoms most days, or waking with asthma',
            'Daily symptoms, or waking with asthma once a week or more, and low lung function',
            'Uncontrolled symptoms with step 4 treatment',
          ],
          [
            '**Preferred track (Option A): Controller**',
            'low dose ICS whenever SABA taken',
            'Regular low dose ICS',
            'Low dose ICS-LABA OR Medium dose ICS OR Very low dose ICS-formoterol as MART*',
            'Medium dose ICS-LABA OR low dose ICS-formoterol as MART (Refer to specialist)',
            'Refer to specialist. Medium/High dose ICS-LABA OR Add-on therapy may be considered (anti-Ig E)',
          ],
          ['**Option A: Add-on**', '', 'LTRA', 'LTRA', 'LTRA', 'LTRA'],
          ['**Option A: Reliever**', 'SABA as-needed', 'SABA as-needed', 'ICS-formoterol as MART', 'ICS-formoterol as MART', 'ICS-formoterol as MART'],
          [
            '**Other controller therapies (Option B): Controller**',
            'Daily Low dose ICS',
            'Daily low dose ICS plus ICS whenever SABA is taken.',
            'Daily medium dose ICS plus ICS whenever SABA is taken.',
            'Daily medium/high dose maintenance ICS (Consider switching to ICS-LABA and refer to specialist)',
            'Refer to specialist.',
          ],
          ['**Option B: Add-on**', '', 'Leukotriene antagonist (LTRA)', 'Leukotriene antagonist (LTRA)', 'Leukotriene antagonist (LTRA)', 'Leukotriene antagonist (LTRA)'],
          ['**Option B: Reliever**', 'As-needed SABA', 'As-needed SABA', 'As-needed SABA', 'As-needed SABA', 'As-needed SABA'],
        ],
        'Table 3.4 Stepwise approach to Asthma Therapy for children 6-11 years',
      ),
      note('*MART - Maintenance and Reliever Therapy with the same inhaler'),
      table(
        ['', 'Step 1', 'Step 2', 'Step 3', 'Step 4'],
        [
          [
            '**Symptoms**',
            'Infrequent viral induced wheezing and no/few interval symptoms.',
            '3 or more asthma exacerbation in a year',
            'Confirmed asthma with partial or poorly controlled symptoms',
            'Asthma not controlled on double dose ICS',
          ],
          ['**Controller**', 'No controller therapy needed', 'Daily low dose ICS via spacer and mask', 'Double the low dose ICS via spacer and mask', 'Refer to specialist'],
          ['**Add-on**', '', 'LTRA', 'LTRA', 'LTRA'],
          ['**Reliever**', 'SABA', 'SABA', 'SABA', 'SABA'],
        ],
        'Table 3.5 Stepwise approach to Asthma Therapy for children less than 6 years',
      ),
      table(
        ['Inhaled corticosteroid', 'Low (mcg/day)', 'Medium (mcg/day)', 'High (mcg/day)'],
        [
          ['Beclometasone dipropionate (CFC)', '100-200', '>200-400', '>400'],
          ['Beclometasone dipropionate (HFA)', '50-100', '>100-200', '>200'],
          ['Budesonide (DPI)', '100-200', '>200-400', '>400'],
          ['Budesonide (nebules)', '250-500', '>500-1000', '>1000'],
          ['Ciclesonide (HFA)', '80', '>80-160', '>160'],
          ['Fluticasone furoate (DPI)', 'n.a.', 'n.a.', 'n.a.'],
          ['Fluticasone propionate (DPI)', '100-200', '>200-400', '>400'],
          ['Fluticasone propionate (HFA)', '100-200', '>200-500', '>500'],
          ['Mometasone furoate', '110', '!!2220-<440!!', '≥440'],
          ['Triamcinolone acetonide', '400-800', '>800-1200', '>1200'],
        ],
        'Table 3.6 Low, medium and high ICS doses for children 6-11 years, total daily dose (mcg) (Adapted from GINA)',
      ),
      warn(
        'Source check: mometasone furoate medium dose is printed as "2220-<440" mcg, which is a typo (GINA: ≥220-<440). Confirm before publishing.',
        'Check with the source',
      ),
      p('**Long-Acting Beta-2 Adrenergic Agonists (LABA)**'),
      p('As in adults and adolescents, LABA should not be used as monotherapy for asthma but only in fixed-dose combination with ICS.'),
      p('**Leukotriene Receptor Antagonists (LTRAs)**'),
      p(
        'LTRAs can be used as an add-on therapy for patients in this age group who are not controlled on ICS or ICS/LABA treatment. They are especially effective in exercise-induced asthma and comorbidities such as allergic rhinitis.',
      ),
    ]),
    sec(C3, 'as-review', '3.8', 'Review of response and maintenance therapy', [
      p(
        'After initiating therapy, follow-up regularly to assess response and risk of exacerbation. The frequency of the follow up can range from 1-3 months, depending on the level of asthma control. At every visit, assess asthma control using appropriate questionnaire.',
      ),
      see('as-gina-control', 'GINA assessment of symptom control (Appendix B)'),
      p('**Stepping up treatment**'),
      p(
        "If despite good adherence and proper use of the medication, the patient's asthma remains uncontrolled, there is the need to step up the treatment. The method for stepping up depends on the age group as shown in the Tables 3.4 and 3.5. Any step-up should be considered as a therapeutic trial and the patient should be re-evaluated within 4-8 weeks for response. Before considering a step up one should confirm that the symptoms are due to asthma and no other differential diagnoses.",
      ),
      p('**Stepping down treatment**'),
      p(
        'Asthma treatment can be stepped down if control has been achieved on moderate to high doses of ICS or ICS/LABA for at least 3-6 months and the risk of exacerbation is considered very low. The patient or caregiver should be made to understand that stepping down is a therapeutic trial and that recurrence of symptoms should be reported and managed as recommended in the asthma action plan. The patient should be review in 4-8 weeks.',
      ),
      p(
        'As an example, if the child is on twice daily medium dose of ICS, this can be stepped down to twice daily low dose ICS, or a patient on medium dose ICS-LABA is stepped down to low dose ICS-LABA.',
      ),
    ]),
    sec(C3, 'as-aap', '3.9', 'Asthma action plan (AAP)', [
      p(
        'The use of a written asthma action plan is to help the patient become more involved in their management, recognize symptoms early and respond appropriately. Signs and symptoms vary from person to person, so one needs to work with his or her doctor/ healthcare provider to identify signs and symptoms of worsening asthma and act appropriately.',
      ),
      p('Asthma action plan is a written individualized worksheet that shows an individual with asthma the steps to take to keep the condition from getting worse. It includes:'),
      ul(
        'Factors that make the asthma worse (triggers)',
        'Medications to take to treat the asthma with specific names',
        'Symptoms or peak flow measurements that indicate worsening asthma',
        'Medications to take based on signs, symptoms, or peak flow measurement',
        'Telephone numbers for an emergency contact',
      ),
      p('Developing Asthma Action Plan must take into account different sociocultural factors using these four components below:'),
      ul(
        'Skills training to use inhaler devices effectively',
        'Encouraging adherence with medications, appointments, and advice with agreed management strategies.',
        'Providing information on asthma',
        'Training in guided self-management with self-monitoring of symptoms or peak flow meter measurements',
      ),
      p('AAP is under-utilized and efforts must be made to incorporate this into asthma care at all levels and should also be updated when treatments are changed.'),
      see('as-action-plan', 'Asthma action plan template (Appendix A)'),
      refs(
        'Wilson SR, Strub P, Buist AS, et al. Shared treatment decision making improves adherence and outcomes in poorly controlled asthma. Am J Respir Crit Care Med. 2010;181(6):566-577.',
        'Zheng LF, Koh YLE, Sankari U, Tan NC. Asthma care based on Chronic Care Model in an aging Asian community. NPJ Prim Care Respir Med. 2019;29(1):16.',
        'Myers L, Murray RK. Overcoming Health Literacy Barriers to Improve Asthma Inhaler Therapy Adherence. Ann Am Thorac Soc. 2019;16(2):182-186.',
        'Poureslami I, Nimmon L, Doyle-Waters M, et al. Effectiveness of educational interventions on asthma self-management in Punjabi and Chinese asthma patients: a randomized controlled trial. J Asthma. 2012;49(5):542-551.',
        'Tesse R, Borrelli G, Mongelli G, Mastrorilli V, Cardinale F. Treating Pediatric Asthma According Guidelines. Front Pediatr. 2018;6:234.',
        'Chipps BE, Bacharier LB, Farrar JR, et al. The pediatric asthma yardstick. Ann Allergy Asthma Immunol. 2018;120(6):559-579.e11.',
        'Roche N, Morel H, Martel P, Godard P. Clinical practice guidelines: medical follow-up of patients with asthma--adults and adolescents. Respir Med. 2005;99(7):793-815.',
        'British Thoracic Society Scottish Intercollegiate Guidelines Network. British Guideline on the Management of Asthma. Thorax. 2008;63 Suppl 4:iv1-iv121.',
        'Global Initiative for Asthma (GINA). Global Strategy for Asthma Management and Prevention, 2020. Available from: www.ginasthma.org',
        'The Royal College of Physicians. Why Asthma Still Kills - The National Report of Asthma Deaths. 2014. 1-115 p.',
      ),
    ]),

    // ───────────────────────────── 4. Acute asthma exacerbation
    sec(C4, 'as-exacerbation', '4.1', 'Definition, risk factors and objectives of treatment', [
      p(
        "Acute asthma exacerbations are episodes of worsening symptoms (shortness of breath, wheezing, chest tightness and cough) and or decline in lung function compared to an individual's usual status that is often sufficient to warrant a change in treatment of the patient. It may occur in a person known to have asthma or occur for the first time in a person with no previous asthma symptoms. A patient who uses a peak flow meter to monitor his or her condition may record declining peak expiratory flow rates with or without apparent worsening of symptoms as an acute exacerbation. Asthma exacerbation may also be referred to as flare-up, asthma attack or acute asthma.",
      ),
      p(
        'Asthma exacerbation is marked by the onset of acute airway inflammation when a patient is exposed to a trigger or may represent worsening of chronic airway inflammation. This results in worsening bronchoconstriction, mucus production and varying degrees of impaired gaseous exchange with the risk for progression to respiratory failure and death. The course of the condition is variable and may progress from mild-moderate through severe to life-threatening illness.',
      ),
      p('**4.2 Risk factors for asthma exacerbation**'),
      p('Exposure to triggers such as:'),
      ul(
        'Air pollutants and irritants (dust, perfume, fumes and cigarette smoke)',
        'Environmental allergens (pollen, cockroach, house dust mites, dander of pets)',
        'Food allergens',
        'Physical exercise',
        'Emotions and stress',
        li(
          'Other patient specific triggers include:',
          'upper and lower respiratory tract infections (viruses and bacteria)',
          'Over-reliance on salbutamol and other bronchodilators',
          'Poor patient technique in the use of inhaled medications',
          'Lack of or inadequate use of inhaled corticosteroids',
          'Poorly controlled asthma',
          'Poor compliance with asthma medications',
        ),
      ),
      p('**4.3 Objectives of treatment of acute asthma exacerbation**'),
      ul(
        'To objectively assess and categorize severity of the exacerbation',
        'To provide immediate and effective treatment to relieve symptoms, decrease respiratory distress and improve oxygenation',
        'To initiate or adjust controller treatment to prevent relapse of the exacerbation and to achieve and maintain control of symptoms',
        'To restore and maintain normal quality of life',
        'To develop a plan for ongoing management',
      ),
      p('The management of an acute exacerbation can be at the patient/ caregiver level, primary care or secondary and tertiary health facility level.'),
    ]),
    sec(C4, 'as-self-management-acute', '4.4', 'Guided self-management of acute asthma exacerbation', [
      p('**4.4.1 What is guided self-management?**'),
      p(
        'Asthma exacerbations tend to occur outside the hospital setting. It is therefore important to empower patients and caregivers with knowledge on how to recognize early symptoms which could be self-managed and to initiate appropriate actions to relieve symptoms and prevent deterioration. They should recognize signs of severe exacerbation which should prompt an immediate visit to a healthcare facility. Guided self-management is known to significantly reduce severe asthma requiring hospitalization and missed work/school days.',
      ),
      p('**4.4.2 Tools for effective guided self-management**'),
      p('The following are required for effective guided self-management.'),
      ul(
        'Training of patients and/ or caregivers in self-management including knowledge of reliever and controller medicines and their appropriate usage as well as the correct inhaler technique.',
        'Personalized asthma action plan - self-monitoring of symptoms and monitoring with peak expiratory flow meter',
        'Spacer device with mask and how to use and care for them.',
        'Contact of health facility and a trained health care provider.',
      ),
      p('**The asthma action plan**'),
      p(
        'The asthma action plan is a simple tool that can be used to help patients manage their asthma at home and guide the patients on the steps or actions that they need to take when they are not achieving adequate control. It has been shown to reduce exacerbations and improve quality of life. The asthma action plan contains instructions which are placed into three different colour zones.',
      ),
      p(
        "These zones; green, yellow, and red indicate severity of exacerbation and the appropriate timely action to take. Patients can own peak flow meters and be trained to use them. The peak flow meter measures lung function and may show the severity of asthma exacerbation better than symptoms, especially among patients with poor perception of symptoms. When patients use their peak flow meter and their measurements fall on a particular colour/ zone on the peak flow meter, the asthma action plan provides the necessary actions or steps that the patient needs to take. These sets of actions or instructions are individualized and agreed upon by both the patient and the healthcare provider in shared decision making. The use of the asthma action plan and peak flow may be limited by patients' health-related literacy. In cases of patients who are unable to read and understand, educated family members who live with the patients may be involved and trained on the use of the action plan and peak flow meter.",
      ),
      see('as-action-plan', 'Asthma action plan template (Appendix A)'),
      table(
        ['Description', 'Controller treatment', 'Reliever treatment', 'Health facility visit'],
        [
          [
            '**GREEN:** No symptoms. Peak flow rate ≥ 80% of personal best.',
            'Continue controller treatment as prescribed. All patients should be on controller medication.',
            'Reliever not needed',
            'Maintain scheduled follow-up',
          ],
          [
            '**YELLOW:** Shortness of breath, chest tightness, wheezing and / or cough. Peak flow rate 50-80% of personal best. The patient is able to perform daily activities.',
            'If exacerbation occurred in spite of the patient using regular controller treatment, double the dose if on formoterol/ICS or ICS alone over the next 2-4 weeks. If on salmeterol/ICS inhaler, do not double dose but add on a separate ICS inhaler such as fluticasone, beclomethasone or budesonide.',
            'Take reliever medicine every 20 minutes until symptoms subside. Children ≥ 12 years and adults should use as-needed formoterol/ ICS. Children < 12 years may use as-needed salbutamol pMDI and additional dose of inhaled corticosteroid such as beclomethasone, budesonide or fluticasone (preferably pMDI via spacer).',
            'Seek hospital care within 1 week',
          ],
          [
            '**RED:** Worsening shortness of breath despite initial self-treatment or severe shortness of breath. Patient unable to perform daily activities. Peak flow rate < 50% of personal best.',
            'Use high dose controller medication as above',
            'Use salbutamol inhaler with a spacer (2-6 puffs for children less than 6 years and 4-10 for older children and adults) every 20 minutes while taking urgent steps to go to a health facility.',
            '!!Visit a hospital for urgent care.!!',
          ],
        ],
        'Box 4.1 Guided self-management',
      ),
      p(
        'The use of salbutamol alone for treatment of asthma exacerbation is not recommended as it is ineffective in preventing progression to severe exacerbation. The preferred reliever therapy for patients 12 years and older is as-needed formoterol/inhaled corticosteroid (formoterol/ ICS). This therapy is more effective than salbutamol only for relieving mild exacerbations and significantly reduces the risk of their progression to severe exacerbation.',
      ),
      p(
        "The maximum recommended total single day's dose of formoterol is 12 puffs (72g) if using formoterol/budesonide and 8 puffs (48g) if using formoterol/beclomethasone. Alternatively, patients may use salbutamol pressurized metered dose inhaler (pMDI) with an inhaled corticosteroid such as beclomethasone, fluticasone or budesonide or salmeterol/fluticasone.",
      ),
      danger(
        'Source typo: "72g" and "48g" of formoterol are printed without the micro sign. Section 3.2 of the same guideline gives the daily maximum as 54 mcg (budesonide-formoterol, 12 inhalations) and 36 mcg (beclomethasone-formoterol, 8 inhalations). The units and the totals do not agree. A clinician must confirm the correct figures before publishing.',
        'Check with the source',
      ),
    ]),
    sec(
      C4,
      'as-facility',
      '4.5',
      'Management of acute exacerbation in health facilities',
      [
        p('The management of asthma exacerbation in health facilities involves:'),
        ul(
          'Initial assessment and categorization of severity of the exacerbation',
          'Administration of oxygen in patients with low oxygen saturation (<92-94%)',
          'Administration of bronchodilators',
          'Administration of corticosteroids',
          "Assessment of patient's response and further actions based on patient's response.",
          'Further management of the recovered patient.',
        ),
        p('**Figure 4.1 Algorithm for treatment of acute asthma exacerbation in health facilities**'),
        flow(
          { id: 'as-f1', kind: 'action', title: 'Ensure upper airway is not obstructed and patient is breathing' },
          { id: 'as-f2', kind: 'action', title: 'Give oxygen if SpO2 < 94%; if no pulse oximeter give to all with signs of respiratory distress' },
          {
            id: 'as-f3',
            kind: 'drug',
            title: 'Administer short-acting β2-agonists by pressurized metered dose inhaler (MDI) or nebulization depending on the severity of exacerbation',
          },
          { id: 'as-f4', kind: 'drug', title: 'Consider starting ipratropium bromide in those with a severe exacerbation or not improving on salbutamol alone.' },
          { id: 'as-f5', kind: 'drug', title: 'Start corticosteroids within 1 hour' },
          { id: 'as-f6', kind: 'action', title: 'Evaluate treatment response' },
          { id: 'as-f7', kind: 'action', title: 'Consider other alternative treatment' },
        ),
        see('as-response', '4.5.3 Assessment of response to initial treatment'),
      ],
      { tone: 'critical' },
    ),
    sec(
      C4,
      'as-initial-assessment',
      '4.5.1',
      'Initial assessment and severity',
      [
        p(
          'The patient who presents with asthma exacerbation must be initially assessed to ascertain the diagnosis and to determine its severity while treatment is initiated. Ask about previous asthma diagnosis or episodes of symptoms or treatment suggestive of asthma. Ask about present symptoms while observing the patient (shortness of breath, wheezing, chest tightness and cough are suggestive of asthma).',
        ),
        p(
          "Quick physical examination should include assessment of signs of respiratory distress, pulse oximetry, respiratory rate, pulse rate, auscultation of the chest and blood pressure measurement. If available, peak expiratory flow rate (PEFR) should be measured and compared with the patient's personal best.",
        ),
        p('Assess the level of consciousness. Note any signs which may suggest an alternative diagnosis.'),
        p('**Physical examination**'),
        ul(
          'Assess airway, breathing and circulation (ABC).',
          'Measure oxygen saturation.',
          'Assess signs of asthma severity including ability to complete sentences in one breath, use of accessory muscles of respiration, tachypnea, tachycardia, central cyanosis, level of consciousness and temperature.',
          'Features of alternative diagnosis.',
          'Any evidence of asthma complication (e.g. pneumothorax).',
        ),
        p('Based on findings, the exacerbation should be categorized as mild/moderate, severe or life-threatening as in Box 4.2.'),
        box(
          'info',
          'Box 4.2 Mild to moderate exacerbation',
          'Able to complete sentences in one breath',
          'Prefers sitting to lying',
          'Uses accessory muscles of respiration',
          'Respiratory rate may be increased but less than 30/min',
          'SPO2 on room air >94%',
          'Pulse rate <120/min',
          'Peak expiratory flow rate > 50% personal best or predicted',
        ),
        box(
          'urgent',
          'Box 4.2 Severe',
          'Unable to complete sentences in one breath',
          'Sits hunched forwards',
          'Agitated',
          'Respiratory rate >30/min *',
          'Accessory muscles being used in breathing',
          'Pulse rate >120/min (this may vary for children) *',
          'SpO2 on air <90-92%*',
          'Peak expiratory flow rate ≤ 50% of personal best or predicted',
        ),
        box(
          'critical',
          'Box 4.2 Life threatening',
          'Drowsiness, confusion, coma',
          'Exhaustion, feeble respiratory effort',
          'Silent chest, cyanosis, SPO2 < 90-92%*',
          'Bradycardia, hypotension, arrhythmia',
          'PCO2 ≥ 4.6kPa (~35mmHg), PO2 ≤ 8kPa (60mmHg)',
        ),
        note(
          '* In children, respiratory and pulse rates vary according to age. Respiratory rate (2 months-1 year: >50/min; 1-5 years: >40/min; > 5 years, >30/ min). Pulse rate (2 months-1 year: >160/min; 1-5 years: > 140/min; 6-8 years: >130/min; >120/min)',
          'Children',
        ),
        warn(
          'Source check: the last pulse-rate cut-off ">120/min" has no age group in the source (presumably older than 8 years). "Uses accessory muscles of respiration" is listed under mild to moderate as well as severe.',
          'Check with the source',
        ),
      ],
      { tone: 'urgent' },
    ),
    sec(
      C4,
      'as-first-line',
      '4.5.2',
      'Initial first line drugs used in the management of asthma exacerbation',
      [
        p('**Oxygen therapy**'),
        p(
          'It must be noted that fatality in asthma is due to cardiac arrest from hypoxia and respiratory acidosis for which reason the early reversal of the hypoxia is extremely important. Oxygen should be initiated in patients with oxygen saturation less than 94% to achieve and maintain oxygen saturation of greater than 94% in all patients. When pulse oximeters are not available, patients in respiratory distress should be administered oxygen.',
        ),
        p(
          'Oxygen is administered via nasal prongs or face masks. When a patient who requires oxygen is stabilized, consider weaning him or her off oxygen if target oxygen is achieved and is maintained on room air.',
        ),
        p('**Bronchodilators**'),
        drug(
          'Salbutamol',
          'Should be administered to all patients via salbutamol pressurized dose inhaler (pMDI) with spacer device or as nebulized salbutamol.',
          'pMDI with spacer: children less than 6 years old should be administered **2-6 puffs** and older children and adults, **4-10 puffs**. Puffs are administered one after the other and patients take 5 to 10 breaths per puff.',
          'Alternatively nebulized salbutamol may be administered at doses of **2.5-5 mg**. In all cases of nebulization, safety precautions must be adhered to.',
        ),
        drug(
          'Ipratropium bromide (nebulized)',
          'In severe and life-threatening cases, nebulized ipratropium bromide 250-500g should be added to salbutamol during nebulization. This provides additional benefits and better outcomes.',
        ),
        danger('Source typo: ipratropium dose printed as "250-500g" without the micro sign (presumably 250-500 micrograms). Confirm before publishing.', 'Check with the source'),
        p(
          'Bronchodilators are administered at intervals of 20 minutes for up to 1 hour initially until the patient has adequate response. Patients who remain dyspnoeic or deteriorate after the initial 1 hour of recommended treatment should be admitted for in-patient management or referred to higher level facilities for specialist care.',
        ),
        drug('Magnesium sulphate (IV)', 'These patients may be given intravenous magnesium sulphate 1.2-2g slowly over 20 minutes (25-50mg/kg, maximum 2g in children).'),
        drug(
          'Aminophylline (IV)',
          "IV aminophylline may be used with caution and patients' pulse and/or electrocardiogram must be monitored for possible arrhythmias.",
          'Recommended dose is 5mg/kg as a bolus over 5 minutes and followed with infusion given per kg body weight.',
        ),
        warn('Source check: the aminophylline infusion rate is not given in the source ("infusion given per kg body weight").', 'Check with the source'),
        p(
          'When patients improve, they may be put on as-needed salbutamol pMDI with or without spacer. IV salbutamol and adrenaline (SC or IV) may be used in severe asthma under specialist care.',
        ),
        p('**Corticosteroids**'),
        p(
          'Corticosteroids should be initiated within 1 hour. Oral prednisolone and IV hydrocortisone are common options. These are similar in efficacy with comparable onset of action. However, prednisolone is preferred because it has a longer duration of action and the oral route of administration is easier. IV hydrocortisone may be administered to patients who are unable to take oral prednisolone for reasons including vomiting, impaired consciousness and patients not wanting to take the oral prednisolone.',
        ),
        drug(
          'Prednisolone (oral)',
          '**Children less than 12 years:** 1-2mg/kg/dose (maximum 40mg) for 3-5 days',
          '**Older children and adults:** 1mg/kg (maximum 50mg) for 5-7 days',
          'Longer duration of treatment is usually not required and may not provide additional benefits. It is important to note that stepping down the dosing of prednisolone is not required when it is taken for less than 2 weeks. With the exception of the initial dose of prednisolone at presentation, subsequent doses should be taken as a single dose after breakfast.',
        ),
        drug(
          'Hydrocortisone (IV)',
          '**Adults:** 100-200mg 6 hourly',
          '**Children:** 5-7mg/kg 6 hourly',
          'Oral prednisolone should be started as soon as the patient is able to tolerate it.',
        ),
        drug(
          'Budesonide (nebulized)',
          '**Children from 6 months:** 0.25-0.5mg 12 hourly',
          '**Adults:** 0.5-1mg 12 hourly',
          'Nebulized corticosteroids provide additional benefits and are recommended in the management of acute asthma exacerbation. They reduce the need for admission and minimize the recurrence of symptoms. They have a quicker onset of action compared to oral and IV corticosteroids. They also have less systemic side effects. They may be particularly useful in severe and life-threatening asthma.',
        ),
        p(
          'Patients must be educated on the common side effects of corticosteroids that are often taken for granted such as sleep disturbances, increased appetite, gastro-oesophageal reflux and mood changes. Patients with asthma exacerbation should be managed based on severity of the exacerbation as below.',
        ),
        table(
          ['', 'Mild-moderate', 'Severe', 'Life-threatening'],
          [
            [
              '**Oxygen therapy**',
              'Monitor SpO2. Give oxygen if SpO2 < 92% to achieve and maintain SpO2 at 94-98%.',
              'Give intranasal oxygen to maintain SpO2 at 94-98%',
              'Give intranasal oxygen (use non-rebreather mask with 100% oxygen if available) to maintain SpO2 at 94-98%.',
            ],
            [
              '**Reliever therapy/ bronchodilation**',
              'Salbutamol inhaler (pMDI) 4-10 puffs via spacer every 20 minutes till improvement for up to 1 hour. Or if spacer not available, nebulized salbutamol 2.5 to 5mg every 20 minutes for up to 1 hour. Refer to higher level facility if worsening or no improvement after 1 hour',
              'Administer nebulized salbutamol and ipratropium bromide every 20 minutes within the first 1 hour. If the patient remains dyspnoeic, consider intravenous magnesium sulphate 1.2-2g slowly over 20 minutes (25-50mg/kg, maximum 2g over 20 minutes in children).',
              'Administer nebulized salbutamol and ipratropium bromide every 20 minutes for 1 hour; driven by oxygen). Consider IV magnesium sulphate if the patient remains dyspnoeic. If at a primary care facility with limited facilities and expertise, transfer to a higher facility while administering salbutamol and oxygen.',
            ],
            [
              '**Corticosteroids**',
              'Oral prednisolone 1mg/kg (maximum 50mg) for 5-7 days for adults; 1-2 mg/day (maximum 40mg) for 3-5 days for children.',
              'Give oral prednisolone 1mg/kg (maximum 50mg) for 5-7 days to adults; 1-2 mg/kg (maximum 40mg) for 3-5 days to children. If a patient is unable to take oral corticosteroids, give IV hydrocortisone 100-200mg (5-7mg/kg in children, maximum 400mg); followed by a course of prednisolone when the patient is able to swallow. Patients may be given nebulized corticosteroids such as budesonide.',
              'Give intravenous hydrocortisone. Nebulized corticosteroids such as budesonide may be administered',
            ],
          ],
          'Box 4.3 Management based on severity of acute asthma exacerbation',
        ),
        warn(
          'Source check: Box 4.3 gives the children\'s prednisolone dose for mild-moderate exacerbation as "1-2 mg/day", while the text and the severe column give 1-2 mg/kg. Box 4.3 gives hydrocortisone "maximum 400mg" without a frequency; the text gives 6 hourly. Confirm before publishing.',
          'Check with the source',
        ),
      ],
      { tone: 'critical' },
    ),
    sec(C4, 'as-response', '4.5.3', 'Assessment of response to initial treatment', [
      box(
        'info',
        'Box 4.4 Signs of adequate response to treatment of acute asthma exacerbation',
        'No longer having shortness of breath',
        'Improved respiratory signs',
        'No signs of respiratory distress',
        'SpO2 greater than 94%',
        'Peak expiratory flow rate > 75% of personal best or predicted',
      ),
      box(
        'urgent',
        'Box 4.4 Signs of poor response to initial treatment of acute asthma exacerbation',
        'persistence of shortness of breath',
        'inability to complete sentences',
        'SPO2 less than 94%',
        'No improvement in initial PEFR',
      ),
      see('as-admission', '4.6 Criteria for admission and in-patient management'),
      see('as-discharge', '4.7 Discharge criteria'),
    ]),
    sec(
      C4,
      'as-admission',
      '4.6',
      'In-patient management after initial treatment',
      [
        p('**4.6.1 Criteria for admission**'),
        ul(
          'Patients not improving and/ or in respiratory distress after initial 1 hour of treatment.',
          'Severe or life-threatening asthma (refer Box 4.2).',
          'Pre-treatment PEFR or FEV1 < 25% personal best or predicted or post-treatment PEFR or FEV1 less than 40% of personal best or predicted.',
          'Past history of severe exacerbation requiring ICU admissions and/or intubation.',
        ),
        see('as-initial-assessment', 'Box 4.2 Categorization of severity'),
        p('**4.6.2 In-patient management**'),
        p('**Oxygen therapy**'),
        p('Continue oxygen therapy if needed, titrating to achieve and maintain a target of 94-98%. Wean off oxygen when the target is maintained off oxygen.'),
        p('**Bronchodilator/ reliever therapy**'),
        p(
          'Continue as-needed salbutamol pMDI via spacer 4-10 puffs (2-6 puffs in children less than 6 years) or by nebulization. If spacer is not available, patients may take 2-4 puffs of salbutamol pMDI as-needed (1-2 puffs in children less than 6 years). Nebulization at regular intervals (e.g., 2-4 hourly) plus as needed nebulization may be considered. However, administering the salbutamol as-needed by the patient is preferred to regular intermittent nebulization as it produces better outcomes. Patients 12 years and older may start as-needed formoterol/ICS as reliever therapy.',
        ),
        p('**Controller therapy**'),
        p(
          'As soon as possible, patients should start daily controller ICS or ICS/LABA. For example, a child under 6 years may start beclomethasone inhaler with spacer. Older children and adults should start ICS or ICS/LABA.',
        ),
        p(
          'Assess clinical response frequently. Patients who do not respond to treatment or deteriorate should be transferred to higher centres capable of providing intensive care. When symptoms improve and discharge criteria are met, consider discharge.',
        ),
        box(
          'critical',
          'Indications for admission to Intensive Care Unit (ICU)',
          'Altered sensorium',
          'Use of continuous inhaled beta-agonist therapy',
          'Exhaustion',
          'Markedly decreased air entry',
          'Rising PCO2 despite treatment',
          'Presence of high-risk factors for a severe attack (previous ICU admissions, previously ventilated etc.)',
          'Failure to improve despite adequate therapy',
        ),
      ],
      { tone: 'urgent' },
    ),
    sec(C4, 'as-discharge', '4.7', 'Discharge criteria and follow up', [
      p('Patient may be discharged if:'),
      ol(
        'Symptoms have improved, and the patient is stable for at least 4 hours after the last dose of short acting β2-agonist (SABA).',
        'SPO2 > 94% on room air for at least 12 hours',
        'PEFR > 75% of personal best or predicted',
        'Good home support is assured',
      ),
      p('**4.8 Follow up after discharge**'),
      p('Patients should be reassessed 1 to 2 weeks after discharge.'),
      ul(
        'Assess asthma control and adjust medication if necessary',
        'Discuss goals of treatment with the patient',
        "Assess patient's or caregiver's ability to self-manage",
        'Schedule the next visit',
      ),
      refs(
        'Reddel HK, Taylor DR, Bateman ED, et al. An Official American Thoracic Society/European Respiratory Society Statement: Asthma Control and Exacerbations. Am J Respir Crit Care Med. 2009. 180:59-99.',
        'Castillo JR, Peters SP, Busse WW. Asthma Exacerbations: Pathogenesis, Prevention, and Treatment. J Allergy Clin Immunol Pract. 2017. 5(4):918-27',
        'Sobieraj DM, Baker WL, Nguyen E, et al. Association of inhaled corticosteroids and long-acting muscarinic antagonists with asthma control in patients with uncontrolled, persistent asthma. JAMA. 2018. 319 (14): 1473-84.',
        'Siemieniuk R, Chu DK, Kim LH, et al. Oxygen therapy for acutely ill medical patients: a clinical practice guideline. BMJ. 2018;363.',
        'Cates C, Welsh E, Rowe B. Holding chambers (spacers) versus nebulizers for beta-agonist treatment of acute asthma. Cochrane Database Syst Rev. 2013;(9).',
        'Newman K, Milne S, Hamilton C, Hall K. A comparison of albuterol administered by metered-dose inhaler and spacer with albuterol by nebulizer in adults presenting to an urban emergency department with acute asthma. Chest. 2002;121(4):1036-41.',
        'Hui DS, Chow BK, Chu LC, Ng S, Hall SD, Gin T. Exhaled air and aerosolized droplet dispersion during application of a jet nebulizer. Chest. 2009;135(3):648-54.',
        'Harrison B, Stokes T, Hart GJ, Vaughan D, Ali N, Robinson A. Need for intravenous hydrocortisone in addition to oral prednisolone in patients admitted to hospital with severe asthma without ventilatory failure. Lancet. 1988;1(8474): 181-4.',
        'Rodrigo G. Rapid Effects of Inhaled Corticosteroids in Acute Asthma: An Evidence-Based Evaluation. Chest. 2006;130(5): 1301-11.',
        'Davies B, Danseco E, Cicutto L, et al. (2006). Nursing Best Practice Guidelines Evaluation User Guide: Inhaler Device Assessment Tool for Promoting Asthma Control in Children. Nursing Best Practice Research Unit, University of Ottawa, Canada. pp. 1-30',
        'Chapman S, Robinson G, Shrimanker R, Turnbull C, Wrightson J. (2021). Oxford Handbook of Respiratory Medicine, Asthma. Oxford, UK: Oxford University Press.',
      ),
    ]),

    // ───────────────────────────── 5. Comorbidities
    sec(C5, 'as-comorbidities', '5.1', 'Introduction', [
      p(
        'An asthma comorbidity refers to any illness or medical condition that exists in a person who has asthma and which shares a common pathophysiological pathway with asthma or affects the asthma phenotype, its treatment and frequency of symptoms. As much as 60% of adults with asthma have at least one comorbidity condition and 12% have three or more comorbidities.',
      ),
      p(
        'Asthma comorbidities are particularly more common in patients with difficult-to-treat asthma and may present a challenge to optimal management. These conditions may mimic asthma symptoms and/or may increase the risk of exacerbations and thus greatly impact on the overall goal of achieving symptom control in both children and adults.',
      ),
      p(
        'Identification and management of these comorbidities among patients with asthma is important as it reduces the proportion of patients with true Severe Refractory Asthma after addressing factors such as non-adherence, poor inhaler technique and wrong diagnosis. This means that when comorbidities are identified and managed, many cases of asthma are amenable to treatment and only a small percentage of cases remain refractory to treatment. Asthma comorbidities may broadly be classified as allergic or non-allergic comorbidities.',
      ),
      p(
        'Allergic comorbidities are related to the immune system and have similar underlying disease mechanisms. They include allergic rhinitis, chronic rhinosinusitis, food allergy and allergy to medications such as aspirin and other NSAIDS.',
      ),
      note('Table 5.1 "Allergic and non-allergic comorbidities" is referred to in the source but is not printed in it.'),
    ]),
    sec(C5A, 'as-rhinitis', '5.2.1', 'Allergic rhinitis', [
      p(
        'Allergic rhinitis (AR) is a symptomatic disorder of the nose. It results from allergen exposure and leads to an IgE-mediated inflammation of the nasal and sinus mucosa, resulting in mucosal thickening/ hypertrophy with polyp formation. It is considered that 20-50% of patients with AR have asthma and more than 80% of patients with asthma have rhinitis. About 15% of children with asthma aged 6-7 years and 40% of those aged 13-14 years also have AR.',
      ),
      p('**Symptoms of allergic rhinitis**'),
      ul('Nasal itching', 'Sneezing', 'Nasal congestion and rhinorrhea', 'Reduced or lost sense of smell', 'Chronic mouth breathing'),
      p('**Physical examination may reveal the following:**'),
      ul(
        'Facial grimacing and nose twitching',
        'Chronic mouth breathing',
        'Allergic shiners; dark discoloration under the lower eyelids (periorbital hyperpigmentation) caused by congestion of the nose and sinuses and venous stasis',
        'Dennie-Morgan lines; creases in the lower eyelid skin',
        "Transverse nasal crease which occurs from patient's repeated lifting of the nasal tip",
        'A high, arched palate, narrow premaxilla and receding chin may be present secondary to long-term mouth-breathing',
        'Granular posterior oropharynx may be present due to irritation from persistent postnasal discharge',
      ),
      p('**Treatment**'),
      p(
        'Treatment of AR can improve asthma symptoms. There are both non-pharmacological and pharmacological management available for treating allergic rhinitis. For non-pharmacological management, patients are advised to avoid identifiable triggers of their symptoms. Such triggers may include pollen, dust mites, pets, etc.',
      ),
      p(
        'For pharmacological treatment, intranasal corticosteroids are strongly recommended as first line therapy for mild cases of AR while a combination of intranasal steroids, nasal decongestants (e.g. saline nasal drops) and oral antihistamines are recommended for moderate cases of AR. Sympathomimetic decongestants such as xylometazoline are not recommended in this group of patients.',
      ),
      p(
        'In severe cases of AR, combination therapy with inhaled corticosteroids, oral antihistamines, LTRAs and nasal decongestants have been shown to be helpful. Sympathomimetic decongestants (e.g. xylometazoline) may be used as-needed (up to 4 times a day) for severe congestion for a short period (maximum 1 week). Allergy immunotherapy, if available, can be considered.',
      ),
    ]),
    sec(C5A, 'as-rhinosinusitis', '5.2.2', 'Chronic Rhinosinusitis', [
      p(
        'Rhinosinusitis is defined as inflammation of the nose and paranasal sinuses characterized by more than two symptoms including nasal blockage/ obstruction and/or nasal discharge (anterior/posterior nasal drip).',
      ),
      p(
        'Chronic rhinosinusitis (CRS) is classified into the type with nasal polyps and that without nasal polyps. Among patients with asthma, up to 85% of them have symptoms of CRS. Furthermore, 10% to 40% of patients with CRS have asthma. Nasal polyps are more common in patients with nonatopic asthma. The presentation of CRS is similar to that of allergic rhinitis, and sinusitis rarely occurs without rhinitis.',
      ),
      p('Other symptoms of CRS include facial pain/pressure and anosmia or hyposmia. CRS with post nasal drip is also well known as a cause of persistent cough, independent of asthma.'),
      p('**Treatment**'),
      p(
        'Treatment of children with CRS include oral antibiotics, usually amoxicillin/clavulanic acid with nasal saline irrigation/spray and intranasal steroids. However, some experts recommend adding oral steroids to antibiotics in more severe cases.',
      ),
    ]),
    sec(C5A, 'as-food-allergy', '5.2.3', 'Food Allergy and allergy to medications', [
      p(
        'Food allergy, which affects approximately 5% of adults and 8% of children, may be defined simply as a specific immune response that occurs reproducibly on exposure to a particular food. There may be IgE-mediated and non-IgE-mediated responses or both. Food intolerance can also occur and is often confused with non-IgE-mediated food allergies.',
      ),
      p(
        'Food allergies are more common among people with personal or family history of atopy, males, obese individuals and those with low intake of omega-3-polyunsaturated fatty acids, antioxidants and vitamin D.',
      ),
      p('**Treatment**'),
      p(
        'Children with food allergies are at high risk of developing frequent asthma exacerbations compared to children without food allergies. Therefore, patients with poorly controlled asthma may be investigated for the possible contribution of food allergies. If the offending food is identified, avoidance of such food is the most important way to resolve this issue.',
      ),
      p(
        'For such patients with asthma and severe food allergies, it will be important for them to have specialists review regarding the use of injectable adrenaline (e.g. EpiPen) to reduce the risk of life-threatening events and death.',
      ),
    ]),
    sec(C5A, 'as-eczema', '5.2.4', 'Atopic/allergic eczema', [
      p(
        'Eczema is a chronic itchy inflammatory skin disease and is one of the allergic comorbidities of asthma. Even though atopic eczema may not necessarily cause asthma exacerbation, it is important to control its symptoms in patients with allergic asthma to improve quality of life.',
      ),
      p(
        'Non-pharmacological management of eczema includes bathing with non-irritant soaps and using cotton clothes instead of wool or linen. For pharmacological treatment, frequent moistening of the skin with emollients (e.g., aqueous cream, E45, oilatum) is the mainstay of treatment. Topical corticosteroids are used for flare-ups. Low potency topical corticosteroids (e.g., 1% hydrocortisone cream) are used for mild cases of eczema and high potency topical corticosteroids (e.g., dexamethasone and mometasone creams/ointments) for severe cases. The topical corticosteroids are used for both their anti-inflammatory and antipruritic properties in managing eczema.',
      ),
    ]),
    sec(C5A, 'as-conjunctivitis', '5.2.5', 'Allergic conjunctivitis', [
      p(
        'Allergic conjunctivitis is inflammation of the conjunctiva caused by IgE mediated hypersensitivity reaction. Allergens are typically airborne and includes dust, pollen and mold. The presence of allergen on the conjunctiva triggers mast cell degranulation to release histamine and various other inflammatory mediators that results in recruitment of inflammatory cells such as eosinophils leading to vasodilation and oedema of the conjunctiva. Patients may present with intense itch of the eye and an urge to rub, red eyes, swollen eyelids and watery eyes.',
      ),
      p('Allergic conjunctivitis can be classified as:'),
      ul(
        '**Seasonal** - occurring during certain periods of the year due to exposure to outdoor allergens such pollen.',
        '**Perennial** - occurring throughout the year due to exposure to indoor allergens such as animal dander, dust and mold spores.',
      ),
      p(
        'Avoiding the offending allergens if identified is an important behavioral modification in the management of allergic conjunctivitis. Treatment depends on the severity of symptoms and can include cold compresses, artificial tears, topical antihistamine and mast cell stabilizer. In severe cases, especially if there is no good response to the above treatment, referral to an ophthalmologist will be required.',
      ),
    ]),
    sec(C5N, 'as-obesity', '5.3.1', 'Obesity', [
      p(
        'Asthma is more prevalent among obese individuals, among whom it may be over- or under-diagnosed. Apparent wheeze could occur in patients with obesity hence the need to confirm the diagnosis of asthma with spirometry in this group of patients. Asthma patients with obesity tend to have worse asthma control and poorer response to controller therapy compared to those without obesity. Factors which contribute to the clinical presentation pathogenesis of asthma in the obese include mechanical factors as well as altered inflammation and immune responses related to the obese state. These factors lead to the development of early onset asthma due to cytokines produced by adipose tissue and an increased Th2 effect on airway epithelium and late onset non-allergic asthma due to obesity, related to mechanical restriction.',
      ),
      p(
        'Other differential diagnoses that should be considered in obese patients with difficulty in breathing include Obstructive Sleep Apnea (OSA) and Obesity Hypoventilation Syndrome (OHS), which typically occur in patients who snore and have excessive day time sleepiness.',
      ),
      p('**Management**'),
      p(
        'ICS remain the mainstay of asthma management in obese patients, although their response may be reduced. Weight reduction should be included in the treatment plan for obese patients with asthma. Increased exercise coupled with a structured weight reduction plan is recommended. Asthma control, quality of life and lung function are improved with 5-10% or more weight loss.',
      ),
    ]),
    sec(C5N, 'as-osa', '5.3.2', 'Obstructive Sleep Apnea', [
      p(
        'Obstructive sleep apnea and asthma share several risks and aggravating factors such as obesity, smoking, gastroesophageal reflux, sinonasal disease or upper airway involvement and systemic inflammation. These two conditions may coexist and negatively affect each other in a bidirectional manner. It typically occurs in obese individuals, people with large neck sizes (greater than size 17 inches) and is more common in males. Patients present with unrefreshing sleep, snoring, apnoeic episodes and excessive daytime sleepiness. It may be associated with hypertension. Children with OSA commonly present with mouth breathing, snoring, interrupted sleep and observed apnoea. Patients with suspected OSA should be screened and evaluated with a sleep study.',
      ),
      p('**Management**'),
      p(
        'Where both OSA and asthma coexist, a significant improvement in asthma symptoms has been reported with the long-term use of non-invasive ventilation with continuous positive air pressure (CPAP), the gold standard treatment for OSA. Children with OSA should be referred to Ear, Nose and Throat Specialists (Otorhinolaryngologists) to exclude upper airway conditions such as enlarged adenoids or tonsilitis. Patients with suspected OSA should be referred for specialist care in a tertiary institution.',
      ),
    ]),
    sec(C5N, 'as-psychological', '5.3.3', 'Associated psychological conditions', [
      p(
        'Difficulties in achieving asthma control may be associated with psychological factors such as poor perception of symptoms, denial, poor coping strategies and mental disorders (anxiety and depression), the latter being more prevalent among people with asthma. Anxiety, depression, emotions, excitement may lead to hyperventilation and contribute to asthma attacks. They also affect symptom recognition, medication adherence and coping with daily asthma management. Psychological disorders may have a bi-directional influence, with asthma symptoms aggravating anxiety and depression.',
      ),
      p('**Management**'),
      p('Drug treatments for anxiety and depression and cognitive behavior therapy do not significantly improve asthma control.'),
    ]),
    sec(C5N, 'as-gerd', '5.3.4', 'Gastroesophageal reflux disease (GERD)', [
      p(
        'Gastroesophageal reflux disease and asthma have complex interactions and are often encountered together. A causal relationship between GERD and asthma is difficult to establish because either condition can induce the other. Some asthma medications, such as beta 2-agonists and theophylline cause relaxation of the lower esophageal sphincter, contributing to GERD which may in turn worsen asthma symptoms.',
      ),
      p('Patients may present with symptoms such as heartburn, epigastric or chest pain and cough.'),
      fig('Figure 5.1 Interrelationship between asthma and GERD (Copied from Ates F. et al. Gastroenterol Hepatol (N Y). 2014)', 44),
      p('**Management**'),
      p('Treat with proton pump inhibitors and prokinetic drugs. These drugs are only useful if the patient is symptomatic of GERD'),
    ]),
    sec(C5N, 'as-vcd', '5.3.5', 'Vocal cord dysfunction (VCD)', [
      p(
        'Patients with VCD may present like refractory asthma with poor response to beta-agonists or inhaled corticosteroids. Patients present with dyspnoea, wheeze and sometimes, stridor but often do not report nocturnal symptoms. It is fairly common in adolescent girls with new onset symptoms and asthma patients with psychological stress. Diagnosis is difficult but can be confirmed by paradoxical vocal cord motion when laryngoscopy is performed when patients are symptomatic. Spirometry flow-volume loops show variable extrathoracic obstruction with flattening of the inspiratory loop.',
      ),
      p('**Management**'),
      p('Psychotherapy, speech therapy and breathing exercises.'),
    ]),
    sec(C5N, 'as-bronchiectasis', '5.3.6', 'Bronchiectasis', [
      p(
        'The presence of bronchiectasis with severe asthma is associated with older age, chronic productive cough, rhinosinusitis, and more frequent and more severe exacerbations. These are associated with neutrophilic airway inflammation and poor response to usual treatment. Conversely, patients with bronchiectasis (in the absence of a diagnosis of asthma) may have wheeze and diagnostic features of airway obstruction. Other symptoms include cough productive of copious sputum, haemoptysis and breathlessness.',
      ),
      p('**Management**'),
      p(
        'Sputum microscopy and culture and sensitivity are done to identify bacterial colonization of airway mucosa. The mainstay of treatment is chest physiotherapy with postural drainage, sputum clearance exercises and courses of appropriate antibiotics as needed. Patients should be referred to specialists for long-term management.',
      ),
    ]),
    sec(C5N, 'as-abpa', '5.3.7', 'Allergic Bronchopulmonary Aspergillosis (ABPA)', [
      p(
        'Allergic bronchopulmonary aspergillosis (ABPA) is a hypersensitivity reaction to Aspergillus species (generally A. fumigatus) that occurs almost exclusively in patients with asthma and cystic fibrosis. Immune responses to Aspergillus antigens cause airway inflammation and, if untreated, will result in bronchiectasis and pulmonary fibrosis.',
      ),
      p(
        'Symptoms and signs are those of asthma with productive cough and, occasionally, fever and anorexia. Diagnosis is suspected based on history and CT scan abnormalities, and is confirmed by skin testing or measurement of IgE levels, IgG precipitins, and A. fumigatus-specific antibodies. Patients with this condition have asthma that is dependent on treatment with corticosteroids, and experience worsening of symptoms whenever corticosteroids are withdrawn.',
      ),
      p('**Management**'),
      p('They should be referred for specialist care if this diagnosis is suspected.'),
      refs(
        'Boulet LP, Boulay ME. Asthma-related comorbidities. Expert Rev. Respir. Med. 2011;5(3):377-393.',
        'Pinart M, Benet M, Annesi-Maesano I, et al. Comorbidity of eczema, rhinitis, and asthma in IgE-sensitised and non-IgE-sensitised children in MeDALL. Lancet Respir Med. 2014;2(2):131-140.',
        'Sicherer SH, Sampson HA. Food allergy: Epidemiology, pathogenesis, diagnosis, and treatment. J Allergy Clin Immunol. 2014;133(2):291-308.',
        'Hekking PW, Wener RR, Amelink M, et al. The prevalence of severe refractory asthma. J Allergy Clin Immunol. 2015;135(4):896-902.',
        'Hoyte FCL, Nelson HS. Recent advances in allergic rhinitis. F1000Res. 2018;7:F1000 Faculty Rev-1333.',
        'Wollenberg A, Barbarot S, Bieber T, et al. Consensus-based European guidelines for treatment of atopic eczema (atopic dermatitis) in adults and children: part I. J Eur Acad Dermatol Venereol. 2018;32(5):657-682.',
        'Chandy Z, Ference E, Lee JT. Clinical Guidelines on Chronic Rhinosinusitis in Children. Curr Allergy Asthma Rep. 2019;19(2):14.',
        'Ates F, Vaezi MF. Insight into the relationship between Asthma and reflux disease. Gastroenterol Hepatol (N Y). 2014; 10(11): 729-736.',
        'Kenn K, Hess MM. Vocal cord dysfunction: an important differential diagnosis of bronchial asthma. Dtsch Arztebl Int. 2008;105(41):699-704.',
        'Moreira A, Bonini M, Garcia-Larsen V, et al. Weight loss interventions in asthma: EAACI Evidence-Based Clinical Practice Guideline (Part I). Allergy 2013;68:425-39.',
        'Kew KM, Nashed M, Dulay V, Yorke J. Cognitive behavioural therapy (CBT) for adults and adolescents with asthma. Cochrane Database Syst Rev. 2016; 9(9):CD011818.',
        'Min YZ, Subbarao P, Narang I. The Bidirectional Relationship Between Asthma and Obstructive Sleep Apnea: Which Came First? J Pediatr. 2016;176:10-16.',
        'Kauppi P, Bachour P, Maasilta P, Bachour A. Long-term CPAP treatment improves asthma control in patients with asthma and obstructive sleep apnoea. Sleep Breath. 2016;20(4):1217-1224.',
      ),
    ]),

    // ───────────────────────────── Appendix
    sec(AP, 'as-action-plan', 'A', 'Asthma action plan', [
      p('A written plan filled in with the patient: name, date, doctor, medical record number, doctor\'s phone (day, night/weekend), emergency contact, doctor\'s signature and personal best peak flow.'),
      box(
        'info',
        'GREEN means Go Zone! Use preventive medicine.',
        'You have all of these: Breathing is good; No cough or wheeze; Sleep through the night; Can work & play',
        'Peak flow: from ___ to ___',
        'Use these daily controller medicines: medicine / how much / how often/when',
        'For asthma with exercise, take: ___',
      ),
      box(
        'urgent',
        'YELLOW means Caution Zone! Use preventive medicine.',
        'You have any of these: First signs of a cold; Exposure to known trigger; Cough; Mild wheeze; Tight chest; Coughing at night',
        'Peak flow: from ___ to ___',
        'Continue with green zone medicine and add: medicine / how much / how often/when',
        'CALL YOUR ASTHMA CARE PROVIDER.',
      ),
      box(
        'critical',
        'RED means Danger Zone! Get help from a doctor.',
        'Your asthma is getting worse fast: Medicine not helping; Breathing is hard & fast; Nose opens wide; Trouble speaking; Ribs show (in children)',
        'Peak flow: from ___ to ___',
        'Take these medicines and call your doctor now: medicine / how much / how often/when',
        'GET HELP FROM A DOCTOR NOW! Your doctor will want to see you right away. It\'s important! If you cannot contact your doctor, go directly to the emergency room. DO NOT WAIT.',
      ),
      note('Make an appointment with your asthma care provider within two days of an ER visit or hospitalization.'),
      fig('Appendix A: Asthma action plan form (printable)', 47),
    ]),
    sec(AP, 'as-gina-control', 'B', 'GINA assessment of symptom control', [
      p('**In the past 4 weeks, has the patient had:**'),
      ol(
        'Daytime asthma symptoms more than twice a week? (Yes / No)',
        'Any night waking due to asthma? (Yes / No)',
        'Reliever needed for symptoms* more than twice a week? (Yes / No)',
        'Any activity limitation due to asthma? (Yes / No)',
      ),
      table(
        ['Level of asthma symptom control', 'Number of "Yes" answers'],
        [
          ['Well controlled', 'None of these'],
          ['Partly controlled', '1-2 of these'],
          ['Uncontrolled', '3-4 of these'],
        ],
      ),
    ]),
  ],
}
