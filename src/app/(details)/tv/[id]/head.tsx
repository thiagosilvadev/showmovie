import DefaultTags from '@/app/default-head-tags'
import tmdb from '@/lib/tmdb'
import { PageProps } from './page'

export default async function Head({ params }: PageProps) {
  const tvshow = await tmdb().tvshows.loadDetails(params.id)
  return (
    <>
      <title>{`${tvshow.name} | ShowMovie`}</title>
      <DefaultTags />
    </>
  )
}
