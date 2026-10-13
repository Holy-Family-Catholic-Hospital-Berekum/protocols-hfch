import {
  Activity,
  Baby,
  Bone,
  Brain,
  Droplets,
  FileText,
  HeartPulse,
  Pill,
  Scissors,
  ShieldPlus,
  Stethoscope,
  Zap,
  type LucideIcon,
} from 'lucide-react'

export interface Category {
  id: string
  name: string
  icon: LucideIcon
  /** Two gradient stops for the category tile. */
  colors: [string, string]
}

export const CATEGORIES: Category[] = [
  { id: 'resuscitation', name: 'Resuscitation', icon: Zap, colors: ['#ff5f6d', '#c21858'] },
  { id: 'cardiology', name: 'Cardiology', icon: HeartPulse, colors: ['#ff8a5c', '#e2453c'] },
  { id: 'neurology', name: 'Neurology', icon: Brain, colors: ['#a78bfa', '#6d28d9'] },
  { id: 'endocrine', name: 'Endocrine & Metabolic', icon: Droplets, colors: ['#fbbf24', '#d97706'] },
  { id: 'infectious', name: 'Infection & Sepsis', icon: ShieldPlus, colors: ['#34d399', '#047857'] },
  { id: 'gastro', name: 'Gastroenterology', icon: Activity, colors: ['#f472b6', '#be185d'] },
  { id: 'hematology', name: 'Hematology & VTE', icon: Pill, colors: ['#f87171', '#991b1b'] },
  { id: 'obstetrics', name: 'Obstetrics & Gynaecology', icon: Stethoscope, colors: ['#f9a8d4', '#db2777'] },
  { id: 'paediatrics', name: 'Paediatrics', icon: Baby, colors: ['#7dd3fc', '#0369a1'] },
  { id: 'surgery', name: 'Surgery & Trauma', icon: Scissors, colors: ['#94a3b8', '#334155'] },
  { id: 'orthopaedics', name: 'Orthopaedics', icon: Bone, colors: ['#cbd5e1', '#475569'] },
  { id: 'other', name: 'Other', icon: FileText, colors: ['#5eead4', '#0f766e'] },
]

export function getCategory(id: string): Category {
  return CATEGORIES.find((c) => c.id === id) ?? CATEGORIES[CATEGORIES.length - 1]
}
