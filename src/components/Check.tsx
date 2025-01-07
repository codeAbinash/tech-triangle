import { Tick01Icon } from '@assets/icons/icons'
import { Colors } from '@utils/colors'
import React from 'react'
import { SvgProps } from 'react-native-svg'
import { ic } from './Settings/Settings'

export type CheckIconProps = {
  checked: boolean
} & SvgProps
export default function Check({ checked, ...rest }: CheckIconProps) {
  return checked ? (
    <Tick01Icon {...ic} color={Colors.accent} {...rest} />
  ) : (
    <Tick01Icon {...ic} style={{ opacity: 0 }} />
  )
}
