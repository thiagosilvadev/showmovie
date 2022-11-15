import { useMemo, useState } from 'react'
import { useDebounce } from '@/hooks'
import { HomeLayout } from '@/templates/home'
import {
  FetchMode,
  useMovieAndTvQuery,
  useMovieAndTVSearch
} from '@/lib/http/requests'
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

  const isLoading = useMemo(
    () => (debouncedQuery ? search.isLoading : moviesAndTv.isLoading),
    [debouncedQuery, moviesAndTv, search]
  )

  const content = useMemo(
    () => (debouncedQuery ? search.data : moviesAndTv.data),
    [debouncedQuery, moviesAndTv, search]
  )

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
