import { CurrentWeather, Forecast, UserLocation } from '@/types'
import { getDayTime, round, tommHg } from '@/utils'
import { Hourly } from './Hourly'

type WeatherCardProps = {
  cur?: CurrentWeather
  loc?: UserLocation
  forecast: Forecast
}

export const WeatherCard = ({ cur, loc, forecast }: WeatherCardProps) => {
  const currentDate = getDayTime(loc?.localtime ? loc?.localtime : forecast.date)

  return (
    <section className="bg-opacity-90 bg-sky-50 rounded-sm p-4 h-full flex flex-col gap-2">
      <header className="flex justify-between text-2xl">
        <p>
          {currentDate?.dayOfMonth} of {currentDate?.month} - {currentDate?.day}
        </p>
        <p>{currentDate?.time ? currentDate?.time : ''}</p>
      </header>

      <main className="text-lg flex flex-col gap-2 md:gap-4 h-full justify-between">
        <section className="grid grid-cols-2 items-center">
          <div className="flex flex-col items-center text-xl">
            <img
              src={cur ? cur.condition.icon : forecast.day.condition.icon}
              className="w-20"
              />
            <p>{cur ? cur.condition.text : forecast.day.condition.text}</p>
          </div>
          <div>
            <p className="text-center text-4xl text-yellow-400">
              {round(cur ? cur.temp_c : forecast.day.avgtemp_c)}°
            </p>
          </div>
        </section>
        <section className="text-gray-600">
          <p>{cur ? 'Feels like: ' + round(cur.feelslike_c) + '°' : ''}</p>
          <p>Humidity: {cur ? cur.humidity : forecast.day.avghumidity}%</p>
          <p>{cur ? 'Pressure: ' + tommHg(cur.pressure_mb) + 'mmHg' : ''}</p>
        </section>
        <div className="p-2">
          <Hourly hourly={forecast.hour} />
        </div>
      </main>
    </section>
  )
}
