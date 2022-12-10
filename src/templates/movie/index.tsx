import { Backdrop } from '@/components/backdrop'
import Cast from '@/components/cast'

import Poster from '@/components/poster'

import * as Page from '@/components/page'
import { TMDBCredits, TMDBMovieDetail } from '@/lib/tmdb/models/TMDBMovie'

type MovieLayoutProps = {
  detail: TMDBMovieDetail
  credits: TMDBCredits
}

function MovieLayout({ detail: movie, credits }: MovieLayoutProps) {
  const cast = credits.cast.slice(0, 15)

  const directors = credits.crew.filter((crew) => crew.job == 'Director')
  const writers = credits.crew.filter((crew) => crew.job == 'Writer')

  return (
    <>
      <Backdrop src={movie.getBackdrop('original')!} alt={movie.title} />
      <div className="page__info_wrapper">
        <Poster
          title={movie.title}
          src={movie.getPoster('original')!}
          alt={movie.title}
        />

        <div className="page__detail_wrapper">
          <h3 className="page__tagline">{movie.tagline}</h3>
          <p className="page__bio">{movie.overview}</p>
          <div className="page__detail_grid">
            <Page.Detail
              title="Lançamento"
              content={new Date(movie.release_date).toLocaleDateString()}
            />
            <Page.Detail
              title="Gêneros"
              content={movie.genres.map(({ name }) => name).join(', ')}
            />
            <Page.Detail title="Duração" content={`${movie.runtime} minutos`} />
            <Page.Detail
              title="Direção"
              content={directors?.map((director) => director.name).join(', ')}
            />
            <Page.Detail
              title="Roteiro"
              content={writers?.map((writer) => writer.name).join(', ')}
            />
          </div>
        </div>
      </div>
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
    </>
  )
}

export { MovieLayout }
