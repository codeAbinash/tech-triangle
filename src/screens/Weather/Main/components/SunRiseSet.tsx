import { weatherStore } from '@/zustand/weatherStore'
import { Sun03SolidIcon } from '@assets/icons/icons'
import type { Weather } from '@screens/Weather/types'
import { boxSize } from '@screens/Weather/utils'
import { F, Medium, Regular } from '@utils/fonts'
import type { Theme } from '@utils/types'
import { getHoursMinutes } from '@utils/utils'
import React from 'react'
import { View } from 'react-native'
import WeatherLabel from './WeatherLabel'

type SunRiseSetProps = {
  w: Weather
  theme: Theme
  now?: number
  sunrise?: number
  sunset?: number
}

export default function SunRiseSet({ w, theme, now, sunrise, sunset }: SunRiseSetProps) {
  const timeFormat = weatherStore((state) => state.weatherTimeFormat)
  const isDay = sunrise && sunset && now ? now > sunrise && now < sunset : null

  return (
    <View className='aspect-square rounded-3xl bg-black/10' style={boxSize}>
      <WeatherLabel
        Icon={Sun03SolidIcon}
        color={theme.color}
        label={isDay === null ? 'Daylight' : isDay ? 'Sunset' : 'Sunrise'}
      />
      <View className='flex-1 justify-between px-5 pb-4 pt-0'>
        <Medium style={[{ fontSize: 25 }, theme.color]}>
          {isDay === null
            ? '__:__'
            : isDay
              ? getHoursMinutes(w?.current.sunset || 0, timeFormat)
              : getHoursMinutes(w?.current.sunrise || 0, timeFormat)}
        </Medium>
        <Regular style={[theme.color, F.F12]}>
          Sunset at {getHoursMinutes(w?.current.sunset || 0, timeFormat)} and sunrise at{' '}
          {getHoursMinutes(w?.current.sunrise || 0, timeFormat)}.
        </Regular>
      </View>
    </View>
  )
}
