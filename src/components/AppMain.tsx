import { ForecastAPI } from '@/types'
import Carousel from 'react-multi-carousel'
import { WeatherCard } from './WeatherCard'
import 'react-multi-carousel/lib/styles.css'

export const AppMain = ({ w }: { w: ForecastAPI }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 1024, min: 0 },
      items: 1,
    },
  }

  return (
    <main className="px-2 md:px-8">
      <Carousel responsive={responsive}>
        {w.forecast.forecastday.map((e, i) =>
          i === 0 ? (
            <div key={i} className="px-2 h-full">
              <WeatherCard cur={w.current} loc={w.location} forecast={e} />
            </div>
          ) : (
            <div key={i} className="px-2 h-full">
              <WeatherCard forecast={e} />
            </div>
          )
        )}
      </Carousel>
    </main>
  )
}
