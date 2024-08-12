import { Medium } from '@utils/fonts'
import React from 'react'
import type { TextProps } from 'react-native'

export function TxtAcc({ children, size, ...rest }: TextProps & { size?: number }) {
  return (
    <Medium className='text-accent' style={{ fontSize: size || 15 }} {...rest}>
      {children}
    </Medium>
  )
}

export function Txt({ children, size, ...rest }: TextProps & { size?: number }) {
  return (
    <Medium className='text-zinc-500' style={{ fontSize: size || 14 }} {...rest}>
      {children}
    </Medium>
  )
}