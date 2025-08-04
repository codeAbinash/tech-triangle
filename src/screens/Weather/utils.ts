import CloudAngledRainIcon from '@hugeicons/CloudAngledRainIcon'
import CloudAngledRainZapIcon from '@hugeicons/CloudAngledRainZapIcon'
import CloudFastWindIcon from '@hugeicons/CloudFastWindIcon'
import CloudIcon from '@hugeicons/CloudIcon'
import Moon02Icon from '@hugeicons/Moon02Icon'
import MoonCloudAngledRainIcon from '@hugeicons/MoonCloudAngledRainIcon'
import MoonCloudIcon from '@hugeicons/MoonCloudIcon'
import SnowIcon from '@hugeicons/SnowIcon'
import SoundcloudIcon from '@hugeicons/SoundcloudIcon'
import Sun03Icon from '@hugeicons/Sun03Icon'
import SunCloud02Icon from '@hugeicons/SunCloud02Icon'
import SunCloudAngledRain02Icon from '@hugeicons/SunCloudAngledRain02Icon'
import { HugeIconProps } from '@hugeicons/constants'
import { W } from '@utils/dimensions'
import type { WeatherIconsKeys } from '@utils/types'
import type { Weather } from './types'

export const Icons: { [K in WeatherIconsKeys]: React.FC<HugeIconProps> } = {
  '01d': Sun03Icon,
  '01n': Moon02Icon,
  '02d': SunCloud02Icon,
  '02n': MoonCloudIcon,
  '03d': CloudIcon,
  '03n': CloudIcon,
  '04d': CloudFastWindIcon,
  '04n': CloudFastWindIcon,
  '09d': CloudAngledRainIcon,
  '09n': CloudAngledRainIcon,
  '10d': SunCloudAngledRain02Icon,
  '10n': MoonCloudAngledRainIcon,
  '11d': CloudAngledRainZapIcon,
  '11n': CloudAngledRainZapIcon,
  '13d': SnowIcon,
  '13n': SnowIcon,
  '50d': SoundcloudIcon,
  '50n': SoundcloudIcon,
} as const

export const boxSize = {
  width: W / 2 - 22,
  height: W / 2 - 22,
}

export const boxFullSize = {
  width: W - 33,
  // height: W / 2 - 22,
}

export const minPressure = 970
export const maxPressure = 1030

export function calculatePressurePercentage(w: Weather) {
  let percent = ((w?.current?.pressure || 0) - minPressure) / (maxPressure - minPressure)
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

export function getAQIStatus(aqi: number) {
  if (aqi < 50) return 'Good air quality'
  if (aqi < 100) return 'Moderate air quality'
  if (aqi < 150) return 'Unhealthy for Sensitive Groups'
  if (aqi < 200) return 'Unhealthy air quality'
  if (aqi < 300) return 'Very Unhealthy air quality'
  return 'Hazardous'
}
export function getRainStatus(rain: number | undefined) {
  if (!rain) return 'No rain expected.'
  if (rain === 0) return 'No rain expected.'
  else if (rain < 2) return 'Light rain expected.'
  else if (rain < 5) return 'Moderate rain expected.'
  else return 'Heavy rain expected.'
}
export function mapMoonPhaseToImage(phase: number) {
  return Math.round(phase * 27) + 1
}
