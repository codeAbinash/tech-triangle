import S from '@utils/storage'
import { create } from 'zustand'

type Gender = 'Male' | 'Female'

type ProfileStore = {
  firstName: string
  setFirstName: (name: string) => void
  lastName: string
  setLastName: (name: string) => void
  // email: string
  // setEmail: (email: string) => void
  nickName: string
  setNickName: (nickName: string) => void
  birthday: string
  setBirthday: (birthday: string) => void
  height: string
  setHeight: (height: string) => void
  weight: string
  setWeight: (weight: string) => void
  gender: Gender
  setGender: (gender: Gender) => void
}

export const profileStore = create<ProfileStore>((set) => ({
  firstName: S.get('ProfileFirstName') || '',
  setFirstName: (firstName: string) => {
    S.set('ProfileFirstName', firstName)
    set({ firstName })
  },
  lastName: S.get('ProfileLastName') || '',
  setLastName: (lastName: string) => {
    S.set('ProfileLastName', lastName)
    set({ lastName })
  },
  // email: S.get('ProfileEmail') || '',
  // setEmail: (email: string) => {
  //   S.set('ProfileEmail', email)
  //   set({ email })
  // },
  nickName: S.get('ProfileNickName') || '',
  setNickName: (nickName: string) => {
    S.set('ProfileNickName', nickName)
    set({ nickName })
  },
  birthday: S.get('ProfileBirthday') || '',
  setBirthday: (birthday: string) => {
    S.set('ProfileBirthday', birthday)
    set({ birthday })
  },
  height: S.get('ProfileHeight') || '',
  setHeight: (height: string) => {
    S.set('ProfileHeight', height)
    set({ height })
  },
  weight: S.get('ProfileWeight') || '',
  setWeight: (weight: string) => {
    S.set('ProfileWeight', weight)
    set({ weight })
  },
  gender: (S.get('ProfileGender') as Gender) || 'Male',
  setGender: (gender: Gender) => {
    S.set('ProfileGender', gender)
    set({ gender })
  },
}))
