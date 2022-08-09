import { HttpClient, HttpStatusCode } from '@/data/protocols/http/HttpClient'
import { UnexpectedError } from '@/domain/errors'
import UnauthorizedError from '@/domain/errors/unauthorized-error'
import { LoadPopularMovies } from '@/domain/usecases'

export class TMDBLoadPopularMovies implements LoadPopularMovies {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) {}
  async load(
    params: LoadPopularMovies.Params
  ): Promise<LoadPopularMovies.Result> {
    const response = await this.httpClient.request({
      method: 'post',
      url: this.url,
      params
    })

    switch (response.statusCode) {
      case HttpStatusCode.ok:
        return response.body
        break
      case HttpStatusCode.unauthorized:
        throw new UnauthorizedError()
      default:
        throw new UnexpectedError()
        break
    }
  }
}
