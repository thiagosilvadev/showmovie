import { CardProps } from '@/components/card'
import tmdb from '@/lib/tmdb'
import { TMDBMovie } from '@/lib/tmdb/models/TMDBMovie'
import { TMDBTvShow } from '@/lib/tmdb/models/TMDBTvShow'
import { HomeLayout } from '@/templates/home'
import { useEffect, useState } from 'react'

type MovieAndTV = TMDBMovie | TMDBTvShow

function moviesOrTvToCard(content: MovieAndTV[]): CardProps[] {
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

const Home = () => {
  const [moviesAndTv, setMoviesAndTv] = useState<MovieAndTV[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = async () => {
    const client = tmdb()
    try {
      setIsLoading(true)

      const [movies, tvshows] = await Promise.all([
        client.movies.loadPopular(1),
        client.tvshows.loadPopular(1)
      ])

      const contentList = [...movies.results, ...tvshows.results].sort(
        () => Math.random() - 0.5
      )

      setMoviesAndTv(contentList)
    } catch (e) {
      console.log(e)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <HomeLayout isLoading={isLoading} content={moviesOrTvToCard(moviesAndTv)} />
  )
}

export default Home
