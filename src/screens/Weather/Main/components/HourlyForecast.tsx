import { weatherStore } from '@/zustand/weatherStore'
import { Clock01SolidIcon } from '@assets/icons/icons'
import type { Current, Weather } from '@screens/Weather/types'
import { Icons } from '@screens/Weather/utils'
import { Medium } from '@utils/fonts'
import { getHour, print, screenDelay, tempConverter } from '@utils/utils'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Animated, { FadeIn } from 'react-native-reanimated'
import type { SvgProps } from 'react-native-svg'
import type { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils'

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
    <Animated.View className='mt-5 px-4' entering={FadeIn.duration(500).delay(100)}>
      <View className='rounded-3xl bg-black/10'>
        <View className='flex-row gap-2 px-4 py-3 pb-0.5'>
          <Clock01SolidIcon width={15} height={15} color={color.color} style={{ opacity: 0.5 }} />
          <Medium style={color} className='uppercase opacity-50'>
            Hourly Forecast
          </Medium>
        </View>
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
                temp={w ? tempConverter(w.current.temp, currentUnit) + '°' : '__'}
              />
            </View>
            {data?.map((h, i) => (
              <SmallWeather
                Icon={Icons[h.weather[0]!.icon]}
                key={i}
                time={getHour(h.dt + 3600, timeFormat)}
                color={color}
                temp={h ? tempConverter(h.temp, currentUnit) + '°' : '__'}
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
}

function SmallWeather({ color, time, temp, Icon, style, ...rest }: SmallWeatherProps & ViewProps) {
  return (
    <Animated.View
      className='flex-col items-center justify-center px-3.5 py-2'
      style={[{ gap: 11 }, style]}
      {...rest}
      entering={FadeIn.duration(1000)}
    >
      <Medium style={{ color: color.color }}>{temp}</Medium>
      <Icon width={22} height={22} color={color.color} />
      <Medium style={{ color: color.color, fontSize: 13 }}>{time}</Medium>
    </Animated.View>
  )
}
