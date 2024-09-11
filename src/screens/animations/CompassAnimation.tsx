import { PaddingBottom } from '@components/SafePadding'
import React, { useState } from 'react'
import { Dimensions, Text, View } from 'react-native'
import Animated, {
  SensorType,
  runOnJS,
  useAnimatedSensor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated'

const INTERVAL = {}
const { width } = Dimensions.get('window')

const W = width * 0.7

function in_360_degrees(value: number) {
  'worklet'
  value = value * (180 / Math.PI)
  return value < 0 ? (value + 360).toFixed(0) : value.toFixed(0)
}

export default function CompassAnimation() {
  const rotation = useAnimatedSensor(SensorType.ROTATION, INTERVAL)
  const yaw = useSharedValue(0)
  const [text, setText] = useState('Not Available')

  const updateText = (value: string) => {
    setText(value)
  }

  useDerivedValue(() => {
    'worklet'
    yaw.value = rotation.sensor.value.yaw
    runOnJS(updateText)(`${in_360_degrees(yaw.value)}`)
  }, [])

  const style = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${yaw.value}rad` }],
    }
  }, [])

  return (
    <View className='flex-1 items-center justify-between bg-gray-50 dark:bg-gray-950'>
      <View />
      <View className='items-center justify-center'>
        <Text className='mb-5 text-center text-3xl'>{text}°</Text>
        <Animated.View className='justify-between rounded-full bg-accent p-4' style={[style, { width: W, height: W }]}>
          <View>
            <Text className='text-center text-2xl text-white'>|</Text>
            <Text className='text-center text-2xl text-white'>N</Text>
          </View>
          <View className='flex w-full flex-row justify-between'>
            <Text className='text-left text-2xl text-white'> W</Text>
            <Text className='text-right text-2xl text-white'>E </Text>
          </View>
          <View>
            <Text className='text-center text-2xl text-white'>S</Text>
            <Text className='text-center text-2xl text-white'>|</Text>
          </View>
        </Animated.View>
        <Text className='mt-10 px-14 text-center text-xs text-gray-600'>
          With the help of rotation, we can get the value of yaw, pitch and roll. Using yaw value to rotate the compass.
        </Text>
      </View>
      <View>
        <Text className='text-center text-xs text-gray-600'>
          By <Text className='text-pinkPrimary'>codeAbinash</Text>
        </Text>
        <PaddingBottom />
      </View>
    </View>
  )
}
