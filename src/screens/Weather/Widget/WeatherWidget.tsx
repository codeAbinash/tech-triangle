import { weatherStore } from '@/zustand/weatherStore'
import styles, { hw } from '@screens/Home/style'
import { Canvas, LinearGradient, Rect, vec } from '@shopify/react-native-skia'
import { useMutation } from '@tanstack/react-query'
import { WeatherColors } from '@utils/colors'
import { Medium, Regular } from '@utils/fonts'
import type { StackNav, Theme } from '@utils/types'
import { tempConverter } from '@utils/utils'
import React, { useCallback, useEffect } from 'react'
import { ActivityIndicator, TouchableOpacity, View } from 'react-native'
import { useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated'
import { getWeather } from '../api'
import type { Weather } from '../types'
import { Icons } from '../utils'

const WeatherWidget = React.memo<{ navigation: StackNav }>(({ navigation }) => {
  const weatherWidgetIsActive = weatherStore((state) => state.weatherWidgetIsActive)
  const currentCity = weatherStore((state) => state.currentCity)
  const currentUnit = weatherStore((state) => state.temperatureUnit)
  const lastUpdated = weatherStore((state) => state.lastUpdated)
  const currentWeather = weatherStore((state) => state.currentWeather)
  const setCurrentWeather = weatherStore((state) => state.setCurrentWeather)
  const setLastUpdated = weatherStore((state) => state.setLastUpdated)
  const weatherCacheTime = weatherStore((state) => state.weatherCacheTime)
  const height = hw.height
  const width = hw.width

  const icon = currentWeather?.current.weather[0]!.icon || '02d'
  const theme = WeatherColors[icon]
  const Icon = Icons[icon]
  const color = theme.color

  const startColor = useSharedValue(theme.gradient[0])
  const endColor = useSharedValue(theme.gradient[1])
  const colors = useDerivedValue(() => [startColor.value, endColor.value], [])

  useEffect(() => {
    startColor.value = withTiming(theme.gradient[0])
    endColor.value = withTiming(theme.gradient[1])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentWeather?.current.weather[0]!.icon])

  const { isPending, error, data, mutate } = useMutation({
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

  const fetchResult = useCallback(async (): Promise<Weather> => {
    const now = new Date().getTime()
    if (now - lastUpdated > weatherCacheTime) {
      setLastUpdated(now)
      return (await getWeather(currentCity?.lat || 0, currentCity?.lon || 0)) as Weather
    }
    return currentWeather
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentWeather, lastUpdated, weatherCacheTime, currentCity])

  if (!weatherWidgetIsActive) return null
  if (!currentCity)
    return (
      <WeatherWithText
        text={'Tap to set \n up weather'}
        onPress={() => navigation.navigate('WeatherWelcome')}
        theme={theme}
      />
    )
  if (!w) return <WeatherWithText text='Loading...' theme={theme} />

  return (
    <View className='overflow-hidden rounded-3xl' style={{ position: 'relative' }}>
      <Canvas style={[hw, { position: 'absolute' }]}>
        <Rect x={0} y={0} width={hw.width} height={hw.height}>
          <LinearGradient colors={colors} start={vec(width / 2, 0)} end={vec(width / 2, height)} />
        </Rect>
      </Canvas>
      <TouchableOpacity
        style={[hw, styles.shadow]}
        className='justify-between p-4'
        activeOpacity={0.7}
        onPress={() => navigation.navigate('Weather')}
      >
        <View>
          <View className='flex-row justify-between'>
            <Medium className='text-base' style={color}>
              {currentCity.name}
            </Medium>
            {isPending && <ActivityIndicator size={15} color={color.color} />}
          </View>
          <Regular style={[{ fontSize: 60, lineHeight: 83 }, color]}>
            {w ? tempConverter(w.current.temp, currentUnit) : '__'}
            {currentUnit === 'K' ? '' : '°'}
          </Regular>
        </View>
        <View>
          <Icon width={25} height={25} color={color.color} />
          <Medium style={[color]} className='mt-0.5 capitalize'>
            {w ? w.current.weather[0]!.description : '__'}
            {/* {w.current.weather[0].icon} */}
          </Medium>
          {/* <Medium style={[color]}>
            H:{w ? tempConverter(w.daily[0].temp.max, currentUnit) : '__'}° L: {w ? tempConverter(w.daily[0].temp.min, currentUnit) : '__'}°
          </Medium> */}
          <Medium style={[color]}>
            {w ? tempConverter(w.daily[0]!.temp.max, currentUnit) : '__'}
            {currentUnit === 'K' ? currentUnit : '° ' + currentUnit} /{' '}
            {w ? tempConverter(w.daily[0]!.temp.min, currentUnit) : '__'}
            {currentUnit === 'K' ? currentUnit : '° ' + currentUnit}
          </Medium>
        </View>
      </TouchableOpacity>
    </View>
  )
})

export default WeatherWidget

const WeatherWithText = React.memo<{ text: string; onPress?: () => void; theme: Theme }>(({ text, onPress, theme }) => {
  const h = hw.height
  const w = hw.width
  const color = theme.color
  const g = theme.gradient

  return (
    <View className='overflow-hidden rounded-3xl' style={{ position: 'relative' }}>
      <Canvas style={[hw, { position: 'absolute' }]}>
        <Rect x={0} y={0} width={hw.width} height={hw.height}>
          <LinearGradient colors={[g[0], g[1]]} start={vec(w / 2, 0)} end={vec(w / 2, h)} />
        </Rect>
      </Canvas>
      <TouchableOpacity
        style={[hw, styles.shadow]}
        className='items-center justify-center'
        activeOpacity={0.7}
        onPress={onPress}
      >
        <Medium style={color} className='text-center'>
          {text}
        </Medium>
      </TouchableOpacity>
    </View>
  )
})
