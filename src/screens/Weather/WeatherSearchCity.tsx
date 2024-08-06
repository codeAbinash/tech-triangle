import { storageStore } from '@/zustand/storageStore'
import { BtnTransparent } from '@components/Button'
import Search from '@components/Search'
import StackHeader from '@components/StackHeader'
import type { RouteProp } from '@react-navigation/native'
import { useMutation } from '@tanstack/react-query'
import { Colors } from '@utils/colors'
import { PoppinsMedium, PoppinsSemiBold } from '@utils/fonts'
import type { StackNav } from '@utils/types'
import { getLatitude, getLongitude } from '@utils/utils'
import React from 'react'
import { ActivityIndicator, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { searchCity, type WeatherSearchResult } from './api'

type ParamList = {
  WeatherSearchCity: SearchCityParamList
}

export type SearchCityParamList = {
  shouldGoBack: boolean
}

export default function WeatherSearchCity({ navigation, route }: { navigation: StackNav; route: RouteProp<ParamList, 'WeatherSearchCity'> }) {
  const [query, setQuery] = React.useState('')
  const computeEverything = storageStore((state) => state.computeEverything)
  const { isPending, error, data, mutate } = useMutation({
    mutationKey: ['cities'],
    mutationFn: () => searchCity(query.trim()),
    onError: (err) => console.log(err),
    onSuccess: (data) => computeEverything(),
  })

  return (
    <>
      <StatusBar barStyle='default' />

      <View className='p-5 pb-2 pt-4 dark:bg-zinc-950' style={{ gap: 12 }}>
        <StackHeader title='Search City' navigation={navigation} left='Cancel' right='Done' />
        <Search placeholder='Search City' keyboardType='web-search' value={query} onChangeText={setQuery} autoFocus onEndEditing={() => mutate()} />
      </View>

      <View className='dark:bg-zinc-950'>
        {isPending && <Pending />}
        {error && <ErrorFetchingCities error={error} navigation={navigation} />}
        {data && data.length === 0 && <NoCityFound />}
        {!isPending && !data && !error && <InitialMessage />}
      </View>

      <FlatList
        className='px-5 dark:bg-zinc-950'
        contentContainerStyle={{ gap: 3, paddingBottom: 50 }}
        ListFooterComponent={data && data.length > 0 && <PoweredByAccuWeather />}
        data={data}
        keyExtractor={(item) => item.Key}
        renderItem={({ item }) => <CityCard item={item} navigation={navigation} shouldGoBack={route.params.shouldGoBack} />}
      ></FlatList>
    </>
  )
}

function Pending() {
  return (
    <View className='p-10 py-20' style={{ gap: 10 }}>
      <ActivityIndicator size='large' color={Colors.accent} />
      <Text style={PoppinsMedium} className='mt-2 text-center text-xs text-zinc-500 dark:text-zinc-500'>
        Searching for cities...
      </Text>
    </View>
  )
}

function ErrorFetchingCities({ error, navigation }: { error: any; navigation: StackNav }) {
  return (
    <View className='p-10 py-20' style={{ gap: 10 }}>
      <Text style={PoppinsSemiBold} className='text-center text-2xl text-zinc-700 dark:text-zinc-300'>
        {error?.message || 'Failed to fetch cities'}
      </Text>
      <Text style={PoppinsMedium} className='text-center text-sm text-zinc-500 dark:text-zinc-500'>
        This error may occur if you are not connected to the internet or API limit exceeded. To fix this, enter a API key in settings.
      </Text>
      <BtnTransparent className='text-sm' onPress={() => navigation.navigate('WeatherSettings')} title='Set API key'></BtnTransparent>
    </View>
  )
}

function NoCityFound() {
  return (
    <View className='p-10 py-20' style={{ gap: 10 }}>
      <Text style={PoppinsSemiBold} className='text-center text-2xl text-zinc-700 dark:text-zinc-300'>
        No cities found
      </Text>
      <Text style={PoppinsMedium} className='text-center text-sm text-zinc-500 dark:text-zinc-500'>
        No cities found for the search query. Try searching with different keywords.
      </Text>
    </View>
  )
}

function InitialMessage() {
  return (
    <View className='p-10 py-20' style={{ gap: 10 }}>
      <Text style={PoppinsMedium} className='text-center text-xs text-zinc-500 dark:text-zinc-500'>
        Enter a city or location name
      </Text>
    </View>
  )
}

function PoweredByAccuWeather() {
  return (
    <View>
      <Text style={PoppinsMedium} className='mt-10 text-center text-xs text-zinc-500 dark:text-zinc-500'>
        Powered by AccuWeather
      </Text>
    </View>
  )
}

function CityCard({ item, navigation, shouldGoBack }: { item: WeatherSearchResult; navigation: StackNav; shouldGoBack: boolean }) {
  const lat = getLatitude(item.GeoPosition.Latitude)
  const lon = getLongitude(item.GeoPosition.Longitude)
  return (
    <TouchableOpacity
      className='flex-row justify-between rounded-2xl p-3.5 px-2'
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
        <Text className='text-base text-zinc-800 dark:text-zinc-200' style={PoppinsMedium}>
          {item.EnglishName}
        </Text>
        <Text className='text-sm text-zinc-600 dark:text-zinc-400' style={PoppinsMedium}>
          {item.AdministrativeArea.EnglishName}, {item.Country.EnglishName}
        </Text>
      </View>

      <View>
        <Text className='text-right text-accent' style={[PoppinsMedium, { fontSize: 13 }]}>
          {lat}, {lon}
        </Text>
        <Text className='text-right text-zinc-600 dark:text-zinc-400' style={[PoppinsMedium, { fontSize: 13 }]}>
          Altitude: {item.GeoPosition.Elevation.Metric.Value} {item.GeoPosition.Elevation.Metric.Unit}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
