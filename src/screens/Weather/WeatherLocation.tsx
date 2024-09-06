import { weatherStore } from '@/zustand/weatherStore'
import { LocationOffline01Icon } from '@assets/icons/icons'
import Button from '@components/Button'
import { PaddingBottom } from '@components/SafePadding'
import StackHeader from '@components/StackHeader'
import { type RouteProp } from '@react-navigation/native'
import { useMutation } from '@tanstack/react-query'
import { Colors } from '@utils/colors'
import { W } from '@utils/dimensions'
import { Medium, SemiBold } from '@utils/fonts'
import type { StackNav } from '@utils/types'
import { screenDelay } from '@utils/utils'
import LottieView from 'lottie-react-native'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Linking, PermissionsAndroid, StatusBar, View } from 'react-native'
import Geolocation from 'react-native-geolocation-service'
import { getLocation } from './api'
import type { LocationResult } from './LocationResultTypes'

type ParamList = {
  WeatherLocation: WeatherLocationParamList
}

export type WeatherLocationParamList = {
  shouldGoBack: boolean
}

const requestLocationPermission = async () => {
  try {
    const permission = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION!)
    console.log('Permission', permission)
    return permission
  } catch (err) {
    return 'denied'
  }
}

enum LocationStatus {
  FETCHED,
  ERROR,
  FETCHING,
  PERMISSION_DENIED,
  NEVER_ASK_AGAIN,
  NOT_FETCHED,
}

export default function WeatherLocation({
  navigation,
  route,
}: {
  navigation: StackNav
  route: RouteProp<ParamList, 'WeatherLocation'>
}) {
  const [locationStatus, setLocationStatus] = useState<LocationStatus>(LocationStatus.NOT_FETCHED)
  const [location, setLocation] = useState<Geolocation.GeoPosition>()

  const getLocation = async () => {
    setLocationStatus(LocationStatus.FETCHING)
    const result = await requestLocationPermission()
    if (result === 'granted') {
      Geolocation.getCurrentPosition(
        (position) => {
          setLocation(position)
          setLocationStatus(LocationStatus.FETCHED)
        },
        (error) => {
          console.log('Error', error.code, error.message)
          setLocationStatus(LocationStatus.ERROR)
        },
        { enableHighAccuracy: true, timeout: 0, maximumAge: 1000 },
      )
    } else if (result === 'never_ask_again') setLocationStatus(LocationStatus.NEVER_ASK_AGAIN)
    else if (result === 'denied') setLocationStatus(LocationStatus.PERMISSION_DENIED)
  }

  useEffect(() => {
    screenDelay(() => getLocation())
  }, [])

  return (
    <>
      <StatusBar barStyle='default' />
      <View className='p-5 pb-2 pt-4 dark:bg-zinc-950' style={{ gap: 12 }}>
        <StackHeader title='Current Location' navigation={navigation} left='Cancel' right='Done' />
      </View>
      <View className='flex-1 items-center justify-between px-5 pb-5 dark:bg-zinc-950'>
        <Medium></Medium>
        <GetMidScreen status={locationStatus} location={location} navigation={navigation} route={route} />
        <View className='h-20 w-full justify-end px-5'>
          <GetTryLocateAgainButton getLocation={getLocation} locationStatus={locationStatus} />
        </View>
      </View>
      <PaddingBottom />
    </>
  )
}

function CityResult({
  location,
  navigation,
  route,
}: {
  location: Geolocation.GeoPosition | undefined
  navigation: StackNav
  route: RouteProp<ParamList, 'WeatherLocation'>
}) {
  const setCurrentCity = weatherStore((state) => state.setCurrentCity)
  const shouldGoBack = route.params.shouldGoBack

  const { isPending, error, data, mutate } = useMutation({
    mutationKey: ['location'],
    mutationFn: () => fetchResult(),
    onError: (err) => console.log(err),
    onSuccess: (_) => console.log('Success', _),
  })

  async function fetchResult() {
    const result = await getLocation(location?.coords.latitude || 0, location?.coords.longitude || 0)
    return result as LocationResult
  }

  useEffect(() => {
    mutate()
  }, [])

  if (!data || isPending)
    return (
      <View>
        <ActivityIndicator size='large' color={Colors.accent} />
        <Medium className='mt-5 text-center text-zinc-700 dark:text-gray-300'>Talking to APIs...</Medium>
      </View>
    )

  return (
    <View className='w-full items-center' style={{ gap: 20 }}>
      {/* <PMedium className='text-center text-zinc-700 dark:text-gray-300'>
        {getLatitude(data?.coord.lat || 0)} , {getLongitude(data?.coord.lon || 0)}
      </PMedium> */}
      <LottieView
        source={require('../../assets/animations/weather/broken-clouds.lottie')}
        style={{ height: W * 0.7, width: W * 0.7 }}
        speed={0.5}
        autoPlay
        loop
      />
      <View className='w-full flex-row items-center justify-between px-5'>
        <View className='flex-row items-center' style={{ gap: 5 }}>
          <View className=''>
            <SemiBold className='text-xl text-zinc-800 dark:text-zinc-200'>{data?.name}</SemiBold>
            <Medium className='text-base capitalize text-zinc-700 dark:text-zinc-300'>
              {data?.weather[0]!.description}
            </Medium>
          </View>
        </View>
        <View>
          <SemiBold className='text-right text-xl text-zinc-700 dark:text-zinc-300'>{32}°C</SemiBold>
          <Medium className='text-right text-base text-zinc-700 dark:text-zinc-300'>
            Humidity {data?.main.humidity}%
          </Medium>
        </View>
      </View>
      <View className='mt-5 w-full px-5'>
        <Button
          title='Set this location'
          onPress={() => {
            setCurrentCity({
              lat: data?.coord.lat || 0,
              lon: data?.coord.lon || 0,
              name: data?.name || '',
            })
            if (shouldGoBack) return navigation.pop(1)
            navigation.reset({ index: 0, routes: [{ name: 'Home' }, { name: 'Weather' }] })
          }}
        />
      </View>
    </View>
  )
}

function GetMidScreen({
  status,
  location,
  navigation,
  route,
}: {
  status: LocationStatus
  location: Geolocation.GeoPosition | undefined
  navigation: StackNav
  route: RouteProp<ParamList, 'WeatherLocation'>
}) {
  if (status === LocationStatus.FETCHING) return <FetchingLocation />
  else if (status === LocationStatus.FETCHED)
    return <CityResult location={location} navigation={navigation} route={route} />
  else if (status === LocationStatus.ERROR) return <ErrorFetchingLocation />
  else if (status === LocationStatus.PERMISSION_DENIED) return <LocationPermissionDenied />
  else if (status === LocationStatus.NEVER_ASK_AGAIN) return <LocationPermissionDenied />
  return <FetchingLocation />
}

function FetchingLocation() {
  return (
    <View className='items-center justify-center' style={{ gap: 12 }}>
      <ActivityIndicator size='large' color={Colors.accent} />
      <Medium className='text-center text-sm text-zinc-700 dark:text-gray-300'>Fetching location...</Medium>
    </View>
  )
}

function ErrorFetchingLocation() {
  return (
    <View className='items-center justify-center' style={{ gap: 12 }}>
      <LocationOffline01Icon width={28} height={28} className='text-red-500' />
      <Medium className='text-center text-sm text-red-500'>Error fetching location.</Medium>
    </View>
  )
}

function LocationPermissionDenied() {
  return (
    <View className='items-center justify-center' style={{ gap: 12 }}>
      <LocationOffline01Icon width={28} height={28} className='text-red-500' />
      <Medium className='text-center text-sm text-red-500'>Location permission denied.</Medium>
    </View>
  )
}

function GetTryLocateAgainButton({
  getLocation,
  locationStatus,
}: {
  getLocation: () => void
  locationStatus: LocationStatus
}) {
  if (locationStatus === LocationStatus.FETCHING) return null
  else if (locationStatus === LocationStatus.PERMISSION_DENIED) return <GrantPermission />
  else if (locationStatus === LocationStatus.NEVER_ASK_AGAIN)
    return <GrantPermissionFromSettings getLocation={getLocation} />
  else if (locationStatus === LocationStatus.ERROR) return <TurnOnLocation getLocation={getLocation} />
  else return null
}

function GrantPermission() {
  return (
    <View style={{ gap: 8 }}>
      <Medium className='text-center text-xs text-zinc-700 dark:text-gray-300'>
        Please grant location permission.
      </Medium>
      <Button title='Allow location' onPress={() => Linking.openSettings()} />
    </View>
  )
}
function TurnOnLocation({ getLocation }: { getLocation: () => void }) {
  return (
    <View style={{ gap: 8 }}>
      <Medium className='text-center text-xs text-zinc-700 dark:text-gray-300'>
        Your location is turned off. Turn it on.
      </Medium>
      <Button title='Turn on location' onPress={getLocation} />
    </View>
  )
}

function GrantPermissionFromSettings({ getLocation }: { getLocation: () => void }) {
  return (
    <View style={{ gap: 8 }}>
      <Medium className='text-center text-xs text-zinc-700 dark:text-gray-300'>
        Allow the app to access your location.
      </Medium>
      <Button title='Go to settings' onPress={() => Linking.openSettings()} />
    </View>
  )
}
