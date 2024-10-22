import AppIconRound from '@assets/icons/icon_round.svg'
import { useQuery } from '@tanstack/react-query'
import { client } from '@utils/client'
// import { client } from '@utils/client'
import { APP_VERSION } from '@utils/data'
import { SemiBold } from '@utils/fonts'
import React from 'react'
import { View } from 'react-native'

export default function About() {
  const { data, isPending } = useQuery({
    queryKey: ['version'],
    queryFn: async () => (await client.api.version.$get()).json(),
  })

  return (
    <View className='flex-1 items-center justify-center'>
      <AppIconUI />
      <SemiBold className='text-base text-black dark:text-white'>Tech Triangle</SemiBold>
      <SemiBold className='text-xs text-black/50 dark:text-white'>App Version: v{APP_VERSION}</SemiBold>
      <SemiBold className='text-xs text-black/50 dark:text-white'>
        Current Version: v{isPending ? 'Loading...' : data?.data?.version}
      </SemiBold>
    </View>
  )
}

export function AppIconUI() {
  return (
    <View className='flex-row items-center justify-center'>
      <View className='my-5 bg-appIconBg p-1' style={{ borderRadius: 28 }}>
        <AppIconRound width={100} height={100} />
      </View>
    </View>
  )
}
