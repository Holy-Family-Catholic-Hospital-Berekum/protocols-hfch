import { Baby, Scissors, Siren, Smile, Stethoscope, Syringe, Venus, type LucideIcon } from 'lucide-react'

export interface Category {
  id: string
  name: string
  icon: LucideIcon
  /** Two gradient stops for the category tile. */
  colors: [string, string]
}

export const CATEGORIES: Category[] = [
  { id: 'anaesthesia', name: 'Anaesthesia', icon: Syringe, colors: ['#a78bfa', '#6d28d9'] },
  { id: 'emergency', name: 'Emergency Medicine', icon: Siren, colors: ['#ff5f6d', '#c21858'] },
  { id: 'internal-medicine', name: 'Internal Medicine', icon: Stethoscope, colors: ['#38bdf8', '#1d4ed8'] },
  { id: 'maxillofacial-dental', name: 'Maxillofacial / Dental', icon: Smile, colors: ['#fdba74', '#ea580c'] },
  { id: 'obs-gyn', name: 'Obs & Gyn', icon: Venus, colors: ['#f9a8d4', '#db2777'] },
  { id: 'paediatrics', name: 'Paediatrics', icon: Baby, colors: ['#5eead4', '#0f766e'] },
  { id: 'surgery', name: 'Surgery', icon: Scissors, colors: ['#fbbf24', '#d97706'] },
]

/** Category ids used before the department list was finalised, mapped to their department. */
const LEGACY: Record<string, string> = {
  anaesthetics: 'anaesthesia',
  // The original protocols (ACS, bradycardia, cardiac arrest, cardiogenic shock) came from Emergency.
  cardiology: 'emergency',
  resuscitation: 'emergency',
  neurology: 'internal-medicine',
  endocrine: 'internal-medicine',
  infectious: 'internal-medicine',
  gastro: 'internal-medicine',
  hematology: 'internal-medicine',
  obstetrics: 'obs-gyn',
  orthopaedics: 'surgery',
  other: 'internal-medicine',
}

export function getCategory(id: string): Category {
  const resolved = LEGACY[id] ?? id
  return CATEGORIES.find((c) => c.id === resolved) ?? CATEGORIES[1]
}
