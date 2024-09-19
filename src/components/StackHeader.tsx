import { Medium, SemiBold } from '@utils/fonts'
import type { StackNav } from '@utils/types'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'

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
export default function StackHeader({
  left,
  Left,
  right,
  Right,
  title,
  Title,
  LeftOnPress,
  RightOnPress,
  navigation,
}: CardHeaderProps) {
  return (
    <View className='w-full flex-row items-center justify-between pb-1' style={{ gap: 5 }}>
      <View className='items-start' style={{ flex: 1 }}>
        <TouchableOpacity onPress={LeftOnPress || (() => navigation.goBack())} activeOpacity={0.7}>
          {Left || (
            <Medium className='px-0.5 py-1 pb-1 text-accent' style={{ fontSize: 15.5 }} numberOfLines={1}>
              {left}
            </Medium>
          )}
        </TouchableOpacity>
      </View>
      {Title || (
        <SemiBold className='text-center text-zinc-800 dark:text-zinc-200' style={{ fontSize: 16 }}>
          {title}
        </SemiBold>
      )}
      <View className='flex-1 items-end'>
        <TouchableOpacity onPress={RightOnPress || (() => navigation.goBack())} activeOpacity={0.7}>
          {Right || (
            <Medium className='px-0.5 py-1 pb-1 text-accent' style={{ fontSize: 15.5 }}>
              {right}
            </Medium>
          )}
        </TouchableOpacity>
      </View>
    </View>
  )
}
