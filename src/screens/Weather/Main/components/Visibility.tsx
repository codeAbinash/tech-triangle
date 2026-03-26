import { MAIN_TEXT_SIZE } from '@components/values'
import EyeIcon from '@hugeicons/EyeIcon'
import { boxSize } from '@screens/Weather/utils'
import { Medium, Regular } from '@utils/fonts'
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
        <Medium style={[{ fontSize: 45 }, theme.color]}>{visibility}</Medium>
        <Regular style={[theme.color, { fontSize: MAIN_TEXT_SIZE, lineHeight: MAIN_TEXT_SIZE * 1.3 }]}>
          {visibilityStatus}
        </Regular>
      </View>
    </View>
  )
}
