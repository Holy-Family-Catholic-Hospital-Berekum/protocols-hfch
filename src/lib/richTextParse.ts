export interface Segment {
  text: string
  bold: boolean
  alert: boolean
}

/** Splits text on **bold** and !!alert!! markers (they may nest). */
export function parseRichText(input: string): Segment[] {
  const segments: Segment[] = []
  let bold = false
  let alert = false
  let buf = ''
  const flush = () => {
    if (buf) segments.push({ text: buf, bold, alert })
    buf = ''
  }
  for (let i = 0; i < input.length; i++) {
    const pair = input.slice(i, i + 2)
    if (pair === '**') {
      flush()
      bold = !bold
      i++
    } else if (pair === '!!') {
      flush()
      alert = !alert
      i++
    } else {
      buf += input[i]
    }
  }
  flush()
  return segments
}

export function stripRichText(input: string): string {
  return input.replace(/\*\*|!!/g, '')
}
