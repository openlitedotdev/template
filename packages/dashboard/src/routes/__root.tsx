import { Outlet, ScrollRestoration, createRootRoute } from '@tanstack/react-router'
import { Suspense } from 'react'
import { TanStackRouterDevtools } from '../components/ReactLazy'

export const Route = createRootRoute({
  component: () => (
    <>
      <ScrollRestoration />
      <Outlet />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  ),
})
