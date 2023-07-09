import { IconShare } from '@/assets/icons/share'

/*
|-------------------------------------------------------------------------------
| Component
|-------------------------------------------------------------------------------
*/

export function ArticleCardFooter() {
  return (
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
        <button className="bg-default flex h-8 items-center overflow-hidden rounded-full text-grey-light w-8">
          <IconShare />
          <span className="sr-only">Share article</span>
        </button>
      </section>
    </footer>
  )
}
