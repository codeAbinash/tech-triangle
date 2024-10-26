import S from '@utils/storage'
import { create } from 'zustand'

type User = {
  name: string
  email: string
  isAdmin: boolean
} | null
type profileStore = {
  user: User
  setUser: (user: profileStore['user']) => void
}

const profileStore = create<profileStore>((set) => ({
  user: S.getParsed<User>('User') || null,
  setUser: (user) => {
    S.set('User', JSON.stringify(user))
    set({ user })
  },
}))

export default profileStore
