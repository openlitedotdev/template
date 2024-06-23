import { navItems } from '@/utils/constants/nav-items'
import { DashboardNav } from './dashboard-nav'

export default function Sidebar() {
  return (
    <nav
      className="relative hidden h-screen border-r border-r-dark-700/50 pt-16 lg:block w-72"
    >
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <h2 className="mb-6 text-xl font-semibold tracking-tight">
              Shopped
            </h2>
            <DashboardNav items={navItems} />
          </div>
        </div>
      </div>
    </nav>
  )
}
