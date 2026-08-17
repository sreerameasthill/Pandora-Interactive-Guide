import { PageShell } from '../components/PageShell'
import { Link } from '@tanstack/react-router'
import { ArrowRight, Globe2, Store, Users, MapPin, Database, Server, Building2, Smartphone } from 'lucide-react'

export function OverviewPage() {
  return (
    <PageShell
      title="Overview: Pandora & IIS"
      subtitle="Understanding Pandora's scale and the business problem IIS solves"
      eyebrow="Section 01 · Context"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        {/* Section: About Pandora */}
        <section>
          <h2 className="heading" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-ink)' }}>About Pandora</h2>
          <p className="body-text" style={{ fontSize: '1.125rem', marginBottom: '2rem', maxWidth: '48rem' }}>
            A Danish global jewelry company, founded in <strong>1982</strong> in Copenhagen, Denmark. Known for its signature, customizable charm bracelets, Pandora operates a vertically integrated supply chain at massive scale.
          </p>

          {/* Quick Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
            <div style={{ padding: '1.5rem', border: '1px solid var(--color-border)', borderRadius: '0.75rem', background: 'white' }}>
              <Globe2 size={24} color="var(--color-accent-blue)" style={{ marginBottom: '1rem' }} />
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.25rem' }}>100+</div>
              <div style={{ fontSize: '0.9375rem', color: 'var(--color-muted-foreground)' }}>Countries</div>
            </div>
            <div style={{ padding: '1.5rem', border: '1px solid var(--color-border)', borderRadius: '0.75rem', background: 'white' }}>
              <Store size={24} color="var(--color-accent-blue)" style={{ marginBottom: '1rem' }} />
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.25rem' }}>2,900+</div>
              <div style={{ fontSize: '0.9375rem', color: 'var(--color-muted-foreground)' }}>Stores worldwide</div>
            </div>
            <div style={{ padding: '1.5rem', border: '1px solid var(--color-border)', borderRadius: '0.75rem', background: 'white' }}>
              <Users size={24} color="var(--color-accent-blue)" style={{ marginBottom: '1rem' }} />
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.25rem' }}>33,000+</div>
              <div style={{ fontSize: '0.9375rem', color: 'var(--color-muted-foreground)' }}>Employees</div>
            </div>
          </div>

          {/* Categories & Timeline */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ background: 'var(--color-stone)', padding: '2rem', borderRadius: '0.75rem' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1.5rem' }}>Product Categories</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', margin: 0 }}>
                {[
                  { name: 'Charms', desc: 'Signature, collectible/customizable' },
                  { name: 'Bracelets', desc: 'Foundation of the charm bracelet system' },
                  { name: 'Rings', desc: 'Stackable designs' },
                  { name: 'Earrings & Necklaces', desc: 'Range depth' }
                ].map(c => (
                  <li key={c.name} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-accent-blue)', marginTop: 8 }} />
                    <div>
                      <strong style={{ display: 'block', color: 'var(--color-ink)', fontSize: '1rem' }}>{c.name}</strong>
                      <span style={{ color: 'var(--color-muted-foreground)', fontSize: '0.9375rem' }}>{c.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div style={{ background: 'white', border: '1px solid var(--color-border)', padding: '2rem', borderRadius: '0.75rem' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1.5rem' }}>Timeline Milestones</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative' }}>
                <div style={{ position: 'absolute', left: 4, top: 8, bottom: 8, width: 2, background: 'var(--color-stone)', zIndex: 0 }} />
                {[
                  { year: '1982', text: 'Founded as a single jewelry shop in Copenhagen' },
                  { year: '2000', text: 'Launch of the charm bracelet concept' },
                  { year: '2010', text: 'IPO on Nasdaq Copenhagen' },
                  { year: '2020', text: 'Global digital and omni-channel acceleration' },
                  { year: 'Today', text: '2,900+ stores in 100+ countries with a vertically integrated supply chain' }
                ].map(item => (
                  <div key={item.year} style={{ display: 'flex', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--color-accent-blue)', marginTop: 6 }} />
                    <div>
                      <strong style={{ color: 'var(--color-ink)' }}>{item.year}</strong>
                      <p style={{ color: 'var(--color-muted-foreground)', fontSize: '0.9375rem', margin: '0.25rem 0 0' }}>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section: What is IIS */}
        <section>
          <h2 className="heading" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-ink)' }}>What is IIS</h2>
          <div style={{ padding: '2rem', border: '1px solid var(--color-border)', borderRadius: '0.75rem', background: 'var(--color-stone)' }}>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-ink)', margin: 0, lineHeight: 1.6 }}>
              The <strong>Inventory Information Service (IIS)</strong> is Pandora's centralized integration hub for inventory — a middleware layer that consolidates data from Distribution Centers, 3PLs, and Stores into a single, unified, real-time view of availability.
            </p>
          </div>
        </section>

        {/* Section: What is Nexus */}
        <section>
          <h2 className="heading" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-ink)' }}>What is Nexus</h2>
          <div style={{ padding: '2rem', border: '1px solid var(--color-border)', borderRadius: '0.75rem', background: 'white' }}>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-ink)', margin: 0, lineHeight: 1.6 }}>
              <strong>Nexus</strong> is Pandora's global Event-Driven Integration Platform (built on Kafka/Azure Service Bus).
            </p>
          </div>
        </section>

        {/* Footer Navigation */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
          <Link 
            to="/nexus-vs-iis"
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
            Next: IIS vs NEXUS <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </PageShell>
  )
}
