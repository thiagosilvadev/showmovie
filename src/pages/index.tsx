import { makeMovieApi } from 'main/factories/make-movie-api'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    makeMovieApi()
      .loadPopular(1)
      .then((data) => console.log(data))
  }, [])
  return <h2>teste</h2>
}

export default Home
