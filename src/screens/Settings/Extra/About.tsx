import { APP_VERSION } from '@utils/data'
import { SemiBold } from '@utils/fonts'
import React from 'react'
import { View } from 'react-native'

export default function About() {
  return (
    <View className='flex-1 items-center justify-center'>
      <SemiBold className='text-xl text-black dark:text-white'>Version</SemiBold>
      <SemiBold className='text-base text-black/50 dark:text-white'>v{APP_VERSION}</SemiBold>
    </View>
  )
}
