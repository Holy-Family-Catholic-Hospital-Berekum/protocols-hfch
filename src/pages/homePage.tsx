import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, DownloadCloud, Loader2, Search, Sparkles, X } from 'lucide-react'
import { useAuth } from '../auth/authContext'
import { useProtocolList } from '../lib/protocolsContext'
import { searchProtocols } from '../lib/search'
import { CATEGORIES, getCategory } from '../config/categories'
import { daysSince, formatDate } from '../lib/format'
import { importStarterProtocols } from '../lib/protocols'
import { STARTER_IDS } from '../data/starterIds'
import type { Protocol } from '../types/protocol'

const RECENT_DAYS = 30

function ProtocolCard({ p, index }: { p: Protocol; index: number }) {
  const cat = getCategory(p.category)
  const Icon = cat.icon
  return (
    <Link to={`/p/${p.id}`} className="pcard glass" style={{ animationDelay: `${Math.min(index, 12) * 40}ms` }}>
      <div className="pcard-icon" style={{ background: `linear-gradient(135deg, ${cat.colors[0]}, ${cat.colors[1]})` }}>
        <Icon size={22} aria-hidden />
      </div>
      <div className="pcard-body">
        <div className="pcard-title">
          {p.title}
          {p.status === 'draft' && <span className="pill draft">Draft</span>}
        </div>
        <div className="pcard-meta">
          {cat.name} · {p.version}
          {p.status === 'published' && <> · Verified {formatDate(p.verifiedAt)}</>}
        </div>
      </div>
      <ChevronRight size={20} className="pcard-chevron" aria-hidden />
    </Link>
  )
}

function greeting() {
  const h = new Date().getHours()
  if (h < 12) return 'Good morning'
  if (h < 17) return 'Good afternoon'
  return 'Good evening'
}

export function HomePage() {
  const { profile, user } = useAuth()
  const isAdmin = profile?.role === 'admin'
  const { protocols, loading, error } = useProtocolList()
  const location = useLocation()
  const searchRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<string | null>(null)
  const [importing, setImporting] = useState(false)
  const [importMsg, setImportMsg] = useState('')

  // Bottom-nav "Search" lands here with focusSearch in the navigation state.
  const focusSearch = (location.state as { focusSearch?: number } | null)?.focusSearch
  useEffect(() => {
    if (!focusSearch) return
    window.scrollTo({ top: 0, behavior: 'smooth' })
    searchRef.current?.focus({ preventScroll: true })
  }, [focusSearch])

  const missingStarters = isAdmin && !loading && STARTER_IDS.some((id) => !protocols.some((p) => p.id === id))

  const results = useMemo(() => {
    const inCategory = category ? protocols.filter((p) => getCategory(p.category).id === category) : protocols
    return searchProtocols(inCategory, query)
  }, [protocols, query, category])

  const recent = useMemo(
    () =>
      protocols
        .filter((p) => p.status === 'published' && daysSince(p.verifiedAt) <= RECENT_DAYS)
        .sort((a, b) => (b.verifiedAt?.toMillis() ?? 0) - (a.verifiedAt?.toMillis() ?? 0))
        .slice(0, 6),
    [protocols],
  )

  const searching = query.trim().length > 0 || category !== null

  const grouped = useMemo(() => {
    const map = new Map<string, Protocol[]>()
    for (const p of results) {
      const id = getCategory(p.category).id
      const list = map.get(id) ?? []
      list.push(p)
      map.set(id, list)
    }
    return CATEGORIES.filter((c) => map.has(c.id)).map((c) => ({ category: c, items: map.get(c.id)! }))
  }, [results])

  const runImport = async () => {
    if (!user) return
    setImporting(true)
    setImportMsg('')
    try {
      const n = await importStarterProtocols(user.uid)
      setImportMsg(`${n} protocol${n === 1 ? '' : 's'} imported as drafts. Verify each one before publishing.`)
    } catch (err) {
      setImportMsg(err instanceof Error ? err.message : 'Import failed.')
    } finally {
      setImporting(false)
    }
  }

  const firstName = (profile?.displayName ?? '').split(' ').slice(0, 2).join(' ')

  return (
    <div className="home">
      <section className="hero">
        <p className="hero-greet">
          {greeting()}
          {firstName ? `, ${firstName}` : ''}
        </p>
        <h1>
          Clinical <span className="grad-text">Protocols</span>
        </h1>
        <div className="search glass">
          <Search size={20} aria-hidden />
          <input
            ref={searchRef}
            type="search"
            placeholder="Search protocols, drugs, conditions…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search protocols"
          />
          {query && (
            <button type="button" className="icon-btn" onClick={() => setQuery('')} aria-label="Clear search">
              <X size={18} />
            </button>
          )}
        </div>
        <div className="chips">
          <button type="button" className={`chip ${category === null ? 'on' : ''}`} onClick={() => setCategory(null)}>
            All
          </button>
          {CATEGORIES.map((c) => {
            const Icon = c.icon
            return (
              <button
                key={c.id}
                type="button"
                className={`chip ${category === c.id ? 'on' : ''}`}
                onClick={() => setCategory(category === c.id ? null : c.id)}
              >
                <Icon size={15} aria-hidden /> {c.name}
              </button>
            )
          })}
        </div>
    </section>

      {missingStarters && (
        <section className="admin-strip">
          <button type="button" className="admin-tile glass" onClick={runImport} disabled={importing}>
            {importing ? <Loader2 size={22} className="spin" aria-hidden /> : <DownloadCloud size={22} aria-hidden />}
            <span>Import starter protocols</span>
          </button>
        </section>
      )}
      {importMsg && <div className="notice">{importMsg}</div>}

      {error && <div className="form-error">Could not load protocols: {error}</div>}

      {loading ? (
        <div className="skeletons">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="skeleton glass" />
          ))}
        </div>
      ) : (
        <>
          {!searching && recent.length > 0 && (
            <section className="recent">
              <h2 className="list-head">
                <Sparkles size={18} aria-hidden /> Recently updated
              </h2>
              <div className="recent-row">
                {recent.map((p) => {
                  const cat = getCategory(p.category)
                  const Icon = cat.icon
                  return (
                    <Link
                      key={p.id}
                      to={`/p/${p.id}`}
                      className="recent-card"
                      style={{ background: `linear-gradient(140deg, ${cat.colors[0]}, ${cat.colors[1]})` }}
                    >
                      <Icon size={26} aria-hidden />
                      <strong>{p.title}</strong>
                      <span>
                        {p.version} · {formatDate(p.verifiedAt)}
                      </span>
                    </Link>
                  )
                })}
              </div>
            </section>
          )}

          {results.length === 0 ? (
            <div className="empty glass">
              {protocols.length === 0
                ? isAdmin
                  ? 'No protocols yet. Import the starter protocols or create a new one.'
                  : 'No protocols have been published yet.'
                : 'No protocols match your search.'}
            </div>
          ) : query.trim() ? (
            <section className="group">
              <h2 className="list-head">
                {results.length} result{results.length === 1 ? '' : 's'}
              </h2>
              <div className="plist">
                {results.map((p, i) => (
                  <ProtocolCard key={p.id} p={p} index={i} />
                ))}
              </div>
            </section>
          ) : (
            grouped.map(({ category: c, items }) => (
              <section key={c.id} className="group">
                <h2 className="list-head">{c.name}</h2>
                <div className="plist">
                  {items.map((p, i) => (
                    <ProtocolCard key={p.id} p={p} index={i} />
                  ))}
                </div>
              </section>
            ))
          )}
        </>
      )}
    </div>
  )
}
