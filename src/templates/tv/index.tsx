import { TvDetailResult } from '@/lib/http/requests/use-tv-detail'

import { Navbar } from '@/components/navbar'
import * as Page from '@/components/page'
import { Backdrop } from '@/components/backdrop'
import Poster from '@/components/poster'
import Cast from '@/components/cast'
import { Season } from '@/components/season'

type TvShowLayoutProps = TvDetailResult

export function TvShowLayout({ detail, credits }: TvShowLayoutProps) {
  if (!detail.data || !credits.data) return <div>carregando...</div>

  const tvshow = detail.data

  const isLoading = detail.isLoading || credits.isLoading

  const cast = credits.data.cast ? credits.data.cast.slice(0, 15) : []

  const lastSeason = tvshow.seasons[tvshow.seasons.length - 1]

  return (
    <>
      <Navbar />
      <Page.Container>
        <Backdrop
          src={tvshow.getBackdrop('w1280')!}
          alt={tvshow.name}
          placeholder={isLoading}
        />

        <Page.InfoWrapper>
          <Poster
            title={tvshow.name}
            // @ts-ignore
            src={tvshow.getPoster('w780')!}
            alt={tvshow.name}
            placeholder={isLoading}
          />

          <Page.DetailWrapper>
            <Page.Tagline>{tvshow.tagline}</Page.Tagline>
            <Page.Bio>{tvshow.overview}</Page.Bio>
            <Page.DetailGrid>
              <Page.Detail>
                <Page.DetailTitle>Status</Page.DetailTitle>
                <Page.DetailContent>{tvshow.status}</Page.DetailContent>
              </Page.Detail>
              <Page.Detail columns={6}>
                <Page.DetailTitle>Temporadas</Page.DetailTitle>
                <Page.DetailContent>
                  {tvshow.number_of_seasons}
                </Page.DetailContent>
              </Page.Detail>
              <Page.Detail columns={6}>
                <Page.DetailTitle>Episódios</Page.DetailTitle>
                <Page.DetailContent>
                  {tvshow.number_of_episodes}
                </Page.DetailContent>
              </Page.Detail>
              <Page.Detail columns={6}>
                <Page.DetailTitle>Duração dos episódios</Page.DetailTitle>
                <Page.DetailContent>
                  {tvshow.episode_run_time}m
                </Page.DetailContent>
              </Page.Detail>
              <Page.Detail columns={6}>
                <Page.DetailTitle>Ano de Lançamento</Page.DetailTitle>
                <Page.DetailContent>
                  {new Date(tvshow.first_air_date).getFullYear()}
                </Page.DetailContent>
              </Page.Detail>
              <Page.Detail>
                <Page.DetailTitle>Gêneros</Page.DetailTitle>
                <Page.DetailContent>
                  {tvshow.genres.map(({ name }) => name).join(', ')}
                </Page.DetailContent>
              </Page.Detail>
              <Page.Detail>
                <Page.DetailTitle>Criação</Page.DetailTitle>
                <Page.DetailContent>
                  {tvshow.created_by.map(({ name }) => name).join(', ')}
                </Page.DetailContent>
              </Page.Detail>
            </Page.DetailGrid>
          </Page.DetailWrapper>
        </Page.InfoWrapper>
        <Cast.Title style={{ marginBottom: '2.8rem' }}>
          Temporada atual
        </Cast.Title>

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

        <Cast.Title style={{ marginTop: '3.2rem' }}>
          Elenco Principal
        </Cast.Title>
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
      </Page.Container>
    </>
  )
}
