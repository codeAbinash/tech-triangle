import { SemiBold } from '@utils/fonts'
import { cn } from '@utils/utils'
import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

type ButtonProps = TouchableOpacityProps & { title?: string }

const Btn = React.memo(({ title, onPress, disabled, children, className, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className={cn('w-full bg-accent', className)}
      style={[{ borderRadius: 14.5, paddingVertical: 13, paddingHorizontal: 13, opacity: disabled ? 0.8 : 1 }]}
      disabled={disabled}
      {...rest}
    >
      <SemiBold style={{ fontSize: 12.5, paddingBottom: 2 }} className='text-center text-white'>
        {title || children}
      </SemiBold>
    </TouchableOpacity>
  )
})

export default Btn

export const BtnTransparent = React.memo(({ title, onPress, children, style }: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      className='w-full'
      style={[{ borderRadius: 14.5, paddingVertical: 13 }]}
    >
      <SemiBold style={[{ fontSize: 12.5 }, style]} className='text-center text-accent'>
        {title || children}
      </SemiBold>
    </TouchableOpacity>
  )
})
