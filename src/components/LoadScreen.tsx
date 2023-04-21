import { LoadIcon } from './LoadIcon'
import { LOAD_SIZE } from '@/types'

export const LoadScreen = () => {
  return (
    <section className="h-screen w-full items-center flex bg-gradient-to-br from-blue-100 via-slate-50 to-blue-100">
      <div className="flex flex-col gap-8 items-center justify-center w-full">
        <LoadIcon size={LOAD_SIZE.LARGE} />
        <h1 className="text-2xl font-bold uppercase tracking-wider">Loading...</h1>
      </div>
    </section>
  )
}
