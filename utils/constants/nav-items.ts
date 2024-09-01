import type { Icons } from '@/components/utilities/icons'

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
    href: '/dashboard',
    icon: 'dashboard',
    label: 'Dashboard',
  },
  {
    title: 'Products',
    href: '/dashboard/products',
    icon: 'laptop',
    label: 'products',
  },
  {
    title: 'Categories',
    href: '/dashboard/categories',
    icon: 'media',
    label: 'categories',
  },
  {
    title: 'Orders',
    href: '/dashboard/orders',
    icon: 'help',
    label: 'employee',
  },
  {
    title: 'Coupons',
    href: '/dashboard/coupons',
    icon: 'kanban',
    label: 'coupons',
  },
  {
    title: 'Banners',
    href: '/dashboard/banners',
    icon: 'ellipsis',
    label: 'coupons',
  },
  {
    title: 'Customers',
    href: '/dashboard/customers',
    icon: 'employee',
    label: 'customers',
  },
  {
    title: 'Settings',
    href: '/dashboard/settings',
    icon: 'settings',
    label: 'settings',
  },
  {
    title: 'Help',
    href: '/dashboard/help',
    icon: 'help',
    label: 'help',
  },
]

export const navShopped: NavItem[] = [
  {
    title: 'About',
    href: '/shopped/about',
    icon: 'help',
    label: 'About',
  },
  {
    title: 'FAQ',
    href: '/faq',
    icon: 'help',
    label: 'FAQ',
  },
{
    title: 'Dashboard',
    href: '/dashboard',
    icon: 'dashboard',
    label: 'dashboard',
  },
]
