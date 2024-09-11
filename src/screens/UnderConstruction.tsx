import { Bold, Regular } from '@utils/fonts'
import LottieView from 'lottie-react-native'
import React from 'react'
import { Dimensions, View } from 'react-native'

const { width } = Dimensions.get('window')

export default function UnderConstruction() {
  return (
    <View className='h-screen w-screen items-center justify-center bg-zinc-50 px-5 dark:bg-black'>
      <LottieView
        source={require('../assets/animations/coming-soon.lottie')}
        autoPlay
        loop
        style={{
          width: width - 70,
          height: width - 70,
          marginBottom: 20,
        }}
        hardwareAccelerationAndroid
        cacheComposition
      />
      <Bold className='text-center text-2xl text-gray-800 dark:text-gray-200'>Under construction</Bold>
      <Regular className='mt-1 w-4/5 text-center text-gray-500 dark:text-gray-400'>
        This screen is under construction. Please check back later.
      </Regular>
    </View>
  )
}
