import { SiteHeader } from '../components/SiteHeader'
import { SupplyChainExplorer } from '../components/SupplyChainExplorer'

export function SupplyChainPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
      <SiteHeader />
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <SupplyChainExplorer />
      </div>
    </div>
  )
}
