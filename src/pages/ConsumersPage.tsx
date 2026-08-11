import { PageShell } from '../components/PageShell'
import { Link } from '@tanstack/react-router'
import { ArrowRight, Calendar, Zap } from 'lucide-react'

export function ConsumersPage() {
  return (
    <PageShell
      title="Inventory Consumers"
      subtitle="Who consumes IIS information and why"
      eyebrow="Section 04 · The Audience"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        {/* Section: Consumers */}
        <section>
          <div style={{ background: 'var(--color-stone)', padding: '2.5rem', borderRadius: '0.75rem', marginBottom: '3rem' }}>
            <p style={{ fontSize: '1.25rem', lineHeight: 1.6, margin: 0, color: 'var(--color-ink)', fontStyle: 'italic' }}>
              "HERO reads aggregated inventory snapshots daily for planning, while ERP and OMS systems subscribe to real-time inventory updates for operational and customer-facing decisions."
            </p>
          </div>

          <div style={{ display: 'grid', gap: '1.5rem' }}>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', background: 'white', padding: '2rem', border: '1px solid var(--color-border)', borderRadius: '0.75rem' }}>
              <div style={{ flex: '1 1 200px' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '0.5rem' }}>HERO Planning</h3>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-muted-foreground)', background: 'var(--color-stone)', padding: '0.25rem 0.75rem', borderRadius: '2rem' }}>
                  <Calendar size={14} /> Daily
                </div>
              </div>
              <div style={{ flex: '2 1 300px' }}>
                <h4 style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-muted-foreground)', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>Purpose</h4>
                <p style={{ fontSize: '1rem', color: 'var(--color-ink)', margin: 0 }}>
                  Demand and replenishment planning across the network
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', background: 'white', padding: '2rem', border: '1px solid var(--color-border)', borderRadius: '0.75rem' }}>
              <div style={{ flex: '1 1 200px' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '0.5rem' }}>ERP Systems</h3>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-accent-blue)', background: 'var(--color-stone)', padding: '0.25rem 0.75rem', borderRadius: '2rem' }}>
                  <Zap size={14} /> Real-time
                </div>
              </div>
              <div style={{ flex: '2 1 300px' }}>
                <h4 style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-muted-foreground)', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>Purpose</h4>
                <p style={{ fontSize: '1rem', color: 'var(--color-ink)', margin: 0 }}>
                  Operational inventory balances and financial reconciliation
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', background: 'white', padding: '2rem', border: '1px solid var(--color-border)', borderRadius: '0.75rem' }}>
              <div style={{ flex: '1 1 200px' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '0.5rem' }}>OMS Systems</h3>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-accent-blue)', background: 'var(--color-stone)', padding: '0.25rem 0.75rem', borderRadius: '2rem' }}>
                  <Zap size={14} /> Real-time
                </div>
              </div>
              <div style={{ flex: '2 1 300px' }}>
                <h4 style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-muted-foreground)', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>Purpose</h4>
                <p style={{ fontSize: '1rem', color: 'var(--color-ink)', margin: 0 }}>
                  Order routing, sourcing and fulfilment decisions
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Footer Navigation */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
          <Link 
            to="/concepts"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'var(--color-ink)', color: 'white',
              padding: '0.875rem 1.5rem', borderRadius: '0.5rem',
              textDecoration: 'none', fontWeight: 600, fontSize: '0.9375rem',
              transition: 'opacity 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Next: Key Concepts <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </PageShell>
  )
}
