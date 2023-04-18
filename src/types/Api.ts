import { CurrentWeather, Forecast, UserLocation, WeatherAlerts } from './Common'

export type RealTimeAPI = {
  current: CurrentWeather
  location: UserLocation
  url?: string
}

export type ForecastAPI = {
  alerts?: {
    alert: WeatherAlerts[]
  }
  current: CurrentWeather
  location: UserLocation
  forecast: {
    forecastday: Forecast[]
  }
}

export type SearchAPI = {
  country: string
  id: number
  lat: number
  lon: number
  name: string
  region: string
  url: string
}
