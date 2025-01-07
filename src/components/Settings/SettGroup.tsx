import { Colors } from '@utils/colors'
import { SemiBold } from '@utils/fonts'
import { cn } from '@utils/utils'
import React from 'react'
import { View, ViewProps } from 'react-native'

type SettGroupProps = ViewProps & {
  title?: string
  accent?: string
}
export default function SettGroup({ children, title, className, accent = Colors.accent, ...rest }: SettGroupProps) {
  return (
    <View className={cn('bg-white py-3 dark:bg-zinc-950', className)} {...rest}>
      {title && (
        <SemiBold
          className={'px-6 py-1.5 text-accent'}
          style={{ textTransform: 'none', opacity: 1, fontSize: 10, color: accent, marginBottom: 5 }}
        >
          {title}
        </SemiBold>
      )}
      <View style={{ gap: 8 }}>{children}</View>
    </View>
  )
}
