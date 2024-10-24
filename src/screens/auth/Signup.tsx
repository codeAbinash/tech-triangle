import { signupZodValidator } from '@/zod/auth'
import {
  HelpCircleSolidIcon,
  LockPasswordSolidIcon,
  Login03SolidIcon,
  Mail02SolidIcon,
  StarSolidIcon,
  UserSolidIcon,
} from '@assets/icons/icons'
import Btn from '@components/Button'
import { Gap12 } from '@components/Gap'
import { Input } from '@components/Input'
import RoundedIcon from '@components/RoundedIcon'
import { PaddingTop } from '@components/SafePadding'
import { SettGroup, SettOption, SettText, SettWrapper } from '@components/Settings'
import { useMutation } from '@tanstack/react-query'
import { client } from '@utils/client'
import { Bold, SemiBold } from '@utils/fonts'
import type { NavProp } from '@utils/types'
import React, { useState } from 'react'
import { Alert, View } from 'react-native'

export default function Signup({ navigation }: NavProp) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const { mutate, isPending } = useMutation({
    mutationKey: ['login'],
    mutationFn: async () =>
      await (await client.api.auth.signup.$post({ form: { password, username, email, name } })).json(),
    onSuccess: (data) => {
      console.log(data)
      if (!data.status) return Alert.alert('Error', data.message)
      navigation.replace('Verify')
    },
    onError: (error) => {
      console.log(error)
      Alert.alert('Error', 'An error occurred')
    },
  })

  function handelSubmit() {
    const { error } = signupZodValidator.safeParse({ username, password, email, name })
    console.log(error)
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
          <Bold className='text-3xl text-black dark:text-white'>Create an Account to Get Started</Bold>
        </View>
        <Gap12>
          <SettGroup title='Full Name'>
            <Input
              Icon={<RoundedIcon Icon={UserSolidIcon} className='bg-green-500' />}
              placeholder='Enter your full name'
              value={name}
              onChangeText={setName}
            />
          </SettGroup>
          <SettGroup title='Email'>
            <Input
              Icon={<RoundedIcon Icon={Mail02SolidIcon} className='bg-rose-500' />}
              placeholder='Enter your email'
              value={email}
              keyboardType='email-address'
              onChangeText={setEmail}
            />
          </SettGroup>
          <SettGroup title='Username'>
            <Input
              Icon={<RoundedIcon Icon={StarSolidIcon} className='bg-amber-500' />}
              placeholder='Enter your username'
              value={username}
              onChangeText={setUsername}
            />
          </SettGroup>
          <SettGroup title='Password'>
            <Input
              Icon={<RoundedIcon Icon={LockPasswordSolidIcon} className='bg-slate-500' />}
              placeholder='Enter your email or username'
              value={password}
              onChangeText={setPassword}
            />
          </SettGroup>
          <SettText>
            An email will be sent to you to verify your account. Make sure that you have access to it.
          </SettText>
        </Gap12>

        <View className='mt-5 px-6'>
          <Btn
            title={isPending ? 'Signing up...' : 'Signup'}
            className='w-full'
            disabled={isPending}
            onPress={handelSubmit}
          />
        </View>
        <SettGroup title='More Options' className='mt-5'>
          <SettOption
            title='Login instead'
            onPress={() => {
              navigation.replace('Login')
            }}
            arrow
            Icon={<RoundedIcon Icon={Login03SolidIcon} className='bg-green-500' />}
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
