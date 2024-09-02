import { weatherStore } from '@/zustand/weatherStore'
import { PlusSignIcon, Setting07Icon } from '@assets/icons/icons'
import { PaddingBottom, PaddingTop } from '@components/SafePadding'
import { Canvas, LinearGradient, Rect, vec } from '@shopify/react-native-skia'
import { useMutation } from '@tanstack/react-query'
import { WeatherColors } from '@utils/colors'
import { H, W } from '@utils/dimensions'
import { Light, Medium } from '@utils/fonts'
import type { NavProp, StackNav } from '@utils/types'
import { tempConverter } from '@utils/utils'
import React, { useCallback, useEffect } from 'react'
import { ActivityIndicator, StatusBar, TouchableOpacity, View } from 'react-native'
import { useDerivedValue } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { getWeather } from './api'
import type { Weather } from './types'

export default function WeatherScreen({ navigation }: NavProp) {
  const currentCity = weatherStore((state) => state.currentCity)
  const currentUnit = weatherStore((state) => state.temperatureUnit)
  const lastUpdated = weatherStore((state) => state.lastUpdated)
  const currentWeather = weatherStore((state) => state.currentWeather)
  const setCurrentWeather = weatherStore((state) => state.setCurrentWeather)
  const setLastUpdated = weatherStore((state) => state.setLastUpdated)
  const weatherCacheTime = weatherStore((state) => state.weatherCacheTime)
  const theme = WeatherColors[currentWeather?.current.weather[0].icon]
  // const theme = WeatherColors['01n']
  const color = theme.color
  const gradient = useDerivedValue(() => theme.gradient, [])

  const bottom = useSafeAreaInsets().bottom
  const top = useSafeAreaInsets().top
  const height = H + bottom + top
  const width = W

  const { isPending, error, data, mutate } = useMutation({
    mutationKey: ['currentWeather'],
    mutationFn: () => fetchResult(),
    onError: (err) => console.log(err),
    onSuccess: (_) => setCurrentWeather(_),
  })
  const w = data || currentWeather
  useEffect(() => mutate(), [currentCity])

  const fetchResult = useCallback(async (): Promise<Weather> => {
    const now = new Date().getTime()
    if (now - lastUpdated > weatherCacheTime) {
      setLastUpdated(now)
      console.log('fetching weather')
      return (await getWeather(currentCity?.lat || 0, currentCity?.lon || 0)) as Weather
    }
    console.log('using cache')
    return currentWeather
  }, [currentWeather, lastUpdated, weatherCacheTime, currentCity])

  return (
    <>
      <StatusBar backgroundColor='transparent' barStyle={'light-content'} />
      <Canvas style={[{ position: 'absolute', height: height, width: width }]}>
        <Rect x={0} y={0} width={width} height={height}>
          <LinearGradient colors={gradient} start={vec(width / 2, 0)} end={vec(width / 2, height)} />
        </Rect>
      </Canvas>
      <View className='flex-1 px-5'>
        <PaddingTop />
        <Header navigation={navigation} color={color} isPending={isPending} />
        <Medium className='mt-7 text-center' style={[color, { fontSize: 25 }]}>
          {currentCity?.name}
        </Medium>
        <View className='flex-row justify-center'>
          <Light
            className='mt-2 items-start justify-start pl-2 text-center'
            style={[color, { lineHeight: 180, fontSize: 150 }]}
          >
            {w ? tempConverter(w.current.temp, currentUnit) : '__'}
          </Light>
          <Medium style={[color, { fontSize: 60 }]}>{currentUnit === 'K' ? '' : '°'}</Medium>
        </View>
        <Medium className='-mt-4 text-center text-lg capitalize' style={color}>
          {w ? w.current.weather[0].description : '__'}
        </Medium>
        <Medium className='mt-0.5 text-center text-base' style={color}>
          {w ? tempConverter(w.daily[0].temp.max, currentUnit) : '__'}
          {currentUnit === 'K' ? currentUnit : '° ' + currentUnit} /{' '}
          {w ? tempConverter(w.daily[0].temp.min, currentUnit) : '__'}
          {currentUnit === 'K' ? currentUnit : '° ' + currentUnit}
        </Medium>
        <PaddingBottom />
      </View>
    </>
  )
}

function Header({
  navigation,
  color,
  isPending,
}: {
  navigation: StackNav
  color: { color: string }
  isPending: boolean
}) {
  return (
    <View className='flex-row items-center justify-between'>
      <TouchableOpacity
        className='py-3 pr-3'
        onPress={() => navigation.navigate('WeatherSearchCity', { shouldGoBack: true })}
      >
        <PlusSignIcon width={25} height={25} color={color.color} />
      </TouchableOpacity>
      <View>
        {isPending && (
          <View className='flex-row items-center justify-between gap-2'>
            <ActivityIndicator size={13} color={color.color} />
            <Medium style={[color, { fontSize: 13 }]}>Updating...</Medium>
          </View>
        )}
      </View>
      <TouchableOpacity className='py-3 pl-3' onPress={() => navigation.navigate('WeatherSettings')}>
        <Setting07Icon width={24} height={24} color={color.color} />
      </TouchableOpacity>
    </View>
  )
}
