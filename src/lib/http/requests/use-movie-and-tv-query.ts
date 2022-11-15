import { useQuery } from '@tanstack/react-query'

import tmdb from '@/lib/tmdb'
import { CardProps } from '@/components/card'
import { moviesOrTvToCard } from '@/utils/mappers'

export type FetchMode = 'both' | 'movies' | 'tvshows'

type MovieAndTvQueryResult = {
  isLoading: boolean
  data: CardProps[] | undefined
}

type MoviesAndTv = {
  movies: CardProps[]
  tvshows: CardProps[]
}
function getMoviesAndTvList(
  fetchMode: FetchMode,
  data: MoviesAndTv
): CardProps[] {
  if (fetchMode === 'both') {
    return [...data.movies, ...data.tvshows].sort(() => Math.random() - 0.5)
  } else {
    return data[fetchMode]
  }
}

const fetchMovieAndTv = async () => {
  const client = tmdb()
  const [movies, tvshows] = await Promise.all([
    client.movies.loadPopular(1),
    client.tvshows.loadPopular(1)
  ])

  return {
    movies: moviesOrTvToCard(movies.results),
    tvshows: moviesOrTvToCard(tvshows.results)
  }
}

const useMovieAndTvQuery = (
  fetchMode: FetchMode,
  isSearching: boolean
): MovieAndTvQueryResult => {
  const { data, isLoading } = useQuery(
    ['moviesAndTv', isSearching],
    async () => {
      const response = await fetchMovieAndTv()
      return getMoviesAndTvList(fetchMode, response)
    },
    {
      refetchOnWindowFocus: false,
      cacheTime: 60 * 60,
      enabled: !isSearching
    }
  )

  return {
    isLoading,
    data
  }
}

export { useMovieAndTvQuery }
