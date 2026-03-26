import { MAIN_TEXT_SIZE } from '@components/values'
import CloudAngledRainIcon from '@hugeicons/CloudAngledRainIcon'
import { boxSize } from '@screens/Weather/utils'
import { Medium, Regular } from '@utils/fonts'
import type { Theme } from '@utils/types'
import { View } from 'react-native'
import WeatherLabel from './WeatherLabel'

type PrecipitationProps = {
  theme: Theme
  rain?: number
  snow?: number
  status: String
}

export default function Precipitation({ theme, rain, snow, status }: PrecipitationProps) {
  return (
    <View className='aspect-square rounded-3xl bg-black/10' style={boxSize}>
      <WeatherLabel Icon={CloudAngledRainIcon} color={theme.color} label='Precipitation' />
      <View className='flex-1 justify-between px-5 pb-4 pt-0'>
        <View className='flex-row items-end'>
          <Medium style={[{ fontSize: 45 }, theme.color]}>{rain || '0'}</Medium>
          <Medium style={[{ fontSize: 40, paddingBottom: 5 }, theme.color]} className='pl-1'>
            mm{' '}
          </Medium>
        </View>
        {snow ? (
          <Regular style={[theme.color, { fontSize: MAIN_TEXT_SIZE, lineHeight: MAIN_TEXT_SIZE * 1.3 }]}>
            {snow || '0'} mm snowfall.
          </Regular>
        ) : (
          <Regular style={[theme.color, { fontSize: MAIN_TEXT_SIZE, lineHeight: MAIN_TEXT_SIZE * 1.3 }]}>
            {status}
          </Regular>
        )}
      </View>
    </View>
  )
}
