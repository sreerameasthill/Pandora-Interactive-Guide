import { Router, Route, RootRoute, Outlet, createHashHistory } from '@tanstack/react-router'
import { OverviewPage } from './pages/OverviewPage'
import { HowItWorksPage } from './pages/HowItWorksPage'
import { ArchitecturePage } from './pages/ArchitecturePage'
import { ConsumersPage } from './pages/ConsumersPage'
import { ConceptsPage } from './pages/ConceptsPage'
import { SupplyChainPage } from './pages/SupplyChainPage'

const rootRoute = new RootRoute({
  component: Outlet,
})

const overviewRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: OverviewPage,
})

const howItWorksRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/how-iis-works',
  component: HowItWorksPage,
})

const architectureRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/architecture',
  component: ArchitecturePage,
})

const consumersRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/consumers',
  component: ConsumersPage,
})

const conceptsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/concepts',
  component: ConceptsPage,
})

const supplyChainRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/supply-chain',
  component: SupplyChainPage,
})

const routeTree = rootRoute.addChildren([
  overviewRoute,
  supplyChainRoute,
  howItWorksRoute,
  architectureRoute,
  consumersRoute,
  conceptsRoute,
])

const hashHistory = createHashHistory()
export const router = new Router({ routeTree, history: hashHistory })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
