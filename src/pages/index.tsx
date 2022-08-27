import { HomeLayout } from '@/templates/home'
import { FetchMode, useMovieAndTvQuery } from '@/templates/home/hooks'
import { useState } from 'react'
const categories = [
  {
    label: 'Todos',
    value: 'both'
  },
  {
    label: 'Filmes',
    value: 'movies'
  },
  {
    label: 'Séries',
    value: 'tvshows'
  }
]

const Home = () => {
  const [category, setCategory] = useState<FetchMode>('both')
  const { data: moviesAndTv, isLoading } = useMovieAndTvQuery(category)
  return (
    <HomeLayout
      isLoading={isLoading}
      content={moviesAndTv!}
      category={category}
      categoryValues={categories}
      onSelectCategory={(category) => setCategory(category)}
    />
  )
}

export default Home
