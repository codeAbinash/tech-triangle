import { weatherStore } from '@/zustand/weatherStore'
import { Moon02SolidIcon } from '@assets/icons/icons'
import { getMoonImageLink } from '@screens/Weather/api'
import { boxFullSize, mapMoonPhaseToImage } from '@screens/Weather/utils'
import { F, Medium, Regular } from '@utils/fonts'
import type { Theme } from '@utils/types'
import { getAp, getHoursMinutes } from '@utils/utils'
import React from 'react'
import { Image, View } from 'react-native'
import WeatherLabel from './WeatherLabel'

type MoonRiseSetProps = {
  theme: Theme
  moonrise?: number
  moonset?: number
  phase?: number
}

export default function MoonPhase({ moonrise, moonset, phase, theme }: MoonRiseSetProps) {
  const timeFormat = weatherStore((state) => state.weatherTimeFormat)
  const phaseNumber = phase === 0 ? 0 : phase || '__'

  return (
    <View className='rounded-3xl bg-black/10' style={boxFullSize}>
      <WeatherLabel Icon={Moon02SolidIcon} color={theme.color} label={'Moon Phase'} />
      <View className='flex-1 justify-between px-5 pb-4 pt-0'>
        <View className='flex-row justify-between'>
          <View className='flex-1'>
            <Medium style={[{ fontSize: 35 }, theme.color]}>{phaseNumber}</Medium>
            <Regular style={[theme.color, F.F12]}>{moonPhaseString(phase || 1)}</Regular>
            {/* <View> */}
            <Regular style={[theme.color, F.F12]}>
              Moonrise at {getHoursMinutes(moonrise || 0, timeFormat)} {getAp(moonrise || 0, timeFormat)},{' '}
            </Regular>
            <Regular style={[theme.color, F.F12]}>
              Moonset at {getHoursMinutes(moonset || 0, timeFormat)} {getAp(moonset || 0, timeFormat)}
            </Regular>
            {/* </View> */}
          </View>
          <Image
            source={{ uri: getMoonImageLink(mapMoonPhaseToImage(phase || 1)) }}
            style={{
              height: 30 * 4,
              width: 30 * 4,
              marginTop: -7,
            }}
          />
        </View>
      </View>
    </View>
  )
}

function moonPhaseString(phase: number) {
  if (phase === 0) return 'New Moon'
  if (phase > 0 && phase < 0.25) return 'Waxing Crescent'
  if (phase === 0.25) return 'First Quarter'
  if (phase > 0.25 && phase < 0.5) return 'Waxing Gibbous'
  if (phase === 0.5) return 'Full Moon'
  if (phase > 0.5 && phase < 0.75) return 'Waning Gibbous'
  if (phase === 0.75) return 'Last Quarter'
  if (phase > 0.75 && phase < 1) return 'Waning Crescent'
  return 'New Moon'
}
