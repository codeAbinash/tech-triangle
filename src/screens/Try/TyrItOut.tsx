import {
  ArtificialIntelligence04Icon,
  ComputerIcon,
  DashboardSpeed01Icon,
  Database02Icon,
  Image02Icon,
  MapsLocation02Icon,
  MathIcon,
  NeuralNetworkIcon,
  Setting07Icon,
  Settings01Icon,
  SoftwareLicenseIcon,
  TestIcon,
  Timer02Icon
} from '@assets/icons/icons'
import { Gap12, Gap20 } from '@components/Gap'
import KeyboardAvoidingContainer from '@components/KeyboardAvoidingContainer'
import { PaddingTop } from '@components/SafePadding'
import { ic, SettGroup, SettOption, SettText } from '@components/Settings'
import { Colors } from '@utils/colors'
import { Bold } from '@utils/fonts'
import type { NavProp } from '@utils/types'
import React from 'react'
import { useColorScheme, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function TyrItOut({ navigation }: NavProp) {
  const theme = useColorScheme()

  return (
    <>
      {/* <View className='bg-zinc-100 pb-1.5 pt-1.5 dark:bg-black'>
        <PaddingTop />
        <TopArea />
        </View> */}
      <PaddingTop />
      <View className='flex-row items-center justify-between px-5 pr-3'>
        <Bold className='text-xl text-gray-700 dark:text-gray-300'>Try it out</Bold>
        <TouchableOpacity activeOpacity={0.6} className='p-2.5 pb-4 pt-3.5' onPress={() => navigation.navigate('Settings')}>
          <Settings01Icon height={22} width={22} color={theme === 'dark' ? Colors.zinc['300'] : Colors.zinc['700']} />
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingContainer
        className='flex-1 bg-zinc-100 dark:bg-black'
        contentContainerStyle={{
          paddingBottom: 50,
        }}
      >
        <Gap20>
          <Gap12>
            <SettText className='mt-3'>Here are some applications related to computer science. You can try them out and see how they work.</SettText>
            <SettGroup title='Computer Science'>
              <SettOption title='Operating System' Icon={<SoftwareLicenseIcon {...ic} />} arrow />
              <SettOption title='Compiler Design' Icon={<Setting07Icon {...ic} />} arrow />
              <SettOption title='Computer Networks' Icon={<NeuralNetworkIcon {...ic} />} arrow />
              <SettOption title='Database Management' Icon={<Database02Icon {...ic} />} arrow />
              <SettOption title='Artificial Intelligence' Icon={<ArtificialIntelligence04Icon {...ic} />} arrow />
              <SettOption title='Software Engineering' Icon={<ComputerIcon {...ic} />} arrow />
              <SettOption title='Image Processing' Icon={<Image02Icon {...ic} />} arrow />
              <SettOption title='Numerical Methods' Icon={<MathIcon {...ic} />} arrow />
            </SettGroup>
            <SettText>
              Some of these applications are in development and may not work as expected. You can try them out and see how they work.
            </SettText>
          </Gap12>

          <SettGroup title='Tools'>
            <SettOption title='Location Speed Meter' Icon={<DashboardSpeed01Icon {...ic} />} arrow />
            <SettOption title='Current Coordinated' Icon={<MapsLocation02Icon {...ic} />} arrow />
          </SettGroup>

          <Gap12>
            <SettGroup title='Others'>
              <SettOption title='Animations' Icon={<Timer02Icon {...ic} />} arrow onPress={() => navigation.navigate('Animations')} />
              <SettOption title='Test Screen' Icon={<TestIcon {...ic} />} arrow onPress={() => navigation.navigate('Test')} />
            </SettGroup>
            <SettText>Just for testing purposes. You can try them out and see how they work.</SettText>
          </Gap12>
        </Gap20>
      </KeyboardAvoidingContainer>
    </>
  )
}
