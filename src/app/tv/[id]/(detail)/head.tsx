import tmdb from '@/lib/tmdb'
import { PageProps } from './page'

export default async function Head({ params }: PageProps) {
  const { name } = await tmdb().tvshows.loadDetails(params.id)
  return <title>{name} | ShowMovie</title>
}
