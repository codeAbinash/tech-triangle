import { weatherStore } from '@/zustand/weatherStore'
import TemperatureIcon from '@hugeicons/TemperatureIcon'
import { boxSize } from '@screens/Weather/utils'
import { F, Medium, Regular } from '@utils/fonts'
import type { Theme } from '@utils/types'
import { tempConverter } from '@utils/utils'
import { View } from 'react-native'
import WeatherLabel from './WeatherLabel'

type FeelsLikeProps = {
  theme: Theme
  feelsLike: number
  feelsLikeStatus: string
}

export default function FeelsLike({ theme, feelsLike, feelsLikeStatus }: FeelsLikeProps) {
  const unit = weatherStore((state) => state.temperatureUnit)
  return (
    <View className='aspect-square rounded-3xl bg-black/10' style={boxSize}>
      <WeatherLabel Icon={TemperatureIcon} color={theme.color} label='Feels Like' />
      <View className='flex-1 justify-between px-5 pb-4 pt-0'>
        <Medium style={[{ fontSize: 37 }, theme.color]}>
          {tempConverter({ temp: feelsLike, unit: unit, degree: true })}
        </Medium>
        <Regular style={[theme.color, F.F12]}>{feelsLikeStatus}</Regular>
      </View>
    </View>
  )
}

export function getFeelsLikeStatusString(feelsLike: number, current: number): string {
  feelsLike = Math.round(feelsLike)
  current = Math.round(current)
  if (feelsLike === current) return 'Similar to the actual temperature.'
  if (feelsLike > current) return 'Warmer than the actual temperature.'
  if (feelsLike < current) return 'Colder than the actual temperature.'
  return 'Similar to the actual temperature.'
}
