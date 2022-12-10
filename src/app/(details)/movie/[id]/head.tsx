import DefaultTags from '@/app/default-head-tags'
import tmdb from '@/lib/tmdb'
import { PageProps } from './page'

export default async function Head({ params }: PageProps) {
  const { title } = await tmdb().movies.loadDetails(params.id)
  return (
    <>
      <title>{`${title} | ShowMovie`}</title>
      <DefaultTags />
    </>
  )
}
