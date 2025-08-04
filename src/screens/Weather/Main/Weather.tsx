import { weatherStore } from '@/zustand/weatherStore'
import { PaddingBottom, PaddingTop } from '@components/SafePadding'
import { Canvas, LinearGradient, Rect, vec } from '@shopify/react-native-skia'
import { useMutation, useQuery } from '@tanstack/react-query'
import { WeatherColors } from '@utils/colors'
import { H, W } from '@utils/dimensions'
import { F, SemiBold } from '@utils/fonts'
import type { NavProp, Theme } from '@utils/types'
import { useCallback, useEffect, useMemo } from 'react'
import { StatusBar, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useDerivedValue, useSharedValue } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { getAQI, getWeather } from '../api'
import type { AQI, Weather } from '../types'
import { calculatePressurePercentage, getAQIStatus, getRainStatus, getVisibilityStatusString } from '../utils'
import AirQualityIndex from './components/AirQualityIndex'
import Cloudiness from './components/Cloudiness'
import DailyForecast from './components/DailyForecast'
import FeelsLike, { getFeelsLikeStatusString } from './components/FeelsLike'
import Header from './components/Header'
import HourlyForecast from './components/HourlyForecast'
import Humidity from './components/Humidity'
import MoonPhase from './components/MoonPhase'
import Precipitation from './components/Precipitation'
import Pressure from './components/Pressure'
import SunRiseSet from './components/SunRiseSet'
import UVIndex from './components/UVIndex'
import Visibility from './components/Visibility'
import WeatherTopInfo from './components/WeatherTopInfo'
import Wind from './components/Wind'

export default function WeatherScreen({ navigation }: NavProp) {
  const currentCity = weatherStore((state) => state.currentCity)
  const lastUpdated = weatherStore((state) => state.lastUpdated)
  const cachedWeather = weatherStore((state) => state.cachedWeather)
  const setCachedWeather = weatherStore((state) => state.setCachedWeather)
  const setLastUpdated = weatherStore((state) => state.setLastUpdated)
  const weatherCacheTime = weatherStore((state) => state.weatherCacheTime)

  const now = new Date().getTime()

  const { isLoading, data } = useQuery({
    queryKey: ['currentWeather', currentCity?.lat, currentCity?.lon],
    queryFn: () => getWeather(currentCity?.lat || 0, currentCity?.lon || 0),
    enabled: now - lastUpdated > weatherCacheTime,
  })

  console.log(cachedWeather)

  useEffect(() => {
    if (data?.daily) {
      setCachedWeather(data)
      setLastUpdated(now)
    }
    // Update the weather data if the query returns new data
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])
  const w = data || cachedWeather
  const icon = w?.current?.weather?.[0]!.icon || '02d'
  const theme = WeatherColors[icon]
  const color = theme.color

  const startColor = useSharedValue(theme.gradient[0])
  const endColor = useSharedValue(theme.gradient[1])
  const colors = useDerivedValue(() => [startColor.value, endColor.value], [])

  const bottom = useSafeAreaInsets().bottom
  const top = useSafeAreaInsets().top
  const height = H + bottom + top
  const width = W

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
        <Header navigation={navigation} color={color} isPending={isLoading} />
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: bottom + 20, gap: 12 }}>
        <WeatherTopInfo color={color} w={w} />
        <HourlyForecast color={color} w={w} />
        <DailyForecast color={color} w={w} theme={theme} />
        <Boxes w={w} theme={theme} />
        <PaddingBottom />
      </ScrollView>
    </>
  )
}

function Boxes({ w, theme }: { w: Weather; theme: Theme }) {
  const currentCity = weatherStore((state) => state.currentCity)
  const lastUpdatedAQI = weatherStore((state) => state.lastUpdatedAQI)
  const currentAQI = weatherStore((state) => state.currentAQI)
  const setLastUpdatedAQI = weatherStore((state) => state.setLastUpdatedAQI)
  const weatherCacheTime = weatherStore((state) => state.weatherCacheTime)
  const setCurrentAQI = weatherStore((state) => state.setCurrentAQI)

  const { mutate, isPending } = useMutation({
    mutationKey: ['currentWeatherAQI'],
    mutationFn: () => getAQI(currentCity?.lat || 0, currentCity?.lon || 0),
    onError: (err) => console.log(err),
    onSuccess: (d: AQI) => {
      setCurrentAQI(d)
      setLastUpdatedAQI(new Date().getTime())
    },
  })
  const aqiStatus = useMemo(() => getAQIStatus(currentAQI?.list?.[0]?.main?.aqi || 0), [currentAQI])
  const pressurePercent = useMemo(() => calculatePressurePercentage(w), [w])
  const feelsLikeStatus = useMemo(
    () => getFeelsLikeStatusString(w?.current?.feels_like || 0, w?.current?.temp || 0),
    [w],
  )
  const visibilityStatus = useMemo(() => getVisibilityStatusString(w?.current?.visibility || 10000), [w])
  const rainStatus = useMemo(() => getRainStatus(w?.daily[0]?.rain), [w])

  const fetchResult = useCallback(async (): Promise<AQI> => {
    const now = new Date().getTime()
    if (now - lastUpdatedAQI > weatherCacheTime) {
      console.log('Fetching AQI from API')
      mutate()
    }
    return currentAQI
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastUpdatedAQI, weatherCacheTime, currentAQI])

  useEffect(() => {
    currentCity && !isPending && fetchResult()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCity])

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', rowGap: 12 }} className='flex-wrap px-4'>
      <FeelsLike theme={theme} feelsLike={w?.current?.feels_like || 0} feelsLikeStatus={feelsLikeStatus} />
      <Humidity theme={theme} humidity={w?.current?.humidity || 0} dew_point={w?.current?.dew_point || 0} />
      <Pressure percent={pressurePercent} pressure={w?.current?.pressure || 0} theme={theme} />
      <UVIndex uvIndex={w?.current?.uvi || 0} theme={theme} />
      <Visibility
        theme={theme}
        visibility={(w?.current?.visibility || 0) / 1000 + ' km'}
        visibilityStatus={visibilityStatus}
      />
      <Wind theme={theme} w={w} />
      <AirQualityIndex aqi={currentAQI?.list?.[0]?.main?.aqi} theme={theme} aqiStatus={aqiStatus} />
      <Cloudiness theme={theme} clouds={w?.current?.clouds || 0} />
      <Precipitation theme={theme} rain={w?.daily[0]?.rain} snow={w?.daily[0]?.snow} status={rainStatus} />
      <SunRiseSet theme={theme} now={w?.current?.dt} sunrise={w?.current?.sunrise} sunset={w?.current?.sunset} />
      <MoonPhase
        theme={theme}
        moonrise={w?.daily[0]?.moonrise}
        moonset={w?.daily[0]?.moonset}
        phase={w?.daily[0]?.moon_phase}
      />
      <View className='w-full items-center justify-center'>
        <SemiBold className='mt-5 text-center opacity-50' style={[F.F10, theme.color]}>
          Powered by OpenWeatherMap
        </SemiBold>
      </View>
    </View>
  )
}
