import { PageShell } from '../components/PageShell'
import { Link } from '@tanstack/react-router'
import { ArrowRight, Mail, Brain, Network, Database } from 'lucide-react'

export function NexusVsIISPage() {
  return (
    <PageShell
      title="Nexus vs. IIS: The Messenger & The Brain"
      subtitle="Understanding how our two most critical systems work together."
      eyebrow="Section 02 · System Roles"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        {/* Hero Concept */}
        <section style={{ textAlign: 'center', background: 'var(--color-ink)', color: 'white', padding: '3.5rem 2rem', borderRadius: '0.75rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--color-accent-blue-soft)', lineHeight: 1.3 }}>
            Nexus connects the systems. <br/>IIS calculates the truth.
          </h2>
          <p style={{ fontSize: '1.125rem', maxWidth: '42rem', margin: '0 auto', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
            They are two halves of the same coin. One handles the secure transportation of raw data across the globe, while the other applies Pandora's business rules to figure out exactly what that data means for our stock.
          </p>
        </section>

        {/* The Two Systems */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          {/* Nexus */}
          <div style={{ background: '#138D75', color: 'white', padding: '2.5rem', borderRadius: '0.75rem', position: 'relative', overflow: 'hidden', boxShadow: '0 10px 25px -5px rgba(19, 141, 117, 0.3)' }}>
            <Network size={160} style={{ position: 'absolute', right: -30, bottom: -30, opacity: 0.15 }} />
            
            <div style={{ display: 'inline-flex', background: 'rgba(255,255,255,0.2)', padding: '0.75rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
              <Mail size={32} />
            </div>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>Nexus: The Messenger</h3>
            <p style={{ fontSize: '1rem', opacity: 0.9, marginBottom: '2.5rem' }}>Our global Event-Driven Integration Platform.</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', zIndex: 2 }}>
              <div>
                <h4 style={{ fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.8, marginBottom: '0.5rem', fontWeight: 700 }}>Superpower</h4>
                <p style={{ fontSize: '1.125rem', fontWeight: 600, margin: 0 }}>Speed and Connectivity ⚡</p>
              </div>
              <div>
                <h4 style={{ fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.8, marginBottom: '0.5rem', fontWeight: 700 }}>What it does</h4>
                <p style={{ margin: 0, lineHeight: 1.6 }}>Acts as a massive global post office. It guarantees that raw data (like a shipment receipt) is securely delivered between systems in real-time.</p>
              </div>
              <div>
                <h4 style={{ fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.8, marginBottom: '0.5rem', fontWeight: 700 }}>What it doesn't do</h4>
                <p style={{ margin: 0, lineHeight: 1.6 }}>It doesn't know or care what the data means. It just delivers the envelope.</p>
              </div>
            </div>
          </div>

          {/* IIS */}
          <div style={{ background: 'white', border: '2px solid var(--color-accent-blue)', color: 'var(--color-ink)', padding: '2.5rem', borderRadius: '0.75rem', position: 'relative', overflow: 'hidden', boxShadow: '0 10px 25px -5px rgba(56, 189, 248, 0.15)' }}>
            <Database size={160} color="var(--color-accent-blue)" style={{ position: 'absolute', right: -30, bottom: -30, opacity: 0.05 }} />
            
            <div style={{ display: 'inline-flex', background: 'rgba(56, 189, 248, 0.1)', color: 'var(--color-accent-blue)', padding: '0.75rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
              <Brain size={32} />
            </div>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-accent-blue)' }}>IIS: The Brain</h3>
            <p style={{ fontSize: '1rem', color: 'var(--color-muted-foreground)', marginBottom: '2.5rem' }}>Our Inventory Information Service.</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', zIndex: 2 }}>
              <div>
                <h4 style={{ fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-muted-foreground)', marginBottom: '0.5rem', fontWeight: 700 }}>Superpower</h4>
                <p style={{ fontSize: '1.125rem', fontWeight: 600, margin: 0 }}>Business Logic and Intelligence 🧠</p>
              </div>
              <div>
                <h4 style={{ fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-muted-foreground)', marginBottom: '0.5rem', fontWeight: 700 }}>What it does</h4>
                <p style={{ margin: 0, lineHeight: 1.6 }}>Reads those raw messages and applies Pandora's complex rules (like hallmarking laws) to figure out the exact, sellable inventory truth.</p>
              </div>
              <div>
                <h4 style={{ fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-muted-foreground)', marginBottom: '0.5rem', fontWeight: 700 }}>What it doesn't do</h4>
                <p style={{ margin: 0, lineHeight: 1.6 }}>It doesn't worry about how to connect to hundreds of different systems — it relies entirely on Nexus for that.</p>
              </div>
            </div>
          </div>
          
        </section>

        {/* Real World Scenario */}
        <section>
          <h2 className="heading" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-ink)' }}>How They Work Together (A Real-World Example)</h2>
          
          <div style={{ background: 'var(--color-stone)', padding: '2.5rem', borderRadius: '0.75rem', border: '1px solid var(--color-border)' }}>
            <p style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '2rem', color: 'var(--color-ink)' }}>
              Scenario: A box of gold rings arrives at our UK Distribution Center.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              {/* Step 1 */}
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', background: 'white', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid var(--color-border)', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#138D75', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0, fontSize: '1.125rem' }}>1</div>
                <div>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-ink)' }}>The Warehouse fires a raw event into <span style={{ color: '#138D75' }}>Nexus</span></h4>
                  <p style={{ margin: 0, color: 'var(--color-muted-foreground)', lineHeight: 1.6 }}>
                    The UK Warehouse system (WMS) says: <em>"I just received 50 gold rings!"</em> It drops this message onto the Nexus highway. Nexus delivers it instantly, but has no idea if those rings can actually be sold yet.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', background: 'white', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid var(--color-border)', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--color-accent-blue)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0, fontSize: '1.125rem' }}>2</div>
                <div>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-ink)' }}><span style={{ color: 'var(--color-accent-blue)' }}>IIS</span> picks it up and applies logic</h4>
                  <p style={{ margin: 0, color: 'var(--color-muted-foreground)', lineHeight: 1.6 }}>
                    IIS reads the message and checks its rules engine. It realizes: <em>"Wait, this is the UK. Gold jewelry MUST be hallmarked by law before it can be sold."</em>
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', background: 'white', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid var(--color-border)', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--color-ink)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0, fontSize: '1.125rem' }}>3</div>
                <div>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-ink)' }}>The new truth is born</h4>
                  <p style={{ margin: 0, color: 'var(--color-muted-foreground)', lineHeight: 1.6 }}>
                    IIS stores the inventory state as <strong>Unavailable (Pending Hallmarking)</strong>. It then uses Nexus to broadcast this final truth to the eCommerce site so customers don't accidentally buy them!
                  </p>
                </div>
              </div>

            </div>
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
