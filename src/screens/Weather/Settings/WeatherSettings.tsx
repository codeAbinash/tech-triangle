import { devOptStore } from '@/zustand/devOptStore'
import { weatherStore } from '@/zustand/weatherStore'
import {
  City03Icon,
  CleanIcon,
  DashboardSquare02Icon,
  Database02Icon,
  DatabaseRestoreIcon,
  Delete02Icon,
  FastWindIcon,
  Key01Icon,
  MapsLocation02Icon,
  PencilEdit02Icon,
  RulerIcon,
  SortingDownIcon,
  TemperatureIcon,
} from '@assets/icons/icons'
import { Gap12 } from '@components/Gap'
import { Input } from '@components/Input'
import { ic, SettGroup, SettOption, SettText, SettWrapper } from '@components/Settings'
import { Txt, TxtAcc } from '@components/Text'
import { Toggle } from '@components/Toggle'
import { useIsFocused } from '@react-navigation/native'
import { WEATHER_CACHE_TIME } from '@utils/constants'
import { clearStorage, getStorageSize, WeatherCache, WeatherStorage } from '@utils/storage'
import type { NavProp, StackNav } from '@utils/types'
import { getDistanceUnit, getLatitude, getTempName, msToMin, screenDelay, toReadableSize } from '@utils/utils'
import React, { useCallback, useEffect } from 'react'
import { Linking, Text } from 'react-native'

export default function WeatherScienceSettings({ navigation }: NavProp) {
  const currentCity = weatherStore((state) => state.currentCity)
  const setOwApiKey = weatherStore((state) => state.setOpenWeatherApiKey)
  const setAccuApiKey = weatherStore((state) => state.setAccuWeatherApiKey)
  const owApiKey = weatherStore((state) => state.openWeatherApiKey)
  const accuApiKey = weatherStore((state) => state.accuWeatherApiKey)
  const setWeatherWidgetIsActive = weatherStore((state) => state.setWeatherWidgetIsActive)
  const weatherWidgetIsActive = weatherStore((state) => state.weatherWidgetIsActive)
  const removeLocation = weatherStore((state) => state.removeCurrentCityLocation)
  const setWeatherCacheTime = weatherStore((state) => state.setWeatherCacheTime)
  const weatherCacheTime = weatherStore((state) => state.weatherCacheTime)
  const [cacheTimeInputError, setCacheTimeInputError] = React.useState('')
  const dev = devOptStore((state) => state.isEnabled)
  const [searchCache, setSearchCache] = React.useState(0)
  const [weatherSize, setWeatherSize] = React.useState(0)

  const focused = useIsFocused()

  function clearCache() {
    clearStorage(WeatherCache)
    setSearchCache(0)
  }

  const setCacheTime = useCallback((time: string) => {
    let t = parseInt(time)
    if (isNaN(t)) return setCacheTimeInputError('Please enter a valid number')
    if (t < 0) return setCacheTimeInputError('Please enter a number that is greater than 0')
    setWeatherCacheTime(t)
    setCacheTimeInputError('')
  }, [])

  useEffect(() => {
    focused &&
      screenDelay(() => {
        setWeatherSize(getStorageSize(WeatherStorage))
        setSearchCache(getStorageSize(WeatherCache))
      }, 400)
  }, [focused])

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
            arrow
            Right={<Txt>{currentCity?.name || 'Not set'}</Txt>}
            onPress={() => navigation.navigate('WeatherSearchCity', { shouldGoBack: true })}
          />
          <SettOption
            title='Location'
            Icon={<MapsLocation02Icon {...ic} />}
            arrow
            Right={
              <Txt>
                {currentCity?.name
                  ? getLatitude(currentCity?.lat || 0) + ', ' + getLatitude(currentCity?.lon || 0)
                  : 'Not set'}
              </Txt>
            }
            onPress={() => {
              navigation.navigate('WeatherLocation', { shouldGoBack: true })
            }}
          />
          {dev && (
            <>
              <SettOption
                title='Manual edit data'
                Icon={<PencilEdit02Icon {...ic} />}
                arrow
                onPress={() => navigation.navigate('MMKVDataEditor', { key: 'WeatherCurrentCity' })}
              ></SettOption>
              <SettOption
                title='Remove location data'
                className='text-red-500'
                Icon={<Delete02Icon className='text-red-500' {...ic} />}
                onPress={removeLocation}
              />
            </>
          )}
        </SettGroup>
        <SettText>Changing one of the two above settings will automatically override the other.</SettText>
      </Gap12>
      <Units navigation={navigation} />
      <Gap12>
        <SettGroup title='Accuweather API key'>
          <Input
            Icon={<Key01Icon {...ic} />}
            placeholder='Enter Accuweather API key'
            onChangeText={setAccuApiKey}
            defaultValue={accuApiKey}
          />
        </SettGroup>
        <SettText>
          Generate a new API key if you haven't already. Make sure that key is compatible with the{' '}
          <Text
            className='text-accent'
            onPress={() =>
              Linking.openURL(
                'https://developer.accuweather.com/accuweather-locations-api/apis/get/locations/v1/cities/search',
              )
            }
          >
            City Search API
          </Text>{' '}
          from Accuweather.
        </SettText>
        <SettGroup title='OpenweatherMap API key'>
          <Input
            Icon={<Key01Icon {...ic} />}
            placeholder='Enter OpenweatherMap API key'
            onChangeText={setOwApiKey}
            defaultValue={owApiKey}
          />
        </SettGroup>
        <SettText>
          Make sure that the key is compatible with the{' '}
          <Text className='text-accent' onPress={() => Linking.openURL('https://openweathermap.org/api/one-call-api')}>
            One Call 2.5 API
          </Text>{' '}
          from OpenweatherMap.
        </SettText>
      </Gap12>
      {dev && (
        <Gap12>
          <SettGroup title='Weather Cache Time'>
            <Input
              Icon={<DatabaseRestoreIcon {...ic} />}
              Right={<Txt>ms</Txt>}
              defaultValue={weatherCacheTime.toString()}
              onChangeText={(val) => setCacheTime(val)}
              keyboardType='numeric'
            />
          </SettGroup>
          {cacheTimeInputError && <SettText className='text-red-500'>{cacheTimeInputError}</SettText>}

          <SettText>
            The time in minutes to cache the weather data. The default is {msToMin(WEATHER_CACHE_TIME)} minutes.{' '}
            <Text className='text-accent' onPress={() => setWeatherCacheTime(WEATHER_CACHE_TIME)}>
              Reset to default
            </Text>
            .
          </SettText>
        </Gap12>
      )}
      <SettGroup title='Data Management'>
        <SettOption
          title='Clear search cache'
          Icon={<CleanIcon {...ic} />}
          Right={<TxtAcc>{toReadableSize(searchCache)}</TxtAcc>}
          onPress={clearCache}
        />
        <SettOption
          title='Clear all weather data'
          Icon={<Database02Icon {...ic} />}
          Right={<TxtAcc>{toReadableSize(weatherSize)}</TxtAcc>}
        />
      </SettGroup>
    </SettWrapper>
  )
}

function Units({ navigation }: { navigation: StackNav }) {
  const temperatureUnit = weatherStore((state) => state.temperatureUnit)
  const distanceUnit = weatherStore((state) => state.distanceUnit)
  const windSpeedUnit = weatherStore((state) => state.windSpeedUnit)
  const atmPressureUnit = weatherStore((state) => state.atmPressureUnit)
  return (
    <>
      <SettGroup title={'Units'}>
        <SettOption
          arrow
          Icon={<TemperatureIcon {...ic} />}
          title='Temperature Unit'
          Right={<Txt>{getTempName(temperatureUnit)}</Txt>}
          onPress={() => navigation.navigate('TempUnit')}
        />
        <SettOption
          arrow
          title='Distance Unit'
          Right={<Txt>{getDistanceUnit(distanceUnit)}</Txt>}
          Icon={<RulerIcon {...ic} />}
          onPress={() => navigation.navigate('DistanceUnit')}
        />
        <SettOption
          arrow
          title='Wind Speed Unit'
          Right={<Txt>{windSpeedUnit}</Txt>}
          Icon={<FastWindIcon {...ic} />}
          onPress={() => navigation.navigate('WindSpeedUnit')}
        />
        <SettOption
          arrow
          title='Atmospheric Pressure Unit'
          Right={<Txt>{atmPressureUnit}</Txt>}
          Icon={<SortingDownIcon {...ic} />}
          onPress={() => navigation.navigate('AtmPressureUnit')}
        />
      </SettGroup>
    </>
  )
}
