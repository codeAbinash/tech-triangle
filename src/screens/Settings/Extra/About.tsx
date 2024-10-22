import AppIconRound from '@assets/icons/icon_round.svg'
import { client } from '@utils/client'
// import { client } from '@utils/client'
import { APP_VERSION } from '@utils/data'
import { SemiBold } from '@utils/fonts'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

export default function About() {
  const [version, setVersion] = useState('')

  async function loadVersion() {
    const res = await client.api.version.$get()
    const v = await res.json()
    setVersion(v.data?.version)
    console.log(v.data?.version)
    // Device remove
  }
  useEffect(() => {
    loadVersion()
  }, [])

  return (
    <View className='flex-1 items-center justify-center'>
      <AppIconUI />
      <SemiBold className='text-base text-black dark:text-white'>Tech Triangle</SemiBold>
      <SemiBold className='text-xs text-black/50 dark:text-white'>v{APP_VERSION}</SemiBold>
      <SemiBold className='text-xs text-black/50 dark:text-white'>v{version}</SemiBold>
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
