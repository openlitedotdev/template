import {
  ArrowUpLeftFromSquare,
  BadgeDollarSign,
  Info,
  Layers,
  LayoutGrid,
  LogOut,
  Package,
  Settings,
  StretchHorizontal,
  Ticket,
  User,
  Users,
} from 'lucide-react'

export const bottonLateralMenu = [
  {
    href: '/',
    icon: LayoutGrid,
    text: 'Dashboard',
  },
  {
    href: '/',
    icon: Package,
    text: 'Products',
  },
  {
    href: '/',
    icon: Layers,
    text: 'Category',
  },
  {
    href: '/',
    icon: StretchHorizontal,
    text: 'Orders',
  },
  {
    href: '/',
    icon: Ticket,
    text: 'Coupon',
  },
  {
    href: '/',
    icon: ArrowUpLeftFromSquare,
    text: 'Banner',
  },
  {
    href: '/',
    icon: BadgeDollarSign,
    text: 'Transaction',
  },
]

export const bottonLateralUser = [
  {
    href: '/',
    icon: Users,
    text: 'Manage Admins',
  },
  {
    href: '/',
    icon: User,
    text: 'Customers',
  },
]

export const bottonLateralOthers = [
  {
    href: '/',
    icon: Settings,
    text: 'settings',
  },
  {
    href: '/',
    icon: Info,
    text: 'Help',
  },
  {
    href: '/',
    icon: LogOut,
    text: 'Logout',
  },
]
