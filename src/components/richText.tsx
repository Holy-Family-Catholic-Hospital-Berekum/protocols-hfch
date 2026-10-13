import type { ReactNode } from 'react'
import { parseRichText } from '../lib/richTextParse'

export function RichText({ text }: { text: string }): ReactNode {
  return parseRichText(text).map((s, i) => {
    let node: ReactNode = s.text
    if (s.bold) node = <strong>{node}</strong>
    if (s.alert) node = <span className="rt-alert">{node}</span>
    return <span key={i}>{node}</span>
  })
}
