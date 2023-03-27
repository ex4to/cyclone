import { ForecastAPI, RealTimeAPI } from '@/types'

const data = import.meta.env

const API_KEY = data.VITE_API_KEY || ''
const BASE_URL = data.VITE_BASE_API_URL || ''

export const getRealTimeWeather = async (
  q: string,
  aqi: boolean,
  url?: boolean
): Promise<RealTimeAPI> => {
  const isAqi = aqi ? '&aqi=yes' : ''

  const res = await fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${q}${isAqi}`).then(
    (e) => e.json()
  )

  if (url) res.url = q
  return res
}

export const getForecastWeather = async (
  q: string,
  aqi: boolean,
  alerts: boolean
): Promise<ForecastAPI> => {
  const isAqi = aqi ? '&aqi=yes' : ''
  const isAlerts = alerts ? '&alerts=yes' : ''

  const res = await fetch(
    `${BASE_URL}/forecast.json?key=${API_KEY}&q=${q}&days=7${isAqi}${isAlerts}`
  ).then((e) => e.json())
  return res
}

export const getSearch = async (q: string) => {
  const res = await fetch(`${BASE_URL}/search.json?key=${API_KEY}&q=${q}`).then((e) =>
    e.json()
  )
  return res
}
