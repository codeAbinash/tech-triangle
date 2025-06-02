import SettWrapper from '@components/Settings/SettWrapper'
import { watchLocation } from '@screens/LocationNotes/lib'
import LocationDetails from '@screens/LocationNotes/LocationDetails'
import { Bold, SemiBold } from '@utils/fonts'
import { useEffect, useState } from 'react'
import { View } from 'react-native'
import Geolocation from 'react-native-geolocation-service'

export default function LocationSpeed() {
  const [pos, setPos] = useState<Geolocation.GeoPosition | null>(null)

  useEffect(() => {
    let watchId: number

    const startLocationWatch = async () => {
      watchId = await watchLocation(
        (position) => {
          console.log(position)
          setPos(position)
        },
        (err) => {
          console.log(err)
        },
        {
          enableHighAccuracy: true,
          interval: 1000,
        },
      )
    }

    startLocationWatch()

    return () => {
      if (watchId !== undefined && watchId !== -1) {
        Geolocation.clearWatch(watchId)
        Geolocation.stopObserving()
      }
    }
  }, [])

  let speed = pos?.coords.speed || 0
  let s = speed < 10 ? speed.toFixed(1) : speed.toFixed(0)

  return (
    <SettWrapper title='Location Speed Meter'>
      <View className='py-20 pb-16'>
        <Bold className='text pl-12 text-center' style={{ fontSize: 100, lineHeight: 100 }}>
          {s}
          <Bold style={{ fontSize: 30 }}>m/s</Bold>
        </Bold>
        <SemiBold className='text text-center text-xl'>Your Speed</SemiBold>
      </View>
      <LocationDetails data={pos} />
    </SettWrapper>
  )
}
