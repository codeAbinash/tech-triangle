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
  let startWithSize = Object.keys(s.startWith).reduce((acc, key) => acc + getStartWithSize(s.startWith[key]!), 0)
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
    WeatherCurrentWeather: 'WeatherCurrentWeather',
    WeatherLastUpdated: 'WeatherLastUpdated',
    WeatherLastUpdatedAQI: 'WeatherLastUpdatedAQI',
    WeatherCurrentAQI: 'WeatherCurrentAQI',
    WeatherCacheTime: 'WeatherCacheTime',
    WeatherTimeFormat: 'WeatherTimeFormat',
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
export const LocationNotesStorage = {
  startWith: {},
  keys: {
    LocationNotes: 'LocationNotes',
  },
}

export const UserStorage = {
  startWith: {},
  keys: {
    User: 'User',
  },
}

const UserProfileStorage = {
  startWith: {},
  keys: {
    ProfileFirstName: 'ProfileFirstName',
    ProfileLastName: 'ProfileLastName',
    ProfileNickName: 'ProfileNickName',
    ProfileBirthday: 'ProfileBirthday',
    // ProfileEmail: 'ProfileEmail',
    ProfileHeight: 'ProfileHeight',
    ProfileWeight: 'ProfileWeight',
    ProfileGender: 'ProfileGender',
  },
}

const AppLockStorage = {
  startWith: {},
  keys: {
    AppLockEnabled: 'AppLockEnabled',
    AppLockPassword: 'AppLockPassword',
    AppLockTimeout: 'AppLockTimeout',
  },
}

interface StorageType {
  keys: Record<string, string>
  startWith: Record<string, string>
}
type Store<T extends StorageType> = keyof T['keys'] | `${Extract<keyof T['startWith'], string>}${string}`

type WeatherStorage = Store<typeof WeatherStorage>
type DeveloperStorage = Store<typeof DeveloperStorage>
type LocationNotesStorage = Store<typeof LocationNotesStorage>
type UserProfileStorage = Store<typeof UserProfileStorage>
type AppLockStorage = Store<typeof AppLockStorage>
type UserStorage = Store<typeof UserStorage>
type misc = 'misc' | 'isOpenedApp'
export type StorageKeys =
  | WeatherStorage
  | DeveloperStorage
  | LocationNotesStorage
  | UserProfileStorage
  | AppLockStorage
  | UserStorage
  | misc

/**
 * Other variant of storage
 */
export const WeatherCache: Storage = {
  startWith: WeatherStorage.startWith,
  keys: {},
}

function useMemoParsed<T>(key: StorageKeys) {
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

function getBoolean(key: StorageKeys) {
  return ls.getBoolean(key)
}

function set(key: StorageKeys, value: string) {
  ls.set(key, value)
}

function remove(key: StorageKeys) {
  ls.delete(key)
}

const S = {
  getParsed,
  getMemoParsed: useMemoParsed,
  get,
  getBoolean,
  set,
  remove,
  ls,
}

export default S
