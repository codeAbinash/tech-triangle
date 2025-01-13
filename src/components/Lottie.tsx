import { W } from '@utils/dimensions'
import LottieView, { type LottieViewProps } from 'lottie-react-native'

type LottieProps = LottieViewProps & {
  size?: number
}

export function Lottie({ style, size, source, ...props }: LottieProps) {
  return (
    <LottieView
      source={source}
      style={[{ height: size || W * 0.55, width: size || W * 0.55, marginHorizontal: 'auto' }, style]}
      autoPlay
      loop
      hardwareAccelerationAndroid
      cacheComposition
      {...props}
    />
  )
}
