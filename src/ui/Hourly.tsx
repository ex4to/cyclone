import { ReactComponent as Tornado } from '@/assets/icons/tornado.svg'

export const Hourly = () => {
  return (
    <article className="max-w-2xl mx-auto">
      <p className="border-b py-2">Hourly</p>
      <section className="flex gap-8 items-start scroll-smooth scroll-hide w-full overflow-scroll rounded pr-2 py-4">
        <div className="flex flex-col gap-2 items-center">
          <div className="w-10">
            <Tornado />
          </div>
          <p>XX:XX</p>
          <p>+XX°</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className="w-10">
            <Tornado />
          </div>
          <p>XX:XX</p>
          <p>+XX°</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className="w-10">
            <Tornado />
          </div>
          <p>XX:XX</p>
          <p>+XX°</p>
        </div>
      </section>
    </article>
  )
}
