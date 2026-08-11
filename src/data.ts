// Exact node dataset from spec
export type NodeCategory = 'production' | 'dc' | '3pl' | 'ecom' | 'store'

export interface SupplyNode {
  id: string
  name: string
  city: string
  category: NodeCategory
  role: string
  inventoryType: string
  systems: string[]
  upstream: string[]
  downstream: string[]
  lat: number
  lon: number
}

export const NODES: SupplyNode[] = [
  {
    id: 'GEMOPOLIS',
    name: 'Bangkok',
    city: 'Bangkok, Thailand',
    category: 'production',
    role: 'Manufacturing site',
    inventoryType: 'Finished goods (FG)',
    systems: ['ERP', 'WMS'],
    upstream: [],
    downstream: ['TDC'],
    lat: 13.7, lon: 100.7,
  },
  {
    id: 'LAMPHUN',
    name: 'Lamphun',
    city: 'Northern Thailand',
    category: 'production',
    role: 'Manufacturing site',
    inventoryType: 'Finished goods (FG)',
    systems: ['ERP', 'WMS'],
    upstream: [],
    downstream: ['TDC'],
    lat: 18.6, lon: 99.0,
  },
  {
    id: 'BINH_DUONG',
    name: 'Binh Duong / Ho Chi Minh City region',
    city: 'Vietnam',
    category: 'production',
    role: 'Manufacturing site',
    inventoryType: 'Finished goods (FG)',
    systems: ['ERP', 'WMS'],
    upstream: [],
    downstream: ['TDC'],
    lat: 11.0, lon: 106.7,
  },
  {
    id: 'TDC',
    name: 'Thailand Distribution Centre (TDC)',
    city: 'Bangkok, Thailand',
    category: 'dc',
    role: 'Central global distribution centre',
    inventoryType: 'On-hand & in-transit',
    systems: ['ERP', 'WMS', 'TMS'],
    upstream: ['GEMOPOLIS', 'LAMPHUN', 'BINH_DUONG'],
    downstream: ['EDC', 'USDC', 'UKDC', 'BRAZIL', 'LIFUNG_CN'],
    lat: 12.5, lon: 101.5,
  },
  {
    id: 'EDC',
    name: 'Europe Distribution Centre (EDC)',
    city: 'Hamburg, Germany',
    category: 'dc',
    role: 'Europe distribution centre',
    inventoryType: 'On-hand & in-transit',
    systems: ['ERP', 'WMS'],
    upstream: ['TDC'],
    downstream: ['LIFUNG_CN', 'STORE_EU', 'UKDC'],
    lat: 53.5, lon: 10.0,
  },
  {
    id: 'USDC',
    name: 'United States Distribution Centre (USDC)',
    city: 'Columbus, Ohio',
    category: 'dc',
    role: 'US distribution centre',
    inventoryType: 'On-hand & in-transit',
    systems: ['ERP', 'WMS'],
    upstream: ['TDC'],
    downstream: ['PFS', 'STORE_US'],
    lat: 40.0, lon: -83.0,
  },
  {
    id: 'UKDC',
    name: 'United Kingdom Distribution Centre (UKDC)',
    city: 'London, UK',
    category: 'dc',
    role: 'UK distribution centre',
    inventoryType: 'On-hand & in-transit',
    systems: ['ERP', 'WMS'],
    upstream: ['TDC', 'EDC'],
    downstream: ['STORE_UK'],
    lat: 51.5, lon: -0.1,
  },
  {
    id: 'LIFUNG_CN',
    name: 'Li & Fung',
    city: 'Shanghai, China',
    category: '3pl',
    role: 'Third-party logistics — APAC',
    inventoryType: 'On-hand at 3PL',
    systems: ['WMS'],
    upstream: ['TDC', 'EDC'],
    downstream: ['STORE_EU'],
    lat: 31.2, lon: 121.5,
  },
  {
    id: 'PFS',
    name: 'PFS — eCom Warehouse',
    city: 'Memphis, USA',
    category: 'ecom',
    role: 'E-commerce fulfilment partner',
    inventoryType: 'eCom on-hand',
    systems: ['OMS', 'WMS'],
    upstream: ['USDC'],
    downstream: ['STORE_US'],
    lat: 35.1, lon: -90.0,
  },
  {
    id: 'BRAZIL',
    name: 'Brazil DC',
    city: 'São Paulo, Brazil',
    category: '3pl',
    role: 'LATAM regional 3PL',
    inventoryType: 'On-hand at 3PL',
    systems: ['WMS'],
    upstream: ['TDC'],
    downstream: [],
    lat: -23.5, lon: -46.6,
  },
  {
    id: 'STORE_EU',
    name: 'Stores — Europe',
    city: 'Paris, France',
    category: 'store',
    role: 'Concept, outlet and wholesale',
    inventoryType: 'On-hand store',
    systems: ['POS'],
    upstream: ['EDC', 'LIFUNG_CN'],
    downstream: [],
    lat: 48.8, lon: 2.3,
  },
  {
    id: 'STORE_US',
    name: 'Stores — US',
    city: 'New York, USA',
    category: 'store',
    role: 'Concept, outlet and wholesale',
    inventoryType: 'On-hand store',
    systems: ['POS'],
    upstream: ['USDC', 'PFS'],
    downstream: [],
    lat: 40.7, lon: -74.0,
  },
  {
    id: 'STORE_UK',
    name: 'Stores — UK',
    city: 'Manchester, UK',
    category: 'store',
    role: 'Concept, outlet and wholesale',
    inventoryType: 'On-hand store',
    systems: ['POS'],
    upstream: ['UKDC'],
    downstream: [],
    lat: 53.5, lon: -2.2,
  },
]

export const NODE_MAP = Object.fromEntries(NODES.map(n => [n.id, n]))

// Node category color tokens
export const CATEGORY_COLORS: Record<NodeCategory, string> = {
  production: 'var(--color-node-production)',
  dc: 'var(--color-node-dc)',
  '3pl': 'var(--color-node-3pl)',
  ecom: 'var(--color-node-ecom)',
  store: 'var(--color-node-store)',
}

export const CATEGORY_LABELS: Record<NodeCategory, string> = {
  production: 'Production',
  dc: 'Distribution Centre',
  '3pl': 'Third-Party Logistics',
  ecom: 'E-Commerce Warehouse',
  store: 'Store',
}

// Glossary data
export interface GlossaryTerm {
  id: string
  term: string
  category: 'Platform' | 'Location' | 'System' | 'Inventory'
  definition: string
}

export const GLOSSARY: GlossaryTerm[] = [
  { id: 'iis', term: 'IIS', category: 'Platform', definition: "Inventory Information Service; Pandora's centralized inventory visibility platform." },
  { id: 'nexus', term: 'Nexus', category: 'Platform', definition: "Event backbone that streams source-system events into IIS for derivation." },
  { id: 'tdc', term: 'TDC', category: 'Location', definition: "Thailand Distribution Centre; central global DC near production." },
  { id: 'usdc', term: 'USDC', category: 'Location', definition: "United States Distribution Centre." },
  { id: 'edc', term: 'EDC', category: 'Location', definition: "European Distribution Centre." },
  { id: 'ukdc', term: 'UKDC', category: 'Location', definition: "United Kingdom Distribution Centre." },
  { id: '3pl', term: '3PL', category: 'Location', definition: "Third-Party Logistics provider operating a warehouse on Pandora's behalf." },
  { id: 'erp', term: 'ERP', category: 'System', definition: "Enterprise Resource Planning; operational and financial system of record." },
  { id: 'wms', term: 'WMS', category: 'System', definition: "Warehouse Management System; manages on-site warehouse operations." },
  { id: 'pos', term: 'POS', category: 'System', definition: "Point of Sale; records store sales and updates store inventory." },
  { id: 'oms', term: 'OMS', category: 'System', definition: "Order Management System; orchestrates order routing and fulfilment." },
  { id: 'tms', term: 'TMS', category: 'System', definition: "Transportation Management System; plans and executes shipments." },
  { id: 'hero', term: 'HERO', category: 'System', definition: "Pandora's demand and supply planning platform; daily consumer of IIS data." },
  { id: 'on-hand', term: 'On-Hand Inventory', category: 'Inventory', definition: "Stock physically available at a location (DC, 3PL or store)." },
  { id: 'in-transit', term: 'In-Transit Inventory', category: 'Inventory', definition: "Stock moving between two locations across the network." },
]

export interface JourneyStepData {
  stepName: string
  businessEvent: string
  systems: string[]
  inventoryState: string
  iisReceives: string
  iisConcept: string
}

export function getJourneyStepData(currentNode: SupplyNode, phase: 'on-hand' | 'in-transit', targetNode?: SupplyNode): JourneyStepData {
  if (phase === 'on-hand') {
    if (currentNode.category === 'production') {
      return {
        stepName: 'Production',
        businessEvent: 'Inventory Created',
        systems: ['ERP', 'WMS'],
        inventoryState: 'Finished Goods (FG)',
        iisReceives: 'Production Order Receipt event. IIS derives initial inventory.',
        iisConcept: 'Nexus Integration: Nexus receives the event from ERP/WMS and streams it to IIS.',
      }
    } else if (currentNode.category === 'store') {
      return {
        stepName: 'Store Arrival',
        businessEvent: 'Store Receipt',
        systems: ['POS'],
        inventoryState: 'On-Hand',
        iisReceives: 'Store Receipt event via POS. Inventory becomes sellable in store.',
        iisConcept: 'On-Hand Inventory: Stock physically available at a location.',
      }
    } else if (currentNode.category === 'ecom') {
      return {
        stepName: 'eCom Arrival',
        businessEvent: 'eCom Receipt',
        systems: ['WMS', 'OMS'],
        inventoryState: 'On-Hand',
        iisReceives: 'Goods Receipt event from eCom partner. Inventory becomes sellable online.',
        iisConcept: 'On-Hand Inventory: Stock physically available at a location.',
      }
    } else if (currentNode.category === '3pl') {
      return {
        stepName: '3PL Arrival',
        businessEvent: 'Received at 3PL',
        systems: ['WMS'],
        inventoryState: 'On-Hand',
        iisReceives: 'Goods Receipt event from 3PL WMS.',
        iisConcept: 'Third-Party Integration: IIS integrates with external partners via standard APIs.',
      }
    } else {
      return {
        stepName: 'DC Receipt',
        businessEvent: 'Received at Distribution Centre',
        systems: ['WMS'],
        inventoryState: 'On-Hand',
        iisReceives: 'Goods Receipt event. IIS derives clean On-Hand inventory.',
        iisConcept: 'Business Rule: Hallmarking Rules are applied before stock becomes sellable.',
      }
    }
  } else {
    // phase === 'in-transit'
    const targetIsStore = targetNode?.category === 'store' || targetNode?.category === 'ecom'
    const targetIs3PL = targetNode?.category === '3pl'
    
    return {
      stepName: targetIsStore ? 'Fulfillment' : targetIs3PL ? '3PL Transfer' : 'Network Transfer',
      businessEvent: targetIsStore ? 'Shipment to Sales Channel' : 'Transferred',
      systems: targetIsStore ? ['TMS', 'OMS'] : ['ERP', 'TMS'],
      inventoryState: 'In-Transit',
      iisReceives: targetIsStore ? 'Outbound Delivery event. Stock marked as In-Transit.' : 'Stock Transfer event. IIS updates state to In-Transit.',
      iisConcept: targetIsStore ? 'Clean inventory is continuously published to downstream systems via Nexus.' : 'Dynamic Stock Sharing: Inventory can be strategically moved across the network.',
    }
  }
}
