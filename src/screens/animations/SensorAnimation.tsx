import { PaddingBottom } from '@components/SafePadding'
import { default as COL, default as colors, Colors } from '@utils/colors'
import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Animated, { SensorType, useAnimatedSensor, useAnimatedStyle, withSpring } from 'react-native-reanimated'

let { width } = Dimensions.get('window')

const PADDING = 25

width = width - PADDING * 2

export default function SensorAnimation() {
  return (
    <View className='flex-1 items-center justify-center bg-gray-50 dark:bg-gray-950'>
      <ScrollView contentContainerStyle={{ paddingBottom: 40, gap: 30, paddingHorizontal: PADDING, paddingTop: PADDING + 15 }}>
        <Rotation />
        <Gyroscope />
        <Accelerometer />
        <Gravity />
        <Magnet />
        <Text className='mt-5 text-center text-base font-bold text-gray-700'>
          By <Text className='text-accent'>codeAbinash</Text>
        </Text>
        <PaddingBottom />
      </ScrollView>
    </View>
  )
}

const INTERVAL = {
  interval: __DEV__ ? 100 : 10,
}

const MAX_GRAVITY_VALUE = 15

function Gravity() {
  const gravity = useAnimatedSensor(SensorType.GRAVITY, INTERVAL)

  const styleX = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring((gravity.sensor.value.x / (MAX_GRAVITY_VALUE * 2)) * width) }],
    }
  }, [])

  const styleY = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring((gravity.sensor.value.y / (MAX_GRAVITY_VALUE * 2)) * width) }],
    }
  }, [])

  const styleZ = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring((gravity.sensor.value.z / (MAX_GRAVITY_VALUE * 2)) * width) }],
    }
  }, [])

  return (
    <View className='w-full' style={{ gap: 10 }}>
      <Text className='mb-2 text-center text-base font-bold text-gray-700'>Gravity - Accelerometer</Text>
      <SensorDisplayData title='Gravity along the X-axis in m/s²' maxVal={MAX_GRAVITY_VALUE} style={styleX} color={COL.g1} />
      <SensorDisplayData title='Gravity along the Y-axis in m/s²' maxVal={MAX_GRAVITY_VALUE} style={styleY} color={COL.g2} />
      <SensorDisplayData title='Gravity along the Z-axis in m/s²' maxVal={MAX_GRAVITY_VALUE} style={styleZ} color={COL.gray100} />
    </View>
  )
}

const MAX_MAGNET = 200

function Magnet() {
  const magnetic_field = useAnimatedSensor(SensorType.MAGNETIC_FIELD, INTERVAL)

  const styleX = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring((magnetic_field.sensor.value.x / (MAX_MAGNET * 2)) * width) }],
    }
  }, [])

  const styleY = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring((magnetic_field.sensor.value.y / (MAX_MAGNET * 2)) * width) }],
    }
  }, [])

  const styleZ = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring((magnetic_field.sensor.value.z / (MAX_MAGNET * 2)) * width) }],
    }
  }, [])

  return (
    <View className='w-full' style={{ gap: 10 }}>
      <Text className='mb-2 text-center text-base font-bold text-gray-700'>Magnetic Field - Magnetometer</Text>
      <SensorDisplayData title='Magnetic Field along the X-axis in μT' maxVal={MAX_MAGNET} style={styleX} color={COL.g1} />
      <SensorDisplayData title='Magnetic Field along the Y-axis in μT' maxVal={MAX_MAGNET} style={styleY} color={COL.g2} />
      <SensorDisplayData title='Magnetic Field along the Z-axis in μT' maxVal={MAX_MAGNET} style={styleZ} color={Colors.accent} />
    </View>
  )
}

const MAX_PITCH_VALUE = Math.PI / 2
const MAX_ROLL_VALUE = Math.PI
const MAX_YAW_VALUE = Math.PI
const MAX_QW_VALUE = 1
const MAX_QX_VALUE = 1
const MAX_QY_VALUE = 1
const MAX_QZ_VALUE = 1

function Rotation() {
  const rotation = useAnimatedSensor(SensorType.ROTATION, INTERVAL)

  const stylePitch = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring((rotation.sensor.value.pitch / (MAX_PITCH_VALUE * 2)) * width) }],
    }
  }, [])

  const styleRoll = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring((rotation.sensor.value.roll / (MAX_ROLL_VALUE * 2)) * width) }],
    }
  }, [])

  const styleYaw = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring((rotation.sensor.value.yaw / (MAX_YAW_VALUE * 2)) * width) }],
    }
  }, [])

  const styleQw = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring((rotation.sensor.value.qw / (MAX_QW_VALUE * 2)) * width) }],
    }
  }, [])

  const styleQx = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring((rotation.sensor.value.qx / (MAX_QX_VALUE * 2)) * width) }],
    }
  }, [])

  const styleQy = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring((rotation.sensor.value.qy / (MAX_QY_VALUE * 2)) * width) }],
    }
  }, [])

  const styleQz = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring((rotation.sensor.value.qz / (MAX_QZ_VALUE * 2)) * width) }],
    }
  }, [])

  return (
    <View className='w-full' style={{ gap: 10 }}>
      <Text className='mt-5 text-center text-base font-bold text-gray-700'> Euler Angles and Quaternion - Rotation</Text>
      <View className='flex flex-row items-center justify-center'>
        <Text className='rounded-lg bg-purple-500/10 px-6 py-2 text-center text-purple-500'>QX² + QY² + QZ² + QW² = 1</Text>
      </View>
      <SensorDisplayData title='Yaw in rad' maxVal={'π'} style={styleYaw} color={colors.accent} />
      <SensorDisplayData title='Pitch in rad' maxVal={'π / 2'} style={stylePitch} color={colors.g2} />
      <SensorDisplayData title='Roll in rad' maxVal={'π'} style={styleRoll} color={colors.gray500} />
      <SensorDisplayData title='Quaternion W' maxVal={MAX_QW_VALUE} style={styleQw} color={colors.accent} />
      <SensorDisplayData title='Quaternion X' maxVal={MAX_QX_VALUE} style={styleQx} color={colors.g2} />
      <SensorDisplayData title='Quaternion Y' maxVal={MAX_QY_VALUE} style={styleQy} color={colors.gray500} />
      <SensorDisplayData title='Quaternion Z' maxVal={MAX_QZ_VALUE} style={styleQz} color={colors.gray200} />
    </View>
  )
}

const MAX_GYROSCOPE_VALUE = 10 * Math.PI

function Gyroscope() {
  const gyroscope = useAnimatedSensor(SensorType.GYROSCOPE, INTERVAL)

  const styleX = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring((gyroscope.sensor.value.x / (MAX_GYROSCOPE_VALUE * 2)) * width) }],
    }
  }, [])

  const styleY = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring((gyroscope.sensor.value.y / (MAX_GYROSCOPE_VALUE * 2)) * width) }],
    }
  }, [])

  const styleZ = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring((gyroscope.sensor.value.z / (MAX_GYROSCOPE_VALUE * 2)) * width) }],
    }
  }, [])

  return (
    <View className='w-full' style={{ gap: 10 }}>
      <Text className='mb-2 text-center text-base font-bold text-gray-700'>Angular Velocity - Gyroscope</Text>
      <SensorDisplayData title='Angular velocity around X-axis in rad/s' maxVal={'10π'} style={styleX} color={colors.accent} />
      <SensorDisplayData title='Angular velocity around Y-axis in rad/s' maxVal={'10π'} style={styleY} color={colors.g2} />
      <SensorDisplayData title='Angular velocity around Z-axis in rad/s' maxVal={'10π'} style={styleZ} color={colors.gray500} />
    </View>
  )
}

const MAX_ACCELEROMETER_VALUE = 50

function Accelerometer() {
  const accelerometer = useAnimatedSensor(SensorType.ACCELEROMETER, INTERVAL)

  const styleX = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring((accelerometer.sensor.value.x / (MAX_ACCELEROMETER_VALUE * 2)) * width) }],
    }
  }, [])

  const styleY = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring((accelerometer.sensor.value.y / (MAX_ACCELEROMETER_VALUE * 2)) * width) }],
    }
  }, [])

  const styleZ = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring((accelerometer.sensor.value.z / (MAX_ACCELEROMETER_VALUE * 2)) * width) }],
    }
  }, [])
  return (
    <View className='w-full' style={{ gap: 10 }}>
      <Text className='mb-2 text-center text-base font-bold text-gray-700'>Linear Acceleration - Accelerometer</Text>
      <SensorDisplayData title='Linear Acc. along the X-axis in m/s²' maxVal={MAX_ACCELEROMETER_VALUE} style={styleX} color={colors.accent} />
      <SensorDisplayData title='Linear Acc. along the Y-axis in m/s²' maxVal={MAX_ACCELEROMETER_VALUE} style={styleY} color={colors.g2} />
      <SensorDisplayData title='Linear Acc. along the Z-axis in m/s²' maxVal={MAX_ACCELEROMETER_VALUE} style={styleZ} color={colors.gray500} />
    </View>
  )
}

function SensorDisplayData({ title, maxVal, style, color }: { title: string; maxVal: number | string; style: any; color: string }) {
  return (
    <View className='w-full'>
      <View className='w-full'>
        <Text className='text-xs text-gray-600'>{title}</Text>
      </View>
      <View className='mt-1.5 w-full items-center justify-center rounded-full bg-gray-100 dark:bg-gray-900'>
        <Animated.View className='h-2.5 w-2.5 rounded-full' style={[{ backgroundColor: color }, style]} />
      </View>
      <View className='mt-0.5 flex w-full flex-row justify-between'>
        <Text className='text-xs text-gray-500'>-{maxVal}</Text>
        <Text className='text-xs text-gray-500'>0</Text>
        <Text className='text-xs text-gray-500'>{maxVal}</Text>
      </View>
    </View>
  )
}
