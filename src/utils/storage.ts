import { useMemo } from 'react'
import { MMKV } from 'react-native-mmkv'

export const ls = new MMKV({
  id: 'my-app-storage',
})

export const secureLs = new MMKV({
  id: 'my-app-secure-storage',
  encryptionKey: '524sdr245sdes2',
})

export type Storage = {
  startWith: {
    [key: string]: string
  }
  keys: {
    [key: string]: string
  }
}

export function getStorageSize(s: Storage) {
  let keysSize = getKeysSize(Object.values(s.keys))
  let startWithSize = Object.keys(s.startWith).reduce((acc, key) => acc + getStartWithSize(s.startWith[key]), 0)
  return keysSize + startWithSize
}

export function getStartWithSize(startWith: string) {
  const keys = ls.getAllKeys().filter((key) => key.startsWith(startWith))
  return keys.reduce((acc, key) => acc + (ls.getString(key)?.length || 0), 0)
}

export function getKeysSize(keys: string[]) {
  return keys.reduce((acc, key) => acc + (ls.getString(key)?.length || 0), 0)
}

export function clearStorage(s: Storage) {
  clearKeys(Object.values(s.keys))
  clearStartWiths(Object.keys(s.startWith))
}

export function clearKey(key: string) {
  ls.delete(key)
}

export function clearKeys(keys: string[]) {
  keys.forEach((key) => {
    ls.delete(key)
  })
}

export function clearStartWith(startWith: string) {
  const keys = ls.getAllKeys().filter((key) => key.startsWith(startWith))
  keys.forEach((key) => {
    ls.delete(key)
  })
}

export function clearStartWiths(startWith: string[]) {
  startWith.forEach((key) => {
    clearStartWith(key)
  })
}

export const WeatherStorage = {
  startWith: {
    'WeatherCitySearchResult-': 'WeatherCitySearchResult-',
  },
  keys: {
    WeatherCurrentCity: 'WeatherCurrentCity',
    WeatherTemperatureUnit: 'WeatherTemperatureUnit',
    WeatherDistanceUnit: 'WeatherDistanceUnit',
    WeatherOpenWeatherMapAPIKey: 'WeatherOpenWeatherMapAPIKey',
    WeatherAccuWeatherAPIKey: 'WeatherAccuWeatherAPIKey',
    WeatherWidgetIsActive: 'WeatherWidgetIsActive',
    WeatherWindSpeedUnit: 'WeatherWindSpeedUnit',
    WeatherAtmospherePressureUnit: 'WeatherAtmospherePressureUnit',
  },
}
export const DeveloperStorage = {
  startWith: {},
  keys: {
    DeveloperAnimationDuration: 'DeveloperAnimationDuration',
    DeveloperEnabled: 'DeveloperEnabled',
    DeveloperEnabledFabButton: 'DeveloperEnabledFabButton',
  },
}
export const Caches = {
  startWith: {
    ...WeatherStorage.startWith,
  },
  keys: {},
}

interface StorageType {
  keys: Record<string, string>
  startWith: Record<string, string>
}
type Store<T extends StorageType> = keyof T['keys'] | `${Extract<keyof T['startWith'], string>}${string}`

type WeatherStorage = Store<typeof WeatherStorage>
type DeveloperStorage = Store<typeof DeveloperStorage>
export type StorageKeys = WeatherStorage | DeveloperStorage

/**
 * Other variant of storage
 */
export const WeatherCache: Storage = {
  startWith: WeatherStorage.startWith,
  keys: {},
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
  getParsed,
  getMemoParsed,
  get,
  set,
  ls,
}

export default S
