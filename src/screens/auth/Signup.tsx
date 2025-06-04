import { signupZodValidator, usernameStatusZodValidator } from '@/zod/auth'
import popupStore from '@/zustand/popupStore'

import Btn from '@components/Button'
import { Gap12 } from '@components/Gap'
import { Input } from '@components/Input'
import KeyboardAvoid from '@components/KeyboardAvoid'
import RoundIcon from '@components/RoundIcon'
import { PaddingTop } from '@components/SafePadding'
import SettGroup from '@components/Settings/SettGroup'
import { SettOption } from '@components/Settings/SettOption'
import SettText from '@components/Settings/SettText'
import Cancel01Icon from '@hugeicons/Cancel01Icon'
import HelpCircleIcon from '@hugeicons/HelpCircleIcon'
import LockPasswordIcon from '@hugeicons/LockPasswordIcon'
import Login03Icon from '@hugeicons/Login03Icon'
import Mail02Icon from '@hugeicons/Mail02Icon'
import StarIcon from '@hugeicons/StarIcon'
import TextFontIcon from '@hugeicons/TextFontIcon'
import Tick01Icon from '@hugeicons/Tick01Icon'
import { useMutation } from '@tanstack/react-query'
import { client } from '@utils/client'
import { Colors } from '@utils/colors'
import { Bold, SemiBold } from '@utils/fonts'
import type { NavProp } from '@utils/types'
import { useEffect, useState } from 'react'
import { ActivityIndicator, ToastAndroid, View } from 'react-native'
import { PasswordEye } from './components/PasswordEye'

type SignupParams = {
  name: string
  username: string
  email: string
  password: string
}

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
  const alert = popupStore((store) => store.alert)

  const { mutate, isPending } = useMutation({
    mutationKey: ['login'],
    mutationFn: async (data: SignupParams) => await (await client.api.auth.signup.$post({ form: { ...data } })).json(),
    onSuccess: (data) => {
      console.log(data)
      if (!data.status) return alert('Error', data.message)
      navigation.replace('Verify', { username })
    },
    onError: (error) => {
      console.log(error)
      alert('Error', 'An error occurred')
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
    if (!username) return setStatus(NameStatus.Initial)
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
  }, [checkUsername, username])

  function handleSubmit() {
    const { error, data } = signupZodValidator.safeParse({ username, password, email, name })
    console.log(error)
    if (error) {
      alert('Error', error.errors[0]?.message || '')
      return
    }
    mutate(data)
  }

  return (
    <KeyboardAvoid className='bg flex-1' contentContainerStyle={{ paddingBottom: 20 }}>
      <View className='pb-5'>
        <PaddingTop />
        <View className='px-5 py-5 pb-10'>
          <Bold className='text-3xl text-black dark:text-white'>Create an Account to Get Started</Bold>
        </View>
        <Gap12>
          <SettGroup title='Full Name'>
            <Input
              Icon={<RoundIcon Icon={TextFontIcon} className='bg-blue-500' />}
              placeholder='Your Full Name'
              autoComplete='name'
              value={name}
              onChangeText={setName}
            />
          </SettGroup>
          <SettGroup title='Email'>
            <Input
              Icon={<RoundIcon Icon={Mail02Icon} className='bg-rose-500' />}
              placeholder='Your Email'
              autoComplete='email'
              value={email}
              keyboardType='email-address'
              onChangeText={setEmail}
            />
          </SettGroup>
          <SettGroup title='Username'>
            <Input
              Icon={<RoundIcon Icon={StarIcon} className='bg-amber-500' />}
              placeholder='Select a Username'
              value={username}
              autoComplete='off'
              onChangeText={setUsername}
              Right={<UsernameStatus isAvail={status} />}
            />
          </SettGroup>

          <SettGroup title='Password'>
            <Input
              value={password}
              onChangeText={setPassword}
              placeholder='Enter Password'
              autoComplete='password'
              secureTextEntry={!isVisible}
              Icon={<RoundIcon Icon={LockPasswordIcon} className='bg-slate-500' />}
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
            onPress={handleSubmit}
          />
        </View>
        <SettGroup title='More Options' className='mt-5'>
          <SettOption
            title='Login instead'
            onPress={() => {
              navigation.replace('Login')
            }}
            arrow
            Icon={<RoundIcon Icon={Login03Icon} className='bg-green-500' />}
          />
          <SettOption
            title='Forgot Password?'
            onPress={() => ToastAndroid.show('Relax and try to remember your password.', ToastAndroid.SHORT)}
            arrow
            Icon={<RoundIcon Icon={HelpCircleIcon} className='bg-rose-500' />}
          />
        </SettGroup>
        <SettText className='mt-5 text-center'>
          By continuing up, you agree to our <SemiBold>Terms of Service</SemiBold> and{' '}
          <SemiBold>Privacy Policy</SemiBold>.
        </SettText>
      </View>
    </KeyboardAvoid>
  )
}
function UsernameStatus({ isAvail }: { isAvail: NameStatus }) {
  return (
    <>
      {isAvail === NameStatus.Checking && <ActivityIndicator size={23} color={Colors.accent} />}
      {isAvail === NameStatus.Available && <Tick01Icon size={22} color={Colors.green[500]} />}
      {isAvail === NameStatus.Unavailable && <Cancel01Icon size={20} color={Colors.red[500]} />}
    </>
  )
}
