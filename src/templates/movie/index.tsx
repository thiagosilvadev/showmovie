import { Backdrop } from '@/components/backdrop'
import Cast from '@/components/cast'

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import Poster from '@/components/poster'
import { MovieDetail } from '@/lib/http/requests'

import * as Page from '@/components/page'

type MovieLayoutProps = MovieDetail

const MovieLayout = ({ detail, credits }: MovieLayoutProps) => {
  if (!detail.data || !credits.data) return <div>carregando...</div>

  const movie = detail.data

  const isLoading = detail.isLoading || credits.isLoading

  const cast = credits.data.cast ? credits.data.cast.slice(0, 15) : []

  const directors = credits.data.crew.filter((crew) => crew.job == 'Director')
  const writers = credits.data.crew.filter((crew) => crew.job == 'Writer')

  return (
    <>
      <Navbar />
      <Page.Container>
        <Backdrop
          src={movie.getBackdrop('original')!}
          alt={movie.title}
          placeholder={isLoading}
        />
        <Page.InfoWrapper>
          <Poster
            title={movie.title}
            src={movie.getPoster('original')!}
            alt={movie.title}
            placeholder={isLoading}
          />

          <Page.DetailWrapper>
            <Page.Tagline>{movie.tagline}</Page.Tagline>
            <Page.Bio>{movie.overview}</Page.Bio>

            <Page.Detail>
              <Page.DetailTitle>Lançamento</Page.DetailTitle>
              <Page.DetailContent>
                {new Date(movie.release_date).toLocaleDateString()}
              </Page.DetailContent>
            </Page.Detail>
            <Page.Detail>
              <Page.DetailTitle>Gêneros</Page.DetailTitle>
              <Page.DetailContent>
                {movie.genres.map(({ name }) => name).join(', ')}
              </Page.DetailContent>
            </Page.Detail>
            <Page.Detail>
              <Page.DetailTitle>Duração</Page.DetailTitle>
              <Page.DetailContent>{movie.runtime} minutos</Page.DetailContent>
            </Page.Detail>
            <Page.Detail>
              <Page.DetailTitle>Direção</Page.DetailTitle>
              <Page.DetailContent>
                {directors?.map((director) => director.name).join(', ')}
              </Page.DetailContent>
            </Page.Detail>
            <Page.Detail>
              <Page.DetailTitle>Roteiro</Page.DetailTitle>
              <Page.DetailContent>
                {writers?.map((writer) => writer.name).join(', ')}
              </Page.DetailContent>
            </Page.Detail>
          </Page.DetailWrapper>
        </Page.InfoWrapper>
        <Cast.Title>Elenco Principal</Cast.Title>
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
      <Footer />
    </>
  )
}

export { MovieLayout }
