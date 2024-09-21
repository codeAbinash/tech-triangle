import Search from '@components/Search'
import StackHeader from '@components/StackHeader'
import type { NavProp } from '@utils/types'
import React from 'react'
import { StatusBar, View } from 'react-native'

export default function GlobalSearch({ navigation }: NavProp) {
  return (
    <View className='h-screen items-center justify-between px-5 pt-5 dark:bg-zinc-950'>
      <StatusBar barStyle='default' />
      {/* <View className='my-4 rounded-full bg-black/10 dark:bg-white/10' style={{ width: 80, height: 5.5 }} /> */}
      <StackHeader title='Search Anything' navigation={navigation} left='Cancel' right='Done' />
      <View className='flex-1 pt-2'>
        <Search placeholder='Search for anything...' autoFocus />
      </View>
    </View>
  )
}
