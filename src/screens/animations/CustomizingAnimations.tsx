import { PaddingBottom } from '@components/SafePadding'
import { useEffect } from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated'

export default function CustomizingAnimations() {
  return (
    <View className='flex-1 items-center justify-center bg-gray-50 dark:bg-gray-950'>
      <ScrollView
        className='w-full'
        contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', gap: 50 }}
      >
        <View />
        <Example1 />
        <PaddingBottom />
      </ScrollView>
    </View>
  )
}

const duration = 2000

function Example1() {
  const withSpringAnim = useSharedValue(150)
  const defaultAnim = useSharedValue(150)
  const back = useSharedValue(150)
  const bounce = useSharedValue(150)
  const easeIn = useSharedValue(150)
  const easeOut = useSharedValue(150)
  const easeInOut = useSharedValue(150)
  const bezier = useSharedValue(150)
  const circle = useSharedValue(150)
  const cubic = useSharedValue(150)
  const ease = useSharedValue(150)
  const elastic = useSharedValue(150)
  const exp = useSharedValue(150)
  const linear = useSharedValue(150)
  const ploy = useSharedValue(150)
  const quad = useSharedValue(150)
  const sin = useSharedValue(150)
  const step = useSharedValue(150)
  const in_ = useSharedValue(150)
  const out = useSharedValue(150)
  const inOut = useSharedValue(150)

  const withSpringStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpringAnim.value }],
  }))

  const animatedDefault = useAnimatedStyle(() => ({
    transform: [{ translateX: defaultAnim.value }],
  }))
  const linearStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: linear.value }],
  }))

  const bounceStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: bounce.value }],
  }))

  const backStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: back.value }],
  }))

  const easeInStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: easeIn.value }],
  }))

  const easeOutStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: easeOut.value }],
  }))

  const easeInOutStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: easeInOut.value }],
  }))

  const bezierStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: bezier.value }],
  }))

  const circleStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: circle.value }],
  }))

  const cubicStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: cubic.value }],
  }))

  const easeStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: ease.value }],
  }))

  const elasticStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: elastic.value }],
  }))

  const expStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: exp.value }],
  }))

  // const ployStyle = useAnimatedStyle(() => ({
  //   transform: [{ translateX: ploy.value }],
  // }))

  const quadStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: quad.value }],
  }))

  const sinStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: sin.value }],
  }))

  // const stepStyle = useAnimatedStyle(() => ({
  //   transform: [{ translateX: step.value }],
  // }))

  const inStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: in_.value }],
  }))

  const outStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: out.value }],
  }))

  const inOutStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: inOut.value }],
  }))

  useEffect(() => {
    withSpringAnim.value = withRepeat(withSpring(-withSpringAnim.value + 50), -1, true)
    linear.value = withRepeat(withTiming(-linear.value, { duration, easing: Easing.linear }), -1, true)
    defaultAnim.value = withRepeat(withTiming(-defaultAnim.value, { duration }), -1, true)
    bounce.value = withRepeat(withTiming(-bounce.value, { duration, easing: Easing.bounce }), -1, true)
    back.value = withRepeat(withTiming(-back.value, { duration, easing: Easing.back(1) }), -1, true)
    easeIn.value = withRepeat(withTiming(-easeIn.value, { duration, easing: Easing.ease }), -1, true)
    easeOut.value = withRepeat(withTiming(-easeOut.value, { duration, easing: Easing.ease }), -1, true)
    easeInOut.value = withRepeat(withTiming(-easeInOut.value, { duration, easing: Easing.ease }), -1, true)
    bezier.value = withRepeat(withTiming(-bezier.value, { duration, easing: Easing.bezier(0.5, 0.5, 1, 1) }), -1, true)
    circle.value = withRepeat(withTiming(-circle.value, { duration, easing: Easing.circle }), -1, true)
    cubic.value = withRepeat(withTiming(-cubic.value, { duration, easing: Easing.cubic }), -1, true)
    ease.value = withRepeat(withTiming(-ease.value, { duration, easing: Easing.ease }), -1, true)
    elastic.value = withRepeat(withTiming(-elastic.value, { duration, easing: Easing.elastic(1) }), -1, true)
    exp.value = withRepeat(withTiming(-exp.value, { duration, easing: Easing.exp }), -1, true)
    quad.value = withRepeat(withTiming(-quad.value, { duration, easing: Easing.quad }), -1, true)
    sin.value = withRepeat(withTiming(-sin.value, { duration, easing: Easing.sin }), -1, true)
    //step.value = withRepeat(withTiming(-step.value, { duration, easing: Easing.step(5) }), -1, true)
    in_.value = withRepeat(withTiming(-in_.value, { duration, easing: Easing.in(Easing.quad) }), -1, true)
    out.value = withRepeat(withTiming(-out.value, { duration, easing: Easing.out(Easing.quad) }), -1, true)
    inOut.value = withRepeat(withTiming(-inOut.value, { duration, easing: Easing.inOut(Easing.quad) }), -1, true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <View>
      <Text className='mb-5 text-center text-lg'>Customizing Animations</Text>
      <View className='items-center justify-center'>
        <Animated.View
          className='flex h-20 w-20 items-center justify-center rounded-2xl bg-accent'
          style={[withSpringStyle]}
        >
          <Text className='text-center text-lg text-white'>Spring {'\n'}Physics</Text>
        </Animated.View>
        <Animated.View
          className='mt-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent'
          style={[animatedDefault]}
        >
          <Text className='text-center text-lg text-white'>Default {'\n'}In Out</Text>
        </Animated.View>
        <Animated.View
          className='mt-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent'
          style={[linearStyle]}
        >
          <Text className='text-lg text-white'>Linear</Text>
        </Animated.View>
        <Animated.View
          className='mt-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent'
          style={[bounceStyle]}
        >
          <Text className='text-lg text-white'>Bounce</Text>
        </Animated.View>
        <Animated.View
          className='mt-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent'
          style={[backStyle]}
        >
          <Text className='text-lg text-white'>Back</Text>
        </Animated.View>
        <Animated.View
          className='mt-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent'
          style={[easeInStyle]}
        >
          <Text className='text-lg text-white'>Ease In</Text>
        </Animated.View>
        <Animated.View
          className='mt-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent'
          style={[easeOutStyle]}
        >
          <Text className='text-lg text-white'>Ease Out</Text>
        </Animated.View>
        <Animated.View
          className='mt-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent'
          style={[easeInOutStyle]}
        >
          <Text className='text-lg text-white'>Ease In Out</Text>
        </Animated.View>
        <Animated.View
          className='mt-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent'
          style={[bezierStyle]}
        >
          <Text className='text-lg text-white'>Bezier</Text>
        </Animated.View>
        <Animated.View
          className='mt-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent'
          style={[circleStyle]}
        >
          <Text className='text-lg text-white'>Circle</Text>
        </Animated.View>
        <Animated.View
          className='mt-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent'
          style={[cubicStyle]}
        >
          <Text className='text-lg text-white'>Cubic</Text>
        </Animated.View>
        <Animated.View
          className='mt-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent'
          style={[easeStyle]}
        >
          <Text className='text-lg text-white'>Ease</Text>
        </Animated.View>
        <Animated.View
          className='mt-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent'
          style={[elasticStyle]}
        >
          <Text className='text-lg text-white'>Elastic</Text>
        </Animated.View>
        <Animated.View
          className='mt-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent'
          style={[expStyle]}
        >
          <Text className='text-lg text-white'>Exp</Text>
        </Animated.View>
        {/* <Animated.View className='mt-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent' style={[ployStyle]}>
          <Text className='text-lg text-white'>Ploy</Text>
        </Animated.View> */}
        <Animated.View
          className='mt-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent'
          style={[quadStyle]}
        >
          <Text className='text-lg text-white'>Quad</Text>
        </Animated.View>
        <Animated.View
          className='mt-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent'
          style={[sinStyle]}
        >
          <Text className='text-lg text-white'>Sin</Text>
        </Animated.View>
        {/* <Animated.View className='mt-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent' style={[stepStyle]}>
          <Text className='text-lg text-white'>Step</Text>
        </Animated.View> */}
        <Animated.View
          className='mt-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent'
          style={[inStyle]}
        >
          <Text className='text-lg text-white'>In</Text>
        </Animated.View>
        <Animated.View
          className='mt-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent'
          style={[outStyle]}
        >
          <Text className='text-lg text-white'>Out</Text>
        </Animated.View>
        <Animated.View
          className='mt-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent'
          style={[inOutStyle]}
        >
          <Text className='text-lg text-white'>In Out</Text>
        </Animated.View>
      </View>
    </View>
  )
}
