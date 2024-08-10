import { weatherStore } from '@/zustand/weatherStore'
import { Canvas, LinearGradient, Rect, vec } from '@shopify/react-native-skia'
import { H, W } from '@utils/dimensions'
import { Medium } from '@utils/fonts'
import React from 'react'
import { StatusBar, View } from 'react-native'
import { useDerivedValue } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { themeList } from './themes'

export default function Weather() {
  const currentCity = weatherStore((state) => state.currentCity)
  const theme = themeList.at(-1)!
  const color = theme.color
  const gradient = useDerivedValue(() => theme.gradient, [])

  const bottom = useSafeAreaInsets().bottom
  const top = useSafeAreaInsets().top
  const h = H + bottom + top
  const w = W

  return (
    <>
      <StatusBar backgroundColor='transparent' barStyle={'light-content'} />
      <Canvas style={[{ position: 'absolute', height: h, width: w }]}>
        <Rect x={0} y={0} width={w} height={h}>
          <LinearGradient colors={gradient} start={vec(w / 2, 0)} end={vec(w / 2, h)} />
        </Rect>
      </Canvas>
      <View className='flex-1 items-center justify-center px-5'>
        <Medium style={color}>{currentCity?.name}</Medium>
        <Medium style={color}>{currentCity?.lat}</Medium>
        <Medium style={color}>{currentCity?.lon}</Medium>
      </View>
    </>
  )
}
