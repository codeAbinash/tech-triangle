import { weatherStore } from '@/zustand/weatherStore'
import { Clock01SolidIcon } from '@assets/icons/icons'
import type { Current, Weather } from '@screens/Weather/types'
import { Icons } from '@screens/Weather/utils'
import { Medium, SemiBold } from '@utils/fonts'
import { getAp, getHour, screenDelay, tempConverter } from '@utils/utils'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Animated, { FadeIn } from 'react-native-reanimated'
import type { SvgProps } from 'react-native-svg'
import type { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils'
import WeatherLabel from './WeatherLabel'

type HourlyWeather = {
  color: {
    color: string
  }
  w: Weather
  hourly: Current[] | undefined
}

export default function HourlyForecast({ color, w, hourly }: HourlyWeather) {
  const currentUnit = weatherStore((state) => state.temperatureUnit)
  const timeFormat = weatherStore((state) => state.weatherTimeFormat)
  const Icon = Icons[w?.current.weather[0]!.icon || '02d']
  const [data, setData] = useState<Current[] | undefined>()

  useEffect(() => {
    const timer = screenDelay(() => setData(hourly))
    return () => clearTimeout(timer)
  }, [hourly])

  return (
    <Animated.View className='mt-10 px-4' entering={FadeIn.duration(700).delay(100)}>
      <View className='rounded-3xl bg-black/10'>
        <WeatherLabel Icon={Clock01SolidIcon} color={color} label='Hourly Forecast' />
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flexDirection: 'row', paddingBottom: 10, paddingHorizontal: 10 }}
        >
          <>
            <View style={{ opacity: data ? 1 : 0 }}>
              <SmallWeather
                color={color}
                time='Now'
                Icon={Icon}
                ap=''
                // temp={w ? tempConverter(w.current.temp, currentUnit, true) : '__'}
                temp={w ? tempConverter({ temp: w.current.temp, unit: currentUnit, degree: true }) : '__'}
                probability={Math.round((w?.current.pop || 0) * 100)}
              />
            </View>
            {data?.map((h, i) => (
              <SmallWeather
                Icon={Icons[h.weather[0]!.icon]}
                key={i}
                time={getHour(h.dt + 3600, timeFormat)}
                color={color}
                ap={getAp(h.dt, timeFormat)}
                temp={h ? tempConverter({ temp: h.temp, unit: currentUnit, degree: true }) : '__'}
                probability={Math.round((h.pop || 0) * 100)}
              />
            ))}
          </>
        </ScrollView>
      </View>
    </Animated.View>
  )
}

type SmallWeatherProps = {
  color: {
    color: string
  }
  time: number | string
  temp: string
  Icon: React.FC<SvgProps>
  probability: number
  ap: 'AM' | 'PM' | ''
}

function SmallWeather({ color, time, ap, temp, Icon, style, probability, ...rest }: SmallWeatherProps & ViewProps) {
  return (
    <Animated.View
      className='flex-col items-center justify-center px-3.5 py-2'
      style={[{ gap: 5 }, style]}
      {...rest}
      entering={FadeIn.duration(1000)}
    >
      <Medium style={{ color: color.color, fontSize: 14 }} className='mb-1 text-center'>
        {temp}
      </Medium>
      <View>
        <Icon width={22} height={22} color={color.color} />
        {
          <SemiBold className='text-center text-xs text-sky-500' style={{ opacity: probability ? 1 : 0 }}>
            {probability}%
          </SemiBold>
        }
        <Medium style={{ color: color.color, fontSize: 14 }} className='text-center'>
          {time}
          <Medium style={{ color: color.color, fontSize: 11 }} className='text-center'>
            {ap}
          </Medium>
        </Medium>
      </View>
    </Animated.View>
  )
}
