import { Canvas, Circle, Group, Path, Skia, SweepGradient, vec } from '@shopify/react-native-skia'
import { W } from '@utils/dimensions'
import type { Theme } from '@utils/types'
import { useEffect, useMemo } from 'react'
import { View } from 'react-native'
const scale = W / 1000
// Define control points for the cubic Bezier curves
const controlPoints = [
  {
    p0: { x: 55.5 * scale, y: 237.2 * scale },
    p1: { x: 32 * scale, y: 213.9 * scale },
    p2: { x: 17.4 * scale, y: 181.6 * scale },
    p3: { x: 17.4 * scale, y: 145.9 * scale },
  },
  {
    p0: { x: 17.4 * scale, y: 145.9 * scale },
    p1: { x: 17.3 * scale, y: 75 * scale },
    p2: { x: 74.8 * scale, y: 17.5 * scale },
    p3: { x: 145.7 * scale, y: 17.5 * scale },
  },
  {
    p0: { x: 145.7 * scale, y: 17.5 * scale },
    p1: { x: 216.5 * scale, y: 17.5 * scale },
    p2: { x: 274 * scale, y: 75 * scale },
    p3: { x: 274 * scale, y: 145.9 * scale },
  },
  {
    p0: { x: 274 * scale, y: 145.9 * scale },
    p1: { x: 274 * scale, y: 181.6 * scale },
    p2: { x: 259.4 * scale, y: 213.9 * scale },
    p3: { x: 235.9 * scale, y: 237.2 * scale },
  },
]

// Function to calculate a point on a cubic Bezier curve using De Casteljau's algorithm
const getBezierPoint = (t: any, p0: any, p1: any, p2: any, p3: any) => {
  const x = (1 - t) ** 3 * p0.x + 3 * (1 - t) ** 2 * t * p1.x + 3 * (1 - t) * t ** 2 * p2.x + t ** 3 * p3.x
  const y = (1 - t) ** 3 * p0.y + 3 * (1 - t) ** 2 * t * p1.y + 3 * (1 - t) * t ** 2 * p2.y + t ** 3 * p3.y
  return { x, y }
}

const GradientPath = ({ theme, percent = 0 }: { theme: Theme; percent: number }) => {
  const path = Skia.Path.Make()

  // Calculate the total length of the path (approximation)
  const totalLength = controlPoints.length
  const segmentIndex = Math.floor(totalLength * percent)
  // Calculate the segment index and local t value
  const t = totalLength * percent - segmentIndex

  const { p0, p1, p2, p3 } = controlPoints[segmentIndex]!
  // Calculate the position of the dot based on the percentage
  const dotPosition = useMemo(() => getBezierPoint(t, p0, p1, p2, p3), [t, p0, p1, p2, p3])

  useEffect(() => {
    path.moveTo(55.5 * scale, 237.2 * scale)
    path.cubicTo(32 * scale, 213.9 * scale, 17.4 * scale, 181.6 * scale, 17.4 * scale, 145.9 * scale)
    path.cubicTo(17.3 * scale, 75 * scale, 74.8 * scale, 17.5 * scale, 145.7 * scale, 17.5 * scale)
    path.cubicTo(216.5 * scale, 17.5 * scale, 274 * scale, 75 * scale, 274 * scale, 145.9 * scale)
    path.cubicTo(274 * scale, 181.6 * scale, 259.4 * scale, 213.9 * scale, 235.9 * scale, 237.2 * scale)
  }, [path])

  const colors = ['#EA8279', '#EA8279', '#EA8279', '#EA8279', '#E8C579', '#8DD660', '#E8C579', '#EA8279']

  return (
    <View style={{ width: scale * 295, height: scale * 260 }}>
      <Canvas style={{ flex: 1 }}>
        <Group>
          <SweepGradient c={vec(145 * scale, 145 * scale)} colors={colors} />
          <Path path={path} style='stroke' strokeWidth={25 * scale} strokeCap='round' strokeJoin='round' />
          <Circle
            cx={dotPosition.x}
            cy={dotPosition.y}
            r={9 * scale}
            color={theme.gradient[1]}
            // color={Colors.red[500]}
          />
        </Group>
      </Canvas>
    </View>
  )
}

export default GradientPath
