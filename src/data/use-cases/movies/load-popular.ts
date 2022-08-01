import { Movie } from 'data/models/movie'
import { HttpClient, HttpStatusCode } from 'data/protocols/http/HttpClient'
import {
  LoadPopularMovies,
  LoadPopularMoviesResult
} from 'domain/usecases/movies'

export class TMDBLoadPopularMovies implements LoadPopularMovies {
  constructor(
    private readonly httpClient: HttpClient<LoadPopularMoviesResult<Movie>>
  ) {}
  async load(page: number): Promise<LoadPopularMoviesResult<Movie>> {
    const response = await this.httpClient.request({
      method: 'get',
      url: '/movie/popular',
      params: {
        page,
        language: 'en-us'
      }
    })
    switch (response.statusCode) {
      case HttpStatusCode.ok:
        return response.body!
      case HttpStatusCode.forbidden:
        throw new Error()
      default:
        throw new Error()
    }
  }
}
