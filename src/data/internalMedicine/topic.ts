import type { Block, FlowNode, Section, Tone } from '../../types/protocol'
import { flow, note, p, refs, sec, ul, type Place } from '../helpers'

/** One flowchart box: `check` for the gold decision diamonds, `action` for everything else. */
export type Step = string | { check: string }

export interface Topic {
  recognition: string
  /** Flowchart boxes in arrow order. */
  flowchart: Step[]
  treatment: string[]
  references: string[]
  /** Extra blocks shown after the treatment pathway. */
  extra?: Block[]
  tone?: Tone
}

const LOCAL_ADAPTATION =
  'Local adaptation required: confirm drug availability, exact product concentrations, laboratory turnaround, escalation contacts and receiving-centre capability.'

/** A handbook protocol in the source's fixed layout: recognition, quick algorithm, treatment pathway, references. */
export const topic = (place: Place, id: string, number: string | undefined, title: string, t: Topic): Section =>
  sec(
    place,
    id,
    number,
    title,
    [
      p('**Recognition and immediate priorities**'),
      p(t.recognition),
      p('**Quick clinical algorithm**'),
      flow(
        ...t.flowchart.map(
          (s, i): FlowNode =>
            typeof s === 'string'
              ? { id: `${id}-f${i + 1}`, kind: 'action', title: s }
              : { id: `${id}-f${i + 1}`, kind: 'check', title: s.check },
        ),
      ),
      p('**Treatment pathway**'),
      ul(...t.treatment),
      ...(t.extra ?? []),
      note(LOCAL_ADAPTATION),
      refs(...t.references),
    ],
    t.tone ? { tone: t.tone } : {},
  )
