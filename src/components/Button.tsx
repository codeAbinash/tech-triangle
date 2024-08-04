import { PoppinsMedium } from '@utils/fonts'
import React from 'react'
import { Text } from 'react-native'
import { TouchableOpacity, type TouchableOpacityProps } from 'react-native-gesture-handler'

type ButtonProps = TouchableOpacityProps & { title?: string; Content?: React.ReactNode }

export default function Btn({ title, onPress, Content, style }: ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} className='w-full bg-accent' style={[{ borderRadius: 14, paddingVertical: 13 }, style]}>
      <Text style={[PoppinsMedium, { fontSize: 15 }]} className='text-center text-white'>
        {title || Content}
      </Text>
    </TouchableOpacity>
  )
}

export function BtnTransparent({ title, onPress, Content, style }: ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} className='w-full' style={[{ borderRadius: 14, paddingVertical: 13 }]}>
      <Text style={[PoppinsMedium, { fontSize: 15 }, style]} className='text-center text-accent'>
        {title || Content}
      </Text>
    </TouchableOpacity>
  )
}
