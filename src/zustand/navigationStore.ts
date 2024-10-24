import type { StackNav } from '@utils/types'
import { create } from 'zustand'

type NavigationS = {
  navigation: StackNav | null
  setNavigation: (navigation: StackNav | null) => void
}

export const navigationStore = create<NavigationS>((set) => ({
  navigation: null,
  setNavigation: (navigation) => set({ navigation }),
}))
