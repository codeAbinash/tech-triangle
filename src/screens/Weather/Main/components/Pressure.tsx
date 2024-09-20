import { weatherStore } from '@/zustand/weatherStore'
import { SortingDownSolidIcon } from '@assets/icons/icons'
import type { Weather } from '@screens/Weather/types'
import { boxSize } from '@screens/Weather/utils'
import { Medium } from '@utils/fonts'
import type { Theme } from '@utils/types'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import GradientPath from './GradientPath'
import WeatherLabel from './WeatherLabel'

const minPressure = 970
const maxPressure = 1030

export default function Pressure({ theme, pressure, percent }: { theme: Theme; pressure: number; percent: number }) {
  const unit = weatherStore((state) => state.atmPressureUnit)
  return (
    <View className='aspect-square rounded-3xl bg-black/10' style={boxSize}>
      <WeatherLabel Icon={SortingDownSolidIcon} color={theme.color} label='Pressure' />
      <View className='flex-1 items-center justify-center px-5 pb-4 pt-0'>
        <GradientPath theme={theme} percent={percent} />
        <View style={StyleSheet.absoluteFill} className='items-center justify-center'>
          <Medium style={[{ fontSize: 17 }, theme.color]}>{pressure}</Medium>
          <Medium>{unit}</Medium>
        </View>
      </View>
    </View>
  )
}

export function calculatePressurePercentage(w: Weather) {
  let percent = ((w?.current.pressure || 0) - minPressure) / (maxPressure - minPressure)
  percent = percent >= 1 ? 0.999 : percent
  percent = percent < 0 ? 0 : percent
  return percent
}
