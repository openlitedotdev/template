import React from 'react'

const ReactQueryDevtoolsProduction = React.lazy(() =>
  import('@tanstack/react-query-devtools/build/modern/production.js').then(
    d => ({
      default: d.ReactQueryDevtools,
    }),
  ),
)

export function DevtoolsQuery() {
  const [showDevtools, setShowDevtools] = React.useState(false)
  React.useEffect(() => {
    // eslint-disable-next-line ts/ban-ts-comment
    // @ts-expect-error
    window.toggleDevtools = () => setShowDevtools(old => !old)
  }, [])

  return (
    <>
      {showDevtools && (
        <React.Suspense fallback={null}>
          <ReactQueryDevtoolsProduction />
        </React.Suspense>
      )}
    </>
  )
}
