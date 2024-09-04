import type {
  Banners,
  Categories,
  Coupons,
  Customer,
  Orders,
  Product,
} from '@/utils/types'

export const BannersMocks: Banners[] = [
  {
    title: 'GOLF CLOTHING',
    description: 'NOW AVAILABLE ON PUMA.COM',
    image: '/banner.webp',
  },
  {
    title: 'COMING SOON',
    description: ' A$AP ROCKY x PUMA LAUNCHES 5/3 AT 10 AM EDT',
    image: '/banner2.webp',
  },
]

export const productsMocks: Product[] = [
  {
    name: 'product1',
    price: '10.99',
    amount: '5',
  },
  {
    name: 'product2',
    price: '5.99',
    amount: '3',
  },
  {
    name: 'product3',
    price: '15.99',
    amount: '2',
  },
  {
    name: 'product4',
    price: '8.99',
    amount: '7',
  },
  {
    name: 'product5',
    price: '12.99',
    amount: '1',
  },
  {
    name: 'product6',
    price: '6.99',
    amount: '4',
  },
  {
    name: 'product7',
    price: '9.99',
    amount: '9',
  },
  {
    name: 'product8',
    price: '7.99',
    amount: '6',
  },
  {
    name: 'product9',
    price: '11.99',
    amount: '8',
  },
  {
    name: 'product10',
    price: '14.99',
    amount: '3',
  },
]

export const categoriesMocks: Categories[] = [
  {
    name: 'categories1',
    description: 'lorem ipsum dolor sit amet',
  },
  {
    name: 'categories2',
    description: 'lorem ipsum dolor sit amet',
  },
  {
    name: 'categories3',
    description: 'lorem ipsum dolor sit amet',
  },
  {
    name: 'categories4',
    description: 'lorem ipsum dolor sit amet',
  },
  {
    name: 'categories5',
    description: 'lorem ipsum dolor sit amet',
  },
  {
    name: 'categories6',
    description: 'lorem ipsum dolor sit amet',
  },
  {
    name: 'categories7',
    description: 'lorem ipsum dolor sit amet',
  },
  {
    name: 'categories8',
    description: 'lorem ipsum dolor sit amet',
  },
  {
    name: 'categories9',
    description: 'lorem ipsum dolor sit amet',
  },
  {
    name: 'categories10',
    description: 'lorem ipsum dolor sit amet',
  },
]

export const customersMocks: Customer[] = [
  {
    name: 'User 1',
    email: 'jondoe@email.com',
    phone: '300789090',
    role: 'user',
  },
  {
    name: 'User 2',
    email: 'jondoe@email.com',
    phone: '300789090',
    role: 'user',
  },
  {
    name: 'User 3',
    email: 'jondoe@email.com',
    phone: '300789090',
    role: 'user',
  },
  {
    name: 'User 4',
    email: 'jondoe@email.com',
    phone: '300789090',
    role: 'user',
  },
  {
    name: 'User 5',
    email: 'jondoe@email.com',
    phone: '300789090',
    role: 'user',
  },
  {
    name: 'User 6',
    email: 'jondoe@email.com',
    phone: '300789090',
    role: 'user',
  },
  {
    name: 'User 7',
    email: 'jondoe@email.com',
    phone: '300789090',
    role: 'user',
  },
  {
    name: 'User 8',
    email: 'jondoe@email.com',
    phone: '300789090',
    role: 'user',
  },
  {
    name: 'User 9',
    email: 'jondoe@email.com',
    phone: '300789090',
    role: 'user',
  },
  {
    name: 'User 10',
    email: 'jondoe@email.com',
    phone: '300789090',
    role: 'user',
  },
]

export const OrdersMocks: Orders[] = [
  {
    name: 'product1',
    date: '2021-05-30',
    customer: 'User 1',
    total: '100.00',
    status: 'pending',
  },
  {
    name: 'product2',
    date: '2022-10-17',
    customer: 'User 2',
    total: '200.00',
    status: 'completed',
  },
  {
    name: 'product3',
    date: '2023-08-14',
    customer: 'User 3',
    total: '300.00',
    status: 'pending',
  },
  {
    name: 'product4',
    date: '2024-02-01',
    customer: 'User 4',
    total: '400.00',
    status: 'completed',
  },
  {
    name: 'product5',
    date: '2022-04-21',
    customer: 'User 5',
    total: '500.00',
    status: 'pending',
  },
]

export const CouponsMocks: Coupons[] = [
  {
    coupon: 'CODE1',
    discount: '10%',
    min: 20000,
    expiry: '2022-05-30',
    status: 'Expired',
  },
  {
    coupon: 'CODE2',
    discount: '20%',
    min: 30000,
    expiry: '2024-10-17',
    status: 'Active',
  },
  {
    coupon: 'CODE3',
    discount: '30%',
    min: 40000,
    expiry: '2023-08-14',
    status: 'Active',
  },
  {
    coupon: 'CODE4',
    discount: '40%',
    min: 50000,
    expiry: '2024-02-01',
    status: 'Active',
  },
  {
    coupon: 'CODE5',
    discount: '50%',
    min: 60000,
    expiry: '2022-04-21',
    status: 'Active',
  },
]
