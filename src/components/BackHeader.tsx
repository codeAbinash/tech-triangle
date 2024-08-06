import { ArrowLeft01Icon } from '@assets/icons/icons'
import { Colors } from '@utils/colors'
import { PMedium } from '@utils/fonts'
import type { StackNav } from '@utils/types'
import React from 'react'
import { TouchableOpacity, useColorScheme, View } from 'react-native'
import { PaddingTop } from './SafePadding'

export default function BackHeader({ navigation, title, Title }: { navigation: StackNav; title?: string; Title?: React.ReactNode }) {
  const scheme = useColorScheme()
  return (
    <View className='bg-white px-5 pb-0.5 pl-1 dark:bg-zinc-950'>
      <PaddingTop />
      <View>
        {Title || (
          <View className='flex-row items-center'>
            <TouchableOpacity className='p-3' onPress={() => navigation.goBack()} activeOpacity={0.7}>
              <ArrowLeft01Icon width={26} height={26} color={scheme === 'dark' ? Colors.zinc[200] : Colors.zinc[800]} />
            </TouchableOpacity>
            <PMedium style={{ fontSize: 18 }} className='mt-0.5 text-zinc-800 dark:text-zinc-200'>
              {title}
            </PMedium>
          </View>
        )}
      </View>
    </View>
  )
}
