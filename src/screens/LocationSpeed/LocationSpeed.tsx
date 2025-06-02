import SettWrapper from '@components/Settings/SettWrapper'
import { watchLocation } from '@screens/LocationNotes/lib'
import LocationDetails from '@screens/LocationNotes/LocationDetails'
import { Bold, MEDIUM, SemiBold } from '@utils/fonts'
import { layout } from '@utils/utils'
import { useEffect, useState } from 'react'
import { View } from 'react-native'
import Geolocation from 'react-native-geolocation-service'
import Animated from 'react-native-reanimated'

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
  // Convert from m/s to km/h (multiply by 3.6)
  let speedKmh = speed * 3.6
  let s = speedKmh < 10 ? speedKmh.toFixed(1) : speedKmh.toFixed(0)

  return (
    <SettWrapper title='Location Speed Meter'>
      <View className='py-20 pb-16'>
        <Animated.Text
          className='text pl-14 text-center'
          style={[{ fontSize: 130, lineHeight: 130 }, MEDIUM]}
          layout={layout}
        >
          {s}
          <Bold style={{ fontSize: 25 }}>km/h</Bold>
        </Animated.Text>
        <SemiBold className='text text-center text-xl'>Your Speed</SemiBold>
      </View>
      <LocationDetails data={pos} />
    </SettWrapper>
  )
}
