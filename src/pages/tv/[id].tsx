import { useTvDetail } from '@/lib/http/requests/use-tv-detail'
import { TvShowLayout } from '@/templates/tv'
import { useRouter } from 'next/router'

export default function TvShow() {
  const router = useRouter()
  const { id } = router.query
  const tvShowId = id ? Number(id) : undefined

  const response = useTvDetail(tvShowId)

  return <TvShowLayout {...response} />
}
