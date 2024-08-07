import { BtnTransparent } from '@components/Button'
import Search from '@components/Search'
import StackHeader from '@components/StackHeader'
import type { RouteProp } from '@react-navigation/native'
import { useMutation } from '@tanstack/react-query'
import { Colors } from '@utils/colors'
import type { StackNav } from '@utils/types'
import { getLatitude, getLongitude } from '@utils/utils'
import React from 'react'
import { ActivityIndicator, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import type { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils'
import { searchCity, type WeatherSearchResult } from './api'
import { PMedium, PSemiBold } from '@utils/fonts'
import { weatherStore } from '@/zustand/weatherStore'

type ParamList = {
  WeatherSearchCity: SearchCityParamList
}

export type SearchCityParamList = {
  shouldGoBack: boolean
}

export default function WeatherSearchCity({ navigation, route }: { navigation: StackNav; route: RouteProp<ParamList, 'WeatherSearchCity'> }) {
  const [query, setQuery] = React.useState('')
  const accuApiKey = weatherStore((state) => state.accuWeatherApiKey)
  const { isPending, error, data, mutate } = useMutation({
    mutationKey: ['cities'],
    mutationFn: () => searchCity(query.trim(), accuApiKey),
    onError: (err) => console.log(err),
    // onSuccess: (_) => (),
  })

  const isData = data && data.length > 0

  return (
    <View className='flex-1 dark:bg-zinc-950'>
      <StatusBar barStyle='default' />

      <View className='p-5 pb-2 pt-4' style={{ gap: 12 }}>
        <StackHeader title='Search City' navigation={navigation} left='Cancel' right='Done' />
        <Search placeholder='Search City' keyboardType='web-search' value={query} onChangeText={setQuery} autoFocus onEndEditing={() => mutate()} />
      </View>

      {isPending && <Pending />}
      {error && <ErrorFetchingCities error={error} navigation={navigation} />}
      {data && data.length === 0 && <NoCityFound />}
      {!isPending && !data && !error && <InitialMessage />}

      {isData && (
        <FlatList
          className='px-5'
          contentContainerStyle={{ gap: 3, paddingBottom: 50, paddingTop: 5 }}
          ListFooterComponent={data && data.length > 0 && <PoweredByAccuWeather />}
          data={data}
          keyExtractor={(item) => item.Key}
          renderItem={({ item }) => <CityCard item={item} navigation={navigation} shouldGoBack={route.params.shouldGoBack} />}
        />
      )}
    </View>
  )
}

function MyFlex({ children, style, ...rest }: ViewProps) {
  return (
    <View className='flex-1 items-center justify-center px-10 pb-[35%]' style={[{ gap: 10 }, style]} {...rest}>
      {children}
    </View>
  )
}

function Pending() {
  return (
    <MyFlex>
      <ActivityIndicator size='large' color={Colors.accent} />
      <PMedium className='mt-2 text-center text-xs text-zinc-500 dark:text-zinc-500'>Searching for cities...</PMedium>
    </MyFlex>
  )
}

function ErrorFetchingCities({ error, navigation }: { error: any; navigation: StackNav }) {
  return (
    <MyFlex>
      <PSemiBold className='text-center text-2xl text-zinc-800 dark:text-zinc-200'>{error?.message || 'Failed to fetch cities'}</PSemiBold>
      <PMedium className='text-center text-sm text-zinc-500 dark:text-zinc-500'>
        This error may occur if you are not connected to the internet or API limit exceeded. To fix this, enter a API key in settings.
      </PMedium>
      <BtnTransparent className='text-sm' onPress={() => navigation.navigate('WeatherSettings')} title='Set API keys'></BtnTransparent>
    </MyFlex>
  )
}

function NoCityFound() {
  return (
    <MyFlex>
      <PSemiBold className='text-center text-2xl text-zinc-800 dark:text-zinc-200'>No cities found</PSemiBold>
      <PMedium className='text-center text-sm text-zinc-500 dark:text-zinc-500'>
        No cities found for the search query. Try searching with different keywords.
      </PMedium>
    </MyFlex>
  )
}

function InitialMessage() {
  return (
    <MyFlex>
      <PMedium className='text-center text-sm text-zinc-500 dark:text-zinc-500'>Enter a city or location name</PMedium>
    </MyFlex>
  )
}

function PoweredByAccuWeather() {
  return (
    <View>
      <PMedium className='mt-10 text-center text-xs text-zinc-500 dark:text-zinc-500'>Powered by AccuWeather</PMedium>
    </View>
  )
}

function CityCard({ item, navigation, shouldGoBack }: { item: WeatherSearchResult; navigation: StackNav; shouldGoBack: boolean }) {
  const lat = getLatitude(item.GeoPosition.Latitude)
  const lon = getLongitude(item.GeoPosition.Longitude)
  return (
    <TouchableOpacity
      className='w-full flex-row justify-between rounded-2xl p-3.5 px-2'
      activeOpacity={0.7}
      onPress={() => {
        navigation.navigate('ConfirmCity', {
          name: item.EnglishName,
          lat: item.GeoPosition.Latitude,
          lon: item.GeoPosition.Longitude,
          altitude: item.GeoPosition.Elevation.Metric.Value,
          area: item.AdministrativeArea.EnglishName,
          country: item.Country.EnglishName,
          shouldGoBack,
        })
      }}
    >
      <View>
        <PMedium className='text-base text-zinc-800 dark:text-zinc-200'>{item.EnglishName}</PMedium>
        <PMedium className='text-sm text-zinc-600 dark:text-zinc-400'>
          {item.AdministrativeArea.EnglishName}, {item.Country.EnglishName}
        </PMedium>
      </View>

      <View>
        <PMedium className='text-right text-accent' style={{ fontSize: 12 }}>
          {lat}, {lon}
        </PMedium>
        <PMedium className='text-right text-accent' style={{ fontSize: 12 }}>
          Altitude: {item.GeoPosition.Elevation.Metric.Value} {item.GeoPosition.Elevation.Metric.Unit}
        </PMedium>
      </View>
    </TouchableOpacity>
  )
}
