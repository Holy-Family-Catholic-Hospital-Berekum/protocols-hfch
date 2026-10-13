import type { Block } from '../../../types/protocol'

export const BLOCK_TYPES: { type: Block['type']; label: string; make: () => Block }[] = [
  { type: 'list', label: 'Steps / bullet list', make: () => ({ type: 'list', items: [] }) },
  { type: 'drug', label: 'Drug', make: () => ({ type: 'drug', name: '', regimen: [] }) },
  { type: 'callout', label: 'Warning / note', make: () => ({ type: 'callout', tone: 'urgent' }) },
  { type: 'decision', label: 'Decision', make: () => ({ type: 'decision', question: '', branches: [] }) },
  { type: 'text', label: 'Text', make: () => ({ type: 'text', text: '' }) },
  { type: 'table', label: 'Table', make: () => ({ type: 'table', columns: [], rows: [] }) },
  { type: 'link', label: 'Link', make: () => ({ type: 'link', protocolId: '', label: '' }) },
  { type: 'contacts', label: 'Contacts', make: () => ({ type: 'contacts', title: '', people: [] }) },
  { type: 'flow', label: 'Flow (loops, e.g. CPR)', make: () => ({ type: 'flow', nodes: [] }) },
]
