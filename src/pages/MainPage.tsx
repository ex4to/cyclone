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
      <main className='flex flex-col 2xl:flex-row gap-4 justify-center items-center w-full'>
        {w.forecast.forecastday.map((e, i) =>
          i === 0 ? (
            <section
              key={i}
              className="p-2 flex flex-col gap-4 bg-white bg-opacity-90 mt-[60vh] 2xl:max-w-xl w-full"
            >
              <BriefWeather weather={w.current} location={w.location} />
              <Hourly hourly={w.forecast.forecastday[0].hour} />
            </section>
          ) : (
            <section
              key={i}
              className="p-2 lg:p-4 flex flex-col gap-4 bg-white bg-opacity-90 2xl:mt-[60vh] 2xl:max-w-xl mt-0 w-full"
            >
              <BriefWeather
                weather={w.forecast.forecastday[i].day}
                location={w.location}
                date={w.forecast.forecastday[i].date}
              />
              <Hourly hourly={w.forecast.forecastday[i].hour} />
            </section>
          )
        )}
      </main>
      <footer>
        <a href="https://www.flaticon.com/free-icons/humidity" title="humidity icons">
          Humidity icons created by Pixel perfect - Flaticon
        </a>
        <a href="https://www.flaticon.com/free-icons/degrees" title="degrees icons">
          Degrees icons created by Smashicons - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/atmospheric"
          title="atmospheric icons"
        >
          Atmospheric icons created by afif fudin - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/cloud-computing"
          title="cloud computing icons"
        >
          Cloud computing icons created by Pixel perfect - Flaticon
        </a>
      </footer>
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
