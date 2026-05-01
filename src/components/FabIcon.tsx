import { cn } from '@utils/utils'
import React from 'react'
import { TouchableOpacity, type TouchableOpacityProps } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Press from './Press'

export type FabIconProps = { Icon?: React.ReactNode } & TouchableOpacityProps

export default function FabIcon({ style, Icon, className, ...rest }: FabIconProps) {
  const bottom = useSafeAreaInsets().bottom
  return (
    <Press
      activeOpacity={0.95}
      activeScale={0.95}
      className={cn('flex-row items-center justify-center rounded-full bg-accent', className)}
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
    </Press>
  )
}
