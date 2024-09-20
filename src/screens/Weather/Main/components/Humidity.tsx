import { weatherStore } from '@/zustand/weatherStore'
import { HumiditySolidIcon } from '@assets/icons/icons'
import { Medium } from '@utils/fonts'
import type { Theme } from '@utils/types'
import { tempConverter } from '@utils/utils'
import React from 'react'
import { View } from 'react-native'
import WeatherLabel from './WeatherLabel'
import { boxSize } from '@screens/Weather/utils'

type HumidityProps = {
  humidity: number
  dew_point: number
  theme: Theme
}

export default function Humidity({ humidity, theme, dew_point }: HumidityProps) {
  const unit = weatherStore((state) => state.temperatureUnit)
  return (
    <View className='aspect-square rounded-3xl bg-black/10' style={boxSize}>
      <WeatherLabel Icon={HumiditySolidIcon} color={theme.color} label='Humidity' />
      <View className='flex-1 justify-between px-5 pb-4 pt-0'>
        <Medium style={[{ fontSize: 40 }, theme.color]}>{humidity}%</Medium>
        <View className='w-full rounded-full bg-white/10'>
          <View className='h-1.5 rounded-full bg-white/70' style={{ width: `${humidity}%` }} />
        </View>
        <Medium className='text-sm' style={theme.color}>
          The due point is {tempConverter({ temp: dew_point, unit: unit, degree: true })} right now.
        </Medium>
      </View>
    </View>
  )
}
