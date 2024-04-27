export interface Response<T> {
  db: T[]
  message: string
  status: number
}

export interface Product {
  name: string
  price: string
  amount: string
}
export interface Categories {
  name: string
  description: string
}

export interface Orders {
  name: string
  date: string
  customer: string
  total: string
  status: string
}

export interface Customer {
  name: string
  email: string
  phone: string
  role: string
}

export interface Login {
  access_token: string
  token_type: string
  id_user: number
}

export * from './navbar'
export * from './admin'
