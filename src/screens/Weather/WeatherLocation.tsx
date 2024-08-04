import StackHeader from '@components/StackHeader'
import { PoppinsMedium, PoppinsSemiBold } from '@utils/fonts'
import type { NavProp } from '@utils/types'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default function WeatherLocation({ navigation }: NavProp) {
  return (
    <ScrollView className='h-screen p-5'>
      <View style={{ gap: 15 }}>
        <StackHeader title='Current Location' navigation={navigation} left='Cancel' right='Done' />
      </View>
    </ScrollView>
  )
}
