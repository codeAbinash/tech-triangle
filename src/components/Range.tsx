import { interpolateColors } from '@shopify/react-native-skia'
import { Colors } from '@utils/colors'
import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, View, type LayoutChangeEvent } from 'react-native'
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler'
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withTiming, interpolateColor  } from 'react-native-reanimated'

type RangeProps = {
  value: number
  setValue: (val: number) => void
  Left?: React.ReactNode
  Right?: React.ReactNode
  accent?: string
}

export default function Range({ value, setValue, Left, Right, accent = Colors.accent }: RangeProps) {
  const [containerWidth, setContainerWidth] = useState(0)
  const offset = useSharedValue(0)
  const scale = useSharedValue(1)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (containerWidth > 0) offset.value = withTiming(containerWidth * value)
    }, 50)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerWidth])

  useEffect(() => {
    const timer = setTimeout(() => (offset.value = containerWidth * value), 100)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  const pan = Gesture.Pan()
    .onBegin(() => (scale.value = withTiming(1.2)))
    .onChange((event) => {
      offset.value += event.changeX
      offset.value = Math.min(Math.max(offset.value, 0), containerWidth)
    })
    .onFinalize(() => {
      scale.value = withTiming(1)
      const percentage = offset.value / containerWidth
      runOnJS(setValue)(percentage)
    })

  const animatedStyles = useAnimatedStyle(
    () => ({ transform: [{ translateX: offset.value }, { scale: scale.value }] }),
    [offset, scale],
  )
  const widthStyle = useAnimatedStyle(() => ({ width: offset.value }), [offset])

  const backgroundColorStyle = useAnimatedStyle(
    () => ({ backgroundColor: interpolateColor(scale.value, [1, 1.2], ['white', '#ffffff99']),
      shadowColor: interpolateColor(scale.value, [1, 1.2], [Colors.black, 'transparent']),
      shadowOpacity: interpolateColor(scale.value, [1, 1.2], [0.1, 0]),
      borderColor: interpolateColor(scale.value, [1, 1.2], ['transparent', Colors.neutral[900] + '08']),
     }),
    [scale, accent],
  )

  const handleLayout = useCallback((event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout
    if (width !== 0) setContainerWidth(width)
  }, [])

  return (
    <View className='flex-row items-center px-5' style={{ gap: 10 }}>
      {Left}
      <GestureHandlerRootView>
        <GestureDetector gesture={pan}>
          <View className='justify-center py-2'>
            <View className='absolute h-1 w-full rounded-full' style={styles.container}>
              <View
                className='h-1 rounded-full bg-black/10 dark:bg-white/10'
                style={{ height: 3.2 }}
                onLayout={handleLayout}
              >
                <Animated.View
                  style={[widthStyle, { height: 3.2, backgroundColor: accent }]}
                  className='rounded-full'
                />
              </View>
            </View>
            <Animated.View style={[styles.circle, animatedStyles, backgroundColorStyle]} className='bg-white' />
          </View>
        </GestureDetector>
      </GestureHandlerRootView>
      {Right}
    </View>
  )
}

const styles = StyleSheet.create({
  circle: {
    height: 25,
    width: 36,
    borderRadius: 500,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3.84,
    borderWidth: 1,
    elevation: 5,
  },
  container: { height: 3.2, paddingLeft: 14, paddingEnd: 14 },
})

// function increaseValue() {
//   let val = offset.value
//   let percentage = (val / containerWidth) * 100
//   if (percentage >= 90) {
//     offset.value = withTiming(100 * (containerWidth / 100), { duration: animDuration })
//     setValue(100)
//     return
//   }
//   offset.value = withTiming(offset.value + 10 * (containerWidth / 100), { duration: animDuration })
//   setValue(value + 10)
// }

// function decreaseValue() {
//   let val = offset.value
//   let percentage = (val / containerWidth) * 100
//   console.log('Decrease', percentage)
//   if (percentage <= 10) {
//     offset.value = withTiming(0, { duration: animDuration })
//     setValue(0)
//     return
//   }
//   offset.value = withTiming(offset.value - 10 * (containerWidth / 100), { duration: animDuration })
//   setValue(value - 10)
// }
