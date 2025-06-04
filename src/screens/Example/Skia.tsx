import { Gap12 } from '@components/Gap'
import RoundIcon from '@components/RoundIcon'
import SettGroup from '@components/Settings/SettGroup'
import { SettOption } from '@components/Settings/SettOption'
import SettText from '@components/Settings/SettText'
import SettWrapper from '@components/Settings/SettWrapper'
import Setting07Icon from '@hugeicons/Setting07Icon'
import { Canvas, Circle, Group } from '@shopify/react-native-skia'
import type { NavProp } from '@utils/types'
import { View } from 'react-native'

const App = () => {
  const width = 256
  const height = 256
  const r = width * 0.33
  return (
    <View className='items-center justify-center p-5'>
      <Canvas style={{ width, height }}>
        <Group blendMode='multiply'>
          <Circle cx={r} cy={r} r={r} color='cyan' />
          <Circle cx={width - r} cy={r} r={r} color='magenta' />
          <Circle cx={width / 2} cy={width - r} r={r} color='yellow' />
        </Group>
      </Canvas>
    </View>
  )
}

export default function Skia({ navigation }: NavProp) {
  return (
    <SettWrapper title='Blank Settings'>
      <Gap12>
        <SettText className='mt-3'>Beginning Text</SettText>
        <SettGroup title='Sample title'>
          <SettOption
            title='A blank setting'
            Icon={<RoundIcon Icon={Setting07Icon} className='bg-slate-500' />}
            arrow
          />
        </SettGroup>
        <SettText>Sample text</SettText>
      </Gap12>
      <SettText>End Text</SettText>
      <App />
    </SettWrapper>
  )
}
