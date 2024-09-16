import { Medium } from '@utils/fonts'
import React from 'react'
import { View } from 'react-native'
import type { SvgProps } from 'react-native-svg'

type WeatherHeaderProps = {
  color: {
    color: string
  }
  label?: string
  Icon: React.FC<SvgProps>
}

export default function WeatherLabel({ color, label: title, Icon }: WeatherHeaderProps) {
  return (
    <View>
      <View className='flex-row gap-2 px-4 py-3 pb-0.5'>
        <Icon width={15} height={15} color={color.color} style={{ opacity: 0.5 }} />
        <Medium style={color} className='uppercase opacity-50'>
          {title}
        </Medium>
      </View>
      <View className='px-4'>
        <View className='my-0.5 w-full bg-white/5' style={{ height: 1 }}></View>
      </View>
    </View>
  )
}
