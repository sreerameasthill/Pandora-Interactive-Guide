import { PageShell } from '../components/PageShell'
import { Link } from '@tanstack/react-router'
import { ArrowRight, Settings, Activity, Box, Truck, FileText } from 'lucide-react'
import { Flowchart } from '../components/Flowchart'
export function HowItWorksPage() {
  return (
    <PageShell
      title="How IIS Works"
      subtitle="The core mechanics of the Inventory Derivation Engine"
      eyebrow="Section 02 · The Core Mechanic"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>

        {/* Section: Data Flow */}
        <section>
          <h2 className="heading" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-ink)' }}>Data Flow Architecture</h2>
          <Flowchart />
        </section>

        {/* Section: Single Source of Truth */}
        <section>
          <h2 className="heading" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-ink)' }}>IIS: The Single Source of Truth</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.6, color: 'var(--color-ink)', margin: 0 }}>
              IIS serves as the centralized "Single Source of Truth" for inventory visibility across Pandora's global supply chain. It bridges the critical gap between physical inventory movements happening on warehouse floors and store registers, and the digital sales channels that customers interact with every day.
            </p>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.6, color: 'var(--color-muted-foreground)', margin: 0 }}>
              Without IIS, each downstream system would need to independently track and reconcile inventory from dozens of source systems — creating data inconsistencies, overselling risks, and operational blind spots. IIS eliminates that complexity by acting as the authoritative, always-current record.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
              <div style={{ borderLeft: '4px solid var(--color-accent-blue)', padding: '1.5rem', background: 'white', border: '1px solid var(--color-border)', borderRadius: '0 0.5rem 0.5rem 0' }}>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '0.5rem' }}>Distribution Centers</h4>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted-foreground)', margin: 0 }}>Warehouse inventory from WMS systems like Reflex and GXO</p>
              </div>
              <div style={{ borderLeft: '4px solid var(--color-accent-blue)', padding: '1.5rem', background: 'white', border: '1px solid var(--color-border)', borderRadius: '0 0.5rem 0.5rem 0' }}>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '0.5rem' }}>3PL Partners</h4>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted-foreground)', margin: 0 }}>Third-party logistics inventory via PDA integrations</p>
              </div>
              <div style={{ borderLeft: '4px solid var(--color-accent-blue)', padding: '1.5rem', background: 'white', border: '1px solid var(--color-border)', borderRadius: '0 0.5rem 0.5rem 0' }}>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '0.5rem' }}>Retail Stores</h4>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted-foreground)', margin: 0 }}>Real-time POS data from mPOS, KWI, and Salesforce</p>
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
