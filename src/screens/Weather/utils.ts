import {
  CloudAngledRainSolidIcon,
  CloudAngledRainZapSolidIcon,
  CloudFastWindSolidIcon,
  CloudSolidIcon,
  Moon02SolidIcon,
  MoonCloudAngledRainSolidIcon,
  MoonCloudSolidIcon,
  SnowSolidIcon,
  SoundcloudSolidIcon,
  Sun03SolidIcon,
  SunCloud02SolidIcon,
  SunCloudAngledRain02SolidIcon,
} from '@assets/icons/icons'
import { W } from '@utils/dimensions'
import type { WeatherIconsKeys } from '@utils/types'
import type { SvgProps } from 'react-native-svg'
import type { Weather } from './types'

export const Icons: { [K in WeatherIconsKeys]: React.FC<SvgProps> } = {
  '01d': Sun03SolidIcon,
  '01n': Moon02SolidIcon,
  '02d': SunCloud02SolidIcon,
  '02n': MoonCloudSolidIcon,
  '03d': CloudSolidIcon,
  '03n': CloudSolidIcon,
  '04d': CloudFastWindSolidIcon,
  '04n': CloudFastWindSolidIcon,
  '09d': CloudAngledRainSolidIcon,
  '09n': CloudAngledRainSolidIcon,
  '10d': SunCloudAngledRain02SolidIcon,
  '10n': MoonCloudAngledRainSolidIcon,
  '11d': CloudAngledRainZapSolidIcon,
  '11n': CloudAngledRainZapSolidIcon,
  '13d': SnowSolidIcon,
  '13n': SnowSolidIcon,
  '50d': SoundcloudSolidIcon,
  '50n': SoundcloudSolidIcon,
} as const

export const boxSize = {
  width: W / 2 - 22,
  height: W / 2 - 22,
}

export const minPressure = 970
export const maxPressure = 1030

export function calculatePressurePercentage(w: Weather) {
  let percent = ((w?.current.pressure || 0) - minPressure) / (maxPressure - minPressure)
  percent = percent >= 1 ? 0.999 : percent
  percent = percent < 0 ? 0 : percent
  return percent
}
export function getVisibilityStatusString(distance: number): string {
  if (distance >= 10000) return "It's perfectly clear. Visibility is excellent."
  if (distance >= 5000) return 'Visibility is good, clear conditions ahead.'
  if (distance >= 1000) return 'Visibility is moderate, some haze may be present.'
  if (distance >= 500) return 'Visibility is poor, expect mist or fog.'
  return 'Visibility is very poor, dense fog or heavy mist is likely.'
}
