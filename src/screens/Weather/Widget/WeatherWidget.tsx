import { weatherStore } from '@/zustand/weatherStore'
import styles, { hw } from '@screens/Home/style'
import { Canvas, LinearGradient, Rect, vec } from '@shopify/react-native-skia'
import { useQuery } from '@tanstack/react-query'
import { WeatherColors } from '@utils/colors'
import { F, Medium, Regular } from '@utils/fonts'
import type { StackNav, Theme } from '@utils/types'
import { tempConverter } from '@utils/utils'
import React, { useEffect } from 'react'
import { ActivityIndicator, TouchableOpacity, View } from 'react-native'
import { useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated'
import { getWeather } from '../api'
import { Icons } from '../utils'

const height = hw.height
const width = hw.width

const WeatherWidget = ({ navigation }: { navigation: StackNav }) => {
  const weatherWidgetIsActive = weatherStore((state) => state.weatherWidgetIsActive)
  const currentCity = weatherStore((state) => state.currentCity)
  const currentUnit = weatherStore((state) => state.temperatureUnit)
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
  const Icon = Icons[icon]
  const color = theme.color

  const startColor = useSharedValue(theme.gradient[0])
  const endColor = useSharedValue(theme.gradient[1])
  const colors = useDerivedValue(() => [startColor.value, endColor.value], [])

  useEffect(() => {
    startColor.value = withTiming(theme.gradient[0])
    endColor.value = withTiming(theme.gradient[1])
  }, [endColor, startColor, theme.gradient])

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
            {isLoading && <ActivityIndicator size={15} color={color.color} />}
          </View>
          <Regular style={[{ fontSize: 50, lineHeight: 70 }, color]}>
            {w ? tempConverter({ temp: w.current?.temp, unit: currentUnit }) : '__'}
            {currentUnit === 'K' ? '' : '°'}
          </Regular>
        </View>
        <View>
          <Icon size={25} color={color.color} />
          <Medium style={[color, F.F11]} className='mt-0.5 capitalize'>
            {w ? w.current?.weather?.[0]!.description : '__'}
          </Medium>
          <Medium style={[color, F.F11]}>
            Feels Like {w ? tempConverter({ temp: w.current?.feels_like, unit: currentUnit }) : '__'}{' '}
            {currentUnit === 'K' ? 'K' : '°' + currentUnit}
          </Medium>
        </View>
      </TouchableOpacity>
    </View>
  )
}

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
