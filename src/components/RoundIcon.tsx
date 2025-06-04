import { HugeIconProps } from '@hugeicons/constants'
import { Colors } from '@utils/colors'
import React from 'react'
import { View } from 'react-native'
import type { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils'

type RoundedIconProps = {
  Icon: React.FC<HugeIconProps>
} & ViewProps
export default function RoundIcon({ Icon, style, ...props }: RoundedIconProps) {
  return (
    <View style={[{ borderRadius: 10, padding: 7 }, style]} className='bg-accent' {...props}>
      <Icon size={18} color={Colors.white} variant='solid-rounded' />
    </View>
  )
}
