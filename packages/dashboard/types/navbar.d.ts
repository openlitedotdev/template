import type { Dispatch, SetStateAction } from 'react'
import type { Icons } from '../src/components/utils/icons'

export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
  label?: string
  description?: string
}

export interface SalesItem {
  title: string
  icon?: keyof typeof Icons
  price: string
  lastMoth: string
}

interface DashboardNavProps {
  items: NavItem[]
  setOpen?: Dispatch<SetStateAction<boolean>>
}
