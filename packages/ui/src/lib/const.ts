import type { Icons } from '@/components/utils/icons'

export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
  label?: string
  description?: string
}

export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/',
    icon: 'dashboard',
    label: 'Dashboard',
  },
  {
    title: 'Products',
    href: '/products',
    icon: 'laptop',
    label: 'products',
  },
  {
    title: 'Categories',
    href: '/categories',
    icon: 'media',
    label: 'categories',
  },
  {
    title: 'Orders',
    href: '/orders',
    icon: 'help',
    label: 'employee',
  },
  {
    title: 'Coupons',
    href: '/coupons',
    icon: 'kanban',
    label: 'coupons',
  },
  {
    title: 'Banners',
    href: '/banners',
    icon: 'ellipsis',
    label: 'coupons',
  },
  {
    title: 'Customers',
    href: '/customers',
    icon: 'employee',
    label: 'customers',
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: 'settings',
    label: 'settings',
  },
  {
    title: 'Help',
    href: '/help',
    icon: 'help',
    label: 'help',
  },
]
