import { AppHeader, AppMain } from '@/components'
import { ForecastAPI } from '@/types'

export const ForecastPage = ({ w }: { w: ForecastAPI }) => {

  return (
    <article className="flex flex-col gap-4 min-h-screen justify-between bg-cover bg-no-repeat backdrop-blur-lg bg-[url('https://cdnb.artstation.com/p/assets/images/images/043/834/111/large/zareta-forestsunnyfinishedbig.jpg?1638377432')]">
      <AppHeader title={w.location.name} />
      <AppMain w={w} />
      <div />
    </article>
  )
}
