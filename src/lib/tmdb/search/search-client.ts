import { HttpClient } from '@/infra/protocols/http/HttpClient'
import { Movie, TMDBMovie } from '../models/TMDBMovie'
import ResultList from '../models/TMDBResultList'
import { TMDBTvShow, TvShow } from '../models/TMDBTvShow'
import { Fetcher } from '../utils/fetcher'

export class SearchClient extends Fetcher {
  constructor(private readonly httpClient: HttpClient) {
    super()
  }
  async all(query: string) {
    const response = await this.httpClient.request<ResultList<any>>({
      method: 'get',
      url: '/search/multi',
      params: {
        query
      }
    })

    const data = this.handleResponse(response, (body) => ({
      ...body!,
      results: body!.results
        .filter((result) => result.media_type !== 'person')
        .map((result) => {
          switch (result.media_type) {
            case 'tv':
              return new TMDBTvShow(result)
            case 'movie':
              return new TMDBMovie(result)
            default:
              return new TMDBMovie(result)
          }
        })
    }))

    return data
  }
  async movies(query: string) {
    const response = await this.httpClient.request<ResultList<Movie>>({
      method: 'get',
      url: '/search/movie',
      params: {
        query
      }
    })

    const data = this.handleResponse(response, (body) => ({
      ...body!,
      results: body!.results.map((movie) => new TMDBMovie(movie))
    }))

    return data
  }

  async tvshows(query: string) {
    const response = await this.httpClient.request<ResultList<TvShow>>({
      method: 'get',
      url: '/search/tv',
      params: {
        query
      }
    })

    const data = this.handleResponse(response, (body) => ({
      ...body!,
      results: body!.results.map((tvshow) => new TMDBTvShow(tvshow))
    }))

    return data
  }
}
