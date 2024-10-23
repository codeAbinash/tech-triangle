import { View, Text } from 'react-native'
import React from 'react'
import { SettGroup, SettOption, SettText, SettWrapper } from '@components/Settings'
import type { NavProp, StackNav } from '@utils/types'
import type { RouteProp } from '@react-navigation/native'
import Btn from '@components/Button'
import { getDate } from './utils'
import { Gap, Gap12 } from '@components/Gap'

type ParamList = {
  Device: DeviceParamList
}

export type DeviceParamList = {
  device: {
    time: number
    device: string
    id: string
  } | null
}

export default function Device({ navigation, route }: { navigation: StackNav; route: RouteProp<ParamList, 'Device'> }) {
  const device = route.params.device
  return (
    <SettWrapper title='Device' navigation={navigation}>
      <Gap gap={15}>
        <SettText className='mt-3'>
          If you see a device that you don't recognize, you can remove it from the list. Just click on the 'Remove
          Device' button.
        </SettText>
        <SettGroup title='Device'>
          <SettOption title={device?.device || 'Unknown'}></SettOption>
        </SettGroup>
        <SettGroup title='Logged In'>
          <SettOption title={getDate(device?.time)}></SettOption>
        </SettGroup>
        <SettGroup title='Device ID'>
          <SettOption title={device?.id || 'Unknown'}></SettOption>
        </SettGroup>
        <SettText>
          Removing a device will log you out from the device. You will need to log in again to use the app on that
          device.
        </SettText>
        <View className='px-5'>
          <Btn title='Remove Device' onPress={() => {}} className='bg-red-500' />
        </View>
      </Gap>
    </SettWrapper>
  )
}
