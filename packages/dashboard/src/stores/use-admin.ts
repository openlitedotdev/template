import type { AdminState } from 'types/admin'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

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
