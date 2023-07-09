/*
|-------------------------------------------------------------------------------
| Component
|-------------------------------------------------------------------------------
*/

export function ArticleCardHeader() {
  return (
    <header className="flex-shrink-0 h-[12.5rem] overflow-hidden rounded-t-[0.625rem] md:h-[17.8125rem] md:rounded-bl-[0.625rem] md:rounded-tr-none md:w-[17.5rem]">
      <picture>
        <img
          src="banner.jpg"
          className="h-full object-cover w-full"
          alt="Article banner"
        />
      </picture>
    </header>
  )
}
