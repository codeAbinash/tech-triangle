import { Caches, clearStorage, getStartWithSize, getStorageSize, WeatherStorage } from '@utils/storage'
import { ToastAndroid } from 'react-native'
import { create } from 'zustand'

type StorageStore = {
  totalSize: number
  totalCacheSize: number
  weatherSearch: number
  weather: number
  computeTotal: () => void
  clearCache: () => void
  clearWeatherSearch: () => void
  computeEverything: () => void
}

export const storageStore = create<StorageStore>((set) => ({
  totalSize: getStartWithSize(''),
  totalCacheSize: getStorageSize(Caches),
  weatherSearch: getStartWithSize('WeatherCitySearchResult-'),
  weather: getStorageSize(WeatherStorage),

  computeTotal: () => set({ totalSize: getStartWithSize('') }),

  clearCache: () => {
    clearStorage(Caches)
    storageStore.getState().computeEverything()
    ToastAndroid.show('Cache cleared', ToastAndroid.SHORT)
  },

  computeEverything: () => {
    set((state) => {
      const totalCacheSize = getStorageSize(Caches)
      const weatherSearch = getStartWithSize('WeatherCitySearchResult-')
      const totalSize = getStartWithSize('')
      const weather = getStorageSize(WeatherStorage)
      return { ...state, totalCacheSize, weatherSearch, totalSize, weather }
    })
  },

  clearWeatherSearch: () => {
    clearStorage(Caches)
    storageStore.getState().computeEverything()
    ToastAndroid.show('Weather search history cleared', ToastAndroid.SHORT)
  },
}))
