import S from '@utils/storage'
import { create } from 'zustand'

type Note = {
  title: string
  description: string
  coordinate: {
    latitude: number
    longitude: number
  }
}

type CoordinateNotesStore = {
  notes: Note[]
  setNotes: (notes: Note[]) => void
}

export const coordinateNotesStore = create<CoordinateNotesStore>((set) => ({
  notes: getNotes(),
  setNotes: (notes: Note[]) => setNotes(notes, set),
}))

type Set = (fn: (state: CoordinateNotesStore) => CoordinateNotesStore) => void

function getNotes() {
  return JSON.parse(S.get('CoordinateNotes') || '[]')
}

function setNotes(notes: Note[], set: Set) {
  S.set('CoordinateNotes', JSON.stringify(notes))
  set((state) => ({ ...state, notes }))
}
