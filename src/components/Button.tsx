import { PMedium } from '@utils/fonts'
import React from 'react'
import { TouchableOpacity, type TouchableOpacityProps } from 'react-native-gesture-handler'

type ButtonProps = TouchableOpacityProps & { title?: string; Content?: React.ReactNode }

export default function Btn({ title, onPress, disabled, Content, style, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className='w-full bg-accent'
      style={[{ borderRadius: 14, paddingVertical: 13, opacity: disabled ? 0.8 : 1 }, style]}
      disabled={disabled}
      {...rest}
    >
      <PMedium style={{ fontSize: 15 }} className='text-center text-white'>
        {title || Content}
      </PMedium>
    </TouchableOpacity>
  )
}

export function BtnTransparent({ title, onPress, Content, style }: ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} className='w-full' style={[{ borderRadius: 14, paddingVertical: 13 }]}>
      <PMedium style={[{ fontSize: 15 }, style]} className='text-center text-accent'>
        {title || Content}
      </PMedium>
    </TouchableOpacity>
  )
}
