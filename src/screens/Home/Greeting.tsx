import Btn from '@components/Button'
import Feature from '@components/Feature'
import { PaddingBottom } from '@components/SafePadding'
import CpuIcon from '@hugeicons/CpuIcon'
import QuillWrite02Icon from '@hugeicons/QuillWrite02Icon'
import SunCloudAngledRainZap01Icon from '@hugeicons/SunCloudAngledRainZap01Icon'
import TimeHalfPassIcon from '@hugeicons/TimeHalfPassIcon'
import { Colors } from '@utils/colors'
import { APP_VERSION } from '@utils/constants'
import { Bold, Medium, SemiBold } from '@utils/fonts'
import type { NavProp } from '@utils/types'
import { getLocalDate, greetingByTime } from '@utils/utils'
import { StatusBar, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default function Greeting({ navigation }: NavProp) {
  return (
    <View className='h-screen items-center justify-between'>
      <StatusBar barStyle='default' />
      <ScrollView
        className='w-full px-[10%]'
        contentContainerStyle={{ justifyContent: 'space-between', alignItems: 'center', gap: 10, paddingVertical: 20 }}
      >
        <View className='w-full'>
          <View className='my-9 mb-9'>
            <Bold className='text-center text-zinc-800 dark:text-zinc-200' style={{ fontSize: 28 }}>
              {getLocalDate()}
            </Bold>
            <SemiBold className='mt-2 text-center text-base text-zinc-800 dark:text-zinc-200'>
              {greetingByTime()}
            </SemiBold>
          </View>

          <View style={{ gap: 15 }}>
            <Feature
              Icon={<CpuIcon size={28} color={Colors.purple['500']} />}
              title='Computer Science Experiments'
              description={
                "Computer Science related experiments and implementation. Go to the 'Explore' tab to see more."
              }
            />
            <Feature
              Icon={<SunCloudAngledRainZap01Icon size={28} color={Colors.blue['500']} />}
              title='Weather Application'
              description='A weather application that shows the current weather and forecast for the next 15 days.'
            />
            <Feature
              Icon={<TimeHalfPassIcon size={28} color={Colors.red['500']} />}
              title='Manage Routines'
              description='A new routine manager to help you manage your daily routines and to make your life easier.'
            />
            <Feature
              Icon={<QuillWrite02Icon size={28} color={Colors.green['500']} />}
              title='Take Notes'
              description='A new notes application with a new design and a new color scheme to make it easier to find what you are looking for.'
            />
          </View>
        </View>
      </ScrollView>
      <View className='w-full px-10 pt-2'>
        <Medium style={[{ fontSize: 9.5 }]} className='mb-3 text-center text-zinc-500 dark:text-zinc-500'>
          The above are some of the features of the application that have been added or improved in the latest version.
        </Medium>
        <Btn title='Close' onPress={() => navigation.goBack()} className='bg-accent' />
        <Medium className='mt-2 text-center text-xs text-zinc-500 dark:text-zinc-500'>Version {APP_VERSION}</Medium>
        <PaddingBottom />
      </View>
    </View>
  )
}
