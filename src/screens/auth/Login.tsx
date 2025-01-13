import { loginZodValidator } from '@/zod/auth'
import authStore from '@/zustand/authStore'
import popupStore from '@/zustand/popupStore'
import Animations from '@assets/animations/animations'
import { HelpCircleSolidIcon, LockPasswordSolidIcon, Mail02SolidIcon, UserAdd02SolidIcon } from '@assets/icons/icons'
import Btn from '@components/Button'
import { Gap12 } from '@components/Gap'
import { Input } from '@components/Input'
import KeyboardAvoid from '@components/KeyboardAvoid'
import { Lottie } from '@components/Lottie'
import RoundedIcon from '@components/RoundedIcon'
import { PaddingTop } from '@components/SafePadding'
import SettGroup from '@components/Settings/SettGroup'
import { SettOption } from '@components/Settings/SettOption'
import SettText from '@components/Settings/SettText'
import { useMutation } from '@tanstack/react-query'
import { client, updateClientHeader } from '@utils/client'
import { W } from '@utils/dimensions'
import { Bold, SemiBold } from '@utils/fonts'
import type { NavProp } from '@utils/types'
import { useMemo, useState } from 'react'
import { Platform, ToastAndroid, View } from 'react-native'
import DeviceInfo from 'react-native-device-info'
import { PasswordEye } from './components/PasswordEye'

function getOs() {
  const os = Platform.OS.split('')
  if (os[0]) {
    const firstLetter = os[0].toUpperCase()
    os[0] = firstLetter
  }
  return os.join('') + ' ' + DeviceInfo.getSystemVersion()
  //  + ', Tech Triangle v' + APP_VERSION
}

type LoginParams = {
  username: string
  password: string
  deviceName: string
  deviceOs: string
}

export default function Login({ navigation }: NavProp) {
  const { setToken } = authStore()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const deviceOs = useMemo(() => getOs(), [])
  const deviceName = useMemo(() => DeviceInfo.getModel(), [])
  const alert = popupStore((store) => store.alert)

  const { mutate, isPending } = useMutation({
    mutationKey: ['login'],
    mutationFn: async (data: LoginParams) => await (await client.api.auth.login.$post({ form: { ...data } })).json(),
    onSuccess: (data) => {
      if (data.verificationRequired) return navigation.replace('Verify', { username })
      if (!data.status) return alert('Error', data.message)
      if (data.data?.token) {
        // Navigate to home screen
        setToken(data.data.token)
        updateClientHeader(data.data.token)
        navigation.reset({ index: 0, routes: [{ name: 'Home' }] })
        return
      }
    },
    onError: (error) => {
      console.log(error)
      alert('Error', 'An error occurred')
    },
  })

  function handleSubmit() {
    const { error, data } = loginZodValidator.safeParse({ username, password, deviceName, deviceOs })
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
        <View className='px-5 py-5 pb-8'>
          <Bold className='pb-3 text-3xl text-black dark:text-white'>Welcome to Tech Triangle</Bold>
          <Lottie source={Animations['welcome']} style={{ width: W * 0.6, height: W * 0.6 }} />
        </View>
        <Gap12>
          <SettGroup title='Email or Username'>
            <Input
              Icon={<RoundedIcon Icon={Mail02SolidIcon} className='bg-rose-500' />}
              autoComplete='email'
              placeholder='Email or Username'
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
              value={password}
              autoComplete='password'
              onChangeText={setPassword}
              placeholder='Password'
              secureTextEntry={!isVisible}
              Icon={<RoundedIcon Icon={LockPasswordSolidIcon} className='bg-slate-500' />}
              Right={<PasswordEye isVisible={isVisible} setIsVisible={setIsVisible} />}
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
            onPress={handleSubmit}
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
            onPress={() => ToastAndroid.show('Relax and try to remember your password.', ToastAndroid.SHORT)}
            arrow
            Icon={<RoundedIcon Icon={HelpCircleSolidIcon} className='bg-rose-500' />}
          />
        </SettGroup>
        <SettText className='mt-5 text-center'>
          By continuing up, you agree to our <SemiBold>Terms of Service</SemiBold> and
          <SemiBold>Privacy Policy</SemiBold>.
        </SettText>
      </View>
    </KeyboardAvoid>
  )
}
