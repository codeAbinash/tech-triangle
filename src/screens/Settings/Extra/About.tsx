import { APP_VERSION } from '@utils/data'
import { SemiBold } from '@utils/fonts'
import React from 'react'
import { Image, View } from 'react-native'
import AppIcon from '@assets/icons/icon.svg'

export default function About() {
  return (
    <View className='flex-1 items-center justify-center'>
      <View className='bg-appIconBg my-5 p-1' style={{ borderRadius: 35 }}>
        <AppIcon width={150} height={150} />
      </View>
      <SemiBold className='text-base text-black dark:text-white'>Tech Triangle</SemiBold>
      <SemiBold className='text-black/50 text-xs dark:text-white'>v{APP_VERSION}</SemiBold>
    </View>
  )
}
