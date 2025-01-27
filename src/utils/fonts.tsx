import { StyleSheet, Text, type TextProps } from 'react-native'
import Animated from 'react-native-reanimated'
import { layout } from './utils'

export const REGULAR = {
  fontFamily: 'JosefinSans-Regular',
}
export const MEDIUM = {
  fontFamily: 'JosefinSans-Medium',
}
export const SEMIBOLD = {
  fontFamily: 'JosefinSans-SemiBold',
}
export const BOLD = {
  fontFamily: 'JosefinSans-Bold',
}
export const LIGHT = {
  fontFamily: 'JosefinSans-Light',
}

export function Medium({ children, style, ...props }: TextProps) {
  return (
    <Animated.Text style={[MEDIUM, style]} {...props} layout={layout}>
      {children}
    </Animated.Text>
  )
}

export function Regular({ children, style, ...props }: TextProps) {
  return (
    <Text style={[REGULAR, style]} {...props}>
      {children}
    </Text>
  )
}

export function SemiBold({ children, style, ...props }: TextProps) {
  return (
    <Text style={[SEMIBOLD, style]} {...props}>
      {children}
    </Text>
  )
}

export function Bold({ children, style, ...props }: TextProps) {
  return (
    <Text style={[BOLD, style]} {...props}>
      {children}
    </Text>
  )
}

export function Light({ children, style, ...props }: TextProps) {
  return (
    <Text style={[LIGHT, style]} {...props}>
      {children}
    </Text>
  )
}

export const F = StyleSheet.create({
  F9: {
    fontSize: 9,
    lineHeight: 12,
  },
  F9_5: {
    fontSize: 9.5,
    lineHeight: 12,
  },
  F10: {
    fontSize: 10,
  },
  F10_5: {
    fontSize: 10.5,
  },
  F11: {
    fontSize: 11,
  },
  F11_5: {
    fontSize: 11.5,
  },
  F12: {
    fontSize: 12,
    lineHeight: 18,
  },
  F12_5: {
    fontSize: 12.5,
    lineHeight: 18,
  },
  F13: {
    fontSize: 13,
  },
})
