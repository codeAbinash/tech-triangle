import { getLocalDataSize } from '@utils/utils'
import { create } from 'zustand'

type SettingsStore = {
  totalSize: number
  reCalculateTotalSize: (size: number) => void
  totalCacheSize: number
  reCalculateTotalCacheSize: (size: number) => void
}

function getTotalSize() {
  return getLocalDataSize('')
}

function getTotalCacheSize() {
  const weatherCache = getLocalDataSize('WeatherCitySearchResult-')
  return weatherCache
}

export const useSettings = create<SettingsStore>((set) => ({
  totalSize: getTotalSize(),
  reCalculateTotalSize: (size: number) => set({ totalSize: size }),
  totalCacheSize: getTotalCacheSize(),
  reCalculateTotalCacheSize: (size: number) => set({ totalCacheSize: size }),
}))
