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

  const cast = credits.data.cast ? credits.data.cast.slice(0, 15) : []

  const directors = credits.data.crew.filter((crew) => crew.job == 'Director')
  const writers = credits.data.crew.filter((crew) => crew.job == 'Writer')

  return (
    <>
      <Navbar />
      <main className="container">
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
              <Page.Detail
                title="Duração"
                content={`${movie.runtime} minutos`}
              />
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
      </main>
      <Footer />
    </>
  )
}

export { MovieLayout }
