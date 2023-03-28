import { CurrentWeather, ForecastDay, UserLocation } from '@/types'
import { getDayTime, tommHg } from '@/utils/common'
import { useEffect, useState } from 'react'

import cloud from '@/assets/pic/cloud.png'
import pressure from '@/assets/pic/pressure.png'
import humidity from '@/assets/pic/humidity.png'
import tempDown from '@/assets/pic/tempDown.png'
import tempUp from '@/assets/pic/tempUp.png'

type Props = {
  weather: CurrentWeather | ForecastDay
  location: UserLocation
  date?: string
}

type CurrentTimeProps = {
  day: string
  dayOfMonth: string
  month: string
  year: string
  time: string
}

export const BriefWeather = ({ weather, location, date }: Props) => {
  const [currentTime, setCurrentTime] = useState<null | CurrentTimeProps>(null)

  useEffect(() => {
    date
      ? setCurrentTime(getDayTime(date))
      : setCurrentTime(getDayTime(location.localtime))
  }, [])

  return (
    <article className="grid grid-cols-3 items-stretch gap-y-8 gap-x-2 w-full">
      <section className="flex flex-col gap-6 items-center">
        <div className="w-16">
          <img src={weather.condition.icon} alt="icon" />
        </div>
        <p className="lg:text-lg text-center">{weather.condition.text}</p>
      </section>
      <section className="text-lg flex flex-col gap-4 col-span-2">
        <p className="">
          {currentTime?.day} {currentTime?.dayOfMonth} {currentTime?.month}{' '}
          {currentTime?.time || ''}
        </p>
        <p className="text-3xl text-yellow-400 font-bold">
          {'temp_c' in weather ? weather.temp_c : weather.avgtemp_c}°
        </p>
        {'feelslike_c' in weather ? <p>Feels like {weather.feelslike_c}°</p> : ''}
      </section>
      <section className="flex flex-col gap-4 items-center justify-between">
        <div className="w-12">
          <img src={humidity} alt="humidity" />
        </div>
        <p className="border-b-2 pb-4 text-sm">Humidity (%)</p>
        <p className="text-xl">
          {'humidity' in weather ? weather.humidity : weather.avghumidity}
        </p>
      </section>
      <section className="flex flex-col gap-4 items-center justify-between">
        <div className="w-12">
          {'pressure_mb' in weather ? (
            <img src={pressure} alt="pressure" />
          ) : (
            <img src={tempDown} alt="tempDown" />
          )}
        </div>
        <p className="border-b-2 pb-4 text-sm">
          {'pressure_mb' in weather ? 'Pressure (mmHg)' : 'Min Temp'}
        </p>
        <p className="text-xl">
          {tommHg('pressure_mb' in weather ? weather.pressure_mb : weather.mintemp_c)}
        </p>
      </section>
      <section className="flex flex-col gap-4 items-center justify-between">
        <div className="w-12">
          {'cloud' in weather ? (
            <img src={cloud} alt="cloud" />
          ) : (
            <img src={tempUp} alt="cloud" />
          )}
        </div>
        <p className="text-sm border-b-2 pb-4">
          {'cloud' in weather ? 'Cloud (%)' : 'Max Temp'}
        </p>
        <p className="text-xl">
          {'cloud' in weather ? weather.cloud : weather.maxtemp_c}
        </p>
      </section>
    </article>
  )
}
