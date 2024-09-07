import S from '@utils/storage'
import { create } from 'zustand'

type AppLockStore = {
  appLockEnabled: boolean
  setAppLockEnabled: (appLockEnabled: boolean) => void
  appLockPassword: string
  setAppLockPassword: (appLockPassword: string) => void
  appLockTimeout: number
  setAppLockTimeout: (appLockTimeout: number) => void
}

export const appLockStore = create<AppLockStore>((set) => ({
  appLockEnabled: S.get('AppLockEnabled') === 'true',
  setAppLockEnabled: (appLockEnabled: boolean) => {
    S.set('AppLockEnabled', appLockEnabled.toString())
    set({ appLockEnabled })
  },
  appLockPassword: S.get('AppLockPassword') || '',
  setAppLockPassword: (appLockPassword: string) => {
    S.set('AppLockPassword', appLockPassword)
    set({ appLockPassword })
  },
  appLockTimeout: Number(S.get('AppLockTimeout') || '0'),
  setAppLockTimeout: (appLockTimeout: number) => {
    S.set('AppLockTimeout', appLockTimeout.toString())
    set({ appLockTimeout })
  },
}))
