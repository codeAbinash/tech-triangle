import { DeviceAccessSolidIcon, WavingHand02SolidIcon } from '@assets/icons/icons'
import { Gap12 } from '@components/Gap'
import RoundedIcon from '@components/RoundedIcon'
import { SettGroup, SettOption, SettText, SettWrapper } from '@components/Settings'
import { useMutation, useQuery } from '@tanstack/react-query'
import { client } from '@utils/client'
import { Colors } from '@utils/colors'
import { F, Medium } from '@utils/fonts'
import type { NavProp } from '@utils/types'
import React, { useEffect } from 'react'
import { ActivityIndicator, Alert, ToastAndroid } from 'react-native'
import { getDate } from './utils'

export default function Devices({ navigation }: NavProp) {
  const { data, isPending } = useQuery({
    queryKey: ['devices'],
    queryFn: async () => await (await client.api.devices.$get()).json(),
  })

  useEffect(() => {
    console.log(data)
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
        <SettText className='mt-3'>
          You can manage your devices here. You can remove unwanted devices from the list.
        </SettText>
        <SettGroup title='This Device'>
          {isPending && (
            <ActivityIndicator size='large' color={Colors.accent} style={{ marginTop: 30, marginBottom: 30 }} />
          )}
          {data && data.data && (
            <>
              <SettOption
                // onPress={() => navigation.navigate('Device', { device: null })}
                title={data.data.currentDevice?.name || 'Unknown'}
                numberOfLines={1}
                Icon={<RoundedIcon Icon={DeviceAccessSolidIcon} />}
              >
                <Medium className='text-zinc-600 dark:text-zinc-400' style={F.F10_5} numberOfLines={1}>
                  {getDate(data.data.currentDevice?.time)}
                </Medium>
              </SettOption>
            </>
          )}
        </SettGroup>
        <SettGroup>
          {data && data.data && data.data.devices.length > 0 && (
            <SettOption
              disabled={isRemoving}
              onPress={handelRemove}
              className='text-red-500'
              title={isRemoving ? 'Removing...' : 'Remove All Other Devices'}
              Icon={<RoundedIcon Icon={WavingHand02SolidIcon} className='bg-red-500' />}
            />
          )}
        </SettGroup>

        {data && data.data && data.data.devices.length > 0 && (
          <SettGroup title='Other Devices'>
            {data.data.devices.map((device, i) => {
              return (
                <SettOption
                  onPress={() => navigation.navigate('Device', { device })}
                  title={device?.name || 'Unknown'}
                  numberOfLines={1}
                  key={device?.id}
                  Icon={<RoundedIcon Icon={DeviceAccessSolidIcon} className='bg-orange-500' />}
                  arrow
                >
                  <Medium className='text-zinc-600 dark:text-zinc-400' style={F.F10_5} numberOfLines={1}>
                    {getDate(device?.time)}
                  </Medium>
                </SettOption>
              )
            })}
          </SettGroup>
        )}
        <SettText className='mt-2'>
          Click on a device to view more details. You can remove a device by clicking on the remove button.
        </SettText>
      </Gap12>
    </SettWrapper>
  )
}
