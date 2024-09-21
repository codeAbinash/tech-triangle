import { Medium } from '@utils/fonts'
import React from 'react'
import { TouchableOpacity, type TouchableOpacityProps } from 'react-native-gesture-handler'

type ButtonProps = TouchableOpacityProps & { title?: string; Content?: React.ReactNode }

export default function Btn({ title, onPress, disabled, children, style, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className='w-full bg-accent'
      style={[{ borderRadius: 14.5, paddingVertical: 13, paddingHorizontal: 13, opacity: disabled ? 0.8 : 1 }, style]}
      disabled={disabled}
      {...rest}
    >
      <Medium style={{ fontSize: 12.2 }} className='text-center text-white'>
        {title || children}
      </Medium>
    </TouchableOpacity>
  )
}

export function BtnTransparent({ title, onPress, children, style }: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      className='w-full'
      style={[{ borderRadius: 14.5, paddingVertical: 13 }]}
    >
      <Medium style={[{ fontSize: 12.2 }, style]} className='text-center text-accent'>
        {title || children}
      </Medium>
    </TouchableOpacity>
  )
}
