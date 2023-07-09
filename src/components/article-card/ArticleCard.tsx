import { ArticleCardFooter } from './ArticleCardFooter'
import { ArticleCardHeader } from './ArticleCardHeader'
import { ArticleCardInformation } from './ArticleCardInformation'

/*
|-------------------------------------------------------------------------------
| Component
|-------------------------------------------------------------------------------
*/

export function ArticleCard() {
  return (
    <article className="bg-white max-w-[20.4375rem] rounded-[0.625rem] shadow-[0_40px_40px_-10px_rgba(201_213_225_/_0.50)] w-full z-10 md:flex md:max-w-[45.625rem]">
      <ArticleCardHeader />
      <div className="md:flex md:flex-col md:px-2">
        <ArticleCardInformation />
        <ArticleCardFooter />
      </div>
    </article>
  )
}
