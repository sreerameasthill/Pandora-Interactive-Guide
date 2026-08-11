import { PageShell } from '../components/PageShell'
import { Link } from '@tanstack/react-router'
import { ArrowRight, Server, Store, Building2, Truck, Network, Database } from 'lucide-react'

export function ArchitecturePage() {
  return (
    <PageShell
      title="Systems & Architecture"
      subtitle="How events flow from source systems to unified visibility"
      eyebrow="Section 03 · Architecture"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        {/* Section: The Flow */}
        <section>
          <div style={{ padding: '3rem', background: 'var(--color-stone)', borderRadius: '0.75rem', border: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
            
            {/* Step 1: Source Systems */}
            <div style={{ width: '100%', maxWidth: '40rem', padding: '2rem', background: 'white', borderRadius: '0.75rem', border: '1px solid var(--color-border)', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-muted-foreground)', marginBottom: '1.5rem', textAlign: 'center', letterSpacing: '0.05em' }}>Source Systems</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', background: 'var(--color-stone)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Server size={20} color="var(--color-ink)" /></div>
                  <strong style={{ fontSize: '0.875rem' }}>ERP</strong>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', background: 'var(--color-stone)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Store size={20} color="var(--color-ink)" /></div>
                  <strong style={{ fontSize: '0.875rem' }}>POS</strong>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', background: 'var(--color-stone)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Building2 size={20} color="var(--color-ink)" /></div>
                  <strong style={{ fontSize: '0.875rem' }}>WMS</strong>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', background: 'var(--color-stone)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Truck size={20} color="var(--color-ink)" /></div>
                  <strong style={{ fontSize: '0.875rem' }}>TMS</strong>
                </div>
              </div>
            </div>

            <ArrowRight size={24} color="var(--color-muted-foreground)" style={{ transform: 'rotate(90deg)' }} />

            {/* Step 2: Nexus */}
            <div style={{ width: '100%', maxWidth: '30rem', padding: '2rem', background: 'white', borderRadius: '0.75rem', border: '1px solid var(--color-accent-blue)', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', textAlign: 'center' }}>
              <Network size={24} color="var(--color-accent-blue)" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-accent-blue)', marginBottom: '0.5rem' }}>Nexus</h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted-foreground)', margin: 0 }}>Event bus that streams source-system events into IIS for derivation.</p>
            </div>

            <ArrowRight size={24} color="var(--color-muted-foreground)" style={{ transform: 'rotate(90deg)' }} />

            {/* Step 3: IIS */}
            <div style={{ width: '100%', maxWidth: '40rem', padding: '2rem', background: 'var(--color-ink)', borderRadius: '0.75rem', color: 'white', textAlign: 'center' }}>
              <Database size={24} color="white" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'white', marginBottom: '0.5rem' }}>IIS</h3>
              <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.8)', margin: 0 }}>Inventory Information Service</p>
            </div>

          </div>
        </section>

        {/* Footer Navigation */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
          <Link 
            to="/consumers"
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
            Next: Consumers <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </PageShell>
  )
}
