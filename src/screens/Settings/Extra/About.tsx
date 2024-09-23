import { APP_VERSION } from '@utils/data'
import { SemiBold } from '@utils/fonts'
import React from 'react'
import { Image, View } from 'react-native'
import AppIcon from '@assets/icons/icon.svg'

export default function About() {
  return (
    <View className='flex-1 items-center justify-center'>
      <AppIconUI />
      <SemiBold className='text-base text-black dark:text-white'>Tech Triangle</SemiBold>
      <SemiBold className='text-xs text-black/50 dark:text-white'>v{APP_VERSION}</SemiBold>
    </View>
  )
}

export function AppIconUI() {
  return (
    <View className='flex-row items-center justify-center'>
      <View className='my-5 bg-appIconBg p-1' style={{ borderRadius: 28 }}>
        <AppIcon width={100} height={100} />
      </View>
    </View>
  )
}
