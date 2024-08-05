import { useWeatherSearchHistory, useWeatherSettings } from '@/zustand/store'
import { PaddingBottom } from '@components/SafePadding'
import { BackHeader, Check, Gap12, Gap20, iconProps, SettingOption, SettingOptionInput, SettingText, SettingWrapper } from '@components/Settings'
import CelsiusIcon from '@icons/celsius-stroke-rounded.svg'
import CleanIcon from '@icons/clean-stroke-rounded.svg'
import Delete02Icon from '@icons/delete-02-stroke-rounded.svg'
import FahrenheitIcon from '@icons/fahrenheit-stroke-rounded.svg'
import Key01Icon from '@icons/key-01-stroke-rounded.svg'
import MapIcon from '@icons/maps-location-02-stroke-rounded.svg'
import { PMedium } from '@utils/fonts'
import type { NavProp } from '@utils/types'
import { getS, toReadableSize } from '@utils/utils'
import React from 'react'
import { Linking, Text, View, type NativeSyntheticEvent, type TextInputTextInputEventData } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default function WeatherScienceSettings({ navigation }: NavProp) {
  const currentCity = useWeatherSettings((state) => state.currentCity)
  const searchHistoryLength = useWeatherSearchHistory((state) => state.searchHistoryLength)
  const allWeatherDataSize = useWeatherSettings((state) => state.allWeatherDataSize)
  const temperatureUnit = useWeatherSettings((state) => state.temperatureUnit)
  const setTmpUnit = useWeatherSettings((state) => state.setTemperatureUnit)
  const distanceUnit = useWeatherSettings((state) => state.distanceUnit)
  const setDistUnit = useWeatherSettings((state) => state.setDistanceUnit)
  const setOwApiKey = useWeatherSettings((state) => state.setOpenWeatherApiKey)
  const setAccuApiKey = useWeatherSettings((state) => state.setAccuWeatherApiKey)
  const owApiKey = useWeatherSettings((state) => state.openWeatherApiKey)
  const accuApiKey = useWeatherSettings((state) => state.accuWeatherApiKey)

  return (
    <View className='flex-1 bg-zinc-100 dark:bg-black'>
      <BackHeader title='Weather Settings' navigation={navigation} />
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <SettingText className='py-4'>Customize the weather settings to your preference.</SettingText>
        <Gap20>
          <SettingWrapper single>
            <SettingOption
              title='Current City'
              Icon={<MapIcon {...iconProps} />}
              Right={
                <PMedium className='text-accent' style={{ fontSize: 15, flex: 0 }} numberOfLines={1}>
                  {currentCity?.name || 'Not set'}
                </PMedium>
              }
              onPress={() => navigation.navigate('WeatherSearchCity', { shouldGoBack: true })}
            />
          </SettingWrapper>

          <Gap12>
            <SettingWrapper title='Accuweather API key'>
              <SettingOptionInput
                Icon={<Key01Icon {...iconProps} />}
                placeholder='Enter Accuweather API key'
                onChangeText={setAccuApiKey}
                defaultValue={accuApiKey}
              />
            </SettingWrapper>
            <SettingText>
              You can get your API key from the{' '}
              <Text className='text-accent' onPress={() => Linking.openURL('https://developer.accuweather.com/')}>
                developer.accuweather.com
              </Text>
              .
            </SettingText>
            <SettingWrapper title='OpenweatherMap API key'>
              <SettingOptionInput
                Icon={<Key01Icon {...iconProps} />}
                placeholder='Enter OpenweatherMap API key'
                onChangeText={setOwApiKey}
                defaultValue={owApiKey}
              />
            </SettingWrapper>
            <SettingText>
              You can get your API key from the{' '}
              <Text className='text-accent' onPress={() => Linking.openURL('https://openweathermap.org/api')}>
                openweathermap.org/api
              </Text>
              .
            </SettingText>
          </Gap12>

          <SettingWrapper title={'Temperature Unit'}>
            <SettingOption
              title='Celsius'
              Icon={<CelsiusIcon {...iconProps} />}
              Right={<Check checked={temperatureUnit === 'C'} />}
              onPress={() => setTmpUnit('C')}
            />
            <SettingOption
              title='Fahrenheit'
              Icon={<FahrenheitIcon {...iconProps} />}
              Right={<Check checked={temperatureUnit === 'F'} />}
              onPress={() => setTmpUnit('F')}
            />
          </SettingWrapper>
          <SettingWrapper title='Distance Unit'>
            <SettingOption title='Meter' Right={<Check checked={distanceUnit === 'm'} />} onPress={() => setDistUnit('m')} />
            <SettingOption title='Feet' Right={<Check checked={distanceUnit === 'ft'} />} onPress={() => setDistUnit('ft')} />
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
              onPress={() => navigation.navigate('ClearWeatherSearchHistory')}
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
