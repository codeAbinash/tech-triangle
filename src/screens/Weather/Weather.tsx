import { PMedium } from '@utils/fonts'
import React from 'react'
import { View } from 'react-native'

export default function Weather() {
  return (
    <View className='flex-1 items-center justify-center px-5'>
      <PMedium className='text-base text-neutral-700 dark:text-neutral-300'>Weather Screen</PMedium>
    </View>
  )
}
