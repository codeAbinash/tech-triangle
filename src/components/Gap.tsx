import React from 'react'
import { type ViewProps, View } from 'react-native'

export function Gap12({ children, style, ...rest }: ViewProps) {
  return (
    <View style={[{ gap: 12 }, style]} {...rest}>
      {children}
    </View>
  )
}

export function Gap20({ children, style, ...rest }: ViewProps) {
  return (
    <View style={[{ gap: 20 }, style]} {...rest}>
      {children}
    </View>
  )
}

export function Gap({ children, gap = 20, style, ...rest }: { children?: React.ReactNode; gap?: number } & ViewProps) {
  return (
    <View style={[{ gap: gap }, style]} {...rest}>
      {children}
    </View>
  )
}
