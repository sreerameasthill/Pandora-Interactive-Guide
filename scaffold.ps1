$pages = @(
  "WelcomePage",
  "WhatIsIISPage",
  "VisionPage",
  "EnterpriseArchPage",
  "NexusPage",
  "InventoryDerivationPage",
  "EventDrivenPage",
  "InventoryModelsPage",
  "SourceSystemsPage",
  "ConsumersPage",
  "WhyIISMattersPage",
  "TechnicalConceptsPage",
  "ReliabilityPage"
)

foreach ($page in $pages) {
  $content = @"
import { PageShell } from '../components/PageShell'

export function $page() {
  return (
    <PageShell title="$page" currentSection="Loading...">
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '2rem 1.5rem' }}>
        <h1 className="heading" style={{ fontSize: '2rem', marginBottom: '1rem' }}>$page</h1>
        <p className="body-text" style={{ color: 'var(--color-muted-foreground)' }}>Content coming soon.</p>
      </div>
    </PageShell>
  )
}
"@
  Set-Content -Path "src/pages/$page.tsx" -Value $content
}
