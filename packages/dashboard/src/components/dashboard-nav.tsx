import { Link } from '@tanstack/react-router'
import type { DashboardNavProps } from 'types'
import { Icons } from './icons'

export function DashboardNav({ items, setOpen }: DashboardNavProps) {
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
                flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-dark-700/50 hover:text-dark-800' ${item.disabled && 'cursor-not-allowed opacity-80'}`}
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
