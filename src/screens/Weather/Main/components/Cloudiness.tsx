import { CloudSolidIcon } from '@assets/icons/icons'
import { boxSize } from '@screens/Weather/utils'
import { F, Medium, Regular } from '@utils/fonts'
import React from 'react'
import { View } from 'react-native'
import WeatherLabel from './WeatherLabel'
import type { Theme } from '@utils/types'

export default function Cloudiness({ theme, clouds }: { theme: Theme; clouds: number }) {
  return (
    <View className='aspect-square rounded-3xl bg-black/10' style={boxSize}>
      <WeatherLabel Icon={CloudSolidIcon} color={theme.color} label='Cloudiness' />
      <View className='flex-1 justify-between px-5 pb-4 pt-0'>
        <Medium style={[{ fontSize: 35 }, theme.color]}>{clouds} %</Medium>
        <Regular style={[theme.color, F.F12]}>Current cloud coverage is {clouds}%.</Regular>
      </View>
    </View>
  )
}