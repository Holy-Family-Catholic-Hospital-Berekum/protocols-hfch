import { Link } from 'react-router-dom'
import {
  AlertTriangle,
  ArrowRight,
  CornerDownRight,
  Info,
  OctagonAlert,
  Phone,
  Pill,
  Repeat,
  Syringe,
  Zap,
} from 'lucide-react'
import type { Block, Branch, FlowNode } from '../../types/protocol'
import { RichText } from '../richText'
import { anchorDomId, scrollToAnchor, type AnchorInfo } from './anchors'

export interface BlockContext {
  anchors: Map<string, AnchorInfo>
  /** Protocol ids the current user can open. */
  availableProtocols: Map<string, string>
}

function BranchButton({ branch, ctx }: { branch: Branch; ctx: BlockContext }) {
  const target = ctx.anchors.get(branch.target)
  return (
    <button type="button" className={`branch tone-${branch.tone}`} onClick={() => scrollToAnchor(branch.target)}>
      <span className="branch-label">{branch.label}</span>
      {target && <span className="branch-target">Go to {target.label}</span>}
      {branch.note && (
        <span className="branch-note">
          <RichText text={branch.note} />
        </span>
      )}
      <ArrowRight className="branch-arrow" size={20} aria-hidden />
    </button>
  )
}

const CALLOUT_ICON = { critical: OctagonAlert, urgent: AlertTriangle, info: Info }

const NODE_ICON = { action: CornerDownRight, shock: Zap, drug: Syringe, check: Repeat }

function FlowBlock({ nodes, ctx }: { nodes: FlowNode[]; ctx: BlockContext }) {
  return (
    <ol className="flow">
      {nodes.map((node) => {
        const Icon = NODE_ICON[node.kind]
        const info = ctx.anchors.get(node.id)
        const goto = node.goto ? ctx.anchors.get(node.goto) : undefined
        return (
          <li key={node.id} id={anchorDomId(node.id)} className={`flow-node kind-${node.kind}`}>
            <div className="flow-marker" aria-hidden>
              {info?.step ? <span>{info.step}</span> : <Icon size={16} />}
            </div>
            <div className="flow-body">
              <div className="flow-title">
                {node.kind === 'shock' && <Zap size={18} className="flow-title-icon" aria-hidden />}
                {node.kind === 'drug' && <Syringe size={18} className="flow-title-icon" aria-hidden />}
                <RichText text={node.title} />
              </div>
              {node.items && node.items.length > 0 && (
                <ul className="flow-items">
                  {node.items.map((item, i) => (
                    <li key={i}>
                      <RichText text={item} />
                    </li>
                  ))}
                </ul>
              )}
              {node.branches && (
                <div className="flow-branches">
                  {node.branches.map((b, i) => (
                    <BranchButton key={i} branch={b} ctx={ctx} />
                  ))}
                </div>
              )}
              {node.goto && (
                <button type="button" className="flow-goto" onClick={() => scrollToAnchor(node.goto!)}>
                  <Repeat size={16} aria-hidden /> Then go back to {goto?.label ?? 'the rhythm check'}
                </button>
              )}
            </div>
          </li>
        )
      })}
    </ol>
  )
}

export function BlockView({ block, ctx }: { block: Block; ctx: BlockContext }) {
  switch (block.type) {
    case 'text':
      return (
        <p className={`b-text ${block.tone ? `tone-text-${block.tone}` : ''}`}>
          <RichText text={block.text} />
        </p>
      )

    case 'list': {
      const Tag = block.ordered ? 'ol' : 'ul'
      return (
        <Tag className={`b-list ${block.ordered ? 'ordered' : ''}`}>
          {block.items.map((item, i) => (
            <li key={i} className={item.stat ? 'stat' : undefined}>
              {item.stat && <Zap size={16} className="stat-icon" aria-label="STAT" />}
              <span>
                <RichText text={item.text} />
              </span>
              {item.sub && item.sub.length > 0 && (
                <ul className="b-sublist">
                  {item.sub.map((s, j) => (
                    <li key={j}>
                      <RichText text={s} />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </Tag>
      )
    }

    case 'drug':
      return (
        <div className="b-drug">
          <div className="b-drug-icon" aria-hidden>
            <Pill size={20} />
          </div>
          <div>
            <div className="b-drug-name">{block.name}</div>
            {block.regimen.map((line, i) => (
              <div key={i} className="b-drug-line">
                <RichText text={line} />
              </div>
            ))}
            {block.note && (
              <div className="b-drug-note">
                <RichText text={block.note} />
              </div>
            )}
          </div>
        </div>
      )

    case 'callout': {
      const Icon = CALLOUT_ICON[block.tone]
      return (
        <div className={`b-callout tone-${block.tone}`} role="note">
          <Icon size={22} className="b-callout-icon" aria-hidden />
          <div>
            {block.title && <div className="b-callout-title">{block.title}</div>}
            {block.text && (
              <div>
                <RichText text={block.text} />
              </div>
            )}
            {block.items && (
              <ul>
                {block.items.map((item, i) => (
                  <li key={i}>
                    <RichText text={item} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )
    }

    case 'decision':
      return (
        <div className="b-decision">
          <div className="b-decision-q">
            <RichText text={block.question} />
          </div>
          {block.detail && (
            <div className="b-decision-detail">
              <RichText text={block.detail} />
            </div>
          )}
          <div className="b-decision-branches">
            {block.branches.map((b, i) => (
              <BranchButton key={i} branch={b} ctx={ctx} />
            ))}
          </div>
        </div>
      )

    case 'table':
      return (
        <div className="b-table-wrap">
          {block.title && <div className="b-table-title">{block.title}</div>}
          <table className="b-table">
            <thead>
              <tr>
                {block.columns.map((c, i) => (
                  <th key={i}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.cells.map((cell, j) => (
                    <td key={j} data-label={block.columns[j]}>
                      <RichText text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    case 'link': {
      const condition = block.condition ? (
        <span className="b-link-cond">
          <RichText text={block.condition} />
        </span>
      ) : null
      if (block.anchor) {
        return (
          <button type="button" className="b-link" onClick={() => scrollToAnchor(block.anchor!)}>
            {condition}
            <span className="b-link-label">
              <ArrowRight size={18} aria-hidden /> {block.label}
            </span>
          </button>
        )
      }
      const available = block.protocolId ? ctx.availableProtocols.has(block.protocolId) : false
      if (!available) {
        return (
          <div className="b-link disabled">
            {condition}
            <span className="b-link-label">
              <ArrowRight size={18} aria-hidden /> {block.label}
              <em> (not published yet)</em>
            </span>
          </div>
        )
      }
      return (
        <Link className="b-link external" to={`/p/${block.protocolId}`}>
          {condition}
          <span className="b-link-label">
            <ArrowRight size={18} aria-hidden /> {block.label}
          </span>
        </Link>
      )
    }

    case 'contacts':
      return (
        <div className="b-contacts">
          <div className="b-contacts-title">{block.title}</div>
          {block.people.map((p, i) => (
            <div key={i} className="b-contact">
              <span>{p.name}</span>
              {p.phone ? (
                <a className="b-call" href={`tel:${p.phone.replace(/[^\d+]/g, '')}`}>
                  <Phone size={16} aria-hidden /> {p.phone}
                </a>
              ) : (
                <span className="muted">Number not set</span>
              )}
            </div>
          ))}
        </div>
      )

    case 'flow':
      return <FlowBlock nodes={block.nodes} ctx={ctx} />
  }
}
