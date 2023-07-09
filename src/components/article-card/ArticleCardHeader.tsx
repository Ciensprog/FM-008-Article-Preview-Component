/*
|-------------------------------------------------------------------------------
| Component
|-------------------------------------------------------------------------------
*/

export function ArticleCardHeader() {
  return (
    <header className="h-[10.5rem] overflow-hidden rounded-t-[0.625rem]">
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
