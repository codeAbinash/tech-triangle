import { useMemo } from 'react'
import { MMKV } from 'react-native-mmkv'

export const ls = new MMKV({
  id: 'my-app-storage',
})

export const secureLs = new MMKV({
  id: 'my-app-secure-storage',
  encryptionKey: '524sdr245sdes2',
})

type WeatherStorage = `WeatherCitySearchResult-${string}` | 'WeatherCurrentCity'

type RoutineStorage = 'routines'

type StorageKeys = WeatherStorage | RoutineStorage

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

function set(key: StorageKeys, value: string) {
  ls.set(key, value)
}

const S = {
  getMemo,
  getMemoParsed,
  get,
  set,
  ls,
}

export default S
