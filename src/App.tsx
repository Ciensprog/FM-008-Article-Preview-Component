import { Attribution } from '@/components/Attribution'

/*
|-------------------------------------------------------------------------------
| Component
|-------------------------------------------------------------------------------
*/

export function App() {
  return (
    <>
      <main className="my-10 z-10">
        <article className="bg-white max-w-[20.4375rem] rounded-[0.625rem] shadow-[0_40px_40px_-10px_rgba(201_213_225_/_0.50)] w-full">
          <header className="overflow-hidden rounded-t-[0.625rem]">
            <picture className="">
              <img src="banner.jpg" alt="Article banner" />
            </picture>
          </header>
          <section className="pb-8 pt-9 px-8">
            <h1 className="font-bold leading-6 tracking-[0.0125rem]">
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h1>
          </section>
        </article>
      </main>

      <Attribution />
    </>
  )
}
