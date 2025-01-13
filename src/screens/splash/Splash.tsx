import authStore from '@/zustand/authStore'
import { navigationStore } from '@/zustand/navigationStore'
import type { NavProp } from '@utils/types'
import { useEffect } from 'react'
import { Text, View } from 'react-native'

export default function Splash({ navigation }: NavProp) {
  const { token } = authStore()
  const setNavigation = navigationStore((state) => state.setNavigation)

  useEffect(() => {
    setNavigation(navigation)
  }, [navigation, setNavigation])

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
