import type { Weather } from '@screens/Weather/types'
import { WEATHER_CACHE_TIME } from '@utils/constants'
import S from '@utils/storage'
import { ToastAndroid } from 'react-native'
import { create } from 'zustand'

export type CurrentCityT = {
  name: string
  lat: number
  lon: number
} | null

export type TemperatureUnit = 'C' | 'F' | 'K'
export type DistanceUnit = 'ft' | 'm'
export type WindSpeedUnit = 'kph' | 'mph' | 'm/s' | 'kn' | 'bft'
export type AtmosPressureUnit = 'hPa' | 'inHg' | 'mmHg' | 'mbar' | 'atm'
export type TimeFormat = '12h' | '24h'

type WeatherSettingsStore = {
  currentCity: CurrentCityT
  temperatureUnit: TemperatureUnit
  setTemperatureUnit: (unit: TemperatureUnit) => void
  windSpeedUnit: WindSpeedUnit
  setWindSpeedUnit: (unit: WindSpeedUnit) => void
  atmPressureUnit: AtmosPressureUnit
  setAtmPressureUnit: (unit: AtmosPressureUnit) => void
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
  currentWeather: Weather
  setCurrentWeather: (weather: Weather) => void
  lastUpdated: number
  setLastUpdated: (time: number) => void
  weatherCacheTime: number
  setWeatherCacheTime: (time: number) => void
  weatherTimeFormat: TimeFormat
  setWeatherTimeFormat: (format: TimeFormat) => void
}

export const weatherStore = create<WeatherSettingsStore>((set) => ({
  currentCity: getCurrentCity(),
  temperatureUnit: getTemperatureUnit(),
  distanceUnit: getDistanceUnit(),
  weatherWidgetIsActive: getWeatherWidgetIsActive(),
  openWeatherApiKey: getOpenWeatherApiKey(),
  accuWeatherApiKey: getAccuWeatherApiKey(),
  windSpeedUnit: getWindSpeedUnit(),
  atmPressureUnit: getAtmPressureUnit(),
  setAtmPressureUnit: (unit: AtmosPressureUnit) => setAtmPressureUnit(unit, set),
  setWindSpeedUnit: (unit: WindSpeedUnit) => setWindSpeedUnit(unit, set),
  setTemperatureUnit: (unit: TemperatureUnit) => setTemperatureUnit(unit, set),
  setDistanceUnit: (unit: DistanceUnit) => setDistanceUnit(unit, set),
  setCurrentCity: (city: CurrentCityT) => setCurrentCity(city, set),
  setAccuWeatherApiKey: (key: string) => setAccuWeatherApiKey(key, set),
  setOpenWeatherApiKey: (key: string) => setOpenWeatherApiKey(key, set),
  setWeatherWidgetIsActive: (isActive: boolean) => setWeatherWidgetIsActive(isActive, set),
  removeCurrentCityLocation: () => removeCurrentCityLocation(set),
  currentWeather: getCurrentWeather(),
  setCurrentWeather: (weather: Weather) => setCurrentWeather(weather, set),
  lastUpdated: getWeatherLastUpdated(),
  setLastUpdated: (time: number) => setWeatherLastUpdated(time, set),
  weatherCacheTime: getWeatherCacheTime(),
  setWeatherCacheTime: (time: number) => setWeatherCacheTime(time, set),
  weatherTimeFormat: getWeatherTimeFormat(),
  setWeatherTimeFormat: (format: TimeFormat) => setWeatherTimeFormat(format, set),
}))

type Set = (fn: (state: WeatherSettingsStore) => WeatherSettingsStore) => void

function getWeatherTimeFormat() {
  return (S.get('WeatherTimeFormat') as TimeFormat) || '12h'
}

function setWeatherTimeFormat(format: TimeFormat, set: Set) {
  set((state) => ({ ...state, weatherTimeFormat: format }))
}

function getWeatherCacheTime() {
  const cacheTime = Number(S.get('WeatherCacheTime'))
  return isNaN(cacheTime) ? WEATHER_CACHE_TIME : cacheTime
}

function setWeatherCacheTime(time: number, set: Set) {
  S.set('WeatherCacheTime', time.toString())
  set((state) => ({ ...state, weatherCacheTime: time }))
}

function getWeatherLastUpdated() {
  const lastUpdated = Number(S.get('WeatherLastUpdated') || '0')
  return isNaN(lastUpdated) ? 0 : lastUpdated
}

function setWeatherLastUpdated(time: number, set: Set) {
  S.set('WeatherLastUpdated', time.toString())
  set((state) => ({ ...state, lastUpdated: time }))
}

function getCurrentWeather() {
  return S.getParsed<Weather>('WeatherCurrentWeather')
}

function setCurrentWeather(weather: Weather, set: Set) {
  S.set('WeatherCurrentWeather', JSON.stringify(weather))
  set((state) => ({ ...state, currentWeather: weather }))
}

function getAtmPressureUnit() {
  return (S.get('WeatherAtmospherePressureUnit') as AtmosPressureUnit) || 'hPa'
}

function setAtmPressureUnit(unit: AtmosPressureUnit, set: Set) {
  S.set('WeatherAtmospherePressureUnit', unit)
  set((state) => ({ ...state, atmPressureUnit: unit }))
}

function getWindSpeedUnit() {
  return (S.get('WeatherWindSpeedUnit') as WindSpeedUnit) || 'kph'
}

function setWindSpeedUnit(unit: WindSpeedUnit, set: Set) {
  S.set('WeatherWindSpeedUnit', unit)
  set((state) => ({ ...state, windSpeedUnit: unit }))
}

function removeCurrentCityLocation(set: Set) {
  setCurrentCity(null, set)
  setWeatherLastUpdated(0, set)
  ToastAndroid.show('Current city & location removed', ToastAndroid.SHORT)
}

function getCurrentCity() {
  return S.getParsed<CurrentCityT>('WeatherCurrentCity')
}
function setCurrentCity(city: CurrentCityT | null, set: Set) {
  setWeatherLastUpdated(0, set)
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
