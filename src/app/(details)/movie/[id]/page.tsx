import tmdb from '@/lib/tmdb'
import { MovieLayout } from '@/templates/movie'

export const revalidate = 0

export type PageProps = {
  params: {
    id: number
  }
}

const { movies } = tmdb()

export default async function Page({ params }: PageProps) {
  const [movie, credits] = await Promise.all([
    movies.loadDetails(params.id),
    movies.loadCredits(params.id)
  ])

  return <MovieLayout credits={credits} detail={movie} />
}
