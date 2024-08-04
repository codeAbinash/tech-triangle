import Images from '@assets/images/images'
import Btn from '@components/Button'
import { PaddingBottom, PaddingTop } from '@components/SafePadding'
import type { StackNav } from '@utils/types'
import React, { useEffect } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSpring } from 'react-native-reanimated'

const { width, height } = Dimensions.get('window')
const ICON_SIZE = width * 0.4

export default function Home({ navigation }: { navigation: StackNav }) {
  const rotation = useSharedValue(0)

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    }
  }, [])

  useEffect(() => {
    rotation.value = withRepeat(withSpring(180, { duration: 2000 }), -1, true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ScrollView style={{}}>
      <PaddingTop />
      <TouchableOpacity
        className='items-center justify-center'
        activeOpacity={0.9}
        onPress={() => {
          navigation.navigate('Animations')
        }}
      >
        <Animated.Image source={Images.app_icon} style={[styles.icon, animatedStyle]} />
        <Text className='mt-4 text-center text-lg text-gray-900 dark:text-gray-100'>Welcome to Animations</Text>

        <Text className='mt-2 text-center text-gray-400 dark:text-gray-600'>Tap on the icon to start</Text>
      </TouchableOpacity>
      <View className='mt-5 w-full flex-row flex-wrap items-center justify-center px-5' style={{ gap: 10 }}>
        <Btn onPress={() => navigation.navigate('Basic')}>
          <Text className='text-white'>Basic</Text>
        </Btn>
        <Btn onPress={() => navigation.navigate('DragAnimation')}>
          <Text className='text-white'>Drag Animation</Text>
        </Btn>
        <Btn onPress={() => navigation.navigate('CustomizingAnimations')}>
          <Text className='text-white'>Customizing Animations</Text>
        </Btn>
        <Btn onPress={() => navigation.navigate('ApplyingModifiers')}>
          <Text className='text-white'>Applying Modifiers</Text>
        </Btn>
        <Btn onPress={() => navigation.navigate('KeyboardAnimation')}>
          <Text className='text-white'>Keyboard Animation</Text>
        </Btn>
        <Btn onPress={() => navigation.navigate('HandlingGesture')}>
          <Text className='text-white'>Handling Gesture</Text>
        </Btn>
        <Btn onPress={() => navigation.navigate('SensorAnimation')}>
          <Text className='text-white'>Sensor Animation</Text>
        </Btn>
        <Btn onPress={() => navigation.navigate('StableBox')}>
          <Text className='text-white'>Stable Box</Text>
        </Btn>
        <Btn onPress={() => navigation.navigate('StableWallpaper')}>
          <Text className='text-white'>Stable Wallpaper Acc</Text>
        </Btn>
        <Btn onPress={() => navigation.navigate('CompassAnimation')}>
          <Text className='text-white'>Compass Animation</Text>
        </Btn>
        <Btn onPress={() => navigation.navigate('LevelAnimation')}>
          <Text className='text-white'>Level Animation</Text>
        </Btn>
        <Btn onPress={() => navigation.navigate('ParallaxWallpaper')}>
          <Text className='text-white'>Parallax Wallpaper</Text>
        </Btn>
      </View>
      <PaddingBottom />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    resizeMode: 'contain',
    marginTop: 100,
  },
})
