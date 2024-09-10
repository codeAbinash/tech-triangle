import { weatherStore } from '@/zustand/weatherStore'
import { BtnTransparent } from '@components/Button'
import Search from '@components/Search'
import StackHeader from '@components/StackHeader'
import type { RouteProp } from '@react-navigation/native'
import { useMutation } from '@tanstack/react-query'
import { Colors } from '@utils/colors'
import { Medium, SemiBold } from '@utils/fonts'
import type { StackNav } from '@utils/types'
import { getLatitude, getLongitude } from '@utils/utils'
import React from 'react'
import { ActivityIndicator, StatusBar, TouchableOpacity, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import type { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils'
import { searchCity, type WeatherSearchResult } from './api'

type ParamList = {
  WeatherSearchCity: SearchCityParamList
}

export type SearchCityParamList = {
  shouldGoBack: boolean
}

export default function WeatherSearchCity({
  navigation,
  route,
}: {
  navigation: StackNav
  route: RouteProp<ParamList, 'WeatherSearchCity'>
}) {
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
        <Search
          placeholder='Search City'
          keyboardType='web-search'
          value={query}
          onChangeText={setQuery}
          autoFocus
          onEndEditing={() => mutate()}
        />
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
          renderItem={({ item }) => (
            <CityCard item={item} navigation={navigation} shouldGoBack={route.params.shouldGoBack} />
          )}
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
      <Medium className='mt-2 text-center text-xs text-zinc-500 dark:text-zinc-500'>Searching for cities...</Medium>
    </MyFlex>
  )
}

function ErrorFetchingCities({ error, navigation }: { error: any; navigation: StackNav }) {
  return (
    <MyFlex>
      <SemiBold className='text-center text-2xl text-zinc-800 dark:text-zinc-200'>
        {error?.message || 'Failed to fetch cities'}
      </SemiBold>
      <Medium className='text-center text-sm text-zinc-500 dark:text-zinc-500'>
        This error may occur if you are not connected to the internet or API limit exceeded. To fix this, enter a API
        key in settings.
      </Medium>
      <BtnTransparent
        className='text-sm'
        onPress={() => navigation.navigate('WeatherSettings')}
        title='Set API keys'
      ></BtnTransparent>
    </MyFlex>
  )
}

function NoCityFound() {
  return (
    <MyFlex>
      <SemiBold className='text-center text-2xl text-zinc-800 dark:text-zinc-200'>No cities found</SemiBold>
      <Medium className='text-center text-sm text-zinc-500 dark:text-zinc-500'>
        No cities found for the search query. Try searching with different keywords.
      </Medium>
    </MyFlex>
  )
}

function InitialMessage() {
  return (
    <MyFlex>
      <Medium className='text-center text-sm text-zinc-500 dark:text-zinc-500'>Enter a city or location name</Medium>
    </MyFlex>
  )
}

function PoweredByAccuWeather() {
  return (
    <View>
      <Medium className='mt-10 text-center text-xs text-zinc-500 dark:text-zinc-500'>Powered by AccuWeather</Medium>
    </View>
  )
}

function CityCard({
  item,
  navigation,
  shouldGoBack,
}: {
  item: WeatherSearchResult
  navigation: StackNav
  shouldGoBack: boolean
}) {
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
        <Medium className='text-base text-zinc-800 dark:text-zinc-200'>{item.EnglishName}</Medium>
        <Medium className='text-sm text-zinc-600 dark:text-zinc-400'>
          {item.AdministrativeArea.EnglishName}, {item.Country.EnglishName}
        </Medium>
      </View>

      <View>
        <Medium className='text-right text-accent' style={{ fontSize: 12 }}>
          {lat}, {lon}
        </Medium>
        <Medium className='text-right text-accent' style={{ fontSize: 12 }}>
          Altitude: {item.GeoPosition.Elevation.Metric.Value} {item.GeoPosition.Elevation.Metric.Unit}
        </Medium>
      </View>
    </TouchableOpacity>
  )
}
