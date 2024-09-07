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
  firstName: S.get('profileFirstName') || '',
  setFirstName: (firstName: string) => {
    S.set('profileFirstName', firstName)
    set({ firstName })
  },
  lastName: S.get('profileLastName') || '',
  setLastName: (lastName: string) => {
    S.set('profileLastName', lastName)
    set({ lastName })
  },
  // email: S.get('profileEmail') || '',
  // setEmail: (email: string) => {
  //   S.set('profileEmail', email)
  //   set({ email })
  // },
  nickName: S.get('profileNickName') || '',
  setNickName: (nickName: string) => {
    S.set('profileNickName', nickName)
    set({ nickName })
  },
  birthday: S.get('profileBirthday') || '',
  setBirthday: (birthday: string) => {
    S.set('profileBirthday', birthday)
    set({ birthday })
  },
  height: S.get('profileHeight') || '',
  setHeight: (height: string) => {
    S.set('profileHeight', height)
    set({ height })
  },
  weight: S.get('profileWeight') || '',
  setWeight: (weight: string) => {
    S.set('profileWeight', weight)
    set({ weight })
  },
  gender: (S.get('profileGender') as Gender) || 'Male',
  setGender: (gender: Gender) => {
    S.set('profileGender', gender)
    set({ gender })
  },
}))

type Set = (fn: (state: ProfileStore) => ProfileStore) => void
