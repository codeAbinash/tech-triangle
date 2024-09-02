import { PaddingBottom, PaddingTop } from '@components/SafePadding'
import React from 'react'
import { Text, View } from 'react-native'
import Animated, {
  SensorType,
  useAnimatedSensor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'

const INTERVAL = {
  // interval: 100,
}

const TRANSLATE_FACTOR = 5
const SCALE_FACTOR = 1 / 150

export default function StableBox() {
  const accelerometer = useAnimatedSensor(SensorType.ACCELEROMETER, INTERVAL)
  const accelerometerX = useSharedValue(0)
  const accelerometerY = useSharedValue(0)
  const accelerometerZ = useSharedValue(0)

  useDerivedValue(() => {
    accelerometerX.value = withSpring(accelerometer.sensor.value.x, { duration: 200 })
    accelerometerY.value = withSpring(accelerometer.sensor.value.y, { duration: 200 })
    accelerometerZ.value = withSpring(accelerometer.sensor.value.z, { duration: 200 })
  }, [])

  const styleBox = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: accelerometerX.value * TRANSLATE_FACTOR },
        { translateY: accelerometerY.value * TRANSLATE_FACTOR },
        { scale: 1 + accelerometerZ.value * SCALE_FACTOR },
      ],
    }
  }, [])

  return (
    <View className='flex-1 items-center justify-between bg-gray-50 dark:bg-gray-950'>
      <View className='pt-5'>
        <PaddingTop />
        <Text className='text-base text-gray-700'>Move your device to see effect.</Text>
      </View>
      <View />
      <Animated.View className='mb-36 h-36 w-36 items-center justify-center rounded-3xl bg-accent' style={styleBox}>
        <Text className='text-center text-base text-white'>Stable Box</Text>
      </Animated.View>
      <View className='pb-2'>
        <Text className='px-10 text-center text-xs text-gray-600'>
          By using accelerometer sensor, we can get the acceleration of the device in 3D space. Here, we are using the
          x, y and z values to move the box in 3D space translateX, translateY and scale respectively.
        </Text>
        <Text className='text-center text-xs text-gray-600'>
          By <Text className='text-blue-500'>codeAbinash</Text>
        </Text>
        <PaddingBottom />
      </View>
    </View>
  )
}
