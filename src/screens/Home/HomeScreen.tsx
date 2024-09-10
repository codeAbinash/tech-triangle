import { PaddingBottom, PaddingTop } from '@components/SafePadding'
import TopArea from '@components/TopArea'
import { useNavigation } from '@react-navigation/native'
import WeatherWidget from '@screens/Weather/Widget/WeatherWidget'
import { Medium, PoppinsMedium, PoppinsSemiBold } from '@utils/fonts'
import type { StackNav } from '@utils/types'
import React, { useMemo } from 'react'
import { Dimensions, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import styles, { hw as height_weight } from './style'

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
        style={[height_weight, styles.shadow]}
        className='items-center justify-center rounded-3xl bg-white dark:bg-zinc-900'
        activeOpacity={0.7}
        onPress={() => navigation.navigate('RoutineWelcome')}
      >
        <Text className='text-gray-800 dark:text-gray-200' style={PoppinsMedium}>
          Routine
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[height_weight, styles.shadow]}
        className='items-center justify-center rounded-3xl bg-white dark:bg-zinc-900'
        activeOpacity={0.7}
        onPress={() => navigation.navigate('NotesWelcome')}
      >
        <Text className='text-gray-800 dark:text-gray-200' style={PoppinsMedium}>
          Notes
        </Text>
      </TouchableOpacity>
      <View style={[height_weight, styles.shadow]} className='rounded-3xl bg-white dark:bg-zinc-900'></View>
      <View style={[height_weight, styles.shadow]} className='rounded-3xl bg-white dark:bg-zinc-900'></View>
    </ScrollView>
  )
}

function Shortcuts() {
  const hw = useMemo(() => {
    return { width: (width - 18 * 2 - 12) / 2, height: width * 0.2 }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
