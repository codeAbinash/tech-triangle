import { signupZodValidator, usernameStatusZodValidator } from '@/zod/auth'
import {
  Cancel01SolidIcon,
  HelpCircleSolidIcon,
  LockPasswordSolidIcon,
  Login03SolidIcon,
  Mail02SolidIcon,
  StarSolidIcon,
  TextFontSolidIcon,
  Tick01Icon,
} from '@assets/icons/icons'
import Btn from '@components/Button'
import { Gap12 } from '@components/Gap'
import { Input } from '@components/Input'
import RoundedIcon from '@components/RoundedIcon'
import { PaddingTop } from '@components/SafePadding'
import { SettGroup, SettOption, SettText, SettWrapper } from '@components/Settings'
import { useMutation } from '@tanstack/react-query'
import { client } from '@utils/client'
import { Colors } from '@utils/colors'
import { Bold, SemiBold } from '@utils/fonts'
import type { NavProp } from '@utils/types'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Alert, ToastAndroid, View } from 'react-native'
import { PasswordEye } from './components/PasswordEye'

enum NameStatus {
  Available,
  Checking,
  Unavailable,
  Initial,
}
export default function Signup({ navigation }: NavProp) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [status, setStatus] = useState<NameStatus>(NameStatus.Initial)

  const { mutate, isPending } = useMutation({
    mutationKey: ['login'],
    mutationFn: async () =>
      await (await client.api.auth.signup.$post({ form: { password, username, email, name } })).json(),
    onSuccess: (data) => {
      console.log(data)
      if (!data.status) return Alert.alert('Error', data.message)
      navigation.replace('Verify', { username })
    },
    onError: (error) => {
      console.log(error)
      Alert.alert('Error', 'An error occurred')
    },
  })

  const { mutate: checkUsername } = useMutation({
    mutationKey: ['checkUsername'],
    mutationFn: async ({ u }: { u: string }) =>
      await (await client.api.auth.username.status.$post({ form: { username: u } })).json(),
    onSuccess: (data) => {
      console.log(data)
      setStatus(data.status ? NameStatus.Available : NameStatus.Unavailable)
    },
    onError: (error) => {
      console.log(error)
      setStatus(NameStatus.Initial)
      ToastAndroid.show('An error occurred', ToastAndroid.SHORT)
    },
  })

  useEffect(() => {
    setStatus(NameStatus.Checking)
    const timer = setTimeout(() => {
      const { error, data } = usernameStatusZodValidator.safeParse({ username })
      if (error) {
        console.log(error)
        setStatus(NameStatus.Initial)
        return
      }
      checkUsername({ u: data.username })
    }, 500)
    return () => clearTimeout(timer)
  }, [checkUsername, email, username])

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
              Icon={<RoundedIcon Icon={TextFontSolidIcon} className='bg-blue-500' />}
              placeholder='Full Name'
              value={name}
              onChangeText={setName}
            />
          </SettGroup>
          <SettGroup title='Email'>
            <Input
              Icon={<RoundedIcon Icon={Mail02SolidIcon} className='bg-rose-500' />}
              placeholder='Email'
              value={email}
              keyboardType='email-address'
              onChangeText={setEmail}
            />
          </SettGroup>
          <SettGroup title='Username'>
            <Input
              Icon={<RoundedIcon Icon={StarSolidIcon} className='bg-amber-500' />}
              placeholder='Username'
              value={username}
              onChangeText={setUsername}
              Right={<UsernameStatus isAvail={status} />}
            />
          </SettGroup>

          <SettGroup title='Password'>
            <Input
              value={password}
              onChangeText={setPassword}
              placeholder='Password'
              secureTextEntry={!isVisible}
              Icon={<RoundedIcon Icon={LockPasswordSolidIcon} className='bg-slate-500' />}
              Right={<PasswordEye isVisible={isVisible} setIsVisible={setIsVisible} />}
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
function UsernameStatus({ isAvail }: { isAvail: NameStatus }) {
  return (
    <>
      {isAvail === NameStatus.Checking && <ActivityIndicator size={23} color={Colors.accent} />}
      {isAvail === NameStatus.Available && <Tick01Icon className='text-green-500' height={22} width={22} />}
      {isAvail === NameStatus.Unavailable && <Cancel01SolidIcon className='text-red-500' width={20} height={20} />}
    </>
  )
}
