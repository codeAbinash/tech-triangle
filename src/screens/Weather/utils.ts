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
import type { WeatherIconsKeys } from '@utils/types'
import type { SvgProps } from 'react-native-svg'

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
