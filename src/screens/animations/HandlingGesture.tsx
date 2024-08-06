import { default as COL, default as colors } from '@utils/colors'
import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import { Gesture, GestureDetector, GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue, withDecay, withSpring, withTiming } from 'react-native-reanimated'

export default function HandlingGesture() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View className='flex-1 items-center justify-center bg-gray-50 dark:bg-gray-950'>
        <ScrollView className='w-full' contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', gap: 50 }}>
          <View />
          <TapGesture />
          <PanGesture />
          <WithDecay />
        </ScrollView>
      </View>
    </GestureHandlerRootView>
  )
}

const { width } = Dimensions.get('window')
function TapGesture() {
  const pressed = useSharedValue(false)
  const tap = Gesture.Tap()
    .onBegin(() => {
      pressed.value = true
    })
    .onEnd(() => {
      pressed.value = false
    })
    .onTouchesCancelled(() => {
      pressed.value = false
    })

  const animatedStyles = useAnimatedStyle(() => ({
    backgroundColor: withTiming(pressed.value ? COL.g1 : COL.g2),
    transform: [{ scale: withTiming(pressed.value ? 1.1 : 1) }],
  }))

  return (
    <View>
      <Text className='mb-5 text-center text-lg'>Tap Gesture</Text>
      <View className='items-center justify-center'>
        <GestureDetector gesture={tap}>
          <View className='p-2 pt-0'>
            <Animated.View className='flex h-28 w-28 items-center justify-center rounded-3xl bg-accent' style={animatedStyles}>
              <Text className='text-lg text-white'>Tap</Text>
            </Animated.View>
          </View>
        </GestureDetector>
      </View>
    </View>
  )
}

function PanGesture() {
  const translateX = useSharedValue(0)
  const pressed = useSharedValue(false)
  const pan = Gesture.Pan()
    .onBegin(() => {
      pressed.value = true
    })
    .onChange(({ translationX }) => {
      translateX.value = translationX
    })
    .onFinalize(() => {
      pressed.value = false
      translateX.value = withSpring(0)
    })

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
      backgroundColor: pressed.value ? COL.g2 : colors.g1,
    }
  })

  return (
    <View>
      <Text className='mb-5 text-center text-lg'>Pan Gesture</Text>
      <View className='items-center justify-center'>
        <GestureDetector gesture={pan}>
          <Animated.View className='flex h-28 w-28 items-center justify-center rounded-3xl bg-accent' style={animatedStyles}>
            <Text className='text-lg text-white'>Drag</Text>
          </Animated.View>
        </GestureDetector>
      </View>
    </View>
  )
}

function WithDecay() {
  const offset = useSharedValue(0)
  const SIZE = 100
  const w = useSharedValue(width)
  const pan = Gesture.Pan()
    .onBegin(() => {})
    .onChange((event) => {
      offset.value += event.changeX
    })
    .onFinalize((event) => {
      offset.value = withDecay({
        velocity: event.velocityX,
        rubberBandEffect: false,
        clamp: [-(w.value / 2) + SIZE / 2, w.value / 2 - SIZE / 2],
      })
    })

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value }],
    }
  })

  return (
    <View>
      <Text className='mb-5 text-center text-lg'>With Decay</Text>
      <View className='items-center justify-center'>
        <GestureDetector gesture={pan}>
          <Animated.View className='flex h-28 w-28 items-center justify-center rounded-3xl bg-accent' style={animatedStyles}>
            <Text className='text-lg text-white'>Drag</Text>
          </Animated.View>
        </GestureDetector>
      </View>
    </View>
  )
}
