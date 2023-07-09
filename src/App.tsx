import { IconShare } from '@/assets/icons/share'

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
          <section className="pb-5 pt-9 px-8">
            <h1 className="font-bold leading-6 tracking-[0.0125rem]">
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h1>
            <p className="font-medium leading-5 mt-3 text-[0.8125rem] text-grey-light tracking-[0.0075rem]">
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips to
              help you make any room feel complete.
            </p>
          </section>
          <footer className="flex gap-5 items-center pb-5 pt-3 px-8">
            <picture className="block h-10 w-10">
              <img
                src="profile.png"
                className="h-full w-full"
                alt="Profile picture for Michelle Appleton"
              />
            </picture>
            <section className="">
              <p className="font-bold leading-5 text-[0.8125rem] tracking-[0.0075rem]">
                Michelle Appleton
              </p>
              <p className="font-medium leading-5 text-[0.8125rem] text-grey-very-light tracking-[0.0075rem]">
                28 Jun 2020
              </p>
            </section>
            <section className="ml-auto">
              <button className="bg-default flex h-8 items-center rounded-full text-grey-light w-8">
                <IconShare />
                <span className="sr-only">Share article</span>
              </button>
            </section>
          </footer>
        </article>
      </main>

      <Attribution />
    </>
  )
}
