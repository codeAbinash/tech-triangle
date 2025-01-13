import BackHeader from '@components/BackHeader'
import { Gap20 } from '@components/Gap'
import KeyboardAvoid from '@components/KeyboardAvoid'
import { PaddingBottom } from '@components/SafePadding'
import { AutoStatusBar } from '@components/StatusBar'
import { StackNav } from '@utils/types'
import React from 'react'
import { ScrollViewProps, useColorScheme, View } from 'react-native'

type SettWrapperProps = ScrollViewProps & {
  Header?: React.ReactNode
  title?: string
  navigation?: StackNav
}
export default function SettWrapper({ Header, title, navigation, children, ...rest }: SettWrapperProps) {
  const scheme = useColorScheme()
  return (
    <View className='bg flex-1'>
      <AutoStatusBar scheme={scheme} />
      {Header ? Header : <BackHeader title={title || 'Test Title'} navigation={navigation} />}
      <KeyboardAvoid
        contentContainerStyle={{ paddingBottom: 20 }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        {...rest}
      >
        <Gap20>{children}</Gap20>
        <PaddingBottom />
      </KeyboardAvoid>
    </View>
  )
}
