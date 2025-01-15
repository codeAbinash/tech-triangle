import Animations from '@assets/animations/animations'
import Btn from '@components/Button'
import { Lottie } from '@components/Lottie'
import { PaddingBottom, PaddingTop } from '@components/SafePadding'
import { W } from '@utils/dimensions'
import { Bold, F, SemiBold } from '@utils/fonts'
import S from '@utils/storage'
import { NavProp } from '@utils/types'
import { View } from 'react-native'

export default function Onboarding({ navigation }: NavProp) {
  function handlePress() {
    S.set('isOpenedApp', 'true')
    navigation.reset({ index: 0, routes: [{ name: 'Login' }] })
  }
  return (
    <View className='gap-5-center flex-1 items-center justify-between'>
      <PaddingTop />
      <View className='flex-1 items-center justify-between px-8'>
        <View />
        <View>
          <Lottie source={Animations.welcome} style={{ width: W * 0.65, height: W * 0.65, marginTop: -50 }} />
          <View className='px-4'>
            <Bold className='text mt-16 text-center text-4xl'>Welcome to Tech Triangle</Bold>
            <SemiBold className='text mt-8 text-center opacity-80' style={F.F12}>
              Organize your life and work with our tools. Get started now! Click the button below to start using our
              tools.
            </SemiBold>
          </View>
        </View>
        <Btn title='Get Started' onPress={handlePress} />
      </View>
      <View className='h-5'></View>
      <PaddingBottom />
    </View>
  )
}
