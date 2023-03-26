import { ReactComponent as Tornado } from '@/assets/icons/tornado.svg'

export const BriefWeather = () => {
  return (
    <article className="flex justify-around gap-4 w-full">
      <section className="flex flex-col gap-6 items-center">
        <div className="w-16">
          <Tornado />
        </div>
        <p className="text-xl">Mostly Cloudy</p>
      </section>
      <section className="text-xl flex flex-col gap-4">
        <p className="text-2xl">Friday XX July XX:XX</p>
        <p className="text-4xl text-yellow-400">+XX°</p>
        <p>Feels like +XX°</p>
      </section>
      <section className="flex flex-col gap-4 items-center">
        <div className="w-12">
          <Tornado />
        </div>
        <p>Humidity (%)</p>
        <div className="bg-black h-[1px] w-full" />
        <p className="text-xl">XX</p>
      </section>
      <section className="flex flex-col gap-4 items-center">
        <div className="w-12">
          <Tornado />
        </div>
        <p>Humidity (%)</p>
        <div className="bg-black h-[1px] w-full" />
        <p className="text-xl">XX</p>
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
