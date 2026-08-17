import React from 'react'

type FlowNode = { x: number; y: number; label: string; isCenter?: boolean }

const NODES: Record<string, FlowNode> = {
  manu: { x: 50, y: 10, label: 'MANU\n(Production)' },
  usdc: { x: 16, y: 35, label: 'US DC' },
  ukdc: { x: 33, y: 35, label: 'UK DC' },
  tdc: { x: 50, y: 35, label: 'Thailand\nDC' },
  edc: { x: 67, y: 35, label: 'Europe\nDC' },
  brazildc: { x: 84, y: 35, label: 'Brazil\nDC' },
  oms: { x: 15, y: 65, label: 'OMS\n(Order Mgt)' },
  crm: { x: 35, y: 65, label: 'CRM\n(SAP, Salesforce)' },
  iis: { x: 70, y: 65, label: 'IIS', isCenter: true },
  tms: { x: 55, y: 95, label: 'TMS\n(Transportation)' },
  demand: { x: 85, y: 95, label: 'Demand Planning\n(O9)' },
}

const CONNECTIONS = [
  // MANU to DCs
  { from: 'manu', to: 'usdc' },
  { from: 'manu', to: 'ukdc' },
  { from: 'manu', to: 'tdc' },
  { from: 'manu', to: 'edc' },
  { from: 'manu', to: 'brazildc' },
  // DCs to CRM
  { from: 'usdc', to: 'crm' },
  { from: 'ukdc', to: 'crm' },
  { from: 'tdc', to: 'crm' },
  { from: 'edc', to: 'crm' },
  { from: 'brazildc', to: 'crm' },
  // DCs to IIS
  { from: 'usdc', to: 'iis' },
  { from: 'ukdc', to: 'iis' },
  { from: 'tdc', to: 'iis' },
  { from: 'edc', to: 'iis' },
  { from: 'brazildc', to: 'iis' },
  // CRM to Others
  { from: 'crm', to: 'iis' },
  { from: 'crm', to: 'oms' },
  // IIS to Others
  { from: 'iis', to: 'tms' },
  { from: 'iis', to: 'demand' },
]

export function Flowchart() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '400px', background: 'var(--color-stone)', borderRadius: '0.75rem', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
      <style>{`
        @keyframes flowAnim {
          from { stroke-dashoffset: 24; }
          to { stroke-dashoffset: 0; }
        }
        .animated-path {
          stroke: var(--color-accent-blue);
          stroke-width: 2.5;
          stroke-dasharray: 6 6;
          animation: flowAnim 1s linear infinite;
        }
      `}</style>

      {/* SVG for lines */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
        {CONNECTIONS.map((conn, i) => {
          const from = NODES[conn.from as keyof typeof NODES]
          const to = NODES[conn.to as keyof typeof NODES]
          
          return (
            <line 
              key={i} 
              x1={`${from.x}%`}
              y1={`${from.y}%`}
              x2={`${to.x}%`}
              y2={`${to.y}%`}
              className="animated-path" 
            />
          )
        })}
      </svg>

      {/* Nodes */}
      {Object.entries(NODES).map(([key, node]) => (
        <div
          key={key}
          style={{
            position: 'absolute',
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: 'translate(-50%, -50%)',
            background: node.isCenter ? 'var(--color-accent-blue)' : 'white',
            color: node.isCenter ? 'white' : 'var(--color-ink)',
            border: node.isCenter ? 'none' : '1px solid var(--color-border)',
            padding: node.isCenter ? '1rem 1.5rem' : '0.5rem 0.75rem',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            zIndex: 10,
            whiteSpace: 'pre-line',
            fontWeight: node.isCenter ? 700 : 600,
            fontSize: node.isCenter ? '1.25rem' : '0.75rem',
            lineHeight: 1.2
          }}
        >
          {node.label}
        </div>
      ))}
    </div>
  )
}
