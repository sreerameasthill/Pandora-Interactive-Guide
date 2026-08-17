import { Link, useRouterState } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const NAV_LINKS = [
  { to: '/' as const,                        label: 'Overview' },
  { to: '/nexus-vs-iis' as const,            label: 'IIS vs NEXUS' },
  { to: '/how-iis-works' as const,           label: 'How IIS Works' },
  { to: '/supply-chain' as const,            label: 'Supply Chain Map' },
  { to: '/architecture' as const,            label: 'Systems & Architecture' },
  { to: '/consumers' as const,               label: 'Consumers' },
  { to: '/concepts' as const,                label: 'Key Concepts' },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const routerState = useRouterState()
  const currentPath = routerState.location.pathname

  function isActive(to: string) {
    if (to === '/') return currentPath === '/'
    return currentPath.startsWith(to)
  }

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(255,255,255,0.97)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
        }}
      >
        {/* Logos */}
        <Link
          to="/"
          style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}
        >
          <img src="./pandora-logo.png" alt="Pandora" style={{ height: '20px', objectFit: 'contain' }} />
          <div style={{ width: 1, height: 16, background: 'var(--color-border)', flexShrink: 0 }} />
          <img src="./tarento-logo.png" alt="Tarento" style={{ height: '14px', objectFit: 'contain' }} />
        </Link>

        {/* Separator */}
        <div style={{ width: 1, height: 16, background: 'var(--color-border)', flexShrink: 0 }} />

        {/* Desktop nav */}
        <nav 
          style={{ 
            display: 'flex', 
            gap: '0', 
            flex: 1, 
            overflowX: 'auto', 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none' 
          }} 
          className="hide-scrollbar"
          aria-label="Site navigation"
        >
          {NAV_LINKS.map(link => {
            const active = isActive(link.to)
            return (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  fontSize: '12px',
                  fontWeight: active ? 600 : 400,
                  color: active ? 'var(--color-accent-blue)' : 'var(--color-muted-foreground)',
                  textDecoration: 'none',
                  padding: '14px 10px',
                  borderBottom: active ? '2px solid var(--color-accent-blue)' : '2px solid transparent',
                  transition: 'color 0.15s, border-color 0.15s',
                  whiteSpace: 'nowrap',
                }}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', padding: 4, flexShrink: 0 }}
          onClick={() => setMobileOpen(o => !o)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          style={{
            background: 'white',
            borderTop: '1px solid var(--color-border)',
            padding: '0.5rem 1.5rem 1rem',
            display: 'flex',
            flexDirection: 'column',
          }}
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map(link => {
            const active = isActive(link.to)
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontSize: '14px',
                  fontWeight: active ? 600 : 400,
                  color: active ? 'var(--color-accent-blue)' : 'var(--color-ink)',
                  textDecoration: 'none',
                  padding: '10px 0',
                  borderBottom: '1px solid var(--color-border)',
                }}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      )}
    </header>
  )
}
