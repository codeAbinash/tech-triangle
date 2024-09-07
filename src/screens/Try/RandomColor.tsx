import Clipboard from '@react-native-clipboard/clipboard'
import { Medium } from '@utils/fonts'
import React, { useState } from 'react'
import { ToastAndroid, TouchableOpacity, View } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

// const randomColor = () => {
//   const letters = '0123456789ABCDEF'
//   let color = '#'
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)]
//   }
//   return color
// }

const randomColor = () => {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgb(${r}, ${g}, ${b})`
}

function rgbToHex(rgb: string) {
  const [r, g, b] = rgb.match(/\d+/g)!.map(Number)
  return `#${r!.toString(16)}${g!.toString(16)}${b!.toString(16)}`
}

function rgbToHsl(rgb: string) {
  const [r, g, b] = rgb.match(/\d+/g)!.map(Number)
  const R = r! / 255
  const G = g! / 255
  const B = b! / 255
  const cMax = Math.max(R, G, B)
  const cMin = Math.min(R, G, B)
  const delta = cMax - cMin
  let h = 0
  if (delta === 0) h = 0
  else if (cMax === R) h = ((G - B) / delta) % 6
  else if (cMax === G) h = (B - R) / delta + 2
  else h = (R - G) / delta + 4
  h = Math.round(h * 60)
  if (h < 0) h += 360
  const l = (cMax + cMin) / 2
  const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))
  return `hsl(${h}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`
}

// function rgbToCMYK(rgb: string) {
//   const [r, g, b] = rgb.match(/\d+/g)!.map(Number)
//   const R = r! / 255
//   const G = g! / 255
//   const B = b! / 255
//   const K = 1 - Math.max(R, G, B)
//   const C = (1 - R - K) / (1 - K)
//   const M = (1 - G - K) / (1 - K)
//   const Y = (1 - B - K) / (1 - K)
//   return `cmyk(${Math.round(C * 100)}%, ${Math.round(M * 100)}%, ${Math.round(Y * 100)}%, ${Math.round(K * 100)}%)`
// }

export default function RandomColor() {
  const [c, setC] = useState(randomColor())
  const color = useSharedValue(c)
  const hex = rgbToHex(c)
  const hsl = rgbToHsl(c)
  // const cmyk = rgbToCMYK(c)

  const animatedStyle = useAnimatedStyle(() => ({ backgroundColor: color.value }))
  const handlePress = () => {
    const rand = randomColor()
    color.value = withTiming(rand)
    setC(rand)
  }

  return (
    <Animated.View className='flex-1' style={animatedStyle}>
      <TouchableOpacity activeOpacity={1} className='w-full flex-1 items-center justify-center' onPress={handlePress}>
        <View className='w-2/3 rounded-2xl bg-black/10 px-4 py-5' style={{ gap: 15 }}>
          <Medium onPress={() => copyAndShowToast(hex)} className='text-center text-base uppercase text-white'>
            {hex}
          </Medium>
          <Medium onPress={() => copyAndShowToast(c)} className='text-center text-base text-white'>
            {c}
          </Medium>
          <Medium onPress={() => copyAndShowToast(hsl)} className='text-center text-base text-white'>
            {hsl}
          </Medium>
          {/* <Medium onPress={() => copyAndShowToast(cmyk)} className='text-center text-base text-white'>
            {cmyk}
          </Medium> */}
        </View>
      </TouchableOpacity>
    </Animated.View>
  )
}

function copyAndShowToast(text: string) {
  Clipboard.setString(text)
  ToastAndroid.show('Copied to clipboard', ToastAndroid.SHORT)
}
