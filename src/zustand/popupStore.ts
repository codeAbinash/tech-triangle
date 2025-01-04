import { create } from 'zustand'

export type Popup = {
  text?: string
  title?: string
  buttons?: { text: string; onPress?: () => void }[]
}

type PopupStore = {
  popups: Popup[]
  alert: (title: string, text: string, buttons?: { text: string; onPress?: () => void }[]) => void
  removePopup: (index: number) => void
}

const popupStore = create<PopupStore>((set) => ({
  popups: [],
  alert: (title, text, buttons = [{ text: 'OK' }]) =>
    set((state) => ({ popups: [...state.popups, { title, text, buttons }] })),
  removePopup: (index) => set((state) => ({ popups: state.popups.filter((_, i) => i !== index) })),
}))

export default popupStore
