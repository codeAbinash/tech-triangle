import { Caches, clearStorage, getStartWithSize, getStorageSize, WeatherCache, WeatherStorage } from '@utils/storage'
import { ToastAndroid } from 'react-native'
import { create } from 'zustand'

type StorageStore = {
  totalSize: number
  totalCacheSize: number
  weatherSearchCache: number
  weather: number
  computeTotal: () => void
  clearCache: () => void
  clearWeatherCache: () => void
  computeEverything: () => void
}

export const storageStore = create<StorageStore>((set) => ({
  totalSize: getStartWithSize(''),
  totalCacheSize: getStorageSize(Caches),
  weatherSearchCache: getStorageSize(WeatherCache),
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
      const weatherSearchCache = getStorageSize(WeatherCache)
      const totalSize = getStartWithSize('') // All keys
      const weather = getStorageSize(WeatherStorage)
      return { ...state, totalCacheSize, weatherSearchCache: weatherSearchCache, totalSize, weather }
    })
  },

  clearWeatherCache: () => {
    clearStorage(WeatherCache)
    storageStore.getState().computeEverything()
    ToastAndroid.show('Weather search history cleared', ToastAndroid.SHORT)
  },
}))
