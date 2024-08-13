import type { StackNav } from '@utils/types'
import React from 'react'
import { TouchableOpacity, type TouchableOpacityProps } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export type FabIconProps = { Icon?: React.ReactNode } & TouchableOpacityProps

export default function FabIcon({ style, Icon, ...rest }: FabIconProps) {
  const bottom = useSafeAreaInsets().bottom
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className='flex-row items-center justify-center rounded-full bg-accent'
      style={[
        {
          marginBottom: bottom + 5,
          marginRight: 5,
          position: 'absolute',
          right: 20,
          bottom: 20,
          height: 58,
          width: 58,
          shadowColor: '#000',
          shadowOffset: {
            width: 2,
            height: 2,
          },
          elevation: 6,
          shadowOpacity: 0.5,
        },
        style,
      ]}
      {...rest}
    >
      {Icon}
    </TouchableOpacity>
  )
}
