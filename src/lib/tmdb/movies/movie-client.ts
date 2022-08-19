import { UnexpectedError, UnauthorizedError } from '@/errors'
import {
  HttpClient,
  HttpResponse,
  HttpStatusCode
} from '@/infra/protocols/http/HttpClient'
import { Movie, TMDBMovie } from '../models/TMDBMovie'
import ResultList from '../models/TMDBResultList'

export class MovieClient {
  constructor(private readonly httpClient: HttpClient) {}

  private handleResponse<T = any, R = any>(
    response: HttpResponse<T>,
    responseMapper: (body: HttpResponse<T>['body']) => R
  ): R {
    switch (response.statusCode) {
      case HttpStatusCode.ok:
        return responseMapper(response.body!)
        break
      case HttpStatusCode.unauthorized:
        throw new UnauthorizedError()
      default:
        throw new UnexpectedError()
        break
    }
  }

  async loadPopular(page = 1): Promise<ResultList<TMDBMovie>> {
    const response = await this.httpClient.request<ResultList<Movie>>({
      method: 'get',
      url: '/movie/popular',
      params: {
        page
      }
    })

    const data = this.handleResponse(response, (body) => ({
      ...body!,
      results: body!.results.map((movie) => new TMDBMovie(movie))
    }))

    return data
  }

  async loadTopRated(page = 1): Promise<ResultList<TMDBMovie>> {
    const response = await this.httpClient.request<ResultList<Movie>>({
      method: 'get',
      url: '/movie/top_rated',
      params: {
        page
      }
    })

    const data = this.handleResponse(response, (body) => ({
      ...body!,
      results: body!.results.map((movie) => new TMDBMovie(movie))
    }))

    return data
  }
}