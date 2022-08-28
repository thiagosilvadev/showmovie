import { CardProps } from '@/components/card'
import { TMDBMovie } from '@/lib/tmdb/models/TMDBMovie'
import { TMDBTvShow } from '@/lib/tmdb/models/TMDBTvShow'

function moviesOrTvToCard(content: Array<TMDBMovie | TMDBTvShow>): CardProps[] {
  return content.map((item) => {
    if (item instanceof TMDBMovie) {
      return {
        title: item.title,
        link: `/movie/${item.id}`,
        poster: item.getPoster('w500'),
        rating: item.vote_average
      }
    } else {
      return {
        title: item.name,
        link: `/tv/${item.id}`,
        poster: item.getPoster('w500'),
        rating: item.vote_average
      }
    }
  })
}

export { moviesOrTvToCard }
