import React from 'react'
import { StatusBar, type ColorSchemeName } from 'react-native'

export function DefaultTransparent() {
  return <StatusBar barStyle={'default'} backgroundColor={'transparent'} />
}

export function DarkContentTransparentStatusBar() {
  return <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} />
}

export function AutoStatusBar({ scheme }: { scheme: ColorSchemeName }) {
  return <StatusBar barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'} backgroundColor={'transparent'} />
}

// export function SecondaryBgStatusBar() {
//   return <StatusBar barStyle={'dark-content'} backgroundColor={colors.bgSecondary} />
// }
