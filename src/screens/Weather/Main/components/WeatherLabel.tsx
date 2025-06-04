import { HugeIconProps } from '@hugeicons/constants'
import { F, Medium } from '@utils/fonts'
import React from 'react'
import { View, type ViewProps } from 'react-native'

type WeatherHeaderProps = {
  color: {
    color: string
  }
  label?: string
  Icon: React.FC<HugeIconProps>
}

export default function WeatherLabel({ color, label: title, Icon }: WeatherHeaderProps) {
  return (
    <View>
      <View className='flex-row gap-2 px-4 py-3 pb-0.5'>
        <Icon size={15} color={color.color} style={{ opacity: 0.6 }} />
        <Medium style={[color, F.F10_5]} className='uppercase opacity-60'>
          {title}
        </Medium>
      </View>
    </View>
  )
}

export function Underline({ style, ...props }: ViewProps) {
  return (
    <View className='px-4'>
      <View className='my-0.5 w-full bg-white/5' style={[{ height: 1 }, style]} {...props}></View>
    </View>
  )
}
