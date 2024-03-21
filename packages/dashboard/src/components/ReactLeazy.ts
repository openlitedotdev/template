import React from 'react'

const TanStackRouterDevtools
  = process.env.NODE_ENV === 'production'
    ? () => null
    : React.lazy(() =>
      import('@tanstack/router-devtools').then(res => ({
        default: res.TanStackRouterDevtools,
      })),
    )

export { TanStackRouterDevtools }
