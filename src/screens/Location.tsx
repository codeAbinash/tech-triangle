/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import Btn from '@components/Button'
import React, { useState } from 'react'
import { PermissionsAndroid, Text, View } from 'react-native'
import Geolocation from 'react-native-geolocation-service'
// Function to get permission for location
const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
      title: 'Geolocation Permission',
      message: 'Can we access your location?',
      buttonNeutral: 'Ask Me Later',
      buttonNegative: 'Cancel',
      buttonPositive: 'OK',
    })
    console.log('granted', granted)
    if (granted === 'granted') {
      console.log('You can use Geolocation')
      return true
    } else {
      console.log('You cannot use Geolocation')
      return false
    }
  } catch (err) {
    return false
  }
}
const Location = () => {
  // state to hold location
    const [location, setLocation] = useState<any>()
    // function to check permissions and get Location
    const getLocation = () => {
      const result = requestLocationPermission()
      result.then((res) => {
        console.log('res is:', res)
        if (res) {
          Geolocation.getCurrentPosition(
            (position) => {
              console.log(JSON.stringify(position, null, 4))
              setLocation(position)
            },
            (error) => {
              // See error code charts below.
              console.log(error.code, error.message)
              setLocation(false)
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 1000 },
          )
        }
      })
      console.log(location)
    }
  return (
    <View className='flex-1 items-center justify-center'>
      <Text>{JSON.stringify(location, null, 4)}</Text>
      <View style={{ marginTop: 10, padding: 10, borderRadius: 10, width: '80%' }}>
        <Btn onPress={getLocation}>
          <Text className='text-white'>Get Location</Text>
        </Btn>
      </View>
    </View>
  )
}
export default Location
