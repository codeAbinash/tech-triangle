import { PaddingBottom } from '@components/SafePadding'
import { BackHeader, Gap12, Gap20, iconProps, SettingOption, SettingText, SettingWrapper } from '@components/Settings'
import CelsiusIcon from '@icons/celsius-stroke-rounded.svg'
import CleanIcon from '@icons/clean-stroke-rounded.svg'
import Delete02Icon from '@icons/delete-02-stroke-rounded.svg'
import FahrenheitIcon from '@icons/fahrenheit-stroke-rounded.svg'
import Key01Icon from '@icons/key-01-stroke-rounded.svg'
import MapIcon from '@icons/maps-location-02-stroke-rounded.svg'
import Tick01Icon from '@icons/tick-01-stroke-rounded.svg'
import { PMedium } from '@utils/fonts'
import S, { ls } from '@utils/storage'
import type { NavProp } from '@utils/types'
import { getS, toReadableSize } from '@utils/utils'
import React, { useEffect, useMemo } from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { ACCUWEATHER_API_KEY, OPENWEATHER_API_KEY } from './api'
type CurrentCityT = {
  lat: string
  lon: string
  name: string
} | null

function useSearchHistoryLength() {
  return useMemo(() => {
    const keys = ls.getAllKeys().filter((key) => key.startsWith('WeatherCitySearchResult-'))
    return keys.length
  }, [])
}

function useLocalDataSize(startKey: string) {
  return useMemo(() => {
    const keys = ls.getAllKeys().filter((key) => key.startsWith(startKey))
    let size = 0
    keys.forEach((key) => {
      const value = ls.getString(key)
      if (value) size += value.length
    }, [])
    return Math.round(size)
  }, [])
}

export default function WeatherScienceSettings({ navigation }: NavProp) {
  const currentLocation = S.getMemoParsed<CurrentCityT>('WeatherCurrentCity')
  const searchHistoryLength = useSearchHistoryLength()
  const allWeatherDataSize = useLocalDataSize('Weather')
  useEffect(() => {
    console.log(currentLocation?.name)
  }, [])
  return (
    <View className='flex-1 bg-zinc-100 dark:bg-black'>
      <BackHeader title='Weather Settings' navigation={navigation} />
      <ScrollView contentContainerStyle={{ paddingBottom: 30 }} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <Gap20>
          <SettingText className='pt-3'>
            Weather settings are used to customize the weather data and the app behavior.
          </SettingText>
          <SettingWrapper single>
            <SettingOption
              title='Current City'
              Icon={<MapIcon {...iconProps} />}
              Right={
                <PMedium className='text-accent' style={{ fontSize: 15, flex: 0 }} numberOfLines={1}>
                  {currentLocation?.name || 'Not set'}
                </PMedium>
              }
              onPress={() => navigation.navigate('WeatherSearchCity', { shouldGoBack: true })}
            />
          </SettingWrapper>

          <Gap12>
            <SettingWrapper title='Accuweather API key'>
              <SettingOption title={ACCUWEATHER_API_KEY} Icon={<Key01Icon {...iconProps} />} />
            </SettingWrapper>
            <SettingWrapper title='Openweather API key'>
              <SettingOption title={OPENWEATHER_API_KEY} Icon={<Key01Icon {...iconProps} />} />
            </SettingWrapper>
          </Gap12>

          <SettingWrapper title='Temperature Unit'>
            <SettingOption title='Celsius' Icon={<CelsiusIcon {...iconProps} />} Right={<Tick01Icon {...iconProps} className='text-accent' />} />
            <SettingOption title='Fahrenheit' Icon={<FahrenheitIcon {...iconProps} />} />
          </SettingWrapper>
          <SettingWrapper title='Distance Unit'>
            <SettingOption title='Kilometers' Right={<Tick01Icon {...iconProps} className='text-accent' />} />
            <SettingOption title='Miles' />
          </SettingWrapper>
          <SettingWrapper title='Data Management'>
            <SettingOption
              title='Clear search history'
              Icon={<CleanIcon {...iconProps} />}
              Right={
                <PMedium className='text-accent' style={{ fontSize: 15 }}>
                  {searchHistoryLength} item{getS(searchHistoryLength)}
                </PMedium>
              }
            />
            <SettingOption
              title='Clear all data'
              Icon={<Delete02Icon {...iconProps} />}
              Right={
                <PMedium className='text-accent' style={{ fontSize: 15 }}>
                  {toReadableSize(allWeatherDataSize)}
                </PMedium>
              }
            />
          </SettingWrapper>
        </Gap20>
        <PaddingBottom />
      </ScrollView>
    </View>
  )
}
