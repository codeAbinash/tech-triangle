import React from 'react'
import { Dimensions, StatusBar, Text, View } from 'react-native'
import Animated, { SensorType, useAnimatedSensor, useAnimatedStyle, useDerivedValue, useSharedValue, withSpring } from 'react-native-reanimated'

const { width, height } = Dimensions.get('window')

const IMG_WIDTH = width * 1.15
const IMG_HEIGHT = height * 1.15

const PITCH_FACTOR = 50
const ROLL_FACTOR = 50
const DEFAULT_PHONE_ANGLE = (-30 * Math.PI) / 180

const MAX_PITCH = 32
const MAX_ROLL = 28

const DURATION = { duration: 500 }

const INTERVAL = {}
export default function ParallaxWallpaper() {
  const rotation = useAnimatedSensor(SensorType.ROTATION, INTERVAL)

  const pitch = useSharedValue(0)
  const roll = useSharedValue(0)

  useDerivedValue(() => {
    pitch.value = withSpring(Math.min(Math.max((rotation.sensor.value.pitch + DEFAULT_PHONE_ANGLE) * PITCH_FACTOR, -MAX_PITCH), MAX_PITCH), DURATION)
    roll.value = withSpring(Math.min(Math.max(rotation.sensor.value.roll * ROLL_FACTOR, -MAX_ROLL), MAX_ROLL), DURATION)
  }, [])

  const imageStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: roll.value }, { translateY: pitch.value }],
      // transform: [{ translateX: roll.value * ROLL_FACTOR }, { translateY: pitch.value * PITCH_FACTOR }],
    }
  }, [])

  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <StatusBar barStyle='default' />
      <Text className='z-10 rounded-full bg-black/20 p-2 px-5 font-bold text-white'>Parallax Wallpaper</Text>
      <Text className='text- z-10 mt-5 px-10 text-center'>Move your device to see the effect. {'\n'} - Quaternion Version - </Text>
      <Animated.Image
        source={{
          uri: 'https://codeabinash.github.io/wallpapers/w3.jpg',
        }}
        style={[
          {
            position: 'absolute',
            width: IMG_WIDTH,
            height: IMG_HEIGHT,
            backgroundColor: 'black',
            opacity: 0.95,
          },
          imageStyle,
        ]}
      />
      <Text className='absolute bottom-5 text-xs text-white'>
        By <Text className='text-pinkPrimary'>codeAbinash</Text>
      </Text>
    </View>
  )
}
