import { DeviceAccessSolidIcon } from '@assets/icons/icons'
import { Gap12 } from '@components/Gap'
import RoundedIcon from '@components/RoundedIcon'
import { SettGroup, SettOption, SettText, SettWrapper } from '@components/Settings'
import { useQuery } from '@tanstack/react-query'
import { getClient } from '@utils/client'
import { Colors } from '@utils/colors'
import { F, Medium } from '@utils/fonts'
import type { NavProp } from '@utils/types'
import { print } from '@utils/utils'
import React, { useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import { getDate } from './utils'

export default function Devices({ navigation }: NavProp) {
  const client = getClient()

  const { data, isPending } = useQuery({
    queryKey: ['devices'],
    queryFn: async () => await (await client.api.devices.$get()).json(),
  })

  useEffect(() => {
    console.log(print(data?.data.devices))
  }, [data])

  return (
    <SettWrapper title='Devices' navigation={navigation}>
      <Gap12>
        <SettText className='mt-3'>
          You can manage your devices here. You can remove unwanted devices from the list.
        </SettText>
        <SettGroup title='Devices'>
          {isPending && (
            <ActivityIndicator size='large' color={Colors.accent} style={{ marginTop: 30, marginBottom: 30 }} />
          )}
          {data &&
            data.data.devices.map((device, i) => {
              return (
                <SettOption
                  onPress={() => navigation.navigate('Device', { device })}
                  title={device?.device || 'Unknown'}
                  numberOfLines={1}
                  key={device?.id}
                  Icon={<RoundedIcon Icon={DeviceAccessSolidIcon} />}
                  arrow
                >
                  <Medium className='text-zinc-600 dark:text-zinc-400' style={F.F10_5} numberOfLines={1}>
                    {getDate(device?.time)}
                  </Medium>
                </SettOption>
              )
            })}
        </SettGroup>
      </Gap12>
    </SettWrapper>
  )
}
