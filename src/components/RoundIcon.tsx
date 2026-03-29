import { HugeIconProps } from '@hugeicons/constants'
import { Colors } from '@utils/colors'
import React from 'react'
import { View, type ViewProps } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const GRADIENTS = {
  accent: ['#B56EF8', '#8B21F5'],
  rose: ['#F94E6E', '#C01538'],
  red: ['#FF4444', '#C01010'],
  pink: ['#EC4899', '#DB2777'],
  fuchsia: ['#D946EF', '#C026D3'],
  purple: ['#BB6EFA', '#7B20D6'],
  violet: ['#8B5CF6', '#7C3AED'],
  indigo: ['#7577F5', '#3D35D6'],
  blue: ['#5B9EFF', '#1A55D4'],
  sky: ['#18B8FF', '#0270C4'],
  cyan: ['#06B6D4', '#0891B2'],
  teal: ['#14B8A6', '#0D9488'],
  emerald: ['#10B981', '#059669'],
  green: ['#35D96A', '#15983E'],
  lime: ['#84CC16', '#65A30D'],
  yellow: ['#FFD025', '#E08C00'],
  amber: ['#FCC535', '#E07C05'],
  slate: ['#7285A0', '#3D5070'],
  orange: ['#FDA040', '#EF6318'],
} as const

export type GradientName = keyof typeof GRADIENTS

type RoundedIconProps = {
  Icon: React.FC<HugeIconProps>
  gradient?: GradientName | [string, string]
} & ViewProps

export default function RoundIcon({ Icon, gradient, style, className, ...props }: RoundedIconProps) {
  const iconElement = <Icon size={18} color={Colors.white} variant='solid-rounded' />
  const baseStyle = [{ borderRadius: 11, padding: 6.5 }, style]

  if (gradient) {
    const colors = Array.isArray(gradient) ? gradient : [...GRADIENTS[gradient]]
    return (
      <LinearGradient colors={colors} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }} style={baseStyle} {...props}>
        {iconElement}
      </LinearGradient>
    )
  }

  return (
    <View style={baseStyle} className={className || 'bg-accent'} {...props}>
      {iconElement}
    </View>
  )
}
