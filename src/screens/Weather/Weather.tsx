import { weatherStore } from '@/zustand/weatherStore'
import { PMedium } from '@utils/fonts'
import React from 'react'
import { View } from 'react-native'

export default function Weather() {
  const currentCity = weatherStore((state) => state.currentCity)
  return (
    <View className='flex-1 items-center justify-center px-5'>
      <PMedium className='text-base text-zinc-700 dark:text-zinc-300'>{currentCity?.name}</PMedium>
      <PMedium className='text-base text-zinc-700 dark:text-zinc-300'>{currentCity?.lat}</PMedium>
      <PMedium className='text-base text-zinc-700 dark:text-zinc-300'>{currentCity?.lon}</PMedium>
    </View>
  )
}
