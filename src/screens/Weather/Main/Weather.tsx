import { weatherStore } from '@/zustand/weatherStore'
import { PaddingBottom, PaddingTop } from '@components/SafePadding'
import { Canvas, LinearGradient, Rect, vec } from '@shopify/react-native-skia'
import { useMutation } from '@tanstack/react-query'
import { WeatherColors } from '@utils/colors'
import { H, W } from '@utils/dimensions'
import type { NavProp, Theme } from '@utils/types'
import React, { useCallback, useEffect, useMemo } from 'react'
import { StatusBar, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { getWeather } from '../api'
import type { Weather } from '../types'
import DailyForecast from './components/DailyForecast'
import FeelsLike, { getFeelsLikeStatusString } from './components/FeelsLike'
import Header from './components/Header'
import HourlyForecast from './components/HourlyForecast'
import Humidity from './components/Humidity'
import Pressure, { calculatePressurePercentage } from './components/Pressure'
import Visibility, { getVisibilityStatusString } from './components/Visibility'
import WeatherTopInfo from './components/WeatherTopInfo'

export default function WeatherScreen({ navigation }: NavProp) {
  const { currentCity, lastUpdated, currentWeather, setCurrentWeather, setLastUpdated, weatherCacheTime } =
    weatherStore((state) => ({
      currentCity: state.currentCity,
      lastUpdated: state.lastUpdated,
      currentWeather: state.currentWeather,
      setCurrentWeather: state.setCurrentWeather,
      setLastUpdated: state.setLastUpdated,
      weatherCacheTime: state.weatherCacheTime,
    }))

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
      <ScrollView contentContainerStyle={{ paddingBottom: 100, gap: 12 }}>
        <WeatherTopInfo color={color} w={w} />
        <HourlyForecast color={color} w={w} hourly={data?.hourly} />
        <DailyForecast color={color} daily={data?.daily} theme={theme} />
        <Boxes w={w} theme={theme} />
        <PaddingBottom />
      </ScrollView>
    </>
  )
}

function Boxes({ w, theme }: { w: Weather; theme: Theme }) {
  let pressurePercent = useMemo(() => calculatePressurePercentage(w), [w])
  let feelsLikeStatus = useMemo(() => getFeelsLikeStatusString(w?.current.feels_like || 0, w?.current.temp || 0), [w])
  let visibilityStatus = useMemo(() => getVisibilityStatusString(w?.current.visibility || 10000), [w])
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', rowGap: 12 }} className='flex-wrap px-4'>
      <FeelsLike theme={theme} feelsLike={w?.current.feels_like || 0} feelsLikeStatus={feelsLikeStatus} />
      <Humidity theme={theme} humidity={w?.current.humidity || 0} dew_point={w?.current.dew_point || 0} />
      <Pressure percent={pressurePercent} pressure={w?.current.pressure || 0} theme={theme} />
      <Visibility
        theme={theme}
        visibility={(w?.current.visibility || 0) / 1000 + ' km'}
        visibilityStatus={visibilityStatus}
      />
    </View>
  )
}
