import { weatherStore } from '@/zustand/weatherStore'
import Clock01Icon from '@hugeicons/Clock01Icon'
import { HugeIconProps } from '@hugeicons/constants'
import type { Weather } from '@screens/Weather/types'
import { Icons } from '@screens/Weather/utils'
import { Medium, Regular, SemiBold } from '@utils/fonts'
import { getAp, getHour, tempConverter } from '@utils/utils'
import React from 'react'
import { View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Animated, { FadeIn } from 'react-native-reanimated'
import type { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils'
import WeatherLabel, { Underline } from './WeatherLabel'

type HourlyWeather = {
  color: {
    color: string
  }
  w: Weather
}

const HourlyForecast = React.memo<HourlyWeather>(({ color, w }) => {
  const currentUnit = weatherStore((state) => state.temperatureUnit)
  const timeFormat = weatherStore((state) => state.weatherTimeFormat)
  const Icon = Icons[w?.current?.weather?.[0]!.icon || '02d']
  // const [data, setData] = useState<Current[] | undefined>()
  const data = w?.hourly

  // useEffect(() => {
  //   const timer = screenDelay(() => setData(hourly))
  //   return () => clearTimeout(timer)
  // }, [hourly])

  return (
    <Animated.View className='mt-10 px-4' entering={FadeIn.duration(400)}>
      <View className='rounded-3xl bg-black/10'>
        <WeatherLabel Icon={Clock01Icon} color={color} label='Hourly Forecast' />
        <Underline />
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          contentContainerStyle={{ flexDirection: 'row', paddingBottom: 10, paddingHorizontal: 10 }}
          renderItem={({ item }) => (
            <SmallWeather
              key={item.dt}
              Icon={Icons[item?.weather?.[0]?.icon || '02d']}
              time={getHour(item?.dt || 0 + 3600, timeFormat)}
              color={color}
              ap={getAp(item?.dt || 0, timeFormat)}
              temp={item ? tempConverter({ temp: item?.temp, unit: currentUnit, degree: true }) : '__'}
              probability={Math.round((item?.pop || 0) * 100)}
            />
          )}
          ListHeaderComponent={
            <View style={{ opacity: data ? 1 : 0 }}>
              <SmallWeather
                color={color}
                time='Now'
                Icon={Icon}
                ap=''
                temp={w ? tempConverter({ temp: w.current?.temp, unit: currentUnit, degree: true }) : '__'}
                probability={Math.round((w?.current?.pop || 0) * 100)}
              />
            </View>
          }
          data={data}
        />
      </View>
    </Animated.View>
  )
})

export default HourlyForecast

type SmallWeatherProps = {
  color: {
    color: string
  }
  time: number | string
  temp: string
  Icon: React.FC<HugeIconProps>
  probability: number
  ap: 'AM' | 'PM' | ''
}

function SmallWeather({ color, time, ap, temp, Icon, style, probability, ...rest }: SmallWeatherProps & ViewProps) {
  return (
    <Animated.View
      className='flex-col items-center justify-center px-3.5 py-2'
      style={[{ gap: 5 }, style]}
      {...rest}
      entering={FadeIn.duration(1000)}
    >
      <Medium style={{ color: color.color, fontSize: 11 }} className='mb-1 text-center'>
        {temp}
      </Medium>
      <View>
        <Icon size={22} color={color.color} variant='solid-rounded' />
        {
          <SemiBold className='text-center text-sky-500' style={{ opacity: probability ? 1 : 0, fontSize: 9 }}>
            {probability}%
          </SemiBold>
        }
        <Medium style={{ color: color.color, fontSize: 10 }} className='text-center'>
          {time}
          <Regular style={{ color: color.color, fontSize: 8.5 }} className='text-center'>
            {ap}
          </Regular>
        </Medium>
      </View>
    </Animated.View>
  )
}
