import { Medium } from '@utils/fonts'
import React from 'react'
import type { TextProps } from 'react-native'

export function TxtAcc({ children, size, style, ...rest }: TextProps & { size?: number }) {
  return (
    <Medium className='text-accent' style={[{ fontSize: size || 11.5 }, style]} {...rest}>
      {children}
    </Medium>
  )
}

export function Txt({ children, size, style, ...rest }: TextProps & { size?: number }) {
  return (
    <Medium className='text-zinc-500' style={[{ fontSize: size || 11.5 }, style]} {...rest}>
      {children}
    </Medium>
  )
}
