import tmdb from '@/lib/tmdb'
import { TvShowLayout } from '@/templates/tv'

export type PageProps = {
  params: {
    id: number
  }
}

const { tvshows } = tmdb()
export default async function Page({ params }: PageProps) {
  const details = await tvshows.loadDetails(params.id)

  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <TvShowLayout detail={details} />
    </>
  )
}
