import Btn from '@components/Button'
import { Gap } from '@components/Gap'
import { SettGroup, SettOption, SettText, SettWrapper } from '@components/Settings'
import { queryClient } from '@query/index'
import type { RouteProp } from '@react-navigation/native'
import { useMutation } from '@tanstack/react-query'
import { client } from '@utils/client'
import type { StackNav } from '@utils/types'
import React, { useEffect } from 'react'
import { Alert, ToastAndroid, View } from 'react-native'
import { getDate } from './utils'

type ParamList = {
  Device: DeviceParamList
}

export type DeviceParamList = {
  device: {
    time: number
    name: string
    id: string
  } | null
}

export default function Device({ navigation, route }: { navigation: StackNav; route: RouteProp<ParamList, 'Device'> }) {
  const device = route.params.device
  // const client = getClient()
  const { mutate, isPending, data } = useMutation({
    mutationKey: ['removeDevice', device?.id],
    mutationFn: async () =>
      await (await client.api.devices.delete.$post({ form: { device: device?.id || '' } })).json(),
  })

  // const { mutate: mutateDeviceList } = useMutation({
  //   mutationKey: ['devices'],
  //   mutationFn: async () => await (await client.api.devices.$get()).json(),
  // })

  async function onSuccess() {
    if (data) {
      queryClient.invalidateQueries({ queryKey: ['devices'] })
      if (data.status) {
        ToastAndroid.show('Device removed successfully', ToastAndroid.SHORT)
        navigation.goBack()
      } else {
        Alert.alert('Error', data.message)
      }
    }
  }

  useEffect(() => {
    onSuccess()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  function handelRemove() {
    Alert.alert('Remove Device', 'Are you sure you want to remove this device?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Remove', onPress: () => mutate(), style: 'destructive' },
    ])
  }

  return (
    <>
      {/* <View className='absolute left-0 top-0 z-50 flex h-full w-full flex-1 items-center justify-center bg-black/20'>
        <View className='w-4/5 rounded-xl bg-white'>
          <Medium className='mt-10 text-center text-2xl text-white'>Device</Medium>
        </View>
      </View> */}
      <SettWrapper title={device?.name || 'Unknown Device'} navigation={navigation}>
        <Gap gap={15}>
          <SettText className='mt-3'>
            If you see a device that you don't recognize, you can remove it from the list. Just click on the 'Remove
            Device' button.
          </SettText>
          <SettGroup title='Device'>
            <SettOption title={device?.name || 'Unknown'}></SettOption>
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
            <Btn
              title={isPending ? 'Removing Device...' : 'Remove Device'}
              onPress={handelRemove}
              className='bg-red-500'
              disabled={isPending}
            />
          </View>
        </Gap>
      </SettWrapper>
    </>
  )
}
