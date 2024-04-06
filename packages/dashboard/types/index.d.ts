export interface Response<T> {
  db: T[]
  message: string
  status: number
}

export interface Login {
  access_token: string
  token_type: string
  id_user: number
}

export * from './navbar'
export * from './admin'
