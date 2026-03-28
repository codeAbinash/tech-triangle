import ArrowLeft01Icon from '@hugeicons/ArrowLeft01Icon'
import { Colors } from '@utils/colors'
import { SemiBold } from '@utils/fonts'
import type { StackNav } from '@utils/types'
import React from 'react'
import { View, type ViewProps, useColorScheme } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Press from './Press'
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
  const card = scheme === 'dark' ? '#000000' : '#f2f2f3'
  return (
    <LinearGradient colors={[`${card}ff`, `${card}f2`, `${card}00`]} locations={[0, 0.6, 1]} className='px-4 pb-5 pt-3'>
      <PaddingTop />
      {Title ?? (
        <View className='flex-row items-center justify-between'>
          <Press
            className='items-center justify-center rounded-full bg-card'
            style={{ width: 42, height: 42 }}
            onPress={() => (onBackPress ? onBackPress() : navigation?.goBack())}
            activeOpacity={0.95}
            activeScale={0.92}
          >
            <ArrowLeft01Icon
              strokeWidth={1.65}
              size={27}
              color={scheme === 'dark' ? Colors.zinc[200] : Colors.zinc[800]}
              style={{ marginRight: 2 }}
            />
          </Press>
          <SemiBold
            style={{ fontSize: HEADING_SIZE, textAlign: 'center', paddingBottom: 5 }}
            className='text'
            numberOfLines={1}
          >
            {title}
          </SemiBold>
          {Right ?? <View style={{ height: 42, width: 42 }} />}
        </View>
      )}
    </LinearGradient>
  )
}
