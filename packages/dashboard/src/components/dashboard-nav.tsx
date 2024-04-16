import { Link, useLocation } from 'wouter'
import type { DashboardNavProps } from 'types'
import { Icons } from './utils/icons'

export function DashboardNav({ items, setOpen }: DashboardNavProps) {
  const [location] = useLocation()

  return (
    <nav className="grid items-start gap-3">
      {items.map((item, index) => {
        const Icon = Icons[item.icon || 'arrowRight']
        return (
          item.href && (
            <Link
              key={index}
              to={item.disabled ? '/' : item.href}
              onClick={() => {
                if (setOpen)
                  setOpen(false)
              }}
            >
              <span className={`
                flex items-center rounded-md px-3 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary/90' ${location === item.href ? 'bg-secondary/90' : 'bg-transparent'} ${item.disabled && 'cursor-not-allowed opacity-80'}`}
              >
                <Icon className="mr-2 size-6" />
                <span>{item.title}</span>
              </span>
            </Link>
          )
        )
      })}
    </nav>
  )
}
