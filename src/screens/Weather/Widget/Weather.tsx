import { weatherStore } from '@/zustand/weatherStore'
import { Medium } from '@utils/fonts'
import React from 'react'
import { View } from 'react-native'

export default function Weather() {
  const currentCity = weatherStore((state) => state.currentCity)
  return (
    <View className='flex-1 items-center justify-center px-5'>
      <Medium className='text-base text-zinc-700 dark:text-zinc-300'>{currentCity?.name}</Medium>
      <Medium className='text-base text-zinc-700 dark:text-zinc-300'>{currentCity?.lat}</Medium>
      <Medium className='text-base text-zinc-700 dark:text-zinc-300'>{currentCity?.lon}</Medium>
    </View>
  )
}
