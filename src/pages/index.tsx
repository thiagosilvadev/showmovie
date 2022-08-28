import { useDebounce } from '@/hooks'
import { HomeLayout } from '@/templates/home'
import { FetchMode, useMovieAndTvQuery } from '@/templates/home/hooks'
import { useMovieAndTVSearch } from '@/templates/home/hooks/use-movie-and-tv-search'
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
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query)
  const moviesAndTv = useMovieAndTvQuery(category, debouncedQuery !== '')

  const search = useMovieAndTVSearch(debouncedQuery, category)

  const isLoading = debouncedQuery ? search.isLoading : moviesAndTv.isLoading

  const content = debouncedQuery ? search.data : moviesAndTv.data

  return (
    <HomeLayout
      isLoading={isLoading}
      content={content!}
      category={category}
      categoryValues={categories}
      onSelectCategory={(category) => setCategory(category)}
      searchValue={query}
      onSearchValueChange={(value) => setQuery(value)}
    />
  )
}

export default Home
