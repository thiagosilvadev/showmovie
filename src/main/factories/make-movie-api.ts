import { HttpClient } from 'data/protocols/http/HttpClient'
import { TMDBLoadPopularMovies } from 'data/use-cases/movies/load-popular'
import { makeHttpClient } from './make-http-client'

export class MovieApi {
  constructor(private readonly httpClient: HttpClient) {}

  loadPopular(page: number) {
    const tmdbPopularMovies = new TMDBLoadPopularMovies(this.httpClient)

    return tmdbPopularMovies.load(page)
  }
}

export function makeMovieApi(): MovieApi {
  return new MovieApi(makeHttpClient())
}
