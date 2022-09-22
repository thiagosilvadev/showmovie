import { Backdrop } from '@/components/backdrop'
import Cast from '@/components/cast'

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import Poster from '@/components/poster'
import { MovieDetail } from '@/lib/http/requests'

import * as S from './styles'

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
      <S.Container>
        <Backdrop
          src={movie.getBackdrop('original')!}
          alt={movie.title}
          placeholder={isLoading}
        />
        <S.InfoWrapper>
          <Poster
            title={movie.title}
            src={movie.getPoster('original')!}
            alt={movie.title}
            placeholder={isLoading}
          />

          <S.DetailWrapper>
            <S.Tagline>{movie.tagline}</S.Tagline>
            <S.Bio>{movie.overview}</S.Bio>

            <S.Detail>
              <S.DetailTitle>Lançamento</S.DetailTitle>
              <S.DetailContent>
                {new Date(movie.release_date).toLocaleDateString()}
              </S.DetailContent>
            </S.Detail>
            <S.Detail>
              <S.DetailTitle>Gêneros</S.DetailTitle>
              <S.DetailContent>
                {movie.genres.map((g) => g.name).join(', ')}
              </S.DetailContent>
            </S.Detail>
            <S.Detail>
              <S.DetailTitle>Duração</S.DetailTitle>
              <S.DetailContent>{movie.runtime} minutos</S.DetailContent>
            </S.Detail>
            <S.Detail>
              <S.DetailTitle>Direção</S.DetailTitle>
              <S.DetailContent>
                {directors?.map((director) => director.name).join(', ')}
              </S.DetailContent>
            </S.Detail>
            <S.Detail>
              <S.DetailTitle>Roteiro</S.DetailTitle>
              <S.DetailContent>
                {writers?.map((writer) => writer.name).join(', ')}
              </S.DetailContent>
            </S.Detail>
          </S.DetailWrapper>
        </S.InfoWrapper>
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
      </S.Container>
      <Footer />
    </>
  )
}

export { MovieLayout }
