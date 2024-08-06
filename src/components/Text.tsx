import { PMedium } from '@utils/fonts'
import React from 'react'
import type { TextProps } from 'react-native'

export function RightText({ children, ...rest }: TextProps) {
  return (
    <PMedium className='text-accent' style={{ fontSize: 15 }} {...rest}>
      {children}
    </PMedium>
  )
}

export function Small({ children, ...rest }: TextProps) {
  return (
    <PMedium className='text-zinc-500 dark:text-zinc-500' style={{ fontSize: 11 }} {...rest}>
      {children}
    </PMedium>
  )
}

export function Text15({ children, ...rest }: TextProps) {
  return (
    <PMedium className='text-zinc-500 dark:text-zinc-500' style={{ fontSize: 15 }} {...rest}>
      {children}
    </PMedium>
  )
}
