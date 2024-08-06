import S from '@utils/storage'
import { ToastAndroid } from 'react-native'
import { create } from 'zustand'

export type CurrentCityT = {
  name: string
  lat: number
  lon: number
} | null

type TemperatureUnit = 'C' | 'F'
type DistanceUnit = 'ft' | 'm'
type WeatherSettingsStore = {
  currentCity: CurrentCityT
  temperatureUnit: TemperatureUnit
  setTemperatureUnit: (unit: TemperatureUnit) => void
  distanceUnit: DistanceUnit
  setDistanceUnit: (unit: DistanceUnit) => void
  setCurrentCity: (city: CurrentCityT | null) => void
  openWeatherApiKey: string
  accuWeatherApiKey: string
  setAccuWeatherApiKey: (key: string) => void
  setOpenWeatherApiKey: (key: string) => void
  weatherWidgetIsActive: boolean
  setWeatherWidgetIsActive: (isActive: boolean) => void
  removeCurrentCityLocation: () => void
}

export const weatherStore = create<WeatherSettingsStore>((set) => ({
  currentCity: getCurrentCity(),
  temperatureUnit: getTemperatureUnit(),
  distanceUnit: getDistanceUnit(),
  weatherWidgetIsActive: getWeatherWidgetIsActive(),
  openWeatherApiKey: getOpenWeatherApiKey(),
  accuWeatherApiKey: getAccuWeatherApiKey(),
  setTemperatureUnit: (unit: TemperatureUnit) => setTemperatureUnit(unit, set),
  setDistanceUnit: (unit: DistanceUnit) => setDistanceUnit(unit, set),
  setCurrentCity: (city: CurrentCityT) => setCurrentCity(city, set),
  setAccuWeatherApiKey: (key: string) => setAccuWeatherApiKey(key, set),
  setOpenWeatherApiKey: (key: string) => setOpenWeatherApiKey(key, set),
  setWeatherWidgetIsActive: (isActive: boolean) => setWeatherWidgetIsActive(isActive, set),
  removeCurrentCityLocation: () => removeCurrentCityLocation(set),
}))

type Set = (fn: (state: WeatherSettingsStore) => WeatherSettingsStore) => void

function removeCurrentCityLocation(set: Set) {
  setCurrentCity(null, set)
  ToastAndroid.show('Current city & location removed', ToastAndroid.SHORT)
}

function getCurrentCity() {
  return S.getParsed<CurrentCityT>('WeatherCurrentCity')
}
function setCurrentCity(city: CurrentCityT | null ,  set: Set) {
  S.set('WeatherCurrentCity', JSON.stringify(city))
  set((state) => ({ ...state, currentCity: city }))
}
function getTemperatureUnit() {
  return (S.get('WeatherTemperatureUnit') as TemperatureUnit) || 'C'
}
function setTemperatureUnit(unit: TemperatureUnit, set: Set) {
  S.set('WeatherTemperatureUnit', unit)
  set((state) => ({ ...state, temperatureUnit: unit }))
}
function getDistanceUnit() {
  return (S.get('WeatherDistanceUnit') as DistanceUnit) || 'm'
}
function setDistanceUnit(unit: DistanceUnit, set: Set) {
  S.set('WeatherDistanceUnit', unit)
  set((state) => ({ ...state, distanceUnit: unit }))
}
function getWeatherWidgetIsActive() {
  const data = S.get('WeatherWidgetIsActive')
  return data ? data === 'true' : true
}
function setWeatherWidgetIsActive(isActive: boolean, set: Set) {
  S.set('WeatherWidgetIsActive', isActive.toString())
  set((state) => ({ ...state, weatherWidgetIsActive: isActive }))
}
function getOpenWeatherApiKey() {
  return S.get('WeatherOpenWeatherMapAPIKey') || ''
}
function setAccuWeatherApiKey(key: string, set: Set) {
  S.set('WeatherAccuWeatherAPIKey', key)
  set((state) => ({ ...state, accuWeatherApiKey: key }))
}
function getAccuWeatherApiKey() {
  return S.get('WeatherAccuWeatherAPIKey') || ''
}
function setOpenWeatherApiKey(key: string, set: Set) {
  S.set('WeatherOpenWeatherMapAPIKey', key)
  set((state) => ({ ...state, openWeatherApiKey: key }))
}
