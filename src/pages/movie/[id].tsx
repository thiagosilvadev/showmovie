import tmdb from '@/lib/tmdb'
import { MovieLayout } from '@/templates/movie'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'

const { movies } = tmdb()
export default function Movie() {
  const router = useRouter()
  const { id } = router.query
  const { data, isLoading, error } = useQuery(
    ['movieDetail', id],
    async () => await movies.loadDetails(Number(id!))
  )
  const credits = useQuery(
    ['movieCredits', id],
    async () => await movies.loadCredits(Number(id!))
  )

  return (
    <MovieLayout
      movie={data}
      credits={credits.data}
      isLoading={isLoading}
      error={!!error}
    />
  )
}
