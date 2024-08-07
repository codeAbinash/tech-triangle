import { PMedium, PSemiBold } from '@utils/fonts'
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
            <PMedium className='p-2 text-accent' style={{ fontSize: 15.5 }}>
              {left}
            </PMedium>
          )}
        </TouchableOpacity>
      </View>
      {Title || (
        <PSemiBold className='text-center text-zinc-800 dark:text-zinc-200' style={{ fontSize: 16 }}>
          {title}
        </PSemiBold>
      )}
      <View className='flex-1 items-end'>
        <TouchableOpacity onPress={RightOnPress || (() => navigation.goBack())} activeOpacity={0.7}>
          {Right || (
            <PMedium className='p-2 text-accent' style={{ fontSize: 15.5 }}>
              {right}
            </PMedium>
          )}
        </TouchableOpacity>
      </View>
    </View>
  )
}
