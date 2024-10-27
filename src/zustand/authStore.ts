import S, { secureLs } from '@utils/storage'
import { create } from 'zustand'

type AuthStore = {
  token: string | undefined
  setToken: (token: string) => void
  removeToken: () => void
}

const authStore = create<AuthStore>((set) => ({
  token: S.get('token'),
  setToken: (token) => {
    set({ token })
    secureLs.set('token', token)
  },
  removeToken: () => {
    set({ token: undefined })
    secureLs.delete('token')
  },
}))

export default authStore
