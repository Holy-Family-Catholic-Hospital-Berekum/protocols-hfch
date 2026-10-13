import { useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'
import type { Block, Branch, FlowNode, Tone } from '../../../types/protocol'
import type { AnchorInfo } from '../../../components/protocol/anchors'
import {
  arrayToLines,
  linesToArray,
  listItemsToText,
  parseListItems,
  parseRows,
  rowsToText,
  uniqueId,
} from './lines'

export interface EditorEnv {
  anchors: Map<string, AnchorInfo>
  protocols: { id: string; title: string }[]
  /** All ids used on the page (sections + flow nodes), for generating unique ids. */
  takenIds: Set<string>
}

const TONES: { value: Tone; label: string }[] = [
  { value: 'critical', label: 'Critical (red)' },
  { value: 'urgent', label: 'Immediate (amber)' },
  { value: 'stable', label: 'Stable (green)' },
  { value: 'info', label: 'Info / drugs (blue)' },
  { value: 'neutral', label: 'Neutral' },
]

/** Textarea that keeps its own text while typing and reports parsed values upward. */
function LinesField<T>({
  label,
  hint,
  initial,
  parse,
  onChange,
  rows = 4,
}: {
  label: string
  hint?: string
  initial: string
  parse: (text: string) => T
  onChange: (value: T) => void
  rows?: number
}) {
  const [text, setText] = useState(initial)
  return (
    <label className="lbl">
      {label}
      {hint && <span className="hint">{hint}</span>}
      <textarea
        className="input mono"
        rows={rows}
        value={text}
        onChange={(e) => {
          setText(e.target.value)
          onChange(parse(e.target.value))
        }}
      />
    </label>
  )
}

function TextField({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <label className="lbl">
      {label}
      <input className="input" value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
    </label>
  )
}

function ToneSelect({ value, onChange, allowNone, options = TONES }: { value: Tone | undefined; onChange: (t: Tone | undefined) => void; allowNone?: boolean; options?: { value: Tone; label: string }[] }) {
  return (
    <label className="lbl">
      Colour
      <select className="input" value={value ?? ''} onChange={(e) => onChange((e.target.value || undefined) as Tone | undefined)}>
        {allowNone && <option value="">Default</option>}
        {options.map((t) => (
          <option key={t.value} value={t.value}>
            {t.label}
          </option>
        ))}
      </select>
    </label>
  )
}

function AnchorSelect({ value, onChange, env, label = 'Goes to' }: { value: string; onChange: (v: string) => void; env: EditorEnv; label?: string }) {
  return (
    <label className="lbl">
      {label}
      <select className="input" value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">Choose…</option>
        {[...env.anchors.entries()].map(([id, info]) => (
          <option key={id} value={id}>
            {info.label}
          </option>
        ))}
      </select>
    </label>
  )
}

function BranchesEditor({ branches, onChange, env }: { branches: Branch[]; onChange: (b: Branch[]) => void; env: EditorEnv }) {
  const set = (i: number, patch: Partial<Branch>) => onChange(branches.map((b, j) => (j === i ? { ...b, ...patch } : b)))
  return (
    <div className="sub-editor">
      <div className="sub-editor-title">Branches</div>
      {branches.map((b, i) => (
        <div key={i} className="row-fields">
          <TextField label="Answer" value={b.label} onChange={(v) => set(i, { label: v })} placeholder="e.g. YES / Unstable" />
          <ToneSelect value={b.tone} onChange={(t) => set(i, { tone: t ?? 'neutral' })} />
          <AnchorSelect value={b.target} onChange={(v) => set(i, { target: v })} env={env} />
          <button type="button" className="icon-btn danger" onClick={() => onChange(branches.filter((_, j) => j !== i))} aria-label="Remove branch">
            <Trash2 size={16} />
          </button>
        </div>
      ))}
      <button type="button" className="btn ghost small" onClick={() => onChange([...branches, { label: '', tone: 'neutral', target: '' }])}>
        <Plus size={16} aria-hidden /> Add branch
      </button>
    </div>
  )
}

function FlowEditor({ nodes, onChange, env }: { nodes: FlowNode[]; onChange: (n: FlowNode[]) => void; env: EditorEnv }) {
  const set = (i: number, patch: Partial<FlowNode>) => onChange(nodes.map((n, j) => (j === i ? { ...n, ...patch } : n)))
  const move = (i: number, d: number) => {
    const j = i + d
    if (j < 0 || j >= nodes.length) return
    const copy = [...nodes]
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
    onChange(copy)
  }
  return (
    <div className="sub-editor">
      <div className="sub-editor-title">Flow steps</div>
      {nodes.map((n, i) => (
        <div key={n.id} className="flow-edit glass">
          <div className="row-fields">
            <label className="lbl">
              Kind
              <select className="input" value={n.kind} onChange={(e) => set(i, { kind: e.target.value as FlowNode['kind'] })}>
                <option value="action">Action</option>
                <option value="shock">Shock</option>
                <option value="drug">Drug</option>
                <option value="check">Check / question</option>
              </select>
            </label>
            <TextField label="Title" value={n.title} onChange={(v) => set(i, { title: v })} />
            <div className="row-btns">
              <button type="button" className="icon-btn" onClick={() => move(i, -1)} aria-label="Move up">↑</button>
              <button type="button" className="icon-btn" onClick={() => move(i, 1)} aria-label="Move down">↓</button>
              <button type="button" className="icon-btn danger" onClick={() => onChange(nodes.filter((_, j) => j !== i))} aria-label="Remove step">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
          {n.kind !== 'check' && (
            <LinesField label="Details (one per line)" initial={arrayToLines(n.items)} parse={linesToArray} onChange={(items) => set(i, { items })} rows={3} />
          )}
          {n.kind === 'check' && <BranchesEditor branches={n.branches ?? []} onChange={(branches) => set(i, { branches })} env={env} />}
          {n.kind !== 'check' && <AnchorSelect label="Then go back to (optional loop)" value={n.goto ?? ''} onChange={(v) => set(i, { goto: v || undefined })} env={env} />}
          <div className="hint">Anchor id: {n.id}</div>
        </div>
      ))}
      <button
        type="button"
        className="btn ghost small"
        onClick={() => {
          const id = uniqueId('step', env.takenIds)
          onChange([...nodes, { id, kind: 'action', title: '' }])
        }}
      >
        <Plus size={16} aria-hidden /> Add step
      </button>
    </div>
  )
}

export function BlockEditor({ block, onChange, env }: { block: Block; onChange: (b: Block) => void; env: EditorEnv }) {
  switch (block.type) {
    case 'text':
      return (
        <>
          <label className="lbl">
            Text
            <textarea className="input" rows={2} value={block.text} onChange={(e) => onChange({ ...block, text: e.target.value })} />
          </label>
          <ToneSelect allowNone value={block.tone} onChange={(tone) => onChange({ ...block, tone })} />
        </>
      )

    case 'list':
      return (
        <>
          <LinesField
            label="Items"
            hint='One per line. Start a line with "- " for a sub-item, "[STAT] " to mark it STAT.'
            initial={listItemsToText(block.items)}
            parse={parseListItems}
            onChange={(items) => onChange({ ...block, items })}
            rows={6}
          />
          <label className="check inline">
            <input type="checkbox" checked={!!block.ordered} onChange={(e) => onChange({ ...block, ordered: e.target.checked })} /> Numbered list
          </label>
        </>
      )

    case 'drug':
      return (
        <>
          <TextField label="Drug / class" value={block.name} onChange={(name) => onChange({ ...block, name })} />
          <LinesField
            label="Dose & regimen"
            hint="One line per instruction, exactly as in the source."
            initial={arrayToLines(block.regimen)}
            parse={linesToArray}
            onChange={(regimen) => onChange({ ...block, regimen })}
            rows={3}
          />
          <TextField label="Note (optional)" value={block.note ?? ''} onChange={(note) => onChange({ ...block, note: note || undefined })} />
        </>
      )

    case 'callout':
      return (
        <>
          <ToneSelect
            value={block.tone}
            onChange={(t) => onChange({ ...block, tone: (t as 'critical' | 'urgent' | 'info') ?? 'info' })}
            options={TONES.filter((t) => ['critical', 'urgent', 'info'].includes(t.value))}
          />
          <TextField label="Title (optional)" value={block.title ?? ''} onChange={(title) => onChange({ ...block, title: title || undefined })} />
          <label className="lbl">
            Text
            <textarea className="input" rows={2} value={block.text ?? ''} onChange={(e) => onChange({ ...block, text: e.target.value || undefined })} />
          </label>
          <LinesField
            label="Bullet points (optional)"
            initial={arrayToLines(block.items)}
            parse={linesToArray}
            onChange={(items) => onChange({ ...block, items: items.length ? items : undefined })}
            rows={3}
          />
        </>
      )

    case 'decision':
      return (
        <>
          <TextField label="Question" value={block.question} onChange={(question) => onChange({ ...block, question })} />
          <TextField label="Details (optional)" value={block.detail ?? ''} onChange={(detail) => onChange({ ...block, detail: detail || undefined })} />
          <BranchesEditor branches={block.branches} onChange={(branches) => onChange({ ...block, branches })} env={env} />
        </>
      )

    case 'table':
      return (
        <>
          <TextField label="Title (optional)" value={block.title ?? ''} onChange={(title) => onChange({ ...block, title: title || undefined })} />
          <LinesField
            label="Column headings"
            hint='Separate with " | "'
            initial={block.columns.join(' | ')}
            parse={(t) => t.split('|').map((c) => c.trim()).filter(Boolean)}
            onChange={(columns) => onChange({ ...block, columns })}
            rows={1}
          />
          <LinesField
            label="Rows"
            hint='One row per line, cells separated by " | "'
            initial={rowsToText(block.rows.map((r) => r.cells))}
            parse={parseRows}
            onChange={(rows) => onChange({ ...block, rows: rows.map((cells) => ({ cells })) })}
            rows={6}
          />
        </>
      )

    case 'link':
      return (
        <>
          <label className="lbl">
            Link to
            <select
              className="input"
              value={block.anchor !== undefined ? 'anchor' : 'protocol'}
              onChange={(e) =>
                onChange(
                  e.target.value === 'anchor'
                    ? { ...block, anchor: '', protocolId: undefined }
                    : { ...block, protocolId: '', anchor: undefined },
                )
              }
            >
              <option value="protocol">Another protocol</option>
              <option value="anchor">A section on this page</option>
            </select>
          </label>
          {block.anchor !== undefined ? (
            <AnchorSelect value={block.anchor} onChange={(anchor) => onChange({ ...block, anchor })} env={env} />
          ) : (
            <label className="lbl">
              Protocol
              <select className="input" value={block.protocolId ?? ''} onChange={(e) => onChange({ ...block, protocolId: e.target.value })}>
                <option value="">Choose…</option>
                {env.protocols.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.title}
                  </option>
                ))}
              </select>
            </label>
          )}
          <TextField label="Button text" value={block.label} onChange={(label) => onChange({ ...block, label })} />
          <TextField label="Condition (optional)" value={block.condition ?? ''} onChange={(condition) => onChange({ ...block, condition: condition || undefined })} placeholder="e.g. If no pulse" />
        </>
      )

    case 'contacts':
      return (
        <>
          <TextField label="Team name" value={block.title} onChange={(title) => onChange({ ...block, title })} />
          <LinesField
            label="People"
            hint='One per line: "Name | phone"'
            initial={rowsToText(block.people.map((p) => [p.name, p.phone]))}
            parse={(t) => parseRows(t).map(([name = '', phone = '']) => ({ name, phone }))}
            onChange={(people) => onChange({ ...block, people })}
            rows={3}
          />
        </>
      )

    case 'flow':
      return <FlowEditor nodes={block.nodes} onChange={(nodes) => onChange({ ...block, nodes })} env={env} />
  }
}
