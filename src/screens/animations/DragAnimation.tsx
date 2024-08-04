import Images from '@assets/images/images'
import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import Animated, {
  Easing,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated'

export default function DragAnimation() {
  const translateX = useSharedValue(0)
  const translateY = useSharedValue(0)
  const textOpacity = useSharedValue(1)

  const rotate = useSharedValue(0)

  const GestureHandler = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, { x: number; y: number }>({
    onStart: (_, ctx) => {
      ctx.x = translateX.value
      ctx.y = translateY.value
      textOpacity.value = withTiming(0, { duration: 200 })
    },
    onActive: (event, ctx) => {
      translateX.value = ctx.x + event.translationX
      translateY.value = ctx.y + event.translationY
    },
    onEnd: () => {
      translateX.value = withSpring(0)
      translateY.value = withSpring(0)
    },
    onFinish: () => {
      textOpacity.value = withDelay(500, withTiming(1))
    },
  })

  const animationStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }, { translateY: translateY.value }],
    }
  }, [])

  const animatedStyleForText = useAnimatedStyle(() => {
    return {
      opacity: textOpacity.value,
    }
  }, [])

  const animatedImageStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotate.value}deg` }],
    }
  }, [])

  useEffect(() => {
    rotate.value = withRepeat(withTiming(360, { duration: 4000, easing: Easing.linear }), -1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <View style={styles.container} className='bg-gray-50 dark:bg-gray-950'>
      <View className='border border-gray-100 dark:border-gray-900' style={{ borderRadius: 23 }}>
        <PanGestureHandler onGestureEvent={GestureHandler}>
          <Animated.View style={[styles.square, animationStyle]} className='bg-gray-100 dark:bg-gray-900'>
            <Animated.Image source={Images.app_icon} style={[styles.image, animatedImageStyle]} />
          </Animated.View>
        </PanGestureHandler>
      </View>
      <Animated.Text className='mt-5 text-gray-500' style={animatedStyleForText}>
        Drag the square
      </Animated.Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: 100,
    height: 100,
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#555555',
    elevation: 3,
  },
  image: {
    width: 65,
    height: 65,
    resizeMode: 'contain',
  },
})
