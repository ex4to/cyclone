import { HourWeather } from '@/types'
import { getDayTime, round } from '@/utils'

export const Hourly = ({ hourly }: { hourly: HourWeather[] }) => {
  return (
    <article className="max-w-3xl w-full mx-auto shadow-lg bg-slate-50 p-2 rounded">
      <p className="border-b py-2">Hourly</p>
      <section className="flex gap-8 items-start scroll-smooth scroll-hide w-full overflow-scroll rounded pr-2 py-4">
        {hourly.map((e, i) => (
          <div key={i} className="flex flex-col gap-2 items-center">
            <div className="w-10">
              <img src={e.condition.icon} alt="icon" />
            </div>
            <p>{getDayTime(e.time)?.time}</p>
            <p>{round(+e.temp_c)}°</p>
          </div>
        ))}
      </section>
    </article>
  )
}
