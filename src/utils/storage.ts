import { useMemo } from 'react'
import { MMKV } from 'react-native-mmkv'

export const ls = new MMKV({
  id: 'my-app-storage',
})

export const secureLs = new MMKV({
  id: 'my-app-secure-storage',
  encryptionKey: '524sdr245sdes2',
})

type WeatherStorage =
  | `WeatherCitySearchResult-${string}`
  | 'WeatherCurrentCity'
  | 'WeatherTemperatureUnit'
  | 'WeatherDistanceUnit'
  | 'WeatherOpenWeatherMapAPIKey'
  | 'WeatherAccuWeatherAPIKey'
  | 'WeatherWidgetIsActive'

type DeveloperStorage = 'DeveloperAnimationDuration' | 'DeveloperEnabled'

type RoutineStorage = 'routines'

type StorageKeys = WeatherStorage | RoutineStorage | DeveloperStorage

function getMemo(key: StorageKeys) {
  return useMemo(() => {
    return ls.getString(key)
  }, [key])
}

function getMemoParsed<T>(key: StorageKeys) {
  return useMemo(() => {
    return JSON.parse(ls.getString(key) || 'null') as T
  }, [key])
}

function get(key: StorageKeys) {
  return ls.getString(key)
}

function getParsed<T>(key: StorageKeys) {
  return JSON.parse(ls.getString(key) || 'null') as T
}

function set(key: StorageKeys, value: string) {
  ls.set(key, value)
}

const S = {
  getMemo,
  getParsed,
  getMemoParsed,
  get,
  set,
  ls,
}

export default S
