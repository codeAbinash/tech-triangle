import Search from '@components/Search'
import type { NavProp } from '@utils/types'
import React from 'react'
import { StatusBar, View } from 'react-native'

export default function GlobalSearch({ navigation }: NavProp) {
  return (
    <View className='h-screen items-center justify-between px-5'>
      <StatusBar barStyle='default' />
      <View className='my-4 rounded-full bg-black/10 dark:bg-white/10' style={{ width: 80, height: 5.5 }} />
      <View className='flex-1 pt-0'>
        <Search placeholder='Search for anything...' autoFocus />
      </View>
    </View>
  )
}
