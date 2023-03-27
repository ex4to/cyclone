import { ReactComponent as Tornado } from '@/assets/icons/tornado.svg'
import { CurrentWeather, UserLocation } from '@/types'
import { getDayTime } from '@/utils/common'
import { useEffect, useState } from 'react'

type Props = {
  current: CurrentWeather
  location: UserLocation
}

type CurrentTimeProps = {
  day: string
  dayOfMonth: string
  month: string
  year: string
  time: string
}

export const BriefWeather = ({ current, location }: Props) => {
  const [currentTime, setCurrentTime] = useState<null | CurrentTimeProps>(null)

  useEffect(() => {
    setCurrentTime(getDayTime(location.localtime))
  }, [])

  return (
    <article className="flex justify-around gap-4 w-full">
      <section className="flex flex-col gap-6 items-center">
        <div className="w-16">
          <img src={current.condition.icon} alt="icon" />
        </div>
        <p className="text-xl">{current.condition.text}</p>
      </section>
      <section className="text-xl flex flex-col gap-4">
        <p className="text-2xl">
          {currentTime?.day} {currentTime?.dayOfMonth} {currentTime?.month}{' '}
          {currentTime?.time}
        </p>
        <p className="text-4xl text-yellow-400">{current.temp_c}°</p>
        <p>Feels like {current.feelslike_c}°</p>
      </section>
      <section className="flex flex-col gap-4 items-center">
        <div className="w-12">
          <Tornado />
        </div>
        <p>Humidity (%)</p>
        <div className="bg-black h-[1px] w-full" />
        <p className="text-xl">{current.humidity}</p>
      </section>
      <section className="flex flex-col gap-4 items-center">
        <div className="w-12">
          <Tornado />
        </div>
        <p>Humidity (%)</p>
        <div className="bg-black h-[1px] w-full" />
        <p className="text-xl">{current.uv}</p>
      </section>
      <section className="flex flex-col gap-4 items-center">
        <div className="w-12">
          <Tornado />
        </div>
        <p>Humidity (%)</p>
        <div className="bg-black h-[1px] w-full" />
        <p className="text-xl">XX</p>
      </section>
    </article>
  )
}
