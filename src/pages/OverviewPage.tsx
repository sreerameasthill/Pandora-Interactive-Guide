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

        {/* Section: Why IIS Exists */}
        <section>
          <h2 className="heading" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-ink)' }}>Why IIS Exists</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            {/* Before */}
            <div style={{ padding: '2rem', border: '1px solid var(--color-border)', borderRadius: '0.75rem', background: 'var(--color-stone)' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--color-ink)' }}>Before IIS (Fragmented Systems)</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', fontSize: '0.9375rem', color: 'var(--color-muted-foreground)' }}><Server size={16} /> Different ERP systems across regions</li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', fontSize: '0.9375rem', color: 'var(--color-muted-foreground)' }}><Building2 size={16} /> Different WMS systems across DCs</li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', fontSize: '0.9375rem', color: 'var(--color-muted-foreground)' }}><Store size={16} /> Different POS systems across markets</li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', fontSize: '0.9375rem', color: 'var(--color-muted-foreground)' }}><MapPin size={16} /> Fragmented inventory visibility</li>
              </ul>
              
              <h4 style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Resulting Business Problems</h4>
              <ul style={{ paddingLeft: '1.25rem', margin: 0, color: 'var(--color-muted-foreground)', fontSize: '0.9375rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>No global inventory view</li>
                <li>Difficult reconciliation across systems</li>
                <li>Inconsistent inventory definitions</li>
                <li>Limited omni-channel support</li>
              </ul>
            </div>

            {/* After */}
            <div style={{ padding: '2rem', border: '2px solid var(--color-accent-blue)', borderRadius: '0.75rem', background: 'white' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--color-accent-blue)' }}>After IIS (Unified Pipeline)</h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted-foreground)', marginBottom: '1.5rem' }}>
                A single source of truth across the entire network.
              </p>
              
              <div style={{ background: 'var(--color-stone)', padding: '1.5rem', borderRadius: '0.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 600, padding: '0.25rem 0.5rem', background: 'white', borderRadius: '4px', border: '1px solid var(--color-border)' }}>ERP</span>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 600, padding: '0.25rem 0.5rem', background: 'white', borderRadius: '4px', border: '1px solid var(--color-border)' }}>POS</span>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 600, padding: '0.25rem 0.5rem', background: 'white', borderRadius: '4px', border: '1px solid var(--color-border)' }}>WMS</span>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 600, padding: '0.25rem 0.5rem', background: 'white', borderRadius: '4px', border: '1px solid var(--color-border)' }}>TMS</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}><ArrowRight size={16} color="var(--color-muted-foreground)" /></div>
                <div style={{ textAlign: 'center', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-ink)' }}>Nexus (Event Bus)</div>
                <div style={{ display: 'flex', justifyContent: 'center' }}><ArrowRight size={16} color="var(--color-muted-foreground)" /></div>
                <div style={{ textAlign: 'center', fontSize: '1rem', fontWeight: 700, color: 'var(--color-accent-blue)' }}>IIS</div>
                <div style={{ display: 'flex', justifyContent: 'center' }}><ArrowRight size={16} color="var(--color-muted-foreground)" /></div>
                <div style={{ textAlign: 'center', fontSize: '0.9375rem', fontWeight: 600, color: 'var(--color-ink)' }}>Unified Inventory Visibility</div>
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
