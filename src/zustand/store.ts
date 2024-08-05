import type { WeatherSearchResult } from '@screens/Weather/api'
import S, { ls } from '@utils/storage'
import { create } from 'zustand'
import { getLocalDataSize } from './utils'

/**
 * Weather settings
 *
 */
export type CurrentCityT = {
  name: string
  lat: number
  lon: number
} | null

type TemperatureUnit = 'C' | 'F'
type DistanceUnit = 'ft' | 'm'
type WeatherSettingsStore = {
  currentCity: CurrentCityT
  allWeatherDataSize: number
  temperatureUnit: TemperatureUnit
  setTemperatureUnit: (unit: TemperatureUnit) => void
  distanceUnit: DistanceUnit
  setDistanceUnit: (unit: DistanceUnit) => void
  setCurrentCity: (city: CurrentCityT | null) => void
  updateAllWeatherDataSize: () => void
  openWeatherApiKey: string
  accuWeatherApiKey: string
  setAccuWeatherApiKey: (key: string) => void
  setOpenWeatherApiKey: (key: string) => void
  weatherWidgetIsActive: boolean
  setWeatherWidgetIsActive: (isActive: boolean) => void
}

export const useWeatherSettings = create<WeatherSettingsStore>((set) => ({
  currentCity: getCurrentCity(),
  allWeatherDataSize: getLocalDataSize('Weather'),
  temperatureUnit: (S.get('WeatherTemperatureUnit') as TemperatureUnit) || 'C',
  setTemperatureUnit: (unit: TemperatureUnit) => {
    S.set('WeatherTemperatureUnit', unit)
    set((state) => ({ ...state, temperatureUnit: unit }))
  },
  distanceUnit: (S.get('WeatherDistanceUnit') as DistanceUnit) || 'm',
  setDistanceUnit: (unit: DistanceUnit) => {
    S.set('WeatherDistanceUnit', unit)
    set((state) => ({ ...state, distanceUnit: unit }))
  },
  setCurrentCity: (city: CurrentCityT) => {
    S.set('WeatherCurrentCity', JSON.stringify(city))
    set((state) => ({ ...state, currentCity: city }))
    // Update search history length after setting current city delayed by 500ms
    useWeatherSearchHistory.getState().searchHistoryLength = getWeatherSearchHistoryLength()
    useWeatherSettings.getState().updateAllWeatherDataSize()
  },
  updateAllWeatherDataSize: () => {
    set((state) => ({ ...state, allWeatherDataSize: getLocalDataSize('Weather') }))
  },
  openWeatherApiKey: S.get('WeatherOpenWeatherMapAPIKey') || '',
  accuWeatherApiKey: S.get('WeatherAccuWeatherAPIKey') || '',
  setAccuWeatherApiKey: (key: string) => {
    S.set('WeatherAccuWeatherAPIKey', key)
    set((state) => ({ ...state, accuWeatherApiKey: key }))
  },
  setOpenWeatherApiKey: (key: string) => {
    S.set('WeatherOpenWeatherMapAPIKey', key)
    set((state) => ({ ...state, openWeatherApiKey: key }))
  },
  weatherWidgetIsActive: S.get('WeatherWidgetIsActive') === 'true',
  setWeatherWidgetIsActive: (isActive: boolean) => {
    S.set('WeatherWidgetIsActive', isActive.toString())
    set((state) => ({ ...state, weatherWidgetIsActive: isActive }))
  },
}))

function getCurrentCity() {
  const currentCity = S.getParsed<CurrentCityT>('WeatherCurrentCity')
  return currentCity
}
/**
 * Weather search history
 *
 */
type WeatherSearchHistoryStore = {
  searchHistoryLength: number
  searchHistory: string[]
  clearSearchHistory: () => void
  pushSearchHistory: (city: string, result: WeatherSearchResult) => void
}
function clearSearchHistory() {
  const searchHistory = getWeatherSearchHistory()
  searchHistory.forEach((key) => {
    ls.delete(`WeatherCitySearchResult-${key}`)
  })
}
export const useWeatherSearchHistory = create<WeatherSearchHistoryStore>((set) => ({
  searchHistoryLength: getWeatherSearchHistoryLength(),
  searchHistory: getWeatherSearchHistory(),
  clearSearchHistory: () => {
    clearSearchHistory()
    set((state) => ({ ...state, searchHistory: [], searchHistoryLength: 0 }))
    useWeatherSettings.getState().updateAllWeatherDataSize()
  },
  pushSearchHistory: (city: string, result: WeatherSearchResult) => {
    S.set(`WeatherCitySearchResult-${city}`, JSON.stringify(result))
    set((state) => ({ ...state, searchHistory: [...state.searchHistory, city], searchHistoryLength: state.searchHistoryLength + 1 }))
    useWeatherSettings.getState().updateAllWeatherDataSize()
  },
}))

function getWeatherSearchHistoryLength() {
  return ls.getAllKeys().filter((key) => key.startsWith('WeatherCitySearchResult-')).length
}

function getWeatherSearchHistory() {
  return ls
    .getAllKeys()
    .filter((key) => key.startsWith('WeatherCitySearchResult-'))
    .map((key) => key.replace('WeatherCitySearchResult-', ''))
}
