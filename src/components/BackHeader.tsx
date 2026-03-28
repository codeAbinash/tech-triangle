import ArrowLeft01Icon from '@hugeicons/ArrowLeft01Icon'
import { Colors } from '@utils/colors'
import { SemiBold } from '@utils/fonts'
import type { StackNav } from '@utils/types'
import React from 'react'
import { TouchableOpacity, View, type ViewProps, useColorScheme } from 'react-native'
import { PaddingTop } from './SafePadding'
import { HEADING_SIZE } from './values'

type BackHeaderProps = ViewProps & {
  navigation?: StackNav
  title?: string
  Title?: React.ReactNode
  Right?: React.ReactNode
  onBackPress?: () => void
}

export default function BackHeader({ navigation, Right, title, Title, onBackPress }: BackHeaderProps) {
  const scheme = useColorScheme()
  return (
    <View className='bg-card px-5 pr-6 pb-0.5 pl-1'>
      <PaddingTop />
      <View>
        {Title || (
          <View className='flex-row items-center' style={{ gap: 8 }}>
            <TouchableOpacity
              className='p-3 pr-0.5'
              onPress={() => (onBackPress ? onBackPress() : navigation && navigation.goBack())}
              activeOpacity={0.7}
            >
              <ArrowLeft01Icon
                strokeWidth={1.75}
                size={27}
                color={scheme === 'dark' ? Colors.zinc[200] : Colors.zinc[800]}
              />
            </TouchableOpacity>
            <SemiBold
              style={{ fontSize: HEADING_SIZE, flex: 1, paddingBottom: 5 }}
              className='mt-0.5 text-zinc-800 dark:text-zinc-200'
              numberOfLines={1}
            >
              {title}
            </SemiBold>
            {Right}
          </View>
        )}
      </View>
    </View>
  )
}
