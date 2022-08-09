import { HttpClient, HttpStatusCode } from '@/data/protocols/http/HttpClient'
import { UnexpectedError } from '@/domain/errors'
import UnauthorizedError from '@/domain/errors/unauthorized-error'
import { LoadPopularShows } from '@/domain/usecases'
import { TMDBTvShow } from '../models/TMDBTvShow'

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

export class TMDBLoadPopularShows implements LoadPopularShows {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) {}
  async load(
    params: LoadPopularShows.Params
  ): Promise<LoadPopularShows.Result> {
    const response = await this.httpClient.request<TMDBResponse>({
      method: 'post',
      url: this.url,
      params
    })

    switch (response.statusCode) {
      case HttpStatusCode.ok:
        return {
          page: response.body!.page,
          totalPages: response.body!.total_pages,
          data: response.body!.results.map(
            (show) =>
              new TMDBTvShow({
                id: show.id,
                rating: show.vote_average,
                title: show.title,
                poster: show.poster_path
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
