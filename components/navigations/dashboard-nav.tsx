'use client'

import { Icons } from '@components/utilities/icons'
import { Link } from 'next-view-transitions'
import type { Dispatch, SetStateAction } from 'react'
import type { NavItem } from '@/utils/const'

interface DashboardNavProps {
  items: NavItem[]
  setOpen?: Dispatch<SetStateAction<boolean>>
}

export function DashboardNav({ items, setOpen }: DashboardNavProps) {
  return (
    <nav className="grid items-start gap-3">
      {items.map((item, index) => {
        const Icon = Icons[item.icon || 'arrowRight']
        return (
          item.href && (
            <Link
              key={index}
              href={item.disabled ? '/' : item.href}
              onClick={() => {
                if (setOpen)
                  setOpen(false)
              }}
            >
              <span className={`
                  flex items-center rounded-md px-3 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary/90' ${item.href === '/' ? 'bg-secondary/90' : 'bg-transparent'} ${item.disabled && 'cursor-not-allowed opacity-80'}`}
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
