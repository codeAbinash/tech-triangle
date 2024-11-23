import profileStore from '@/zustand/profileStore'
import { PaddingBottom, PaddingTop } from '@components/SafePadding'
import Search from '@components/Search'
import TopArea from '@components/TopArea'
import { useNavigation } from '@react-navigation/native'
import { useMutation } from '@tanstack/react-query'
import { client } from '@utils/client'
import { Medium, PoppinsSemiBold } from '@utils/fonts'
import type { StackNav } from '@utils/types'
import React, { useEffect, useMemo } from 'react'
import { Dimensions, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import CheckVersion from './CheckVersion'
import styles, { hw as height_weight } from './style'

const { width } = Dimensions.get('window')

export default function HomeScreen({ navigation }: { navigation: StackNav }) {
  const setUser = profileStore((state) => state.setUser)

  const { mutate } = useMutation({
    mutationKey: ['user'],
    mutationFn: async () => await (await client.api.profile.$get()).json(),
    onSuccess: (data) => {
      if (!data || !data.status) return
      setUser(data.data)
    },
  })

  useEffect(() => {
    mutate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <View className='bg-zinc-50 px-5 pt-1 dark:bg-black'>
        <PaddingTop />
        <CheckVersion navigation={navigation} />
      </View>
      <ScrollView className='flex-1 bg-zinc-50 dark:bg-black' showsVerticalScrollIndicator={false}>
        <View style={{ gap: 10 }} className='pb-10'>
          <View className=''>
            <TopArea />
            <View className='px-5 pt-1'>
              <Search
                onPress={() => {
                  navigation.navigate('GlobalSearch')
                }}
                // editable={false}
                selectTextOnFocus={false}
                contextMenuHidden
                placeholder='Search for anything...'
              />
            </View>
          </View>
          {/* <StoryArea navigation={navigation} /> */}
          <Elements />
          <Shortcuts navigation={navigation} />
          <Graph />
        </View>
        <PaddingBottom />
      </ScrollView>
    </>
  )
}
function Elements() {
  const navigation = useNavigation<StackNav>()

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 12, paddingLeft: 18, paddingRight: 18, paddingTop: 5, paddingBottom: 5 }}
      snapToAlignment='center'
    >
      {/* <WeatherWidget navigation={navigation} /> */}
      <TouchableOpacity
        style={[height_weight, styles.shadow]}
        className='items-center justify-center rounded-3xl bg-white dark:bg-zinc-900'
        activeOpacity={0.7}
        onPress={() => navigation.navigate('RoutineWelcome')}
      >
        <Medium className='text-xs text-gray-800 dark:text-gray-200'>Routine</Medium>
      </TouchableOpacity>
      <TouchableOpacity
        style={[height_weight, styles.shadow]}
        className='items-center justify-center rounded-3xl bg-white dark:bg-zinc-900'
        activeOpacity={0.7}
        onPress={() => navigation.navigate('NotesWelcome')}
      >
        <Medium className='text-xs text-gray-800 dark:text-gray-200'>Notes</Medium>
      </TouchableOpacity>
      <View style={[height_weight, styles.shadow]} className='rounded-3xl bg-white dark:bg-zinc-900'></View>
      <View style={[height_weight, styles.shadow]} className='rounded-3xl bg-white dark:bg-zinc-900'></View>
    </ScrollView>
  )
}

function Shortcuts({ navigation }: { navigation: StackNav }) {
  const hw = useMemo(() => {
    return { width: (width - 18 * 2 - 12) / 2, height: width * 0.2 }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width])
  return (
    <View>
      <Text className='my-2 px-5 text-base text-gray-800 dark:text-gray-300' style={PoppinsSemiBold}>
        Shortcuts
      </Text>
      <View className='w-full flex-row flex-wrap' style={{ gap: 12, paddingHorizontal: 18 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('About')}
          style={[hw, styles.shadow, styles.center]}
          className='w-1/2 rounded-2xl bg-white dark:bg-zinc-900'
        >
          <Medium className='text-xs text-gray-700 dark:text-gray-300'>Shortcut 1</Medium>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Story')}
          style={[hw, styles.shadow, styles.center]}
          className='w-1/2 rounded-2xl bg-white dark:bg-zinc-900'
        >
          <Medium className='text-xs text-gray-700 dark:text-gray-300'>Shortcut 2</Medium>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('FCFS')}
          style={[hw, styles.shadow, styles.center]}
          className='w-1/2 rounded-2xl bg-white dark:bg-zinc-900'
        >
          <Medium className='text-xs text-gray-700 dark:text-gray-300'>FCFS Process</Medium>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SJF')}
          style={[hw, styles.shadow, styles.center]}
          className='w-1/2 rounded-2xl bg-white dark:bg-zinc-900'
        >
          <Medium className='text-xs text-gray-700 dark:text-gray-300'>SJF Process</Medium>
        </TouchableOpacity>
      </View>
    </View>
  )
}

function Graph() {
  return (
    <View className='px-5'>
      <Text className='my-2 text-base text-gray-800 dark:text-gray-300' style={PoppinsSemiBold}>
        Weekly Progress
      </Text>
      <View
        style={{
          shadowColor: '#00000022',
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 5,
        }}
        className='h-52 w-full items-center justify-center rounded-3xl bg-white dark:bg-zinc-900'
      >
        <Medium className='text-xs text-gray-700 dark:text-gray-300'>Graph</Medium>
      </View>
    </View>
  )
}
