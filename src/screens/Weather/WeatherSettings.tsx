import { devOptStore } from '@/zustand/devOptStore'
import { weatherStore } from '@/zustand/weatherStore'
import {
  CelsiusIcon,
  City03Icon,
  CleanIcon,
  CloudSlowWindIcon,
  DashboardSquare02Icon,
  Database02Icon,
  DatabaseRestoreIcon,
  Delete02Icon,
  FahrenheitIcon,
  FastWindIcon,
  Key01Icon,
  MapsLocation02Icon,
  PencilEdit02Icon,
  Road02Icon,
  RulerIcon,
  SlowWindsIcon,
  SunCloudFastWind01Icon,
  WindPowerIcon,
} from '@assets/icons/icons'
import { Gap12 } from '@components/Gap'
import { Input } from '@components/Input'
import { Check, ic, SettGroup, SettOption, SettText, SettWrapper } from '@components/Settings'
import { Txt, TxtAcc } from '@components/Text'
import { Toggle } from '@components/Toggle'
import { useIsFocused } from '@react-navigation/native'
import { WEATHER_CACHE_TIME } from '@utils/constants'
import { clearStorage, getStorageSize, WeatherCache, WeatherStorage } from '@utils/storage'
import type { NavProp } from '@utils/types'
import { getLatitude, msToMin, screenDelay, toReadableSize } from '@utils/utils'
import React, { useCallback, useEffect } from 'react'
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
  const removeLocation = weatherStore((state) => state.removeCurrentCityLocation)
  const windSpeedUnit = weatherStore((state) => state.windSpeedUnit)
  const setWindSpeedUnit = weatherStore((state) => state.setWindSpeedUnit)
  const atmPressureUnit = weatherStore((state) => state.atmPressureUnit)
  const setAtmPressureUnit = weatherStore((state) => state.setAtmPressureUnit)
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
            Right={<Txt>{currentCity?.name ? getLatitude(currentCity?.lat || 0) + ', ' + getLatitude(currentCity?.lon || 0) : 'Not set'}</Txt>}
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
        <SettOption title='Meter' Right={<Check checked={distanceUnit === 'm'} />} onPress={() => setDistUnit('m')} Icon={<RulerIcon {...ic} />} />
        <SettOption title='Feet' Right={<Check checked={distanceUnit === 'ft'} />} onPress={() => setDistUnit('ft')} Icon={<Road02Icon {...ic} />} />
      </SettGroup>
      <SettGroup title='Wind Speed Unit'>
        <SettOption
          title='Kilometer per hour (kph)'
          Right={<Check checked={windSpeedUnit === 'kph'} />}
          Icon={<FastWindIcon {...ic} />}
          onPress={() => setWindSpeedUnit('kph')}
        />
        <SettOption
          title='Miles per hour (mph)'
          Right={<Check checked={windSpeedUnit === 'mph'} />}
          Icon={<SlowWindsIcon {...ic} />}
          onPress={() => setWindSpeedUnit('mph')}
        />
        <SettOption
          title='Meter per second (m/s)'
          Right={<Check checked={windSpeedUnit === 'm/s'} />}
          Icon={<SunCloudFastWind01Icon {...ic} />}
          onPress={() => setWindSpeedUnit('m/s')}
        />
        <SettOption
          title='Knot (kn)'
          Right={<Check checked={windSpeedUnit === 'kn'} />}
          Icon={<CloudSlowWindIcon {...ic} />}
          onPress={() => setWindSpeedUnit('kn')}
        />
        <SettOption
          title='Beaufort Scale'
          Right={<Check checked={windSpeedUnit === 'bft'} />}
          Icon={<WindPowerIcon {...ic} />}
          onPress={() => setWindSpeedUnit('bft')}
        />
      </SettGroup>
      <SettGroup title='Atmospheric Pressure Unit'>
        <SettOption title='Hectopascal (hPa)' Right={<Check checked={atmPressureUnit === 'hPa'} />} onPress={() => setAtmPressureUnit('hPa')} />
        <SettOption
          title='Inches of mercury (inHg)'
          Right={<Check checked={atmPressureUnit === 'inHg'} />}
          onPress={() => setAtmPressureUnit('inHg')}
        />
        <SettOption
          title='Millimeter of mercury (mmHg)'
          Right={<Check checked={atmPressureUnit === 'mmHg'} />}
          onPress={() => setAtmPressureUnit('mmHg')}
        />
        <SettOption title='Millibar (mbar)' Right={<Check checked={atmPressureUnit === 'mbar'} />} onPress={() => setAtmPressureUnit('mbar')} />
        <SettOption title='Atmosphere (atm)' Right={<Check checked={atmPressureUnit === 'atm'} />} onPress={() => setAtmPressureUnit('atm')} />
      </SettGroup>
      <SettGroup title='Data Management'>
        <SettOption
          title='Clear search cache'
          Icon={<CleanIcon {...ic} />}
          Right={<TxtAcc>{toReadableSize(searchCache)}</TxtAcc>}
          onPress={clearCache}
        />
        <SettOption title='Clear all weather data' Icon={<Database02Icon {...ic} />} Right={<TxtAcc>{toReadableSize(weatherSize)}</TxtAcc>} />
      </SettGroup>
    </SettWrapper>
  )
}
