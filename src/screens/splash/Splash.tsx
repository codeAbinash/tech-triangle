import authStore from '@/zustand/authStore'
import S from '@utils/storage'
import type { NavProp } from '@utils/types'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

export default function Splash({ navigation }: NavProp) {
  const { token } = authStore()
  useEffect(() => {
    if (!token) navigation.replace('Login')
    else navigation.replace('Home')
  }, [navigation, token])

  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-center'>Splash</Text>
    </View>
  )
}
