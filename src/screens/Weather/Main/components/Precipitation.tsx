import { CloudAngledRainSolidIcon } from '@assets/icons/icons'
import { boxSize } from '@screens/Weather/utils'
import { F, Medium, Regular } from '@utils/fonts'
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
      <WeatherLabel Icon={CloudAngledRainSolidIcon} color={theme.color} label='Precipitation' />
      <View className='flex-1 justify-between px-5 pb-4 pt-0'>
        <View className='flex-row items-end'>
          <Medium style={[{ fontSize: 28 }, theme.color]}>{rain || '0'}</Medium>
          <Medium style={[{ fontSize: 20, paddingBottom: 5 }, theme.color]} className='pl-1'>
            mm{' '}
          </Medium>
        </View>
        {snow ? (
          <Regular style={[theme.color, F.F12]}>{snow || '0'} mm snowfall.</Regular>
        ) : (
          <Regular style={[theme.color, F.F12]}>{status}</Regular>
        )}
      </View>
    </View>
  )
}
