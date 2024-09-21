import { Sun03SolidIcon } from '@assets/icons/icons'
import { boxSize } from '@screens/Weather/utils'
import { F, Medium, Regular } from '@utils/fonts'
import type { Theme } from '@utils/types'
import React from 'react'
import { View } from 'react-native'
import WeatherLabel from './WeatherLabel'

export default function UVIndex({ uvIndex, theme }: { uvIndex: number; theme: Theme }) {
  let uviPercent = (uvIndex * 100) / 11
  uviPercent = uviPercent > 100 ? 100 : uviPercent

  return (
    <View className='aspect-square rounded-3xl bg-black/10' style={boxSize}>
      <WeatherLabel Icon={Sun03SolidIcon} color={theme.color} label='UV Index' />
      <View className='flex-1 justify-between px-5 pb-4 pt-0'>
        <Medium style={[{ fontSize: 35 }, theme.color]}>{uvIndex}</Medium>
        <View className='w-full rounded-full bg-white/10'>
          <View className='h-1.5 rounded-full bg-white/70' style={{ width: `${uviPercent}%` }} />
        </View>
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
