import { useEffect, useState } from 'react'
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  runTransaction,
  serverTimestamp,
  setDoc,
  where,
  type DocumentData,
  type DocumentReference,
  type Transaction,
} from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { db, storage } from './firebase'
import type { Attachment, Protocol, ProtocolContent, ProtocolVersion, Section } from '../types/protocol'

const protocolsCol = collection(db, 'protocols')

const CONTENT_KEYS: (keyof ProtocolContent)[] = [
  'title',
  'category',
  'version',
  'summary',
  'keywords',
  'sections',
  'attachments',
  'timer',
]

export function pickContent(p: ProtocolContent): ProtocolContent {
  const out = {} as Record<string, unknown>
  for (const k of CONTENT_KEYS) out[k] = p[k]
  return out as unknown as ProtocolContent
}

export function emptyProtocol(): ProtocolContent {
  return {
    title: '',
    category: '',
    version: 'v1.0',
    summary: '',
    keywords: [],
    sections: [],
    attachments: [],
    timer: { enabled: false },
  }
}

/** Live list of protocols. Staff only receive published ones (enforced by security rules too). */
export function useProtocols(includeDrafts: boolean) {
  const [protocols, setProtocols] = useState<Protocol[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const q = includeDrafts ? query(protocolsCol) : query(protocolsCol, where('status', '==', 'published'))
    return onSnapshot(
      q,
      (snap) => {
        setProtocols(snap.docs.map((d) => ({ id: d.id, ...d.data() }) as Protocol))
        setLoading(false)
      },
      (err) => {
        setError(err.message)
        setLoading(false)
      },
    )
  }, [includeDrafts])

  return { protocols, loading, error }
}

export async function listVersions(id: string): Promise<ProtocolVersion[]> {
  const snap = await getDocs(query(collection(protocolsCol, id, 'versions'), orderBy('archivedAt', 'desc')))
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }) as ProtocolVersion)
}

export async function getVersion(id: string, versionId: string): Promise<ProtocolVersion | null> {
  const snap = await getDoc(doc(protocolsCol, id, 'versions', versionId))
  return snap.exists() ? ({ id: snap.id, ...snap.data() } as ProtocolVersion) : null
}

export function slugify(title: string): string {
  const base = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 48)
  return `${base || 'protocol'}-${Math.random().toString(36).slice(2, 7)}`
}

/** Create or overwrite a draft. Never touches a published protocol. */
export async function saveDraft(id: string, content: ProtocolContent, uid: string) {
  await runTransaction(db, async (tx) => {
    const ref = doc(protocolsCol, id)
    const current = await tx.get(ref)
    if (current.exists() && current.data().status === 'published') {
      throw new Error('This protocol is published. Use "Verify & publish" to update it.')
    }
    tx.set(ref, {
      ...pickContent(content),
      status: 'draft',
      verifiedBy: null,
      verifiedAt: null,
      changedSections: [],
      changeNote: '',
      updatedAt: serverTimestamp(),
      updatedBy: uid,
    })
  })
}

function changedSectionIds(before: Section[], after: Section[]): string[] {
  const prev = new Map(before.map((s) => [s.id, JSON.stringify(s)]))
  return after.filter((s) => prev.get(s.id) !== JSON.stringify(s)).map((s) => s.id)
}

// Must match archivedKeys() in firestore.rules.
const ARCHIVED_KEYS = [...CONTENT_KEYS, 'verifiedBy', 'verifiedAt', 'changeNote'] as const

/**
 * Copies a published protocol's current content into its versions sub-collection.
 * The rules only accept a change to a published protocol together with this exact copy,
 * linked by the returned lastArchiveId.
 */
function archiveCurrent(tx: Transaction, ref: DocumentReference, current: DocumentData, uid: string) {
  const versionRef = doc(collection(ref, 'versions'))
  const copy: DocumentData = {}
  for (const k of ARCHIVED_KEYS) if (current[k] !== undefined) copy[k] = current[k]
  tx.set(versionRef, { ...copy, archivedAt: serverTimestamp(), archivedBy: uid })
  return { lastArchiveId: versionRef.id }
}

/**
 * Publish after clinician verification. If a published version already exists it is
 * archived to the versions sub-collection first, and changed sections are recorded.
 */
export async function verifyAndPublish(
  id: string,
  content: ProtocolContent,
  verification: { verifiedBy: string; changeNote: string },
  uid: string,
) {
  await runTransaction(db, async (tx) => {
    const ref = doc(protocolsCol, id)
    const current = await tx.get(ref)
    let changed: string[] = []
    let archive = {}

    if (current.exists() && current.data().status === 'published') {
      const prev = current.data() as Protocol
      archive = archiveCurrent(tx, ref, prev, uid)
      changed = changedSectionIds(prev.sections ?? [], content.sections)
    }

    tx.set(ref, {
      ...pickContent(content),
      ...archive,
      status: 'published',
      verifiedBy: verification.verifiedBy.trim(),
      verifiedAt: serverTimestamp(),
      changedSections: changed,
      changeNote: verification.changeNote.trim(),
      updatedAt: serverTimestamp(),
      updatedBy: uid,
    })
  })
}

/** Back to draft. The live version is archived first, so later draft edits cannot lose it. */
export async function unpublish(id: string, uid: string) {
  await runTransaction(db, async (tx) => {
    const ref = doc(protocolsCol, id)
    const current = await tx.get(ref)
    if (!current.exists() || current.data().status !== 'published') return
    tx.update(ref, { ...archiveCurrent(tx, ref, current.data(), uid), status: 'draft', updatedAt: serverTimestamp(), updatedBy: uid })
  })
}

/** Imports the bundled starter protocols as drafts. Existing protocols are left untouched. */
export async function importStarterProtocols(uid: string): Promise<number> {
  let created = 0
  const { STARTER_PROTOCOLS } = await import('../data/starterProtocols')
  for (const [id, content] of Object.entries(STARTER_PROTOCOLS)) {
    const existing = await getDoc(doc(protocolsCol, id))
    if (existing.exists()) continue
    await setDoc(doc(protocolsCol, id), {
      ...content,
      status: 'draft',
      verifiedBy: null,
      verifiedAt: null,
      changedSections: [],
      changeNote: '',
      updatedAt: serverTimestamp(),
      updatedBy: uid,
    })
    created++
  }
  return created
}

export const ALLOWED_UPLOAD_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'image/png',
  'image/jpeg',
  'image/webp',
]
export const MAX_UPLOAD_BYTES = 20 * 1024 * 1024

export async function uploadAttachment(protocolId: string, file: File, isOriginal: boolean): Promise<Attachment> {
  if (!ALLOWED_UPLOAD_TYPES.includes(file.type)) throw new Error('Only PDF, Word documents and images can be uploaded.')
  if (file.size > MAX_UPLOAD_BYTES) throw new Error('File is larger than 20 MB.')
  const safeName = file.name.replace(/[^\w.-]+/g, '_').slice(-80)
  const path = `protocols/${protocolId}/${Date.now()}-${safeName}`
  const storageRef = ref(storage, path)
  await uploadBytes(storageRef, file, { contentType: file.type })
  const url = await getDownloadURL(storageRef)
  return { name: file.name, path, url, contentType: file.type, size: file.size, isOriginal }
}
