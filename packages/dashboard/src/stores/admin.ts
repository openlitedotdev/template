import { create } from 'zustand'
import type { AdminState, MenuState } from 'types/admin'

export const useAdmin = create<AdminState>(() => ({
  credentials: { name: '' },
  onLogged() { },
  onLogout() { },
}))

export const useMenu = create<MenuState>(set => ({
  value: false,
  onTrue: () => set(() => ({ value: true })),
  onFalse: () => set(() => ({ value: false })),
}))
