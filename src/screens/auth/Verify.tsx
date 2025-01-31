import { verifyEmailZodValidator } from '@/zod/auth'
import popupStore from '@/zustand/popupStore'
import Animations from '@assets/animations/animations'
import { BubbleChatLockSolidIcon, Login03SolidIcon, MailSend02SolidIcon } from '@assets/icons/icons'
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
import type { RouteProp } from '@react-navigation/native'
import { useMutation } from '@tanstack/react-query'
import { client } from '@utils/client'
import { W } from '@utils/dimensions'
import { Bold, SemiBold } from '@utils/fonts'
import type { StackNav } from '@utils/types'
import { useState } from 'react'
import { View } from 'react-native'

type ParamList = {
  Verify: VerifyParamList
}

export type VerifyParamList = {
  username: string
}

export default function Verify({ navigation, route }: { navigation: StackNav; route: RouteProp<ParamList, 'Verify'> }) {
  const [otp, setOtp] = useState('')
  const alert = popupStore((store) => store.alert)

  const { mutate, isPending } = useMutation({
    mutationKey: ['login'],
    mutationFn: async () =>
      await (await client.api.auth.verify.$post({ form: { otp, username: route.params.username } })).json(),
    onSuccess: (data) => {
      console.log(data)
      if (!data.status) return alert('Error', data.message)
      alert('Success', 'Account verified successfully, you can now login.')
      navigation.replace('Login')
    },
  })

  function handleSubmit() {
    const { error } = verifyEmailZodValidator.safeParse({ otp, username: route.params.username })
    if (error) {
      alert('Error', error.errors[0]?.message || '')
      return
    }
    mutate()
  }

  return (
    <KeyboardAvoid className='bg flex-1' contentContainerStyle={{ paddingBottom: 20 }}>
      <View className='pb-5'>
        <PaddingTop />
        <View className='px-5 py-5 pb-5'>
          <Bold className='pb-8 text-3xl text-black dark:text-white'>Please Verify your account</Bold>
          <Lottie source={Animations.lock} />
        </View>
        <Gap12>
          <SettText className='text-blue-500'>Please check also your spam folder for the OTP.</SettText>
          <SettGroup title='Enter OTP'>
            <Input
              Icon={<RoundedIcon Icon={BubbleChatLockSolidIcon} className='bg-rose-500' />}
              placeholder='Enter OTP'
              keyboardType='number-pad'
              value={otp}
              onChangeText={setOtp}
            />
          </SettGroup>
          <SettText>Please check your email for the OTP sent to you. Enter the OTP to verify your account.</SettText>

          <SettText>
            If you didn't receive the OTP, you can request for another one by clicking the button below.
          </SettText>
        </Gap12>

        <View className='mt-5 px-6'>
          <Btn
            title={isPending ? 'Verifying...' : 'Verify'}
            className='w-full'
            disabled={isPending}
            onPress={handleSubmit}
          />
        </View>
        <SettGroup title='More Options' className='mt-5'>
          <SettOption
            title='Resend OTP'
            onPress={() => {
              // navigation.navigate('Signup')
            }}
            arrow
            Icon={<RoundedIcon Icon={MailSend02SolidIcon} className='bg-amber-500' />}
          />
          <SettOption
            title='Login instead'
            onPress={() => {
              navigation.replace('Login')
            }}
            arrow
            Icon={<RoundedIcon Icon={Login03SolidIcon} className='bg-green-500' />}
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
