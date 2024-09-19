import { profileStore } from '@/zustand/profileStore'
import { Settings01Icon } from '@assets/icons/icons'
import { useNavigation } from '@react-navigation/native'
import { Colors } from '@utils/colors'
import { PoppinsBold, PoppinsMedium } from '@utils/fonts'
import type { StackNav } from '@utils/types'
import { getLocalDate, greetingByTime } from '@utils/utils'
import React from 'react'
import { Text, TouchableOpacity, View, useColorScheme } from 'react-native'

export default function TopArea() {
  const theme = useColorScheme()
  const navigation = useNavigation<StackNav>()
  const nickName = profileStore((state) => state.nickName)
  return (
    <View className='px-5 pr-3'>
      <View className='flex-row items-center justify-between'>
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Greeting')}>
          <View className='flex-row items-center'>
            <Text
              style={[PoppinsBold, { fontSize: 20 }]}
              className='items-center justify-center text-gray-800 dark:text-gray-200'
            >
              {nickName ? 'Hello ' + nickName : greetingByTime()}
            </Text>
            {/* <Image source={{ uri: emoji(getEmojiOfDayByTime()) }} height={23} width={23} className='ml-1' /> */}
          </View>
          <Text className='-mt-2 mb-1 text-zinc-600 dark:text-zinc-400' style={PoppinsMedium}>
            {getLocalDate()}
          </Text>
        </TouchableOpacity>
        <View className='flex-row items-center justify-center' style={{ gap: 5 }}>
          {/* <TouchableOpacity activeOpacity={0.7} className='p-2 py-2'>
            <Search02Icon height={22} width={22} color={theme === 'dark' ? Colors.zinc['300'] : Colors.zinc['700']} />
          </TouchableOpacity> */}
          <TouchableOpacity activeOpacity={0.6} className='p-2 px-2.5' onPress={() => navigation.navigate('Settings')}>
            <Settings01Icon height={22} width={22} color={theme === 'dark' ? Colors.zinc['300'] : Colors.zinc['700']} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
