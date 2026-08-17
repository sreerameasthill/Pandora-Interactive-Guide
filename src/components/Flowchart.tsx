import React from 'react'

type FlowNode = { x: number; y: number; label: string; isCenter?: boolean }

const NODES: Record<string, FlowNode> = {
  manu: { x: 50, y: 10, label: 'MANU\n(Production)' },
  pos: { x: 50, y: 35, label: 'POS\n(Stores)' },
  crm: { x: 15, y: 65, label: 'CRM\n(SAP, Salesforce, etc)' },
  iis: { x: 50, y: 65, label: 'IIS', isCenter: true },
  oms: { x: 85, y: 65, label: 'OMS\n(Order Management)' },
  tms: { x: 30, y: 95, label: 'TMS\n(Transportation)' },
  demand: { x: 70, y: 95, label: 'Demand Planning\n(O9)' },
}

const CONNECTIONS = [
  { from: 'manu', to: 'pos' },
  { from: 'pos', to: 'crm' },
  { from: 'pos', to: 'iis' },
  { from: 'crm', to: 'iis' },
  { from: 'crm', to: 'oms' },
  { from: 'iis', to: 'tms' },
  { from: 'iis', to: 'demand' },
]

export function Flowchart() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '500px', background: 'var(--color-stone)', borderRadius: '0.75rem', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
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
          fill: none;
        }
      `}</style>

      {/* SVG for lines */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
        {/* Define arrow marker */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="var(--color-accent-blue)" />
          </marker>
        </defs>
        
        {CONNECTIONS.map((conn, i) => {
          const from = NODES[conn.from as keyof typeof NODES]
          const to = NODES[conn.to as keyof typeof NODES]
          
          // Calculate an offset so the line doesn't start exactly at the center (behind the box)
          // Simple straight line path
          const path = `M ${from.x}% ${from.y}% L ${to.x}% ${to.y}%`
          
          return (
            <path 
              key={i} 
              d={path} 
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
            padding: node.isCenter ? '1.5rem 2rem' : '0.75rem 1rem',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            zIndex: 10,
            whiteSpace: 'pre-line',
            fontWeight: node.isCenter ? 700 : 600,
            fontSize: node.isCenter ? '1.5rem' : '0.875rem',
            lineHeight: 1.2
          }}
        >
          {node.label}
        </div>
      ))}
    </div>
  )
}
