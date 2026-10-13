import type { Timestamp } from 'firebase/firestore'

/**
 * Clinical tone. Each tone has one fixed meaning across every protocol:
 *  critical = unstable / life-threatening / STOP
 *  urgent   = immediate actions
 *  stable   = stable patient / resolved
 *  info     = drugs and general information
 *  neutral  = everything else
 */
export type Tone = 'critical' | 'urgent' | 'stable' | 'info' | 'neutral'

/**
 * Inline text supports two markers, rendered without HTML:
 *  **bold**   and   !!red emphasis!!
 */
export type RichText = string

export interface ListItem {
  text: RichText
  sub?: RichText[]
  /** Marks an item as STAT / do-now (rendered in red with a bolt). */
  stat?: boolean
}

export interface Branch {
  label: string
  tone: Tone
  /** Anchor id of a section or flow node on the same page. */
  target: string
  note?: RichText
}

export interface FlowNode {
  id: string
  kind: 'action' | 'shock' | 'drug' | 'check'
  title: RichText
  items?: RichText[]
  /** For kind 'check': where each answer leads. */
  branches?: Branch[]
  /** Explicit jump after this node (e.g. a loop back to an earlier check). */
  goto?: string
}

export type Block =
  | { type: 'text'; text: RichText; tone?: Tone }
  | { type: 'list'; ordered?: boolean; items: ListItem[]; timeTarget?: string }
  | { type: 'drug'; name: string; regimen: RichText[]; note?: RichText }
  | { type: 'callout'; tone: 'critical' | 'urgent' | 'info'; title?: string; text?: RichText; items?: RichText[] }
  | { type: 'decision'; question: RichText; detail?: RichText; branches: Branch[] }
  | { type: 'table'; title?: string; columns: string[]; rows: { cells: RichText[] }[] }
  /** Jump to another protocol (protocolId) or to an anchor on this page (anchor). */
  | { type: 'link'; protocolId?: string; anchor?: string; label: string; condition?: RichText }
  | { type: 'contacts'; title: string; people: { name: string; phone: string }[] }
  | { type: 'flow'; nodes: FlowNode[] }

export type BlockType = Block['type']

export interface Section {
  id: string
  title: string
  tone?: Tone
  /** e.g. "within 10 min" */
  timeTarget?: string
  blocks: Block[]
}

export interface Attachment {
  name: string
  path: string
  url: string
  contentType: string
  size: number
  /** The original source document this protocol was transcribed from. */
  isOriginal?: boolean
}

export interface TimerConfig {
  enabled: boolean
  /** Shows a repeating cycle ring, e.g. 120 for 2-minute CPR cycles. */
  cycleSeconds?: number
}

export type ProtocolStatus = 'draft' | 'published'

export interface ProtocolContent {
  title: string
  category: string
  version: string
  summary: string
  keywords: string[]
  /** Who the protocol was adapted from. */
  source: string
  sections: Section[]
  attachments: Attachment[]
  timer: TimerConfig
}

export interface Protocol extends ProtocolContent {
  id: string
  status: ProtocolStatus
  verifiedBy: string | null
  verifiedAt: Timestamp | null
  updatedAt: Timestamp | null
  updatedBy: string | null
  /** Section ids changed in the latest published version. */
  changedSections: string[]
  changeNote: string
}

export interface ProtocolVersion extends ProtocolContent {
  id: string
  verifiedBy: string | null
  verifiedAt: Timestamp | null
  changeNote: string
  archivedAt: Timestamp
  archivedBy: string
}
