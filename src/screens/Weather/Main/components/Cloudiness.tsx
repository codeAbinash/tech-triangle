import { MAIN_TEXT_SIZE } from '@components/values'
import CloudIcon from '@hugeicons/CloudIcon'
import { boxSize } from '@screens/Weather/utils'
import { Medium, Regular } from '@utils/fonts'
import type { Theme } from '@utils/types'
import { View } from 'react-native'
import WeatherLabel from './WeatherLabel'

export default function Cloudiness({ theme, clouds }: { theme: Theme; clouds: number }) {
  return (
    <View className='aspect-square rounded-3xl bg-black/10' style={boxSize}>
      <WeatherLabel Icon={CloudIcon} color={theme.color} label='Cloudiness' />
      <View className='flex-1 justify-between px-5 pb-4 pt-0'>
        <Medium style={[{ fontSize: 45 }, theme.color]}>{clouds} %</Medium>
        <Regular style={[theme.color, { fontSize: MAIN_TEXT_SIZE, lineHeight: MAIN_TEXT_SIZE * 1.3 }]}>
          Current cloud coverage is {clouds}%.
        </Regular>
      </View>
    </View>
  )
}
