import S from '@utils/storage'
import { GeoPosition } from 'react-native-geolocation-service'
import { create } from 'zustand'

type Note = {
  title: string
  description: string
  location: GeoPosition
}

type CoordinateNotesStore = {
  notes: Note[]
  setNotes: (notes: Note[]) => void
  newNote: (note: Note) => void
}

export const coordinateNotesStore = create<CoordinateNotesStore>((set) => ({
  notes: getNotes(),
  setNotes: (notes: Note[]) => setNotes(notes, set),
  newNote : (note: Note) => newNote(note, set),
}))

type Set = (fn: (state: CoordinateNotesStore) => CoordinateNotesStore) => void

function getNotes() {
  return JSON.parse(S.get('CoordinateNotes') || '[]')
}

function newNote(note: Note, set: Set) {
  const notes = getNotes()
  notes.push(note)
  setNotes(notes, set)
}

function setNotes(notes: Note[], set: Set) {
  S.set('CoordinateNotes', JSON.stringify(notes))
  set((state) => ({ ...state, notes }))
}
