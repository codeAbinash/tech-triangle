import Btn from '@components/Button'
import React from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withRepeat, withSequence, withTiming } from 'react-native-reanimated'

export default function ApplyingModifiers() {
  return (
    <View className='flex-1 items-center justify-center bg-gray-50 dark:bg-gray-950'>
      <ScrollView className='w-full' contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', gap: 50 }}>
        <View />
        <Example1 />
        <Example2 />
        <Example3 />
      </ScrollView>
    </View>
  )
}

function Example1() {
  const offset = useSharedValue(0)
  const style = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }))
  const OFFSET = 40

  const handlePress = () => {
    offset.value = withRepeat(withTiming(OFFSET), 5, true)
  }
  return (
    <View>
      <Text className='mb-5 text-center text-lg'>With Repeat: 5</Text>
      <View className='items-center justify-center'>
        <Animated.View className='h-24 w-24 rounded-2xl bg-accent' style={style} />
        <Btn onPress={handlePress} className='mt-5'>
          Shake
        </Btn>
      </View>
    </View>
  )
}

const TIME = 250
function Example2() {
  const offset = useSharedValue(0)
  const style = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }))
  const OFFSET = 40

  const handlePress = () => {
    offset.value = withSequence(
      // start from -OFFSET
      withTiming(-OFFSET, { duration: TIME / 2 }),
      // shake between -OFFSET and OFFSET 5 times
      withRepeat(withTiming(OFFSET, { duration: TIME }), 5, true),
      // go back to 0 at the end
      withTiming(0, { duration: TIME / 2 }),
    )
  }
  return (
    <View>
      <Text className='mb-5 text-center text-lg'>With Sequence</Text>
      <View className='items-center justify-center'>
        <Animated.View className='h-24 w-24 rounded-2xl bg-accent' style={style} />
        <Btn onPress={handlePress} className='bg-bluePrimary mt-5'>
          Shake
        </Btn>
      </View>
    </View>
  )
}

const DELAY = 400
function Example3() {
  const offset = useSharedValue(0)
  const style = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }))
  const OFFSET = 40

  const handlePress = () => {
    offset.value = withDelay(
      DELAY,
      withSequence(
        // start from -OFFSET
        withTiming(-OFFSET, { duration: TIME / 2 }),
        // shake between -OFFSET and OFFSET 5 times
        withRepeat(withTiming(OFFSET, { duration: TIME }), 5, true),
        // go back to 0 at the end
        withTiming(0, { duration: TIME / 2 }),
      ),
    )
  }
  return (
    <View>
      <Text className='mb-5 text-center text-lg'>With Delay</Text>
      <View className='items-center justify-center'>
        <Animated.View className='h-24 w-24 rounded-2xl bg-accent' style={style} />
        <Btn onPress={handlePress} className='bg-greenPrimary mt-5'>
          Shake
        </Btn>
      </View>
    </View>
  )
}
