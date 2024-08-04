import { Share } from 'react-native'

export async function shareText(message: string) {
  try {
    const result = await Share.share({ message })
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

import { Alert } from 'react-native'

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
  return new Date().toLocaleString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
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
