import { ANIM_DUR } from '@utils/constants'
import S from '@utils/storage'
import { create } from 'zustand'

type DeveloperSettingsStore = {
  isEnabled: boolean
  setEnabled: (enabled: boolean) => void
  animationDuration: number
  setAnimationDuration: (duration: number) => void
}

export const useDeveloperOptions = create<DeveloperSettingsStore>((set) => ({
  animationDuration: Number(S.get('DeveloperAnimationDuration') || ANIM_DUR),
  setAnimationDuration: (duration: number) => {
    S.set('DeveloperAnimationDuration', duration.toString())
    set({ animationDuration: duration })
  },
  isEnabled: S.get('DeveloperEnabled') === 'false',
  setEnabled: (enabled: boolean) => {
    S.set('DeveloperEnabled', enabled.toString())
    set({ isEnabled: enabled })
  },
}))
