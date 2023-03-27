import { getForecastWeather } from '@/api'
import { ForecastAPI } from '@/types'
import { useEffect, useState } from 'react'
import { MainPage } from './MainPage'

export const RootPage = () => {
  const [forecastWeather, setForecastWeather] = useState<null | ForecastAPI>(null)

  useEffect(() => {
    getForecastWeather('auto:ip', false, false).then((w) => setForecastWeather(w))
  }, [])

  return (
    <div className="relative">
      {forecastWeather ? (
        <MainPage w={forecastWeather} />
      ) : (
        <div className="h-screen w-full items-center flex bg-gradient-to-br from-blue-100 via-slate-50 to-blue-100">
          <div className="flex items-center justify-center w-full">
            <h1 className="text-2xl font-bold uppercase tracking-wide animate-pulse">
              Cyclone
            </h1>
          </div>
        </div>
      )}
    </div>
  )
}
