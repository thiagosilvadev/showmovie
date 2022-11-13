import { TvDetailResult } from '@/lib/http/requests/use-tv-detail'

import { Navbar } from '@/components/navbar'
import * as Page from '@/components/page'
import { Backdrop } from '@/components/backdrop'
import Poster from '@/components/poster'
import Cast from '@/components/cast'
import { Season } from '@/components/season'
import { Footer } from '@/components/footer'

type TvShowLayoutProps = TvDetailResult

export function TvShowLayout({ detail, credits }: TvShowLayoutProps) {
  if (!detail.data || !credits.data) return <div>carregando...</div>

  const tvshow = detail.data

  const cast = credits.data.cast ? credits.data.cast.slice(0, 15) : []

  const lastSeason = tvshow.seasons[tvshow.seasons.length - 1]

  return (
    <>
      <Navbar />
      <main className="container">
        <Backdrop src={tvshow.getBackdrop('w1280')!} alt={tvshow.name} />

        <div className="page__info_wrapper">
          <Poster
            title={tvshow.name}
            src={tvshow.getPoster('w780')!}
            alt={tvshow.name}
          />

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
          </div>
        </div>
        <div className="flex items-center gap-6 mb-7">
          <Cast.Title>Temporada atual</Cast.Title>
          <a
            className="mt-1 text-sm font-bold leading-none tracking-wide uppercase text-primary-500 opacity-80 hover:opacity-100 font-auxiliar"
            href={`${tvshow.id}/seasons`}
          >
            Ver todas
          </a>
        </div>

        <Season
          episode_count={lastSeason.episode_count}
          id={lastSeason.id}
          tvshow_id={tvshow.id}
          name={lastSeason.name}
          overview={
            lastSeason.overview == ''
              ? `
            A ${lastSeason.season_number}ª temporada de ${
                  tvshow.name
                } começou a ser exibida em ${new Date(
                  lastSeason.air_date
                ).toLocaleDateString()}
          `
              : lastSeason.overview
          }
          poster={lastSeason.poster_path}
          year={new Date(lastSeason.air_date).getFullYear().toString()}
        />

        <Cast.Title className="mt-8">Elenco Principal</Cast.Title>
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
