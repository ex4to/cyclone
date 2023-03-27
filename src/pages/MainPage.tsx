import { ReactComponent as Tornado } from '@/assets/icons/tornado.svg'
import { ReactComponent as Location } from '@/assets/icons/location.svg'
import { BriefWeather, Hourly } from '@/ui'
import { ForecastAPI } from '@/types'
import { useEffect } from 'react'

export const MainPage = ({ w }: { w: ForecastAPI }) => {
  useEffect(() => {
    console.log(w)
  }, [])

  return (
    <article className="relative flex flex-col gap-4 min-h-screen">
      <header className="p-6 flex gap-4 fixed bg-white w-full">
        <div className="flex grow gap-2 items-center">
          <div className="w-10">
            <Tornado />
          </div>
          <h1 className="text-2xl font-bold uppercase tracking-wide">Cyclone</h1>
          <div className="pl-20 flex gap-2">
            <div className="w-6">
              <Location />
            </div>
            <p className="text-gray-600">
              Weather in <span className="text-black text-bold">{w.location.name}</span>
            </p>
          </div>
        </div>
        <div className="flex gap-2 pr-8 text-xl items-center">
          <button className="font-bold">°C</button>|<button>°F</button>
        </div>
      </header>
      <main className="p-4 flex flex-col gap-4 bg-white bg-opacity-80 mt-[60vh] mb-[40vh]">
        <BriefWeather current={w.current} location={w.location} />
        <Hourly />
      </main>
      <footer>aboba</footer>
      <div className="fixed -z-20 top-0 left-0 w-full h-screen">
        <img
          className="w-full h-full bg-no-repeat bg-cover"
          alt="backimg"
          src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/blue-mountains-watercolor-paintingmodern-landscape-green-palace.jpg"
        />
      </div>
    </article>
  )
}
