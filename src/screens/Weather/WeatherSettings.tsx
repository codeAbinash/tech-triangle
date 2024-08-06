import { storageStore } from '@/zustand/storageStore'
import { weatherStore } from '@/zustand/weatherStore'
import KeyboardAvoidingContainer from '@components/KeyboardAvoidingContainer'
import { PaddingBottom } from '@components/SafePadding'
import {
  BackHeader,
  Check,
  Gap12,
  Gap20,
  iconProps,
  RightText,
  SettingOption,
  SettingOptionInput,
  SettingText,
  SettingWrapper,
  Toggle,
} from '@components/Settings'
import CelsiusIcon from '@icons/celsius-stroke-rounded.svg'
import City03Icon from '@icons/city-03-stroke-rounded.svg'
import CleanIcon from '@icons/clean-stroke-rounded.svg'
import DashboardSquare02Icon from '@icons/dashboard-square-02-stroke-rounded.svg'
import DatabaseIcon from '@icons/database-02-stroke-rounded.svg'
import FahrenheitIcon from '@icons/fahrenheit-stroke-rounded.svg'
import Key01Icon from '@icons/key-01-stroke-rounded.svg'
import MapIcon from '@icons/maps-location-02-stroke-rounded.svg'
import type { NavProp } from '@utils/types'
import { getLatitude, toReadableSize } from '@utils/utils'
import React from 'react'
import { Linking, Text, View } from 'react-native'

export default function WeatherScienceSettings({ navigation }: NavProp) {
  const currentCity = weatherStore((state) => state.currentCity)
  const temperatureUnit = weatherStore((state) => state.temperatureUnit)
  const setTmpUnit = weatherStore((state) => state.setTemperatureUnit)
  const distanceUnit = weatherStore((state) => state.distanceUnit)
  const setDistUnit = weatherStore((state) => state.setDistanceUnit)
  const setOwApiKey = weatherStore((state) => state.setOpenWeatherApiKey)
  const setAccuApiKey = weatherStore((state) => state.setAccuWeatherApiKey)
  const owApiKey = weatherStore((state) => state.openWeatherApiKey)
  const accuApiKey = weatherStore((state) => state.accuWeatherApiKey)
  const setWeatherWidgetIsActive = weatherStore((state) => state.setWeatherWidgetIsActive)
  const weatherWidgetIsActive = weatherStore((state) => state.weatherWidgetIsActive)

  const searchCache = storageStore((state) => state.weatherCache)
  const weatherSize = storageStore((state) => state.weather)
  const clearCache = storageStore((state) => state.clearWeatherCache)

  return (
    <View className='flex-1 bg-zinc-100 dark:bg-black'>
      <BackHeader title='Weather Settings' navigation={navigation} />
      <KeyboardAvoidingContainer
        contentContainerStyle={{ paddingBottom: 40 }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <SettingText className='py-3'>Customize the weather settings to your preference.</SettingText>
        <Gap20>
          <Gap12>
            <SettingWrapper title='General Settings'>
              <SettingOption
                activeOpacity={0.8}
                title='Weather widget'
                onPress={() => setWeatherWidgetIsActive(!weatherWidgetIsActive)}
                Icon={<DashboardSquare02Icon {...iconProps} />}
                Right={<Toggle isActive={weatherWidgetIsActive} />}
              />
              <SettingOption
                title='Current City'
                Icon={<City03Icon {...iconProps} />}
                Right={<RightText>{currentCity?.name || 'Not set'}</RightText>}
                onPress={() => navigation.navigate('WeatherSearchCity', { shouldGoBack: true })}
              />
              <SettingOption
                title='Current Location'
                Icon={<MapIcon {...iconProps} />}
                Right={
                  <RightText>
                    {currentCity?.name ? getLatitude(currentCity?.lat || 0) + ', ' + getLatitude(currentCity?.lon || 0) : 'Not set'}
                  </RightText>
                }
                onPress={() => {
                  navigation.navigate('WeatherLocation', { shouldGoBack: true })
                }}
              />
            </SettingWrapper>
            <SettingText>Changing one of the two above settings will automatically override the other.</SettingText>
          </Gap12>
          <Gap12>
            <SettingWrapper single title='Accuweather API key'>
              <SettingOptionInput
                Icon={<Key01Icon {...iconProps} />}
                placeholder='Enter Accuweather API key'
                onChangeText={setAccuApiKey}
                defaultValue={accuApiKey}
              />
            </SettingWrapper>
            <SettingText>
              Generate a new API key if you haven't already. Make sure that key is compatible with the{' '}
              <Text
                className='text-accent'
                onPress={() => Linking.openURL('https://developer.accuweather.com/accuweather-locations-api/apis/get/locations/v1/cities/search')}
              >
                City Search API
              </Text>{' '}
              from Accuweather.
            </SettingText>
            <SettingWrapper title='OpenweatherMap API key' single>
              <SettingOptionInput
                Icon={<Key01Icon {...iconProps} />}
                placeholder='Enter OpenweatherMap API key'
                onChangeText={setOwApiKey}
                defaultValue={owApiKey}
              />
            </SettingWrapper>
            <SettingText>
              Make sure that the key is compatible with the{' '}
              <Text className='text-accent' onPress={() => Linking.openURL('https://openweathermap.org/api/one-call-api')}>
                One Call 2.5 API
              </Text>{' '}
              from OpenweatherMap.
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
              title='Clear search cache'
              Icon={<CleanIcon {...iconProps} />}
              Right={<RightText>{toReadableSize(searchCache)}</RightText>}
              onPress={clearCache}
            />
            <SettingOption
              title='Clear all weather data'
              Icon={<DatabaseIcon {...iconProps} />}
              Right={<RightText>{toReadableSize(weatherSize)}</RightText>}
            />
          </SettingWrapper>
        </Gap20>
        <PaddingBottom />
      </KeyboardAvoidingContainer>
    </View>
  )
}
