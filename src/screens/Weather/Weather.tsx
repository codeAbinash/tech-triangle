import { PlusSignIcon, Setting07Icon } from '@assets/icons/icons'
import { PaddingBottom, PaddingTop } from '@components/SafePadding'
import { Canvas, LinearGradient, Rect, vec } from '@shopify/react-native-skia'
import { H, W } from '@utils/dimensions'
import { Light, Medium } from '@utils/fonts'
import type { NavProp, StackNav } from '@utils/types'
import React, { useCallback, useEffect } from 'react'
import { StatusBar, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDerivedValue } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { weatherStore } from '@/zustand/weatherStore'
import { useMutation } from '@tanstack/react-query'
import { tempConverter } from '@utils/utils'
import { getWeather } from './api'
import { themeList } from './Widget/themes'
import type { Weather } from './types'

export default function WeatherScreen({ navigation }: NavProp) {
  const currentCity = weatherStore((state) => state.currentCity)
  const currentUnit = weatherStore((state) => state.temperatureUnit)
  const lastUpdated = weatherStore((state) => state.lastUpdated)
  const currentWeather = weatherStore((state) => state.currentWeather)
  const setCurrentWeather = weatherStore((state) => state.setCurrentWeather)
  const setLastUpdated = weatherStore((state) => state.setLastUpdated)
  const weatherCacheTime = weatherStore((state) => state.weatherCacheTime)
  const theme = themeList.at(0)!
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
      return (await getWeather(currentCity?.lat || 0, currentCity?.lon || 0)) as Weather
    }
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
        <Header navigation={navigation} color={color} />
        <Medium className='mt-7 text-center' style={[color, { fontSize: 25 }]}>
          {currentCity?.name}
        </Medium>
        <View className='flex-row justify-center'>
          <Light className='mt-2 items-start justify-start pl-2 text-center' style={[color, { lineHeight: 180, fontSize: 150 }]}>
            {w ? tempConverter(w.current.temp, currentUnit) : '__'}
          </Light>
          <Medium style={[color, { fontSize: 60 }]}>°</Medium>
        </View>
        <Medium className='-mt-4 text-center text-lg capitalize' style={color}>
          {w ? w.current.weather[0].description : '__'}
        </Medium>
        <Medium className='mt-0.5 text-center text-base' style={color}>
          {w ? tempConverter(w.daily[0].temp.max, currentUnit) : '__'}° {currentUnit} / {w ? tempConverter(w.daily[0].temp.min, currentUnit) : '__'}°{' '}
          {currentUnit}
        </Medium>
        <PaddingBottom />
      </View>
    </>
  )
}

function Header({ navigation, color }: { navigation: StackNav; color: { color: string } }) {
  // return <View className='h-20 w-full'></View>
  return (
    <View className='flex-row items-center justify-between'>
      <TouchableOpacity className='py-3 pr-3' onPress={() => navigation.navigate('WeatherSearchCity', { shouldGoBack: true })}>
        <PlusSignIcon width={25} height={25} color={color.color} />
      </TouchableOpacity>
      <TouchableOpacity className='py-3 pl-3' onPress={() => navigation.navigate('WeatherSettings')}>
        <Setting07Icon width={24} height={24} color={color.color} />
      </TouchableOpacity>
    </View>
  )
}
