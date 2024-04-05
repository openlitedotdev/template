import Link from 'next/link'
import { Button } from '@openui-org/react'
import { LayoutDashboard, ShoppingBag } from 'lucide-react'
import { UserNav } from './user-nav'
import { MobileSidebar } from './mobile-sidebar'
import { SearchBar } from './search-header'

const links = [
  { name: 'Categories', path: '/' },
  { name: 'About', path: '/' },
  { name: 'example', path: '/' },
  { name: 'example', path: '/' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-neutral-100/50 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-3 sm:px-8">
        <div className="flex h-16 justify-between gap-6 items-center">
          <div className="flex items-center font-bold">
            <Link href="https://github.com/open-land/commerce">COMMERCE</Link>
          </div>
          <nav className="flex w-full gap-4 lg:gap-6" aria-label="Main navigation">
            <ul className="gap-4 overflow-x-auto whitespace-nowrap md:flex lg:gap-8 lg:px-0">
              {links.map((link, index) => {
                return (
                  <li key={index} className="inline-flex">
                    <a href="#" className="border-transparent text-card- hover:text-card-foreground/90 inline-flex items-center border-b-2 pt-px text-sm font-medium">{link.name}</a>
                  </li>
                )
              })}
            </ul>
          </nav>
          <div className="hidden lg:flex">
            <SearchBar />
          </div>
          <div className="flex items-center gap-2">
            <UserNav />
            <ShoppingBag className="size-6 cursor-pointer" />
          </div>
          <div className="block lg:!hidden">
            <MobileSidebar />
          </div>
          <Button className="flex items-center gap-2">
            <LayoutDashboard />
            Dashboard
          </Button>
        </div>
      </div>
    </header>
  )
}
