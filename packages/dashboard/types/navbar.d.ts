import type { Dispatch, SetStateAction } from 'react'
import type { Icons } from '../src/components/icons'

export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
  label?: string
  description?: string
}

interface DashboardNavProps {
  items: NavItem[]
  setOpen?: Dispatch<SetStateAction<boolean>>
}
