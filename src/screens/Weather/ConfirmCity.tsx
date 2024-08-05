import { useWeatherSettings } from '@/zustand/store'
import Btn, { BtnTransparent } from '@components/Button'
import type { RouteProp } from '@react-navigation/native'
import { W } from '@utils/dimensions'
import { PoppinsBold, PoppinsMedium, PoppinsSemiBold } from '@utils/fonts'
import type { StackNav } from '@utils/types'
import { getLatitude, getLongitude } from '@utils/utils'
import LottieView from 'lottie-react-native'
import React from 'react'
import { StatusBar, Text, ToastAndroid, View } from 'react-native'
type ParamList = {
  ConfirmCity: ConfirmCityParamList
}

export type ConfirmCityParamList = {
  name: string
  lon: number
  lat: number
  altitude: number
  country: string
  area: string
  shouldGoBack: boolean
}

export default function ConfirmCity({ navigation, route }: { navigation: StackNav; route: RouteProp<ParamList, 'ConfirmCity'> }) {
  let { lon, lat, altitude, shouldGoBack } = route.params
  const setCurrentCity = useWeatherSettings((state) => state.setCurrentCity)

  return (
    <View className='flex-1 dark:bg-zinc-950'>
      <StatusBar barStyle='default' />

      <View className='w-full flex-1 items-center justify-between p-[10%]'>
        <View>
          <Text style={[PoppinsBold, { fontSize: 38 }]} className='my-8 mb-0 text-center text-zinc-800 dark:text-zinc-200'>
            {route.params.name}
          </Text>
          <Text style={[PoppinsMedium, { fontSize: 18 }]} className='-mt-2 text-center text-zinc-700 dark:text-zinc-300'>
            {route.params.area}, {route.params.country}
          </Text>
        </View>

        <View>
          <LottieView source={require('@assets/animations/earth.lottie')} autoPlay loop={false} style={{ width: W * 1.1, height: W * 1.1 }} />
        </View>
        <View className='w-full pt-2' style={{ gap: 10 }}>
          <Text style={[PoppinsSemiBold, { fontSize: 14 }]} className='text-center text-zinc-700 dark:text-zinc-300'>
            {getLongitude(lon)}
            {'    '}
            {getLatitude(lat)}
            {'    '}
            {altitude} m
          </Text>
          <Text style={[PoppinsMedium, { fontSize: 11 }]} className='mb-3 text-center text-zinc-500 dark:text-zinc-500'>
            By setting this location, you will be able to view the weather of this location in the home screen and the weather screen.
          </Text>
          <Btn
            title='Set this location'
            onPress={() => {
              setCurrentCity({ name: route.params.name, lat, lon })
              ToastAndroid.show('Current city is updated', ToastAndroid.SHORT)
              if (shouldGoBack) return navigation.pop(2)
              navigation.reset({ index: 0, routes: [{ name: 'Home' }, { name: 'Weather' }] })
            }}
          />
          <BtnTransparent title='Cancel' onPress={() => navigation.goBack()} />
        </View>
      </View>
    </View>
  )
}
