import React from 'react'
import { StyleSheet, Text, type TextProps } from 'react-native'

export const PoppinsRegular = {
  fontFamily: 'Poppins-Regular',
}
export const PoppinsMedium = {
  fontFamily: 'Poppins-Medium',
}
export const PoppinsSemiBold = {
  fontFamily: 'Poppins-SemiBold',
}
export const PoppinsBold = {
  fontFamily: 'Poppins-Bold',
}
export const PoppinsLight = {
  fontFamily: 'Poppins-Light',
}

export function Medium({ children, style, ...props }: TextProps) {
  return (
    <Text style={[PoppinsMedium, style]} {...props}>
      {children}
    </Text>
  )
}

export function Regular({ children, style, ...props }: TextProps) {
  return (
    <Text style={[PoppinsRegular, style]} {...props}>
      {children}
    </Text>
  )
}

export function SemiBold({ children, style, ...props }: TextProps) {
  return (
    <Text style={[PoppinsSemiBold, style]} {...props}>
      {children}
    </Text>
  )
}

export function Bold({ children, style, ...props }: TextProps) {
  return (
    <Text style={[PoppinsBold, style]} {...props}>
      {children}
    </Text>
  )
}

export function Light({ children, style, ...props }: TextProps) {
  return (
    <Text style={[PoppinsLight, style]} {...props}>
      {children}
    </Text>
  )
}

export const F = StyleSheet.create({
  F9: {
    fontSize: 9,
  },
  F9_5: {
    fontSize: 9.5,
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
  },
  F12_5: {
    fontSize: 12.5,
  },
  F13: {
    fontSize: 13,
  },
})
