import popupStore from '@/zustand/popupStore'
import Btn from '@components/Button'
import { Gap } from '@components/Gap'
import SettGroup from '@components/Settings/SettGroup'
import { SettOption } from '@components/Settings/SettOption'
import SettText from '@components/Settings/SettText'
import SettWrapper from '@components/Settings/SettWrapper'
import { queryClient } from '@query/index'
import type { RouteProp } from '@react-navigation/native'
import { useMutation } from '@tanstack/react-query'
import { client } from '@utils/client'
import { F, Medium } from '@utils/fonts'
import { getRelativeTime } from '@utils/timeFormat'
import type { StackNav } from '@utils/types'
import React, { useEffect, useMemo } from 'react'
import { ToastAndroid, View } from 'react-native'
import type { Device } from './types'
import { getDate, getDeviceIcon, getOSIcon } from './utils'

type ParamList = {
  Device: DeviceParamList
}

export type DeviceParamList = {
  device: Device
}

export default function Device({ navigation, route }: { navigation: StackNav; route: RouteProp<ParamList, 'Device'> }) {
  const device = route.params.device
  const alert = popupStore((store) => store.alert)

  useEffect(() => {
    console.log(route.params.device?.isSelf)
  }, [route.params.device?.isSelf])

  // const client = getClient()
  const { mutate, isPending, data } = useMutation({
    mutationKey: ['removeDevice', device?.id],
    mutationFn: async () =>
      await (await client.api.devices.delete.$post({ form: { device: device?.id || '' } })).json(),
  })
  const relativeTime = useMemo(() => getRelativeTime(device?.time), [device?.time])

  const DeviceIcon = useMemo(() => getDeviceIcon(device?.os, device?.name), [device?.os, device?.name])
  const OsIcon = useMemo(() => getOSIcon(device?.os), [device?.os])

  async function onSuccess() {
    if (data) {
      queryClient.invalidateQueries({ queryKey: ['devices'] })
      if (data.status) {
        ToastAndroid.show('Device removed successfully', ToastAndroid.SHORT)
        navigation.goBack()
      } else {
        alert('Error', data.message)
      }
    }
  }

  useEffect(() => {
    onSuccess()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  function handleRemove() {
    if (route.params.device?.isSelf) return navigation.navigate('Logout')
    alert('Remove Device', 'Are you sure you want to remove this device?', [
      { text: 'Cancel' },
      { text: 'Remove', onPress: () => mutate() },
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
          <SettText className='mt-3'>If you cannot identify this device, you can remove it from the list.</SettText>
          <SettGroup title='Device' className='pb-4'>
            <SettOption title={device?.name || 'Unknown'} Icon={DeviceIcon}></SettOption>
          </SettGroup>
          <SettGroup title='Operating System' className='pb-4'>
            <SettOption title={device?.os || 'Unknown'} Icon={OsIcon}></SettOption>
          </SettGroup>
          <SettGroup title='Logged In'>
            <SettOption title={relativeTime}>
              <Medium className='text-zinc-600 dark:text-zinc-400' style={F.F10_5} numberOfLines={1}>
                {getDate(device?.time)}
              </Medium>
            </SettOption>
          </SettGroup>
          <SettGroup title='Device ID'>
            <SettOption title={device?.id || 'Unknown'}></SettOption>
          </SettGroup>
          <SettText>
            Removing a device will log you out from the device. You will need to log in again to use the app on that
            device.
          </SettText>
          <View className='px-6'>
            <Btn
              title={isPending ? 'Removing Device...' : 'Remove Device'}
              onPress={handleRemove}
              className='bg-red-500'
              disabled={isPending}
            />
          </View>
        </Gap>
      </SettWrapper>
    </>
  )
}
