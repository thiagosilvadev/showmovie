import tmdb from '@/lib/tmdb'

const Home = () => {
  const { movies, tvshows } = tmdb()
  movies.loadPopular(1).then((movies) => {
    console.log(movies)
  })
  tvshows.loadPopular(1).then((tvshows) => {
    console.log(tvshows)
  })
}

export default Home
