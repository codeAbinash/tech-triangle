import { getLatitude, getLongitude } from '@utils/utils'
import { PermissionsAndroid, Platform } from 'react-native'
import Geolocation from 'react-native-geolocation-service'

export const defaultOptions = {
  enableHighAccuracy: true,
  timeout: 0,
  maximumAge: 10000,
}

export type LocationError = {
  code: number
  message: string
}

export const fetchLocation = async (): Promise<Geolocation.GeoPosition> => {
  const hasPermission = await requestPermissions()
  if (!hasPermission) {
    throw { code: 1, message: 'Location permission not granted' }
  }
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(resolve, reject, defaultOptions)
  })
}

export const watchLocation = async (
  onSuccess: (position: Geolocation.GeoPosition) => void,
  onError: (error: LocationError) => void,
  options: Geolocation.GeoWatchOptions = {},
): Promise<number> => {
  const hasPermission = await requestPermissions()
  if (!hasPermission) {
    onError({ code: 1, message: 'Location permission not granted' })
    return -1
  }
  return Geolocation.watchPosition(onSuccess, onError, options)
}

export const requestPermissions = async (): Promise<boolean> => {
  try {
    if (Platform.OS === 'ios') {
      const auth = await Geolocation.requestAuthorization('whenInUse')
      return auth === 'granted'
    }
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
        title: 'Geolocation Permission',
        message: 'Can we access your location?',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      })
      return granted === PermissionsAndroid.RESULTS.GRANTED
    }
    return false
  } catch (err) {
    console.error(err)
    return false
  }
}

export function shareMessage(latitude: number, longitude: number, timestamp?: number) {
  const coords = `${getLatitude(latitude)}, ${getLongitude(longitude)}`

  return `📍 I've marked this location ${coords} and want to share it with you!\n\nView on Google Maps: https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`
}
