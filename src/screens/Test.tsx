import { PaddingBottom, PaddingTop } from '@components/SafePadding'
import { Canvas, Path, Skia } from '@shopify/react-native-skia'
import { Colors } from '@utils/colors'
import { H, W } from '@utils/dimensions'
import React, { useEffect } from 'react'
import { View } from 'react-native'
import { useSharedValue, withTiming } from 'react-native-reanimated'

const r = 100
const strokeW = 28
const innerR = r - strokeW / 2
const bgColor = Colors.zinc[200]
const percentAge = 0.34
export default function Test() {
  const path = Skia.Path.Make()
  path.addCircle(W / 2, H / 2, r)

  const percent = useSharedValue(0)

  useEffect(() => {
    percent.value = withTiming(percentAge, { duration: 2000 })
  }, [])

  return (
    <>
      <PaddingTop />
      <View className='relative' style={{ transform: [{ rotateZ: '-90deg' }] }}>
        <Canvas
          style={{
            height: H,
            width: W,
          }}
        >
          <Path path={path} strokeWidth={strokeW} color={bgColor} style={'stroke'} strokeJoin={'round'} strokeCap={'round'} start={0} end={1} />
          <Path
            path={path}
            strokeWidth={strokeW}
            color={Colors.accent}
            style={'stroke'}
            strokeJoin={'round'}
            strokeCap={'round'}
            start={0}
            end={percent}
          />
        </Canvas>
      </View>
      <PaddingBottom />
    </>
  )
}
