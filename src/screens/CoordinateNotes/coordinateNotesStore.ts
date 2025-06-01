import S from '@utils/storage'
import { GeoPosition } from 'react-native-geolocation-service'
import { create } from 'zustand'

export type LocationNote = {
  title: string
  description: string
  location: GeoPosition
}

type CoordinateNotesStore = {
  notes: LocationNote[]
  setNotes: (notes: LocationNote[]) => void
  newNote: (note: LocationNote) => void
  updateNote: (note: LocationNote) => void
  deleteNote: (timestamp: number) => void
}

export const coordinateNotesStore = create<CoordinateNotesStore>((set) => ({
  notes: getNotes(),
  setNotes: (notes: LocationNote[]) => setNotes(notes, set),
  newNote: (note: LocationNote) => newNote(note, set),
  updateNote: (note: LocationNote) => updateNote(note, set),
  deleteNote: (timestamp: number) => deleteNote(timestamp, set),
}))

type Set = (fn: (state: CoordinateNotesStore) => CoordinateNotesStore) => void

function getNotes() {
  return JSON.parse(S.get('CoordinateNotes') || '[]')
}

function newNote(note: LocationNote, set: Set) {
  const notes = getNotes()
  notes.push(note)
  setNotes(notes, set)
}

function updateNote(note: LocationNote, set: Set) {
  const notes = getNotes()
  const index = notes.findIndex((n: LocationNote) => n.location.timestamp === note.location.timestamp)
  index !== -1 ? (notes[index] = note) : notes.push(note)
  setNotes(notes, set)
}

function deleteNote(timestamp: number, set: Set) {
  const notes = getNotes()
  const filteredNotes = notes.filter((note: LocationNote) => note.location.timestamp !== timestamp)
  setNotes(filteredNotes, set)
}

function setNotes(notes: LocationNote[], set: Set) {
  S.set('CoordinateNotes', JSON.stringify(notes))
  set((state) => ({ ...state, notes }))
}
