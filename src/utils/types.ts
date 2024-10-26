import { StackNavigationProp } from '@react-navigation/stack'
import type { RootStackParamList } from 'App'

export type StackNav = StackNavigationProp<RootStackParamList>
export type NavProp = { navigation: StackNav }

export type Theme = {
  gradient: [string, string]
  content: 'light-content' | 'dark-content' | 'default'
  color: { color: string }
}

export type WeatherIconsKeys =
  | '01d'
  | '01n'
  | '02d'
  | '02n'
  | '03d'
  | '03n'
  | '04d'
  | '04n'
  | '09d'
  | '09n'
  | '10d'
  | '10n'
  | '11d'
  | '11n'
  | '13d'
  | '13n'
  | '50d'
  | '50n'

export type NU = null | undefined
