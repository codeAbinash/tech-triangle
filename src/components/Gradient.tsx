import COL from '@utils/colors'
import React from 'react'
import LinearGradient, { type LinearGradientProps } from 'react-native-linear-gradient'

type CustomLinearGradientProps = Omit<LinearGradientProps, 'colors'> & {
  colors?: Array<string>
}
export default function Gradient({ children, ...props }: CustomLinearGradientProps) {
  const colors = props.colors || [COL.g1, COL.g2]
  return (
    <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} {...props} colors={colors}>
      {children}
    </LinearGradient>
  )
}
