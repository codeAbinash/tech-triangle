import { F, Medium } from '@utils/fonts'
import { cn } from '@utils/utils'
import React from 'react'
import { TextProps } from 'react-native'

export default function SettText({ children, className, ...rest }: TextProps) {
  const newLocal = cn('px-5 text-zinc-500 dark:text-zinc-500', className)
  return (
    <Medium className={newLocal} {...rest} style={[F.F9]}>
      {children}
    </Medium>
  )
}
