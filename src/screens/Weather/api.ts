import S from '@utils/storage'

export const ACCUWEATHER_API_KEY = 'FqLdDZQkQofVcwsdCHX7uKdPVgWcPGHI'
// export const ACCUWEATHER_API_KEY = 'C42OAAd8AANIyi8SLoqvq3mm59vADvRA'

export const OPENWEATHER_API_KEY = '0e376e0750966cdba160fc85a4bb0427'

const API = {
  cities(cityName: string) {
    return `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${ACCUWEATHER_API_KEY}&q=${cityName}`
  },
  location(lat: number, lon: number) {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}`
  },
  weather(lon: number, lat: number) {
    return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${OPENWEATHER_API_KEY}`
  },
}

export interface WeatherSearchResult {
  Version: number
  Key: string
  LocalizedName: string
  EnglishName: string
  Country: Country
  AdministrativeArea: AdministrativeArea
  GeoPosition: GeoPosition
}

export interface AdministrativeArea {
  LocalizedName: string
  EnglishName: string
}

export interface Country {
  EnglishName: string
}

export interface GeoPosition {
  Latitude: number
  Longitude: number
  Elevation: Elevation
}

export interface Elevation {
  Metric: Imperial
}

export interface Imperial {
  Value: number
  Unit: Unit
}

export enum Unit {
  Ft = 'ft',
  M = 'm',
}

export async function searchCity(query: string) {
  if (!query) return
  console.log('Searching for city:', query)
  let lsCities = JSON.parse(S.get(`WeatherCitySearchResult-${query}`) || '[]')
  if (lsCities.length) return lsCities

  console.log('Fetching cities from API')
  const response = await fetch(API.cities(query))
  if (!response.ok) throw new Error('Failed to fetch cities')
  const data = (await response.json()) as WeatherSearchResult[]
  lsCities = data

  S.set(`WeatherCitySearchResult-${query}`, JSON.stringify(lsCities))

  return data
}

export default API
