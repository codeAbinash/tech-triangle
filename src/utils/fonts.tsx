import React from 'react'
import { Text, type TextProps } from 'react-native'

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
