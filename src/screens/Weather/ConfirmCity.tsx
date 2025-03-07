import { weatherStore } from '@/zustand/weatherStore'
import Btn, { BtnTransparent } from '@components/Button'
import { PaddingBottom } from '@components/SafePadding'
import type { RouteProp } from '@react-navigation/native'
import { F, Medium, SemiBold } from '@utils/fonts'
import type { StackNav } from '@utils/types'
import { getLatitude, getLongitude } from '@utils/utils'
import { StatusBar, ToastAndroid, View } from 'react-native'
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

export default function ConfirmCity({
  navigation,
  route,
}: {
  navigation: StackNav
  route: RouteProp<ParamList, 'ConfirmCity'>
}) {
  let { lon, lat, altitude, shouldGoBack } = route.params
  const setCurrentCity = weatherStore((state) => state.setCurrentCity)

  return (
    <View className='flex-1 dark:bg-zinc-950'>
      <StatusBar barStyle='default' />

      <View className='w-full flex-1 items-center justify-between px-[10%]'>
        <View></View>
        <View>
          <SemiBold style={{ fontSize: 32 }} className='my-8 mb-0 mt-10 text-center text-zinc-800 dark:text-zinc-200'>
            {route.params.name}
          </SemiBold>
          <Medium style={{ fontSize: 15.5 }} className='-mt-2 text-center text-zinc-700 dark:text-zinc-300'>
            {route.params.area}, {route.params.country}
          </Medium>
          <Medium style={{ fontSize: 11.5 }} className='text-center text-accent'>
            {getLongitude(lon)}
            {'    '}
            {getLatitude(lat)}
            {'    '}
            {altitude} m
          </Medium>
        </View>
        <View className='w-full pb-3 pt-2' style={{ gap: 10 }}>
          <Medium style={F.F9_5} className='mb-3 text-center text-zinc-500 dark:text-zinc-500'>
            By setting this location, you will be able to view the weather of this location in the home screen and the
            weather screen.
          </Medium>
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
      <PaddingBottom />
    </View>
  )
}
