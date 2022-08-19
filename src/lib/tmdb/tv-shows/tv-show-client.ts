import { UnexpectedError, UnauthorizedError } from '@/errors'
import {
  HttpClient,
  HttpResponse,
  HttpStatusCode
} from '@/infra/protocols/http/HttpClient'
import ResultList from '../models/TMDBResultList'
import { TMDBTvShow, TvShow } from '../models/TMDBTvShow'

export class TvShowClient {
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

  async loadPopular(page = 1): Promise<ResultList<TMDBTvShow>> {
    const response = await this.httpClient.request<ResultList<TvShow>>({
      method: 'get',
      url: '/tv/popular',
      params: {
        page
      }
    })

    const data = this.handleResponse(response, (body) => ({
      ...body!,
      results: body!.results.map((tvshow) => new TMDBTvShow(tvshow))
    }))

    return data
  }

  async loadTopRated(page = 1): Promise<ResultList<TMDBTvShow>> {
    const response = await this.httpClient.request<ResultList<TvShow>>({
      method: 'get',
      url: '/tv/top_rated',
      params: {
        page
      }
    })

    const data = this.handleResponse(response, (body) => ({
      ...body!,
      results: body!.results.map((tvshow) => new TMDBTvShow(tvshow))
    }))

    return data
  }
}
