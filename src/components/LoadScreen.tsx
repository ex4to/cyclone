import { ReactComponent as Tornado } from '@/assets/icons/tornado.svg'

export const LoadScreen = () => {
  return (
    <section className="h-screen w-full items-center flex bg-gradient-to-br from-blue-100 via-slate-50 to-blue-100">
      <div className="flex flex-col gap-8 items-center justify-center w-full">
        <div className="w-20 animate-bounce">
          <Tornado />
        </div>
        <h1 className="text-2xl font-bold uppercase tracking-wider">Loading...</h1>
      </div>
    </section>
  )
}
