import { ls } from '@utils/storage'
import { Alert, Share } from 'react-native'
import { SCREEN_TRANSITION } from './constants'
import type { DistanceUnit, TemperatureUnit, TimeFormat } from '@/zustand/weatherStore'

export async function shareText(message: string) {
  try {
    await Share.share({ message })
  } catch (error) {}
}

export function removePlusBeforeCountryCode(country_code: string) {
  return country_code.replace('+', '')
}

export function formattedDate(date: Date | null) {
  if (!date) return ''
  return date.toISOString().split('T')[0]
}

export function niceDate(date: Date | null) {
  if (!date) return ''
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

// Utils
export const p = console.log
export const e = console.error

// each message string will be displayed on a new line
export const showAlert = (title: string, messages?: string[]) => {
  const message = messages?.reduce((acc, s) => (s.length > 0 ? `${acc}\n${s}` : acc))
  Alert.alert(title, message, [{ text: 'OK' }])
}

export const prettyJSON = (obj: any) => JSON.stringify(obj, null, 2)

export function blank_fn() {}

export function getEmojiOfDayByTime() {
  const now = new Date()
  const hour = now.getHours()
  // Return lot of emojis based on time, don's use clouds icons, can use sun or moon
  // return '🌻'
  if (hour >= 0 && hour < 4) return '🌓'
  if (hour >= 4 && hour < 6) return '🌅'
  if (hour >= 6 && hour < 8) return '🌄'
  if (hour >= 8 && hour < 10) return '🌻'
  if (hour >= 10 && hour < 12) return '🌞'
  if (hour >= 12 && hour < 14) return '⛱️'
  if (hour >= 14 && hour < 16) return '☀️'
  if (hour >= 16 && hour < 18) return '🌇'
  if (hour >= 18 && hour < 20) return '🌆'
  if (hour >= 20 && hour < 22) return '🌖'
  if (hour >= 22 && hour < 24) return '🌔'
  return '🌞'
}

export function greetingByTime() {
  const now = new Date()
  const hour = now.getHours()
  if (hour >= 0 && hour < 4) return 'Good Night'
  if (hour >= 4 && hour < 12) return 'Good Morning'
  if (hour >= 12 && hour < 18) return 'Good Afternoon'
  if (hour >= 18 && hour < 24) return 'Good Evening'
  return 'Hello'
}

export function getLocalDate() {
  return new Date().toLocaleString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })
}

export function getLatitude(lat: number) {
  let l = Math.abs(lat)
  if (lat < 0) return `${l} °S`
  return `${l} °N`
}

export function getLongitude(lon: number) {
  let l = Math.abs(lon)
  if (lon < 0) return `${l} °W`
  return `${l} °E`
}

export function getS(data: any) {
  return data > 1 ? 's' : ''
}

export function toReadableSize(size: number) {
  if (size < 1024) return `${size} bytes`
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`
  return `${(size / (1024 * 1024)).toFixed(2)} MB`
}

export function getLocalDataSize(startKey: string) {
  const keys = ls.getAllKeys().filter((key) => key.startsWith(startKey))
  let size = 0
  keys.forEach((key) => {
    const value = ls.getString(key)
    if (value) size += value.length
  })
  return Math.round(size)
}

export function screenDelay(fn: () => void, ms: number = SCREEN_TRANSITION) {
  return setTimeout(fn, ms)
}

/**
 *
 * @param temp temperature in kelvin
 * @param unit unit of temperature
 * @returns temperature in the specified unit
 */
export function tempConverter({
  temp,
  unit,
  decimal: decimalPlaces = 0,
  degree,
}: {
  temp: number
  unit: TemperatureUnit
  degree?: boolean
  decimal?: number
}) {
  if (unit === 'C') return roundToDecimal(temp - 273.15, decimalPlaces) + (degree ? '°' : '')
  if (unit === 'F') return roundToDecimal((temp - 273.15) * 1.8 + 32, decimalPlaces) + (degree ? '°' : '')
  return roundToDecimal(temp, decimalPlaces).toString()
}
/**
 *
 * @param num  number to round
 * @param places  number of decimal places
 * @returns rounded number
 */
function roundToDecimal(num: number, places: number) {
  const factor = Math.pow(10, places)
  return Math.round(num * factor) / factor
}

/**
 *
 * @param ms milliseconds
 * @returns minutes
 */
export const msToMin = (ms: number) => Math.round(ms / 1000 / 60)

/**
 *
 * @returns current timestamp
 */
export function timeStamp() {
  return new Date().getTime()
}

export function getTempName(unit: TemperatureUnit) {
  if (unit === 'C') return 'Celsius'
  else if (unit === 'F') return 'Fahrenheit'
  else if (unit === 'K') return 'Kelvin'
  else return unit
}

export function getDistanceUnit(unit: DistanceUnit) {
  if (unit === 'ft') return 'Feet'
  else if (unit === 'm') return 'Meter'
  else return unit
}

/**
 * Prints the provided arguments to the console. If an argument is an object,
 * it will be stringified with a 2-space indentation for better readability.
 *
 * @param {...any[]} args - The arguments to be printed. Can be of any type.
 */
export function print(...args: any[]) {
  for (const arg of args) console.log(typeof arg === 'object' ? JSON.stringify(arg, null, 2) : arg)
}

export function getHour(unix: number, unit: TimeFormat) {
  if (unit === '24h') return getTime24(unix)
  return getTime12(unix)
}

function getTime24(unix: number) {
  const date = new Date(unix * 1000)
  let hours: string | number = date.getHours()
  if (hours < 10) hours = '0' + hours
  return `${hours}`
}

function getTime12(unix: number) {
  const date = new Date(unix * 1000)
  let hours: string | number = date.getHours()
  if (hours > 12) hours = hours - 12
  if (hours === 0) hours = 12
  return hours
}

export function getAp(unix: number, unit: TimeFormat) {
  if (unit === '24h') return ''
  const date = new Date(unix * 1000)
  let hours: string | number = date.getHours()
  if (hours >= 12) return 'PM'
  else return 'AM'
}

export function getDay(dt: number) {
  const date = new Date(dt * 1000)
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
  })
}
