import { navigateToWeather } from '@/navigation'
import { weatherStore } from '@/zustand/weatherStore'
import { Settings01Icon } from '@assets/icons/icons'
import { PaddingBottom, PaddingTop } from '@components/SafePadding'
import { useNavigation } from '@react-navigation/native'
import { Colors } from '@utils/colors'
import { Medium, PoppinsBold, PoppinsMedium, PoppinsSemiBold } from '@utils/fonts'
import type { StackNav } from '@utils/types'
import { getLocalDate, greetingByTime } from '@utils/utils'
import React, { useMemo } from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import styles, { hw } from './style'
import WeatherWidget from '@screens/Weather/Widget/WeatherWidget'

const { width } = Dimensions.get('window')

function Elements() {
  const navigation = useNavigation<StackNav>()

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 12, paddingLeft: 18, paddingRight: 18, paddingTop: 5, paddingBottom: 5 }}
      snapToAlignment='center'
    >
      <WeatherWidget navigation={navigation} />
      <TouchableOpacity
        style={[hw, styles.shadow]}
        className='items-center justify-center rounded-3xl bg-white dark:bg-zinc-900'
        activeOpacity={0.7}
        onPress={() => navigation.navigate('RoutineWelcome')}
      >
        <Text className='text-gray-800 dark:text-gray-200' style={PoppinsMedium}>
          Routine
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[hw, styles.shadow]}
        className='items-center justify-center rounded-3xl bg-white dark:bg-zinc-900'
        activeOpacity={0.7}
        onPress={() => navigation.navigate('NotesWelcome')}
      >
        <Text className='text-gray-800 dark:text-gray-200' style={PoppinsMedium}>
          Notes
        </Text>
      </TouchableOpacity>
      <View style={[hw, styles.shadow]} className='rounded-3xl bg-white dark:bg-zinc-900'></View>
      <View style={[hw, styles.shadow]} className='rounded-3xl bg-white dark:bg-zinc-900'></View>
    </ScrollView>
  )
}

function TopArea() {
  const theme = useColorScheme()
  const navigation = useNavigation<StackNav>()
  return (
    <View className='px-5 pr-3'>
      <View className='flex-row items-center justify-between'>
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Greeting')}>
          <View className='flex-row items-center'>
            <Text style={[PoppinsBold, { fontSize: 21 }]} className='items-center justify-center text-gray-800 dark:text-gray-200'>
              {greetingByTime()}
            </Text>
            {/* <Image source={{ uri: emoji(getEmojiOfDayByTime()) }} height={23} width={23} className='ml-1' /> */}
          </View>
          <Text className='-mt-2 mb-1 text-zinc-600 dark:text-zinc-400' style={PoppinsMedium}>
            {getLocalDate()}
          </Text>
        </TouchableOpacity>
        <View className='flex-row items-center justify-center' style={{ gap: 5 }}>
          {/* <TouchableOpacity activeOpacity={0.7} className='p-2 py-2'>
            <NotificationIcon height={22} width={22} color={theme === 'dark' ? COL.gray300 : COL.gray800} />
          </TouchableOpacity> */}
          <TouchableOpacity activeOpacity={0.6} className='p-2 px-2.5' onPress={() => navigation.navigate('Settings')}>
            <Settings01Icon height={22} width={22} color={theme === 'dark' ? Colors.zinc['300'] : Colors.zinc['700']} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

function Shortcuts() {
  const hw = useMemo(() => {
    return { width: (width - 18 * 2 - 12) / 2, height: width * 0.2 }
  }, [width])
  return (
    <View>
      <Text className='my-2 px-5 text-xl text-gray-800 dark:text-gray-300' style={PoppinsSemiBold}>
        Shortcuts
      </Text>
      <View className='w-full flex-row flex-wrap' style={{ gap: 12, paddingHorizontal: 18 }}>
        <View style={[hw, styles.shadow, styles.center]} className='w-1/2 rounded-2xl bg-white dark:bg-zinc-900'>
          <Medium className='text-gray-700 dark:text-gray-300'>Shortcut 1</Medium>
        </View>
        <View style={[hw, styles.shadow, styles.center]} className='w-1/2 rounded-2xl bg-white dark:bg-zinc-900'>
          <Medium className='text-gray-700 dark:text-gray-300'>Shortcut 2</Medium>
        </View>
        <View style={[hw, styles.shadow, styles.center]} className='w-1/2 rounded-2xl bg-white dark:bg-zinc-900'>
          <Medium className='text-gray-700 dark:text-gray-300'>Shortcut 3</Medium>
        </View>
        <View style={[hw, styles.shadow, styles.center]} className='w-1/2 rounded-2xl bg-white dark:bg-zinc-900'>
          <Medium className='text-gray-700 dark:text-gray-300'>Shortcut 4</Medium>
        </View>
      </View>
    </View>
  )
}

function Graph() {
  return (
    <View className='px-5'>
      <Text className='my-2 text-xl text-gray-800 dark:text-gray-300' style={PoppinsSemiBold}>
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
        <Medium className='text-gray-700 dark:text-gray-300'>Graph</Medium>
      </View>
    </View>
  )
}

export default function HomeScreen({ navigation }: { navigation: StackNav }) {
  const theme = useColorScheme()
  return (
    <>
      <View className='bg-zinc-50 px-5 pb-1.5 dark:bg-black'>
        <PaddingTop />
      </View>
      <ScrollView className='flex-1 bg-zinc-50 dark:bg-black' showsVerticalScrollIndicator={false}>
        <View style={{ gap: 10 }} className='pb-10'>
          <TopArea />
          <Elements />
          <Shortcuts />
          <Graph />
        </View>
        <PaddingBottom />
      </ScrollView>
    </>
  )
}
