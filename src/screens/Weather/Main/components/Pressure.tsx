import { weatherStore } from '@/zustand/weatherStore'
import { SortingDownSolidIcon } from '@assets/icons/icons'
import { boxSize } from '@screens/Weather/utils'
import { Medium, Regular } from '@utils/fonts'
import type { Theme } from '@utils/types'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import GradientPath from './GradientPath'
import WeatherLabel from './WeatherLabel'

export default function Pressure({ theme, pressure, percent }: { theme: Theme; pressure: number; percent: number }) {
  const unit = weatherStore((state) => state.atmPressureUnit)
  return (
    <View className='aspect-square rounded-3xl bg-black/10' style={boxSize}>
      <WeatherLabel Icon={SortingDownSolidIcon} color={theme.color} label='Pressure' />
      <View className='flex-1 items-center justify-center px-5 pb-4 pt-0'>
        <GradientPath theme={theme} percent={percent} />
        <View style={StyleSheet.absoluteFill} className='items-center justify-center'>
          <Medium style={[{ fontSize: 15 }, theme.color]}>{pressure}</Medium>
          <Regular className='text-xs' style={theme.color}>
            {unit}
          </Regular>
        </View>
      </View>
    </View>
  )
}
