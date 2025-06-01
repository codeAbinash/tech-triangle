import { SemiBold } from '@utils/fonts'
import { cn } from '@utils/utils'
import React from 'react'
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import RightArrow from './RightArrow'

type SettOptionProps = TouchableOpacityProps & {
  title: string
  Icon?: React.ReactNode
  Right?: React.ReactNode
  arrow?: boolean
  numberOfLines?: number
  placeholder?: string
}

export function SettOption({
  title,
  children,
  onPress,
  Icon,
  Right,
  className,
  arrow,
  numberOfLines,
  placeholder,
  ...rest
}: SettOptionProps) {
  return (
    <TouchableOpacity
      className={cn('flex-row items-center justify-between px-6', className)}
      onPress={onPress}
      activeOpacity={0.7}
      style={[{ gap: 10 }]}
      {...rest}
    >
      <View className='flex-row items-center justify-center' style={{ gap: 22, flexShrink: 1 }}>
        {Icon}
        <View className='p-2.5 px-0' style={{ flexShrink: 1 }}>
          <SemiBold
            className='text-left text-zinc-800 dark:text-zinc-200'
            style={[{ fontSize: 12, paddingBottom: 2 }, !title ? { opacity: 0.5 } : {}]}
            numberOfLines={numberOfLines || 0}
          >
            {title || placeholder}
          </SemiBold>
          {children}
        </View>
      </View>
      <View className='flex-row items-center' style={{ gap: 5, flexShrink: 1 }}>
        {Right}
        {arrow && <RightArrow />}
      </View>
    </TouchableOpacity>
  )
}
