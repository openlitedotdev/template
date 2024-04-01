import { Outlet, ScrollRestoration, createRootRoute } from '@tanstack/react-router'
import { Suspense } from 'react'
import { TanStackRouterDevtools } from '../components/react-lazy'

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
