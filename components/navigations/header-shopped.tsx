import { Link } from 'next-view-transitions'
import { ShoppingCart } from 'lucide-react'
import { Button } from '@openlabs/ui'
import { SearchBar } from '@components/search-header'
import { MobileSidebar } from './mobile-sidebar-shopped'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-secondary text-primary hover:transition-colors shadow-md">
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-8">
        <div className="flex h-16 justify-between gap-8 items-center">
          <div className="flex items-center font-bold">
            <Link href="/" className="text-3xl">
              Shopped
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden lg:flex">
              <SearchBar />
            </div>
            <div className="flex items-center gap-1">
              <Button color="ghost" className="font-bold text-sm hover:bg-primary hover:transition-colors hover:text-primary-foreground hover:shadow-md">
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
