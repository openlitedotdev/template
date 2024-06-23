import type { Icons } from '@/components/utilities/icons'

export interface SalesItem {
  title: string
  icon?: keyof typeof Icons
  price: string
  lastMoth: string
}

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
