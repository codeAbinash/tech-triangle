import S from '@utils/storage'

// export const ACCUWEATHER_API_KEY = 'FqLdDZQkQofVcwsdCHX7uKdPVgWcPGHI'
// export const ACCUWEATHER_API_KEY = 'C42OAAd8AANIyi8SLoqvq3mm59vADvRA'
export const ACCUWEATHER_API_KEY = '949004d9a7086cfddfc21ef59baca2a4'

export const OPENWEATHER_API_KEY = '138278b70c2b6e56abece2ddac69db6a'

function citySearchUrl(query: string, apiKey: string) {
  const url = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey || ACCUWEATHER_API_KEY}&q=${query}`
  console.log(url)
  return url
}

function locationUrl(lat: number, lon: number, apiKey: string) {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey || OPENWEATHER_API_KEY}`
}

function weatherUrl(lat: number, lon: number, apiKey: string) {
  const url =  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${apiKey || OPENWEATHER_API_KEY}&include=aqi`
  console.log(url)
  return url
}

weatherUrl(0, 0, OPENWEATHER_API_KEY)

function AQIUrl(lat: number, lon: number, apiKey: string) {
  return `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey || OPENWEATHER_API_KEY}`
}

function AQIForecastUrl(lat: number, lon: number, apiKey: string) {
  return `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${apiKey || OPENWEATHER_API_KEY}`
}

export const WeatherAPI = {
  citySearch: citySearchUrl,
  location: locationUrl,
  weather: weatherUrl,
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

export async function searchCity(query: string, apiKey: string) {
  if (!query) return
  console.log('Searching for city:', query)
  let lsCities = JSON.parse(S.get(`WeatherCitySearchResult-${query}`) || '[]')
  if (lsCities.length) return lsCities

  console.log('Fetching cities from API')
  const response = await fetch(citySearchUrl(query, apiKey))
  if (!response.ok) throw new Error('Failed to fetch cities')
  const data = (await response.json()) as WeatherSearchResult[]
  lsCities = data

  S.set(`WeatherCitySearchResult-${query}`, JSON.stringify(lsCities))

  return data
}

export async function getLocation(lat: number, lon: number) {
  const result = await fetch(locationUrl(lat, lon, OPENWEATHER_API_KEY))
  const data = await result.json()
  return data
}

export async function getWeather(lat: number, lon: number) {
  return await (await fetch(weatherUrl(lat, lon, OPENWEATHER_API_KEY))).json()
}

export async function getAQI(lat: number, lon: number) {
  return await (await fetch(AQIUrl(lat, lon, OPENWEATHER_API_KEY))).json()
}

export function getMoonImageLink(n: number) {
  return `https://codeabinash.github.io/moon/moon-${n}.png`
}
