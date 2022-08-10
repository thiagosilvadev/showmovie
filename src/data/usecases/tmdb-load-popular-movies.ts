import { HttpClient, HttpStatusCode } from '@/data/protocols/http/HttpClient'
import { UnexpectedError } from '@/domain/errors'
import UnauthorizedError from '@/domain/errors/unauthorized-error'
import { LoadPopularMovies } from '@/domain/usecases'
import { TMDBMovie } from '../models/TMDBMovie'

export type TMDBResponse = {
  page: number
  results: {
    poster_path: string | null
    id: number
    title: string
    vote_average: number
  }[]
  total_results: number
  total_pages: number
}

export class TMDBLoadPopularMovies implements LoadPopularMovies {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) {}
  async load(
    params: LoadPopularMovies.Params
  ): Promise<LoadPopularMovies.Result> {
    const response = await this.httpClient.request<TMDBResponse>({
      method: 'post',
      url: this.url,
      params
    })

    switch (response.statusCode) {
      case HttpStatusCode.ok:
        console.log(response)
        return {
          page: response.body!.page,
          totalPages: response.body!.total_pages,
          data: response.body!.results.map(
            (movie) =>
              new TMDBMovie({
                id: movie.id,
                rating: movie.vote_average,
                title: movie.title,
                poster: movie.poster_path
              })
          )
        }
        break
      case HttpStatusCode.unauthorized:
        throw new UnauthorizedError()
      default:
        throw new UnexpectedError()
        break
    }
  }
}
