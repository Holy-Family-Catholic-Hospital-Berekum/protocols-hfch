import type { Section } from '../../types/protocol'

export interface SubchapterGroup {
  title: string | null
  sections: Section[]
}

export interface ChapterGroup {
  title: string
  subchapters: SubchapterGroup[]
  count: number
}

/** Groups sections by chapter and subchapter, keeping document order. */
export function groupSections(sections: Section[]): ChapterGroup[] {
  const chapters: ChapterGroup[] = []
  for (const s of sections) {
    const chapterTitle = s.chapter ?? 'Other'
    let chapter = chapters[chapters.length - 1]
    if (!chapter || chapter.title !== chapterTitle) {
      chapter = { title: chapterTitle, subchapters: [], count: 0 }
      chapters.push(chapter)
    }
    const subTitle = s.subchapter ?? null
    let sub = chapter.subchapters[chapter.subchapters.length - 1]
    if (!sub || sub.title !== subTitle) {
      sub = { title: subTitle, sections: [] }
      chapter.subchapters.push(sub)
    }
    sub.sections.push(s)
    chapter.count++
  }
  return chapters
}

const LAST_KEY = (protocolId: string) => `handbook:last:${protocolId}`

export function rememberLastSection(protocolId: string, sectionId: string) {
  try {
    localStorage.setItem(LAST_KEY(protocolId), sectionId)
  } catch {
    /* storage unavailable */
  }
}

export function lastSection(protocolId: string): string | null {
  try {
    return localStorage.getItem(LAST_KEY(protocolId))
  } catch {
    return null
  }
}

export function sectionPath(protocolId: string, sectionId: string) {
  return `/p/${protocolId}/s/${sectionId}`
}
