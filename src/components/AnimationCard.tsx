import { Extrapolate } from '@shopify/react-native-skia'
import React from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

export default function AnimationCard({
  W,
  H = W / 2,
  ISize,
  children = null,
}: {
  W: number
  H?: number
  ISize: number
  children: React.ReactNode
}) {
  const rotateX = useSharedValue(0)
  const rotateY = useSharedValue(0)
  const gesture = Gesture.Pan()
    .onBegin(({ x, y }: { x: number; y: number }) => {
      'worklet'
      rotateY.value = withTiming(interpolate(x, [0, W], [-ISize, ISize], Extrapolate.CLAMP))
      rotateX.value = withTiming(interpolate(y, [0, H], [ISize, -ISize], Extrapolate.CLAMP))
    })
    .onUpdate(({ x, y }: { x: number; y: number }) => {
      'worklet'
      rotateY.value = interpolate(x, [0, W], [-ISize, ISize], Extrapolate.CLAMP)
      rotateX.value = interpolate(y, [0, H], [ISize, -ISize], Extrapolate.CLAMP)
    })
    .onFinalize(() => {
      'worklet'
      rotateY.value = withTiming(0)
      rotateX.value = withTiming(0)
    })

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateY: `${rotateY.value}deg`,
        },
        {
          rotateX: `${rotateX.value}deg`,
        },
      ],
    }
  }, [])
  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={[
          {
            zIndex: 100,
            transform: [
              {
                perspective: 100,
              },
            ],
          },
          rStyle,
        ]}
      >
        {children}
      </Animated.View>
    </GestureDetector>
  )
}
