import { Sun03SolidIcon } from '@assets/icons/icons'
import Gradient from '@components/Gradient'
import { boxSize } from '@screens/Weather/utils'
import { F, Medium, Regular } from '@utils/fonts'
import type { Theme } from '@utils/types'
import React from 'react'
import { View } from 'react-native'
import WeatherLabel from './WeatherLabel'

const gradientColors = [
  '#658D1B',
  // '#84BD00',
  '#97D700',
  // '#F7EA48',
  '#FCE300',
  // '#FFCD00',
  '#ECA154',
  // '#FF8200',
  '#EF3340',
  // '#DA291C',
  // '#BF0D3E',
  '#851663', // Mixed
  '#4B1E88',
  '#62359F',
  '#794CB6',
  '#9063CD',
  // '#A77AE4',
  // '#BE91FB',
  // '#D5A8FF',
  // '#ECBFFF',
  // '#FFD6FF',
].reverse()

export default function UVIndex({ uvIndex, theme }: { uvIndex: number; theme: Theme }) {
  let uviPercent = (uvIndex * 100) / 12
  uviPercent = uviPercent > 100 ? 100 : uviPercent

  return (
    <View className='aspect-square rounded-3xl bg-black/10' style={boxSize}>
      <WeatherLabel Icon={Sun03SolidIcon} color={theme.color} label='UV Index' />
      <View className='flex-1 justify-between px-5 pb-4 pt-0'>
        <Medium style={[{ fontSize: 35 }, theme.color]}>{uvIndex}</Medium>
        <Gradient className='h-1.5 w-full flex-row rounded-full' colors={gradientColors}>
          <View style={{ width: `${uviPercent}%` }} />
          <View className='h-1.5 w-1.5 rounded-full bg-white' />
        </Gradient>
        <Regular style={[theme.color, F.F12]}>{getUVIndexStatus(uvIndex)}</Regular>
      </View>
    </View>
  )
}

function getUVIndexStatus(uvIndex: number) {
  if (uvIndex < 3) return 'Current UV index is low.'
  if (uvIndex < 6) return 'Current UV index is moderate.'
  if (uvIndex < 8) return 'Current UV index is high.'
  if (uvIndex < 11) return 'Current UV index is very high.'
  return 'Current UV index is extreme.'
}
