import Images from '@assets/images/images'
import Btn from '@components/Button'
import COL, { Colors } from '@utils/colors'
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Animated, { useAnimatedProps, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import Svg, { Circle } from 'react-native-svg'

const { width } = Dimensions.get('window')

export default function Basic() {
  return (
    <View className='flex-1 items-center justify-center bg-white dark:bg-gray-950'>
      <ScrollView
        className='w-full'
        contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', gap: 50 }}
      >
        <View />
        <Example1 />
        <Example2 />
        <Example3 />
        <Example4 />
      </ScrollView>
    </View>
  )
}

function Example1() {
  const w = useSharedValue(100)
  const handlePress = () => {
    if (w.value >= width - 50) w.value = withSpring(100)
    else w.value = withSpring(w.value + 50)
  }
  return (
    <View>
      <Text className='mb-5 text-center text-lg'>Example 1</Text>
      <View className='items-center justify-center'>
        <Animated.View
          style={{
            width: w,
            height: 100,
            backgroundColor: Colors.accent,
            borderRadius: 20,
          }}
        />
        <Btn onPress={handlePress} className='mt-5'>
          <Text className='text-white'>Click to Increase Width</Text>
        </Btn>
      </View>
    </View>
  )
}

function Example2() {
  const translateX = useSharedValue(0)

  function handlePress() {
    translateX.value = withSpring(translateX.value + 50)
  }

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value * 2 }],
    }
  }, [])

  return (
    <View className='w-full'>
      <Text className='mb-5 w-full text-center text-lg'>Example 2</Text>
      <View className='w-full px-4'>
        <Animated.View className='h-24 w-24 rounded-3xl bg-accent' style={[animatedStyles]} />
      </View>
      <View className='flex flex-row items-center justify-center'>
        <Btn onPress={handlePress} className='bg-bluePrimary mt-5'>
          <Text className='text-white'>Click to Translate</Text>
        </Btn>
      </View>
    </View>
  )
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

function Example3() {
  const r = useSharedValue(10)

  const handlePress = () => {
    r.value += 10
  }

  const animatedProps = useAnimatedProps(() => ({
    r: withSpring(r.value),
  }))

  return (
    <View className='w-full'>
      <Text className='mb-5 w-full text-center text-lg'>Example 2</Text>
      <View className='w-full items-center justify-center px-4'>
        <Svg width={width} height={200}>
          <AnimatedCircle cx={width / 2} cy='100' r={r} fill={COL.g2} animatedProps={animatedProps} />
        </Svg>
      </View>
      <View className='flex flex-row items-center justify-center'>
        <Btn onPress={handlePress} className='bg-onYellow mt-5'>
          <Text className='text-white'>Click to Increase Radius</Text>
        </Btn>
      </View>
    </View>
  )
}

const ICON_SIZE = width * 0.4

const styles = StyleSheet.create({
  icon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    resizeMode: 'contain',
  },
})

function Example4() {
  const rotation = useSharedValue(0)

  function handlePress() {
    rotation.value = withSpring(rotation.value + 90)
  }

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    }
  }, [])

  return (
    <View className='w-full pb-20'>
      <Text className='mb-5 w-full text-center text-lg'>Example 4</Text>
      <View className='w-full items-center justify-center px-4'>
        <Animated.Image source={Images.app_icon} style={[styles.icon, animatedStyle]} />
      </View>
      <View className='flex flex-row items-center justify-center'>
        <Btn onPress={handlePress} className='bg-pinkPrimary mt-5'>
          <Text className='text-white'>Click to Rotate</Text>
        </Btn>
      </View>
    </View>
  )
}
