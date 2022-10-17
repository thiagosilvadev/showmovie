import tmdb from '@/lib/tmdb'
import { TMDBCredits } from '@/lib/tmdb/models/TMDBMovie'
import { TMDBTvShowDetail } from '@/lib/tmdb/models/TMDBTvShow'
import { useQuery } from '@tanstack/react-query'

const { tvshows } = tmdb()

export const keys = {
  DETAIL: 'tvShowDetail',
  CREDITS: 'tvShowCredits'
} as const

export type TvDetailResult = {
  detail: {
    data: TMDBTvShowDetail | undefined
    isLoading: boolean
    isError: boolean
  }
  credits: {
    data: TMDBCredits | undefined
    isLoading: boolean
    isError: boolean
  }
}

export const useTvDetail = (tvShowId?: number): TvDetailResult => {
  const detail = useQuery(
    [keys.DETAIL, tvShowId],
    async () => await tvshows.loadDetails(tvShowId!),
    {
      enabled: !!tvShowId
    }
  )
  const credits = useQuery(
    [keys.CREDITS, tvShowId],
    async () => await tvshows.loadCredits(tvShowId!),
    {
      enabled: !!tvShowId
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
