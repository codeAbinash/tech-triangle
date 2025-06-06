import { weatherStore } from '@/zustand/weatherStore'
import styles, { hw } from '@screens/Home/style'
import { Canvas, LinearGradient, Rect, vec } from '@shopify/react-native-skia'
import { useMutation } from '@tanstack/react-query'
import { WeatherColors } from '@utils/colors'
import { F, Medium, Regular } from '@utils/fonts'
import type { StackNav, Theme } from '@utils/types'
import { tempConverter } from '@utils/utils'
import React, { useCallback, useEffect } from 'react'
import { ActivityIndicator, TouchableOpacity, View } from 'react-native'
import { useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated'
import { getWeather } from '../api'
import { Icons } from '../utils'

const WeatherWidget = React.memo<{ navigation: StackNav }>(({ navigation }) => {
  const weatherWidgetIsActive = weatherStore((state) => state.weatherWidgetIsActive)
  const { currentCity, currentUnit, lastUpdated, currentWeather, setCurrentWeather, setLastUpdated, weatherCacheTime } =
    weatherStore((state) => ({
      currentCity: state.currentCity,
      currentUnit: state.temperatureUnit,
      lastUpdated: state.lastUpdated,
      currentWeather: state.currentWeather,
      setCurrentWeather: state.setCurrentWeather,
      setLastUpdated: state.setLastUpdated,
      weatherCacheTime: state.weatherCacheTime,
    }))

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
    mutationFn: () => getWeather(currentCity?.lat || 0, currentCity?.lon || 0),
    onError: (err) => console.log(err),
    onSuccess: (d) => {
      setCurrentWeather(d)
      setLastUpdated(new Date().getTime())
    },
  })
  const w = data || currentWeather

  const fetchResult = useCallback(async () => {
    const now = new Date().getTime()
    if (now - lastUpdated > weatherCacheTime) {
      console.log('Fetching from API')
      mutate()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastUpdated, weatherCacheTime, currentWeather])

  useEffect(() => {
    currentCity && fetchResult()
  }, [currentCity, fetchResult])

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
        className='justify-between p-4 pb-3.5'
        activeOpacity={0.7}
        onPress={() => navigation.navigate('Weather')}
      >
        <View>
          <View className='flex-row justify-between'>
            <Medium className='text-sm' style={color}>
              {currentCity.name}
            </Medium>
            {isPending && <ActivityIndicator size={15} color={color.color} />}
          </View>
          <Regular style={[{ fontSize: 45, lineHeight: 65 }, color]}>
            {w ? tempConverter({ temp: w.current.temp, unit: currentUnit }) : '__'}
            {currentUnit === 'K' ? '' : '°'}
          </Regular>
        </View>
        <View>
          <Icon size={25} color={color.color} />
          <Medium style={[color, F.F11]} className='mt-0.5 capitalize'>
            {w ? w.current.weather[0]!.description : '__'}
            {/* {w.current.weather[0].icon} */}
          </Medium>
          <Medium style={[color, F.F11]}>
            Feels Like {w ? tempConverter({ temp: w.current.feels_like, unit: currentUnit }) : '__'}{' '}
            {currentUnit === 'K' ? 'K' : '°' + currentUnit}
            {/* {w ? tempConverter({ temp: w?.daily?.[0]?.temp?.min, unit: currentUnit, degree: true }) : '__'} /{' '} */}
            {/* {w ? tempConverter({ temp: w?.daily?.[0]?.temp?.max, unit: currentUnit, degree: true }) : '__'} */}
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
        <Medium style={color} className='text-center text-xs'>
          {text}
        </Medium>
      </TouchableOpacity>
    </View>
  )
})
