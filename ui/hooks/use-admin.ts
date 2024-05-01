import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface Admin {
  name?: string
  email?: string
  password?: string
  photo?: string
  role?: string
}

export interface AdminState {
  credentials: Admin | null
  onLogged: (by: Admin) => void
  onLogout: () => void
}

export const useAdmin = create(
  persist<AdminState>(
    set => ({
      credentials: null,
      onLogged(by) {
        set(() => ({ credentials: { ...by } }))
      },
      onLogout() { },
    }),
    {
      name: 'admin',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)
