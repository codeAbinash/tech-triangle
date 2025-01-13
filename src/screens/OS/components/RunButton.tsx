import { PlaySolidIcon } from '@assets/icons/icons'
import Press from '@components/Press'
import Animated, { ZoomIn, ZoomOut } from 'react-native-reanimated'

export default function RunButton({ onPlay }: { onPlay: () => void }) {
  return (
    <Animated.View
      entering={ZoomIn.duration(200)}
      exiting={ZoomOut.duration(200)}
      className='absolute bottom-7 right-5 z-10'
    >
      <Press
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 2,
            height: 2,
          },
          elevation: 6,
          shadowOpacity: 0.5,
          height: 60,
          width: 60,
        }}
        activeOpacity={0.9}
        activeScale={0.95}
        className='items-center justify-center rounded-full bg-accent'
        onPress={onPlay}
      >
        <PlaySolidIcon color={'white'} height={25} width={25} />
      </Press>
    </Animated.View>
  )
}
