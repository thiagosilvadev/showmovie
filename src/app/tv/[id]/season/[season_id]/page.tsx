import { Episode } from '@/components/episode'
import tmdb from '@/lib/tmdb'
import Image from 'next/image'

export const revalidate = 'force-cache'
type PageProps = {
  params: {
    id: number
    season_id: number
  }
}

export default async function Page({ params }: PageProps) {
  const season = await tmdb().tvshows.loadSeason(params.id, params.season_id)

  return (
    <main className="container">
      <div className="flex gap-8">
        <Image
          src={`http://image.tmdb.org/t/p/w780${season.poster_path}`}
          alt={season.name}
          className="sticky rounded-lg w-80 -top-6"
          width={280}
          height={420}
          placeholder="blur"
          blurDataURL={
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNU0LA7AwACSgFUIVqaPAAAAABJRU5ErkJggg=='
          }
        />
        <div>
          <h2 className="text-4xl font-bold tracking-tight">{season.name}</h2>
          <span className="mt-3 text-base font-bold">
            {new Date(season.air_date).getFullYear()} | {season.episodes.length}{' '}
            episódios
          </span>
          <p className="max-w-3xl mt-8 text-base leading-relaxed text-dark-100 font-secondary">
            {season.overview}
          </p>
        </div>
      </div>

      <div className="flex flex-col flex-shrink-0 gap-5 mt-8">
        {season.episodes.map((episode) => (
          <Episode
            key={episode.id}
            episode={{
              name: episode.name,
              airDate: new Date(episode.air_date),
              image_path: `http://image.tmdb.org/t/p/w780${episode.still_path}`,
              overview: episode.overview,
              rating: episode.vote_average,
              seasonEpisode: `T${season.season_number
                .toString()
                .padStart(2, '0')}E${episode.episode_number
                .toString()
                .padStart(2, '0')}`
            }}
          />
        ))}
      </div>
    </main>
  )
}
