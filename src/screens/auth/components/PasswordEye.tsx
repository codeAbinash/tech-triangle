import { ViewIcon, ViewOffSlashIcon } from '@assets/icons/icons'
import { ic } from '@components/Settings'
import React from 'react'
import { TouchableOpacity } from 'react-native'

export function PasswordEye({
  isVisible,
  setIsVisible,
}: {
  isVisible: boolean
  setIsVisible: (visible: boolean) => void
}) {
  return (
    <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
      {isVisible ? <ViewIcon {...ic} width={24} height={24} /> : <ViewOffSlashIcon {...ic} width={24} height={24} />}
    </TouchableOpacity>
  )
}
