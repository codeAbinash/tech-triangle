import { storageStore } from '@/zustand/storageStore'
import { weatherStore } from '@/zustand/weatherStore'
import { Gap12 } from '@components/Gap'
import { Input } from '@components/Input'
import { Check, SettGroup, SettOption, SettText, SettWrapper, ic } from '@components/Settings'
import { RightText } from '@components/Text'
import { Toggle } from '@components/Toggle'
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
import { Linking, Text } from 'react-native'

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
    <SettWrapper navigation={navigation} title='Weather Settings'>
      <Gap12>
        <SettText className='mt-3'>Customize the weather settings to your preference.</SettText>
        <SettGroup title='General Settings'>
          <SettOption
            activeOpacity={0.8}
            title='Weather widget'
            onPress={() => setWeatherWidgetIsActive(!weatherWidgetIsActive)}
            Icon={<DashboardSquare02Icon {...ic} />}
            Right={<Toggle isActive={weatherWidgetIsActive} />}
          />
          <SettOption
            title='Current City'
            Icon={<City03Icon {...ic} />}
            Right={<RightText>{currentCity?.name || 'Not set'}</RightText>}
            onPress={() => navigation.navigate('WeatherSearchCity', { shouldGoBack: true })}
          />
          <SettOption
            title='Current Location'
            Icon={<MapIcon {...ic} />}
            Right={
              <RightText>{currentCity?.name ? getLatitude(currentCity?.lat || 0) + ', ' + getLatitude(currentCity?.lon || 0) : 'Not set'}</RightText>
            }
            onPress={() => {
              navigation.navigate('WeatherLocation', { shouldGoBack: true })
            }}
          />
        </SettGroup>
        <SettText>Changing one of the two above settings will automatically override the other.</SettText>
      </Gap12>
      <Gap12>
        <SettGroup title='Accuweather API key'>
          <Input Icon={<Key01Icon {...ic} />} placeholder='Enter Accuweather API key' onChangeText={setAccuApiKey} defaultValue={accuApiKey} />
        </SettGroup>
        <SettText>
          Generate a new API key if you haven't already. Make sure that key is compatible with the{' '}
          <Text
            className='text-accent'
            onPress={() => Linking.openURL('https://developer.accuweather.com/accuweather-locations-api/apis/get/locations/v1/cities/search')}
          >
            City Search API
          </Text>{' '}
          from Accuweather.
        </SettText>
        <SettGroup title='OpenweatherMap API key'>
          <Input Icon={<Key01Icon {...ic} />} placeholder='Enter OpenweatherMap API key' onChangeText={setOwApiKey} defaultValue={owApiKey} />
        </SettGroup>
        <SettText>
          Make sure that the key is compatible with the{' '}
          <Text className='text-accent' onPress={() => Linking.openURL('https://openweathermap.org/api/one-call-api')}>
            One Call 2.5 API
          </Text>{' '}
          from OpenweatherMap.
        </SettText>
      </Gap12>

      <SettGroup title={'Temperature Unit'}>
        <SettOption
          title='Celsius'
          Icon={<CelsiusIcon {...ic} />}
          Right={<Check checked={temperatureUnit === 'C'} />}
          onPress={() => setTmpUnit('C')}
        />
        <SettOption
          title='Fahrenheit'
          Icon={<FahrenheitIcon {...ic} />}
          Right={<Check checked={temperatureUnit === 'F'} />}
          onPress={() => setTmpUnit('F')}
        />
      </SettGroup>
      <SettGroup title='Distance Unit'>
        <SettOption title='Meter' Right={<Check checked={distanceUnit === 'm'} />} onPress={() => setDistUnit('m')} />
        <SettOption title='Feet' Right={<Check checked={distanceUnit === 'ft'} />} onPress={() => setDistUnit('ft')} />
      </SettGroup>
      <SettGroup title='Data Management'>
        <SettOption
          title='Clear search cache'
          Icon={<CleanIcon {...ic} />}
          Right={<RightText>{toReadableSize(searchCache)}</RightText>}
          onPress={clearCache}
        />
        <SettOption title='Clear all weather data' Icon={<DatabaseIcon {...ic} />} Right={<RightText>{toReadableSize(weatherSize)}</RightText>} />
      </SettGroup>
    </SettWrapper>
  )
}
