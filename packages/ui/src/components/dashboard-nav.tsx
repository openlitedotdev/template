'use client'

import type { Dispatch, SetStateAction } from 'react'
import Link from 'next/link'
import type { NavItem } from '@/lib/const'

interface DashboardNavProps {
  items: NavItem[]
  setOpen?: Dispatch<SetStateAction<boolean>>
}

export function DashboardNav({ items, setOpen }: DashboardNavProps) {
  return (
    <nav className="grid items-start gap-3">
      {items.map((item, index) => {
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

              <span>{item.title}</span>

            </Link>
          )
        )
      })}
    </nav>
  )
}
