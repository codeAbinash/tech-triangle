import { ArrowLeft01Icon } from '@assets/icons/icons'
import { Colors } from '@utils/colors'
import { Medium } from '@utils/fonts'
import type { StackNav } from '@utils/types'
import React from 'react'
import { TouchableOpacity, useColorScheme, View, type ViewProps } from 'react-native'
import { PaddingTop } from './SafePadding'

type BackHeaderProps = ViewProps & {
  navigation?: StackNav
  title?: string
  Title?: React.ReactNode
  Right?: React.ReactNode
}

export default function BackHeader({ navigation, Right, title, Title }: BackHeaderProps) {
  const scheme = useColorScheme()
  return (
    <View className='bg-white px-5 pb-0.5 pl-1 pr-6 dark:bg-zinc-950'>
      <PaddingTop />
      <View>
        {Title || (
          <View className='flex-row items-center' style={{ gap: 10 }}>
            <TouchableOpacity
              className='p-3 pr-0.5'
              onPress={() => navigation && navigation.goBack()}
              activeOpacity={0.7}
            >
              <ArrowLeft01Icon width={26} height={26} color={scheme === 'dark' ? Colors.zinc[200] : Colors.zinc[800]} />
            </TouchableOpacity>
            <Medium
              style={{ fontSize: 14.3, flex: 1 }}
              className='mt-0.5 text-zinc-800 dark:text-zinc-200'
              numberOfLines={1}
            >
              {title}
            </Medium>
            {Right}
          </View>
        )}
      </View>
    </View>
  )
}
