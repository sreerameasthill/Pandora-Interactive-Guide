import { useEffect, useState } from 'react'
import {
  MapContainer,
  TileLayer,
  Polyline,
  useMap,
  Marker,
} from 'react-leaflet'
import L from 'leaflet'
import {
  NODES, NODE_MAP, CATEGORY_COLORS, CATEGORY_LABELS, getJourneyStepData
} from '../data'
import { ArrowRight, Info, CheckCircle2 } from 'lucide-react'

// ─── Edge set (all downstream relationships) ──────────────────────────────────
interface Edge {
  from: string
  to: string
}
function buildEdges(): Edge[] {
  const edges: Edge[] = []
  for (const node of NODES) {
    for (const dst of node.downstream) {
      edges.push({ from: node.id, to: dst })
    }
  }
  return edges
}
const ALL_EDGES = buildEdges()

// ─── Custom Icons ─────────────────────────────────────────────────────────────
function createNodeIcon(isActive: boolean, color: string) {
  const size = isActive ? 14 : 8
  const html = `
    <div style="position: relative; display: flex; flex-direction: column; alignItems: center; justify-content: center; width: 100%; height: 100%;">
      ${isActive ? `<span style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 28px; height: 28px; border-radius: 50%; background: ${color}; opacity: 0.3; animation: pulse 2s infinite;"></span>` : ''}
      <span style="display: block; width: ${size}px; height: ${size}px; border-radius: 50%; background: ${color}; border: 1.5px solid ${isActive ? 'white' : 'rgba(255,255,255,0.7)'}; box-shadow: ${isActive ? `0 0 0 2px ${color}` : 'none'}; transition: all 0.3s ease;"></span>
    </div>
  `
  return L.divIcon({
    html,
    className: 'custom-leaflet-icon',
    iconSize: [28, 28],
    iconAnchor: [14, 14],
  })
}

// ─── Map Updater ──────────────────────────────────────────────────────────────
function MapUpdater({ isFinished, currentNodeId, targetNodeId, phase }: { 
  isFinished: boolean, currentNodeId: string, targetNodeId: string | null, phase: 'on-hand' | 'in-transit' 
}) {
  const map = useMap()
  
  useEffect(() => {
    if (isFinished) {
      map.flyTo([30, 10], 2, { duration: 1 })
      return
    }

    if (phase === 'in-transit' && targetNodeId) {
      const fromNode = NODE_MAP[currentNodeId]
      const toNode = NODE_MAP[targetNodeId]
      if (fromNode && toNode) {
        const bounds = L.latLngBounds([fromNode.lat, fromNode.lon], [toNode.lat, toNode.lon])
        map.flyToBounds(bounds, { padding: [100, 100], duration: 1.2 })
      }
    } else if (phase === 'on-hand') {
      const node = NODE_MAP[currentNodeId]
      if (node) {
        map.flyTo([node.lat, node.lon], 5, { duration: 1 })
      }
    }
  }, [isFinished, currentNodeId, targetNodeId, phase, map])

  return null
}

// ─── Main component ───────────────────────────────────────────────────────────
export function SupplyChainExplorer() {
  const [currentNodeId, setCurrentNodeId] = useState<string>('MANU')
  const [targetNodeId, setTargetNodeId] = useState<string | null>(null)
  const [phase, setPhase] = useState<'on-hand' | 'in-transit'>('on-hand')
  const [isFinished, setIsFinished] = useState(false)
  const [history, setHistory] = useState<string[]>([])

  const currentNode = NODE_MAP[currentNodeId]
  const targetNode = targetNodeId ? NODE_MAP[targetNodeId] : undefined
  const step = isFinished ? null : getJourneyStepData(currentNode, phase, targetNode)

  const handleRestart = () => {
    setCurrentNodeId('MANU')
    setTargetNodeId(null)
    setPhase('on-hand')
    setIsFinished(false)
    setHistory([])
  }

  const handleBack = () => {
    if (history.length > 0) {
      const prev = history[history.length - 1]
      setHistory(h => h.slice(0, -1))
      setCurrentNodeId(prev)
      setTargetNodeId(null)
      setPhase('on-hand')
      setIsFinished(false)
    }
  }

  const handleShipTo = (destId: string) => {
    setHistory(h => [...h, currentNodeId])
    setTargetNodeId(destId)
    setPhase('in-transit')
  }

  const handleCompleteArrival = () => {
    if (targetNodeId) {
      setCurrentNodeId(targetNodeId)
      setTargetNodeId(null)
      setPhase('on-hand')
    }
  }

  const handleCompleteJourney = () => {
    setIsFinished(true)
  }

  // Active node logic for UI rendering
  const activeNodeId = phase === 'in-transit' && targetNodeId ? targetNodeId : currentNodeId
  const activeNode = NODE_MAP[activeNodeId]

  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '100%', overflow: 'hidden' }}>
      
      <style>{`
        .custom-leaflet-icon { background: none; border: none; }
        .flow-line { animation: dash 3s linear infinite; }
        @keyframes dash { to { stroke-dashoffset: -100; } }
        @keyframes pulse {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.6; }
          100% { transform: translate(-50%, -50%) scale(2.5); opacity: 0; }
        }
      `}</style>

      {/* Left Panel: Learning Console */}
      <div style={{
        width: 380, minWidth: 380, borderRight: '1px solid var(--color-border)',
        background: 'white', display: 'flex', flexDirection: 'column', zIndex: 10
      }}>
        <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--color-border)', background: 'var(--color-stone)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-muted-foreground)', margin: 0 }}>
            Inventory Journey Explorer
          </h2>
          <button onClick={handleRestart} style={{ background: 'white', border: '1px solid var(--color-border)', padding: '0.25rem 0.75rem', borderRadius: '0.25rem', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-ink)', cursor: 'pointer' }}>Restart</button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {isFinished ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', textAlign: 'center', marginTop: '2rem' }}>
              <CheckCircle2 size={48} color="var(--color-accent-blue)" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-ink)', margin: 0 }}>Journey Completed!</h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted-foreground)', lineHeight: 1.6, margin: 0 }}>
                Inventory travelled through the network, generating events processed by IIS at each location.
              </p>
              
              <div style={{ width: '100%', background: 'var(--color-stone)', padding: '1.25rem', borderRadius: '0.5rem', textAlign: 'left', marginTop: '1rem' }}>
                <h4 style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-ink)', margin: '0 0 0.75rem 0' }}>Downstream Consumers</h4>
                <ul style={{ margin: 0, padding: '0 0 0 1.25rem', color: 'var(--color-muted-foreground)', fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li><strong>Sterling OMS:</strong> Real-time sourcing</li>
                  <li><strong>SAP:</strong> Financial reconciliation</li>
                  <li><strong>Logility / O9:</strong> Supply planning</li>
                  <li><strong>HERO:</strong> Demand & replenishment</li>
                </ul>
              </div>

              <button
                onClick={handleRestart}
                style={{
                  marginTop: '1rem', width: '100%', background: 'white', border: '1px solid var(--color-border)',
                  color: 'var(--color-ink)', padding: '0.75rem', borderRadius: '0.5rem', fontWeight: 600,
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'
                }}
              >
                Restart Journey
              </button>
            </div>
          ) : (
            <>
              {/* Step Info */}
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-accent-blue)', marginBottom: '0.25rem' }}>
                  {step!.stepName}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-ink)', margin: '0 0 0.25rem 0' }}>
                  {step!.businessEvent}
                </h3>
              </div>

              {/* Location Details */}
              <div style={{ background: 'var(--color-stone)', padding: '1rem', borderRadius: '0.5rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--color-muted-foreground)', marginBottom: '0.25rem' }}>Location</div>
                <div style={{ fontWeight: 600, color: 'var(--color-ink)' }}>
                  {phase === 'in-transit' ? 'Network Movement' : currentNode.name}
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--color-muted-foreground)' }}>
                  {phase === 'in-transit' ? `${currentNode.city} → ${targetNode?.city}` : currentNode.role}
                </div>
                
                <div style={{ marginTop: '1rem', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--color-muted-foreground)', marginBottom: '0.25rem' }}>Systems Involved</div>
                <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
                  {step!.systems.map(s => (
                    <span key={s} style={{ background: 'white', border: '1px solid var(--color-border)', padding: '0.125rem 0.5rem', borderRadius: '1rem', fontSize: '0.75rem', fontWeight: 600 }}>{s}</span>
                  ))}
                </div>
              </div>

              {/* Inventory State */}
              <div style={{ borderLeft: '2px solid var(--color-ink)', paddingLeft: '1rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--color-muted-foreground)', marginBottom: '0.25rem' }}>Inventory State</div>
                <div style={{ fontWeight: 600, color: 'var(--color-ink)' }}>{step!.inventoryState}</div>
              </div>

              {/* IIS Integration */}
              <div style={{ borderLeft: '2px solid var(--color-accent-blue)', paddingLeft: '1rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--color-muted-foreground)', marginBottom: '0.25rem' }}>What IIS Receives</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--color-ink)', lineHeight: 1.5 }}>{step!.iisReceives}</div>
              </div>

              {/* IIS Concept Box */}
              <div style={{ background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.2)', padding: '1rem', borderRadius: '0.5rem', display: 'flex', gap: '0.75rem' }}>
                <Info size={16} color="var(--color-accent-blue)" style={{ flexShrink: 0, marginTop: '0.125rem' }} />
                <div style={{ fontSize: '0.875rem', color: 'var(--color-ink)', lineHeight: 1.5 }}>
                  {step!.iisConcept}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Map Area */}
      <div style={{ flex: 1, position: 'relative', background: '#e5e5e5' }}>
        <MapContainer
          center={[30, 10]}
          zoom={3}
          style={{ height: '100%', width: '100%' }}
          zoomControl={false}
          scrollWheelZoom={false}
          dragging={false}
          doubleClickZoom={false}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
            attribution="&copy; OpenStreetMap &copy; CARTO"
          />
          <MapUpdater 
            isFinished={isFinished}
            currentNodeId={currentNodeId}
            targetNodeId={targetNodeId}
            phase={phase}
          />

          {/* Render all inactive edges in faint grey */}
          {ALL_EDGES.map((edge, i) => {
            const f = NODE_MAP[edge.from]; const t = NODE_MAP[edge.to]
            if (!f || !t) return null
            const isActive = phase === 'in-transit' && currentNodeId === f.id && targetNodeId === t.id
            if (isActive) return null // Handled below
            return (
              <Polyline
                key={i}
                positions={[[f.lat, f.lon], [t.lat, t.lon]]}
                pathOptions={{ color: 'var(--color-muted-foreground)', weight: 1.5, opacity: 0.15, dashArray: '4 4' }}
              />
            )
          })}

          {/* Render active edge */}
          {phase === 'in-transit' && targetNodeId && (
            <Polyline
              positions={[[NODE_MAP[currentNodeId].lat, NODE_MAP[currentNodeId].lon], [NODE_MAP[targetNodeId].lat, NODE_MAP[targetNodeId].lon]]}
              pathOptions={{ color: '#D9A05B', weight: 3, opacity: 1, dashArray: '10 10' }}
              className="flow-line"
            />
          )}

          {/* Render Nodes */}
          {NODES.map(node => {
            const isActive = activeNodeId === node.id && !isFinished
            const color = CATEGORY_COLORS[node.category]
            
            return (
              <Marker
                key={node.id}
                position={[node.lat, node.lon]}
                icon={createNodeIcon(!!isActive, color)}
                zIndexOffset={isActive ? 1000 : 0}
              />
            )
          })}
        </MapContainer>

        {/* Floating Contextual Node Card */}
        {!isFinished && activeNode && (
          <div style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(20px, -50%)',
            background: 'white', borderRadius: '0.75rem', padding: '1.25rem', width: 280,
            boxShadow: '0 10px 25px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)',
            zIndex: 1000, pointerEvents: 'auto', border: '1px solid var(--color-border)',
            opacity: 1, transition: 'opacity 0.3s'
          }}>
            <div style={{ fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', color: CATEGORY_COLORS[activeNode.category], marginBottom: '0.25rem', display: 'flex', justifyContent: 'space-between' }}>
              <span>{CATEGORY_LABELS[activeNode.category]}</span>
              {history.length > 0 && phase !== 'in-transit' && (
                <button onClick={handleBack} style={{ background: 'none', border: 'none', color: 'var(--color-muted-foreground)', cursor: 'pointer', textDecoration: 'underline', fontSize: '0.6875rem', padding: 0 }}>Back</button>
              )}
            </div>
            <h4 style={{ fontSize: '1rem', fontWeight: 600, margin: '0 0 0.5rem 0', color: 'var(--color-ink)' }}>
              {activeNode.name}
            </h4>
            
            <div style={{ background: 'var(--color-stone)', padding: '0.75rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
              <div style={{ fontSize: '0.6875rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--color-muted-foreground)', marginBottom: '0.25rem' }}>Current Inventory</div>
              <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-ink)' }}>{step!.inventoryState}</div>
            </div>

            {/* Interaction Buttons based on Phase */}
            {phase === 'in-transit' ? (
              <button
                onClick={handleCompleteArrival}
                style={{
                  width: '100%', background: 'var(--color-ink)', color: 'white', border: 'none',
                  padding: '0.625rem', borderRadius: '0.375rem', fontWeight: 600, fontSize: '0.875rem',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.375rem'
                }}
              >
                Arrive at {activeNode.shortName} <ArrowRight size={14} />
              </button>
            ) : currentNode.downstream.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ fontSize: '0.6875rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--color-muted-foreground)' }}>Choose Next Destination:</div>
                {currentNode.downstream.map(destId => {
                  const destNode = NODE_MAP[destId]
                  return (
                    <button
                      key={destId}
                      onClick={() => handleShipTo(destId)}
                      style={{
                        width: '100%', background: 'white', color: 'var(--color-ink)', border: '1px solid var(--color-border)',
                        padding: '0.5rem', borderRadius: '0.375rem', fontWeight: 500, fontSize: '0.8125rem',
                        cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        transition: 'background 0.2s'
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = 'var(--color-stone)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'white'}
                    >
                      <span>Ship to {destNode.shortName}</span>
                      <ArrowRight size={12} color="var(--color-muted-foreground)" />
                    </button>
                  )
                })}
              </div>
            ) : (
              <button
                onClick={handleCompleteJourney}
                style={{
                  width: '100%', background: 'var(--color-accent-blue)', color: 'white', border: 'none',
                  padding: '0.625rem', borderRadius: '0.375rem', fontWeight: 600, fontSize: '0.875rem',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.375rem'
                }}
              >
                View Journey Summary <ArrowRight size={14} />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
