import { NaturalFoodSolidIcon } from '@assets/icons/icons'
import Gradient from '@components/Gradient'
import { boxSize } from '@screens/Weather/utils'
import { F, Medium, Regular } from '@utils/fonts'
import type { Theme } from '@utils/types'
import React from 'react'
import { View } from 'react-native'
import WeatherLabel from './WeatherLabel'

const gradientColors = [
  // '#00e400',
  // //
  // '#fefe00',
  // '#fe7d00',
  '#658D1B',
  // '#84BD00',
  '#97D700',
  // '#F7EA48',
  '#FCE300',
  // '#FFCD00',
  '#ECA154',
  // '#FF8200',
  '#EF3340',
  '#eb0000',
  '#890045',
  '#7c0023',
].reverse()
export default function AirQualityIndex({
  aqi,
  theme,
  aqiStatus,
}: {
  aqi: number | undefined
  theme: Theme
  aqiStatus?: string
}) {
  let aqiPercent = (aqi || 0 * 100) / 500
  aqiPercent = aqiPercent > 95 ? 95 : aqiPercent
  return (
    <View className='aspect-square rounded-3xl bg-black/10' style={boxSize}>
      <WeatherLabel Icon={NaturalFoodSolidIcon} color={theme.color} label='AQI' />
      <View className='flex-1 justify-between px-5 pb-4 pt-0'>
        <Medium style={[{ fontSize: 35 }, theme.color]}>{aqi}</Medium>
        <Gradient className='h-1.5 w-full flex-row rounded-full' colors={gradientColors}>
          <View style={{ width: `${aqiPercent}%` }} />
          <View className='h-1.5 w-1.5 rounded-full bg-white' />
        </Gradient>
        <Regular style={[theme.color, F.F12]}>{aqiStatus}</Regular>
      </View>
    </View>
  )
}
