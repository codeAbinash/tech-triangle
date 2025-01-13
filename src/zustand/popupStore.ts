import { create } from 'zustand'

export type Popup = {
  text?: string
  title?: string
  buttons?: { text: string; onPress?: () => void }[]
  noClose?: boolean
}

type PopupStore = {
  popups: Popup[]
  alert: (title: string, text: string, buttons?: { text: string; onPress?: () => void }[], noClose?: boolean) => void
  removePopup: (index: number) => void
  clear: () => void
}

const popupStore = create<PopupStore>((set) => ({
  popups: [],
  alert: (title, text, buttons = [{ text: 'OK' }], noClose = false) =>
    set((state) => ({ popups: [...state.popups, { title, text, buttons, noClose }] })),
  removePopup: (index) => set((state) => ({ popups: state.popups.filter((_, i) => i !== index) })),
  clear: () => set({ popups: [] }),
}))

export default popupStore
