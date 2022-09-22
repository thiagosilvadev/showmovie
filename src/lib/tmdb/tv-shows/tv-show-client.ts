import { HttpClient } from '@/infra/protocols/http/HttpClient'
import { TMDBCredits } from '../models/TMDBMovie'
import ResultList from '../models/TMDBResultList'
import {
  TMDBTvShow,
  TMDBTvShowDetail,
  TvShow,
  TvShowDetail
} from '../models/TMDBTvShow'
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

  async loadDetails(tvshowId: number): Promise<TMDBTvShowDetail> {
    const response = await this.httpClient.request<TvShowDetail>({
      method: 'get',
      url: `tv/${tvshowId}`
    })

    return this.handleResponse(
      response,
      (tvshow) => new TMDBTvShowDetail(tvshow!)
    )
  }

  async loadCredits(tvshowId: number): Promise<TMDBCredits> {
    const response = await this.httpClient.request<TMDBCredits>({
      method: 'get',
      url: `tv/${tvshowId}/credits`
    })

    return this.handleResponse(response, (credits) => credits!)
  }
}
