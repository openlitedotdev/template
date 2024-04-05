import Link from 'next/link'

const openLand = [
  { title: 'About', path: '/' },
  { title: 'About', path: '/' },
  { title: 'About', path: '/' },
]

export async function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-neutral-300 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-3 gap-8 py-16">
          <div>
            <h3 className="text-base font-semibold text-card-foreground">Open Land</h3>
            <ul className="mt-4 space-y-4 [&>li]:text-neutral-500">
              {openLand.map((open) => {
                return (
                  <li className="text-sm">
                    <Link href={open.path}>{open.title}</Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-card-foreground">Contact</h3>
            <ul className="mt-4 space-y-4 [&>li]:text-neutral-500">
              {openLand.map((open) => {
                return (
                  <li className="text-sm">
                    <Link href={open.path}>{open.title}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-between border-t py-10 sm:flex-row">
          <p className="text-sm text-card-foreground">
            Copyright &copy;
            {currentYear}
            {' '}
            Open Land, Inc.
          </p>
          <p className="flex gap-1 text-sm text-card-foreground">
            Powered by
            {' '}
            <Link target="_blank" href="https://github.com/open-land" className="underline">
              Open Land
            </Link>
            {' '}
          </p>
        </div>
      </div>
    </footer>
  )
}
