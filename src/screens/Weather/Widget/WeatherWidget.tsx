import { navigateToWeather } from '@/navigation'
import { weatherStore } from '@/zustand/weatherStore'
import { CloudSolidIcon } from '@assets/icons/icons'
import styles, { hw } from '@screens/Home/style'
import { Canvas, LinearGradient, Rect, vec } from '@shopify/react-native-skia'
import { Medium, Regular } from '@utils/fonts'
import type { StackNav } from '@utils/types'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { useDerivedValue } from 'react-native-reanimated'
import { themeList } from './themes'

export default function WeatherWidget({ navigation }: { navigation: StackNav }) {
  const weatherWidgetIsActive = weatherStore((state) => state.weatherWidgetIsActive)
  const currentCity = weatherStore((state) => state.currentCity)
  const h = hw.height
  const w = hw.width

  const theme = themeList.at(0)!
  const color = theme.color
  const gradient = useDerivedValue(() => theme.gradient, [])

  if (!weatherWidgetIsActive) return null

  if (!currentCity) return <SetupWeather navigation={navigation} />

  return (
    <View className='overflow-hidden rounded-3xl' style={{ position: 'relative' }}>
      <Canvas style={[hw, { position: 'absolute' }]}>
        <Rect x={0} y={0} width={hw.width} height={hw.height}>
          <LinearGradient colors={gradient} start={vec(w / 2, 0)} end={vec(w / 2, h)} />
        </Rect>
      </Canvas>
      <TouchableOpacity
        style={[hw, styles.shadow]}
        className='justify-between p-4'
        activeOpacity={0.7}
        onPress={() => navigateToWeather(navigation, currentCity)}
      >
        <View>
          <Medium className='text-base' style={color}>
            Bankura
          </Medium>
          <Regular style={[{ fontSize: 60, lineHeight: 83 }, color]}>62°</Regular>
        </View>
        <View>
          <CloudSolidIcon width={25} height={25} color={color.color} />
          <Medium style={[color]} className='mt-0.5'>
            Thunderstorm
          </Medium>
          <Medium style={[color]}>H:64° L:34°</Medium>
        </View>
      </TouchableOpacity>
    </View>
  )
}

function SetupWeather({ navigation }: { navigation: StackNav }) {
  const h = hw.height
  const w = hw.width
  const theme = themeList[0]
  const color = theme.color
  const g = theme.gradient

  return (
    <View className='overflow-hidden rounded-3xl' style={{ position: 'relative' }}>
      <Canvas style={[hw, { position: 'absolute' }]}>
        <Rect x={0} y={0} width={hw.width} height={hw.height}>
          <LinearGradient colors={[g[0], g[1]]} start={vec(w / 2, 0)} end={vec(w / 2, h)} />
        </Rect>
      </Canvas>
      <TouchableOpacity
        style={[hw, styles.shadow]}
        className='items-center justify-center'
        activeOpacity={0.7}
        onPress={() => navigation.navigate('WeatherWelcome')}
      >
        <Medium style={color} className='text-center'>
          Tap to set {'\n'} up weather
        </Medium>
      </TouchableOpacity>
    </View>
  )
}
