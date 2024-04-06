import { Outlet, ScrollRestoration, createRootRoute } from '@tanstack/react-router'
import { Suspense } from 'react'
import { TanStackRouterDevtools } from '../components/react-lazy'
import { Toaster } from '@/components/utils/sonner'

export const Route = createRootRoute({
  component: () => (
    <>
      <ScrollRestoration />
      <Outlet />
      <Suspense>
        <Toaster position="top-right" />
        <TanStackRouterDevtools />
      </Suspense>
    </>
  ),
})
