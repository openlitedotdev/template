import Link from 'next/link'
import { Button } from '@openui-org/react/components'
import { LayoutDashboard, ShoppingBag } from 'lucide-react'
import { UserNav } from './user-nav'
import { MobileSidebar } from './mobile-sidebar'
import { SearchBar } from './search-header'

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'FAQ', path: '/' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-muted backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-3 sm:px-6">
        <div className="flex h-16 justify-between gap-8 items-center">
          <div className="flex items-center font-bold">
            <Link href="https://github.com/open-land/commerce" target="_blank">COMMERCE</Link>
          </div>
          <nav className="hidden lg:flex w-full gap-4" aria-label="Main navigation">
            <ul className="gap-4 overflow-x-auto whitespace-nowrap md:flex lg:gap-5 lg:px-0">
              {links.map((link, index) => {
                return (
                  <li key={index} className="inline-flex">
                    <Link href={link.path} className="border-transparent text-card- hover:text-card-foreground/90 inline-flex items-center border-b-2 pt-px text-sm font-medium">{link.name}</Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex">
              <SearchBar />
            </div>
            <div className="flex items-center gap-2">
              <UserNav />
              <ShoppingBag className="size-8 cursor-pointer" />
            </div>
            <div className="block lg:!hidden">
              <MobileSidebar />
            </div>
            <Button className="hidden lg:flex items-center gap-2 shadow">
              <LayoutDashboard />
              Dashboard
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
