import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { Button } from '@openui-org/react/components'
import { MobileSidebar } from './mobile-sidebar'
import { SearchBar } from './search-header'

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'FAQ', path: '/' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-secondary text-primary hover:transition-colors shadow-md">
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-8">
        <div className="flex h-20 justify-between gap-8 items-center">
          <div className="flex items-center font-bold">
            <Link href="https://github.com/open-land/commerce" target="_blank" className="text-2xl">
              Shop
            </Link>
          </div>
          <nav className="hidden lg:flex w-full gap-4" aria-label="Main navigation">
            <ul className="gap-4 overflow-x-auto whitespace-nowrap md:flex lg:gap-5 lg:px-0">
              {links.map((link, index) => {
                return (
                  <li key={index} className="inline-flex">
                    <Link href={link.path} className="border-transparent text-card- hover:text-card-foreground/90 inline-flex items-center border-b-2 pt-px text-base font-normal">{link.name}</Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex">
              <SearchBar />
            </div>
            <div className="flex items-center gap-1">
              <Button variant="ghost" className="font-bold text-sm hover:bg-primary hover:transition-colors hover:text-primary-foreground hover:shadow-md">
                <ShoppingCart />
              </Button>
              <MobileSidebar />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
