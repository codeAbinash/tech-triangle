import { PaddingBottom, PaddingTop } from '@components/SafePadding'
import { Medium } from '@utils/fonts'
import React from 'react'
import { StatusBar, View } from 'react-native'

export default function Story() {
  return (
    <View className='flex-1 items-center justify-center bg-black'>
      <StatusBar barStyle='light-content' />
      <View className='flex w-screen flex-1 items-center justify-center rounded-xl bg-gray-800 px-10'>
        <PaddingTop />
        <Medium className='text-center text-xl text-white'>
          This is a simple story screen. This feature is not yet implemented. It will be available in the future. Stay
          tuned!
        </Medium>
        <PaddingBottom />
      </View>
    </View>
  )
}
