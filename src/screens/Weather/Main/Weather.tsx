import { weatherStore, type TemperatureUnit } from '@/zustand/weatherStore'
import { Calendar03SolidIcon } from '@assets/icons/icons'
import { PaddingBottom, PaddingTop } from '@components/SafePadding'
import { Canvas, LinearGradient, Rect, vec } from '@shopify/react-native-skia'
import { useMutation } from '@tanstack/react-query'
import { WeatherColors } from '@utils/colors'
import { H, W } from '@utils/dimensions'
import { Medium } from '@utils/fonts'
import type { NavProp } from '@utils/types'
import { getDay, screenDelay, tempConverter } from '@utils/utils'
import React, { useCallback, useEffect, useState } from 'react'
import { StatusBar, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Animated, { FadeIn, useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { getWeather } from '../api'
import type { Daily, Weather } from '../types'
import { Icons } from '../utils'
import Header from './components/Header'
import HourlyForecast from './components/HourlyForecast'
import WeatherLabel from './components/WeatherLabel'
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
      <StatusBar backgroundColor='transparent' barStyle={'light-content'} />
      <Canvas style={[{ position: 'absolute', height: height, width: width }]}>
        <Rect x={0} y={0} width={width} height={height}>
          <LinearGradient colors={colors} start={vec(width / 2, 0)} end={vec(width / 2, height)} />
        </Rect>
      </Canvas>
      <View className='px-5'>
        <PaddingTop />
        <Header navigation={navigation} color={color} isPending={isPending} />
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <WeatherTopInfo navigation={navigation} color={color} isPending={isPending} w={w} />
        <HourlyForecast color={color} w={w} hourly={data?.hourly} />
        <DailyForecast color={color} w={w} daily={data?.daily} />
        <PaddingBottom />
      </ScrollView>
    </>
  )
}

type WeatherForecastProps = {
  color: {
    color: string
  }
  w: Weather
  daily: Daily[] | undefined
}

function DailyForecast({ color, w, daily }: WeatherForecastProps) {
  const currentUnit = weatherStore((state) => state.temperatureUnit)
  const timeFormat = weatherStore((state) => state.weatherTimeFormat)
  const [data, setData] = useState<Daily[] | undefined>()

  useEffect(() => {
    const timer = screenDelay(() => setData(daily))
    return () => clearTimeout(timer)
  }, [daily])

  return (
    <Animated.View className='mt-5 px-4' entering={FadeIn.duration(500).delay(100)}>
      <View className='rounded-3xl bg-black/10 pb-2'>
        <WeatherLabel color={color} label='7-Day Forecast' Icon={Calendar03SolidIcon} />
        {!data && <View style={{ height: 14 * 4 * 8 }}></View>}
        <View>{data?.map((d, i) => <DailyWeather key={i} color={color} d={d} currentUnit={currentUnit} />)}</View>
        <Medium className='mt-2 px-5 text-center text-xs opacity-50'>
          Percentage represents the probability of precipitation.
        </Medium>
      </View>
    </Animated.View>
  )
}

type DailyWeatherProps = {
  color: { color: string }
  d: Daily
  currentUnit: TemperatureUnit
}

function DailyWeather({ color, d, currentUnit }: DailyWeatherProps) {
  const Icon = Icons[d.weather[0]!.icon]
  const probability = Math.round((d.pop || 0) * 100)
  return (
    <>
      <Animated.View
        className='flex-row items-center gap-4 px-4 py-2'
        style={{ height: 14 * 4 }}
        entering={FadeIn.duration(500).delay(100)}
      >
        <Medium className='w-1/6 text-base'>{getDay(d.dt)}</Medium>
        <View className='w-1/6 flex-row items-center'>
          <Icon width={21} height={21} color={color.color} style={{ marginRight: 10 }} />
          <Medium className='text-center text-sky-500' style={{ display: probability ? 'flex' : 'none' }}>
            {probability}%
          </Medium>
        </View>
        <View className='flex-1'>
          <View className='flex-row justify-between px-2'>
            <Medium className='text-base'>{tempConverter(d.temp.max, currentUnit, true)}</Medium>
            <View className='flex-1 justify-center px-3'>
              <View className='h-1.5 rounded-full bg-white/10'></View>
            </View>
            <Medium className='text-base'>{tempConverter(d.temp.min, currentUnit, true)}</Medium>
          </View>
        </View>
      </Animated.View>
      <View className='px-2'>
        <View className='w-full bg-white/5' style={{ height: 1 }}></View>
      </View>
    </>
  )
}
