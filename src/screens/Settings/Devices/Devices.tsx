import { WavingHand02SolidIcon } from '@assets/icons/icons'
import { Gap12 } from '@components/Gap'
import RoundedIcon from '@components/RoundedIcon'
import { SettGroup, SettOption, SettText, SettWrapper } from '@components/Settings'
import { useMutation, useQuery } from '@tanstack/react-query'
import { client } from '@utils/client'
import { Colors } from '@utils/colors'
import { F, Medium } from '@utils/fonts'
import { getRelativeTime } from '@utils/timeFormat'
import type { NavProp, StackNav } from '@utils/types'
import React, { useEffect, useMemo } from 'react'
import { ActivityIndicator, Alert, ToastAndroid } from 'react-native'
import type { Device } from './types'
import { getDeviceIcon } from './utils'

export default function Devices({ navigation }: NavProp) {
  const { data, isPending } = useQuery({
    queryKey: ['devices'],
    queryFn: async () => await (await client.api.devices.$get()).json(),
  })

  useEffect(() => {
    console.log(JSON.stringify(data, null, 2))
  }, [data])

  const { mutate, isPending: isRemoving } = useMutation({
    mutationKey: ['removeAllOtherDevices'],
    mutationFn: async () => await (await client.api.devices.delete.allOther.$post()).json(),
    onSuccess: (d) => {
      if (d) {
        ToastAndroid.show('Devices removed successfully', ToastAndroid.SHORT)
        navigation.goBack()
      }
    },
  })

  function handelRemove() {
    Alert.alert('Remove Device', 'Are you sure you want to remove all other devices?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Remove', onPress: () => mutate(), style: 'destructive' },
    ])
  }

  return (
    <SettWrapper title='Devices' navigation={navigation}>
      <Gap12>
        <SettText className='mt-3'>You can remove unwanted devices from the list.</SettText>
        <SettGroup title='This Device'>
          {isPending && <ActivityIndicator size='large' color={Colors.accent} className='mb-10 mt-5' />}
          {data && data.data && <Device navigation={navigation} device={data.data.currentDevice} isSelf={true} />}
        </SettGroup>
        {data && data.data && data.data.devices.length > 0 && (
          <SettGroup>
            <SettOption
              disabled={isRemoving}
              onPress={handelRemove}
              className='text-red-500'
              title={isRemoving ? 'Removing...' : 'Remove All Other Devices'}
              Icon={<RoundedIcon Icon={WavingHand02SolidIcon} className='bg-red-500' />}
            />
          </SettGroup>
        )}

        {data && data.data && data.data.devices.length > 0 && (
          <SettGroup title='Other Devices'>
            {data.data.devices.map((device, i) => (
              <Device key={i} navigation={navigation} device={device} isSelf />
            ))}
          </SettGroup>
        )}
        <SettText className='mt-2'>
          Click on a device to view more details. You can remove a device by clicking on the remove button.
        </SettText>
      </Gap12>
    </SettWrapper>
  )
}

function Device({ navigation, device, isSelf }: { navigation: StackNav; device: Device; isSelf: boolean }) {
  const Icon = useMemo(() => getDeviceIcon(device?.os, device?.name), [device?.os, device?.name])
  const { id, time, os, name } = device || {}

  const relativeTime = useMemo(() => getRelativeTime(time), [time])
  return (
    <SettOption
      onPress={() =>
        navigation.navigate('Device', {
          device: {
            id: id || 'Unknown',
            time: time || 0,
            os,
            name,
            isSelf,
          },
        })
      }
      title={name || 'Unknown'}
      numberOfLines={1}
      key={id}
      Icon={Icon}
      arrow
    >
      <Medium className='text-zinc-600 dark:text-zinc-400' style={F.F10_5} numberOfLines={1}>
        {/* {os || 'Unknown'} • {getDate(time)} */}
        {os || 'Unknown'} • {relativeTime}
      </Medium>
    </SettOption>
  )
}
