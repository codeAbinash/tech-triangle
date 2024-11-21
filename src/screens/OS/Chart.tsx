import type { Chart } from '@/lib/lib'
import { PaddingBottom } from '@components/SafePadding'
import type { RouteProp } from '@react-navigation/native'
import { ColorList, Colors } from '@utils/colors'
import { H } from '@utils/dimensions'
import { Medium } from '@utils/fonts'
import type { StackNav } from '@utils/types'
import React, { useMemo } from 'react'
import { StatusBar, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

type ParamList = {
  Chart: ChartParamList
}

export type ChartParamList = {
  title: string
  chart: Chart[]
  maxTime: number
}

export default function Chart({ navigation, route }: { navigation: StackNav; route: RouteProp<ParamList, 'Chart'> }) {
  const { title, maxTime, chart } = route.params
  const height = useMemo(() => (chart.length >= 8 ? H * 1.5 - 200 : H - 200), [chart.length])
  return (
    <ScrollView
      className='h-screen gap-5 px-5 pt-5 dark:bg-zinc-950'
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}
    >
      <StatusBar barStyle='default' />
      <Medium className='text-center text-sm text-black dark:text-white'>{title}</Medium>
      <View className='flex-row justify-between'>
        <View />
        <View className='flex-row justify-between'>
          <View className='items-center justify-center gap-y-2 pl-2'>
            <Medium className='text-xs'>
              Avg. Waiting Time: {(chart.reduce((acc, item) => acc + (item.endTime - item.startTime), 0) / chart.length).toFixed(2)}
            </Medium>
            <Medium className='text-xs'>
              Avg. Turnaround Time: {(chart.reduce((acc, item) => acc + (item.endTime - item.startTime), 0) / chart.length).toFixed(2)}
            </Medium>
            <Medium className='text-xs'>Throughput: {(chart.length / maxTime).toFixed(2)} / unit time</Medium>
          </View>
        </View>
        <View className='flex-row'>
          <View className='gap-y-2 pr-1.5'>
            {chart.map((item, index) => (
              <View
                key={index}
                className='w-full items-center'
                style={{
                  height: ((item.endTime - item.startTime) / maxTime) * height,
                }}
              >
                <Medium style={{ fontSize: 11, marginTop: -10 }}>{item.startTime}</Medium>
              </View>
            ))}
            <View className='w-full items-center'>
              <Medium style={{ fontSize: 11, marginTop: -10 }}>{maxTime}</Medium>
            </View>
          </View>
          <View className='gap-y-2'>
            {chart.map((item, index) => (
              <View
                key={index}
                className='w-full items-center justify-center rounded-xl'
                style={{
                  width: 50,
                  height: ((item.endTime - item.startTime) / maxTime) * height,
                  backgroundColor: item.isBlank ? Colors.gray[500] : ColorList[index % ColorList.length],
                }}
              >
                <Medium className='text-xs text-white' style={{ transform: [{ rotate: '-90deg' }] }}>
                  {item.name}
                </Medium>
              </View>
            ))}
          </View>
        </View>
      </View>
      <PaddingBottom />
    </ScrollView>
  )
}
