import { PoppinsMedium, PoppinsSemiBold } from '@utils/fonts'
import type { StackNav } from '@utils/types'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

type CardHeaderProps = {
  left?: string
  Left?: React.ReactNode
  right?: string
  Right?: React.ReactNode
  title: string
  Title?: React.ReactNode
  navigation: StackNav
  LeftOnPress?: () => void
  RightOnPress?: () => void
}
export default function StackHeader({ left, Left, right, Right, title, Title, LeftOnPress, RightOnPress, navigation }: CardHeaderProps) {
  return (
    <View className='w-full flex-row items-center justify-between'>
      <View className='items-start' style={{ flex: 1 }}>
        <TouchableOpacity onPress={LeftOnPress || (() => navigation.goBack())} activeOpacity={0.7}>
          {Left || (
            <Text className='p-2 text-accent' style={[PoppinsMedium, { fontSize: 15.5 }]}>
              {left}
            </Text>
          )}
        </TouchableOpacity>
      </View>
      {Title || (
        <Text className='text-center text-zinc-800 dark:text-zinc-200' style={[PoppinsSemiBold, { fontSize: 16 }]}>
          {title}
        </Text>
      )}
      <View className='flex-1 items-end'>
        <TouchableOpacity onPress={RightOnPress || (() => navigation.goBack())} activeOpacity={0.7}>
          {Right || (
            <Text className='p-2 text-accent' style={[PoppinsMedium, { fontSize: 15.5 }]}>
              {right}
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  )
}
