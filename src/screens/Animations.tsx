import { AppIcon } from '@assets/icons/icons'
import Btn from '@components/Button'
import { PaddingBottom, PaddingTop } from '@components/SafePadding'
import { Colors } from '@utils/colors'
import { Medium, SemiBold } from '@utils/fonts'
import type { StackNav } from '@utils/types'
import React, { useEffect } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
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
        {/* <Animated.Image source={Images.app_icon} style={[styles.icon, animatedStyle]} /> */}

        <Animated.View style={[styles.icon, animatedStyle]}>
          <AppIcon width={ICON_SIZE} height={ICON_SIZE} />
        </Animated.View>
        <SemiBold className='mt-4 text-center text-base text-gray-900 dark:text-gray-100'>
          Welcome to Animations
        </SemiBold>

        <Medium className='mt-2 text-center text-xs text-gray-400 dark:text-gray-600'>Tap on the icon to start</Medium>
      </TouchableOpacity>
      <View className='mt-5 w-full flex-row flex-wrap items-center justify-center px-5' style={{ gap: 10 }}>
        <Btn onPress={() => navigation.navigate('Basic')}>
          <Medium className='text-xs text-white'>Basic</Medium>
        </Btn>
        <Btn onPress={() => navigation.navigate('DragAnimation')}>
          <Medium className='text-xs text-white'>Drag Animation</Medium>
        </Btn>
        <Btn onPress={() => navigation.navigate('CustomizingAnimations')}>
          <Medium className='text-xs text-white'>Customizing Animations</Medium>
        </Btn>
        <Btn onPress={() => navigation.navigate('ApplyingModifiers')}>
          <Medium className='text-xs text-white'>Applying Modifiers</Medium>
        </Btn>
        <Btn onPress={() => navigation.navigate('KeyboardAnimation')}>
          <Medium className='text-xs text-white'>Keyboard Animation</Medium>
        </Btn>
        <Btn onPress={() => navigation.navigate('HandlingGesture')}>
          <Medium className='text-xs text-white'>Handling Gesture</Medium>
        </Btn>
        <Btn onPress={() => navigation.navigate('SensorAnimation')}>
          <Medium className='text-xs text-white'>Sensor Animation</Medium>
        </Btn>
        <Btn onPress={() => navigation.navigate('StableBox')}>
          <Medium className='text-xs text-white'>Stable Box</Medium>
        </Btn>
        <Btn onPress={() => navigation.navigate('StableWallpaper')}>
          <Medium className='text-xs text-white'>Stable Wallpaper Acc</Medium>
        </Btn>
        <Btn onPress={() => navigation.navigate('CompassAnimation')}>
          <Medium className='text-xs text-white'>Compass Animation</Medium>
        </Btn>
        <Btn onPress={() => navigation.navigate('LevelAnimation')}>
          <Medium className='text-xs text-white'>Level Animation</Medium>
        </Btn>
        <Btn onPress={() => navigation.navigate('ParallaxWallpaper')}>
          <Medium className='text-xs text-white'>Parallax Wallpaper</Medium>
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
    backgroundColor: Colors.appIconBg,
    borderRadius: 30,
  },
})
