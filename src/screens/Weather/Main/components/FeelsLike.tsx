import { weatherStore } from '@/zustand/weatherStore'
import { TemperatureSolidIcon } from '@assets/icons/icons'
import { Medium } from '@utils/fonts'
import type { Theme } from '@utils/types'
import { tempConverter } from '@utils/utils'
import React from 'react'
import { View } from 'react-native'
import WeatherLabel from './WeatherLabel'
import { boxSize } from '@screens/Weather/utils'

type FeelsLikeProps = {
  theme: Theme
  feelsLike: number
  feelsLikeStatus: string
}

export default function FeelsLike({ theme, feelsLike, feelsLikeStatus }: FeelsLikeProps) {
  const unit = weatherStore((state) => state.temperatureUnit)
  return (
    <View className='aspect-square rounded-3xl bg-black/10' style={boxSize}>
      <WeatherLabel Icon={TemperatureSolidIcon} color={theme.color} label='Feels Like' />
      <View className='flex-1 justify-between px-5 pb-4 pt-0'>
        <Medium style={[{ fontSize: 45 }, theme.color]}>
          {tempConverter({ temp: feelsLike, unit: unit, degree: true })}
        </Medium>
        <Medium className='text-sm' style={theme.color}>
          {feelsLikeStatus}
        </Medium>
      </View>
    </View>
  )
}

export function getFeelsLikeStatusString(feelsLike: number, current: number): string {
  feelsLike = Math.round(feelsLike)
  current = Math.round(current)
  if (feelsLike === current) return 'Similar to the actual temperature.'
  if (feelsLike > current) return 'Warmer than the actual temperature.'
  if (feelsLike < current) return 'Colder than the actual temperature.'
  return 'Similar to the actual temperature.'
}
