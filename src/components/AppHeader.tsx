import { ReactComponent as Tornado } from '@/assets/icons/tornado.svg'
import { ReactComponent as Location } from '@/assets/icons/location.svg'
import { Link } from 'react-router-dom'

export const AppHeader = ({ title }: { title: string }) => {
  return (
    <header className="p-6 flex gap-4 w-full">
      <div className="flex grow gap-2 items-center">
        <Link to="/" className="w-10">
          <Tornado />
        </Link>
        <h1 className="hidden md:block text-2xl font-bold uppercase tracking-wide">Cyclone</h1>
        <div className="pl-20 flex gap-2 grow justify-end">
          <div className="w-6">
            <Location />
          </div>
          <p className="text-gray-600">
            Weather in{' '}
            <Link to="/search" className="text-black text-bold">
              {title}
            </Link>
          </p>
        </div>
      </div>
    </header>
  )
}
