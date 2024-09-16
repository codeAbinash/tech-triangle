import { weatherStore } from '@/zustand/weatherStore'
import { Clock01SolidIcon } from '@assets/icons/icons'
import { PaddingBottom } from '@components/SafePadding'
import { Canvas, LinearGradient, Rect, vec } from '@shopify/react-native-skia'
import { useMutation } from '@tanstack/react-query'
import { WeatherColors } from '@utils/colors'
import { H, W } from '@utils/dimensions'
import { Medium } from '@utils/fonts'
import type { NavProp } from '@utils/types'
import { getHour, screenDelay, tempConverter } from '@utils/utils'
import React, { useCallback, useEffect, useState } from 'react'
import { StatusBar, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Animated, { FadeIn, useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import type { SvgProps } from 'react-native-svg'
import type { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils'
import { getWeather } from '../api'
import type { Current, Weather } from '../types'
import { Icons } from '../utils'
import WeatherTopInfo from './components/WeatherTopInfo'

export default function WeatherScreen({ navigation }: NavProp) {
  const currentCity = weatherStore((state) => state.currentCity)
  const lastUpdated = weatherStore((state) => state.lastUpdated)
  const currentWeather = weatherStore((state) => state.currentWeather)
  const setCurrentWeather = weatherStore((state) => state.setCurrentWeather)
  const setLastUpdated = weatherStore((state) => state.setLastUpdated)
  const weatherCacheTime = weatherStore((state) => state.weatherCacheTime)

  const icon = currentWeather?.current.weather[0]!.icon || '02d'
  const theme = WeatherColors[icon]
  const color = theme.color

  const startColor = useSharedValue(theme.gradient[0])
  const endColor = useSharedValue(theme.gradient[1])
  const colors = useDerivedValue(() => [startColor.value, endColor.value], [])

  useEffect(() => {
    startColor.value = withTiming(theme.gradient[0])
    endColor.value = withTiming(theme.gradient[1])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentWeather?.current.weather[0]!.icon])

  const { isPending, data, mutate } = useMutation({
    mutationKey: ['currentWeather'],
    mutationFn: () => fetchResult(),
    onError: (err) => console.log(err),
    onSuccess: setCurrentWeather,
  })
  const w = data || currentWeather

  useEffect(() => {
    if (currentCity) mutate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCity])

  const bottom = useSafeAreaInsets().bottom
  const top = useSafeAreaInsets().top
  const height = H + bottom + top
  const width = W

  const fetchResult = useCallback(async (): Promise<Weather> => {
    const now = new Date().getTime()
    if (now - lastUpdated > weatherCacheTime) {
      setLastUpdated(now)
      console.log('fetching weather')
      return (await getWeather(currentCity?.lat || 0, currentCity?.lon || 0)) as Weather
    }
    console.log('using cache')
    return currentWeather
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentWeather, lastUpdated, weatherCacheTime, currentCity])

  return (
    <>
      <Canvas style={[{ position: 'absolute', height: height, width: width }]}>
        <Rect x={0} y={0} width={width} height={height}>
          <LinearGradient colors={colors} start={vec(width / 2, 0)} end={vec(width / 2, height)} />
        </Rect>
      </Canvas>
      <ScrollView>
        <StatusBar backgroundColor='transparent' barStyle={'light-content'} />
        <WeatherTopInfo navigation={navigation} color={color} isPending={isPending} w={w} />
        <HourlyForecast color={color} w={w} hourly={data?.hourly} />
        <PaddingBottom />
      </ScrollView>
    </>
  )
}

type HourlyWeather = {
  color: {
    color: string
  }
  w: Weather
  hourly: Current[] | undefined
}

function HourlyForecast({ color, w, hourly }: HourlyWeather) {
  const currentUnit = weatherStore((state) => state.temperatureUnit)
  const timeFormat = weatherStore((state) => state.weatherTimeFormat)
  const Icon = Icons[w?.current.weather[0]!.icon || '02d']
  const [data, setData] = useState<Current[] | undefined>()

  useEffect(() => {
    const timer = screenDelay(() => setData(hourly))
    return () => clearTimeout(timer)
  }, [hourly])

  return (
    <Animated.View className='mt-5 px-4' entering={FadeIn.duration(500)}>
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

function SmallWeather({
  color,
  time,
  temp,
  Icon,
  style,
  ...rest
}: {
  color: { color: string }
  time: number | string
  temp: string
  Icon: React.FC<SvgProps>
} & ViewProps) {
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
