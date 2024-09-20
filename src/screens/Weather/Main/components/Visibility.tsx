import { EyeSolidIcon } from '@assets/icons/icons'
import { boxSize } from '@screens/Weather/utils'
import { Medium } from '@utils/fonts'
import type { Theme } from '@utils/types'
import React from 'react'
import { View } from 'react-native'
import WeatherLabel from './WeatherLabel'

type VisibilityProps = {
  theme: Theme
  visibility: string
  visibilityStatus: string
}

export default function Visibility({ theme, visibility, visibilityStatus }: VisibilityProps) {
  return (
    <View className='aspect-square rounded-3xl bg-black/10' style={boxSize}>
      <WeatherLabel Icon={EyeSolidIcon} color={theme.color} label='Visibility' />
      <View className='flex-1 justify-between px-5 pb-4 pt-0'>
        <Medium style={[{ fontSize: 35 }, theme.color]}>{visibility}</Medium>
        <Medium className='text-sm' style={theme.color}>
          {visibilityStatus}
        </Medium>
      </View>
    </View>
  )
}

export function getVisibilityStatusString(distance: number): string {
  if (distance >= 10000) return "It's perfectly clear. Visibility is excellent."
  if (distance >= 5000) return 'Visibility is good, clear conditions ahead.'
  if (distance >= 1000) return 'Visibility is moderate, some haze may be present.'
  if (distance >= 500) return 'Visibility is poor, expect mist or fog.'
  return 'Visibility is very poor, dense fog or heavy mist is likely.'
}
