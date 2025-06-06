import EyeIcon from '@hugeicons/EyeIcon'
import { boxSize } from '@screens/Weather/utils'
import { F, Medium, Regular } from '@utils/fonts'
import type { Theme } from '@utils/types'
import { View } from 'react-native'
import WeatherLabel from './WeatherLabel'

type VisibilityProps = {
  theme: Theme
  visibility: string
  visibilityStatus: string
}

export default function Visibility({ theme, visibility, visibilityStatus }: VisibilityProps) {
  return (
    <View className='aspect-square rounded-3xl bg-black/10' style={boxSize}>
      <WeatherLabel Icon={EyeIcon} color={theme.color} label='Visibility' />
      <View className='flex-1 justify-between px-5 pb-4 pt-0'>
        <Medium style={[{ fontSize: 33 }, theme.color]}>{visibility}</Medium>
        <Regular style={[theme.color, F.F12]}>{visibilityStatus}</Regular>
      </View>
    </View>
  )
}
