import { loginZodValidator } from '@/zod/auth'
import authStore from '@/zustand/authStore'
import { HelpCircleSolidIcon, LockPasswordSolidIcon, Mail02SolidIcon, UserAdd02SolidIcon } from '@assets/icons/icons'
import Btn from '@components/Button'
import { Gap12 } from '@components/Gap'
import { Input } from '@components/Input'
import RoundedIcon from '@components/RoundedIcon'
import { PaddingTop } from '@components/SafePadding'
import { SettGroup, SettOption, SettText, SettWrapper } from '@components/Settings'
import { useMutation } from '@tanstack/react-query'
import { client, updateClientHeader } from '@utils/client'
import { Bold, SemiBold } from '@utils/fonts'
import type { NavProp } from '@utils/types'
import React, { useState } from 'react'
import { Alert, View } from 'react-native'

export default function Login({ navigation }: NavProp) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { setToken } = authStore()

  const { mutate, isPending } = useMutation({
    mutationKey: ['login'],
    mutationFn: async () => await (await client.api.auth.login.$post({ form: { password, username } })).json(),
    onSuccess: (data) => {
      console.log(data)

      if (data.verificationRequired) return navigation.replace('Verify', { username })

      if (!data.status) return Alert.alert('Error', data.message)

      if (data.data?.token) {
        // Navigate to home screen
        setToken(data.data.token)
        updateClientHeader(data.data.token)
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        })
        return
      }
    },
    onError: (error) => {
      console.log(error)
      Alert.alert('Error', 'An error occurred')
    },
  })

  function handelSubmit() {
    const { error } = loginZodValidator.safeParse({ username, password })
    if (error) {
      Alert.alert('Error', error.errors[0]?.message || '')
      return
    }
    mutate()
  }

  return (
    <SettWrapper className='flex-1 bg-zinc-100 dark:bg-black' Header={<></>}>
      <View className='py-5'>
        <PaddingTop />
        <View className='px-5 py-5 pb-10'>
          <Bold className='text-3xl text-black dark:text-white'>Welcome to Tech Triangle</Bold>
        </View>
        <Gap12>
          <SettGroup title='Email or Username'>
            <Input
              Icon={<RoundedIcon Icon={Mail02SolidIcon} className='bg-rose-500' />}
              placeholder='Enter your email or username'
              value={username}
              onChangeText={setUsername}
            />
          </SettGroup>
          <SettText>
            Enter your email or username to login to your account. If you don't have an account, you can create one by
            clicking the button below.
          </SettText>
          <SettGroup title='Password'>
            <Input
              Icon={<RoundedIcon Icon={LockPasswordSolidIcon} className='bg-slate-500' />}
              placeholder='Enter your email or username'
              value={password}
              onChangeText={setPassword}
            />
          </SettGroup>
          <SettText>
            Enter your password to login to your account. If you forgot your password, you can reset it by clicking the
            button below.
          </SettText>
        </Gap12>

        <View className='mt-5 px-6'>
          <Btn
            title={isPending ? 'Logging in...' : 'Login'}
            className='w-full'
            disabled={isPending}
            onPress={handelSubmit}
          />
        </View>
        <SettGroup title='More Options' className='mt-5'>
          <SettOption
            title='Create Account'
            onPress={() => {
              navigation.replace('Signup')
            }}
            arrow
            Icon={<RoundedIcon Icon={UserAdd02SolidIcon} className='bg-green-500' />}
          />
          <SettOption
            title='Forgot Password?'
            onPress={() => {}}
            arrow
            Icon={<RoundedIcon Icon={HelpCircleSolidIcon} className='bg-rose-500' />}
          />
        </SettGroup>
        <SettText className='mt-5 text-center'>
          By continuing up, you agree to our <SemiBold>Terms of Service</SemiBold> and
          <SemiBold>Privacy Policy</SemiBold>.
        </SettText>
      </View>
    </SettWrapper>
  )
}
