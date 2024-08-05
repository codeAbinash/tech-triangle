import { ANIM_DUR } from '@utils/constants'
import S from '@utils/storage'
import { ToastAndroid } from 'react-native'
import { create } from 'zustand'

type DeveloperSettingsStore = {
  isEnabled: boolean
  setEnabled: (enabled: boolean) => void
  animationDuration: number
  setAnimationDuration: (duration: number) => void
  clearDevOptions: () => void
}

export const devOptStore = create<DeveloperSettingsStore>((set) => ({
  animationDuration: getAnimationDuration(),
  setAnimationDuration: (duration: number) => setAnimationDuration(duration, set),
  isEnabled: getEnabled(),
  setEnabled: (enabled: boolean) => setEnabled(enabled, set),
  clearDevOptions: () => clearDevOptions(set),
}))

type Set = (fn: (state: DeveloperSettingsStore) => DeveloperSettingsStore) => void

function getEnabled() {
  return S.get('DeveloperEnabled') === 'true'
}

function setEnabled(enabled: boolean, set: Set) {
  S.set('DeveloperEnabled', enabled.toString())
  set((state) => ({ ...state, isEnabled: enabled }))
}

function getAnimationDuration() {
  return Number(S.get('DeveloperAnimationDuration') || ANIM_DUR)
}

function setAnimationDuration(duration: number, set: Set) {
  S.set('DeveloperAnimationDuration', duration.toString())
  set((state) => ({ ...state, animationDuration: duration }))
}

function clearDevOptions(set: Set) {
  setEnabled(false, set)
  setAnimationDuration(ANIM_DUR, set)
  ToastAndroid.show('Developer options reset', ToastAndroid.SHORT)
}
