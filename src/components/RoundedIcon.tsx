import { Colors } from '@utils/colors'
import React from 'react'
import { View } from 'react-native'
import type { SvgProps } from 'react-native-svg'
import type { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils'

type RoundedIconProps = {
  Icon: React.FC<SvgProps>
  iconProps?: SvgProps
} & ViewProps
export default function RoundedIcon({ Icon, style, iconProps, ...props }: RoundedIconProps) {
  return (
    <View
      style={[
        {
          borderRadius: 10,
          padding: 7,
        },
        style,
      ]}
      className='bg-accent'
      {...props}
    >
      <Icon width={18} height={18} color={Colors.white} {...iconProps} />
    </View>
  )
}

export function RoundedIconSkeleton() {
  return (
    <View style={[{ borderRadius: 10, padding: 7 }]} className='bg-zinc-200 dark:bg-zinc-800'>
      <View style={{ height: 18, width: 18 }} />
    </View>
  )
}
