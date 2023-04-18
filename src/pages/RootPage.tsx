import { getForecastWeather } from '@/api'
import { ForecastAPI } from '@/types'
import { useEffect, useState } from 'react'
import { ForecastPage } from './ForecastPage'
import { LoadScreen } from '@/components'
import { useParams } from 'react-router-dom'

export const RootPage = () => {
  const [weather, setWeather] = useState<null | ForecastAPI>(null)
  const params = useParams();

  useEffect(() => {
    getForecastWeather(params.cityUrl || 'auto:ip', false, false)
      .then((w) => setWeather(w))
      .catch((err) => console.log(err))
  }, [])

  return weather ? <ForecastPage w={weather} /> : <LoadScreen />
}
