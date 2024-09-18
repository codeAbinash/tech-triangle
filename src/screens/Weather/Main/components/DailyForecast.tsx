import { weatherStore, type TemperatureUnit } from '@/zustand/weatherStore'
import { Calendar03SolidIcon } from '@assets/icons/icons'
import Gradient from '@components/Gradient'
import type { Daily } from '@screens/Weather/types'
import { Icons } from '@screens/Weather/utils'
import { Medium } from '@utils/fonts'
import type { Theme } from '@utils/types'
import { getDay, screenDelay, tempConverter } from '@utils/utils'
import React, { useEffect, useMemo, useState } from 'react'
import { View } from 'react-native'
import Animated, { FadeIn } from 'react-native-reanimated'
import WeatherLabel from './WeatherLabel'

type WeatherForecastProps = {
  color: {
    color: string
  }
  daily: Daily[] | undefined
  theme: Theme
}

export default function DailyForecast({ color, daily, theme }: WeatherForecastProps) {
  const currentUnit = weatherStore((state) => state.temperatureUnit)
  const [data, setData] = useState<Daily[] | undefined>()
  const currentTemp = weatherStore((state) => state.currentWeather?.current.temp)
  const weeklyMinMax = useMemo(() => calculateWeeklyMinMax(daily), [daily])
  const dotPosition = useMemo(() => calculateDotPosition(currentTemp, daily && daily[0]), [currentTemp, daily])
  useEffect(() => {
    const timer = screenDelay(() => setData(daily))
    return () => clearTimeout(timer)
  }, [daily])

  return (
    <Animated.View className='mt-3.5 px-4' entering={FadeIn.duration(700).delay(100)}>
      <View className='rounded-3xl bg-black/10 pb-2'>
        <WeatherLabel color={color} label='7-Day Forecast' Icon={Calendar03SolidIcon} />
        {!data && <View style={{ height: 14 * 4 * 8 }}></View>}
        <View>
          {data?.map((d, i) => {
            return (
              <DailyWeather
                day={i === 0 ? 'Today' : getDay(d.dt)}
                dotPosition={i === 0 ? dotPosition : null}
                key={i}
                d={d}
                currentUnit={currentUnit}
                min={weeklyMinMax.min}
                max={weeklyMinMax.max}
                theme={theme}
              />
            )
          })}
        </View>
        <Medium className='mb-1 mt-3 px-5 text-center text-xs opacity-60' style={color}>
          Percentage represents the probability of precipitation.
        </Medium>
      </View>
    </Animated.View>
  )
}

function calculateDotPosition(currentTemp: number | undefined, daily: Daily | undefined) {
  const { min, max } = daily?.temp || { min: 0, max: 0 }
  if (!currentTemp || !min || !max) return null
  return ((currentTemp - min) / (max - min)) * 100
}

function calculateWeeklyMinMax(daily: Daily[] | undefined): { min: number; max: number } {
  if (!daily) return { min: 0, max: 0 }
  const max = Math.max(...daily.map((d) => d.temp.max))
  const min = Math.min(...daily.map((d) => d.temp.min))
  return { min, max }
}

type DailyWeatherProps = {
  d: Daily
  currentUnit: TemperatureUnit
  min: number
  max: number
  day: string
  dotPosition: number | null
  theme: Theme
}
function DailyWeather({ d, day, currentUnit, min, max, dotPosition, theme }: DailyWeatherProps) {
  const Icon = Icons[d.weather[0]!.icon]
  const probability = Math.round((d.pop || 0) * 100)
  const range = max - min
  const width = range !== 0 ? ((d.temp.max - d.temp.min) / range) * 100 : 0
  const left = range !== 0 ? ((d.temp.min - min) / range) * 100 : 0
  const color = theme.color
  return (
    <>
      <Animated.View
        className='flex-row items-center gap-4 px-4 py-2'
        style={{ height: 14 * 4 }}
        entering={FadeIn.duration(500)}
      >
        <Medium className='w-1/6 pl-1 text-base' style={color}>
          {day}
        </Medium>
        <View className='w-1/6 flex-row items-center'>
          <Icon width={21} height={21} color={color.color} style={{ marginRight: 10 }} />
          <Medium className='text-center text-sky-500' style={{ display: probability ? 'flex' : 'none' }}>
            {probability}%
          </Medium>
        </View>
        <View className='flex-1'>
          <View className='flex-row justify-between px-1'>
            <Medium className='text-base' style={color}>
              {tempConverter(d.temp.min, currentUnit, true)}
            </Medium>
            <View className='flex-1 justify-center px-3'>
              <View className='flex-row rounded-full bg-white/10' style={{ width: '100%', height: 6 }}>
                <View className='bg-lime h-10 rounded-full' style={{ width: `${left}%` }}></View>
                <Gradient
                  colors={['#ffffffdd', '#ffffffdd']}
                  className='flex-row items-center overflow-auto rounded-full'
                  style={{ width: `${width}%`, height: 6 }}
                >
                  {dotPosition && <DotPosition dotPosition={dotPosition} theme={theme} />}
                </Gradient>
              </View>
            </View>
            <Medium className='text-base' style={color}>
              {tempConverter(d.temp.max, currentUnit, true)}
            </Medium>
          </View>
        </View>
      </Animated.View>
      <View className='px-2'>
        <View className='w-full bg-white/5' style={{ height: 1 }}></View>
      </View>
    </>
  )
}

function DotPosition({ dotPosition, theme }: { dotPosition: number; theme: Theme }): React.ReactNode {
  return (
    <>
      <View style={{ width: `${dotPosition}%` }}></View>
      <View
        className='items-center justify-center rounded-full bg-red-500'
        style={{ backgroundColor: theme.gradient[1], height: 8, width: 8 }}
      >
        <View
          className='rounded-full bg-white'
          style={{
            width: 3.7,
            height: 3.7,
          }}
        ></View>
      </View>
    </>
  )
}


// 55 to -20
// const TempColor = {
//   scorching: '#841003', // Example: Above 50°C
//   hot: '#fe651c', // Example: 40°C to 50°C
//   mild: '#f7b731', // Example: 20°C to 30°C
//   warm: '#99cc88', // Example: 30°C to 40°C
//   cool: '#61cfdf', // Example: 10°C to 20°C
//   cold: '#416ee4', // Example: 0°C to 10°C
//   freezing: '#310a5c', // Example: Below 0°C
// }
// function generateGradientArray(min: number, max: number) {
//   min = min - 273.15
//   max = max - 273.15
//   const arr: string[] = []
//   const steps = (max - min) / 3

//   for (let i = 0; i < steps; i++) {
//     let temp = min + i
//     console.log(temp)
//     if (temp < 0) {
//       arr.push(TempColor.freezing)
//     } else if (temp < 10) {
//       arr.push(TempColor.cold)
//     } else if (temp < 20) {
//       arr.push(TempColor.cool)
//     } else if (temp < 30) {
//       arr.push(TempColor.mild)
//     } else if (temp < 40) {
//       arr.push(TempColor.warm)
//     } else if (temp < 50) {
//       arr.push(TempColor.hot)
//     } else {
//       arr.push(TempColor.scorching)
//     }
//   }
//   console.log(arr)
//   return arr.reverse()
// }