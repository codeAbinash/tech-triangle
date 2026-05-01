import { HugeIconProps } from '@hugeicons/constants'
import { Colors } from '@utils/colors'
import { APP_GRADIENTS, type GradientName } from '@utils/gradients'
import React from 'react'
import { View, type ViewProps } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

type RoundedIconProps = {
  Icon: React.FC<HugeIconProps>
  gradient?: GradientName | [string, string]
} & ViewProps

export default function RoundIcon({ Icon, gradient, style, className, ...props }: RoundedIconProps) {
  const iconElement = <Icon size={18} color={Colors.white} variant='solid-rounded' />
  const baseStyle = [{ borderRadius: 11, padding: 6.5 }, style]

  if (gradient) {
    const colors = Array.isArray(gradient) ? gradient : [...APP_GRADIENTS[gradient]]
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
