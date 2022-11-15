import tmdb from '@/lib/tmdb'
import { moviesOrTvToCard } from '@/utils/mappers'
import { useQuery } from '@tanstack/react-query'

const useMovieAndTVSearch = (
  query: string,
  fetchMode: 'both' | 'movies' | 'tvshows'
) => {
  const { data, isLoading, isFetching } = useQuery(
    ['moviesAndTv', query, fetchMode],
    async () => {
      const { search } = tmdb()
      const target = fetchMode === 'both' ? 'all' : fetchMode
      const data = await search[target](query)

      return moviesOrTvToCard(data.results)
    },
    {
      refetchOnWindowFocus: false,
      enabled: !!query
    }
  )

  return {
    data,
    isLoading,
    isFetching
  }
}

export { useMovieAndTVSearch }
