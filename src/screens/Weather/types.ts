export interface Weather {
  lat: number
  lon: number
  timezone: string
  timezone_offset: number
  current: Current
  hourly: Current[]
  daily: Daily[]
}

export interface Current {
  dt: number
  sunrise?: number
  sunset?: number
  temp: number // in kelvin
  feels_like: number
  pressure: number
  humidity: number
  dew_point: number
  uvi: number
  clouds: number
  visibility: number
  wind_speed: number
  wind_deg: number
  wind_gust: number
  weather: WeatherElement[]
  pop?: number
  rain?: Rain
}

export interface Rain {
  '1h': number
}

export interface WeatherElement {
  id: number
  main: Main
  description: string
  icon: Icon
}

export type Icon =
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

export type Main =
  | 'Clouds'
  | 'Clear'
  | 'Mist'
  | 'Haze'
  | 'Dust'
  | 'Fog'
  | 'Sand'
  | 'Dust'
  | 'Ash'
  | 'Squall'
  | 'Tornado'
  | 'Snow'
  | 'Rain'
  | 'Drizzle'
  | 'Thunderstorm'

export interface Daily {
  dt: number
  sunrise: number
  sunset: number
  moonrise: number
  moonset: number
  moon_phase: number
  temp: Temp
  feels_like: FeelsLike
  pressure: number
  humidity: number
  dew_point: number
  wind_speed: number
  wind_deg: number
  wind_gust: number
  weather: WeatherElement[]
  clouds: number
  pop: number
  rain: number
  uvi: number
}

export interface FeelsLike {
  day: number
  night: number
  eve: number
  morn: number
}

export interface Temp {
  day: number
  min: number
  max: number
  night: number
  eve: number
  morn: number
}