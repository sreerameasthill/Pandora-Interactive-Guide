import { PageShell } from '../components/PageShell'
import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

export function NexusVsIISPage() {
  return (
    <PageShell
      title="Nexus vs. IIS: Understanding the Difference"
      subtitle="In the Pandora ecosystem, IIS and Nexus are the two most critical components of our inventory and integration architecture. While they work closely together, they serve completely different purposes."
      eyebrow="Section 02 · Integration vs Processing"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        {/* Intro Quote */}
        <div style={{ borderLeft: '4px solid var(--color-accent-blue)', paddingLeft: '1.5rem' }}>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-ink)', margin: 0, fontStyle: 'italic' }}>
            "Think of Nexus as the 'Highway' and IIS as the 'Traffic Control & Processing Center'."
          </p>
        </div>

        {/* Side-by-side comparison */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          {/* Nexus */}
          <div style={{ background: '#138D75', color: 'white', padding: '2rem', borderRadius: '0.75rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>1. Nexus — The Highway / Message Broker</h3>
            
            <p style={{ fontSize: '1rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              Nexus is Pandora's global Event-Driven Integration Platform (built on Kafka/Azure Service Bus).
            </p>
            
            <p style={{ fontSize: '1rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              <strong>Role:</strong> A "transportation layer" that moves data between systems in real-time using Events.
            </p>
            
            <p style={{ fontSize: '1rem', marginBottom: '2rem', lineHeight: 1.6 }}>
              <strong>How it works:</strong> A system (like a Warehouse) "Publishes" an event to a topic on Nexus, and other systems (like OMS or IIS) "Subscribe" to that topic to receive the data.
            </p>
            
            <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem' }}>Key Features:</h4>
            <ul style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1rem', lineHeight: 1.5 }}>
              <li><strong>Decoupling:</strong> Systems don't need to talk to each other directly.</li>
              <li><strong>Standardization:</strong> Enforces a common "language" (Avro/JSON schemas) so every system understands the data.</li>
              <li><strong>NMS (Nexus Management System):</strong> The UI where we monitor these events and schemas.</li>
            </ul>
          </div>

          {/* IIS */}
          <div style={{ background: 'white', border: '1px solid var(--color-border)', color: 'var(--color-ink)', padding: '2rem', borderRadius: '0.75rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--color-accent-blue)' }}>2. IIS — The Processing Center / Inventory Master</h3>
            
            <p style={{ fontSize: '1rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              IIS (Inventory Information Service) is the "System of Truth" for all inventory across Pandora.
            </p>
            
            <p style={{ fontSize: '1rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              <strong>Role:</strong> A specialized microservice (our team's product) that calculates and manages inventory logic.
            </p>
            
            <p style={{ fontSize: '1rem', marginBottom: '2rem', lineHeight: 1.6 }}>
              <strong>How it works:</strong> IIS listens to raw events on Nexus, performs complex business logic (like hallmarking rules or safety stock calculations), and then publishes the "Clean Truth" back to Nexus for other systems to use.
            </p>
            
            <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem' }}>Key Features:</h4>
            <ul style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1rem', lineHeight: 1.5 }}>
              <li><strong>Logic & Rules:</strong> IIS knows that a gold ring in the UK can't be sold until it's hallmarked; Nexus doesn't know that.</li>
              <li><strong>Persistence:</strong> IIS stores inventory history and snapshots in its own database (Cosmos DB).</li>
              <li><strong>Reconciliation:</strong> Compares warehouse snapshots with its own records to find discrepancies.</li>
            </ul>
          </div>
          
        </section>

        {/* Table Comparison */}
        <section>
          <h2 className="heading" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-ink)' }}>Key Differences at a Glance</h2>
          <div style={{ overflowX: 'auto', borderRadius: '0.5rem', border: '1px solid var(--color-border)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
              <thead>
                <tr>
                  <th style={{ padding: '1rem', background: '#e2e8f0', color: 'var(--color-ink)', borderBottom: '2px solid white', width: '25%' }}>Feature</th>
                  <th style={{ padding: '1rem', background: '#cbd5e1', color: 'var(--color-ink)', borderBottom: '2px solid white', width: '37.5%' }}>Nexus</th>
                  <th style={{ padding: '1rem', background: '#e2e8f0', color: 'var(--color-ink)', borderBottom: '2px solid white', width: '37.5%' }}>IIS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '1rem', borderBottom: '1px solid var(--color-border)', color: 'var(--color-muted-foreground)' }}>Analogy</td>
                  <td style={{ padding: '1rem', borderBottom: '1px solid var(--color-border)' }}>The Highway (Transport)</td>
                  <td style={{ padding: '1rem', borderBottom: '1px solid var(--color-border)' }}>The Warehouse Manager (Logic)</td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem', borderBottom: '1px solid var(--color-border)', color: 'var(--color-muted-foreground)' }}>Primary Function</td>
                  <td style={{ padding: '1rem', borderBottom: '1px solid var(--color-border)' }}>Moving data between systems</td>
                  <td style={{ padding: '1rem', borderBottom: '1px solid var(--color-border)' }}>Calculating and storing inventory truth</td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem', borderBottom: '1px solid var(--color-border)', color: 'var(--color-muted-foreground)' }}>Intelligence</td>
                  <td style={{ padding: '1rem', borderBottom: '1px solid var(--color-border)' }}>Low (just passes messages)</td>
                  <td style={{ padding: '1rem', borderBottom: '1px solid var(--color-border)' }}>High (applies business & supply rules)</td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem', borderBottom: '1px solid var(--color-border)', color: 'var(--color-muted-foreground)' }}>Data Storage</td>
                  <td style={{ padding: '1rem', borderBottom: '1px solid var(--color-border)' }}>Temporary (messages expire)</td>
                  <td style={{ padding: '1rem', borderBottom: '1px solid var(--color-border)' }}>Permanent (stores stock history in Cosmos DB)</td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem', borderBottom: '1px solid var(--color-border)', color: 'var(--color-muted-foreground)' }}>Ownership</td>
                  <td style={{ padding: '1rem', borderBottom: '1px solid var(--color-border)' }}>Nexus/EDA Team</td>
                  <td style={{ padding: '1rem', borderBottom: '1px solid var(--color-border)' }}>Our Team (IIS)</td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem', color: 'var(--color-muted-foreground)' }}>Example Action</td>
                  <td style={{ padding: '1rem' }}>"Carrying a 'Shipment Confirmed' message from GXO to OMS"</td>
                  <td style={{ padding: '1rem' }}>"Subtracting 5 units from UK stock because they are not yet hallmarked"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Footer Navigation */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
          <Link 
            to="/how-iis-works"
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
            Next: How IIS Works <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </PageShell>
  )
}
