import { SemiBold } from '@utils/fonts'
import React from 'react'
import { View } from 'react-native'

export default function RoundNotification({ n }: { n: number }) {
  if (n === 0) return null
  return (
    <View className='items-center justify-center rounded-full bg-red-500' style={{ height: 22, width: 22 }}>
      <SemiBold className='text-xs text-white' style={{ paddingTop: 2 }} numberOfLines={1}>
        {n}
      </SemiBold>
    </View>
  )
}
