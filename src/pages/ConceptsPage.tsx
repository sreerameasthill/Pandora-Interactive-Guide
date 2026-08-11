import { PageShell } from '../components/PageShell'
import { Search, ChevronDown, ChevronUp } from 'lucide-react'
import { useState, useMemo } from 'react'

const CONCEPTS = [
  { id: 'IIS', category: 'Platform', term: 'IIS', def: "Inventory Information Service; Pandora's centralized inventory visibility platform." },
  { id: 'Nexus', category: 'Platform', term: 'Nexus', def: "Event backbone that streams source-system events into IIS for derivation." },
  { id: 'TDC', category: 'Location', term: 'TDC', def: "Thailand Distribution Centre; central global DC near production." },
  { id: 'USDC', category: 'Location', term: 'USDC', def: "United States Distribution Centre." },
  { id: 'EDC', category: 'Location', term: 'EDC', def: "European Distribution Centre." },
  { id: 'UKDC', category: 'Location', term: 'UKDC', def: "United Kingdom Distribution Centre." },
  { id: '3PL', category: 'Location', term: '3PL', def: "Third-Party Logistics provider operating a warehouse on Pandora's behalf." },
  { id: 'ERP', category: 'System', term: 'ERP', def: "Enterprise Resource Planning; operational and financial system of record." },
  { id: 'WMS', category: 'System', term: 'WMS', def: "Warehouse Management System; manages on-site warehouse operations." },
  { id: 'POS', category: 'System', term: 'POS', def: "Point of Sale; records store sales and updates store inventory." },
  { id: 'OMS', category: 'System', term: 'OMS', def: "Order Management System; orchestrates order routing and fulfilment." },
  { id: 'TMS', category: 'System', term: 'TMS', def: "Transportation Management System; plans and executes shipments." },
  { id: 'HERO', category: 'System', term: 'HERO', def: "Pandora's demand and supply planning platform; daily consumer of IIS data." },
  { id: 'OnHand', category: 'Inventory', term: 'On-Hand Inventory', def: "Stock physically available at a location (DC, 3PL or store)." },
  { id: 'InTransit', category: 'Inventory', term: 'In-Transit Inventory', def: "Stock moving between two locations across the network." },
].sort((a, b) => a.term.localeCompare(b.term))

const CATEGORIES = ['All', 'Platform', 'Location', 'System', 'Inventory']

export function ConceptsPage() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})

  const filtered = useMemo(() => {
    return CONCEPTS.filter(c => {
      const matchCat = activeCategory === 'All' || c.category === activeCategory
      const matchSearch = c.term.toLowerCase().includes(search.toLowerCase()) || c.def.toLowerCase().includes(search.toLowerCase())
      return matchCat && matchSearch
    })
  }, [search, activeCategory])

  function toggle(id: string) {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <PageShell
      title="Key Concepts"
      subtitle="Important IIS terminology and glossary"
      eyebrow="Section 05 · Reference"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* Filters */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', background: 'var(--color-stone)', padding: '1rem', borderRadius: '0.75rem' }}>
          <div style={{ position: 'relative', flex: '1 1 300px' }}>
            <Search size={18} color="var(--color-muted-foreground)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="text" 
              placeholder="Search concepts..." 
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                width: '100%', padding: '0.75rem 1rem 0.75rem 2.5rem',
                border: '1px solid var(--color-border)', borderRadius: '0.5rem',
                fontSize: '0.9375rem', outline: 'none'
              }}
            />
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '2px' }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.375rem 0.875rem', borderRadius: '2rem',
                  fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer',
                  background: activeCategory === cat ? 'var(--color-ink)' : 'white',
                  color: activeCategory === cat ? 'white' : 'var(--color-muted-foreground)',
                  border: activeCategory !== cat ? '1px solid var(--color-border)' : '1px solid var(--color-ink)',
                  whiteSpace: 'nowrap'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {filtered.length === 0 ? (
            <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--color-muted-foreground)' }}>
              No concepts found matching your criteria.
            </div>
          ) : (
            filtered.map(concept => {
              const isExpanded = expanded[concept.id]
              return (
                <div key={concept.id} style={{ border: '1px solid var(--color-border)', borderRadius: '0.75rem', overflow: 'hidden', background: 'white' }}>
                  <button 
                    onClick={() => toggle(concept.id)}
                    style={{
                      width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '1.25rem 1.5rem', background: 'transparent', border: 'none',
                      cursor: 'pointer', textAlign: 'left'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <span style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-ink)' }}>{concept.term}</span>
                      <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-accent-blue)', background: 'var(--color-stone)', padding: '0.125rem 0.5rem', borderRadius: '1rem' }}>
                        {concept.category}
                      </span>
                    </div>
                    {isExpanded ? <ChevronUp size={20} color="var(--color-muted-foreground)" /> : <ChevronDown size={20} color="var(--color-muted-foreground)" />}
                  </button>
                  {isExpanded && (
                    <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem', color: 'var(--color-muted-foreground)' }}>
                      <p style={{ margin: 0, fontSize: '0.9375rem', lineHeight: 1.6 }}>{concept.def}</p>
                    </div>
                  )}
                </div>
              )
            })
          )}
        </div>

      </div>
    </PageShell>
  )
}
