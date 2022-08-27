import { useQuery } from '@tanstack/react-query'

import tmdb from '@/lib/tmdb'
import { TMDBMovie } from '@/lib/tmdb/models/TMDBMovie'
import { TMDBTvShow } from '@/lib/tmdb/models/TMDBTvShow'
import { CardProps } from '@/components/card'

type MovieAndTV = TMDBMovie | TMDBTvShow

function moviesOrTvToCard(content: MovieAndTV[]): CardProps[] {
  return content.map((item) => {
    if (item instanceof TMDBMovie) {
      return {
        title: item.title,
        link: `/movie/${item.id}`,
        poster: item.getPoster('w500'),
        rating: item.vote_average
      }
    } else {
      return {
        title: item.name,
        link: `/tv/${item.id}`,
        poster: item.getPoster('w500'),
        rating: item.vote_average
      }
    }
  })
}
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
  data: MoviesAndTv | undefined
): CardProps[] | undefined {
  if (!data) return
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

const useMovieAndTvQuery = (fetchMode: FetchMode): MovieAndTvQueryResult => {
  const { data, isLoading } = useQuery(['moviesAndTv'], fetchMovieAndTv, {
    refetchOnWindowFocus: false,
    cacheTime: 60 * 60
  })

  return {
    isLoading,
    data: getMoviesAndTvList(fetchMode, data)
  }
}

export { useMovieAndTvQuery }
