import authStore from '@/zustand/authStore'
import Btn from '@components/Button'
import { PaddingBottom } from '@components/SafePadding'
import { SettText } from '@components/Settings'
import StackHeader from '@components/StackHeader'
import LogoutIcon from '@images/logout.svg'
import { useMutation } from '@tanstack/react-query'
import { client } from '@utils/client'
import { W } from '@utils/dimensions'
import type { NavProp } from '@utils/types'
import React from 'react'
import { StatusBar, ToastAndroid, View } from 'react-native'

export default function Logout({ navigation }: NavProp) {
  const { removeToken } = authStore()

  const { mutate: logout, isPending: isLoggingOut } = useMutation({
    mutationKey: ['logout'],
    mutationFn: async () => await (await client.api.logout.$post()).json(),
    onSuccess: (d) => {
      console.log(d)
      if (!d.status) ToastAndroid.show('Error logging out!', ToastAndroid.SHORT)
      removeToken()
      navigation.reset({ index: 0, routes: [{ name: 'Login' }] })
    },
  })
  const { mutate: logoutAll, isPending: isLoggingOutAll } = useMutation({
    mutationKey: ['logout'],
    mutationFn: async () => await (await client.api.devices.delete.all.$post()).json(),
    onSuccess: (d) => {
      console.log(d)
      if (!d.status) ToastAndroid.show('Cannot logout from all devices!', ToastAndroid.SHORT)
      removeToken()
      navigation.reset({ index: 0, routes: [{ name: 'Login' }] })
    },
  })

  return (
    <View className='h-screen items-center justify-between px-5 pt-5 dark:bg-zinc-950'>
      <StatusBar barStyle='default' />
      <StackHeader title='Log out?' navigation={navigation} left='Cancel' right='Done' />
      <View className='w-full flex-1 items-center justify-between pt-2'>
        <View></View>
        <LogoutIcon height={W * 0.85} width={W * 0.85} />
        <View className='w-full gap-y-2'>
          <SettText className='mb-5 text-center'>
            Are you sure you want to log out? To remove all logged in sessions, log out from all devices. You will need
            to log in again to use the app. Are you sure you want to log out?
          </SettText>
          <Btn
            title={isLoggingOut ? 'Logging out...' : 'Log out'}
            className='bg-red-500'
            disabled={isLoggingOut}
            onPress={() => logout()}
          />
          <Btn
            title={isLoggingOutAll ? 'Logging out...' : 'Log out from all devices'}
            disabled={isLoggingOutAll}
            onPress={() => logoutAll()}
          />
          <Btn title='Cancel' className='bg-slate-500' onPress={() => navigation.goBack()} />
          <SettText className='mt-2 text-center'>
            If you log out, you will need to log in again to use the app.
          </SettText>
        </View>
      </View>
      <PaddingBottom />
    </View>
  )
}
