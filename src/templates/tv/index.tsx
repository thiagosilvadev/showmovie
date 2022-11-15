import { TvDetailResult } from '@/lib/http/requests/use-tv-detail'

import { Navbar } from '@/components/navbar'
import * as Page from '@/components/page'
import { Backdrop } from '@/components/backdrop'
import Poster from '@/components/poster'
import Cast from '@/components/cast'
import { Season } from '@/components/season'
import { Footer } from '@/components/footer'
import Link from 'next/link'

type TvShowLayoutProps = TvDetailResult

export function TvShowLayout({ detail, credits }: TvShowLayoutProps) {
  if (!detail.data || !credits.data) return <div>carregando...</div>

  const tvshow = detail.data

  const cast = credits.data.cast ? credits.data.cast.slice(0, 15) : []

  const seasons = tvshow.seasons.filter(
    (season) => season.air_date && season.season_number != 0
  )

  return (
    <>
      <Navbar />
      <main className="container">
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
                      href={`${tvshow.id}/season/${season.id}`}
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
        <Cast.Title className="mt-12">Elenco Principal</Cast.Title>
        <Cast.List>
          {cast.slice(0, 15).map((actor) => (
            <Cast.Item
              key={actor.id}
              avatar={actor.profile_path}
              name={actor.name}
              character={actor.character}
            />
          ))}
        </Cast.List>
      </main>
      <Footer />
    </>
  )
}
