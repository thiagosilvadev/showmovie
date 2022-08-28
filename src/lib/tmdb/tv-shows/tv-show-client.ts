import { HttpClient } from '@/infra/protocols/http/HttpClient'
import ResultList from '../models/TMDBResultList'
import { TMDBTvShow, TvShow } from '../models/TMDBTvShow'
import { Fetcher } from '../utils/fetcher'

export class TvShowClient extends Fetcher {
  constructor(private readonly httpClient: HttpClient) {
    super()
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
