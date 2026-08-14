import { PageShell } from '../components/PageShell'
import { Link } from '@tanstack/react-router'
import { ArrowRight, Settings, Activity, Box, Truck, FileText } from 'lucide-react'

export function HowItWorksPage() {
  return (
    <PageShell
      title="How IIS Works"
      subtitle="The core mechanics of the Inventory Derivation Engine"
      eyebrow="Section 02 · The Core Mechanic"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>

        {/* Section: The Core Principle */}
        <section>
          <div style={{ padding: '2rem', background: 'var(--color-ink)', color: 'white', borderRadius: '0.75rem', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--color-accent-blue-soft)' }}>The Golden Rule</h2>
            <p style={{ fontSize: '1.25rem', lineHeight: 1.5, margin: 0 }}>
              IIS does not store transactions. It <strong>DERIVES</strong> inventory state from events flowing across Pandora's source systems.
            </p>
          </div>

          <h2 className="heading" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-ink)' }}>The Derivation Pipeline</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', background: 'var(--color-stone)', padding: '2.5rem', borderRadius: '0.75rem', border: '1px solid var(--color-border)' }}>
            
            {/* Step 1: Event Inputs */}
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-muted-foreground)', marginBottom: '1rem', letterSpacing: '0.05em' }}>1. Event Inputs</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {['Order Events', 'Receipt Events', 'Warehouse Events', 'Shipment Events', 'Delivery Events'].map(evt => (
                  <span key={evt} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--color-stone)', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.9375rem', color: 'var(--color-ink)', border: '1px solid var(--color-border)' }}>
                    <Activity size={14} color="var(--color-accent-blue)" /> {evt}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}><ArrowRight size={24} color="var(--color-muted-foreground)" /></div>

            {/* Step 2: Derivation Engine */}
            <div style={{ background: 'var(--color-accent-blue)', padding: '1.5rem', borderRadius: '0.5rem', color: 'white', textAlign: 'center' }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>2. Processing</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', fontSize: '1.25rem', fontWeight: 600 }}>
                <Settings size={24} /> Inventory Derivation Engine
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}><ArrowRight size={24} color="var(--color-muted-foreground)" /></div>

            {/* Step 3: IIS -> Output Views */}
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-muted-foreground)', marginBottom: '1rem', letterSpacing: '0.05em' }}>3. IIS Output Views</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                <div style={{ border: '1px solid var(--color-border)', padding: '1.25rem', borderRadius: '0.5rem' }}>
                  <Box size={20} color="var(--color-accent-blue)" style={{ marginBottom: '0.75rem' }} />
                  <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '0.5rem' }}>1. On-Hand Inventory</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-muted-foreground)', margin: 0 }}>Stock physically available at a location.</p>
                </div>
                <div style={{ border: '1px solid var(--color-border)', padding: '1.25rem', borderRadius: '0.5rem' }}>
                  <Truck size={20} color="var(--color-accent-blue)" style={{ marginBottom: '0.75rem' }} />
                  <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '0.5rem' }}>2. In-Transit Inventory</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-muted-foreground)', margin: 0 }}>Stock moving between locations.</p>
                </div>
                <div style={{ border: '1px solid var(--color-border)', padding: '1.25rem', borderRadius: '0.5rem' }}>
                  <FileText size={20} color="var(--color-accent-blue)" style={{ marginBottom: '0.75rem' }} />
                  <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '0.5rem' }}>3. Order Tracking</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-muted-foreground)', margin: 0 }}>B2B order lifecycle across the network.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Section: Scope of Coverage */}
        <section>
          <h2 className="heading" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-ink)' }}>Scope of Coverage (Three Tracks)</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            
            <div style={{ background: 'var(--color-stone)', padding: '2rem', borderRadius: '0.75rem' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '1rem' }}>On-Hand Inventory</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', color: 'var(--color-muted-foreground)', fontSize: '0.9375rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>Distribution Centres (DCs)</li>
                <li>Third-Party Logistics (3PLs)</li>
                <li>Stores</li>
              </ul>
            </div>

            <div style={{ background: 'var(--color-stone)', padding: '2rem', borderRadius: '0.75rem' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '1rem' }}>In-Transit Inventory</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', color: 'var(--color-muted-foreground)', fontSize: '0.9375rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>Manufacturing → DC</li>
                <li>DC → DC</li>
                <li>DC → 3PL</li>
                <li>DC → Store</li>
                <li>3PL → Store</li>
              </ul>
            </div>

            <div style={{ background: 'var(--color-stone)', padding: '2rem', borderRadius: '0.75rem' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '1rem' }}>Order Tracking</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', color: 'var(--color-muted-foreground)', fontSize: '0.9375rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>B2B order flows only</li>
              </ul>
              <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(255,0,0,0.05)', borderLeft: '3px solid var(--color-ink)', borderRadius: '0 0.5rem 0.5rem 0' }}>
                <strong style={{ fontSize: '0.875rem', color: 'var(--color-ink)' }}>Note:</strong>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-muted-foreground)', margin: '0.25rem 0 0' }}>
                  Direct customer deliveries (B2C) are NOT tracked in IIS.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Footer Navigation */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
          <Link 
            to="/supply-chain"
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
            Next: Supply Chain Map <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </PageShell>
  )
}
