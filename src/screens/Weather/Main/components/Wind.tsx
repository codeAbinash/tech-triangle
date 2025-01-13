import { FastWindSolidIcon } from '@assets/icons/icons'
import type { Weather } from '@screens/Weather/types'
import { boxSize } from '@screens/Weather/utils'
import { W } from '@utils/dimensions'
import { Medium, Regular } from '@utils/fonts'
import type { Theme } from '@utils/types'
import { StyleSheet, View } from 'react-native'
import WeatherLabel from './WeatherLabel'

export default function Wind({ theme, w }: { theme: Theme; w: Weather }) {
  return (
    <View className='aspect-square rounded-3xl bg-black/10' style={boxSize}>
      <WeatherLabel Icon={FastWindSolidIcon} color={theme.color} label='Wind' />
      <View className='flex-1 items-center justify-center px-5 pb-4 pt-0'>
        <View className='items-center justify-center' style={StyleSheet.absoluteFill}>
          <View
            className='h-1 w-full rounded-full bg-white/60'
            style={[{ transform: [{ rotate: w?.current.wind_deg + 'deg' }], width: '80%' }]}
          ></View>
        </View>
        <View style={StyleSheet.absoluteFill} className='items-center justify-center'>
          <View
            className='items-center justify-center rounded-full'
            style={{ backgroundColor: theme.gradient[1], height: W * 0.2, width: W * 0.2 }}
          >
            <Medium style={[{ fontSize: 15 }, theme.color]}>{w?.current.wind_speed}</Medium>
            <Regular className='text-xs' style={theme.color}>
              m/s
            </Regular>
          </View>
        </View>
      </View>
    </View>
  )
}
