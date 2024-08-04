import React from 'react'
import { Dimensions, Text, View } from 'react-native'

const INTERVAL = {}
const { width, height } = Dimensions.get('window')

const W = width * 0.63

export default function LevelAnimation() {
  return (
    <View className='flex-1 items-center justify-center bg-gray-50 dark:bg-gray-950'>
      <Text>Level Animation</Text>
    </View>
  )
}
