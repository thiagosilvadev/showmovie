import * as Page from '@/components/page'
import { Backdrop } from '@/components/backdrop'
import Poster from '@/components/poster'
import Link from 'next/link'
import { TMDBTvShowDetail } from '@/lib/tmdb/models/TMDBTvShow'
import { CastSkeleton, CastTemplate } from './cast'
import { Suspense } from 'react'

type TvShowLayoutProps = {
  detail: TMDBTvShowDetail
}

export async function TvShowLayout({ detail: tvshow }: TvShowLayoutProps) {
  const seasons = tvshow.seasons.filter(
    (season) => season.air_date && season.season_number != 0
  )

  return (
    <>
      <Backdrop src={tvshow.getBackdrop('w1280')!} alt={tvshow.name} />

      <div className="page__info_wrapper">
        <aside className="h-full">
          <Poster
            title={tvshow.name}
            src={tvshow.getPoster('w780')!}
            alt={tvshow.name}
          />
        </aside>
        <div>
          <div className="page__detail_wrapper">
            <h3 className="page__tagline">{tvshow.tagline}</h3>
            <p className="page__bio">{tvshow.overview}</p>
            <div className="page__detail_grid">
              <Page.Detail title="Status" content={tvshow.status} />
              <Page.Detail
                title="Temporadas"
                content={String(tvshow.number_of_seasons)}
                columns={6}
              />
              <Page.Detail
                title="Episódios"
                content={tvshow.number_of_episodes.toString()}
                columns={6}
              />
              <Page.Detail
                title="Duração dos episódios"
                content={`${tvshow.episode_run_time}m`}
                columns={6}
              />
              <Page.Detail
                title="Ano de Lançamento"
                content={`${new Date(tvshow.first_air_date).getFullYear()}`}
                columns={6}
              />
              <Page.Detail
                title="Gêneros"
                content={tvshow.genres.map(({ name }) => name).join(', ')}
                columns={6}
              />

              <Page.Detail
                title="Criação"
                content={tvshow.created_by.map(({ name }) => name).join(', ')}
              />
            </div>
            <h2 className="mt-20 mb-5 ml-4 section_title">Temporadas</h2>
            <div className="flex flex-col gap-5">
              {seasons.map((season) => (
                <div
                  key={season.id}
                  className="flex items-center justify-between w-full px-5 py-4 rounded-lg bg-dark-800/80 backdrop-blur-xl"
                >
                  <div>
                    <h5 className="text-2xl font-bold tracking-tigher">
                      {season.name}
                    </h5>
                    <span className="text-[12px] font-bold tracking-wider uppercase font-auxiliar text-dark-200">
                      {new Date(season.air_date).getFullYear()} |{' '}
                      {season.episode_count} episódio
                      {season.episode_count > 1 && 's'}
                    </span>
                  </div>
                  <Link
                    href={`/tv/${tvshow.id}/season/${season.season_number}`}
                    passHref
                    className="text-[12px] font-bold tracking-wider uppercase font-auxiliar text-primary-500 hover:text-primary-300"
                  >
                    ver episódios
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Suspense fallback={<CastSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <CastTemplate tvShowId={tvshow.id} />
      </Suspense>
    </>
  )
}
