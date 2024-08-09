import { GoForward15SecIcon, MapsLocation02Icon, QuillWrite02Icon, SunCloudAngledRainZap01Icon } from '@assets/icons/icons'
import Btn from '@components/Button'
import Feature from '@components/Feature'
import { Colors } from '@utils/colors'
import { Bold } from '@utils/fonts'
import type { NavProp } from '@utils/types'
import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default function RoutineWelcome({ navigation }: NavProp) {
  return (
    <View className='flex-1 dark:bg-zinc-950'>
      <StatusBar barStyle='default' />
      <ScrollView
        className='h-screen px-10'
        contentContainerStyle={{ justifyContent: 'space-between', alignItems: 'center', gap: 10, paddingVertical: 20 }}
      >
        <View className='w-full'>
          <Bold style={{ fontSize: 38 }} className='my-10 text-center text-zinc-800 dark:text-zinc-200'>
            What's New{'\n'}in Routine
          </Bold>
          <View style={{ gap: 10 }}>
            <Feature
              Icon={<SunCloudAngledRainZap01Icon height={30} width={30} color={Colors.blue['500']} />}
              title='Animated weather icons'
              description='New animated weather icons to give you a better idea of what the weather is like at a glance.'
            />
            <Feature
              Icon={<GoForward15SecIcon height={30} width={30} color={Colors.red['500']} />}
              title='15 day forecast'
              description='A 15 day forecast to help you plan your week ahead with more accuracy.'
            />
            <Feature
              Icon={<QuillWrite02Icon height={30} width={30} color={Colors.green['500']} />}
              title='New look and feel'
              description='A fresh new look and feel with a new color scheme and a new layout to make it easier to find what you are looking for.'
            />
            <Feature
              Icon={<MapsLocation02Icon height={30} width={30} color={Colors.purple['500']} />}
              title='Geolocation support'
              description='Geolocation to provide you with the most accurate weather information for your location.'
            />
          </View>
        </View>
      </ScrollView>
      <View className='mb-14 w-full px-10 pt-2' style={{ gap: 10 }}>
        <Btn title='Continue' onPress={() => navigation.goBack()} className='bg-red-500' />
      </View>
    </View>
  )
}
