import { useMovieDetail } from '@/lib/http/requests'

import { MovieLayout } from '@/templates/movie'
import { useRouter } from 'next/router'

export default function Movie() {
  const router = useRouter()
  const { id } = router.query
  const movieId = id ? Number(id) : undefined
  const request = useMovieDetail(movieId)

  return <MovieLayout {...request} />
}
