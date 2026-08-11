export function SiteFooter() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--color-border)',
        padding: '2rem 1.5rem',
        marginTop: 'auto',
      }}
    >
      <div
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        <span style={{ fontSize: '12px', color: 'var(--color-muted-foreground)' }}>
          IIS Onboarding Portal · Pandora × Tarento Technologies
        </span>
        <span style={{ fontSize: '12px', color: 'var(--color-muted-foreground)' }}>
          Internal use only
        </span>
      </div>
    </footer>
  )
}
