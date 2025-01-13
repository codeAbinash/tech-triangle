import {
  GoForward15SecIcon,
  MapsLocation02SolidIcon,
  QuillWrite02Icon,
  SunCloudAngledRainZap01Icon,
} from '@assets/icons/icons'
import Btn, { BtnTransparent } from '@components/Button'
import Feature from '@components/Feature'
import { PaddingBottom } from '@components/SafePadding'
import { Colors } from '@utils/colors'
import { Bold } from '@utils/fonts'
import type { NavProp } from '@utils/types'
import { StatusBar, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default function WeatherWelcome({ navigation }: NavProp) {
  return (
    <View className='flex-1 dark:bg-zinc-950'>
      <StatusBar barStyle='default' />
      <ScrollView
        className='px-[10%]'
        contentContainerStyle={{ justifyContent: 'space-between', alignItems: 'center', gap: 10, paddingVertical: 20 }}
      >
        <View className='w-full'>
          <Bold style={{ fontSize: 32 }} className='my-10 text-center text-zinc-800 dark:text-zinc-200'>
            Welcome to{'\n'}Weather
          </Bold>
          <View style={{ gap: 12 }}>
            <Feature
              Icon={<GoForward15SecIcon height={30} width={30} color={Colors.red['500']} />}
              title='15 day forecast'
              description='A 15 day forecast to help you plan your week ahead with more accuracy.'
            />
            <Feature
              Icon={<SunCloudAngledRainZap01Icon height={30} width={30} color={Colors.blue['500']} />}
              title='Animated weather icons'
              description='New animated weather icons to give you a better idea of what the weather is like at a glance.'
            />
            <Feature
              Icon={<QuillWrite02Icon height={30} width={30} color={Colors.green['500']} />}
              title='New look and feel'
              description='A fresh new look and feel with a new color scheme and a new layout to make it easier to find what you are looking for.'
            />
            <Feature
              Icon={<MapsLocation02SolidIcon height={30} width={30} color={Colors.purple['500']} />}
              title='Geolocation support'
              description='Geolocation to provide you with the most accurate weather information for your location.'
            />
          </View>
        </View>
      </ScrollView>
      <View className='w-full px-[10%] pt-2' style={{ gap: 10 }}>
        <Btn
          title='Search Your City'
          onPress={() => navigation.navigate('WeatherSearchCity', { shouldGoBack: false })}
        />
        <BtnTransparent
          title='Use Current Location'
          onPress={() =>
            navigation.navigate('WeatherLocation', {
              shouldGoBack: false,
            })
          }
        />
        <PaddingBottom />
      </View>
    </View>
  )
}
