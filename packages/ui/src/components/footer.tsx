import Link from 'next/link'

const openLand = [
  { title: 'Github', path: '/' },
  { title: 'About', path: '/' },
  { title: 'Documentation', path: '/' },
]

const contact = [
  { title: 'openss.org@gmail.com', path: '/' },
  { title: 'Figma', path: '/' },
  { title: 'Team', path: '/' },
]

export async function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-neutral-300 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-3 gap-8 py-16">
          <div>
            <h3 className="text-base font-semibold text-card-foreground">Open Source Sinergy</h3>
            <ul className="mt-4 space-y-4 [&>li]:text-neutral-500">
              {openLand.map((open, index) => {
                return (
                  <li key={index} className="text-sm">
                    <Link href={open.path}>{open.title}</Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-card-foreground">Contact</h3>
            <ul className="mt-4 space-y-4 [&>li]:text-neutral-500">
              {contact.map((open, index) => {
                return (
                  <li key={index} className="text-sm">
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
            Open Source Sinergy, Inc.
          </p>
          <p className="flex gap-2 text-sm text-card-foreground items-center">
            Powered by
            {' '}
            <Link href="https://github.com/open-land/commerce" target="_blank">
              Open Source Sinergy, Lab
            </Link>
            {' '}
          </p>
        </div>
      </div>
    </footer>
  )
}
