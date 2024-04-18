import type { NavItem, SalesItem } from 'types'

export const VERSION_API = 'v1'

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

export const salesItems: SalesItem[] = [
  {
    title: ' Total Revenue',
    icon: 'dollar',
    price: '$45,231.89',
    lastMoth: '+20.1% from last month',
  },
  {
    title: 'Active Now',
    icon: 'chart',
    price: '+573',
    lastMoth: '+201 since last hour',
  },
  {
    title: ' Total Revenue',
    icon: 'dollar',
    price: '$45,231.89',
    lastMoth: '+20.1% from last month',
  },
  {
    title: ' Total Revenue',
    icon: 'dollar',
    price: '$45,231.89',
    lastMoth: '+20.1% from last month',
  },
]
