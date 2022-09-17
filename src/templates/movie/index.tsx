import { Backdrop } from '@/components/backdrop'
import Cast from '@/components/cast'

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { TMDBMovieCredits, TMDBMovieDetail } from '@/lib/tmdb/models/TMDBMovie'

import * as S from './styles'

type MovieLayoutProps = {
  movie: TMDBMovieDetail | undefined
  isLoading: boolean
  error: boolean
  credits: TMDBMovieCredits | undefined
}

const MovieLayout = ({ movie, isLoading, credits }: MovieLayoutProps) => {
  if (!movie || !credits || isLoading) return <div>carregando...</div>

  const directors = credits?.crew.filter((crew) => crew.job == 'Director')
  const writers = credits?.crew.filter((crew) => crew.job == 'Writer')

  return (
    <>
      <Navbar />
      <S.Container>
        <Backdrop src={movie.getBackdrop('original')!} alt={movie.title} />
        <S.InfoWrapper>
          <S.PosterWrapper>
            <S.TitleBox>
              <S.Title>{movie.title}</S.Title>
            </S.TitleBox>
            <S.Poster
              src={movie.getPoster('original')!}
              width={486}
              height={730}
              objectFit="cover"
            />
          </S.PosterWrapper>
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
          {credits.cast.slice(0, 15).map((actor) => (
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
