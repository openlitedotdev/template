import { create } from 'zustand'
import type { AdminState } from 'types/admin'

export const useAdmin = create<AdminState>(() => ({
  credentials: { name: '' },
  onLogged() { },
  onLogout() { },
}))
