import Btn, { BtnTransparent } from '@components/Button'
import { PaddingBottom } from '@components/SafePadding'
import StackHeader from '@components/StackHeader'
import type { RouteProp } from '@react-navigation/native'
import type { StackNav } from '@utils/types'
import React from 'react'
import { StatusBar, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import UpdateAvailableUI from './Components/UpdateAvailableUI'

type ParamList = {
  Update: UpdateParamList
}

export type UpdateParamList = {
  version: string
  size: string
  whatsNew: Array<string>
}

export default function Update({ navigation, route }: { navigation: StackNav; route: RouteProp<ParamList, 'Update'> }) {
  const version = route.params.version
  const size = route.params.size
  const whatsNew = route.params.whatsNew

  return (
    <View className='flex-1 p-5'>
      <View>
        <StatusBar barStyle='default' />
        <StackHeader title='App Update' navigation={navigation} left='Cancel' right='Done' />
      </View>
      <ScrollView
        className='mt-3 flex-1'
        contentContainerStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
      >
        <UpdateAvailableUI version={route.params.version} size={route.params.size} whatsNew={route.params.whatsNew} />
      </ScrollView>
      <View className='mt-5 gap-y-2 px-5'>
        <Btn
          title='Download Update'
          onPress={() => navigation.replace('ForceUpdate', { shouldGoBack: true, version, size, whatsNew })}
        />
        <BtnTransparent title='Not Now' onPress={navigation.goBack} />
        <PaddingBottom />
      </View>
    </View>
  )
}
