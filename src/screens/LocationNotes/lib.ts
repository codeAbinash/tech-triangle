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
