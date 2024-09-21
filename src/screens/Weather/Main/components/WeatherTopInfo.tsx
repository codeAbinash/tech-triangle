import { weatherStore } from '@/zustand/weatherStore'
import { PaddingBottom } from '@components/SafePadding'
import type { Weather } from '@screens/Weather/types'
import { F, Light, Medium, Regular } from '@utils/fonts'
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
      <Medium className='mt-7 text-center' style={[color, { fontSize: 22 }]}>
        {currentCity?.name}
      </Medium>
      <View className='flex-row justify-center pb-3'>
        <Light
          className='mt-4 items-start justify-start pl-5 text-center'
          style={[color, { lineHeight: 150, fontSize: 130 }]}
        >
          {w ? tempConverter({ temp: w.current.temp, unit: currentUnit }) : '__'}
        </Light>
        <Regular style={[color, { fontSize: 50 }]}>{currentUnit === 'K' ? '' : '°'}</Regular>
      </View>
      <Medium className='-mt-4 text-center text-sm' style={[color, { fontSize: 14 }]}>
        {'Feels like ' + tempConverter({ temp: w?.current.feels_like || 0, unit: currentUnit, degree: true })}{' '}
        {currentUnit}
      </Medium>
      <Medium className='mt-1 text-center text-base capitalize' style={[color, { fontSize: 15 }]}>
        {w ? w.current.weather[0]!.description : '__'}
      </Medium>
      {/* <Medium className='mt-0.5 text-center text-base' style={color}>
        {w ? tempConverter({ temp: w.daily[0]!.temp.min, unit: currentUnit }) : '__'}
        {currentUnit === 'K' ? currentUnit : '° ' + currentUnit} /{' '}
        {w ? tempConverter({ temp: w.daily[0]!.temp.max, unit: currentUnit }) : '__'}
        {currentUnit === 'K' ? currentUnit : '° ' + currentUnit}
      </Medium> */}
      <PaddingBottom />
    </View>
  )
}
