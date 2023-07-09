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
    <article className="bg-white max-w-[20.4375rem] rounded-[0.625rem] shadow-[0_40px_40px_-10px_rgba(201_213_225_/_0.50)] w-full">
      <ArticleCardHeader />
      <ArticleCardInformation />
      <ArticleCardFooter />
    </article>
  )
}
