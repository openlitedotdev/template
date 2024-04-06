import { create } from 'zustand'

interface LoadingState {
  load: boolean
  setLoad: (by: boolean) => void
}

export const useLoading = create<LoadingState>(set => ({
  load: false,
  setLoad(by: boolean) {
    set(() => ({ load: by }))
  },
}))
