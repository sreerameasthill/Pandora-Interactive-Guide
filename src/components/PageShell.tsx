import { ReactNode } from 'react'
import { Link } from '@tanstack/react-router'
import { SiteHeader } from './SiteHeader'
import { SiteFooter } from './SiteFooter'

type AppRoute = '/' | '/how-iis-works' | '/supply-chain' | '/architecture' | '/consumers' | '/concepts'

interface PageHeroProps {
  eyebrow: string
  title: string
  subtitle?: string
}

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <div
      style={{
        borderBottom: '1px solid var(--color-border)',
        padding: '3rem 1.5rem 2.5rem',
        background: 'var(--color-stone)',
      }}
    >
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>{eyebrow}</p>
        <h1 className="heading" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', margin: '0 0 0.75rem', lineHeight: 1.15 }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{ fontSize: '1rem', color: 'var(--color-muted-foreground)', margin: 0, maxWidth: '48rem', lineHeight: 1.6 }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}

interface PageShellProps {
  children: ReactNode
  eyebrow: string
  title: string
  subtitle?: string
  nextHref?: AppRoute
  nextLabel?: string
}

export function PageShell({ children, eyebrow, title, subtitle, nextHref, nextLabel }: PageShellProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <SiteHeader />
      <main style={{ flex: 1 }}>
        <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '3rem 1.5rem' }}>
          {children}
        </div>
      </main>
      {nextHref && nextLabel && (
        <div
          style={{
            borderTop: '1px solid var(--color-border)',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            justifyContent: 'flex-end',
            background: 'var(--color-stone)',
          }}
        >
          <Link
            to={nextHref}
            style={{
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--color-accent-blue)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
            }}
          >
            Continue → Next: {nextLabel}
          </Link>
        </div>
      )}
      <SiteFooter />
    </div>
  )
}

interface InfoRowProps {
  label: string
  value: ReactNode
}

export function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '10rem 1fr',
        gap: '1rem',
        padding: '0.875rem 0',
        borderBottom: '1px solid var(--color-border)',
        alignItems: 'start',
      }}
    >
      <span style={{ fontSize: '12px', color: 'var(--color-muted-foreground)', fontWeight: 500, paddingTop: '2px' }}>{label}</span>
      <span style={{ fontSize: '14px', color: 'var(--color-ink)', lineHeight: 1.6 }}>{value}</span>
    </div>
  )
}
