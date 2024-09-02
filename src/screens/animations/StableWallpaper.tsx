import React from 'react'
import { Dimensions, StatusBar, Text, View } from 'react-native'
import Animated, {
  SensorType,
  useAnimatedSensor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'

const { width, height } = Dimensions.get('window')

const IMG_WIDTH = width * 1.1
const IMG_HEIGHT = height * 1.1

const TRANSLATE_FACTOR = 5
const SCALE_FACTOR = 1 / 100

const INTERVAL = {}
export default function StableWallpaper() {
  const accelerometer = useAnimatedSensor(SensorType.ACCELEROMETER, INTERVAL)

  const accelerometerX = useSharedValue(0)
  const accelerometerY = useSharedValue(0)
  const accelerometerZ = useSharedValue(0)

  useDerivedValue(() => {
    accelerometerX.value = withSpring(Math.min(Math.max(accelerometer.sensor.value.x, -1), 1))
    accelerometerY.value = withSpring(Math.min(Math.max(accelerometer.sensor.value.y, -1), 1))
    accelerometerZ.value = withSpring(Math.min(Math.max(accelerometer.sensor.value.z, -1), 1))
  }, [])

  const imageStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: accelerometerX.value * TRANSLATE_FACTOR },
        { translateY: accelerometerY.value * TRANSLATE_FACTOR },
        { scale: 1 + accelerometerZ.value * SCALE_FACTOR },
      ],
    }
  }, [])

  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <StatusBar barStyle='default' />
      <Text className='z-10 rounded-full bg-black/20 p-2 px-5 font-bold text-white'>Stable Wallpaper</Text>
      <Text className='text- z-10 mt-5 px-10 text-center'>
        Move your device to see the effect. {'\n'} - Accelerometer Version -{' '}
      </Text>
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
