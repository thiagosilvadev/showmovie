import tmdb from '@/lib/tmdb'
import { TvShowLayout } from '@/templates/tv'

export const revalidate = 'force-cache'

type PageProps = {
  params: {
    id: number
  }
}

const { tvshows } = tmdb()
export default async function Page({ params }: PageProps) {
  const [details, credits] = await Promise.all([
    tvshows.loadDetails(params.id),
    tvshows.loadCredits(params.id)
  ])
  return <TvShowLayout credits={credits} detail={details} />
}
