import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ChevronRight, DownloadCloud, FilePlus2, Loader2, Search, Sparkles, UserCheck, X } from 'lucide-react'
import { useAuth } from '../auth/authContext'
import { useProtocolList } from '../lib/protocolsContext'
import { searchProtocols } from '../lib/search'
import { CATEGORIES, getCategory } from '../config/categories'
import { daysSince, formatDate } from '../lib/format'
import { importStarterProtocols } from '../lib/protocols'
import { useUsers } from '../lib/users'
import { STARTER_PROTOCOLS } from '../data/starterProtocols'
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
  const { users } = useUsers(isAdmin)
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<string | null>(null)
  const [importing, setImporting] = useState(false)
  const [importMsg, setImportMsg] = useState('')

  const pendingCount = users.filter((u) => u.role === 'pending').length
  const missingStarters = isAdmin && !loading && Object.keys(STARTER_PROTOCOLS).some((id) => !protocols.some((p) => p.id === id))

  const results = useMemo(() => {
    const inCategory = category ? protocols.filter((p) => p.category === category) : protocols
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

  const usedCategories = CATEGORIES.filter((c) => protocols.some((p) => p.category === c.id))
  const searching = query.trim().length > 0 || category !== null

  const grouped = useMemo(() => {
    const map = new Map<string, Protocol[]>()
    for (const p of results) {
      const list = map.get(p.category) ?? []
      list.push(p)
      map.set(p.category, list)
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
        {usedCategories.length > 1 && (
          <div className="chips">
            <button type="button" className={`chip ${category === null ? 'on' : ''}`} onClick={() => setCategory(null)}>
              All
            </button>
            {usedCategories.map((c) => {
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
        )}
      </section>

      {isAdmin && (
        <section className="admin-strip">
          <button type="button" className="admin-tile glass" onClick={() => navigate('/admin/protocols/new')}>
            <FilePlus2 size={22} aria-hidden />
            <span>New protocol</span>
          </button>
          <Link to="/admin/users" className="admin-tile glass">
            <UserCheck size={22} aria-hidden />
            <span>Users</span>
            {pendingCount > 0 && <span className="count">{pendingCount}</span>}
          </Link>
          {missingStarters && (
            <button type="button" className="admin-tile glass" onClick={runImport} disabled={importing}>
              {importing ? <Loader2 size={22} className="spin" aria-hidden /> : <DownloadCloud size={22} aria-hidden />}
              <span>Import starter protocols</span>
            </button>
          )}
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
