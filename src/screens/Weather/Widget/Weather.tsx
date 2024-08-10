import { PlusSignIcon, Setting07Icon } from '@assets/icons/icons'
import { PaddingBottom, PaddingTop } from '@components/SafePadding'
import { Canvas, LinearGradient, Rect, vec } from '@shopify/react-native-skia'
import { H, W } from '@utils/dimensions'
import { Light, Medium } from '@utils/fonts'
import type { NavProp, StackNav } from '@utils/types'
import React from 'react'
import { StatusBar, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDerivedValue } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { themeList } from './themes'

export default function Weather({ navigation }: NavProp) {
  const theme = themeList.at(0)!
  const color = theme.color
  const gradient = useDerivedValue(() => theme.gradient, [])

  const bottom = useSafeAreaInsets().bottom
  const top = useSafeAreaInsets().top
  const h = H + bottom + top
  const w = W

  return (
    <>
      <StatusBar backgroundColor='transparent' barStyle={'light-content'} />
      <Canvas style={[{ position: 'absolute', height: h, width: w }]}>
        <Rect x={0} y={0} width={w} height={h}>
          <LinearGradient colors={gradient} start={vec(w / 2, 0)} end={vec(w / 2, h)} />
        </Rect>
      </Canvas>
      <View className='flex-1 px-5'>
        <PaddingTop />
        <Header navigation={navigation} color={color} />

        <Medium className='mt-7 text-center' style={[color, { fontSize: 25 }]}>
          Bankura
        </Medium>
        <View className='flex-row justify-center'>
          <Light
            className='mt-2 items-start justify-start text-center'
            style={[
              color,
              {
                lineHeight: 160,
                fontSize: 140,
              },
            ]}
          >
            62
          </Light>
          <Medium style={[color, { fontSize: 60 }]}>°</Medium>
        </View>
        <Medium className='-mt-4 text-center text-lg' style={color}>
          Thunderstorm
        </Medium>
        <Medium className='mt-0.5 text-center text-lg' style={color}>
          H:30° L:20°
        </Medium>
        <PaddingBottom />
      </View>
    </>
  )
}

function Header({ navigation, color }: { navigation: StackNav; color: { color: string } }) {
  // return <View className='h-20 w-full'></View>
  return (
    <View className='flex-row items-center justify-between'>
      <TouchableOpacity className='py-3 pr-3' onPress={() => navigation.navigate('WeatherSearchCity', { shouldGoBack: true })}>
        <PlusSignIcon width={25} height={25} color={color.color} />
      </TouchableOpacity>
      <TouchableOpacity className='py-3 pl-3' onPress={() => navigation.navigate('WeatherSettings')}>
        <Setting07Icon width={24} height={24} color={color.color} />
      </TouchableOpacity>
    </View>
  )
}
