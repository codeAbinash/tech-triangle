import type { StackNav } from '@utils/types'
import type { CurrentCityT } from './zustand/weatherStore'

export function navigateToWeather(nav: StackNav, currentCity: CurrentCityT) {
  nav.navigate(currentCity ? 'Weather' : 'WeatherWelcome')
}
