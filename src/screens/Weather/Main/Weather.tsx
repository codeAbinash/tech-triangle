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
import HourlyForecast from './components/HourlyForecast'

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
