import { PaddingBottom, PaddingTop } from '@components/SafePadding'
import { Canvas, Path, Skia } from '@shopify/react-native-skia'
import { Colors } from '@utils/colors'
import { W } from '@utils/dimensions'
import { Medium } from '@utils/fonts'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { useSharedValue, withTiming } from 'react-native-reanimated'
import { getDBConnection } from './db'

const r = 100
const strokeW = 28
// const innerR = r - strokeW / 2
const bgColor = Colors.zinc[200]
const percentAge = 0.34
export default function Test() {
  const path = Skia.Path.Make()
  path.addCircle(W / 2, W / 2, r)

  const [connectionResponse, setConnectionResponse] = useState<any>()
  const percent = useSharedValue(0)

  useEffect(() => {
    percent.value = withTiming(percentAge, { duration: 2000 })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    console.log('getDBConnection')
    const res = getDBConnection()
    setConnectionResponse(res)
  }, [])

  return (
    <>
      <PaddingTop />
      <View className='relative' style={{ transform: [{ rotateZ: '-90deg' }] }}>
        <Canvas
          style={{
            height: W,
            width: W,
          }}
        >
          <Path
            path={path}
            strokeWidth={strokeW}
            color={bgColor}
            style={'stroke'}
            strokeJoin={'round'}
            strokeCap={'round'}
            start={0}
            end={1}
          />
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
      <View className='px-5'>
        <Medium className='text-xs text-black dark:text-white'>{JSON.stringify(connectionResponse, null, 3)}</Medium>
      </View>
      <PaddingBottom />
    </>
  )
}
