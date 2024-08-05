import StackHeader from '@components/StackHeader'
import type { RouteProp } from '@react-navigation/native'
import type { StackNav } from '@utils/types'
import React from 'react'
import { StatusBar, View } from 'react-native'
type ParamList = {
  WeatherLocation: WeatherLocationParamList
}

export type WeatherLocationParamList = {
  shouldGoBack: boolean
}

export default function WeatherLocation({ navigation, route }: { navigation: StackNav; route: RouteProp<ParamList, 'WeatherLocation'> }) {
  return (
    <>
      <StatusBar barStyle='default' />
      <View className='p-5 pb-2 pt-4 dark:bg-zinc-950' style={{ gap: 12 }}>
        <StackHeader title='Current Location' navigation={navigation} left='Cancel' right='Done' />
      </View>
      <View className='p-16 dark:bg-zinc-950'></View>
    </>
  )
}
