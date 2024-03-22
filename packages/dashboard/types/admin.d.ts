interface Admin {
  name?: string
  email?: string
  password?: string
  photo?: string
  role?: string
}

export interface AdminState {
  credentials: Admin | null
  onLogged: () => void
  onLogout: () => void
}

export interface MenuState {
  value: boolean
  onTrue: () => void
  onFalse: () => void
}
