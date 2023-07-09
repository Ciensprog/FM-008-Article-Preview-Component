import { ArticleCard } from '@/components/article-card/ArticleCard'
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
        <ArticleCard />
      </main>

      <Attribution />
    </>
  )
}
