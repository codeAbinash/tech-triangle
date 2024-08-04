import React from 'react'
import { Pressable, type PressableProps } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated'
export type CustomPressProps = PressableProps & {
  children: React.ReactNode
  activeOpacity?: number
  activeScale?: number
  duration?: number
  disabled?: boolean
  variant?: 'primary' | 'secondary'
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

export default function Press({ children, style, activeOpacity = 0.8, activeScale = 0.98, duration = 100, ...props }: CustomPressProps) {
  const scale = useSharedValue(1)
  const opacity = useSharedValue(1)
  const pan = Gesture.Pan()
    .onBegin(() => {
      scale.value = withTiming(activeScale, { duration })
      opacity.value = withTiming(activeOpacity, { duration })
    })
    .onEnd(() => {
      scale.value = withTiming(1, { duration })
      opacity.value = withTiming(1, { duration })
    })
    .onFinalize(() => {
      scale.value = withTiming(1, { duration })
      opacity.value = withTiming(1, { duration })
    })

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      opacity: opacity.value,
    }
  })

  if (props.disabled) {
    return (
      <Pressable style={style} disabled {...props} className='opacity-40'>
        {children}
      </Pressable>
    )
  }

  return (
    <GestureDetector gesture={pan}>
      <AnimatedPressable style={[animatedStyles, style]} {...props}>
        {children}
      </AnimatedPressable>
    </GestureDetector>
  )
}
