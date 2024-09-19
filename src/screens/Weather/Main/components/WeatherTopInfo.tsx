import { weatherStore } from '@/zustand/weatherStore'
import { PaddingBottom } from '@components/SafePadding'
import type { Weather } from '@screens/Weather/types'
import { Light, Medium } from '@utils/fonts'
import { tempConverter } from '@utils/utils'
import React from 'react'
import { View } from 'react-native'

type WeatherTopInfoProps = {
  color: {
    color: string
  }
  w: Weather
}

export default function WeatherTopInfo({ color, w }: WeatherTopInfoProps) {
  const currentCity = weatherStore((state) => state.currentCity)
  const currentUnit = weatherStore((state) => state.temperatureUnit)
  return (
    <View className='flex-1 px-5'>
      <Medium className='mt-7 text-center' style={[color, { fontSize: 25 }]}>
        {currentCity?.name}
      </Medium>
      <View className='flex-row justify-center'>
        <Light
          className='mt-2 items-start justify-start pl-5 text-center'
          style={[color, { lineHeight: 180, fontSize: 130 }]}
        >
          {w ? tempConverter({ temp: w.current.temp, unit: currentUnit }) : '__'}
        </Light>
        <Medium style={[color, { fontSize: 60 }]}>{currentUnit === 'K' ? '' : '°'}</Medium>
      </View>
      <Medium className='-mt-4 text-center text-lg capitalize' style={color}>
        {w ? w.current.weather[0]!.description : '__'}
      </Medium>
      <Medium className='mt-0.5 text-center text-base' style={color}>
        {w ? tempConverter({ temp: w.daily[0]!.temp.min, unit: currentUnit }) : '__'}
        {currentUnit === 'K' ? currentUnit : '° ' + currentUnit} /{' '}
        {w ? tempConverter({ temp: w.daily[0]!.temp.max, unit: currentUnit }) : '__'}
        {currentUnit === 'K' ? currentUnit : '° ' + currentUnit}
      </Medium>
      <PaddingBottom />
    </View>
  )
}
