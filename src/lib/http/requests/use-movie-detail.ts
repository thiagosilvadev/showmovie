import tmdb from '@/lib/tmdb'
import { TMDBCredits, TMDBMovieDetail } from '@/lib/tmdb/models/TMDBMovie'
import { useQuery } from '@tanstack/react-query'

export type MovieDetail = {
  detail: {
    data: TMDBMovieDetail | undefined
    isLoading: boolean
    isError?: boolean | undefined
  }
  credits: {
    data: TMDBCredits | undefined
    isLoading: boolean
    isError?: boolean | undefined
  }
}

const { movies } = tmdb()

export const useMovieDetail = (movieId?: number): MovieDetail => {
  const detail = useQuery(
    ['movieDetail', movieId],
    async () => await movies.loadDetails(movieId!),
    {
      enabled: !!movieId
    }
  )
  const credits = useQuery(
    ['movieCredits', movieId],
    async () => await movies.loadCredits(movieId!),
    {
      enabled: !!movieId
    }
  )
  return {
    detail: {
      data: detail.data,
      isLoading: detail.isLoading,
      isError: detail.isError
    },
    credits: {
      data: credits.data,
      isLoading: credits.isLoading,
      isError: credits.isError
    }
  }
}
